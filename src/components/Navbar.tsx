"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/data/resume";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-card-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-20">
        <a
          href="#"
          className="text-xl font-bold text-foreground tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {personalInfo.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm text-muted hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-primary text-xs"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 relative w-6 h-5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="absolute top-0 left-0 w-6 h-0.5 bg-foreground"
            animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute top-[9px] left-0 w-6 h-0.5 bg-foreground"
            animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute bottom-0 left-0 w-6 h-0.5 bg-foreground"
            animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-card-border"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left text-lg text-muted hover:text-accent transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-primary text-center mt-2"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
