export const personalInfo = {
  name: "Daylen Hicks",
  title: "Software Engineer & AI Developer",
  email: "daylenhicks10@gmail.com",
  github: "https://github.com/dhicks11",
  linkedin: "https://linkedin.com/in/daylenhicks",
  bio: "I'm a Computer Science student at North Carolina A&T State University with a passion for building full-stack applications and working with AI systems. From launching a pickup basketball platform with 500+ users to winning hackathons with AI-powered solutions, I love turning ideas into products that people actually use.",
  resumeUrl: "/Resume_Daylen_Hicks_Updated.pdf",
};

export const highlights = [
  { value: "1st", label: "Place Hackathon", glow: true },
  { value: "3.6", label: "GPA at NC A&T" },
  { value: "5+", label: "Projects Shipped" },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Node.js", "FastAPI", "Streamlit"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "Docker", "PowerShell", "Scrum"],
  },
  {
    category: "Libraries & Platforms",
    items: ["Firebase", "NumPy", "Pandas", "Plotly", "Tableau"],
  },
  {
    category: "Cloud & Deployment",
    items: ["Vercel", "Supabase", "Google Cloud", "AWS", "Railway", "Netlify"],
  },
  {
    category: "AI & System Design",
    items: [
      "Responsible AI",
      "Human-in-the-Loop",
      "LLM Evaluation",
      "RLHF",
      "Prompt Engineering",
    ],
  },
];

export const experience = [
  {
    company: "JMP Statistical Discovery (SAS Institute)",
    role: "Software Engineer Intern",
    location: "Cary, NC",
    dates: "Jun. 2026 – Aug. 2026",
    bullets: [
      "Incoming intern contributing to documentation tooling and scripting (Python, Perl, JavaScript, XML) for statistical analysis and data visualization software at a SAS business unit",
    ],
  },
  {
    company: "Handshake",
    role: "LLM / Generative AI Engineer",
    location: "Remote",
    dates: "Feb. 2026 – Present",
    bullets: [
      "Benchmarked output quality across 3 LLMs (Claude, Gemini, ChatGPT) using structured evaluation criteria, identifying performance gaps and selecting optimal models for production use cases",
      "Performed RLHF-style feedback by rating and ranking hundreds of model responses; cleaned and curated training datasets to reduce noise and improve pipeline accuracy",
    ],
  },
  {
    company: "I Got Next",
    role: "Founder & Lead Developer",
    location: "Remote",
    dates: "Jan. 2026 – Present",
    tech: "Next.js, TypeScript, React, Firebase, Stripe, Google Maps API, Airtable",
    bullets: [
      "Built a real-time basketball court finder with GPS check-ins, serving 2.4K+ players across 150+ courts with an 89% return rate",
      "Engineered Stripe subscription pipeline with 3 pricing tiers ($199–$699/mo) for facility partners, plus a Pro player tier with gated features",
      "Integrated Google Maps API for live court discovery, Firebase for auth and real-time data, and Airtable for facility lead capture",
      "Shipped 18 routes including player map, facility dashboard, admin panel, public profiles, and B2B partner pages",
    ],
    liveUrl: "https://igotnextapp.vercel.app",
  },
  {
    company: "Northampton County Schools",
    role: "Founder & FRC Team Captain — RoboJags",
    location: "Gaston, NC",
    dates: "Aug. 2024 – May 2025",
    bullets: [
      "Chartered the school's inaugural FIRST Robotics Competition team (RoboJags), recruiting and captaining 10+ members through a full competition season",
      "Won two Rookie All-Star awards, advanced to the state championship, and qualified for the FRC World Championship in Houston, TX",
      "Secured a NASA robotics grant and an NC A&T sponsorship to fund team operations, equipment, and travel",
      "Developed a peer-mentoring program adopted by 25+ students that increased coursework proficiency by 40%",
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
      "Built an AI-powered pitch practice platform as deployment & infrastructure lead; architected a Next.js/Vercel frontend and FastAPI/Railway backend serving real-time AI feedback",
      "Integrated OpenAI Whisper for live transcription and GPT-4o to auto-generate investor-ready pitch decks in under 60 seconds",
      "Wired Supabase (PostgreSQL + pgvector + Auth) supporting 2 user roles and shareable pitch deck export",
    ],
    liveUrl: "https://pitchpadapp.vercel.app/",
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
  {
    name: "I Got Next",
    event: "Personal Project",
    date: "Jan. 2026 – Present",
    tech: ["Next.js", "TypeScript", "React", "Firebase", "Stripe", "Google Maps API", "Airtable"],
    bullets: [
      "Real-time basketball court finder with GPS check-ins — 2.4K+ players, 150+ courts, 89% return rate",
      "Stripe subscription pipeline with 3 B2B pricing tiers ($199–$699/mo) and a Pro player tier",
      "Google Maps live court discovery, Firebase auth & real-time data, Airtable facility lead capture",
      "18 routes: player map, facility dashboard, admin panel, public profiles, and B2B partner pages",
    ],
    liveUrl: "https://igotnextapp.vercel.app",
    image: "/projects/igotnext.png",
  },
  {
    name: "Lincoln Financial AI Assistant",
    event: "codeLinc10 Hackathon",
    date: "Oct. 2025",
    tech: ["AWS", "Amazon Bedrock", "Prompt Engineering"],
    bullets: [
      "Led product strategy and pitch for an AI-powered financial assistant on Amazon Bedrock",
      "Shaped a questionnaire-driven recommendation engine for personalized retirement/insurance plans and presented to Lincoln Financial stakeholders",
    ],
    demoUrl: "https://youtube.com/shorts/jMv8xxquJP0?si=ljupji8MhAChGCKN",
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
    dates: "Aug. 2025 – May 2028",
    location: "Greensboro, NC",
  },
  {
    school: "Halifax Community College",
    degree: "Associate in Arts & Associate in Science",
    dates: "Aug. 2021 – May 2025",
    location: "Weldon, NC",
    highlight: "Earned both A.A. and A.S. degrees concurrently while completing high school — dual enrollment across the full four years.",
  },
];

export const activities = [
  "UNCF STEM Innovation Summit Scholar (2026) — 1 of 50 HBCU Students Nationwide",
  "SECU Scholar",
  "College of Engineering Scholar",
  "Aggie Merit Scholar",
  "Hack NCAT 1st Place",
  "FRC World Championship Qualifier (Houston 2025)",
  "NSBE",
  "ACM",
  "codeLinc10",
  "CodeHouse JS Bootcamp",
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
