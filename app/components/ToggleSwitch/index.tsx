"use client";

import { Switch } from "@/components/ui/switch";
import { Theme } from "@/constant";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ToggleSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const enabled = theme === Theme.DARK;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Switch
      checked={enabled}
      onCheckedChange={() =>
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
      }
    />
  );
}
