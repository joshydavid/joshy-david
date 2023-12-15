"use client";

import { usePathname, useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import Link from "next/link";

export default function ProjectData() {
  const router = useRouter();
  const path = usePathname();
  const data = path.split("/");
  const id = Number(data.slice(-1)[0]);
  const project = projects.find((project) => project.id === id);
  const {
    name,
    icon,
    description,
    detailedDescription,
    detailedImage,
    year,
    techStack,
    gitHub,
    isDeployed,
    deployedLink,
  }: any = project;

  return (
    <div className="flex flex-col gap-5 w-screen md:w-11/12">
      <div className="text-sm breadcrumbs">
        <ul>
          <li onClick={() => router.back()}>
            <a>Project</a>
          </li>
          <li>{name}</li>
        </ul>
      </div>

      <div className="flex flex-col gap-8">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Image
            alt={name}
            src={detailedImage ? detailedImage : icon}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        <h1>
          {name} ({year})
        </h1>

        <p className="text-sm">{description}</p>
        <p className="leading-relaxed text-sm">{detailedDescription}</p>

        <h1>Tech Stack</h1>
        <div className="flex flex-wrap items-center gap-2 w-full">
          {techStack.map((tech: string, index: number) => (
            <span
              className="bg-lightGray dark:bg-gray py-2 px-3 rounded-lg text-xs"
              key={index}
            >
              {tech}
            </span>
          ))}
        </div>

        <h1>View Project</h1>
        <div className="flex gap-4">
          <Link
            className="btn btn-default text-white w-fit text-xs"
            href={gitHub}
            target="_blank"
          >
            <FaGithub className="w-4 h-4" /> GitHub
          </Link>

          {isDeployed ? (
            <Link
              className="btn btn-default text-white w-fit text-xs"
              href={deployedLink}
              target="_blank"
            >
              <TbExternalLink className="w-4 h-4" /> Demo
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
