import { Internship } from "@/models/internship";
import { TechStack } from "@/models/project";
import GovTech from "@/public/companies/GovTech.png";
import PigeonLab from "@/public/companies/PigeonLab.png";

export const internships: Internship[] = [
  {
    id: 1,
    company: "Pigeonhole Live (PigeonLab)",
    position: "Software Engineer Intern",
    timeline: "Jan 2023 - Mar 2023",
    icon: PigeonLab,
    achievements: [
      "Developed responsive webpages across different devices and screen sizes.",
      "Developed comprehensive unit test cases using Jest to ensure code quality and identify potential issues early in the development cycle.",
      `Technologies: ${TechStack.VUE_JS}, ${TechStack.JAVASCRIPT}, ${TechStack.JEST}, ${TechStack.DOCKER}`,
    ],
    isCompleted: true,
  },
  {
    id: 2,
    company: "GovTech Singapore",
    position: "Software Engineer Intern",
    timeline: "Jan 2024 - Jul 2024",
    icon: GovTech,
    achievements: [
      "Full Stack Software Engineer Intern @ Government Digital Services (GDS) - CrowdTaskSG",
      "Contributed to 4 projects, with 2 being greenfield initiatives that I helped conceptualised and developed.",
      "Lead front-end engineer for Sparks portal.",
      "Lead back-end engineer for Project X.",
      `Technologies: ${TechStack.TYPESCRIPT}, ${TechStack.NEXT_JS}, ${TechStack.TAILWIND_CSS}, ${TechStack.TYPEORM}, ${TechStack.KOA_JS}, ${TechStack.POSTGRESQL}, ${TechStack.AMAZON_WEB_SERVICES}`,
    ],
    isCompleted: true,
  },
];
