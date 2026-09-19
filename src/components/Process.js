"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitLines from "@/components/anim/SplitLines";

const STEPS = [
  {
    index: "01",
    title: "Fabric In",
    body: "Rolls are received, relaxed and inspected for shade, width and defects before a single piece is cut.",
    detail: "Shade banding · Shrinkage test",
  },
  {
    index: "02",
    title: "Cutting",
    body: "Markers are laid for optimum consumption, then spread and cut to the graded block for the order.",
    detail: "Cutting machine · Fusing",
  },
  {
    index: "03",
    title: "Stitching",
    body: "The line runs single needle, overlock, kansai and bartack stations, each operator on a fixed operation.",
    detail: "50 single needle · 8 overlock",
  },
  {
    index: "04",
    title: "Finishing",
    body: "Buttons, eyelets, loops and blind-stitch hems go on, followed by thread trimming and seam busting.",
    detail: "Bartack · Eyelet · Kaaj",
  },
  {
    index: "05",
    title: "Pressing & QC",
    body: "Steam pressing on table, then every garment is measured against the spec sheet before packing.",
    detail: "Boiler · Pressing table",
  },
  {
    index: "06",
    title: "Pack & Dispatch",
    body: "Folded, tagged and cartoned to the buyer's packing list, ready for pickup from the unit.",
    detail: "Ratio packing · Carton marking",
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      // Pinned horizontal scroll is a desktop-only affordance: on touch it
      // fights native momentum and costs far more than it's worth, so phones
      // get a plain swipeable row instead (see the CSS classes below).
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        },
        () => {
          const distance = () => track.scrollWidth - window.innerWidth;

          const tween = gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              // Scroll length is tied to the track width, so adding a step
              // doesn't require retuning the scroll distance by hand.
              end: () => `+=${distance()}`,
              pin: true,
              scrub: 0.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          return () => tween.kill();
        }
      );

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:h-screen lg:py-0"
    >
      <div className="flex h-full flex-col justify-center">
        <div className="shell mb-12 lg:mb-16">
          <p className="eyebrow mb-8">How it runs</p>
          <SplitLines className="display max-w-[18ch] text-[clamp(2.4rem,5.5vw,4.6rem)] text-ink">
            Fabric to carton,<span className="text-clay"> in six steps</span>
          </SplitLines>
        </div>

        {/* Desktop: transformed by ScrollTrigger. Touch: native scroll-snap. */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto px-[var(--shell-x)] pb-6
                     [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                     snap-x snap-mandatory
                     lg:overflow-visible lg:pb-0 lg:will-change-transform"
        >
          {STEPS.map((step) => (
            <article
              key={step.index}
              className="group flex w-[78vw] shrink-0 snap-start flex-col justify-between
                         border border-ink/10 bg-paper-raised/70 p-8 backdrop-blur-sm
                         transition-colors duration-500 ease-editorial hover:border-clay/50
                         sm:w-[52vw] md:w-[38vw] lg:h-[26rem] lg:w-[24rem] lg:p-10"
            >
              <div>
                <span className="font-display text-5xl font-bold tracking-tightest text-ink/15 transition-colors duration-500 group-hover:text-clay/40">
                  {step.index}
                </span>

                <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tightest text-ink">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-[1.8] text-ink-dim">
                  {step.body}
                </p>
              </div>

              <p className="mt-8 border-t border-ink/10 pt-5 text-[10px] uppercase tracking-label text-ink-faint">
                {step.detail}
              </p>
            </article>
          ))}
        </div>

        <p className="shell mt-8 text-[10px] uppercase tracking-label text-ink-faint lg:mt-10">
          <span className="lg:hidden">Swipe to explore →</span>
          <span className="hidden lg:inline">Keep scrolling →</span>
        </p>
      </div>
    </section>
  );
}
