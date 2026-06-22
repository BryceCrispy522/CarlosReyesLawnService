import { business, serviceAreaLine } from "@/lib/business";
import { PhoneIcon } from "./icons";
import { StatRow } from "./StatRow";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden lawn-stripes"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 lawn-vignette" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-lime">
          {serviceAreaLine}
        </p>

        <h1
          id="hero-heading"
          className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-sand sm:text-6xl"
        >
          A lawn worth{" "}
          <span className="text-lime">coming home to.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sand/85">
          Family-owned and locally trusted for over 10 years. From weekly mowing
          to full landscape design, we keep Gulf Coast yards healthy, sharp, and
          green — all year round.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="btn-pill bg-lime text-green-900 text-base hover:bg-lime-deep hover:-translate-y-0.5"
          >
            Get a free quote
          </a>
          <a
            href={business.phoneHref}
            className="btn-pill border border-sand/30 bg-white/5 text-base text-sand hover:bg-white/10"
          >
            <PhoneIcon className="h-5 w-5" />
            Call {business.phoneDisplay}
          </a>
        </div>

        <div className="mt-14">
          <StatRow
            tone="dark"
            stats={[
              { value: "5.0★", label: "Google rating" },
              { value: "10+ yrs", label: "In business" },
              { value: "Family", label: "Owned & operated" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
