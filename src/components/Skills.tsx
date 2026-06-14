"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "C/C++", "Java", "Rust", "SQL", "R"],
  },
  {
    title: "AI / ML",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "LLMs", "GANs", "NLP", "Dify", "LangChain", "n8n" ],
  },
  {
    title: "Quantitative",
    skills: ["Backtesting", "Statistical Analysis", "Risk Modeling", "Alpha Research", "Market Microstructure"],
  },
  {
    title: "Web / Infra",
    skills: ["React", "Next.js", "Node.js", "Docker", "Linux", "PostgreSQL"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Skills & Tools</span>
          </h2>
          <div className="w-20 h-1 bg-accent-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold text-accent-glow mb-4 font-mono">
                {`// ${category.title}`}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-dark-600/80 text-gray-300 border border-white/5 hover:border-accent-primary/30 hover:text-white transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
