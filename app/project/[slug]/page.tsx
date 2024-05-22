"use client";

import { Button } from "@/components/ui/button";
import { ProjectType, projects } from "@/data";
import { DeploymentStatus } from "@/helpers/deploymentStatus";
import { cn } from "@/lib/utils";
import { CaretRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

export default function ProjectData() {
  const router = useRouter();
  const path = usePathname();
  const data = path.split("/");
  const slug = data.slice(-1)[0];
  const project: ProjectType = useMemo(() => {
    return projects.find((project) => project.slug === slug)!;
  }, [slug]);

  const {
    name,
    icon,
    description,
    achievements,
    detailedImage,
    tags,
    techStack,
    gitHub,
    deploymentStatus,
    deployedLink,
  } = project || {};

  return (
    <div className="flex flex-col gap-5 w-screen md:w-11/12">
      <div className="flex gap-1 text-sm">
        <p
          className="hover:underline cursor-pointer"
          onClick={() => router.back()}
        >
          Project
        </p>
        <p>
          <CaretRightIcon className="w-5 h-5 text-slate-400" />
        </p>
        <p>{name}</p>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
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

        <div className="flex flex-col gap-4 mt-4">
          <h1>
            {name} ({tags[0]})
          </h1>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>

        {achievements && (
          <div className="flex flex-col gap-4">
            <h1>Achievements</h1>
            <ul
              className={cn(
                "flex flex-col gap-1.5 text-sm",
                achievements.length > 1 && "list-disc pl-5"
              )}
            >
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-4">
          <h1>Tech Stack</h1>
          <div className="flex flex-wrap items-center gap-2 w-full">
            {techStack?.map((tech: string, index: number) => (
              <Button
                variant="secondary"
                size="sm"
                key={index}
                className="cursor-text"
              >
                <span className="text-xs">{tech}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1>View Project</h1>
          <div className="flex gap-4">
            {gitHub && (
              <Link href={gitHub} target="_blank">
                <Button variant="secondary">
                  <span className="flex items-center gap-3">
                    <FaGithub className="w-5 h-5" /> GitHub
                  </span>
                </Button>
              </Link>
            )}

            {deploymentStatus === DeploymentStatus.DEPLOYED ? (
              <Link href={deployedLink} target="_blank">
                <Button variant="secondary">
                  <span className="flex items-center gap-3">
                    <TbExternalLink className="w-5 h-5" /> Demo
                  </span>
                </Button>
              </Link>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1>Tags</h1>
          <div className="flex flex-wrap items-center gap-2 w-full">
            {tags?.map((tag, index) => (
              <Button
                variant="secondary"
                size="sm"
                key={index}
                className="cursor-text"
              >
                <span className="text-xs">{tag}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
