"use client";

import { retrieveInternships } from "@/api/retrieveInternship";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { sortData } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import BeatLoader from "react-spinners/BeatLoader";

export default function InternshipExperience() {
  const {
    data: internshipData,
    error,
    isLoading,
  } = useQuery({ queryKey: ["internshipData"], queryFn: retrieveInternships });

  if (isLoading) return <BeatLoader color="white" size="10px" />;
  if (error) return <div>{error.message}</div>;

  const sortedInternships = sortData(internshipData.slice());

  return (
    <div className="flex flex-col gap-3">
      <h1>Experience</h1>
      {sortedInternships.map(
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
