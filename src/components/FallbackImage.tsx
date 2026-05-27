"use client";

import { useState } from "react";

export default function FallbackImage({
  src,
  alt,
  className = "",
  fallbackClass = "bg-gradient-to-br from-accent/10 to-accent/5",
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackClass?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`${className} ${fallbackClass}`} aria-label={alt} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
