import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/constant";
import { Url } from "@/models/url";

export const urls: Url[] = [
  {
    label: "Resume",
    isPDF: true,
    path: RESUME_URL,
  },
  {
    label: "LinkedIn",
    isPDF: false,
    path: LINKEDIN_URL,
  },
  {
    label: "GitHub",
    isPDF: false,
    path: GITHUB_URL,
  },
];
