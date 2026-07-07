"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SkillLevel = "expert" | "proficient" | "familiar";

interface Skill {
  name: string;
  level: SkillLevel;
}

const skillCategories: { title: string; skills: Skill[] }[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "C++", level: "proficient" },
      { name: "Java", level: "proficient" },
      { name: "Rust", level: "familiar" },
      { name: "SQL", level: "proficient" },
      { name: "Golang", level: "familiar" },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "PyTorch", level: "proficient" },
      { name: "TensorFlow", level: "proficient" },
      { name: "Scikit-learn", level: "expert" },
      { name: "LLMs & RAG", level: "expert" },
      { name: "GANs", level: "proficient" },
      { name: "NLP", level: "proficient" },
      { name: "LangChain", level: "proficient" },
    ],
  },
  {
    title: "Quantitative",
    skills: [
      { name: "Derivatives Pricing", level: "expert" },
      { name: "Options Greeks", level: "expert" },
      { name: "Monte Carlo Simulation", level: "expert" },
      { name: "Backtesting", level: "proficient" },
      { name: "Statistical Arbitrage", level: "proficient" },
      { name: "Risk Modeling", level: "proficient" },
      { name: "Alpha Research", level: "proficient" },
      { name: "Market Microstructure", level: "proficient" },
    ],
  },
  {
    title: "Web / Infra",
    skills: [
      { name: "React", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "FastAPI", level: "expert" },
      { name: "Node.js", level: "proficient" },
      { name: "Docker", level: "proficient" },
      { name: "Streamlit", level: "proficient" },
      { name: "Linux", level: "proficient" },
      { name: "PostgreSQL", level: "proficient" },
    ],
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
                {category.skills.map((skill) => {
                  const dotClass =
                    skill.level === "expert"
                      ? "bg-emerald-400"
                      : skill.level === "proficient"
                        ? "bg-blue-400"
                        : "border border-gray-500";
                  const textClass =
                    skill.level === "expert"
                      ? "text-white"
                      : "";
                  return (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 text-sm rounded-lg bg-dark-600/80 border border-white/5 hover:border-accent-primary/30 hover:text-white transition-all duration-200 flex items-center gap-1.5 ${textClass}`}
                    >
                      <span className={`inline-block w-2 h-2 rounded-full flex-shrink-0 ${dotClass}`} />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500"
        >
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400" />
            Expert
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-400" />
            Proficient
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full border border-gray-500" />
            Familiar
          </span>
        </motion.div>
      </div>
    </section>
  );
}