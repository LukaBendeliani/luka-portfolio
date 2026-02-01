// TypeScript interfaces for portfolio data
export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  contact: ContactInfo;
  imageUrl: string;
}

export interface Language {
  language: string;
  proficiency: 'Native' | 'Fluent' | 'Intermediate' | 'Basic';
}

export interface Overview {
  introduction: string;
  highlights: string[];
  databases: string[];
  testingTools: string[];
  languages: Language[];
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  technologies: string[];
}

export interface TechnicalSkills {
  frontend: string[];
  backend: string[];
  databases: string[];
  tools: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree?: string;
  field?: string;
  startYear: number;
  endYear: number;
}

export interface PortfolioData {
  personal: PersonalInfo;
  overview: Overview;
  experiences: WorkExperience[];
  skills: TechnicalSkills;
  education: EducationEntry[];
  additionalSkills: string[];
}

// Portfolio data
export const portfolioData: PortfolioData = {
  personal: {
    name: "Luka Bendeliani",
    title: "Senior Software Engineer",
    contact: {
      phone: "+995 595 999 555",
      email: "luka.bendela@gmail.com",
      location: "Georgia, Tbilisi"
    },
    imageUrl: "/profile-placeholder.svg"
  },

  overview: {
    introduction: "Senior Software Engineer with 5+ years of experience building modern web applications with React.js, Next.js, and TypeScript. Proven track record of delivering complex projects, improving test performance and driving best practices in agile environments.",
    highlights: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js"
    ],
    databases: ["PostgreSQL", "MongoDB"],
    testingTools: ["Cypress", "Jest"],
    languages: [
      { language: "English", proficiency: "Fluent" },
      { language: "Georgian", proficiency: "Native" }
    ]
  },

  experiences: [
    {
      id: "limestone",
      company: "Limestone Digital",
      position: "Software Engineer",
      startDate: "2022",
      endDate: "2025",
      achievements: [
        "Contributed to a large-scale supply chain and logistics platform for 2+ years, delivering hundreds of features across the full product lifecycle",
        "Led refactoring of the end-to-end test suite, improving test execution performance by 75% and significantly reducing CI/CD pipeline times",
        "Participated in architectural decisions for frontend systems, influencing patterns for state management, component structure, and API integration",
        "Onboarded and mentored new team members, accelerating their ramp-up time and ensuring adherence to codebase standards",
        "Translated Figma designs into responsive, accessible user interfaces using React, TypeScript, and modern CSS practices",
        "Collaborated closely with backend engineers and product managers in an agile environment to deliver features on tight deadlines"
      ],
      technologies: ["React", "TypeScript", "Cypress", "React Native", "CSS"]
    },
    {
      id: "boostylabs",
      company: "Boosty Labs",
      position: "Software Engineer",
      startDate: "2021",
      endDate: "2022",
      achievements: [
        "Built frontend applications for early-stage startups, working across both React web and React Native mobile platforms",
        "Implemented complex state management solutions using Redux, ensuring predictable data flow and maintainable codebases",
        "Collaborated effectively with cross-functional teams including designers, backend developers, and product stakeholders to deliver cohesive user experiences",
        "Contributed to rapid prototyping and iterative development cycles, adapting quickly to changing product requirements"
      ],
      technologies: ["React", "React Native", "Redux", "TypeScript", "REST APIs"]
    },
    {
      id: "vabaco",
      company: "Vabaco",
      position: "Frontend Engineer",
      startDate: "2020",
      endDate: "2021",
      achievements: [
        "Developed frontend features for a healthcare supply chain management system used by medical professionals to track inventory and product availability",
        "Built intuitive interfaces for location and inventory management modules, improving workflow efficiency for hospital staff",
        "Transitioned from intern to full-time developer, demonstrating rapid skill development and ownership of frontend responsibilities",
        "Worked in a collaborative team environment, participating in code reviews and contributing to shared component libraries"
      ],
      technologies: ["React", "JavaScript", "REST APIs", "CSS"]
    },
    {
      id: "fina",
      company: "FINA LLC",
      position: "Frontend Engineer",
      startDate: "2019",
      endDate: "2020",
      achievements: [
        "Gained foundational experience in frontend development through hands-on work with React.js and Ext.js frameworks",
        "Received structured mentorship during the first 3 months, rapidly acquiring core skills in JavaScript, component architecture, and UI development",
        "Contributed to an educational technology platform, implementing user-facing features and learning industry best practices",
        "Developed basic exposure to Java and backend concepts, building a holistic understanding of full-stack development"
      ],
      technologies: ["React", "Ext.js", "JavaScript", "Java", "HTML", "CSS"]
    }
  ],

  skills: {
    frontend: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Three.js",
      "Tailwind CSS",
      "SCSS",
      "ShadCN"
    ],
    backend: [
      "Node.js",
      "NestJS",
      "REST APIs",
      "WebSockets"
    ],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "Redis"
    ],
    tools: [
      "Git",
      "Vercel",
      "Figma",
      "Docker",
      "AWS",
      "GCP",
      "LLMs",
      "RAG",
      "Cypress",
      "Jest"
    ]
  },

  education: [
    {
      id: "tsu",
      institution: "Tbilisi State University",
      degree: "Faculty",
      field: "Theoretical Physics",
      startYear: 2018,
      endYear: 2022
    }
  ],

  additionalSkills: [
    "AI & Data: LLMs, RAG",
    "Testing: Cypress, Jest",
    "Communication skills",
    "Problem-solving skills"
  ]
};
