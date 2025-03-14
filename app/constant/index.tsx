import { ExternalLinks } from "@/models";

export const BIO = {
  NAME: "Joshua David",
  DESCRIPTION: "Junior @ Singapore Management University",
};

export const APIs = {
  BIO_AWS: "https://joshydavid.s3.us-east-1.amazonaws.com/Joshua.json",
  INTERNSHIP_AWS:
    "https://joshydavid.s3.us-east-1.amazonaws.com/Companies.json",
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
