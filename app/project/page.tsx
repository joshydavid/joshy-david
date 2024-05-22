"use client";

import { Badge } from "@/components/ui/badge";
import { ProjectType, projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export default function Project() {
  const sortProjects = (data: ProjectType[]) => {
    return data.sort((a: any, b: any) => b.id - a.id);
  };

  const sortedProjects = useMemo(() => {
    return sortProjects(projects.slice());
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <h1>Projects</h1>
      <h4 className="mb-4">Projects I have done over the years.</h4>
      {sortedProjects.map(({ id, slug, name, icon, tags }: ProjectType) => {
        return (
          <div key={id}>
            <Link href={`/project/${slug}`}>
              <div className="flex flex-col md:flex-row md:items-center items-start gap-8 mb-12 md:mb-3 cursor-pointer hover:opacity-90 dark:bg-black dark:text-white rounded-xl">
                <Image
                  src={icon}
                  alt={name}
                  className="bg-lightGray dark:bg-gray rounded-xl p-5 md:w-1/3 w-screen"
                  priority
                />

                <div className="flex flex-col gap-2 dark:text-lightGray">
                  <h2>{name}</h2>
                  <div className="flex gap-2">
                    {tags.map((tag, index) => (
                      <Badge key={index}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
