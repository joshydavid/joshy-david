"use client";

import { retrieveInternships } from "@/api/retrieveInternship";
import Project from "@/project/page";
import { useQuery } from "@tanstack/react-query";
import BeatLoader from "react-spinners/BeatLoader";
import Bio from "./Bio";
import InternshipExperience from "./InternshipExperience";
import MentorshipExperience from "./MentorshipExperience";
import { retrieveBio } from "@/api/retrieveBio";

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

  const isLoading = bioLoading || internshipLoading;
  const error = bioError || internshipError;

  if (isLoading) return <BeatLoader color="white" size="10px" />;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="flex flex-col gap-10">
      <Bio data={bioData} internshipData={internshipData} />
      <InternshipExperience data={internshipData} />
      <MentorshipExperience />
      <Project />
    </div>
  );
}
