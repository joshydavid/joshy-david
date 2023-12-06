"use client";

import { navLinks } from "@/data/navLinks";
import { usePathname, useRouter } from "next/navigation";
import ToggleSwitch from "@/components/ToggleSwitch";

export default function Navigation() {
  const currRoute = usePathname();
  const router = useRouter();

  const handleRoute = (path: string) => {
    router.push(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="z-10 hidden md:flex flex-row gap-4 bg-white dark:bg-black w-full justify-center items-center fixed pt-12 py-6">
      {navLinks.map(({ label, path }) => (
        <div
          key={label}
          onClick={() => handleRoute(path)}
          className={`px-5 py-2.5 text-sm cursor-pointer text-black dark:text-white ${
            currRoute === path
              ? "bg-gray rounded-md text-white"
              : "hover:text-gray dark:hover:text-lightGray"
          }`}
        >
          {label}
        </div>
      ))}
      <ToggleSwitch />
    </nav>
  );
}
