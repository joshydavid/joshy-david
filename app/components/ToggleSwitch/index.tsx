"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";

export default function ToggleSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const enabled = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch.Group>
      <Switch
        checked={enabled}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`${
          enabled ? "bg-white" : "bg-lightGray"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-black transition`}
        />
      </Switch>
    </Switch.Group>
  );
}
