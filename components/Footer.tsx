import { business, serviceAreaLine } from "@/lib/business";
import { LeafIcon, PhoneIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-sand">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime text-green-900">
            <LeafIcon className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-extrabold">
            {business.name}
          </span>
        </div>

        <a
          href={business.phoneHref}
          className="btn-pill bg-lime text-green-900 text-sm hover:bg-lime-deep"
        >
          <PhoneIcon className="h-4 w-4" />
          {business.phoneDisplay}
        </a>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-center text-sm text-sand/70 sm:px-6 md:flex-row md:justify-between md:text-left">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>Proudly serving {serviceAreaLine}.</p>
        </div>
      </div>
    </footer>
  );
}
