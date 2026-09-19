"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * One reveal implementation for the whole site.
 *
 * Every element with `data-reveal` inside the returned ref animates in as it
 * enters the viewport, staggered by DOM order within its container. Using a
 * single batched ScrollTrigger per section — rather than one per card, which
 * is what the old components did — keeps the trigger count low and scrolling
 * cheap on long pages.
 */
export function useReveal(options = {}) {
  const { y = 34, duration = 0.9, stagger = 0.08, start = "top 85%" } = options;
  const scopeRef = useRef(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    gsap.registerPlugin(ScrollTrigger);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = scope.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    if (reduced) {
      gsap.set(targets, { opacity: 1, y: 0, clearProps: "willChange" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power3.out",
          // Drop the compositor hint once the animation is done, so we don't
          // leave dozens of promoted layers sitting on the GPU.
          onComplete: () => gsap.set(targets, { clearProps: "willChange" }),
          scrollTrigger: {
            trigger: scope,
            start,
            once: true,
          },
        }
      );
    }, scope);

    return () => ctx.revert();
  }, [y, duration, stagger, start]);

  return scopeRef;
}
