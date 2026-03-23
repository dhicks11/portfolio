import { personalInfo } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
          reserved.
        </p>
        <p>
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
