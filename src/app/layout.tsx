import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daylen Hicks | Software Engineer & AI Developer",
  description:
    "Portfolio of Daylen Hicks — Software Engineer, AI Developer, and CS student at NC A&T. Building full-stack apps and AI-powered solutions.",
  openGraph: {
    title: "Daylen Hicks | Software Engineer & AI Developer",
    description:
      "Portfolio of Daylen Hicks — Software Engineer, AI Developer, and CS student at NC A&T.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
