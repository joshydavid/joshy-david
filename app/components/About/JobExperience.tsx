"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { sortData } from "@/lib/utils";
import { Company } from "@/models";
import Image from "next/image";

interface JobExperienceProps {
  data: Company[];
}

export default function JobExperience({ data }: Readonly<JobExperienceProps>) {
  const sortedJobs = sortData(data.slice());

  return (
    <div className="flex flex-col gap-3">
      <h1>Experience</h1>
      {sortedJobs.map(
        ({ id, company, position, timeline, icon, achievements }: any) => {
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
                      <Image src={icon} width={50} height={50} alt={company} />
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
}
