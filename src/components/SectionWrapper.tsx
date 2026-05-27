"use client";

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
    <section
      id={id}
      className={`py-20 md:py-28 ${fullWidth ? "" : "px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"} ${className}`}
    >
      {children}
    </section>
  );
}
