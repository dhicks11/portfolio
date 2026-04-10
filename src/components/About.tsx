"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "@/data/resume";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="section-label">About</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight">
            Crafting digital
            <br />
            experiences with
            <br />
            <span className="text-accent">purpose</span>
          </h2>
          <motion.div
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-card-border hover:border-accent transition-colors duration-500 group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none z-10"
              style={{ background: "radial-gradient(circle at center, var(--color-accent), transparent 70%)" }}
            />
            <Image
              src="/profile.jpg"
              alt={`${personalInfo.name} — ${personalInfo.title}`}
              fill
              sizes="(max-width: 768px) 192px, 224px"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        <div>
          <motion.p
            className="text-muted text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {personalInfo.bio}
          </motion.p>
          <motion.p
            className="text-muted text-lg leading-relaxed mb-8"
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
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {["Full-Stack Dev", "AI/ML", "Product Builder", "Hackathon Winner"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm rounded-full border border-card-border text-muted hover:border-accent hover:text-accent transition-colors duration-300"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
