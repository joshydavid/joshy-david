import { Mentorship } from "@/models";
import Hack from "@/public/companies/Hack.png";
import ProjectHeartCode from "@/public/companies/ProjectHeartCode.png";

export const mentorships: Mentorship[] = [
  {
    id: 1,
    organisation: "SMU .Hack",
    position: "Software Engineer Mentor",
    timeline: "May 2024 - Jul 2024",
    icon: Hack,
    link: "https://www.linkedin.com/company/smuhack",
  },
  {
    id: 2,
    organisation: "SMU Project HeartCode",
    position: "Software Engineer Mentor",
    timeline: "Oct 2024 - Dec 2024",
    icon: ProjectHeartCode,
    link: "https://heartcode.scis.smu.edu.sg",
  },
];
