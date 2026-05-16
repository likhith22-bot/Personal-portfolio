import { Github, Linkedin, Mail, Phone, Code2, Database, Layout, Server, Award, GraduationCap, Briefcase } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Tadikonda Likhith Naga Sai",
  title: "Full Stack Developer",
  email: "likhithnagasaitadikonda@gmail.com",
  phone: "+91-9381440047",
  github: "https://github.com/likhith22-bot",
  linkedin: "https://linkedin.com/in/likhith-naga-sai-tadikonda",
  objective: "Computer Science undergraduate seeking an entry-level Software Developer role to apply strong skills in Java, Data Structures, Full Stack Web Development, and problem-solving while contributing to scalable and efficient software solutions."
};

export const SKILLS = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Java", "Python", "C", "C++"]
  },
  {
    category: "Frontend",
    icon: Layout,
    items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Spring Boot", "Node.js", "REST APIs"]
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "MongoDB"]
  }
];

export const PROJECTS = [
  {
    title: "AI Interview Feedback System",
    description: "An intelligent platform that conducts mock interviews and provides detailed feedback using Gemini AI. Helps students improve their performance with real-time analysis.",
    tags: ["React", "Gemini API", "Node.js", "Tailwind"],
    github: "https://github.com/likhith22-bot/AI-Interview-feedback-system.git",
    type: "Featured"
  },
  {
    title: "Hospital Management System",
    description: "A comprehensive full-stack application for managing patients, doctors, and appointments. Features role-based access control and secure JWT authentication.",
    tags: ["Spring Boot", "React", "MySQL", "JWT"],
    github: "https://github.com/likhith22-bot/hospital-management-system.git",
    type: "Backend Heavy"
  },
  {
    title: "Mini OLX Clone",
    description: "Online buy and sell platform with complete CRUD operations, database integration, and a responsive UI for listing and browsing second-hand products.",
    tags: ["Spring Boot", "MySQL", "Bootstrap"],
    github: "https://github.com/likhith22-bot", // Place holder for variety
    type: "Web App"
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    school: "Sri Vasavi Institute of Engineering and Technology",
    major: "Computer Science and Engineering",
    duration: "2022 – 2026",
    details: "CGPA: 6.5 / 10"
  },
  {
    degree: "Intermediate",
    school: "VR Junior College",
    major: "MPC",
    duration: "2020 – 2022",
    details: "CGPA: 6.1 / 10"
  }
];

export const EXPERIENCE = [
  {
    title: "Data Science Intern",
    company: "BR Concepts Pvt Ltd",
    duration: "Nov 2025 – Mar 2026",
    description: "Completed a 4-month long-term industrial internship focusing on Data Science applications and real-world data analysis."
  },
  {
    title: "Python Programming Intern",
    company: "BIST Technologies Pvt. Ltd",
    duration: "Feb 2025 – Mar 2025",
    description: "Successfully completed a 2-month professional certification course in Python Programming, mastering core concepts and implementation."
  },
  {
    title: "Java Programming Intern",
    company: "BIST Technologies Pvt. Ltd",
    duration: "Present",
    description: "Building robust backend solutions and improving algorithmic efficiency using Java and related frameworks."
  }
];

export const CERTIFICATIONS = [
  {
    title: "Python Programming",
    issuer: "BIST Technologies Pvt. Ltd",
    date: "March 2025",
    icon: Award,
    asset: "/certs/python.pdf"
  },
  {
    title: "Full Stack Web Development",
    issuer: "Aajhub & Sapienz Recruit",
    date: "April 2025",
    icon: Award,
    asset: "/certs/1744045360972-certificate.png"
  },
  {
    title: "Complete Java Developer",
    issuer: "Aajhub & Sapienz Recruit",
    date: "May 2026",
    icon: Award,
    asset: "/certs/java.jpeg"
  },
  {
    title: "Academic Achievement",
    issuer: "Sri Vasavi Institute of Engineering and Technology",
    date: "2024",
    icon: Award,
    asset: "/certs/22MQ1A0547.pdf"
  },
  {
    title: "TCS CodeVita Round 1 & 2 Qualifier",
    issuer: "Tata Consultancy Services",
    date: "2024",
    icon: Award,
    asset: "/certs/TCS_CodeVita_Season13_likhith22.pdf"
  }
];
