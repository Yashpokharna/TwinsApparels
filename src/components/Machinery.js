"use client";

import { useReveal } from "@/lib/useReveal";
import SplitLines from "@/components/anim/SplitLines";

const MACHINES = [
  { name: "Single Needle", count: 50, group: "Stitching" },
  { name: "5 Thread Overlock", count: 8, group: "Stitching" },
  { name: "Tandom", count: 6, group: "Stitching" },
  { name: "Edge Cutter", count: 2, group: "Stitching" },
  { name: "Bottom Hemming Blind Stitch", count: 2, group: "Finishing" },
  { name: "Bartack", count: 2, group: "Finishing" },
  { name: "Loop Blind", count: 1, group: "Finishing" },
  { name: "Loop Kansai", count: 1, group: "Finishing" },
  { name: "Waistband Kansai", count: 1, group: "Finishing" },
  { name: "Button Attachment", count: 1, group: "Finishing" },
  { name: "Eyelet", count: 1, group: "Finishing" },
  { name: "Snap Button (Kaaj)", count: 1, group: "Finishing" },
  { name: "Auto Pocket Weld (APW)", count: 1, group: "Finishing" },
  { name: "Cutting Machine", count: 1, group: "Cutting" },
  { name: "Fusing Machine", count: 1, group: "Cutting" },
  { name: "Pressing Table", count: 1, group: "Pressing" },
  { name: "Seam Buster", count: 1, group: "Pressing" },
  { name: "Boiler", count: 1, group: "Pressing" },
];

const TOTAL = MACHINES.reduce((sum, machine) => sum + machine.count, 0);

export default function Machinery() {
  const scopeRef = useReveal({ stagger: 0.03, y: 22 });

  return (
    <section
      id="machinery"
      ref={scopeRef}
      className="relative py-24 md:py-36"
    >
      <div className="shell">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p data-reveal className="eyebrow mb-8">
              On the floor
            </p>
            <SplitLines className="display max-w-[14ch] text-[clamp(2.4rem,5.5vw,4.6rem)] text-ink">
              <span className="text-clay">{TOTAL}</span> machines,
              <br />
              18 types
            </SplitLines>
          </div>

          <p data-reveal className="max-w-[38ch] text-sm leading-[1.8] text-ink-dim">
            The full list, published because buyers ask for it before they place
            an order. Counts are current floor capacity.
          </p>
        </div>

        {/* A dense technical table rather than decorated cards — this list is
            read as a spec sheet, so it should look like one. */}
        <div data-reveal className="border-t border-ink/15">
          <div className="hidden grid-cols-[3rem_1fr_9rem_5rem] gap-4 border-b border-ink/10 px-2 py-4 text-[10px] uppercase tracking-label text-ink-faint md:grid">
            <span>#</span>
            <span>Machine</span>
            <span>Stage</span>
            <span className="text-right">Units</span>
          </div>

          <ul>
            {MACHINES.map((machine, i) => (
              <li
                key={machine.name}
                data-reveal
                className="group grid grid-cols-[2.5rem_1fr_3.5rem] items-center gap-4 border-b border-ink/[0.07]
                           px-2 py-5 transition-colors duration-300 hover:bg-ink/[0.03]
                           md:grid-cols-[3rem_1fr_9rem_5rem]"
              >
                <span className="text-[10px] tracking-label text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="text-sm text-ink transition-colors duration-300 group-hover:text-clay md:text-base">
                  {machine.name}
                </span>

                <span className="hidden text-[10px] uppercase tracking-label text-ink-dim md:block">
                  {machine.group}
                </span>

                <span className="text-right font-display text-lg font-bold tracking-tightest text-ink md:text-xl">
                  {machine.count}
                </span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-[2.5rem_1fr_3.5rem] items-center gap-4 px-2 py-6 md:grid-cols-[3rem_1fr_9rem_5rem]">
            <span />
            <span className="text-[10px] uppercase tracking-label text-ink-faint">
              Total installed capacity
            </span>
            <span className="hidden md:block" />
            <span className="text-right font-display text-2xl font-bold tracking-tightest text-clay">
              {TOTAL}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
