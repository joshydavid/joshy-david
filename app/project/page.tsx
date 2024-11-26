"use client";

import { Badge } from "@/components/ui/badge";
import { projects } from "@/data";
import { cn, sortData } from "@/lib/utils";
import { Project as ProjectModel } from "@/models/project";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Project() {
  const sortedProjects = useMemo(() => {
    return sortData(projects.slice());
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <h1 className="mb-2">Projects</h1>
      {sortedProjects.map(
        ({ id, slug, name, icon, tags, isMobile }: ProjectModel) => {
          return (
            <Link href={`/project/${slug}`} key={id}>
              <div className="mb-12 flex cursor-pointer flex-col items-start gap-8 rounded-xl hover:opacity-90 dark:bg-black dark:text-white md:mb-3 md:flex-row md:items-center">
                <div className="w-full rounded-xl bg-lightGray p-4 dark:bg-gray md:w-1/3">
                  <Image
                    src={icon}
                    alt={name}
                    priority
                    className={cn(
                      "mx-auto",
                      isMobile && "w-[150px] md:w-[50px]",
                    )}
                  />
                </div>

                <div className="flex flex-col gap-2 dark:text-lightGray">
                  <h2>{name}</h2>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={uuidv4()}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        },
      )}
    </div>
  );
}
