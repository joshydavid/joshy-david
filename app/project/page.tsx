"use client";

import AnimatedSection from "@/components/Animation";
import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <div className="flex flex-col gap-3">
      <h1>Projects</h1>
      <h4 className="mb-4">Projects I have done over the years.</h4>
      {projects
        .slice()
        .sort((a, b) => b.id - a.id)
        .map(({ id, name, icon, description }, delay) => {
          delay *= 0.1;
          return (
            <AnimatedSection delay={delay} key={id}>
              <Link href={`/project/${id}`}>
                <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12 md:mb-3 cursor-pointer hover:opacity-90 dark:bg-black dark:text-white rounded-xl">
                  <Image
                    src={icon}
                    alt={name}
                    className="bg-lightGray dark:bg-gray rounded-xl p-5 md:w-1/3 w-screen"
                    priority
                  />

                  <div className="dark:text-lightGray">
                    <h2>{name}</h2>
                    <p className="text-sm mt-2">{description}</p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          );
        })}
    </div>
  );
}
