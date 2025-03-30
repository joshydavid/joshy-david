"use client";

import { getRequest } from "@/api/getRequest";
import { BioSkeleton, ExperienceSkeleton } from "@/components/Skeletons";
import { APIs, QUERY_KEYS } from "@/constant";
import Project from "@/project/page";
import { useQuery } from "@tanstack/react-query";
import Bio from "./Bio";
import JobExperience from "./JobExperience";
import MentorshipExperience from "./MentorshipExperience";

export default function About() {
  const { BIO_AWS, COMPANY_AWS, MENTORSHIP_AWS } = APIs;

  const {
    data: bioData,
    error: bioError,
    isLoading: bioLoading,
  } = useQuery({
    queryKey: [QUERY_KEYS.BIO_DATA],
    queryFn: () => getRequest(BIO_AWS),
  });

  const {
    data: companyData,
    error: companyError,
    isLoading: companyLoading,
  } = useQuery({
    queryKey: [QUERY_KEYS.COMPANY_DATA],
    queryFn: () => getRequest(COMPANY_AWS),
  });

  const {
    data: mentorshipData,
    error: mentorshipError,
    isLoading: mentorshipLoading,
  } = useQuery({
    queryKey: [QUERY_KEYS.MENTORSHIP_DATA],
    queryFn: () => getRequest(MENTORSHIP_AWS),
  });

  const isLoading = bioLoading || companyLoading || mentorshipLoading;
  const isError = bioError || companyError || mentorshipError;

  if (isLoading)
    return (
      <div className="flex flex-col gap-10">
        <BioSkeleton itemCount={3} />
        <ExperienceSkeleton itemCount={3} />
        <ExperienceSkeleton itemCount={2} />
      </div>
    );

  if (isError) return <div>{isError.message}</div>;

  return (
    <div className="flex flex-col gap-10">
      <Bio data={bioData} companyData={companyData} />
      <JobExperience data={companyData} />
      <MentorshipExperience data={mentorshipData} />
      <Project />
    </div>
  );
}
