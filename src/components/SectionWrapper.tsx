"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  fullWidth?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`py-24 md:py-32 ${fullWidth ? "" : "px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"} ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
