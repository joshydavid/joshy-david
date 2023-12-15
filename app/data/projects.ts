import Placeholder from "@/public/projects/placeholder.png";
import Sayocode from "@/public/projects/sayocode.png";
import LegacyCodingPortfolio from "@/public/projects/legacy-portfolio.png";
import Client from "@/public/projects/client.png";
import Sayless from "@/public/projects/sayless-ecosystem.png";
import CodingPortfolio from "@/public/projects/portfolio-2.0.png";
import CodingPortfolioAll from "@/public/projects/portfolio-2.0-ecosystem.png";

type Projects = {
  id: number;
  name: string;
  description: string;
  detailedDescription?: string;
  detailedImage?: any;
  year: number;
  icon: any;
  gitHub: string;
  techStack: string[];
  isDeployed: boolean;
  deployedLink?: string;
};

export const projects: Projects[] = [
  {
    id: 0,
    name: "Project Sayocode",
    description: "Web builder that automates the process of app creation.",
    year: 2019,
    icon: Sayocode,
    gitHub: "https://github.com/joshuadavidang/",
    techStack: ["React", "Express.js", "MongoDB", "Bootstrap"],
    isDeployed: false,
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
    isDeployed: true,
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
    isDeployed: true,
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
    isDeployed: true,
    deployedLink: "https://sayless.space",
  },
  {
    id: 5,
    name: "Coding Portfolio 2.0",
    description: "Minimalist coding portfolio.",
    detailedDescription:
      "Version 2.0 - Redesigned and redeveloped an updated version of my coding portfolio, built on top of Next.js 14.0, Tailwind CSS, DaisyUI, HeadlessUI deployed to Vercel.",
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
      "HeadlessUI",
      "DaisyUI",
      "Framer",
    ],
    isDeployed: true,
    deployedLink: "https://joshuadavid.dev",
  },
  {
    id: 6,
    name: "Journal (Coming Soon)",
    description: "iOS 17.2 Journal app clone",
    detailedDescription:
      "Built an iOS journal app clone over the winter break using SwiftUI and Apple's latest  Journal Suggestions API. The app allows users to reflect and record their thoughts and emotions.",
    year: 2024,
    icon: Placeholder,
    detailedImage: Placeholder,
    gitHub: "https://github.com/joshuadavidang/joshuadavid",
    techStack: ["SwiftUI", "Journal Suggestions API"],
    isDeployed: false,
  },
];
