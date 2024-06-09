export enum DeploymentStatus {
  DEPLOYED = "DEPLOYED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_DEPLOYED = "NOT_DEPLOYED",
}

export enum ProjectTag {
  GOVTECH_INTERNSHIP_PROJECT = "GovTech Internship Project",
  SCHOOL_PROJECT = "School Project",
  PERSONAL_PROJECT = "Personal Project",
  LEGACY = "Legacy",
}

export enum TechStack {
  AMAZON_WEB_SERVICES = "Amazon Web Services",
  DOCKER = "Docker",
  EXPRESS_JS = "Express.js",
  FLASK = "Flask",
  JAVASCRIPT = "JavaScript",
  JAVA = "Java",
  JEST = "Jest",
  KOA_JS = "Koa.js",
  MONGODB = "MongoDB",
  NEXT_JS = "Next.js",
  NEST_JS = "Nest.js",
  OPENAI = "Open AI",
  POSTGRESQL = "PostgreSQL",
  PYTHON = "Python",
  RABBITMQ = "RabbitMQ",
  REACT = "React",
  SHADCN_UI = "Shadcn UI",
  SUPABASE = "Supabase",
  TAILWIND_CSS = "Tailwind CSS",
  TYPEORM = "TypeORM",
  TYPESCRIPT = "TypeScript",
  VERCEL = "Vercel",
  VUE_JS = "Vue.js",
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
