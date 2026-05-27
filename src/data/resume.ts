export const personalInfo = {
  name: "Daylen Hicks",
  title: "Software Engineer & AI Developer",
  email: "hicksdigital.dev@gmail.com",
  github: "https://github.com/dhicks11",
  linkedin: "https://linkedin.com/in/daylenhicks",
  bio: "I'm a Computer Science student with a minor in Supply Chain Management at North Carolina A&T State University, passionate about building full-stack applications and working with AI systems. From winning hackathons to founding two companies — a B2B sports platform and an AI consulting firm — I build products at the intersection of technology and community.",
  resumeUrl: "/Daylen_Hicks_Resume.pdf",
};

export const highlights = [
  { value: "1st", label: "Place Hackathon", glow: true },
  { value: "3.6", label: "GPA at NC A&T" },
  { value: "3", label: "Companies Founded" },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "Perl", "XML"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Node.js", "FastAPI"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "Jenkins", "Perforce (P4V)", "VS Code", "Vercel", "Supabase", "Docker", "Scrum", "Airtable"],
  },
  {
    category: "Libraries & Platforms",
    items: ["Firebase", "Streamlit", "NumPy", "Pandas", "Plotly", "Tableau", "Stripe", "AI Tools (Claude, Gemini, ChatGPT)"],
  },
  {
    category: "Cloud & Deployment",
    items: ["AWS (EC2, Amazon Bedrock)", "Firebase", "Vercel", "Google Cloud Platform", "Railway"],
  },
  {
    category: "AI & System Design",
    items: [
      "Responsible AI",
      "Human-in-the-Loop Systems",
      "LLM Evaluation & RLHF",
      "Prompt Engineering",
    ],
  },
];

export const experience = [
  {
    company: "JMP Statistical Discovery (SAS Institute)",
    role: "R&D DevOps Documentation Intern",
    location: "Cary, NC",
    dates: "May 2026 – Aug. 2026",
    tech: "Python, Perl, JavaScript, XML",
    bullets: [
      "Engineered a Python automation script to migrate 1,574 XML menu paths across 52 documentation files with zero failures, handling encoded characters, multiline elements, and whitespace edge cases as part of a FrameMaker-to-oXygen migration initiative",
      "Designed scalable project folder architecture separating BA and DOE dataset environments, resolving Windows/OneDrive file-lock conflicts and ensuring safe output isolation",
      "Implemented structured logging capturing file counts and conversion summary metrics to support validation and cross-team QA review",
    ],
  },
  {
    company: "I Got Next",
    role: "Founder & Lead Developer",
    location: "Remote",
    dates: "Jan. 2026 – Present",
    tech: "Next.js, TypeScript, React, Firebase, Stripe, Google Maps API, Airtable",
    bullets: [
      "Scaled a full-stack pickup basketball platform to 500+ active players and 120 courts across 3 cities; shipped 18 routes including player map, facility dashboard, admin panel, and public profiles",
      "Engineered B2B Stripe pipeline targeting YMCAs and parks & rec departments with 3 facility pricing tiers ($199–$699/mo) and a $5.99/mo player Pro tier; integrated Airtable for facility lead capture and CRM",
    ],
    liveUrl: "https://igotnextapp.vercel.app",
  },
  {
    company: "Hicks Digital",
    role: "Founder | Web Development, AI Consulting & Workshops",
    location: "Remote / Greensboro, NC",
    dates: "Jan. 2026 – Present",
    bullets: [
      "Delivered AI literacy workshop to 30+ students (Boys 2 Men, Roanoke Rapids, May 2026); drafted GoHighLevel automation proposal for GROW nonprofit serving Halifax County",
      "Executed 25+ cold outreach campaigns across 2 counties; secured paid brand partnerships and AI consulting engagements with local businesses",
    ],
    liveUrl: "https://daylenhicks.com/services",
  },
  {
    company: "North Carolina A&T State University — Aggie Suites F",
    role: "Resident Assistant",
    location: "Greensboro, NC",
    dates: "Jul. 2026 – Present",
    bullets: [
      "Incoming Resident Assistant responsible for well-being, academic success, and community development of residents in Aggie Suites F",
      "Planned programming includes an AI & Career Readiness Workshop Series and monthly community-building events to support resident engagement and retention",
    ],
  },
  {
    company: "Handshake",
    role: "LLM / Generative AI Engineer",
    location: "Remote",
    dates: "Feb. 2026 – Present",
    bullets: [
      "Benchmark output quality across 3 LLMs (Claude, Gemini, ChatGPT) using structured evaluation criteria, identifying performance gaps and selecting optimal models for production use cases",
      "Perform RLHF-style feedback by rating and ranking hundreds of model responses; clean and curate training datasets to reduce noise and improve pipeline accuracy",
    ],
  },
  {
    company: "Northampton County Schools",
    role: "Tech Leader & FRC Team Captain",
    location: "Gaston, NC",
    dates: "Aug. 2024 – May 2025",
    bullets: [
      "Chartered the school's inaugural FIRST Robotics Competition team (RoboJags), leading 10+ members to two Rookie All-Star awards, a state championship, and the FRC World Championship in Houston, TX; secured a NASA robotics grant and NC A&T sponsorship",
    ],
    articleUrl: "https://www.roanoke-chowannewsherald.com/news/northamptons-robojags-team-competes-in-world-championship-203047",
  },
];

