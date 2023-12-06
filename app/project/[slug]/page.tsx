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
  const {
    name,
    icon,
    description,
    detailedDescription,
    detailedImage,
    year,
    link,
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
      </div>

      <p className="text-sm">{description}</p>
      <p className="leading-relaxed text-sm">{detailedDescription}</p>

      <button
        className="btn btn-default text-white w-fit mt-10 text-sm"
        onClick={() => router.push(link)}
      >
        <FaGithub className="w-5 h-5" /> GitHub
      </button>
    </div>
  );
}
