interface BaseBio {
  NAME: string;
  HEADLINE: string;
  DESCRIPTION: string;
}

export interface Bio extends BaseBio {
  HEADLINE: string;
  DETAILS: string[];
}

export interface BioMetaData extends BaseBio {
  SITE_URL: string;
}
