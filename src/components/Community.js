"use client";

import { useReveal } from "@/lib/useReveal";
import SplitLines from "@/components/anim/SplitLines";

const VALUES = [
  {
    index: "01",
    title: "Consistency at volume",
    body: "The tenth thousand garment matches the first. Fixed operations per station, spec checks before packing, and shade banding on every roll.",
  },
  {
    index: "02",
    title: "Responsible production",
    body: "Fair hours for 110+ people, efficient marker planning to cut fabric waste, and steam recovered from a single central boiler.",
  },
  {
    index: "03",
    title: "Built to a tech pack",
    body: "Bring a spec and we grade to it. No substituted trims, no silent block changes, no surprises at dispatch.",
  },
];

export default function Community() {
  const scopeRef = useReveal();

  return (
    <section
      ref={scopeRef}
      aria-label="How we work"
      className="relative py-24 md:py-36"
    >
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[0.36fr_0.64fr] lg:gap-20">
          <div>
            <p data-reveal className="eyebrow mb-8">
              How we work
            </p>
            <SplitLines className="display text-[clamp(2.4rem,5.5vw,4.6rem)] text-ink">
              Three
              <br />
              <span className="text-clay">commitments</span>
            </SplitLines>

            <div
              data-reveal
              className="mt-10 hidden aspect-[4/3] overflow-hidden bg-paper-raised lg:block"
            >
              <img
                src="/filo/lifestyle-2.jpg"
                alt="Finished garments from the Twins Apparels line"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-editorial hover:scale-105"
              />
            </div>
          </div>

          <ul className="border-t border-ink/10">
            {VALUES.map((value) => (
              <li
                key={value.index}
                data-reveal
                className="group border-b border-ink/10 py-9"
              >
                <div className="flex gap-6 md:gap-10">
                  <span className="pt-1 text-[10px] tracking-label text-clay">
                    {value.index}
                  </span>

                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tightest text-ink transition-colors duration-300 group-hover:text-clay md:text-3xl">
                      {value.title}
                    </h3>
                    <p className="mt-4 max-w-[54ch] text-sm leading-[1.85] text-ink-dim md:text-base">
                      {value.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
