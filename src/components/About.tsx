"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent-primary rounded-full mb-8" />

          <div className="glass-card p-8 md:p-12">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I&apos;m a Year 4 Computer Science student at CUHK (graduating July 2027) who lives at the intersection of quantitative finance and artificial intelligence.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I design and build production-grade systems that blend machine learning, statistical modeling, and financial engineering — from derivatives pricing engines with live volatility surfaces to AI-powered portfolio trackers and full-stack trading platforms.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My work spans deep learning research (GANs, LLMs, RAG pipelines), quantitative system architecture, and real-time data infrastructure. I&apos;ve shipped code as a GenAI Intern at HKMA, an AI Engineer at Agile Extreme Lab, and a SWE at Fortune IT.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I&apos;m not building, I&apos;m reading arXiv papers, contributing to open-source, or geeking out over market microstructure and derivatives modelling.
            </p>

            {/* Experience Timeline */}
            <h3 className="text-xl font-semibold gradient-text mb-6 mt-8">
              Experience
            </h3>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-accent-primary/30" />

              <div className="space-y-8">
                {[
                  {
                    id: 1,
                    role: "GenAI Intern",
                    company: "HKMA",
                    period: "2025 - Present",
                    description:
                      "Developing GenAI solutions (RAG, chatbots) on Dify platform and OutSystems O11. Building production AI pipelines for financial regulatory use cases.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                        />
                      </svg>
                    ),
                  },
                  {
                    id: 2,
                    role: "AI Engineer",
                    company: "Agile Extreme Lab",
                    period: "2025",
                    description:
                      "Worked on AI/ML projects including deep learning models, data pipelines, and intelligent system development.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                        />
                      </svg>
                    ),
                  },
                  {
                    id: 3,
                    role: "SWE",
                    company: "Fortune IT",
                    period: "2024 - 2025",
                    description:
                      "Built and maintained web applications, databases, and API integrations. Full-stack development with React, Node.js, and SQL.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                        />
                      </svg>
                    ),
                  },
                ].map((exp, i) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                    className="flex gap-5"
                  >
                    {/* Timeline dot */}
                    <div className="relative flex-shrink-0 flex items-start pt-1">
                      <div className="w-6 h-6 rounded-full bg-accent-glow flex items-center justify-center text-white">
                        {exp.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pb-2">
                      <h4 className="text-white font-semibold text-base">
                        {exp.role} @ {exp.company}
                      </h4>
                      <p className="text-gray-400 text-sm mb-1">{exp.period}</p>
                      <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}