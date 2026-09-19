"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitLines from "@/components/anim/SplitLines";

const PLATES = [
  { src: "/filo/lifestyle-1.jpg", caption: "Flexi — 4-way power stretch", depth: 0.12 },
  { src: "/filo/product-flexi.jpg", caption: "Waistband & fly construction", depth: 0.26 },
  { src: "/filo/lookbook-3.jpg", caption: "Korean pintuck, relaxed block", depth: 0.06 },
  { src: "/filo/product-9to5.jpg", caption: "9TO5 — pressed formal finish", depth: 0.2 },
];

export default function Lookbook() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Each plate drifts at its own rate against the scroll. One scrubbed
        // tween per plate, transform-only, so it stays on the compositor.
        const tweens = gsap.utils.toArray("[data-plate]").map((plate) =>
          gsap.fromTo(
            plate,
            { yPercent: Number(plate.dataset.depth) * 60 },
            {
              yPercent: Number(plate.dataset.depth) * -60,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.7,
              },
            }
          )
        );

        return () => tweens.forEach((t) => t.kill());
      });

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Production samples"
      className="relative overflow-hidden py-24 md:py-36"
    >
      <div className="shell">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SplitLines className="display max-w-[16ch] text-[clamp(2.2rem,5vw,4rem)] text-ink">
            Off the line
          </SplitLines>
          <p className="max-w-[34ch] text-sm leading-[1.8] text-ink-dim">
            A sample of finished pieces produced at the Hamirgarh unit.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {PLATES.map((plate, i) => (
            <figure
              key={plate.src}
              data-plate
              data-depth={plate.depth}
              className={`group will-change-transform ${
                i % 2 === 1 ? "mt-8 md:mt-14" : ""
              }`}
            >
              <div className="aspect-[3/4] overflow-hidden bg-paper-raised">
                <img
                  src={plate.src}
                  alt={plate.caption}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-editorial group-hover:scale-105"
                />
              </div>

              <figcaption className="mt-4 text-[10px] uppercase leading-relaxed tracking-label text-ink-faint">
                {plate.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
