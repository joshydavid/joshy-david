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
import { NAME, POSITION } from "@/constant";
import { UrlsType, internships, urls } from "@/data";
import Project from "@/project/page";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col gap-10">
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
          Hey I'm Joshua! I enjoy back-end development, with a strong interest
          in building complex and large-scale systems. Outside of work, I enjoy
          working out at the gym and going for a quick run around the city.
        </h4>

        <div className="flex flex-row gap-4">
          {urls.map(({ label, isPDF, path }: UrlsType) => (
            <div
              className="flex cursor-pointer items-center gap-1 text-sm hover:text-gray dark:text-lightGray dark:hover:text-white"
              key={label}
            >
              <ArrowTopRightIcon className="h-5 w-5" />
              {!isPDF ? (
                <Link key={label} href={path} target="_blank">
                  {label}
                </Link>
              ) : (
                <span>
                  <a download href={path}>
                    {label}
                  </a>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1>Currently</h1>
        {internships
          .slice(0, 1)
          .map(({ company, position, timeline, icon, achievements }) => (
            <Dialog key={company}>
              <DialogTrigger className="flex cursor-pointer flex-row gap-7 text-left hover:opacity-90">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <Ping />
                    <h4>
                      {position} @ {company}
                    </h4>
                  </div>
                  <h4 className="dark:text-lightGray">{timeline}</h4>
                </div>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <div className="flex items-center justify-center gap-5 pb-5">
                      <Image src={icon} width={50} height={50} alt={company} />
                      {company}
                    </div>
                  </DialogTitle>
                  <DialogDescription>
                    {achievements.map((achievement) => (
                      <li key={achievement} className="py-1">
                        {achievement}
                      </li>
                    ))}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}

        <h1>Previously</h1>
        {internships
          .slice(1, internships.length)
          .map(({ company, position, timeline, icon, achievements }) => (
            <Dialog key={company}>
              <DialogTrigger className="flex cursor-pointer flex-row gap-7 text-left hover:opacity-90">
                <div className="flex flex-col gap-1.5">
                  <h4>
                    {position} @ {company}
                  </h4>
                  <h4 className="dark:text-lightGray">{timeline}</h4>
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
                        className="rounded-full"
                        alt={company}
                      />
                      {company}
                    </div>
                  </DialogTitle>
                  <DialogDescription>
                    {achievements.map((achievement) => (
                      <li key={achievement} className="py-1">
                        {achievement}
                      </li>
                    ))}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
      </div>
      <Project />
    </div>
  );
}
