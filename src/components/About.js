"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReveal } from "@/lib/useReveal";
import SplitLines from "@/components/anim/SplitLines";
import ScrubText from "@/components/anim/ScrubText";

const FIGURES = [
  { value: 25, suffix: "K+", label: "Garments produced monthly" },
  { value: 110, suffix: "+", label: "Skilled people on floor" },
  { value: 82, suffix: "", label: "Machines in operation" },
  { value: 18, suffix: "", label: "Machine types in-house" },
];

function formatNumber(value) {
  return Math.round(value).toLocaleString("en-IN");
}

export default function About() {
  const scopeRef = useReveal();
  const figuresRef = useRef(null);

  useEffect(() => {
    const host = figuresRef.current;
    if (!host) return;

    gsap.registerPlugin(ScrollTrigger);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = host.querySelectorAll("[data-count]");

    if (reduced) {
      nodes.forEach((node) => {
        node.textContent = formatNumber(Number(node.dataset.count));
      });
      return;
    }

    const ctx = gsap.context(() => {
      nodes.forEach((node) => {
        const target = Number(node.dataset.count);
        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => {
            node.textContent = formatNumber(counter.value);
          },
          scrollTrigger: { trigger: host, start: "top 80%", once: true },
        });
      });
    }, host);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={scopeRef}
      className="relative py-24 md:py-36"
    >
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
          <div>
            <p data-reveal className="eyebrow mb-8">
              Who we are
            </p>
            <SplitLines className="display text-[clamp(2.4rem,5.5vw,4.6rem)] text-ink">
              Built around
              <br />
              <span className="text-clay">the fit</span>
            </SplitLines>
          </div>

          <div className="flex flex-col gap-7">
            <ScrubText className="text-balance border-l border-clay pl-6 text-lg leading-[1.7] md:text-xl">
              Twins Apparels turns fabric into ready-to-wear bottomwear. We run a
              complete line — cutting, fusing, stitching, finishing and pressing —
              so a style never leaves the building half-made.
            </ScrubText>

            <p data-reveal className="max-w-[58ch] leading-[1.8] text-ink-dim">
              We work with brands and private label buyers who need consistent
              output at volume: the same fit, the same seam, the same hand-feel,
              roll after roll. Every garment is checked against a spec before it
              is packed, and our machine list is public because our buyers ask
              for it.
            </p>

            <div
              ref={figuresRef}
              className="mt-4 grid grid-cols-2 gap-px border border-ink/10 bg-ink/10 lg:grid-cols-4"
            >
              {FIGURES.map((figure) => (
                <div
                  key={figure.label}
                  data-reveal
                  className="group bg-paper px-5 py-7 transition-colors duration-500 hover:bg-paper-raised"
                >
                  <span className="flex items-baseline font-display text-3xl font-bold tracking-tightest text-ink">
                    <span data-count={figure.value}>0</span>
                    <span className="text-clay">{figure.suffix}</span>
                  </span>
                  <span className="mt-3 block text-[10px] uppercase leading-relaxed tracking-label text-ink-faint">
                    {figure.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
