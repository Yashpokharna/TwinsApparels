"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitLines from "@/components/anim/SplitLines";
import { whenIntroDone } from "@/lib/intro";

const STATS = [
  { value: "25K+", label: "Garments / month" },
  { value: "110+", label: "Skilled staff" },
  { value: "82", label: "Machines on floor" },
];

export default function HeroSection() {
  const rootRef = useRef(null);
  const platesRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!reduced) {
        // Paused, then released once the curtain has lifted. Running it on
        // mount meant the entire hero entrance — eyebrow, copy, buttons,
        // stats, images — played out behind a full-screen curtain and was
        // already finished by the time anyone could see the page.
        const intro = gsap
          .timeline({ paused: true, defaults: { ease: "power3.out" } })
          .from("[data-hero-eyebrow]", { opacity: 0, y: 16, duration: 0.7 }, 0.15)
          .from("[data-hero-body]", { opacity: 0, y: 20, duration: 0.8 }, 0.75)
          .from("[data-hero-cta]", { opacity: 0, y: 18, duration: 0.7 }, 0.9)
          .from(
            "[data-hero-stat]",
            { opacity: 0, y: 20, duration: 0.7, stagger: 0.08 },
            1.0
          )
          .from(
            "[data-hero-plate]",
            { opacity: 0, yPercent: 12, duration: 1.2, stagger: 0.12 },
            0.5
          );

        whenIntroDone().then(() => intro.play());

        // Scroll-linked parallax on the image plates. `scrub` ties it to the
        // scrollbar so the two plates drift against each other as you scroll.
        gsap.to("[data-hero-plate='0']", {
          yPercent: -16,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });

        gsap.to("[data-hero-plate='1']", {
          yPercent: -32,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });

        // Copy drifts up and dims as the hero leaves — hands the eye off to
        // the next section instead of scrolling away rigidly.
        gsap.to("[data-hero-copy]", {
          yPercent: -12,
          opacity: 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "center center",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-10 pt-32 md:pb-14 md:pt-40"
    >
      <div className="shell grid flex-1 items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        {/* Copy */}
        <div data-hero-copy className="relative">
          <p data-hero-eyebrow className="eyebrow mb-8">
            Bhilwara, Rajasthan
          </p>

          {/* Per-character reveal, gsap.com style. SplitLines masks each line
              and slides its characters up out of it. */}
          <SplitLines
            as="h1"
            by="chars"
            immediate
            delay={0.15}
            className="display text-[clamp(3.2rem,8.6vw,9rem)] text-ink"
          >
            Precision
            <br />
            In Every
            <br />
            <span className="text-clay">Thread</span>
          </SplitLines>

          <p
            data-hero-body
            className="mt-9 max-w-[46ch] text-[15px] leading-[1.75] text-ink-dim md:text-base"
          >
            A full-scale bottomwear manufacturing unit producing formal, casual,
            active and lounge fits for brands and private label — cut, stitched
            and finished under one roof.
          </p>

          <div data-hero-cta className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary">
              Request a Quote
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="/Catalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              View Catalogue
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label} data-hero-stat>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-bold tracking-tightest text-ink md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-[10px] uppercase tracking-label text-ink-faint">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Small screens get a single full-width plate instead of the
            offset pair, which needs width to read as a composition. */}
        <div
          data-hero-plate="0"
          className="relative mx-[calc(var(--shell-x)*-1)] h-[46vh] overflow-hidden bg-paper-soft lg:hidden"
          aria-hidden="true"
        >
          <img
            src="/filo/product-ease-grey.jpg"
            alt=""
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent" />
        </div>

        {/* Image plates — offset pair, parallaxed against each other */}
        <div
          ref={platesRef}
          className="relative hidden h-[64vh] lg:block"
          aria-hidden="true"
        >
          <div
            data-hero-plate="0"
            className="absolute right-0 top-0 h-[78%] w-[68%] overflow-hidden bg-paper-soft"
          >
            <img
              src="/filo/product-ease-grey.jpg"
              alt=""
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          <div
            data-hero-plate="1"
            className="absolute bottom-0 left-0 h-[52%] w-[52%] overflow-hidden border border-ink/10 bg-paper-soft"
          >
            <img
              src="/filo/lifestyle-1.jpg"
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="shell mt-12 flex items-center justify-between">
        <span className="flex items-center gap-3 text-[10px] uppercase tracking-label text-ink-faint">
          <span className="relative h-8 w-px overflow-hidden bg-ink/15">
            <span className="absolute inset-x-0 top-0 h-3 bg-clay [animation:scrollCue_2.2s_ease-in-out_infinite]" />
          </span>
          Scroll
        </span>

        <span className="hidden text-[10px] uppercase tracking-label text-ink-faint md:block">
          Fabric · Form · Function
        </span>
      </div>
    </section>
  );
}
