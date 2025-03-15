"use client";

import ToggleSwitch from "@/components/ToggleSwitch";
import { format } from "date-fns";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [currDate, setCurrDate] = useState<string>();

  useEffect(() => {
    const date = new Date();
    const formattedDate = format(date, "EEE hh:mm a");
    setCurrDate(formattedDate);
  }, []);

  return (
    <div className="flex w-full flex-row items-center justify-between gap-4 bg-white px-6 pt-12 dark:bg-stone-950 lg:justify-evenly lg:px-0">
      <p>{currDate}</p>
      <ToggleSwitch />
    </div>
  );
}
