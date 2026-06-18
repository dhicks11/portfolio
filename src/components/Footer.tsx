"use client";

import { personalInfo, navLinks } from "@/data/resume";

export default function Footer() {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--color-foreground)] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <a
              href="#"
              className="text-2xl font-bold tracking-tight text-white"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              aria-label="Back to top"
            >
              {personalInfo.name.split(" ")[0]}
              <span className="text-accent">.</span>
            </a>
            <p className="text-white/50 mt-4 text-sm leading-relaxed max-w-xs">
              Software Engineer & AI Developer building full-stack applications and AI-powered solutions.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">Navigation</p>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => handleClick(link.href)} className="text-left text-sm text-white/50 hover:text-white transition-colors min-h-[44px] w-fit">
                  {link.label}
                </button>
              ))}
              <a href="/services" className="text-sm text-white/50 hover:text-white transition-colors min-h-[44px] inline-flex items-center">Services</a>
            </nav>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">Connect</p>
            <div className="flex flex-col gap-2">
              <a href={`mailto:${personalInfo.email}`} className="text-sm text-white/50 hover:text-white transition-colors min-h-[44px] inline-flex items-center" aria-label={`Email ${personalInfo.email}`}>{personalInfo.email}</a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors min-h-[44px] inline-flex items-center" aria-label="GitHub">GitHub</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors min-h-[44px] inline-flex items-center" aria-label="LinkedIn">LinkedIn</a>
              <a href="https://calendly.com/daylenhicks10" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors min-h-[44px] inline-flex items-center" aria-label="Calendly">Schedule a Meeting</a>
              <a href="https://www.instagram.com/hicksdigital_/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors min-h-[44px] inline-flex items-center" aria-label="Instagram">Instagram</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/terms" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">Terms</a>
            <a href="/privacy" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">Privacy</a>
            <a href="/refund-policy" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">Refunds</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
