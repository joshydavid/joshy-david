"use client";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const currRoute = usePathname();

  return (
    <nav className="z-10 hidden md:flex flex-row gap-4 bg-white dark:bg-black w-full justify-center items-center fixed pt-12 py-6">
      {navLinks.map(({ label, path }) => (
        <Link
          key={label}
          href={path}
          className={`px-5 py-2.5 text-sm ${
            currRoute === path
              ? "bg-gray rounded-md text-white"
              : "hover:text-gray dark:hover:text-lightGray"
          }`}
        >
          {label}
        </Link>
      ))}
      <ToggleSwitch />
    </nav>
  );
};

export default Navigation;
