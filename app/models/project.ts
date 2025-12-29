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
  WORK_IN_PROGRESS = "Work In Progress",
}

export enum TechStack {
  AMAZON_WEB_SERVICES = "Amazon Web Services",
  AWS_EC2 = "AWS EC2",
  AWS_AMPLIFY = "AWS Amplify",
  AWS_RDS = "AWS RDS",
  AWS_S3 = "AWS S3",
  DOCKER = "Docker",
  EXPRESS_JS = "Express.js",
  FAST_API = "FastAPI",
  FLASK = "Flask",
  GO = "Go",
  GIN = "Gin",
  JAVASCRIPT = "JavaScript",
  JAVA = "Java",
  JEST = "Jest",
  KOA_JS = "Koa.js",
  KUBERNETES = "Kubernetes",
  KONG_GATEWAY = "Kong Gateway",
  LARGE_LANGUAGE_MODELS = "Large Language Models (LLMs)",
  LANG_CHAIN = "LangChain",
  LANG_GRAPH = "LangGraph",
  MONGODB = "MongoDB",
  NEXT_JS = "Next.js",
  NEST_JS = "Nest.js",
  NODE_JS = "Node.js",
  OPENAI = "Open AI",
  POSTGRESQL = "PostgreSQL",
  PYTHON = "Python",
  QDRANT = "Qdrant",
  RABBITMQ = "RabbitMQ",
  REACT = "React",
  REDIS = "Redis",
  RAG = "Retrieval Augmented Generation (RAG)",
  SHADCN_UI = "Shadcn UI",
  SQL = "SQL",
  SWIFT = "Swift",
  SWIFT_UI = "SwiftUI",
  SPRING_BOOT = "Spring Boot",
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
  features?: string[];
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