interface Project {
  name: string;
  event: string;
  date: string;
  tech: string[];
  bullets: string[];
  liveUrl?: string;
  demoUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    name: "PitchPad",
    event: "1st Place, Hack NCAT",
    date: "Mar. 2026",
    tech: [
      "Next.js",
      "FastAPI",
      "GPT-4o",
      "Whisper",
      "Groq",
      "Supabase",
      "Vercel",
      "Railway",
    ],
    bullets: [
      "Built an AI-powered pitch practice platform as deployment & infrastructure lead; architected a Next.js/Vercel frontend and FastAPI/Railway backend serving real-time AI feedback for the Lenovo \"Ideation to Impact\" challenge",
      "Integrated OpenAI Whisper for live transcription and GPT-4o to auto-generate pitch decks in under 60 seconds; used Groq for low-latency coaching scored on a 1–10 scale",
      "Wired Supabase (PostgreSQL + pgvector + Auth) supporting 2 user roles (Creator/Reviewer) and shareable pitch deck export",
    ],
    liveUrl: "https://pitchpadapp.vercel.app/",
  },
  {
    name: "Forte",
    event: "FidHacks @ Fidelity",
    date: "May 2026",
    tech: ["Next.js 15", "Gemini 2.0 Flash", "Framer Motion", "Zustand"],
    bullets: [
      "Built a browser-based financial literacy platform with 5 interactive games (salary negotiation vs. live AI, job offer math, budgeting, freelance taxes, 30-year portfolio sim); shipped zero-login product with Gemini 2.0 Flash + server-side scoring in under 24 hours",
    ],
  },
  {
    name: "Aggie Aid",
    event: "NC A&T",
    date: "2026",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    bullets: [
      "Developed a student resource platform for North Carolina A&T students to access campus tools and information",
    ],
    liveUrl: "https://aggie-aid.vercel.app/",
    image: "/projects/aggieaid.png",
  },
  {
    name: "SurgiControl Robot Arm Dashboard",
    event: "J&J Hackathon",
    date: "2026",
    tech: ["Python", "Streamlit", "Plotly", "Pandas", "Three.js"],
    bullets: [
      "Sole developer on a 4-person team — designed, architected, and built the entire technical solution end-to-end while teammates focused on research and presentation",
      "Built a real-time 3D surgical robot arm dashboard for Johnson & Johnson enabling users to save and replay precise arm positions",
      "Engineered CSV export to log exact arm placement coordinates, enabling data-driven motion pattern analysis",
    ],
    demoUrl: "https://youtu.be/YxTLcg7js5w",
  },
];

export const certificate = {
  name: "SJECCD AI Session Certificate",
  date: "Mar. 2026",
  issuer: "San Jose Evergreen Community College District",
  description:
    "Completed intensive AI training covering machine learning fundamentals, neural networks, and responsible AI practices.",
};

export const education = [
  {
    school: "North Carolina A&T State University",
    degree: "B.S. Computer Science, Minor in Supply Chain Management",
    gpa: "3.6",
    dates: "Aug. 2025 – Present",
    location: "Greensboro, NC",
  },
  {
    school: "Halifax Community College",
    degree: "A.A. & A.S. (Concurrent with High School Diploma)",
    dates: "Aug. 2021 – May 2025",
    location: "Weldon, NC",
    highlight: "Earned both A.A. and A.S. degrees concurrently while completing high school — dual enrollment across the full four years.",
  },
];

export const activities = [
  "UNCF STEM Scholar (2026) — Top 50 HBCU Nationwide",
  "Truist Ascent Immersion (TMCF x Truist, Oct. 2026)",
  "HBCU Innovation Challenge (TMCF/CSAA/Guidewire, Jun. 2026)",
  "UNCF AI Certificate",
  "ACM Programs Chair",
  "Hack NCAT 1st Place",
  "FRC World Championship",
  "FidHacks @ Fidelity",
  "GDG",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];
