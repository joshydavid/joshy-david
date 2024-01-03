import { DotsHorizontalIcon } from "@radix-ui/react-icons";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-screen">
      <DotsHorizontalIcon className="w-14 h-auto animate-pulse" />
    </div>
  );
}
