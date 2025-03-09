import { EXTERNAL_LINKS } from "@/constant";
import { Url } from "@/models";

const { RESUME, LINKEDIN, GITHUB } = EXTERNAL_LINKS;
export const urls: Url[] = [
  {
    label: "Resume",
    path: RESUME,
  },
  {
    label: "LinkedIn",
    path: LINKEDIN,
  },
  {
    label: "GitHub",
    path: GITHUB,
  },
];
