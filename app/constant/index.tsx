import { ApiEndpoints, BioMetaData, ExternalLinks } from "@/models";
import Josh from "@/public/Josh.png";

export const BIO: BioMetaData = {
  NAME: "Joshua David",
  DESCRIPTION: "Senior @ Singapore Management University",
  SITE_URL: "https://joshydavid.com",
};

export const APIs: ApiEndpoints = {
  BIO_AWS: "https://joshydavid.s3.us-east-1.amazonaws.com/Joshua.json",
  COMPANY_AWS: "https://joshydavid.s3.us-east-1.amazonaws.com/Companies.json",
  MENTORSHIP_AWS:
    "https://joshydavid.s3.us-east-1.amazonaws.com/Mentorship.json",
};

export const EXTERNAL_LINKS: ExternalLinks = {
  // PROFILE_PICTURE: "https://joshydavid.s3.us-east-1.amazonaws.com/Josh.png",
  PROFILE_PICTURE: Josh,
  RESUME:
    "https://joshydavid.s3.us-east-1.amazonaws.com/Joshua_David_Resume.pdf",
  OPEN_GRAPH:
    "https://joshydavid.s3.us-east-1.amazonaws.com/Joshy_Open_Graph.png",
  LINKEDIN: "https://linkedin.com/in/joshydavid",
  GITHUB: "https://github.com/joshydavid",
};

export const PROGRAMMING_LANGUAGE: string[] = ["Go (Golang)", "Java", "Python"];

export enum QUERY_KEYS {
  BIO_DATA = "bioData",
  COMPANY_DATA = "companyData",
  MENTORSHIP_DATA = "mentorshipData",
}

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}
