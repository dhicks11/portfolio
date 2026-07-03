"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "@/data/resume";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
        <div>
          <div className="section-header">
            <span className="section-number">02</span>
            <span className="section-word">About</span>
          </div>
          <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl mt-6 mb-8 leading-[1.1]">
            Crafting digital
            <br />
            experiences with
            <br />
            <span className="text-accent font-serif italic">purpose</span>
          </h2>
          <p className="text-[var(--color-muted)] text-base leading-[1.75] max-w-md">
            A Computer Science student, founder, and AI consultant building at
            the intersection of technology and community.
          </p>
        </div>

        <div className="lg:pt-6">
          <motion.p
            className="text-foreground text-lg leading-[1.85] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {personalInfo.bio}
          </motion.p>
          <motion.p
            className="text-foreground text-lg leading-[1.85] mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I&apos;m currently pursuing a B.S. in Computer Science at NC A&amp;T
            with a 3.6 GPA, while building products and gaining industry
            experience through internships and AI engineering work.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              "Full-Stack Dev",
              "AI/ML",
              "Founder",
              "Consultant",
              "Hackathon Winner",
              "TMCF Innovation Fellow",
            ].map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
