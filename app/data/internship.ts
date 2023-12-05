import GovTech from "@/public/GovTech.png";
import PigeonLab from "@/public/PigeonLab.png";

type internships = {
  company: string;
  position: string;
  timeline: string;
  icon: any;
};

export const internships: internships[] = [
  {
    company: "GovTech Singapore",
    position: "Software Engineer Intern",
    timeline: "Jan 2024 - Jul 2024",
    icon: GovTech,
  },
  {
    company: "Pigeohole Live (PigeonLab)",
    position: "Software Engineer Intern",
    timeline: "Jan 2023 - Mar 2023",
    icon: PigeonLab,
  },
];
