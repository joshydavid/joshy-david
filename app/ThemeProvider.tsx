"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { Theme } from "./constant";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider themes={[Theme.LIGHT, Theme.DARK]} {...props}>
      {children}
    </NextThemesProvider>
  );
}
