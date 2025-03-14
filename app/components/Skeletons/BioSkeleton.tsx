import { Avatar } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export default function BioSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      <Avatar className="h-36 w-36">
        <Skeleton className="h-full w-full rounded-full" />
      </Avatar>

      <div className="mt-2 flex flex-col gap-2">
        <Skeleton className="h-5 w-48" />
        <Skeleton className="h-5 w-64" />
        <Skeleton className="h-5 w-36" />
      </div>

      <div className="flex items-center gap-2">
        <Skeleton className="h-5 w-48" />
      </div>

      <div className="flex flex-col gap-4">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-5 w-5/6" />
      </div>

      <div className="flex flex-row gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={`${index}-h-5-w-20-skeleton`}
            className="flex items-center gap-1"
          >
            <Skeleton className="h-5 w-20" />
          </div>
        ))}
      </div>
    </div>
  );
}
