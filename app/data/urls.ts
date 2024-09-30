import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/constant";
import { Url } from "@/models/url";

export const urls: Url[] = [
  {
    label: "Resume",
    path: RESUME_URL,
  },
  {
    label: "LinkedIn",
    path: LINKEDIN_URL,
  },
  {
    label: "GitHub",
    path: GITHUB_URL,
  },
];
