import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

export default function InternshipExperienceSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="h-8 w-32" />

      {Array.from({ length: 3 }).map((_, index) => (
        <Dialog key={index}>
          <DialogTrigger className="mb-3 mt-2 flex cursor-pointer text-left">
            <div className="flex items-center gap-6">
              <Skeleton className="h-10 w-10 rounded-md" />

              <div className="flex flex-col gap-2">
                <Skeleton className="h-5 w-48" />
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-24" />
              </div>
            </div>
          </DialogTrigger>
        </Dialog>
      ))}
    </div>
  );
}
