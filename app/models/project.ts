export enum DeploymentStatus {
  DEPLOYED = "DEPLOYED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_DEPLOYED = "NOT_DEPLOYED",
}

export enum ProjectTag {
  GOVTECH_PROJECT = "GovTech Project",
  SCHOOL_PROJECT = "School Project",
  SOFTWARE_ENGINEERING = "Software Engineering",
  PET_PROJECT = "Pet Project",
  HACKATHON = "Hackathon",
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
  NODE_JS = "Node.js",
  OPENAI = "Open AI",
  OPENCV = "OpenCV",
  POSTGRESQL = "PostgreSQL",
  PYTHON = "Python",
  RABBITMQ = "RabbitMQ",
  REACT = "React",
  REDIS = "Redis",
  SHADCN_UI = "Shadcn UI",
  SQL = "SQL",
  SWIFT = "Swift",
  SWIFT_UI = "SwiftUI",
  SPRING_BOOT = "Sprint Boot",
  SUPABASE = "Supabase",
  TAILWIND_CSS = "Tailwind CSS",
  TYPEORM = "TypeORM",
  TYPESCRIPT = "TypeScript",
  VERCEL = "Vercel",
  VUE_JS = "Vue.js",
}

export interface Project {
  id: number;
  slug: string;
  name: string;
  description: string;
  achievements?: string[];
  detailedImage?: any;
  tags: (string | number)[];
  icon: any;
  gitHub?: string;
  techStack: string[];
  deploymentStatus: DeploymentStatus;
  deployedLink?: string;
  isMobile?: boolean;
}
