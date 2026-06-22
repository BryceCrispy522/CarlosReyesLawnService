import type { ComponentType, SVGProps } from "react";
import {
  MowerIcon,
  SproutIcon,
  DropletIcon,
  TreeIcon,
  GridIcon,
  PlantBedIcon,
} from "./icons";

type Service = {
  title: string;
  blurb: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const services: Service[] = [
  {
    title: "Lawn Maintenance",
    blurb:
      "Mowing, edging, weed-eating, and blowing on a set schedule — so your yard always looks freshly cut.",
    Icon: MowerIcon,
  },
  {
    title: "Fertilization & Weed Control",
    blurb:
      "The right nourishment on the right cycle for stronger, greener, more resilient turf.",
    Icon: SproutIcon,
  },
  {
    title: "Irrigation",
    blurb:
      "Residential and commercial sprinkler installs, repairs, and monthly service to keep every zone running.",
    Icon: DropletIcon,
  },
  {
    title: "Tree & Palm Trimming",
    blurb:
      "Affordable, regular trimming so overgrowth never becomes a problem — or a hazard.",
    Icon: TreeIcon,
  },
  {
    title: "Sod Installation",
    blurb:
      "Fresh sod laid and graded for an established, even lawn — fast results you can walk on.",
    Icon: GridIcon,
  },
  {
    title: "Landscape Design",
    blurb:
      "Beds, borders, and plantings designed and built to thrive in the Florida climate.",
    Icon: PlantBedIcon,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="bg-sand py-20 sm:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-lime-deep">
            What we do
          </p>
          <h2
            id="services-heading"
            className="mt-3 font-display text-3xl font-extrabold text-green-900 sm:text-4xl"
          >
            Full-service lawn care, start to finish
          </h2>
          <p className="mt-4 text-lg text-muted">
            One reliable crew for everything your property needs — no juggling
            vendors, no surprises.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, blurb, Icon }) => (
            <li
              key={title}
              className="group rounded-card border border-ink/5 bg-white p-6 shadow-card transition-transform transition-shadow hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-card bg-green-900 text-lime">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-green-900">
                {title}
              </h3>
              <p className="mt-2 text-muted">{blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
