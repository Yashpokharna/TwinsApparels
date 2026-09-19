"use client";

const ITEMS = [
  "Formal Trousers",
  "Power-Stretch Flexi",
  "Chinos",
  "Baggy Jeans",
  "Korean Pintuck",
  "Cargos",
  "Travel Pants",
  "Joggers",
  "Wide Leg",
  "Linen",
  "Bootcut",
  "Lounge Pants",
];

export default function Marquee() {
  return (
    <section
      aria-label="Fits we manufacture"
      className="relative border-y border-ink/10 bg-paper-raised"
    >
      {/*
        Fixed label. Solid, so items slide *under* it and disappear against a
        deliberate hard edge — which is also why the left side needs no fade.
        Hidden on small screens, where it would eat most of the width.
      */}
      <div className="absolute inset-y-0 left-0 z-20 hidden items-center bg-ink px-7 md:flex">
        <span className="whitespace-nowrap text-label font-semibold uppercase text-paper">
          Fits we make
        </span>
      </div>

      <div className="overflow-hidden">
        {/* Two identical copies translated by exactly -50%, so the loop is
            seamless. The duplicate is hidden from assistive tech. */}
        <div className="flex w-max animate-marquee will-change-transform motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? "true" : undefined}
              className="flex shrink-0 items-center"
            >
              {ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-10 whitespace-nowrap py-6 pl-10 md:py-7"
                >
                  <span className="text-[13px] font-medium uppercase tracking-[0.2em] text-ink">
                    {item}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rotate-45 bg-clay"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Only the entry edge needs a fade — the exit edge is the label block.
          Matched to the band's own colour; it previously faded to `paper`,
          which is a different tone and left a visible wash over the last item. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-paper-raised to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-paper-raised to-transparent md:hidden" />
    </section>
  );
}
