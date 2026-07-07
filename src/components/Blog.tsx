"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Category {
  title: string;
  slug: string;
  icon: React.ReactNode;
  description: string;
}

const categories: Category[] = [
  {
    title: "Daily Tech",
    slug: "daily-tech",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
    description:
      "Daily software engineering research briefs covering system design, algorithms, language internals, and emerging frameworks — from distributed systems to compiler optimisations.",
  },
  {
    title: "Daily Finance",
    slug: "daily-finance",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
        />
      </svg>
    ),
    description:
      "Daily quantitative finance research briefs covering derivatives pricing, market microstructure, statistical arbitrage, risk modelling, and machine learning strategies in financial markets.",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Latest Articles</span>
          </h2>
          <div className="w-20 h-1 bg-accent-primary rounded-full mb-4" />
          <p className="text-gray-400 mb-12 text-lg">
            Daily research briefs from my knowledge base
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <a
                href={`https://knowledge-base.worldofnoki.com/category/${category.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 md:p-8 hover-glow group block transition-all duration-300 hover:border-accent-primary/30 h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-glow">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-accent-glow transition-colors">
                    {category.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {category.description}
                </p>

                <div className="flex items-center gap-2 text-accent-glow text-sm font-medium">
                  Browse Articles
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Visit Knowledge Base */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://knowledge-base.worldofnoki.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-accent-primary/50 text-gray-400 hover:text-white transition-all duration-300 group"
          >
            Visit Knowledge Base
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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