"use client";

import { NAME } from "@/constant";
import { internships } from "@/data/internship";
import { urls } from "@/data/urls";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/Animation";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Modal from "@/components/Modal";

export default function About() {
  const openModal = (id: number) => {
    const modalId = `my_modal_${id}`;
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    modal.showModal();
  };

  return (
    <div className="flex flex-col gap-10">
      <AnimatedSection delay={0.1} className="flex flex-col gap-5">
        <div>
          <Image
            src="/joshua.png"
            width={100}
            height={100}
            className="rounded-full"
            alt="Display Picture"
            priority
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <h1>{NAME}</h1>
          <h4>iOS Developer </h4>
          <h4>
            Information Systems Sophomore @ Singapore Management University
          </h4>
          <h4>Aspiring Software Engineer</h4>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <h4 className="leading-relaxed">
          Hi, I'm Joshua! I'm passionate about web/app development and all
          things tech. Outside of coding, you can find me hitting the gym or
          going for a quick run.
        </h4>

        <div className="flex flex-row gap-4 mt-6">
          {urls.map(({ label, isPDF, path }) => (
            <span
              className="flex items-center gap-1 text-sm cursor-pointer dark:text-lightGray hover:text-gray dark:hover:text-white"
              key={label}
            >
              <ArrowUpRightIcon className="w-5 h-5" />
              {!isPDF ? (
                <Link key={label} href={path}>
                  {label}
                </Link>
              ) : (
                <span>
                  <a download href={path}>
                    {label}
                  </a>
                </span>
              )}
            </span>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <h1>Experience</h1>
        <div className="flex flex-col gap-12 mt-6">
          {internships.map(
            ({ id, company, position, timeline, icon, achievements }) => (
              <div key={company}>
                <div
                  className="flex flex-row gap-7 cursor-pointer hover:opacity-90"
                  onClick={() => openModal(id)}
                >
                  <div>
                    <Image
                      src={icon}
                      width={50}
                      height={50}
                      className="rounded-full"
                      alt={company}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4>{position}</h4>
                    <h4>{company}</h4>
                    <h4 className="dark:text-lightGray">{timeline}</h4>
                  </div>
                </div>

                <Modal id={id} modalTitle={company} image={icon}>
                  {achievements.map((achievement) => (
                    <li key={achievement} className="py-1">
                      {achievement}
                    </li>
                  ))}
                </Modal>
              </div>
            )
          )}
        </div>
      </AnimatedSection>
    </div>
  );
}
