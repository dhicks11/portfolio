"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/data/resume";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const offsets = navLinks.map((link) => {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (!el) return { href: link.href, top: Infinity };
        return { href: link.href, top: el.getBoundingClientRect().top };
      });
      const current = offsets.reduce((closest, section) => {
        if (section.top <= 200 && section.top > (closest?.top ?? -Infinity)) return section;
        return closest;
      }, offsets[0]);
      setActiveSection(current?.href ?? "");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "shadow-sm border-b border-[var(--color-border)]" : ""
      }`}
      style={{
        background: scrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-16 md:h-20">
        <a
          href="#"
          className="text-xl font-bold text-foreground tracking-tight"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          aria-label="Home"
        >
          {personalInfo.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`text-sm py-2 min-h-[44px] transition-colors ${
                  isActive ? "text-accent font-medium" : "text-[var(--color-muted)] hover:text-foreground"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </button>
            );
          })}
          <span className="w-px h-5 bg-[var(--color-border)]" aria-hidden="true" />
          <a href="/services" className="text-sm text-[var(--color-muted)] hover:text-foreground min-h-[44px] inline-flex items-center">
            Hicks Digital
          </a>
          <a href="/links" className="text-sm text-[var(--color-muted)] hover:text-foreground min-h-[44px] inline-flex items-center">
            Links
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-primary text-xs py-2"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 relative w-11 h-11 items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <motion.span className="absolute w-5 h-[1.5px] bg-foreground" animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }} transition={{ duration: 0.2 }} />
          <motion.span className="absolute w-5 h-[1.5px] bg-foreground" animate={isOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} />
          <motion.span className="absolute w-5 h-[1.5px] bg-foreground" animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }} transition={{ duration: 0.2 }} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border-b border-[var(--color-border)] bg-white"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left py-3 text-base text-[var(--color-muted)] hover:text-foreground min-h-[44px]"
                >
                  {link.label}
                </button>
              ))}
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-pill btn-primary text-center mt-2">Resume</a>
              <a href="/services" className="text-base text-[var(--color-muted)] hover:text-foreground py-3 min-h-[44px]">Services</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
