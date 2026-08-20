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
    { id: "education", label: "Education" },
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

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  color: string;
  /** Omit for projects with no public URL. */
  href?: string;
}

export const PROJECTS: Project[] = [
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
  {
    title: "Record Daily Attendance",
    desc: "Mobile attendance app for check-in/check-out plus leave, permission, and overtime requests — fast submission for staff, accurate records and smoother approval workflows for the organization. Final project for the KSHRD advanced iOS course.",
    tags: ["SwiftUI", "Spring Boot", "JPA"],
    color: "from-emerald-500 to-teal-500",
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

export interface EducationEntry {
  award: string;
  school: string;
  /** Omit while the exact dates are unconfirmed — the timeline hides the line. */
  period?: string;
  desc: string;
}

export const EDUCATION: EducationEntry[] = [
  {
    award: "Bachelor's Degree — Management Information Systems (MIS)",
    school: "Setec Institute",
    period: "2022 — Present",
    desc: "Bachelor's program in information systems — databases, systems analysis and design, and how software supports the way an organization actually runs. The data modeling side of it carries straight into the backend work I do.",
  },
  {
    award: "Advanced Course — iOS Development",
    school: "Korea Software HRD Center (KSHRD)",
    period: "Jul — Dec 2025",
    desc: "Advanced specialization in native iOS at the software academy founded in Phnom Penh by KOICA and Webcash: Swift 6, SwiftUI and Foundation, Core Data and SwiftData, protocols and observers, state management, REST clients, and MVVM architecture — capped by building the Record Daily Attendance app end to end.",
  },
  {
    award: "Basic Course — Full Stack Development",
    school: "Korea Software HRD Center (KSHRD)",
    period: "Jan — Jul 2025",
    desc: "Full-stack foundation program covering the web front end (HTML, CSS, Flexbox, Tailwind CSS, JavaScript, JSON, Next.js), Spring Boot on the back end with MyBatis, REST web services and Spring Security, and data modeling with PostgreSQL and SQL — plus Git and UI/UX.",
  },
];
