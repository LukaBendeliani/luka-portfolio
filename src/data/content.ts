// Centralized content module. Substantive content is preserved verbatim
// from the original site; only proper-noun casing is normalized to sentence
// case (the previous design styled everything as uppercase).

export type Project = {
  id: string;
  slug: "resume-analyzer" | "metropol" | "materia" | "prompt-builder";
  title: string;
  description: string;
  tech: readonly string[];
  link: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export type SkillCategory = {
  title: string;
  skills: readonly string[];
};

export type Capability = {
  title: string;
  items: readonly string[];
};

export const identity = {
  name: "Luka Bendeliani",
  wordmark: "luka.bendeliani",
  role: "Senior Software Engineer",
  email: "luka.bendela@gmail.com",
  phone: "+995 595 999 555",
  phoneHref: "tel:+995595999555",
  location: "Tbilisi, Georgia",
  locationShort: "Tbilisi · GE",
  bio: "Building complex, high-impact web products with strong system thinking and taste for polished execution. I design interfaces that feel alive and engineer them to hold up under real usage.",
  about:
    "Senior Software Engineer with 5+ years of experience building modern web applications with React.js, Next.js, and TypeScript. Proven track record of delivering complex projects, improving test performance and driving best practices in agile environments. Currently focused on product-grade frontend systems, measurable performance gains, and collaborative engineering leadership.",
  yearsExperience: "7y+",
  stack: "React / Next / TS",
  toptal: "Top 3% · Toptal",
  toptalUrl: "https://www.toptal.com/developers/resume/luka-bendeliani",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    x: "https://x.com/",
  },
} as const;

export const capabilities: readonly Capability[] = [
  { title: "Databases", items: ["PostgreSQL", "MongoDB"] },
  { title: "Quality", items: ["Cypress", "Jest"] },
  { title: "Languages", items: ["English — Fluent", "Georgian — Native"] },
] as const;

export const projects: readonly Project[] = [
  {
    id: "01",
    slug: "resume-analyzer",
    title: "Resume Analyzer",
    description:
      "AI-powered tool that analyzes resumes for ATS compatibility, provides scoring, and suggests improvements using Gemini AI.",
    tech: ["Next.js", "Gemini AI", "TypeScript", "Tailwind"],
    link: "https://resume-analyzer-peach-ten.vercel.app/",
  },
  {
    id: "02",
    slug: "metropol",
    title: "Metropol",
    description:
      "A premium real estate platform for one of the leading development companies in Georgia. Complex property listings, search, and interactive maps.",
    tech: ["React", "Next.js", "TypeScript", "CMS"],
    link: "https://www.metropol.ge/",
  },
  {
    id: "03",
    slug: "materia",
    title: "Materia",
    description:
      "Digital platform for Materia, a contemporary Georgian fashion house. E-commerce, lookbooks, and brand storytelling.",
    tech: ["React", "Next.js", "E-commerce", "CMS"],
    link: "https://materia.ge/ka",
  },
  {
    id: "04",
    slug: "prompt-builder",
    title: "Prompt Builder",
    description:
      "An intelligent prompt engineering tool that helps users craft, refine, and optimize prompts for AI models. Streamlined interface for building structured, high-quality prompts.",
    tech: ["Next.js", "TypeScript", "Tailwind", "AI"],
    link: "https://prompt-builder-xi.vercel.app/",
  },
] as const;

export const experiences: readonly Experience[] = [
  {
    company: "Limestone Digital",
    role: "Software Engineer",
    period: "2022 — 2025",
    description:
      "Built and maintained complex web applications for enterprise clients. Led frontend architecture decisions and improved CI/CD pipelines.",
  },
  {
    company: "Boosty Labs",
    role: "Software Engineer",
    period: "2021 — 2022",
    description:
      "Developed blockchain and fintech web applications. Implemented real-time data visualization dashboards and trading interfaces.",
  },
  {
    company: "Vabaco",
    role: "Frontend Engineer",
    period: "2020 — 2021",
    description:
      "Shipped user-facing features for SaaS products. Focused on component architecture, design systems, and performance optimization.",
  },
  {
    company: "Fina LLC",
    role: "Frontend Engineer",
    period: "2019 — 2020",
    description:
      "Built responsive web interfaces for financial services. Implemented data-driven dashboards and reporting tools.",
  },
] as const;

export const skillCategories: readonly SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "Zustand",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Prisma"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Docker",
      "CI/CD",
      "Vercel",
      "Figma",
      "Cypress",
      "Jest",
      "Storybook",
    ],
  },
] as const;

export const education = {
  school: "Tbilisi State University",
  faculty: "Theoretical Physics",
  period: "2018 — 2022",
  description:
    "Strong foundation in mathematical modeling, computational physics, and analytical problem-solving. Applied rigorous scientific methodology to software engineering practice.",
} as const;

