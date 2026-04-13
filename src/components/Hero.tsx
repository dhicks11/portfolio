"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, highlights } from "@/data/resume";

const swapWords = ["Engineer", "Builder", "Creator", "Innovator"];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % swapWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-0 w-[60%] h-[60%] opacity-[0.06] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent), transparent)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 pt-28 md:pt-32 pb-12 md:pb-16">
        {/* Two-column editorial layout */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left — Text block with vertical accent stripe */}
          <div className="border-l-2 lg:border-l border-[var(--color-accent)] pl-5 lg:pl-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="section-header mb-6"
            >
              <span className="section-number">01</span>
              <span className="section-word">Portfolio</span>
            </motion.div>

            <motion.h1
              className="editorial-heading text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <span className="text-foreground">
                {personalInfo.name.split(" ")[0]}
              </span>
              <br />
              <span className="text-foreground">
                {personalInfo.name.split(" ")[1]}
              </span>
              <span className="text-[var(--color-hint)] mx-3 font-light">
                /
              </span>
              <span className="relative inline-block h-[1em] overflow-hidden align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={swapWords[currentWord]}
                    className="inline-block text-accent font-serif italic"
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

            <motion.p
              className="text-foreground text-lg md:text-xl max-w-xl leading-[1.75] mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            >
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-primary"
                aria-label="Download resume (PDF)"
              >
                Download Resume
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-pill btn-outline"
              >
                Get in Touch
              </button>
              <a
                href="https://calendly.com/daylenhicks10"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-ghost"
                aria-label="Book a call on Calendly"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book a Call
              </a>
            </motion.div>
          </div>

          {/* Right — Profile photo */}
          <motion.div
            className="relative order-first lg:order-last w-full flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[400px] aspect-[4/5]">
              {/* Photo with gradient mask that fades into background */}
              <div
                className="absolute inset-0"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom right, black 40%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to bottom right, black 40%, transparent 100%)",
                }}
              >
                {!imageError ? (
                  <Image
                    src="/profile.jpg"
                    alt={`${personalInfo.name}, ${personalInfo.title}`}
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 400px"
                    className="object-cover object-top"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-surface)] border border-[var(--color-border)]">
                    <span className="font-serif text-[8rem] lg:text-[10rem] font-light text-[var(--color-accent)] opacity-30">
                      DH
                    </span>
                  </div>
                )}
              </div>
              {/* Soft accent glow bottom-left */}
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 lg:w-32 lg:h-32 rounded-full opacity-40 blur-[60px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, var(--color-accent), transparent)",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats — each in its own card */}
        <motion.div
          className="grid grid-cols-3 gap-3 md:gap-5 mt-20 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          {highlights.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
            >
              <p className="stat-number">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
