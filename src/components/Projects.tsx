"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const featuredProjects = [
  {
    title: "CUHK Mock Fund League",
    description:
      "A competitive mock trading platform for CUHK students. Simulates real market conditions with portfolio tracking, performance analytics, and leaderboard rankings.",
    tags: ["Quantitative Finance", "Full-Stack", "Analytics"],
    github: "https://github.com/Nokijai/CUHK-Mock-Fund-League",
    featured: true,
  },
  {
    title: "Quant & SWE Knowledge Base",
    description:
      "A curated repository of quantitative finance and software engineering knowledge — covering algorithms, market microstructure, ML strategies, and system design patterns.",
    tags: ["Knowledge Base", "Quant", "AI/ML"],
    github: "https://github.com/Nokijai/Quant-and-SWE-knowledge-Base",
    live: "https://knowledge-base.worldofnoki.com",
    featured: true,
  },
];

// Temporarily hidden — other notable projects
// const otherProjects = [
//   {
//     title: "MTR Arrival Time Bot",
//     description: "Telegram bot showing real-time Hong Kong MTR arrival times.",
//     tags: ["Bot", "API", "Python"],
//     github: "https://github.com/Nokijai/mtr_arrivaltime_bot",
//   },
//   {
//     title: "CU Course Planner",
//     description: "Course planning tool for CUHK students.",
//     tags: ["Web App", "Education"],
//     github: "https://github.com/Nokijai/CU_Course_Planner",
//   },
//   {
//     title: "Real-Time Editor",
//     description: "Collaborative real-time code/text editor.",
//     tags: ["WebSocket", "Collaboration"],
//     github: "https://github.com/Nokijai/real_time_editor",
//   },
//   {
//     title: "GAN Human Image Generation",
//     description: "Generative adversarial network for human image synthesis.",
//     tags: ["Deep Learning", "GAN", "Computer Vision"],
//     github: "https://github.com/Nokijai/GAN_human_image_generation",
//   },
// ];

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: { title: string; description: string; tags: string[]; github: string; live?: string; featured?: boolean };
  index: number;
  featured?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`glass-card p-6 md:p-8 hover-glow group transition-all duration-300 hover:border-accent-primary/30 ${
        featured ? "md:col-span-1" : ""
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-accent-glow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
        </div>
        <div className="flex items-center gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs font-medium rounded-md bg-accent-primary/10 text-accent-glow border border-accent-primary/30 hover:bg-accent-primary/20 transition-all duration-200"
            >
              Visit Site ↗
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent-glow transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-glow transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-mono rounded-md bg-dark-600/50 text-gray-400 border border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent-primary rounded-full mb-4" />
          <p className="text-gray-400 mb-12 text-lg">
            Featured work from my GitHub
          </p>
        </motion.div>

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} featured />
          ))}
        </div>

        {/* Other projects — hidden while otherProjects is commented out */}
        {/* <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-xl font-semibold text-gray-300 mb-6"
        >
          Other Notable Projects
        </motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i + 2} />
          ))}
        </div> */}

        {/* View all on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Nokijai?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-accent-primary/50 text-gray-400 hover:text-white transition-all duration-300"
          >
            View All Repositories on GitHub
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
