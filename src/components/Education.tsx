"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { education, activities } from "@/data/resume";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        <span className="gradient-text">Education</span> & Activities
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {education.map((school, i) => (
          <motion.div
            key={school.school}
            className="card-glow p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-1">{school.school}</h3>
            <p className="text-accent text-sm font-medium mb-2">
              {school.degree}
            </p>
            <div className="flex justify-between text-sm text-muted">
              <span>{school.dates}</span>
              <span>{school.location}</span>
            </div>
            {school.gpa && (
              <p className="text-sm text-muted mt-2">GPA: {school.gpa}</p>
            )}
          </motion.div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Competitions & Activities
        </h3>
        <div className="flex flex-wrap gap-3">
          {activities.map((activity) => (
            <span
              key={activity}
              className="px-4 py-2 text-sm rounded-full bg-card border border-card-border text-muted hover:text-foreground hover:border-accent/40 transition-colors"
            >
              {activity}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
