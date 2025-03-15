"use client";

import { getRequest } from "@/api/getRequest";
import { BioSkeleton, ExperienceSkeleton } from "@/components/Skeletons";
import { APIs } from "@/constant";
import Project from "@/project/page";
import { useQuery } from "@tanstack/react-query";
import Bio from "./Bio";
import InternshipExperience from "./InternshipExperience";
import MentorshipExperience from "./MentorshipExperience";

export default function About() {
  const { BIO_AWS, INTERNSHIP_AWS, MENTORSHIP_AWS } = APIs;

  const {
    data: bioData,
    error: bioError,
    isLoading: bioLoading,
  } = useQuery({
    queryKey: ["bioData"],
    queryFn: () => getRequest(BIO_AWS),
  });

  const {
    data: internshipData,
    error: internshipError,
    isLoading: internshipLoading,
  } = useQuery({
    queryKey: ["internshipData"],
    queryFn: () => getRequest(INTERNSHIP_AWS),
  });

  const {
    data: mentorshipData,
    error: mentorshipError,
    isLoading: mentorshipLoading,
  } = useQuery({
    queryKey: ["mentorshipData"],
    queryFn: () => getRequest(MENTORSHIP_AWS),
  });

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
