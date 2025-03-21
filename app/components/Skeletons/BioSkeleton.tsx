import { Avatar } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { v4 as uuidv4 } from "uuid";

interface BioSkeletonProps {
  itemCount: number;
}

export const BioSkeleton = ({ itemCount }: Readonly<BioSkeletonProps>) => {
  const skeletons = Array.from({ length: itemCount }).map(() => uuidv4());
  return (
    <div className="flex w-full flex-col gap-6">
      <Avatar className="h-36 w-36">
        <Skeleton className="h-full w-full rounded-full" />
      </Avatar>
      <div className="mt-2 flex flex-col gap-3">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-6 w-full" />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-5/6" />
      </div>
      <div className="flex flex-row gap-3">
        {skeletons.map((id) => (
          <div key={id} className="flex items-center gap-1">
            <Skeleton className="h-7 w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};
