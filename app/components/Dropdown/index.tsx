"use client";

import Link from "next/link";
import ToggleSwitch from "../ToggleSwitch";
import { navLinks } from "@/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Dropdown() {
  return (
    <div className="flex justify-end items-center gap-7 w-full md:hidden pt-8 pr-8">
      <ToggleSwitch />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <HamburgerMenuIcon className="w-6 h-6" />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {navLinks.map(({ label, path }) => (
            <Link key={label} href={path}>
              <DropdownMenuItem>{label}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
