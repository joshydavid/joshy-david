import Sayless from "@/public/projects/Sayless-All.svg";
import CodingPortfolio01 from "@/public/projects/Coding-Portfolio-v1.png";
import Client01 from "@/public/projects/Client01.png";
import Sayocode from "@/public/projects/Sayocode.png";
import CodingPortfolio02 from "@/public/projects/Coding-Portfolio-v2.png";
import v2Portfolio from "@/public/projects/v2Portfolio.png";

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
    name: "Coding Portfolio 1.0",
    description: "Coding portfolio.",
    detailedDescription:
      "Designed and developed a responsive coding portfolio, built on top of Next.js & Tailwind CSS, deployed to Vercel.",
    year: 2022,
    icon: CodingPortfolio01,
    link: "https://github.com/SMU-IS/SayLess",
  },
  {
    id: 3,
    name: "Custom Web App",
    description: "Developed a custom personal brand web app for clients.",
    year: 2023,
    icon: Client01,
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
    icon: CodingPortfolio02,
    detailedImage: v2Portfolio,
    link: "https://github.com/joshuadavidang/joshuadavid",
  },
];
