// All copy lives here — edit this file to make the site yours.

/**
 * Backdrops that can sit behind your cut-out portrait.
 * Add your own: give it a key, a `from`/`to` gradient pair, and a `glow` accent.
 * Set the active one via `site.portraitBackdrop` below.
 */
export const portraitBackdrops = {
  blush: { label: "Blush → Mint", from: "#ffd9e0", to: "#c9f0d8", glow: "#ff9fb5" },
  cobalt: { label: "Cobalt → Sky", from: "#c3d9ff", to: "#eaf3ff", glow: "#5b8dff" },
  ember: { label: "Ember → Sand", from: "#ffd7b5", to: "#fff2d9", glow: "#ff9a4d" },
  violet: { label: "Violet → Rose", from: "#e0d4ff", to: "#ffd9ef", glow: "#a583ff" },
  slate: { label: "Slate → Fog", from: "#d7dce3", to: "#f2f4f7", glow: "#8fa0b5" },
  citrus: { label: "Citrus → Lime", from: "#fff0b5", to: "#d9f5c0", glow: "#ffd23d" },
} as const;

export type PortraitBackdropKey = keyof typeof portraitBackdrops;

/** Drives the sticky nav and its scroll-spy. Order must match the page order. */
export const sections = [
  { id: "about", label: "About" },
  { id: "work", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "hackathons", label: "Hackathons" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const site = {
  name: "Renee Nyong",
  fullName: "Nyong Chin Venn",
  role: "Generative AI Developer",
  tagline: "AI x Data x Impact",
  metaDescription:
    "Renee Nyong is a Generative AI application developer at Experian Malaysia, building multi-agent LLM systems, RAG pipelines, and data products that ship.",
  email: "reneenyong3@gmail.com",
  // Browsers cache /_next/image aggressively by URL, so replacing a picture
  // means changing the filename too — editing the file in place is not enough.
  portrait: "/portrait-main.jpg",
  /** Crossfades in while the cursor is over the portrait. Omit to disable the swap. */
  portraitHover: "/portrait-hover.jpg",
  /**
   * Set true when the image already contains its own background (e.g. a stylised
   * portrait with a gradient baked in) — it then fills the oval edge to edge and
   * the backdrop layer below is skipped. Set false for a transparent cut-out.
   */
  portraitHasOwnBackground: true,
  // Only used when portraitHasOwnBackground is false.
  portraitBackdrop: "blush" as PortraitBackdropKey,
  availableForWork: true,
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nyong-chin-venn/",
      icon: "linkedin" as const,
    },
    { label: "GitHub", href: "https://github.com/Renee1306", icon: "github" as const },
  ],
};

/** Scrolls endlessly behind the hero portrait. */
export const heroMarqueeWord = "PORTFOLIO";

/** The oversized type flanking the hero portrait. */
export const heroType = {
  lead: "I am",
  name: ["Renee", "Nyong"],
  role: ["Gen AI", "Developer"],
};

export type Hackathon = {
  title: string;
  award: string;
  year: string;
  image: string;
  blurb?: string;
  stack?: string[];
};

export const hackathons: {
  eyebrow: string;
  headline: string;
  body: string;
  items: Hackathon[];
} = {
  eyebrow: "/hackathons",
  headline: "Eight podiums, most of them built overnight.",
  body: "The constraint I like about hackathons: you cannot fake a working demo at 4am. Every one of these shipped something that ran in front of judges.",
  items: [
    {
      title: "Experian Malaysia AI Hackathon 2.0",
      award: "Champion",
      year: "Oct 2024",
      image: "/experian-ai-hackathon.jpeg",
      blurb:
        "An AI-powered HR platform using Azure OpenAI to streamline resume screening and talent matching, built and shipped inside the competition window.",
      stack: ["Python", "Azure OpenAI", "HTML/CSS"],
    },
    {
      title: "Western Digital × Monash 36H Hackathon",
      award: "2nd Runner-Up",
      year: "Oct 2024",
      image: "/western-digital-monash.jpeg",
      blurb:
        "A machine learning platform for firmware analysis and hardware failure prediction, built end to end in 36 hours.",
      stack: ["Python", "React", "Tailwind CSS"],
    },
    {
      title: "UM Hackathon 2024",
      award: "1st Runner-Up",
      year: "Mar 2024",
      image: "/um-hackathon.jpeg",
      blurb:
        "Automated assessment of Shariah-compliant companies, combining Python analysis with Power Automate orchestration.",
      stack: ["Python", "Power Automate"],
    },
    {
      title: "I-PHAMATHON 2024",
      award: "Research Excellence Award",
      year: "2024",
      image: "/iphamathon.jpeg",
    },
    {
      title: "DHL × UTM Sustainable Food Nexus Challenge",
      award: "2nd Runner-Up",
      year: "2023",
      image: "/dhl-utm-food-nexus.jpeg",
    },
    {
      title: "Intervarsity Think Tank 2023",
      award: "Champion",
      year: "2023",
      image: "/intervarsity-think-tank.jpeg",
    },
    {
      title: "BAT × APU Ideathon 2023",
      award: "2nd Runner-Up",
      year: "2023",
      image: "/bat-apu-ideathon.jpeg",
    },
    {
      title: "APU Startup Weekend 2023",
      award: "2nd Runner-Up",
      year: "2023",
      image: "/apu-startup-weekend.jpeg",
    },
  ],
};

