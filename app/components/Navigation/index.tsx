"use client";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();
  const currentRoute = path.slice(1, path.length);

  return (
    <nav className="flex flex-row gap-4 bg-white dark:bg-black w-full justify-center items-center fixed pt-12 py-6">
      {navLinks.map(({ label, path }) => (
        <Link
          key={label}
          href={path}
          className={`px-5 py-2.5 text-sm ${
            currentRoute === label.toLowerCase()
              ? "bg-gray rounded-md text-white "
              : null
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
