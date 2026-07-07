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
          </div>
        </motion.div>
      </div>
    </section>
  );
}