export const about = {
  eyebrow: "/about",
  headline: "Curious mind. Constant builder. AI enthusiast.",
  greeting: "Hey, I'm Renee 👋",
  paragraphs: [
    "I build things with AI, code, and way too many ideas.",
    "By day, I work on Generative AI applications. By night, I'm usually building something that probably started with “wait… what if I…”",
    "I like experimenting, breaking things, and figuring out how to make technology feel a little more human.",
  ],
};

export const clients = [
  { name: "Experian", href: "https://www.experian.com.my/" },
  { name: "Estée Lauder Companies", href: "https://www.elcompanies.com/" },
  { name: "Google Developer Groups", href: "#" },
  { name: "Asia Pacific University", href: "https://www.apu.edu.my/" },
  { name: "Western Digital", href: "#" },
  { name: "Monash", href: "#" },
  { name: "Universiti Malaya", href: "#" },
  { name: "DHL", href: "#" },
];

export const disciplines = [
  "Generative AI & LLMs",
  "Data analytics",
  "Full-stack development",
  "Cloud & DevOps",
];

export type WorkItem = {
  title: string;
  org: string;
  years: string;
  blurb: string;
  bullets: string[];
  tags: string[];
  images?: { src: string; alt: string }[];
};

export const work: WorkItem[] = [
  {
    title: "Junior Generative AI Application Developer",
    org: "Experian Malaysia",
    years: "Jun 2025 – Present",
    blurb:
      "Building production GenAI systems end to end — from agent architecture through to CI/CD and deployment.",
    bullets: [
      'Built "Kerry," a multi-agent GenAI finance chatbot using Python, LangChain, RAG, and Tableau MCP — natural-language querying across Tableau and Oracle with intelligent retrieval and SQL generation.',
      "Designed and deployed a GenAI contract data extraction system across APAC, UKI, EMEA, and North America at 98% accuracy, cutting manual processing time by 40%.",
      "Developed FastAPI backend services with RESTful APIs and Swagger docs, plus Streamlit frontends for interactive AI applications.",
      "Deployed on Microsoft Azure with Docker containerization and Jenkins CI/CD pipelines.",
    ],
    tags: ["LangChain", "RAG", "FastAPI", "Azure"],
    images: [
      { src: "/experian-ai.jpeg", alt: "Renee with colleagues in a meeting room at Experian Malaysia" },
      { src: "/experian-ai-2.jpeg", alt: "Renee at the Experian Malaysia team-building day, January 2026" },
    ],
  },
  {
    title: "Data Analyst Intern",
    org: "Experian Malaysia",
    years: "Mar 2025 – May 2025",
    blurb:
      "Turned raw transaction data into model-ready pipelines and helped shape credit risk scoring.",
    bullets: [
      "Processed and preprocessed 3,000+ bank transactions in Python for AI-driven analytics and model development.",
      "Assisted in developing scorecard modelling to optimise credit risk evaluation.",
      "Engineered GenAI prompts and built ETL pipelines to enhance automation and AI model integration.",
    ],
    tags: ["Python", "ETL", "Credit risk"],
    images: [
      { src: "/experian-intern.jpeg", alt: "Renee with fellow interns at the Experian Malaysia office" },
      { src: "/experian-intern-2.jpeg", alt: "Renee outside the Experian Malaysia office" },
    ],
  },
  {
    title: "HR Analyst Intern",
    org: "Estée Lauder Companies Malaysia",
    years: "Jan 2024 – May 2024",
    blurb:
      "Automated the reporting workflows a whole department was doing by hand — then taught them to do it themselves.",
    bullets: [
      "Analysed and optimised HR data using Salesforce, OBIEE, Excel VBA, and Power Automate.",
      "Automated data processing workflows with Power Automate, reducing manual workload by 80%.",
      "Led a departmental hackathon, training 14 colleagues on Power Automate for workflow automation.",
    ],
    tags: ["Power Automate", "Salesforce", "VBA"],
    images: [
      { src: "/estee-intern.jpeg", alt: "Renee during her internship at Estée Lauder Companies Malaysia" },
      { src: "/estee-intern-2.jpeg", alt: "Renee with colleagues at Estée Lauder Companies Malaysia" },
    ],
  },
];

