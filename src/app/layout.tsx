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
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
