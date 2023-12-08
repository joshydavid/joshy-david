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
  link: string;
};

export const projects: Projects[] = [
  {
    id: 0,
    name: "Project Sayocode",
    description: "Web builder that automates the process of app creation.",
    year: 2019,
    icon: Sayocode,
    link: "https://github.com/joshuadavidang/",
  },
  {
    id: 2,
    name: "Coding Portfolio",
    description: "Coding portfolio (Legacy)",
    detailedDescription:
      "Designed and developed a responsive coding portfolio, built on top of Next.js & Tailwind CSS, deployed to Vercel.",
    year: 2022,
    icon: LegacyCodingPortfolio,
    link: "https://github.com/joshuadavidang/joshua-david",
  },
  {
    id: 3,
    name: "Custom Web App",
    description: "Developed a custom personal brand web app for clients.",
    year: 2023,
    icon: Client,
    link: "https://celineongjw.com",
  },
  {
    id: 4,
    name: "Sayless",
    description: "Gamified web app connecting people to share excess food.",
    detailedDescription:
      "A gamified web app connecting people to share excess food. Upload receipts to add items to inventory or complete quests to earn vouchers.",
    year: 2023,
    icon: Sayless,
    link: "https://github.com/SMU-IS/SayLess",
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
    link: "https://github.com/joshuadavidang/joshuadavid",
  },
];
