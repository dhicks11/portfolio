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
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="section-label mb-6">Portfolio</p>

            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-8">
              <span>{personalInfo.name.split(" ")[0]}</span>
              <br />
              <span>{personalInfo.name.split(" ")[1]}</span>
              <span className="text-[var(--color-hint)] mx-3 font-light">/</span>
              <span
                className="relative inline-block h-[1.25em] overflow-hidden"
                style={{ verticalAlign: "-0.22em" }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={swapWords[currentWord]}
                    className="inline-block text-accent font-serif italic leading-[1.25] pr-[0.08em]"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {swapWords[currentWord]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-[var(--color-muted)] text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-primary"
                aria-label="Download resume (PDF)"
              >
                Resume
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
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
                Book a Call
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="relative order-first lg:order-last w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[400px] aspect-[4/5]">
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom right, black 40%, transparent 100%)",
                  maskImage: "linear-gradient(to bottom right, black 40%, transparent 100%)",
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
                  <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-surface)]">
                    <span className="font-serif text-[8rem] lg:text-[10rem] font-light text-[var(--color-hint)] opacity-30">
                      DH
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-8 md:gap-12 mt-16 md:mt-20">
          {highlights.map((stat) => (
            <div key={stat.label} className="stat-card">
              <p className="stat-number">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
