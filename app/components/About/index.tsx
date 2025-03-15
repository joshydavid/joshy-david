"use client";

import { retrieveBio } from "@/api/retrieveBio";
import { retrieveInternships } from "@/api/retrieveInternship";
import { BioSkeleton, ExperienceSkeleton } from "@/components/Skeletons";
import Project from "@/project/page";
import { useQuery } from "@tanstack/react-query";
import Bio from "./Bio";
import InternshipExperience from "./InternshipExperience";
import MentorshipExperience from "./MentorshipExperience";
import { retrieveMentorships } from "@/api/retrieveMentorship";

export default function About() {
  const {
    data: bioData,
    error: bioError,
    isLoading: bioLoading,
  } = useQuery({ queryKey: ["bioData"], queryFn: retrieveBio });

  const {
    data: internshipData,
    error: internshipError,
    isLoading: internshipLoading,
  } = useQuery({ queryKey: ["internshipData"], queryFn: retrieveInternships });

  const {
    data: mentorshipData,
    error: mentorshipError,
    isLoading: mentorshipLoading,
  } = useQuery({ queryKey: ["mentorshipData"], queryFn: retrieveMentorships });

  const isLoading = bioLoading || internshipLoading || mentorshipLoading;
  const error = bioError || internshipError || mentorshipError;

  if (isLoading)
    return (
      <div className="flex flex-col gap-10">
        <BioSkeleton />
        <ExperienceSkeleton itemCount={3} />
        <ExperienceSkeleton itemCount={2} />
      </div>
    );

  if (error) return <div>{error.message}</div>;

  return (
    <div className="flex flex-col gap-10">
      <Bio data={bioData} internshipData={internshipData} />
      <InternshipExperience data={internshipData} />
      <MentorshipExperience data={mentorshipData} />
      <Project />
    </div>
  );
}
