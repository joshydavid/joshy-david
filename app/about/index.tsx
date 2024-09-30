"use client";

import Ping from "@/components/Ping";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HEADLINE, NAME, POSITION } from "@/constant";
import { internships, urls } from "@/data";
import { mentorships } from "@/data/mentorship";
import { sortData } from "@/lib/utils";
import { Url } from "@/models/url";
import Project from "@/project/page";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const presentInternshipCount = internships.filter(
    (internship) => !internship.isCompleted,
  ).length;

  const renderInternshipExperience = () => {
    const sortedInternships = sortData(internships.slice());

    return (
      <div className="flex flex-col gap-3">
        <h1>Experience</h1>
        {sortedInternships.map(
          ({ company, position, timeline, icon, achievements }) => {
            return (
              <Dialog key={company}>
                <DialogTrigger className="mb-3 flex cursor-pointer text-left hover:opacity-90">
                  <div className="flex items-center gap-6">
                    <div>
                      <Image src={icon} width={40} height={40} alt={company} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      {company}
                      <h4>{position}</h4>
                      <h4 className="dark:text-lightGray">{timeline}</h4>
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <div className="flex items-center justify-center gap-5 pb-5">
                        <Image
                          src={icon}
                          width={50}
                          height={50}
                          alt={company}
                        />
                        {company}
                      </div>
                    </DialogTitle>
                    <DialogDescription>
                      {achievements.map((achievement: string) => (
                        <li key={achievement} className="py-1">
                          {achievement}
                        </li>
                      ))}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            );
          },
        )}
      </div>
    );
  };

  const renderMentorshipExperience = () => {
    const sortedMentorships = sortData(mentorships.slice());

    return (
      <div className="flex flex-col gap-3">
        <h1>Others</h1>
        {sortedMentorships.map(
          ({ id, organisation, position, timeline, icon, link }) => {
            return (
              <Link href={link} target="_blank" key={id}>
                <div className="mb-3 flex items-center gap-6 hover:opacity-90">
                  <div>
                    <Image
                      src={icon}
                      width={40}
                      height={40}
                      alt={organisation}
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    {organisation}
                    <h4>{position}</h4>
                    <h4 className="dark:text-lightGray">{timeline}</h4>
                  </div>
                </div>
              </Link>
            );
          },
        )}
      </div>
    );
  };

  const { position, company } = internships[internships.length - 1];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <div>
          <Avatar>
            <AvatarImage src="/joshua.png" />
            <AvatarFallback>Joshua</AvatarFallback>
          </Avatar>

          <div className="mt-8 flex flex-col gap-1.5">
            <h1>{NAME}</h1>
            <h4>Junior @ Singapore Management University</h4>
            <h4>{POSITION}</h4>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="leading-relaxed">
            Hey, I'm Joshua! I'm passionate about all things software
            engineering, with a strong interest in building complex and
            large-scale systems. Outside of work, I enjoy working out at the gym
            and going for a quick run around the city.
          </h4>

          <div className="flex flex-row gap-4">
            {urls.map(({ label, path }: Url) => (
              <div
                className="flex cursor-pointer items-center gap-1 text-sm hover:text-gray dark:text-lightGray dark:hover:text-white"
                key={label}
              >
                <ArrowTopRightIcon className="h-5 w-5" />
                <Link key={label} href={path} target="_blank">
                  {label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Ping />
          <h4>
            {presentInternshipCount === 0 ? (
              <>{HEADLINE}</>
            ) : (
              <p>
                {position} @ {company}
              </p>
            )}
          </h4>
        </div>
      </div>
      {renderInternshipExperience()}
      {renderMentorshipExperience()}
      <Project />
    </div>
  );
}
