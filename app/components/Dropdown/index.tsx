"use client";

import Link from "next/link";
import { Bars2Icon } from "@heroicons/react/20/solid";
import ToggleSwitch from "../ToggleSwitch";
import { navLinks } from "@/data";

export default function Dropdown() {
  const handleClick = (): void => {
    const elem: HTMLElement | null = document.activeElement as HTMLElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <div className="flex justify-end items-center gap-7 w-full md:hidden pt-5 pr-5">
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
          className="dropdown-content z-[1] menu p-2 shadow bg-white dark:bg-gray text-black dark:text-white rounded-box mt-12 border-1"
        >
          <li onClick={handleClick}>
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
