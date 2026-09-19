"use client";

import { useReveal } from "@/lib/useReveal";
import SplitLines from "@/components/anim/SplitLines";
import { SITE } from "@/lib/site";

const CHANNELS = [
  {
    label: "Call",
    value: SITE.phone,
    href: SITE.phoneHref,
    note: SITE.hours,
  },
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: "Replies within one working day",
  },
  {
    label: "Visit",
    value: SITE.address,
    href: SITE.mapsUrl,
    note: "Hamirgarh industrial area",
  },
];

export default function Contact() {
  const scopeRef = useReveal();

  return (
    <section
      id="contact"
      ref={scopeRef}
      className="relative py-24 md:py-36"
    >
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[0.48fr_0.52fr] lg:gap-20">
          <div>
            <p data-reveal className="eyebrow mb-8">
              Get in touch
            </p>

            <SplitLines className="display text-[clamp(2.4rem,5.5vw,4.6rem)] text-ink">
              Send us
              <br />
              <span className="text-clay">your tech pack</span>
            </SplitLines>

            <p
              data-reveal
              className="mt-8 max-w-[46ch] leading-[1.8] text-ink-dim"
            >
              Tell us the fit, the fabric and the quantity. We'll come back with
              a costing, a lead time and a sample plan.
            </p>

            <ul className="mt-12 border-t border-ink/10">
              {CHANNELS.map((channel) => (
                <li key={channel.label} data-reveal className="border-b border-ink/10">
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      channel.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-start gap-6 py-7"
                  >
                    <span className="w-16 shrink-0 pt-1 text-[10px] uppercase tracking-label text-clay">
                      {channel.label}
                    </span>

                    <span className="flex-1">
                      <span className="block text-base leading-snug text-ink transition-colors duration-300 group-hover:text-clay md:text-lg">
                        {channel.value}
                      </span>
                      <span className="mt-2 block text-xs text-ink-faint">
                        {channel.note}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className="pt-1 text-ink-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-clay"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              data-reveal
              href="/Catalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10"
            >
              Download Catalogue
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* Map. Always present, no click required. The Google Maps embed is
              a heavy third-party bundle, so the fetch is left to the browser's
              native lazy-loading, which holds it until the frame is close to
              the viewport. */}
          <div data-reveal className="flex flex-col">
            <div
              className="relative aspect-[4/3] w-full overflow-hidden border border-ink/10 bg-paper-raised lg:aspect-auto lg:flex-1"
            >
              {/* Placeholder sits underneath rather than instead of the
                  iframe, so there's no blank frame while Maps connects. */}
              <div className="weave-texture absolute inset-0 flex flex-col items-center justify-center gap-4 bg-paper-raised text-center">
                <span className="text-[10px] uppercase tracking-label text-ink-faint">
                  {SITE.locality}
                </span>
                <span className="font-display text-lg font-bold uppercase tracking-tightest text-ink-faint">
                  Loading map…
                </span>
              </div>

              <iframe
                title="Twins Apparels location, Hamirgarh, Bhilwara"
                src={SITE.mapEmbedUrl}
                // Native lazy-loading already holds the request until the
                // frame is near the viewport, which is what a hand-rolled
                // IntersectionObserver was doing here — without the JS, the
                // state, or the dependency on observer callbacks firing.
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>

            <div className="mt-px flex flex-col gap-4 border border-ink/10 p-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[34ch] text-sm leading-relaxed text-ink-dim">
                {SITE.address}
              </p>

              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost shrink-0"
              >
                Directions
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
