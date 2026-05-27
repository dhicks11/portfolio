"use client";

import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "@/data/resume";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <p className="section-label mb-4">About</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight">
            Crafting digital
            <br />
            experiences with
            <br />
            <span className="text-accent font-serif italic">purpose</span>
          </h2>
        </div>

        <div className="lg:pt-2">
          <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-6">
            {personalInfo.bio}
          </p>
          <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-8">
            I&apos;m currently pursuing a B.S. in Computer Science at NC A&amp;T
            with a 3.6 GPA, while building products and gaining industry
            experience through internships and AI engineering work.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Full-Stack Dev", "AI/ML", "Founder", "Consultant", "Hackathon Winner"].map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
