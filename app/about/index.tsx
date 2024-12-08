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
import { BIO, HEADLINE, NAME, POSITION } from "@/constant";
import { internships, urls } from "@/data";
import { mentorships } from "@/data/mentorship";
import { sortData } from "@/lib/utils";
import { Url } from "@/models/url";
import Project from "@/project/page";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

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
                <DialogTrigger className="mb-3 mt-2 flex cursor-pointer text-left hover:opacity-90">
                  <div className="flex items-center gap-6">
                    <div>
                      <Image src={icon} width={40} height={40} alt={company} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <h3>{position}</h3>
                      <h4>{company}</h4>
                      <p className="text-sm dark:text-lightGray">{timeline}</p>
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
                      {achievements.length === 1 ? (
                        <>{achievements[0]}</>
                      ) : (
                        <>
                          {achievements.map((achievement: string) => (
                            <li key={achievement} className="py-1">
                              {achievement}
                            </li>
                          ))}
                        </>
                      )}
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
                <div className="mb-3 mt-2 flex items-center gap-6 hover:opacity-90">
                  <div>
                    <Image
                      src={icon}
                      width={40}
                      height={40}
                      alt={organisation}
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h3>{position}</h3>
                    <h4>{organisation}</h4>
                    <p className="text-sm dark:text-lightGray">{timeline}</p>
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
          <Avatar className="h-36 w-36">
            <AvatarImage
              src="/joshua-memoji.png"
              className="bg-ashGray dark:bg-gray"
            />
          </Avatar>

          <div className="mt-8 flex flex-col gap-1.5">
            <h1>{NAME}</h1>
            <h4>Junior @ Singapore Management University</h4>
            <h4>{POSITION}</h4>
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

        <div className="flex flex-col gap-4">
          {BIO.map((bio: string) => (
            <h4 key={uuidv4()} className="leading-relaxed">
              {bio}
            </h4>
          ))}
        </div>

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
      {renderInternshipExperience()}
      {renderMentorshipExperience()}
      <Project />
    </div>
  );
}
