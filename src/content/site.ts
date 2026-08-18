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
  { id: "projects", label: "Projects" },
  { id: "toolkit", label: "Toolkit" },
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
  portrait: "/portrait.png",
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

export const stats = [
  { value: "8×", label: ["Hackathon", "podiums"] },
  { value: "3.81", label: ["CGPA", "/ 4.0"] },
  { value: "98%", label: ["Extraction", "accuracy at scale"] },
];

export const highlights = {
  heading: "Competition record:",
  items: [
    { kicker: "Champion", title: "Experian Malaysia AI Hackathon 2.0" },
    { kicker: "2nd Runner-Up", title: "Western Digital × Monash 36H Hackathon" },
    { kicker: "1st Runner-Up", title: "UM Hackathon 2024" },
    { kicker: "Research Excellence", title: "I-PHAMATHON 2024" },
    { kicker: "2nd Runner-Up", title: "DHL × UTM Sustainable Food Nexus" },
    { kicker: "Champion", title: "Intervarsity Think Tank 2023" },
    { kicker: "2nd Runner-Up", title: "BAT × APU Ideathon 2023" },
    { kicker: "2nd Runner-Up", title: "APU Startup Weekend 2023" },
  ],
};

export const about = {
  eyebrow: "/about",
  headline: "I build generative AI systems that make it to production.",
  body: "I'm a Junior Generative AI Application Developer at Experian Malaysia, where I build multi-agent chatbots, RAG pipelines, and document extraction systems running across APAC, UKI, EMEA, and North America. I came up through data analytics — a First Class Computer Science degree, a 4.0 final year project, and eight hackathon podiums — and I still care most about the part where a model stops being a demo and starts being infrastructure.",
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
  },
  {
    title: "Creative Marketing Co-Lead",
    org: "Google Developer Student Club, APU",
    years: "Nov 2023 – Nov 2024",
    blurb:
      "Grew one of Malaysia's largest student developer communities, then ran marketing for its flagship hackathon.",
    bullets: [
      "Designed tech event branding and developed marketing strategy, attracting 2,000+ new members.",
      "As Marketing Lead for Google Workspace Hackathon 2024, led a team of 5 and grew the event Instagram from 0 to 1,800+ followers.",
      "Secured 330 registered groups and 180 final project submissions.",
    ],
    tags: ["Community", "Branding", "Leadership"],
  },
];

export const projects = {
  eyebrow: "/projects",
  headline: "Research, final year work, and things built under a 36-hour clock.",
  body: "Most of these started as competition entries. The constraint I like about hackathons: you cannot fake a working demo at 4am.",
  items: [
    {
      title: "Tomato Leaf Disease Detection",
      award: "Final Year Project — 4.0/4.0",
      year: "2024 – 2025",
      blurb:
        "Deep learning pipeline for leaf disease classification at 98.19% accuracy. Trained and optimised four models — a custom CNN, InceptionNet, MobileNet, and a Vision Transformer — then deployed the best performer as a Flask web app with MongoDB.",
      stack: ["TensorFlow", "Keras", "Flask", "MongoDB"],
    },
    {
      title: "AI-Powered HR Platform",
      award: "Champion — Experian Malaysia AI Hackathon 2.0",
      year: "Oct 2024",
      blurb:
        "A web platform using Azure OpenAI to streamline resume screening and talent matching, built and shipped inside the competition window.",
      stack: ["Python", "Azure OpenAI", "HTML/CSS"],
    },
    {
      title: "Firmware Failure Prediction",
      award: "2nd Runner-Up — Western Digital × Monash 36H",
      year: "Oct 2024",
      blurb:
        "An ML/DL web platform for firmware analysis and hardware failure prediction, built in 36 hours with a React frontend.",
      stack: ["Python", "React", "Tailwind CSS"],
    },
    {
      title: "Shariah Compliance Automation",
      award: "1st Runner-Up — UM Hackathon 2024",
      year: "Mar 2024",
      blurb:
        "Automated assessment of Shariah-compliant companies, combining Python analysis with Power Automate orchestration.",
      stack: ["Python", "Power Automate"],
    },
  ],
};

export const education = {
  eyebrow: "/education",
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

export const skills = [
  { group: "Languages", items: ["Python", "C", "C++", "Java", "JavaScript", "Rust", "HTML", "CSS"] },
  { group: "AI & Data", items: ["LangChain", "RAG", "TensorFlow", "Keras", "R", "SAS"] },
  { group: "Data stores", items: ["MySQL", "MongoDB", "Oracle"] },
  { group: "Cloud & DevOps", items: ["Azure", "Docker", "Jenkins", "Git"] },
  { group: "Microsoft", items: ["Power BI", "Power Automate", "Microsoft 365"] },
  { group: "Design", items: ["Figma", "Canva"] },
];

export const additional = {
  languages: ["English", "Mandarin", "Malay", "Cantonese"],
  certifications: ["GCPBoleh Season 5: Google Cloud Skills Boost", "CCNA: Introduction to Networks"],
};

export const cta = {
  eyebrow: "/contact",
  headline: "Let's build something worth shipping",
  words: ["build", "automate", "analyse", "deploy", "iterate"],
  footerText: "SHIP • SOMETHING • REAL • EVERY • SINGLE • DAY",
};
