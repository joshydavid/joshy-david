import { DeploymentStatus } from "@/helpers/deploymentStatus";
import BookLah from "@/public/projects/BookLah.png";
import ShortenSG from "@/public/projects/ShortenSG.png";
import Client from "@/public/projects/client.png";
import LegacyCodingPortfolio from "@/public/projects/legacy-portfolio.png";
import CodingPortfolioAll from "@/public/projects/portfolio-2.0-ecosystem.png";
import CodingPortfolio from "@/public/projects/portfolio-2.0.png";
import Sayless from "@/public/projects/sayless-ecosystem.png";
import Sayocode from "@/public/projects/sayocode.png";

export type ProjectType = {
  id: number;
  name: any;
  description: string;
  detailedDescription?: string;
  detailedImage?: any;
  year: number;
  icon: any;
  gitHub: any;
  techStack: string[];
  deploymentStatus: DeploymentStatus;
  deployedLink?: any;
};

export const projects: ProjectType[] = [
  {
    id: 0,
    name: "Project Sayocode",
    description: "Web builder that automates the process of app creation",
    year: 2019,
    icon: Sayocode,
    gitHub: "https://github.com/joshuadavidang/",
    techStack: ["React", "Express.js", "MongoDB", "Bootstrap"],
    deploymentStatus: DeploymentStatus.NOT_DEPLOYED,
  },
  {
    id: 2,
    name: "Coding Portfolio",
    description: "Coding portfolio (Legacy)",
    detailedDescription:
      "Designed and developed a responsive coding portfolio, built on top of Next.js & Tailwind CSS, deployed to Vercel.",
    year: 2022,
    icon: LegacyCodingPortfolio,
    gitHub: "https://github.com/joshuadavidang/joshua-david",
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "Supabase", "GitHub"],
    deploymentStatus: DeploymentStatus.DEPLOYED,
    deployedLink: "https://legacy.joshuadavid.dev",
  },
  {
    id: 3,
    name: "Custom Web App",
    description: "Developed a custom personal brand web app for clients.",
    year: 2023,
    icon: Client,
    gitHub: "https://celineongjw.com",
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "Supabase", "GitHub"],
    deploymentStatus: DeploymentStatus.DEPLOYED,
    deployedLink: "https://celineongjw.com",
  },
  {
    id: 4,
    name: "Sayless",
    description: "Gamified web app connecting people to share excess food.",
    detailedDescription:
      "A gamified web app connecting people to share excess food. Upload receipts to add items to inventory or complete quests to earn vouchers.",
    year: 2023,
    icon: Sayless,
    gitHub: "https://github.com/SMU-IS/SayLess",
    techStack: [
      "Vue.js",
      "Express.js",
      "Tailwind CSS",
      "DaisyUI",
      "OCR API",
      "Firebase API",
      "MongoDB",
      "GitHub",
    ],
    deploymentStatus: DeploymentStatus.DEPLOYED,
    deployedLink: "https://sayless.space",
  },
  {
    id: 5,
    name: "Coding Portfolio 2.0",
    description: "Minimalist coding portfolio.",
    detailedDescription:
      "Version 2.0 - Redesigned and redeveloped an updated version of my coding portfolio, built on top of Next.js 14.0, Tailwind CSS, Shadcn deployed to Vercel.",
    year: 2024,
    icon: CodingPortfolio,
    detailedImage: CodingPortfolioAll,
    gitHub: "https://github.com/joshuadavidang/joshuadavid",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "Supabase",
      "GitHub",
      "Shadcn UI",
      "Framer",
    ],
    deploymentStatus: DeploymentStatus.DEPLOYED,
    deployedLink: "https://joshuadavid.dev",
  },
  {
    id: 6,
    name: "ShortenSG",
    description: "URL shortener web app",
    detailedDescription:
      "Full-stack URL shortener web app, designed to transform long URLs into neat and shareable links.",
    year: 2024,
    icon: ShortenSG,
    gitHub: "https://github.com/joshuadavidang/ShortenSG",
    techStack: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Koa.js",
      "TypeORM",
      "PostgreSQL",
      "Vercel",
    ],
    deploymentStatus: DeploymentStatus.NOT_DEPLOYED,
  },
  {
    id: 7,
    name: "BookLah!",
    description: "Concert booking web app",
    detailedDescription:
      "Full-stack concert booking web app, utilising Microservice architecture.",
    year: 2024,
    icon: BookLah,
    gitHub: "https://github.com/joshuadavidang/BookLah",
    techStack: [
      "TypeScript",
      "Next.js",
      "Flask",
      "Tailwind CSS",
      "Shadcn UI",
      "Koa.js",
      "TypeORM",
      "PostgreSQL",
      "RabbitMQ",
    ],
    deploymentStatus: DeploymentStatus.NOT_DEPLOYED,
  },
];
