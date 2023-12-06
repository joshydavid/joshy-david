import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import { Bars2Icon } from "@heroicons/react/20/solid";

export default function Dropdown() {
  return (
    <div className="flex justify-end w-full md:hidden dropdown dropdown-bottom mt-5 mr-12">
      <div tabIndex={0} role="button" className="btn">
        <Bars2Icon className="w-6 h-6" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box mt-3"
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
  );
}
