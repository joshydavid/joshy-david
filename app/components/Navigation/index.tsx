"use client";

import ToggleSwitch from "@/components/ToggleSwitch";
import { format } from "date-fns";

export default function Navigation() {
  const date = new Date();
  const formattedDate = format(date, "EEE HH:mm a");

  return (
    <div className="flex flex-row gap-4 bg-white dark:bg-black w-full justify-between px-6 lg:px-0 lg:justify-evenly items-center pt-12">
      <p>{formattedDate}</p>
      <ToggleSwitch />
    </div>
  );
}
