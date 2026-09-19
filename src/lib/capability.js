/**
 * Motion preference check, shared by the smooth-scroll setup and every
 * animated component. Animation on this site is decoration — it must never be
 * the reason someone can't read the catalogue or find the phone number.
 */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
