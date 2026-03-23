"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { education, activities } from "@/data/resume";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <span className="section-label">Education</span>
      <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-16 leading-tight">
        Academic
        <br />
        <span className="text-accent">background</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {education.map((school, i) => (
          <motion.div
            key={school.school}
            className="noura-card p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-2">{school.school}</h3>
            <p className="text-accent text-sm font-medium mb-4">
              {school.degree}
            </p>
            <div className="flex justify-between text-sm text-muted">
              <span>{school.dates}</span>
              <span>{school.location}</span>
            </div>
            {school.gpa && (
              <div className="mt-4 pt-4 border-t border-card-border">
                <span className="text-sm text-muted">GPA: </span>
                <span className="text-accent font-bold">{school.gpa}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-lg font-bold mb-6">
          Competitions & Activities
        </h3>
        <div className="flex flex-wrap gap-3">
          {activities.map((activity) => (
            <span
              key={activity}
              className="px-4 py-2.5 text-sm rounded-full border border-card-border text-muted hover:text-accent hover:border-accent/40 transition-all duration-300"
            >
              {activity}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
