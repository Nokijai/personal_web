"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Skills />
      <Contact />
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5">
        <p>© 2026 Noki. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
