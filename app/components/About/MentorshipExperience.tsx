"use client";

import { mentorships } from "@/data/mentorship";
import { sortData } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function MentorshipExperience() {
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
                  <Image src={icon} width={40} height={40} alt={organisation} />
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
}
