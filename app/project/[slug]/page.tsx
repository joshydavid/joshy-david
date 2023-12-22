"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import Link from "next/link";
import Button from "@/components/Button";
import { projects } from "@/data";

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
          <Link href={gitHub} target="_blank">
            <Button intent="black">
              <span className="flex items-center gap-3">
                <FaGithub className="w-5 h-5" /> GitHub
              </span>
            </Button>
          </Link>

          {isDeployed ? (
            <Link href={deployedLink} target="_blank">
              <Button intent="black">
                <span className="flex items-center gap-3">
                  <TbExternalLink className="w-5 h-5" /> Demo
                </span>
              </Button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
