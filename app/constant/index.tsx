import { Bio } from "@/models/bio";
import { ExternalLinks } from "@/models/externalLinks";

export const BIO: Bio = {
  NAME: "Joshua David",
  POSITION: "Software Engineer",
  HEADLINE: "Available for Software Engineering Internship (2025)",
  DESCRIPTION: "Junior @ Singapore Management University",
  DETAILS: [
    "I'm Joshua, a junior at Singapore Management University pursuing a Bachelor's in Information Systems. I'm passionate about all things software engineering with a deep interest in building large-scale distributed systems.",
    "Outside of work, I enjoy working out, reading and making a perfect cup of coffee.",
  ],
};

export const EXTERNAL_LINKS: ExternalLinks = {
  RESUME:
    "https://joshydavid.s3.us-east-1.amazonaws.com/Joshua_David_Resume.pdf",
  OPEN_GRAPH:
    "https://joshydavid.s3.us-east-1.amazonaws.com/Joshy_Open_Graph.png",
  LINKEDIN: "https://www.linkedin.com/in/joshydavid",
  GITHUB: "https://github.com/joshydavid",
};

export enum Theme {
  "DARK" = "dark",
  "LIGHT" = "light",
}
