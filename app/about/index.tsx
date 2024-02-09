"use client";

import { NAME } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/Animation";
import { useEffect, useState } from "react";
import { internships, urls } from "@/data";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function About() {
  const [isChrome, setIsChrome] = useState(false);

  useEffect(() => {
    const chromeAgent = navigator.userAgent.indexOf("Chrome") > -1;
    chromeAgent ? setIsChrome(true) : setIsChrome(false);
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <AnimatedSection delay={0.1} className="flex flex-col gap-5">
        <Avatar>
          <AvatarImage src="/joshua.png" />
          <AvatarFallback>Joshua</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1.5">
          <h1>{NAME}</h1>
          <h4>iOS Developer {isChrome ? "" : null}</h4>
          <h4>
            Information Systems Sophomore @ Singapore Management University
          </h4>
          <h4>Aspiring Software Engineer</h4>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <h4 className="leading-relaxed">
          Hey, I'm Joshua! I'm interested in web/app development and all things
          tech. Outside of work, I enjoy working out at the gym and going for a
          quick run around the city.
        </h4>

        <div className="flex flex-row gap-4 mt-6">
          {urls.map(({ label, isPDF, path }) => (
            <span
              className="flex items-center gap-1 text-sm cursor-pointer dark:text-lightGray hover:text-gray dark:hover:text-white"
              key={label}
            >
              <ArrowTopRightIcon className="w-5 h-5" />
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
            </span>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <h1>Experience</h1>
        <div className="flex flex-col gap-12 mt-6">
          {internships.map(
            ({ company, position, timeline, icon, achievements }) => (
              <Dialog key={company}>
                <DialogTrigger className="flex flex-row gap-7 cursor-pointer hover:opacity-90 text-left">
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
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <div className="flex gap-5 items-center justify-center pb-5">
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
            )
          )}
        </div>
      </AnimatedSection>
    </div>
  );
}
