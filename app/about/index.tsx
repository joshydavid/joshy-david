"use client";

import Bio from "@/components/Bio";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { internships } from "@/data";
import { mentorships } from "@/data/mentorship";
import { sortData } from "@/lib/utils";
import Project from "@/project/page";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const renderInternshipExperience = () => {
    const sortedInternships = sortData(internships.slice());

    return (
      <div className="flex flex-col gap-3">
        <h1>Experience</h1>
        {sortedInternships.map(
          ({ id, company, position, timeline, icon, achievements }) => {
            return (
              <Dialog key={`${company}-${id}`}>
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
                      <div className="flex items-center justify-center gap-5">
                        <Image
                          src={icon}
                          width={50}
                          height={50}
                          alt={company}
                        />
                        {company}
                      </div>
                    </DialogTitle>
                    <DialogDescription className="pt-3">
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

  return (
    <div className="flex flex-col gap-10">
      <Bio />
      {renderInternshipExperience()}
      {renderMentorshipExperience()}
      <Project />
    </div>
  );
}
