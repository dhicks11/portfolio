"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full filter blur-[120px] opacity-15 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #ffffff, #d4d4d4)" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full filter blur-[120px] opacity-10 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #8b5cf6, #6366f1)" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          className="text-accent text-sm md:text-base font-medium mb-4 tracking-wider uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hey, I&apos;m
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          className="text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-medium hover:shadow-lg hover:shadow-accent/25 transition-all"
          >
            Download Resume
          </a>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-full border border-card-border text-foreground hover:border-accent/50 transition-all"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-muted/50" />
        </div>
      </motion.div>
    </section>
  );
}
