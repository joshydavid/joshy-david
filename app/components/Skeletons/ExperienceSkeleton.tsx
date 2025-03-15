import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { v4 as uuidv4 } from "uuid";

interface itemCountProps {
  itemCount: number;
}

export default function ExperienceSkeleton({ itemCount }: itemCountProps) {
  const skeletons = Array.from({ length: itemCount }).map(() => uuidv4());

  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="h-8 w-32" />

      {skeletons.map((id) => (
        <Dialog key={id}>
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
