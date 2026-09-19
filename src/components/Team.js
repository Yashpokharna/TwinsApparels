"use client";

import { useReveal } from "@/lib/useReveal";
import SplitLines from "@/components/anim/SplitLines";

const TEAM = [
  {
    name: "Satyam Goyal",
    role: "Co-Founder",
    image: "/team/2.png",
    links: {
      Instagram: "https://www.instagram.com/satyam__goyal/",
      LinkedIn: "https://www.linkedin.com/in/satyam-goyal-4082792ba/",
      Facebook: "https://www.facebook.com/satyam.goyal.393",
    },
  },
  {
    name: "Shivam Goyal",
    role: "Co-Founder",
    image: "/team/3.png",
    links: {
      Instagram: "https://www.instagram.com/shiivamgoyall/",
      LinkedIn: "https://www.linkedin.com/in/shivam-goyal-4082792ba/",
      Facebook: "https://www.facebook.com/shivam.09.goyal",
    },
  },
];

export default function Team() {
  const scopeRef = useReveal({ stagger: 0.12 });

  return (
    <section
      id="team"
      ref={scopeRef}
      className="relative py-24 md:py-36"
    >
      <div className="shell">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p data-reveal className="eyebrow mb-8">
              Leadership
            </p>
            <SplitLines className="display max-w-[14ch] text-[clamp(2.4rem,5.5vw,4.6rem)] text-ink">
              The twins
              <br />
              <span className="text-clay">behind it</span>
            </SplitLines>
          </div>

          <p data-reveal className="max-w-[38ch] text-sm leading-[1.8] text-ink-dim">
            Both founders are on the floor. If you're placing an order, you'll
            be talking to one of them directly.
          </p>
        </div>

        <div className="grid gap-px border border-ink/10 bg-ink/10 md:grid-cols-2">
          {TEAM.map((member) => (
            <article
              key={member.name}
              data-reveal
              className="group relative bg-paper"
            >
              {/* Full colour, and the name sits below the photo rather than
                  over a fade. Desaturating a light portrait against paper
                  leaves almost nothing on screen. */}
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-raised">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top transition-transform duration-[1.1s] ease-editorial group-hover:scale-[1.04]"
                />
              </div>

              <div className="relative p-8 md:p-10">
                <span className="text-[10px] uppercase tracking-label text-clay">
                  {member.role}
                </span>

                <h3 className="mt-3 font-display text-3xl font-bold uppercase tracking-tightest text-ink md:text-4xl">
                  {member.name}
                </h3>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {Object.entries(member.links).map(([platform, url]) => (
                    <li key={platform}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex border border-ink/15 px-4 py-2.5 text-[10px] uppercase tracking-label text-ink-dim transition-colors duration-300 hover:border-clay hover:text-clay"
                      >
                        {platform}
                        <span className="sr-only"> — {member.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
