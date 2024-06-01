"use client";

import ToggleSwitch from "@/components/ToggleSwitch";
import { format } from "date-fns";

export default function Navigation() {
  const date = new Date();
  const formattedDate = format(date, "EEE hh:mm a");

  return (
    <div className="flex w-full flex-row items-center justify-between gap-4 bg-white px-6 pt-12 dark:bg-black lg:justify-evenly lg:px-0">
      <p>{formattedDate}</p>
      <ToggleSwitch />
    </div>
  );
}
