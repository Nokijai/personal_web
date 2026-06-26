/**
 * POST /api/chat
 *
 * Streaming chat endpoint.
 *
 * Request body: { messages: [{ role, content }] }
 * Response:     text/event-stream (SSE)
 *   data: {"type":"delta","content":"…"}
 *   data: {"type":"done","content":""}
 *
 * The finance system prompt is automatically prepended.
 * The LLM provider is resolved from env (LLM_PROVIDER).
 */

import { NextRequest } from "next/server";
import * as Sentry from "@sentry/nextjs";
import { Logger } from "next-axiom";
import {
  getProvider,
  FINANCE_SYSTEM_PROMPT,
  type ChatMessage,
  type ChatRequest,
  type ChatStreamChunk,
} from "@/lib/llm";

// ── Config ─────────────────────────────────────────────────────

const MAX_MESSAGES = 50;
const MAX_CONTENT_LENGTH = 4000; // per message, chars
const ALLOWED_ROLES = new Set(["user", "assistant"]);

// ── Validation ─────────────────────────────────────────────────

function validateBody(body: unknown): ChatRequest {
  if (!body || typeof body !== "object") {
    throw new ValidationError("Request body must be a JSON object.");
  }

  const { messages } = body as Record<string, unknown>;

  if (!Array.isArray(messages) || messages.length === 0) {
    throw new ValidationError("`messages` must be a non-empty array.");
  }

  if (messages.length > MAX_MESSAGES) {
    throw new ValidationError(
      `Too many messages (max ${MAX_MESSAGES}).`,
    );
  }

  const validated: ChatMessage[] = [];

  for (const msg of messages) {
    if (!msg || typeof msg !== "object") {
      throw new ValidationError("Each message must be an object.");
    }

    const { role, content } = msg as Record<string, unknown>;

    if (typeof role !== "string" || !ALLOWED_ROLES.has(role)) {
      throw new ValidationError(
        `Invalid role "${String(role)}". Allowed: ${[...ALLOWED_ROLES].join(", ")}`,
      );
    }

    if (typeof content !== "string" || content.trim().length === 0) {
      throw new ValidationError("Message content must be a non-empty string.");
    }

    if (content.length > MAX_CONTENT_LENGTH) {
      throw new ValidationError(
        `Message content too long (max ${MAX_CONTENT_LENGTH} chars).`,
      );
    }

    validated.push({ role: role as ChatMessage["role"], content });
  }

  return { messages: validated };
}

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

// ── SSE helpers ────────────────────────────────────────────────

function sseEncode(chunk: ChatStreamChunk): string {
  return `data: ${JSON.stringify(chunk)}\n\n`;
}

// ── Route handler ──────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const log = new Logger({ source: "api/chat" });
  const startMs = Date.now();

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  // Parse & validate
  let body: ChatRequest;
  try {
    const raw = await req.json();
    body = validateBody(raw);
  } catch (err) {
    if (err instanceof ValidationError) {
      log.warn("Validation error", { ip, error: err.message });
      await log.flush();
      return Response.json({ error: err.message }, { status: 400 });
    }
    log.warn("Invalid JSON body", { ip });
    await log.flush();
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // Prepend system prompt
  const messages: ChatMessage[] = [
    { role: "system", content: FINANCE_SYSTEM_PROMPT },
    ...body.messages,
  ];

  // Create SSE stream
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const provider = getProvider();

        log.info("LLM stream started", {
          ip,
          messageCount: body.messages.length,
        });

        for await (const text of provider.streamChat(messages)) {
          const chunk: ChatStreamChunk = { type: "delta", content: text };
          controller.enqueue(encoder.encode(sseEncode(chunk)));
        }

        // Signal completion
        const done: ChatStreamChunk = { type: "done", content: "" };
        controller.enqueue(encoder.encode(sseEncode(done)));

        log.info("LLM stream completed", {
          ip,
          durationMs: Date.now() - startMs,
        });
      } catch (err) {
        const errorMsg =
          err instanceof Error ? err.message : "Unknown streaming error.";

        Sentry.captureException(err, {
          extra: { ip, messageCount: body.messages.length },
        });

        log.error("LLM stream error", {
          ip,
          error: errorMsg,
          durationMs: Date.now() - startMs,
        });

        const errChunk: ChatStreamChunk = {
          type: "done",
          content: `[Error: ${errorMsg}]`,
        };
        controller.enqueue(encoder.encode(sseEncode(errChunk)));
      } finally {
        await log.flush();
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no", // disable nginx buffering
    },
  });
}
