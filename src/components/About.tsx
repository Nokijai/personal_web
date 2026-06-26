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
              I&apos;m a Computer Science student at{" "}
              <span className="text-white font-medium">
                The Chinese University of Hong Kong (CUHK)
              </span>
              , passionate about the intersection of{" "}
              <span className="text-accent-glow">quantitative finance</span> and{" "}
              <span className="text-accent-glow">artificial intelligence</span>.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I build systems that leverage machine learning and statistical methods
              to analyze markets, develop trading strategies, and solve complex
              engineering problems. My work spans from deep learning research to
              production-grade quantitative systems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I&apos;m not coding, you can find me exploring new AI papers,
              contributing to open-source projects, or tinkering with system
              architectures.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
