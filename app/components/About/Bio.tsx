import Ping from "@/components/Ping";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { EXTERNAL_LINKS, PROGRAMMING_LANGUAGE } from "@/constant";
import { urls } from "@/data";
import { Company, Bio as iBio, Url } from "@/models";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface BioProps {
  data: iBio;
  companyData: Company[];
}

export default function Bio({ data, companyData }: Readonly<BioProps>) {
  const { NAME, HEADLINE, DETAILS }: iBio = data;
  const { company, position, isCompleted } =
    companyData[companyData.length - 1];

  return (
    <div className="flex flex-col gap-6">
      <Avatar className="h-36 w-36">
        <AvatarImage
          src={EXTERNAL_LINKS.PROFILE_PICTURE.src}
          className="bg-ashGray dark:bg-gray"
        />
      </Avatar>

      <div className="mt-1 flex flex-col gap-1.5">
        <h1>{NAME}</h1>
        <div className="flex items-center gap-2">
          <Ping bgColor="bg-pictonBlue" />
          <h4>
            {isCompleted ? (
              <>{HEADLINE}</>
            ) : (
              <>
                {position} @ {company}
              </>
            )}
          </h4>
        </div>
        <h4>{PROGRAMMING_LANGUAGE.join(", ")}</h4>
      </div>

      <div className="flex flex-col gap-4">
        {DETAILS.map((bio: string, i: number) => (
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
