"use client";
import Layout from "@/page";
import { usePathname, useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const ProjectData = () => {
  const router = useRouter();
  const path = usePathname();
  const data = path.split("/");
  const id = Number(data.slice(-1)[0]);
  const project = projects.find((project) => project.id === id);
  const { name, icon, description, detailedDescription, link }: any = project;

  return (
    <Layout>
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
          <h1>{name}</h1>
        </div>
        <p>{description}</p>
        <p className="leading-relaxed">{detailedDescription}</p>

        <button
          className="btn btn-default text-white w-fit mt-10"
          onClick={() => router.push(link)}
        >
          <FaGithub className="w-6 h-6" /> GitHub
        </button>
      </div>
    </Layout>
  );
};

export default ProjectData;
