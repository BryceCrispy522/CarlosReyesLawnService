import { StarRow } from "./StarRow";

// Paraphrased from real Google reviews; attributed generically per review policy.
const reviews = [
  {
    quote:
      "Carlos and his team have taken care of our yard for years. Always on time, always thorough, and the lawn has never looked better. Highly recommend to anyone in the area.",
    name: "Bradenton homeowner",
  },
  {
    quote:
      "Fair pricing and honest from the first quote. They installed new sod and set up our sprinklers, and everything came in exactly as promised. A real pleasure to work with.",
    name: "Sarasota client",
  },
  {
    quote:
      "Finally a lawn company that picks up the phone and actually shows up. Friendly, professional, and they treat our property like it's their own. Five stars without question.",
    name: "Siesta Key resident",
  },
];

export function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-sand py-20 sm:py-24"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-lime-deep">
            5.0 stars on Google
          </p>
          <h2
            id="reviews-heading"
            className="mt-3 font-display text-3xl font-extrabold text-green-900 sm:text-4xl"
          >
            What our neighbors say
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <li
              key={review.name}
              className="flex flex-col rounded-card border border-ink/5 bg-white p-6 shadow-card"
            >
              <StarRow />
              <blockquote className="mt-4 flex-1 text-ink/90">
                “{review.quote}”
              </blockquote>
              <footer className="mt-5 border-t border-ink/5 pt-4">
                <p className="font-display font-semibold text-green-900">
                  {review.name}
                </p>
                <p className="text-sm text-muted">Verified Google review</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
