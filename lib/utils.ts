import { techMap } from "@/constants/techMap";
import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string) => {
  const normalizedName = techName.replace(/[ .]/g, "").toLowerCase();
  return techMap[normalizedName]
    ? `${techMap[normalizedName]} colored`
    : "devicon-devicon-plain";
};
