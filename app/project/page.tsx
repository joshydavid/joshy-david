"use client";

import { useRouter } from "next/navigation";
import Layout from "@/page";
import AnimatedSection from "@/components/Animation";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Project() {
  const router = useRouter();
  const showProjectDetails = (id: number) => {
    router.push(`/project/${id}`);
  };

  return (
    <Layout>
      <AnimatedSection delay={0.1} className="flex flex-col gap-5">
        <h1>Projects</h1>
        <h3>Projects I have done over the years.</h3>

        {projects
          .slice()
          .sort((a, b) => b.id - a.id)
          .map(({ id, name, icon, description }) => (
            <div
              className="flex flex-col md:flex-row md:items-center gap-8 mb-12 md:m-0 cursor-pointer hover:opacity-90 dark:bg-black dark:text-white rounded-xl"
              onClick={() => showProjectDetails(id)}
              key={id}
            >
              <Image
                src={icon}
                width={150}
                height={150}
                alt={name}
                className="bg-lightGray dark:bg-gray rounded-xl p-5 md:w-1/3 w-screen"
                priority
              />

              <div className="dark:text-lightGray">
                <h2>{name}</h2>
                <p className="text-sm mt-2">{description}</p>
              </div>
            </div>
          ))}
      </AnimatedSection>
    </Layout>
  );
}
