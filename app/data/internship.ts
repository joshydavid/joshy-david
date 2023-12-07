import GovTech from "@/public/companies/GovTech.png";
import PigeonLab from "@/public/companies/PigeonLab.png";

type internships = {
  id: number;
  company: string;
  position: string;
  timeline: string;
  icon: any;
  achievements: string[];
};

export const internships: internships[] = [
  {
    id: 1,
    company: "GovTech Singapore",
    position: "Software Engineer Intern",
    timeline: "Jan 2024 - Present",
    icon: GovTech,
    achievements: [
      "Government Digital Services (GDS) - CrowdTaskSG",
      "Technologies: TypeScript, Next.js, Node.js, AWS",
    ],
  },
  {
    id: 2,
    company: "Pigeohole Live (PigeonLab)",
    position: "Software Engineer Intern",
    timeline: "Jan 2023 - Mar 2023",
    icon: PigeonLab,
    achievements: [
      "Developed responsive webpages across different devices and screen sizes.",
      "Developed comprehensive unit test cases using Jest to ensure code quality and identify potential issues early in the development cycle.",
      "Technologies: Vue.js, Jest, JavaScript, Docker, GitLab",
    ],
  },
];
