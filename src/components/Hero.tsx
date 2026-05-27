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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Blue ombre background */}
      <div className="absolute inset-0 hero-gradient opacity-40" />
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to top, #FFFFFF, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="section-label mb-4">Portfolio</p>

            <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1] tracking-tight mb-8">
              {personalInfo.name.split(" ")[0]}
              <br />
              <span className="text-[var(--color-muted)]">{personalInfo.name.split(" ")[1]}</span>
              <br />
              <span
                className="relative inline-block h-[1.1em] overflow-hidden"
                style={{ verticalAlign: "-0.1em" }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={swapWords[currentWord]}
                    className="inline-block text-accent font-serif italic font-bold leading-[1.1]"
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

            <p className="text-[var(--color-muted)] text-lg md:text-xl max-w-lg leading-relaxed mb-8">
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
                Download CV
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-pill btn-outline"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Photo */}
          <div className="relative order-first lg:order-last w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[420px] aspect-[4/5]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden bg-[var(--color-surface)]">
                {!imageError ? (
                  <Image
                    src="/profile.jpg"
                    alt={`${personalInfo.name}, ${personalInfo.title}`}
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 420px"
                    className="object-cover object-top"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-[8rem] lg:text-[10rem] font-light text-[var(--color-accent)] opacity-20">
                      DH
                    </span>
                  </div>
                )}
              </div>
              {/* Decorative accent shape behind photo */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-accent opacity-20" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-10 md:gap-16 mt-16 md:mt-20">
          {highlights.map((stat) => (
            <div key={stat.label}>
              <p className="stat-number">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
