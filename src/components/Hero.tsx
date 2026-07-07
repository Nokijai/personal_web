"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const WORDS = ["Quant Researcher", "AI Engineer", "Derivatives Trader"];
const TYPING_SPEED = 80;
const DELETING_SPEED = 50;
const PAUSE_AFTER_TYPING = 2000;
const PAUSE_AFTER_DELETING = 500;

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentWord = WORDS[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing phase
          if (charIndex < currentWord.length) {
            setDisplayText(currentWord.slice(0, charIndex + 1));
            setCharIndex((prev) => prev + 1);
          } else {
            // Finished typing — pause then start deleting
            setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING);
          }
        } else {
          // Deleting phase
          if (charIndex > 0) {
            setDisplayText(currentWord.slice(0, charIndex - 1));
            setCharIndex((prev) => prev - 1);
          } else {
            // Finished deleting — move to next word
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % WORDS.length);
          }
        }
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  // Show a blinking cursor during the PAUSE_AFTER_TYPING pause
  const showCursor =
    displayText.length === WORDS[wordIndex].length && !isDeleting;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 inline-block">
            <span className="px-4 py-1.5 rounded-full text-xs font-mono text-accent-glow bg-accent-primary/10 border border-accent-primary/20">
              Year 4 · CUHK · Available for opportunities
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Noki</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-4 font-light"
        >
          <span>{displayText}</span>
          <span
            className="inline-block w-[2px] h-[1em] ml-0.5 align-middle bg-accent-primary"
            style={{
              animation:
                showCursor || displayText.length === 0
                  ? "blink 0.8s step-end infinite"
                  : "none",
            }}
          />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg text-gray-400 mb-10 max-w-xl mx-auto"
        >
          Building at the intersection of machine intelligence and financial markets
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-accent-primary hover:bg-accent-secondary transition-all duration-300 text-white font-medium hover-glow"
            >
              View My Work
            </a>
            <a
              href="https://github.com/Nokijai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl border border-white/10 hover:border-accent-primary/50 transition-all duration-300 text-gray-300 hover:text-white font-medium"
            >
              GitHub Profile →
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/noki-lkchau/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://knowledge-base.worldofnoki.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent-primary transition-colors duration-200"
              aria-label="Knowledge Base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </a>
            <a
              href="https://github.com/Nokijai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}