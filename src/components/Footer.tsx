"use client";

import { personalInfo, navLinks } from "@/data/resume";

export default function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <a
              href="#"
              className="text-2xl font-bold text-foreground tracking-tight"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {personalInfo.name.split(" ")[0]}
              <span className="text-accent">.</span>
            </a>
            <p className="text-muted mt-4 text-sm leading-relaxed max-w-xs">
              Software Engineer & AI Developer building full-stack applications
              and AI-powered solutions.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left text-sm text-muted hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-muted hover:text-accent transition-colors duration-300"
              >
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-accent transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-accent transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
          <p>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
