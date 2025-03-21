import Ping from "@/components/Ping";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { urls } from "@/data";
import { Company, Bio as iBio, Url } from "@/models";
import JoshMemoji from "@/public/joshua-memoji.png";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface BioProps {
  data: iBio;
  companyData: Company[];
}

export default function Bio({ data, companyData }: Readonly<BioProps>) {
  const { NAME, DETAILS }: iBio = data;

  const presentInternshipCount = companyData.filter(
    (companyData) => !companyData.isCompleted,
  ).length;
  const { company } = companyData[companyData.length - 1];
  const { src } = JoshMemoji;

  return (
    <div className="flex flex-col gap-6">
      <Avatar className="h-36 w-36">
        <AvatarImage src={src} className="bg-ashGray dark:bg-gray" />
      </Avatar>

      <div className="mt-2 flex flex-col gap-2">
        <h1>{NAME}</h1>
        <div className="flex items-center gap-2">
          <Ping bgColor="bg-pictonBlue" />
          <h4>
            {presentInternshipCount === 0 ? (
              <>Available for Software Engineering Internship (2025)</>
            ) : (
              <p>SWE Intern @ {company}</p>
            )}
          </h4>
        </div>
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
