/** Must match --intro-hold / --intro-lift in globals.css. */
export const INTRO_HOLD_MS = 2200;
export const INTRO_LIFT_MS = 900;

const DONE_EVENT = "ta:intro-done";

/**
 * Resolves once the entry curtain has fully lifted — or immediately if it was
 * skipped (already seen this session, or reduced motion).
 *
 * The hero reveal has to wait for this. Without it the heading animates on
 * mount, which is while the curtain is still covering the page, so the one
 * animation most worth seeing plays to nobody.
 */
export function whenIntroDone() {
  if (typeof document === "undefined") return Promise.resolve();

  const root = document.documentElement;
  if (root.dataset.intro === "skip" || root.dataset.intro === "done") {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    document.addEventListener(DONE_EVENT, () => resolve(), { once: true });
    // Failsafe: never leave the hero hidden because an event was missed.
    setTimeout(resolve, INTRO_HOLD_MS + INTRO_LIFT_MS + 800);
  });
}

export function markIntroDone() {
  const root = document.documentElement;

  /*
   * Never overwrite "skip".
   *
   * The CSS that hides the curtain on repeat visits keys off that exact
   * value (`html[data-intro="skip"] .intro { display: none }`). Replacing it
   * with "done" re-displayed a curtain that was meant to be skipped — and
   * because a CSS animation only starts once its element is displayed, the
   * 2.2s hold began *then*, covering the page long after the hero had
   * already finished animating underneath it.
   */
  if (root.dataset.intro !== "skip") {
    root.dataset.intro = "done";
  }

  document.dispatchEvent(new CustomEvent(DONE_EVENT));
}
