"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReveal } from "@/lib/useReveal";
import { prefersReducedMotion } from "@/lib/capability";
import SplitLines from "@/components/anim/SplitLines";
import { SITE, NAV, SOCIAL } from "@/lib/site";

export default function Footer() {
  const scopeRef = useReveal({ stagger: 0.05 });
  const marqueeRef = useRef(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    const track = marqueeRef.current;
    if (!track || prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Paused until the band is actually on screen: that guarantees the first
      // thing anyone sees is the start of the wordmark, and it means we aren't
      // animating a transform for the whole length of the page.
      const tween = gsap.to(track, {
        xPercent: -50,
        duration: 26,
        ease: "none",
        repeat: -1,
        paused: true,
      });

      ScrollTrigger.create({
        trigger: track,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => (self.isActive ? tween.play() : tween.pause()),
      });
    }, track);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={scopeRef} className="relative bg-paper-raised">
      {/* ---------------------------------------------------------------- *
       * Closing CTA. This is a lead-generation site, so the last thing on
       * the page should be an ask, not a sitemap.
       * ---------------------------------------------------------------- */}
      <section className="border-y border-ink/10">
        <div className="shell grid gap-10 py-20 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p data-reveal className="eyebrow mb-8">
              Next step
            </p>

            <SplitLines className="display text-[clamp(2.2rem,5vw,4.2rem)] text-ink">
              Put your next style
              <br />
              <span className="text-clay">on our line</span>
            </SplitLines>
          </div>

          <div className="flex flex-col gap-7 lg:items-end">
            <p
              data-reveal
              className="max-w-[40ch] text-sm leading-[1.8] text-ink-dim lg:text-right"
            >
              Send a tech pack and a quantity. You'll get a costing, a lead time
              and a sample plan back from one of the founders.
            </p>

            <div data-reveal className="flex flex-wrap gap-4">
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
                Catalogue
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- *
       * Details. Four even columns so the right-hand side doesn't strand
       * a block of empty space the way a 1.4/1/1 split did.
       * ---------------------------------------------------------------- */}
      <section className="shell grid gap-12 py-16 sm:grid-cols-2 md:py-20 lg:grid-cols-4 lg:gap-10">
        <div data-reveal className="lg:col-span-1">
          <h2 className="text-[10px] uppercase tracking-label text-ink-faint">
            Contact
          </h2>
          <ul className="mt-6 flex flex-col gap-4 text-sm">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="text-ink transition-colors duration-300 hover:text-clay"
              >
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={SITE.phoneHref}
                className="text-ink transition-colors duration-300 hover:text-clay"
              >
                {SITE.phone}
              </a>
            </li>
            <li className="text-ink-faint">{SITE.hours}</li>
          </ul>
        </div>

        <div data-reveal>
          <h2 className="text-[10px] uppercase tracking-label text-ink-faint">
            Unit
          </h2>
          <address className="mt-6 max-w-[28ch] text-sm not-italic leading-[1.8] text-ink-dim">
            {SITE.address}
          </address>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-clay transition-opacity duration-300 hover:opacity-70"
          >
            Directions ↗
          </a>
        </div>

        <nav data-reveal aria-label="Footer">
          <h2 className="text-[10px] uppercase tracking-label text-ink-faint">
            Sitemap
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
            {NAV.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-dim transition-colors duration-300 hover:text-clay"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div data-reveal>
          <h2 className="text-[10px] uppercase tracking-label text-ink-faint">
            Elsewhere
          </h2>
          <ul className="mt-6 flex flex-col gap-3">
            {SOCIAL.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-dim transition-colors duration-300 hover:text-clay"
                >
                  {social.name} ↗
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-dim transition-colors duration-300 hover:text-clay"
              >
                Catalogue (PDF) ↗
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------------- *
       * Brand band. Sits inside its own full-bleed rule at the bottom so
       * the wordmark reads as a signature closing the page, rather than an
       * oversized headline floating above the columns.
       * ---------------------------------------------------------------- */}
      <div
        className="overflow-hidden border-t border-ink/10 py-6 md:py-8"
        aria-hidden="true"
      >
        <div
          ref={marqueeRef}
          className="flex w-max select-none will-change-transform"
        >
          {[0, 1].map((copy) => (
            <p
              key={copy}
              className="display whitespace-nowrap pr-[0.5em] text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.9] text-clay"
            >
              {SITE.name}
            </p>
          ))}
        </div>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-ink/10 py-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10px] uppercase tracking-label text-ink-faint">
          © {year} {SITE.name} · Bhilwara, Rajasthan
        </p>

        <a
          href="https://yashpokharna.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 self-start border border-clay/40 px-4 py-2.5
                     text-[10px] uppercase tracking-label text-ink-dim
                     transition-colors duration-300 ease-editorial hover:border-clay hover:bg-clay hover:text-paper"
        >
          A product by
          <span className="font-semibold text-clay transition-colors duration-300 group-hover:text-paper">
            Yash Pokharna
          </span>
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
            ↗
          </span>
        </a>
      </div>
    </footer>
  );
}
