"use client";

import { usePathname, useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function ProjectData() {
  const router = useRouter();
  const path = usePathname();
  const data = path.split("/");
  const id = Number(data.slice(-1)[0]);
  const project = projects.find((project) => project.id === id);
  const { name, icon, description, detailedDescription, year, link }: any =
    project;

  return (
    <div className="flex flex-col gap-5 w-screen px-8 md:px-0 md:w-11/12">
      <div className="text-sm breadcrumbs">
        <ul>
          <li onClick={() => router.back()}>
            <a>Project</a>
          </li>
          <li>{name}</li>
        </ul>
      </div>

      <div className="flex flex-col gap-8">
        <Image src={icon} width={400} height={400} alt={name} priority />
        <h1>
          {name} ({year})
        </h1>
      </div>
      <p>{description}</p>
      <p className="leading-relaxed">{detailedDescription}</p>

      <button
        className="btn btn-default text-white w-fit mt-10 text-sm"
        onClick={() => router.push(link)}
      >
        <FaGithub className="w-5 h-5" /> GitHub
      </button>
    </div>
  );
}
