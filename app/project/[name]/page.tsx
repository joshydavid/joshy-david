"use client";

import { Button } from "@/components/ui/button";
import { projects } from "@/data";
import { cn, scrollToTop } from "@/lib/utils";
import { DeploymentStatus } from "@/models/project";
import { CaretRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

export default function ProjectData() {
  const router = useRouter();
  const path = usePathname();
  const data = path.split("/");
  const slug = data.slice(-1)[0];
  const project = useMemo(() => {
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
    isMobile,
  } = project;

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="flex w-screen flex-col gap-5 md:w-11/12">
      <div className="flex gap-1 text-sm">
        <button
          className="cursor-pointer underline-offset-4 hover:underline"
          onClick={() => router.back()}
        >
          Project
        </button>
        <p>
          <CaretRightIcon className="h-5 w-5 text-slate-400" />
        </p>
        <p>{name}</p>
      </div>

      <div className="flex flex-col gap-10">
        <div className={cn("flex flex-col", isMobile && "w-1/2")}>
          <Image alt={name} src={detailedImage || icon} />
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <h1>
            {name} ({tags[0]})
          </h1>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>

        {achievements && (
          <div className="flex flex-col gap-4">
            <h1>
              {achievements?.length === 1 ? "Achievement" : "Achievements"}
            </h1>
            <ul
              className={cn(
                "flex flex-col gap-1.5 text-sm",
                achievements.length > 1 && "list-disc pl-5",
              )}
            >
              {achievements.map((achievement: string, i: number) => (
                <li key={`${achievement}-${i}`}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-4">
          <h1>Tech Stack</h1>
          <div className="flex w-full flex-wrap items-center gap-2">
            {techStack?.map((tech: string, i: number) => (
              <Button
                variant="secondary"
                size="sm"
                key={`${tech}-${i}`}
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
                    <FaGithub className="h-4 w-4" /> GitHub
                  </span>
                </Button>
              </Link>
            )}

            {deploymentStatus === DeploymentStatus.DEPLOYED ? (
              <Link href={String(deployedLink)} target="_blank">
                <Button variant="secondary">
                  <span className="flex items-center gap-2">
                    <TbExternalLink className="h-4 w-4" /> Demo
                  </span>
                </Button>
              </Link>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1>Tags</h1>
          <div className="flex w-full flex-wrap items-center gap-2">
            {tags?.map((tag, i: number) => (
              <Button
                variant="secondary"
                size="sm"
                key={`${tag}-${i}`}
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
