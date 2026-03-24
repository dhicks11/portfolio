import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://daylenhicks.com"),
  title: "Daylen Hicks | Software Engineer & AI Developer",
  description:
    "Portfolio of Daylen Hicks — Software Engineer, AI Developer, and CS student at NC A&T. Building full-stack apps and AI-powered solutions.",
  openGraph: {
    title: "Daylen Hicks | Software Engineer & AI Developer",
    description:
      "Portfolio of Daylen Hicks — Software Engineer, AI Developer, and CS student at NC A&T.",
    url: "https://daylenhicks.com",
    siteName: "Daylen Hicks",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Daylen Hicks — Software Engineer & AI Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0c",
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
    jobTitle: "Software Engineer & AI Developer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "North Carolina A&T State University",
    },
    sameAs: [
      "https://github.com/dhicks11",
      "https://linkedin.com/in/daylenhicks",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
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
      </body>
    </html>
  );
}
