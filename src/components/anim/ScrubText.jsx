"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { prefersReducedMotion } from "@/lib/capability";

/**
 * The signature gsap.com paragraph: words start faint and brighten one by
 * one as the block moves through the viewport, tied directly to scroll
 * position rather than playing on a timer.
 *
 * Words, not characters. gsap.com animates per character, but this paragraph
 * is several times longer than theirs — per character would mean ~400
 * absolutely-positioned elements repainting every scroll frame, for an effect
 * that is indistinguishable at reading size.
 *
 * `color` is animated rather than `opacity` deliberately: colour is a paint,
 * while opacity on hundreds of elements tends to promote each one to its own
 * compositor layer.
 */
export default function ScrubText({
  as: Tag = "p",
  children,
  className = "",
  from = "#B8B2A8",
  to = "#14110E",
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.style.color = to;
      return;
    }

    gsap.registerPlugin(ScrollTrigger, SplitText);

    let split;
    let cancelled = false;

    document.fonts.ready.then(() => {
      if (cancelled || !ref.current) return;

      split = SplitText.create(el, {
        type: "words",
        autoSplit: true,
        aria: "auto",
        onSplit: (self) =>
          gsap.fromTo(
            self.words,
            { color: from },
            {
              color: to,
              ease: "none",
              // A stagger much larger than the duration is what spreads the
              // sweep across the whole scroll range instead of firing at once.
              duration: 1,
              stagger: 0.45,
              scrollTrigger: {
                trigger: el,
                start: "top 82%",
                end: "bottom 60%",
                scrub: true,
              },
            }
          ),
      });
    });

    return () => {
      cancelled = true;
      split?.revert();
    };
  }, [from, to]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
