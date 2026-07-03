"use client";

import Link from "next/link";
import { personalInfo, navLinks } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <Link
              href="/"
              className="editorial-heading text-2xl text-foreground tracking-tight"
              aria-label="Home"
            >
              {personalInfo.name.split(" ")[0]}
              <span className="text-accent">.</span>
            </Link>
            <p className="text-[var(--color-muted)] mt-4 text-sm leading-[1.75] max-w-xs">
              Software Engineer & AI Developer building full-stack applications
              and AI-powered solutions.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">
              Navigation
            </p>
            <nav
              className="flex flex-col gap-3"
              aria-label="Footer navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-left text-sm text-[var(--color-muted)] hover:text-accent transition-colors duration-200 min-h-[44px] inline-flex items-center w-fit"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/services"
                className="text-sm text-[var(--color-muted)] hover:text-accent transition-colors duration-200 min-h-[44px] inline-flex items-center"
              >
                Services
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-[var(--color-muted)] hover:text-accent transition-colors duration-200 min-h-[44px] inline-flex items-center"
                aria-label={`Email ${personalInfo.email}`}
              >
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-muted)] hover:text-accent transition-colors duration-200 min-h-[44px] inline-flex items-center"
                aria-label="GitHub profile"
              >
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-muted)] hover:text-accent transition-colors duration-200 min-h-[44px] inline-flex items-center"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
              <a
                href="https://calendly.com/daylenhicks10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-muted)] hover:text-accent transition-colors duration-200 min-h-[44px] inline-flex items-center"
                aria-label="Schedule a meeting on Calendly"
              >
                Schedule a Meeting
              </a>
              <a
                href="https://tiktok.com/@trustyahwehh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-muted)] hover:text-accent transition-colors duration-200 min-h-[44px] inline-flex items-center"
                aria-label="TikTok profile @trustyahwehh"
              >
                TikTok
              </a>
              <a
                href="https://www.instagram.com/hicksdigital_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-muted)] hover:text-accent transition-colors duration-200 min-h-[44px] inline-flex items-center"
                aria-label="Instagram profile @hicksdigital_"
              >
                Instagram
              </a>
              <a
                href="/links"
                className="text-sm text-[var(--color-muted)] hover:text-accent transition-colors duration-200 min-h-[44px] inline-flex items-center"
              >
                Quick Links
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--color-muted)]">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="/terms"
              className="hover:text-accent transition-colors min-h-[44px] inline-flex items-center"
            >
              Terms
            </a>
            <a
              href="/privacy"
              className="hover:text-accent transition-colors min-h-[44px] inline-flex items-center"
            >
              Privacy
            </a>
            <a
              href="/refund-policy"
              className="hover:text-accent transition-colors min-h-[44px] inline-flex items-center"
            >
              Refunds
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
