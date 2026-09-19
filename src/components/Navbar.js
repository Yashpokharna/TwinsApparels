"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NAV } from "@/lib/site";


export default function Navbar() {
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    // A passive listener plus a rAF gate: the handler never blocks scrolling
    // and never runs more than once per frame.
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setCondensed(window.scrollY > 40);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile drawer and restore on close.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial
          ${
            condensed
              ? "border-b border-ink/10 bg-paper/80 py-3 backdrop-blur-xl"
              : "border-b border-transparent py-6"
          }`}
      >
        <div className="shell flex items-center justify-between gap-6">
          <Link
            href="#top"
            className="group flex items-baseline gap-2.5"
            aria-label="Twins Apparels — home"
          >
            <span className="font-display text-base font-extrabold uppercase tracking-[0.02em] text-ink">
              Twins
            </span>
            <span className="font-display text-base font-extrabold uppercase tracking-[0.02em] text-clay transition-colors duration-300 group-hover:text-ink">
              Apparels
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex xl:gap-9" aria-label="Primary">
            {NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-label font-medium uppercase text-ink-dim transition-colors duration-300 hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-clay transition-all duration-300 ease-editorial group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden whitespace-nowrap bg-ink px-5 py-3 text-label font-semibold uppercase text-paper transition-colors duration-300 hover:bg-clay hover:text-ink xl:inline-flex"
            >
              Request a Quote
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-ink/15 lg:hidden"
            >
              <span className="h-px w-4 bg-ink" />
              <span className="h-px w-4 bg-ink" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-paper/70 backdrop-blur-sm transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <nav
          aria-label="Mobile"
          className={`absolute right-0 top-0 flex h-full w-[min(88vw,26rem)] flex-col
                      border-l border-ink/10 bg-paper-raised px-8 pb-10 pt-8
                      transition-transform duration-500 ease-editorial
                      ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between">
            <span className="text-label uppercase text-ink-faint">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center border border-ink/15 text-lg text-ink"
            >
              ×
            </button>
          </div>

          <ul className="mt-12 flex flex-col gap-1">
            {NAV.map((link, i) => (
              <li key={link.href} className="border-b border-ink/[0.07]">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4 font-display text-3xl font-bold uppercase tracking-tightest text-ink transition-colors duration-300 hover:text-clay"
                >
                  <span className="text-[10px] font-medium tracking-label text-ink-faint">
                    0{i + 1}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-auto justify-center"
          >
            Request a Quote
          </a>
        </nav>
      </div>
    </>
  );
}
