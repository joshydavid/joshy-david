import { ApiEndpoints, BioMetaData, ExternalLinks } from "@/models";

export const BIO: BioMetaData = {
  NAME: "Joshua David",
  DESCRIPTION: "Junior @ Singapore Management University",
  SITE_URL: "https://joshuadavid.dev",
};

export const APIs: ApiEndpoints = {
  BIO_AWS: "https://joshydavid.s3.us-east-1.amazonaws.com/Joshua.json",
  COMPANY_AWS: "https://joshydavid.s3.us-east-1.amazonaws.com/Companies.json",
  MENTORSHIP_AWS:
    "https://joshydavid.s3.us-east-1.amazonaws.com/Mentorship.json",
};

export const EXTERNAL_LINKS: ExternalLinks = {
  RESUME:
    "https://joshydavid.s3.us-east-1.amazonaws.com/Joshua_David_Resume.pdf",
  OPEN_GRAPH:
    "https://joshydavid.s3.us-east-1.amazonaws.com/Joshy_Open_Graph.png",
  LINKEDIN: "https://linkedin.com/in/joshydavid",
  GITHUB: "https://github.com/joshydavid",
};

export enum Theme {
  "DARK" = "dark",
  "LIGHT" = "light",
}
