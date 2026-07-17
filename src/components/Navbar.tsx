"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/data/resume";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-[var(--color-border)]" : ""
      }`}
      style={{
        background: "rgba(12, 12, 14, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-20">
        <Link
          href="/"
          className="text-xl font-semibold text-foreground tracking-tight"
          aria-label="Home"
        >
          {personalInfo.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground relative py-2 min-h-[44px] inline-flex items-center"
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 bottom-1.5 h-[2px] bg-[var(--color-accent)]"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
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
          <Link href="/services" className="btn-pill btn-ghost text-xs">
            Services
          </Link>
          <Link
            href="/links"
            className="text-sm text-[var(--color-muted)] hover:text-accent transition-colors duration-200 min-h-[44px] inline-flex items-center"
          >
            Quick Links
          </Link>
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
              background: "rgba(12, 12, 14, 0.95)",
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
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block text-lg transition-colors min-h-[44px] leading-[44px] ${
                        isActive
                          ? "text-accent"
                          : "text-foreground hover:text-accent"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
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
              <Link
                href="/services"
                className="btn-pill btn-ghost text-center"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/links"
                className="text-lg text-[var(--color-muted)] hover:text-accent transition-colors min-h-[44px] inline-flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Quick Links
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
