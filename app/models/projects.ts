export enum DeploymentStatus {
  IN_PROGRESS = "IN_PROGRESS",
  DEPLOYED = "DEPLOYED",
  NOT_DEPLOYED = "NOT_DEPLOYED",
}

export enum ProjectTag {
  GOVTECH_INTERNSHIP_PROJECT = "GovTech Internship Project",
  SCHOOL_PROJECT = "School Project",
  PERSONAL_PROJECT = "Personal Project",
  LEGACY = "Legacy",
}

export enum TechStack {
  TYPESCRIPT = "TypeScript",
  JAVASCRIPT = "JavaScript",
  JEST = "Jest",
  DOCKER = "Docker",
  REACT = "React",
  NEXT_JS = "Next.js",
  VUE_JS = "Vue.js",
  TAILWIND_CSS = "Tailwind CSS",
  SHADCN_UI = "Shadcn UI",
  EXPRESS_JS = "Express.js",
  KOA_JS = "Koa.js",
  TYPEORM = "TypeORM",
  POSTGRESQL = "PostgreSQL",
  MONGODB = "MongoDB",
  OPENAI = "Open AI",
  RABBITMQ = "RabbitMQ",
  FLASK = "Flask",
  VERCEL = "Vercel",
  SUPABASE = "Supabase",
  AMAZON_WEB_SERVICES = "Amazon Web Services",
}

export interface ProjectType {
  id: number;
  slug: string;
  name: any;
  description: string;
  achievements?: string[];
  detailedImage?: any;
  tags: any[];
  icon: any;
  gitHub?: string;
  techStack: string[];
  deploymentStatus: DeploymentStatus;
  deployedLink?: any;
}
