// Real project photos pulled from the business's portfolio.
const photos = [
  {
    src: "/gallery/manicured-front-lawn.jpg",
    alt: "Freshly mowed, striped front lawn at a pink Florida home with tropical landscaping",
    caption: "Striped, freshly cut front lawn",
  },
  {
    src: "/gallery/waterfront-striped-lawn.jpg",
    alt: "Manicured oceanfront lawn with mowing stripes overlooking turquoise water",
    caption: "Oceanfront lawn maintenance",
  },
  {
    src: "/gallery/estate-circular-drive.jpg",
    alt: "Large estate with a manicured lawn and circular paver driveway lined with palms",
    caption: "Estate lawn & landscaping",
  },
  {
    src: "/gallery/paver-driveway-landscaping.jpg",
    alt: "Two-story home with fresh landscape beds and a paver driveway",
    caption: "Landscape design & beds",
  },
  {
    src: "/gallery/bayfront-paver-patio.jpg",
    alt: "Bayfront travertine paver patio with turf-grid inlay beside an infinity pool",
    caption: "Paver patio & turf detail",
  },
  {
    src: "/gallery/tropical-flower-beds.jpg",
    alt: "Home framed by colorful tropical flower beds and a crisp green lawn",
    caption: "Tropical planting beds",
  },
  {
    src: "/gallery/striped-lawn-shade-trees.jpg",
    alt: "Gray Florida home with a striped lawn shaded by mature oak trees",
    caption: "Full-property lawn care",
  },
  {
    src: "/gallery/topiary-sculpture.jpg",
    alt: "Sculpted bougainvillea topiary with pink blooms trimmed into rounded shapes",
    caption: "Detailed topiary trimming",
  },
  {
    src: "/gallery/irrigation-running.jpg",
    alt: "Irrigation sprinklers running across a palm-lined lawn",
    caption: "Irrigation install & service",
  },
];

export function Gallery() {
  return (
    <section
      id="work"
      className="bg-sand py-20 sm:py-24"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-lime-deep">
            Our work
          </p>
          <h2
            id="work-heading"
            className="mt-3 font-display text-3xl font-extrabold text-green-900 sm:text-4xl"
          >
            Lawns and landscapes we're proud of
          </h2>
          <p className="mt-4 text-lg text-muted">
            A look at real properties we care for across the Bradenton–Sarasota
            coast — from striped lawns to full landscape installs.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <li
              key={photo.src}
              className="group relative overflow-hidden rounded-card shadow-card"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-900/85 to-transparent p-4"
                aria-hidden
              >
                <p className="font-display text-sm font-semibold text-sand">
                  {photo.caption}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
