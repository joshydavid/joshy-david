import { retrieveBio } from "@/api/retrieveBio";
import Ping from "@/components/Ping";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { internships, urls } from "@/data";
import { Bio as iBio, Url } from "@/models";
import JoshMemoji from "@/public/joshua-memoji.png";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import BeatLoader from "react-spinners/BeatLoader";

export default function Bio() {
  const {
    data: bioData,
    error,
    isLoading,
  } = useQuery({ queryKey: ["bioData"], queryFn: retrieveBio });

  if (isLoading) return <BeatLoader color="white" size="13px" />;
  if (error) return <div>{error.message}</div>;
  const { NAME, POSITION, HEADLINE, DESCRIPTION, DETAILS }: iBio = bioData;

  const presentInternshipCount = internships.filter(
    (internship) => !internship.isCompleted,
  ).length;
  const { company } = internships[internships.length - 1];
  const { src } = JoshMemoji;

  return (
    <div className="flex flex-col gap-6">
      <Avatar className="h-36 w-36">
        <AvatarImage src={src} className="bg-ashGray dark:bg-gray" />
      </Avatar>

      <div className="mt-8 flex flex-col gap-1.5">
        <h1>{NAME}</h1>
        <h4>{DESCRIPTION}</h4>
        <h4>{POSITION}</h4>
      </div>

      <div className="flex items-center gap-2">
        <Ping bgColor="bg-green dark:bg-brightSun" />
        <h4>
          {presentInternshipCount === 0 ? (
            <>{HEADLINE}</>
          ) : (
            <p>SWE Intern @ {company}</p>
          )}
        </h4>
      </div>

      <div className="flex flex-col gap-4">
        {DETAILS?.map((bio: string, i: number) => (
          <h4 key={`${bio}-${i}`} className="leading-relaxed">
            {bio}
          </h4>
        ))}
      </div>

      <div className="flex flex-row gap-4">
        {urls.map(({ label, path }: Url) => (
          <div
            className="flex cursor-pointer items-center gap-1 text-sm hover:text-gray dark:text-lightGray dark:hover:text-white"
            key={label}
          >
            <ArrowTopRightIcon className="h-5 w-5" />
            <Link key={label} href={path} target="_blank">
              {label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
