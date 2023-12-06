import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import { Bars2Icon } from "@heroicons/react/20/solid";
import ToggleSwitch from "../ToggleSwitch";

export default function Dropdown() {
  return (
    <div className="flex justify-end items-center gap-7 w-full md:hidden mt-5 mr-12">
      <ToggleSwitch />
      <div className="dropdown dropdown-left">
        <div
          tabIndex={0}
          role="button"
          className="btn dark:bg-gray bg-white border-0 shadow"
        >
          <Bars2Icon className="w-6 h-6" />
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-white dark:bg-gray rounded-box mt-12 border-1"
        >
          <li>
            {navLinks.map(({ label, path }) => (
              <Link key={label} href={path}>
                {label}
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
