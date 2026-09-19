"use client";

import { useState } from "react";
import { useReveal } from "@/lib/useReveal";
import SplitLines from "@/components/anim/SplitLines";

const CATEGORIES = [
  {
    id: "casual",
    index: "01",
    title: "Casual Wear",
    image: "/filo/product-korean.jpg",
    blurb:
      "Relaxed blocks and denim-weight constructions built for everyday wear.",
    items: [
      "Men's Baggy Jeans",
      "Men's Korean Pintuck Pants",
      "Men's Shorts",
      "Women's Barrel Fit",
      "Women's Bootcut",
      "Women's Flared",
      "Women's Skinny Fit",
      "Women's Regular Fit",
      "Women's Relaxed Fit",
      "Women's Mom Fit",
    ],
  },
  {
    id: "formal",
    index: "02",
    title: "Formal Wear",
    image: "/filo/lookbook-1.jpg",
    blurb:
      "Structured trousers with clean waistbands, welt pockets and a pressed finish.",
    items: [
      "Men's Formal Trousers",
      "Men's Power-Stretch Pants (Flexi)",
      "Men's Chinos",
      "Women's Tailored Fit",
      "Women's Slim Fit",
      "Women's Super Slim Fit",
      "Women's Straight Fit",
    ],
  },
  {
    id: "active",
    index: "03",
    title: "Active & Utility",
    image: "/filo/product-travel.jpg",
    blurb:
      "Bartacked stress points, zip pockets and stretch fabrics for movement.",
    items: [
      "Men's Cargos",
      "Men's Travel Pants",
      "Men's Sweatpants & Joggers",
      "Women's Joggers",
      "Women's Tapered Fit",
    ],
  },
  {
    id: "lounge",
    index: "04",
    title: "Comfort & Lounge",
    image: "/filo/product-linen.jpg",
    blurb:
      "Soft handles, elasticated waists and generous drape in linen and blends.",
    items: [
      "Men's Lounge Pants",
      "Women's Loose Fit",
      "Women's Baggy Fit",
      "Women's Wide Leg",
      "Women's Straight",
    ],
  },
];

export default function Products() {
  const scopeRef = useReveal({ stagger: 0.06 });
  const [active, setActive] = useState(CATEGORIES[0].id);

  const current = CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0];

  return (
    <section
      id="products"
      ref={scopeRef}
      className="relative py-24 md:py-36"
    >
      <div className="shell">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p data-reveal className="eyebrow mb-8">
              What we make
            </p>
            <SplitLines className="display max-w-[16ch] text-[clamp(2.4rem,5.5vw,4.6rem)] text-ink">
              Four categories,<span className="text-clay"> 27 fits</span>
            </SplitLines>
          </div>

          <p data-reveal className="max-w-[38ch] text-sm leading-[1.8] text-ink-dim">
            Every fit below is a live block we already grade and produce. Bring
            your own tech pack or start from ours.
          </p>
        </div>

        {/* Desktop: a persistent preview beside a selectable index.
            Mobile: the same data as a plain stacked list — no hover required. */}
        <div className="grid gap-10 lg:grid-cols-[0.44fr_0.56fr] lg:gap-16">
          {/* The caption sits below the photo rather than on top of it. These
              are arbitrary product shots — some dark, some bright — so dark
              text overlaid on them is legible only by luck. */}
          <div data-reveal className="hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden bg-paper-raised">
              {CATEGORIES.map((category) => (
                <img
                  key={category.id}
                  src={category.image}
                  alt={`${category.title} sample`}
                  loading="lazy"
                  decoding="async"
                  // All four stay mounted and cross-fade, so switching never
                  // triggers a network request or a flash of empty space.
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-editorial ${
                    category.id === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            <div className="border-x border-b border-ink/10 bg-paper px-7 py-6">
              <span className="text-label uppercase text-clay">
                {current.index}
              </span>
              <h3 className="mt-3 font-display text-3xl font-bold uppercase tracking-tightest text-ink">
                {current.title}
              </h3>
              <p className="mt-3 max-w-[38ch] text-sm leading-relaxed text-ink-dim">
                {current.blurb}
              </p>
            </div>
          </div>

          <ul className="border-t border-ink/10">
            {CATEGORIES.map((category) => {
              const isActive = category.id === active;

              return (
                <li
                  key={category.id}
                  data-reveal
                  className="border-b border-ink/10"
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActive(category.id)}
                    onFocus={() => setActive(category.id)}
                    onClick={() => setActive(category.id)}
                    aria-expanded={isActive}
                    className="group flex w-full items-center gap-5 py-6 text-left"
                  >
                    <span
                      className={`text-[10px] tracking-label transition-colors duration-300 ${
                        isActive ? "text-clay" : "text-ink-faint"
                      }`}
                    >
                      {category.index}
                    </span>

                    <span
                      className={`flex-1 font-display text-2xl font-bold uppercase tracking-tightest transition-colors duration-300 md:text-4xl ${
                        isActive ? "text-clay" : "text-ink group-hover:text-clay"
                      }`}
                    >
                      {category.title}
                    </span>

                    <span className="text-xs text-ink-faint">
                      {category.items.length} fits
                    </span>
                  </button>

                  {/* Mobile image: only the active card loads one. */}
                  <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-editorial lg:hidden ${
                      isActive ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <img
                      src={category.image}
                      alt={`${category.title} sample`}
                      loading="lazy"
                      decoding="async"
                      className="mb-5 h-64 w-full object-cover"
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-editorial ${
                      isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="flex flex-wrap gap-2 pb-7">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="border border-ink/12 px-3 py-2 text-xs text-ink-dim"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
