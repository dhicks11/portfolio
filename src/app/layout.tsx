import type { Metadata, Viewport } from "next";
import AssistantWidget from "@/components/AssistantWidget";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://daylenhicks.com"),
  title: "Daylen Hicks | Software Engineer & AI Developer",
  description:
    "Portfolio of Daylen Hicks — Software Engineer, AI Developer, and CS student at NC A&T. Building full-stack apps and AI-powered solutions.",
  alternates: {
    canonical: "https://daylenhicks.com",
  },
  openGraph: {
    title: "Daylen Hicks | Software Engineer & AI Developer",
    description:
      "Portfolio of Daylen Hicks — Software Engineer, AI Developer, and CS student at NC A&T.",
    url: "https://daylenhicks.com",
    siteName: "Daylen Hicks",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daylen Hicks | Software Engineer & AI Developer",
    description:
      "Software Engineer, AI Developer, and CS student at NC A&T. Building full-stack apps and AI-powered solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A09",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daylen Hicks",
    url: "https://daylenhicks.com",
    image: "https://daylenhicks.com/profile.jpg",
    jobTitle: "Software Engineer & AI Developer",
    email: "hicksdigital.dev@gmail.com",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "North Carolina A&T State University",
    },
    award: [
      "1st Place & $10K Prize, TMCF × CSAA × Guidewire HBCU Innovation Challenge (2026)",
      "1st Place, Hack NCAT (2026)",
      "UNCF STEM Scholar (2026)",
    ],
    knowsAbout: [
      "Python", "Java", "JavaScript", "TypeScript",
      "React", "Next.js", "Node.js", "FastAPI",
      "AI", "Machine Learning", "LLM Evaluation", "RLHF",
      "Firebase", "Supabase", "AWS", "Docker",
    ],
    sameAs: [
      "https://github.com/dhicks11",
      "https://linkedin.com/in/daylenhicks",
      "https://tiktok.com/@trustyahwehh",
      "https://www.instagram.com/hicksdigital_/",
      "https://calendly.com/daylenhicks10",
    ],
  };

  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-background focus:rounded-md focus:font-semibold"
        >
          Skip to content
        </a>
        {children}
        <AssistantWidget />
      </body>
    </html>
  );
}
