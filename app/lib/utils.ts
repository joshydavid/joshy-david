import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortData<T extends { id: number }>(data: T[]): T[] {
  return data.sort((a, b) => b.id - a.id);
}
