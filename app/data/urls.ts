import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/constant";

export type UrlsType = {
  label: string;
  isPDF: boolean;
  path: string;
};

export const urls: UrlsType[] = [
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
