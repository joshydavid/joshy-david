"use client";

import ToggleSwitch from "@/components/ToggleSwitch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks } from "@/data";
import Link from "next/link";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Dropdown() {
  return (
    <div className="flex w-full items-center justify-end gap-7 pr-8 pt-8 md:hidden">
      <ToggleSwitch />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <HamburgerMenuIcon className="h-6 w-6" />
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
