"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/data/resume";

const sections = [{ label: "Home", href: "#hero" }, ...navLinks];

export default function SideNav() {
  const [active, setActive] = useState("#hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);

      const offsets = sections.map((s) => {
        const id = s.href.replace("#", "");
        const el =
          id === "hero"
            ? document.querySelector("section")
            : document.getElementById(id);
        if (!el) return { href: s.href, top: Infinity };
        return { href: s.href, top: el.getBoundingClientRect().top };
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

      if (current) setActive(current.href);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
    >
      {sections.map((section) => {
        const isActive = active === section.href;
        return (
          <button
            key={section.href}
            onClick={() => handleClick(section.href)}
            className="group flex items-center gap-3 cursor-pointer"
            aria-label={`Navigate to ${section.label}`}
          >
            <span
              className={`text-[10px] uppercase tracking-widest transition-all duration-300 ${
                isActive
                  ? "opacity-100 text-accent translate-x-0"
                  : "opacity-0 text-muted translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              {section.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "w-3 h-3 bg-accent"
                  : "w-2 h-2 bg-muted/40 group-hover:bg-accent/60"
              }`}
            />
          </button>
        );
      })}
    </motion.div>
  );
}
