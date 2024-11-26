import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex w-full flex-col items-center gap-1 pt-6">
      <h2 className="text-red-600 dark:text-red-500">Page Not Found</h2>
      <p>Could not find requested resource.</p>
      <Link href="/">
        Return{" "}
        <span className="underline underline-offset-4 dark:hover:text-lightGray">
          Home
        </span>
      </Link>
    </div>
  );
}
