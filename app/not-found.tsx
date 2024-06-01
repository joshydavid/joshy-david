import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex w-full flex-col items-center gap-2 md:items-start">
      <h1 className="text-red-600 dark:text-red-500">Page Not Found</h1>
      <p>Could not find requested resource.</p>
      <Link href="/">
        Return
        <span className="pl-1.5 underline dark:hover:text-lightGray">Home</span>
      </Link>
    </div>
  );
}
