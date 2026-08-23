import { clsx } from "clsx";

export function cn(...inputs) {
  // Simplifies writing conditional styles in React without messy string concatenations
  return clsx(inputs);
}
