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
        if (
          section.top <= 200 &&
          section.top > (closest?.top ?? -Infinity)
        ) {
          return section;
        }
        return closest;
      }, offsets[0]);

      setActiveSection(current?.href ?? "");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
        scrolled ? "border-b border-[var(--color-border)]" : ""
      }`}
      style={{
        background: "rgba(5, 8, 16, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-20">
        <a
          href="#"
          className="text-xl font-semibold text-foreground tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="Home"
        >
          {personalInfo.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-sm text-foreground relative py-2 min-h-[44px]"
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[var(--color-accent)]"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            );
          })}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-outline text-xs"
          >
            Resume
          </a>
          <a href="/services" className="btn-pill btn-ghost text-xs">
            Services
          </a>
          <a
            href="/links"
            className="text-sm text-[var(--color-muted)] hover:text-accent transition-colors duration-200 min-h-[44px] inline-flex items-center"
          >
            Quick Links
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 relative w-11 h-11 items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <motion.span
            className="absolute w-6 h-0.5 bg-foreground"
            animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute w-6 h-0.5 bg-foreground"
            animate={
              isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }
            }
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute w-6 h-0.5 bg-foreground"
            animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border-b border-[var(--color-border)]"
            style={{
              background: "rgba(5, 8, 16, 0.95)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    className={`text-left text-lg transition-colors min-h-[44px] ${
                      isActive
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-outline text-center mt-2"
              >
                Resume
              </a>
              <a href="/services" className="btn-pill btn-ghost text-center">
                Services
              </a>
              <a
                href="/links"
                className="text-lg text-[var(--color-muted)] hover:text-accent transition-colors min-h-[44px] inline-flex items-center"
              >
                Quick Links
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
