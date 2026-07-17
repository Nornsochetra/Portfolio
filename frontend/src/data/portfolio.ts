export const PORTFOLIO_CONFIG = {
  name: "Norn Sochetra",
  initials: "NS",
  role: "Software Engineer",
  location: "Cambodia",
  email: "nornsochetra@gmail.com",
  tagline: "Building clean, fast digital products",
  intro:
    "I'm Norn Sochetra, a full-stack software engineer building web and mobile products end to end — from React/Next.js interfaces to Spring Boot backends.",
  about: [
    "I'm a full-stack software engineer at KOSIGN (Cambodia), working across the stack from React/Next.js and Tailwind CSS on the frontend to Spring Boot, Java, and PostgreSQL on the backend, with SwiftUI/Swift for mobile.",
    "Since joining in February 2026, I've helped build and ship WeMeet and KOSIGN DRM end to end into production.",
  ],
  stats: [
    { value: "2026", label: "Started at KOSIGN" },
    { value: "2", label: "Apps in production" },
    { value: "1", label: "Company" },
  ],
  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ],
  socials: [
    { label: "GitHub", brand: "github", href: "https://github.com/Nornsochetra" },
    {
      label: "Facebook",
      brand: "facebook",
      href: "https://www.facebook.com/share/1F1FY1pEY6/?mibextid=wwXIfr",
    },
  ],
} as const;

export const SKILLS = [
  { name: "React / Next.js", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "SwiftUI", level: 80 },
  { name: "Swift", level: 80 },
  { name: "Spring Boot", level: 85 },
  { name: "Java", level: 85 },
  { name: "PostgreSQL", level: 85 },
];

export const PROJECTS = [
  {
    title: "WeMeet",
    desc: "Meeting room booking system with passwordless, email one-time-code login. Built full-stack end to end and shipped to production.",
    tags: ["Next.js", "Tailwind CSS", "Spring Boot", "PostgreSQL"],
    color: "from-cyan-500 to-blue-500",
    href: "https://www.kosign.com.kh/wemeet/login",
  },
  {
    title: "KOSIGN DRM",
    desc: "Internal developer resource management system used to track developer staffing and project assignments. Built full-stack end to end and shipped to production.",
    tags: ["Next.js", "Tailwind CSS", "Spring Boot", "PostgreSQL"],
    color: "from-indigo-500 to-purple-500",
    href: "https://www.kosign.com.kh/drm/login",
  },
];

export const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "KOSIGN (Cambodia)",
    period: "Feb 2026 — Present",
    desc: "Full-stack engineer building production web apps end to end — React/Next.js + Tailwind CSS on the frontend, Spring Boot + Java + PostgreSQL on the backend. Shipped WeMeet and KOSIGN DRM to production.",
  },
];
