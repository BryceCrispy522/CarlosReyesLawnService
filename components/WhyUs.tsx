import { CheckIcon } from "./icons";
import { StatRow } from "./StatRow";

const trustPoints = [
  {
    title: "Reliable and on schedule",
    body: "We show up when we say we will, week after week. Your yard is never left guessing.",
  },
  {
    title: "Honest, up-front quotes",
    body: "Clear pricing before we start. No hidden fees, no upsells you didn't ask for.",
  },
  {
    title: "Residential & commercial",
    body: "From single-family yards to commercial properties, we scale to fit the job.",
  },
  {
    title: "A real person answers",
    body: "Call and you'll reach the family who runs the business — not a call center.",
  },
  {
    title: "We cover the whole area",
    body: "Bradenton, Sarasota, Venice, Casey Key, and Siesta Key — all on one crew's route.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-sand-2 py-20 sm:py-24"
      aria-labelledby="why-us-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-lime-deep">
            Why neighbors choose us
          </p>
          <h2
            id="why-us-heading"
            className="mt-3 font-display text-3xl font-extrabold text-green-900 sm:text-4xl"
          >
            The kind of lawn crew you actually keep
          </h2>
        </div>

        <div className="mt-10">
          <StatRow
            stats={[
              { value: "5.0★", label: "Google rating" },
              { value: "10+ yrs", label: "Serving the coast" },
              { value: "20% off", label: "Your first month" },
            ]}
          />
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          {trustPoints.map((point) => (
            <li
              key={point.title}
              className="flex gap-4 rounded-card bg-white/70 p-5 shadow-card"
            >
              <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-lime text-green-900">
                <CheckIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-green-900">
                  {point.title}
                </h3>
                <p className="mt-1 text-muted">{point.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
