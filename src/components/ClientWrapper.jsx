"use client";

import { useEffect } from "react";
import SmoothScroll from "./SmoothScroll";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Intro from "./Intro";
import { INTRO_HOLD_MS, INTRO_LIFT_MS, markIntroDone } from "@/lib/intro";

export default function ClientWrapper({ children }) {
  useEffect(() => {
    const root = document.documentElement;
    const skipped =
      root.dataset.intro === "skip" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (skipped) {
      markIntroDone();
      return;
    }

    // Hold scrolling while the curtain is up. The curtain itself is pure CSS —
    // this only stops someone scrolling blind behind it and landing mid-page.
    document.body.style.overflow = "hidden";

    const curtain = document.querySelector(".intro");
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;

      document.body.style.overflow = "";
      // Releases the hero reveal (see lib/intro.js).
      markIntroDone();

      try {
        sessionStorage.setItem("ta:intro", "1");
      } catch {
        /* private mode — the intro just plays again next load */
      }
    };

    /*
     * Fire on the curtain's own animationend rather than a parallel timer.
     *
     * Two reasons. The timer started when this effect ran, while the CSS
     * animation started at first paint, so they drifted apart by however long
     * hydration took. And it fired when the lift *began*, which meant the
     * hero reveal spent its first ~800ms behind a curtain that was still
     * covering the page — the bulk of an ease-out, so what was left looked
     * like nothing had animated at all.
     */
    const onAnimationEnd = (event) => {
      // animationend bubbles: the intro's word and bar animations reach this
      // listener too, so match the curtain's own lift specifically.
      if (event.target !== curtain || event.animationName !== "introLift") return;
      finish();
    };

    curtain?.addEventListener("animationend", onAnimationEnd);

    // Failsafe: if the animation never runs (element missing, animation
    // stripped), don't leave the page locked and the hero hidden.
    const failsafe = setTimeout(finish, INTRO_HOLD_MS + INTRO_LIFT_MS + 500);

    return () => {
      clearTimeout(failsafe);
      curtain?.removeEventListener("animationend", onAnimationEnd);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* Rendered first and server-side so it covers the page from paint one. */}
      <Intro />

      <SmoothScroll />

      <Navbar />
      <main id="top">{children}</main>
      <Footer />
    </>
  );
}
