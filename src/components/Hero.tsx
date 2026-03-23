"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, highlights } from "@/data/resume";

const swapWords = ["Engineer", "Builder", "Creator", "Innovator"];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % swapWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[60%] h-[60%] opacity-[0.07] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, var(--color-accent), transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="section-label">Portfolio</span>
        </motion.div>

        <div className="mt-6 mb-8">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <span className="text-foreground">{personalInfo.name.split(" ")[0]}</span>
            <br />
            <span className="text-foreground">{personalInfo.name.split(" ")[1]}</span>
            <span className="text-muted mx-3">/</span>
            <span className="relative inline-block h-[1.1em] overflow-hidden align-bottom">
              <AnimatePresence mode="wait">
                <motion.span
                  key={swapWords[currentWord]}
                  className="inline-block text-accent"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {swapWords[currentWord]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>
        </div>

        <motion.p
          className="text-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-primary"
          >
            Download Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-pill btn-outline"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Stats — Bold outlined typography */}
        <motion.div
          className="grid grid-cols-3 gap-8 md:gap-12 mt-20 pt-10 border-t border-card-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          {highlights.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
            >
              {stat.glow && (
                <div
                  className="absolute inset-0 opacity-20 blur-[60px] rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, var(--color-accent), transparent)" }}
                />
              )}
              <p className="stat-number relative z-10">{stat.value}</p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted mt-2 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator — moved to right side */}
      <motion.div
        className="absolute bottom-8 right-8 md:right-12 lg:right-24"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 rounded-full border border-muted/30 flex justify-center pt-1.5">
          <div className="w-0.5 h-1.5 rounded-full bg-accent" />
        </div>
      </motion.div>
    </section>
  );
}
