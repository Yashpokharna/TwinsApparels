"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { prefersReducedMotion } from "@/lib/capability";
import { whenIntroDone } from "@/lib/intro";

/**
 * Masked line (or character) reveal — the gsap.com heading treatment.
 *
 * Each line is wrapped in its own overflow-hidden mask and slid up from
 * below, so the type appears to rise out of the page rather than fade in.
 *
 * The text is rendered normally on the server, so it is in the HTML for
 * crawlers; SplitText only rearranges it on the client, and `aria: "auto"`
 * keeps the original string exposed to screen readers rather than leaving
 * them to read a pile of single-character divs.
 */
export default function SplitLines({
  as: Tag = "h2",
  children,
  className = "",
  /** "lines" for headings, "chars" for the hero. */
  by = "lines",
  /** Play immediately on load instead of waiting for scroll. */
  immediate = false,
  delay = 0,
  stagger,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: leave the text exactly as rendered.
    if (prefersReducedMotion()) {
      el.classList.add("is-split");
      return;
    }

    gsap.registerPlugin(ScrollTrigger, SplitText);

    let split;
    let cancelled = false;

    // Two gates before splitting:
    //  - fonts.ready, because splitting against the fallback face puts the
    //    line breaks in the wrong places and mis-sizes the masks;
    //  - the intro curtain, for `immediate` headings only, so the hero
    //    reveal isn't spent behind a full-screen curtain.
    Promise.all([
      document.fonts.ready,
      immediate ? whenIntroDone() : Promise.resolve(),
    ]).then(() => {
      if (cancelled || !ref.current) return;

      const perChar = by === "chars";

      split = SplitText.create(el, {
        // "words" has to be in the list even when animating characters:
        // without word wrappers every character is its own inline-block and
        // lines break mid-word ("PRECISIO / N").
        type: perChar ? "chars,words,lines" : "lines",
        // Words are inline-block wrappers around inline-block characters, so
        // without nowrap a word that is wider than its column breaks between
        // glyphs. Plain text would have overflowed instead; this restores
        // that behaviour, making overflow the failure mode rather than a
        // word visibly snapped in half.
        wordsClass: "split-word",
        mask: "lines",
        // Re-splits on resize and on a late font swap, and re-runs onSplit.
        autoSplit: true,
        aria: "auto",
        onSplit: (self) => {
          const targets = perChar ? self.chars : self.lines;

          // Returning the tween lets autoSplit kill it before re-splitting,
          // so resizes don't leave orphaned tweens behind.
          return gsap.from(targets, {
            yPercent: 115,
            // A little rotation off the bottom-left corner: the characters
            // swing up into place rather than sliding straight, which is what
            // makes the reveal read as an animation instead of a redraw.
            rotate: perChar ? 5 : 0,
            transformOrigin: "0% 100%",
            duration: perChar ? 1.15 : 1,
            // A short beat after the curtain clears, so the reveal reads as
            // a deliberate entrance rather than something already in progress.
            delay: delay + (immediate ? 0.12 : 0),
            stagger: stagger ?? (perChar ? 0.045 : 0.1),
            ease: perChar ? "expo.out" : "power3.out",
            scrollTrigger: immediate
              ? undefined
              : { trigger: el, start: "top 88%", once: true },
          });
        },
      });

      el.classList.add("is-split");
    });

    return () => {
      cancelled = true;
      split?.revert();
    };
  }, [by, immediate, delay, stagger]);

  return (
    <Tag ref={ref} data-split className={className} {...rest}>
      {children}
    </Tag>
  );
}
