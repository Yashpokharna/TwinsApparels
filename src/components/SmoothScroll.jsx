"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/capability";

/**
 * Wires up smooth scrolling and makes Lenis and GSAP's ticker share a single
 * rAF loop. Running separate loops is the classic way these sites end up
 * janky, so everything is driven from gsap.ticker.
 */
export default function SmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // We're alive and will drive the reveals ourselves, so cancel the failsafe
    // set by the inline script in <head> (see layout.js).
    clearTimeout(window.__taFailsafe);
    document.documentElement.classList.add("js-ready");

    const reduced = prefersReducedMotion();

    // Reduced motion: leave native scrolling alone entirely.
    if (reduced) return;

    let lenis;
    let cancelled = false;
    let tick;

    // Dynamic import keeps Lenis out of the initial bundle.
    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;

      lenis = new Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        // Never intercept touch scrolling — native momentum is smoother and
        // cheaper on phones than anything we'd emulate.
        smoothTouch: false,
        touchMultiplier: 1.6,
      });

      lenis.on("scroll", ScrollTrigger.update);

      tick = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      // Anchor links have to go through Lenis or they fight the smooth scroll.
      const onAnchorClick = (event) => {
        const anchor = event.target.closest?.('a[href^="#"]');
        if (!anchor) return;

        const id = anchor.getAttribute("href");
        if (!id || id === "#") return;

        const target = document.querySelector(id);
        if (!target) return;

        event.preventDefault();
        lenis.scrollTo(target, { offset: -90, duration: 1.2 });
      };

      document.addEventListener("click", onAnchorClick);
      lenis.__onAnchorClick = onAnchorClick;

      ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      if (tick) gsap.ticker.remove(tick);
      if (lenis) {
        document.removeEventListener("click", lenis.__onAnchorClick);
        lenis.destroy();
      }
    };
  }, []);

  return null;
}
