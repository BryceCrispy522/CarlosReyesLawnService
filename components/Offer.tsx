export function Offer() {
  return (
    <section
      className="relative isolate overflow-hidden bg-green-700 lawn-stripes"
      aria-labelledby="offer-heading"
    >
      {/* Soften the stripe motif here so it stays subtle behind the text. */}
      <div className="absolute inset-0 bg-green-700/75" aria-hidden />
      <div className="absolute inset-0 lawn-vignette opacity-60" aria-hidden />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-lime">
          New client offer
        </p>
        <h2
          id="offer-heading"
          className="mt-3 font-display text-3xl font-extrabold text-sand sm:text-4xl"
        >
          20% off your first month
        </h2>
        <p className="mt-3 text-lg text-sand/85">
          Monthly service starts at $200/mo minimum. Lock in your spot on the
          route and let us take the lawn off your list.
        </p>
        <a
          href="#contact"
          className="btn-pill mt-8 bg-lime text-green-900 text-base hover:bg-lime-deep hover:-translate-y-0.5"
        >
          Claim the offer
        </a>
      </div>
    </section>
  );
}
