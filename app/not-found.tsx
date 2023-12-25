import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2 w-full items-center md:items-start">
      <h1 className="dark:text-red-500 text-red-600">Page Not Found</h1>
      <p>Could not find requested resource.</p>
      <Link href="/">
        Return
        <span className="pl-1.5 underline dark:hover:text-lightGray">Home</span>
      </Link>
    </div>
  );
}
