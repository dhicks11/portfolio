"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personalInfo, highlights } from "@/data/resume";

export default function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        About <span className="gradient-text">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-muted leading-relaxed text-lg mb-6">
            {personalInfo.bio}
          </p>
          <p className="text-muted leading-relaxed">
            I&apos;m currently pursuing a B.S. in Computer Science at NC A&amp;T
            with a 3.6 GPA, while building products and gaining industry
            experience through internships and freelance AI work. I thrive at
            the intersection of full-stack development and artificial
            intelligence.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              className="card-glow p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <p className="text-2xl font-bold gradient-text mb-1">
                {item.label}
              </p>
              <p className="text-sm text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
