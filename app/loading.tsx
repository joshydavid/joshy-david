import { DotsHorizontalIcon } from "@radix-ui/react-icons";

export default function Loading() {
  return (
    <div className="flex w-screen items-center justify-center">
      <DotsHorizontalIcon className="h-auto w-14 animate-pulse" />
    </div>
  );
}