export type ProjectItem = {
  title: string;
  kicker: string;
  year: string;
  blurb: string;
  /** Grouped so the card can show what each part of the system is built with. */
  stack: { group: string; items: string[] }[];
  repo: string;
  live?: string;
  liveNote?: string;
  /** Drop a screenshot in /public and point at it here. */
  image?: string;
};

export const projects: {
  eyebrow: string;
  headline: string;
  items: ProjectItem[];
} = {
  eyebrow: "/projects",
  headline: "Things I built end to end, from model to deployed interface.",
  items: [
    {
      title: "CareerPilot",
      kicker: "AI career copilot",
      year: "2025 – 2026",
      blurb:
        "An AI copilot for the whole job-hunt loop: decode a job description into real responsibilities and tiered requirements, tailor a resume against it, track every application on a drag-and-drop board that files updates from your inbox, and prep for the interview — all grounded in your actual resume rather than invented experience. Every backend request is scoped to the caller's JWT, so Postgres row-level security enforces per-user isolation end to end.",
      stack: [
        { group: "Frontend", items: ["React 19", "TypeScript", "Vite", "React Router"] },
        { group: "Backend", items: ["Python", "FastAPI", "LangChain"] },
        { group: "AI", items: ["Gemini", "DeepSeek via DashScope"] },
        { group: "Data", items: ["Supabase", "Postgres", "Row Level Security"] },
        { group: "Deploy", items: ["Cloudflare Pages", "Render"] },
      ],
      repo: "https://github.com/Renee1306/career-pilot",
      live: "https://career-pilot-my.pages.dev/",
      liveNote: "Backend is on a free tier — the first request after idle takes ~30–60s to wake.",
      image: "/career-pilot.png",
    },
    {
      title: "Tomato Leaf Disease Detection",
      kicker: "Final Year Project — 4.0/4.0",
      year: "2024 – 2025",
      blurb:
        "A deep learning pipeline that classifies tomato leaf disease from a photo at 98.19% accuracy. I trained and optimised four architectures — a custom CNN, InceptionNet, MobileNet, and a Vision Transformer — then deployed the best performer as a web app where growers can upload a leaf, get a diagnosis, and read treatment guidance.",
      stack: [
        { group: "Modelling", items: ["TensorFlow", "Keras", "Vision Transformer", "CNN"] },
        { group: "App", items: ["Python", "Flask", "MongoDB", "JavaScript"] },
      ],
      repo: "https://github.com/Renee1306/tomato-disease",
      live: "https://tomato-disease-nv0d.onrender.com",
      image: "/tomato-disease.png",
    },
  ],
};

export const education = {
  eyebrow: "/education",
  headline: "Where the fundamentals came from.",
  items: [
    {
      school: "Asia Pacific University of Technology & Innovation",
      degree: "BSc (Hons) Computer Science — Data Analytics",
      years: "Mar 2022 – Feb 2025",
      notes: ["CGPA 3.81 / 4.0", "Dean's List Award", "APU Merit Scholarship"],
    },
    {
      school: "Kuen Cheng High School",
      degree: "Science Stream",
      years: "Jan 2016 – Dec 2021",
      notes: ["SUEC: 4A1 3A2 1B4", "SPM: 6A+ 3A 2A−"],
    },
  ],
};

export const skills = {
  eyebrow: "/skills",
  headline: "What I reach for.",
  groups: [
    {
      group: "Languages",
      items: ["Python", "TypeScript", "JavaScript", "Java", "C", "C++", "Rust", "HTML", "CSS"],
    },
    {
      group: "AI & machine learning",
      items: ["LangChain", "RAG", "TensorFlow", "Keras", "Azure OpenAI", "Gemini", "Prompt engineering"],
    },
    { group: "Frameworks", items: ["FastAPI", "React", "Next.js", "Flask", "Streamlit", "Tailwind CSS"] },
    { group: "Data", items: ["MySQL", "MongoDB", "Oracle", "Supabase", "R", "SAS", "ETL pipelines"] },
    { group: "Cloud & DevOps", items: ["Microsoft Azure", "Docker", "Jenkins", "Git", "Render"] },
    { group: "Microsoft & platforms", items: ["Power BI", "Power Automate", "Microsoft 365", "Salesforce"] },
    { group: "Design", items: ["Figma", "Canva"] },
  ],
};

export const additional = {
  languages: ["English", "Mandarin", "Malay", "Cantonese"],
  certifications: ["GCPBoleh Season 5: Google Cloud Skills Boost", "CCNA: Introduction to Networks"],
};

export const cta = {
  eyebrow: "/contact",
  headline: "Let's build something worth shipping",
  words: ["build", "automate", "analyse", "deploy", "iterate"],
};
