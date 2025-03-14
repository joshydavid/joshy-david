"use client";

import Project from "@/project/page";
import Bio from "./Bio";
import InternshipExperience from "./InternshipExperience";
import MentorshipExperience from "./MentorshipExperience";

export default function About() {
  return (
    <div className="flex flex-col gap-10">
      <Bio />
      <InternshipExperience />
      <MentorshipExperience />
      <Project />
    </div>
  );
}
