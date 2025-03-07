import { BIO } from "@/constant";
import { Internship } from "@/models/internship";
import { TechStack } from "@/models/project";
import BSG from "@/public/companies/BSG.png";
import GovTech from "@/public/companies/GovTech.png";
import PigeonLab from "@/public/companies/PigeonLab.png";

const { POSITION } = BIO;
export const internships: Internship[] = [
  {
    id: 1,
    company: "Blockchain Solutions",
    position: `${POSITION} Intern`,
    timeline: "May 2022 - Aug 2022",
    icon: BSG,
    achievements: [
      "Spearheaded front-end development of a NFT marketplace which led to 30% increase in user engagement and 20% increase in new user sign-ups.",
      "Developed more than 10 reusable components to ensure consistency across the application, leading to 30% decrease in development time.",
      `Technologies: ${TechStack.REACT}, ${TechStack.NEXT_JS}, ${TechStack.EXPRESS_JS}, ${TechStack.TAILWIND_CSS}, ${TechStack.MONGODB}`,
    ],
    isCompleted: true,
  },
  {
    id: 2,
    company: "Pigeonhole Live",
    position: `${POSITION} Intern`,
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
    id: 3,
    company: "GovTech",
    position: `${POSITION} Intern`,
    timeline: "Jan 2024 - Jul 2024",
    icon: GovTech,
    achievements: [
      "Full Stack Software Engineer Intern @ Government Digital Services (GDS) - CrowdTaskSG",
      "Contributed to 4 projects, with 2 being greenfield initiatives that I helped conceptualised and developed.",
      "Lead front-end engineer for Sparks portal.",
      "Lead back-end engineer for Walking Trails @ CDC.",
      `Technologies: ${TechStack.TYPESCRIPT}, ${TechStack.NEXT_JS}, ${TechStack.TAILWIND_CSS}, ${TechStack.TYPEORM}, ${TechStack.KOA_JS}, ${TechStack.POSTGRESQL}, ${TechStack.AMAZON_WEB_SERVICES}`,
    ],
    isCompleted: true,
  },
];
