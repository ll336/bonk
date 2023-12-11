import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
export function cleanPathname (pathname) {
  if (pathname === "/") return "home";
  return pathname.replace("/", "");
};
