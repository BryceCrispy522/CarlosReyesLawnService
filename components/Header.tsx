"use client";

import { useState } from "react";
import { business } from "@/lib/business";
import { LeafIcon, PhoneIcon } from "./icons";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#work", label: "Our Work" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-green-900/95 backdrop-blur supports-[backdrop-filter]:bg-green-900/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 text-sand">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime text-green-900">
            <LeafIcon className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-extrabold leading-tight">
            Carlos Reyes
            <span className="block text-xs font-semibold tracking-wide text-lime">
              LAWN SERVICE
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-sand/90 transition-colors hover:text-lime"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={business.phoneHref}
            className="btn-pill bg-lime text-green-900 text-sm hover:bg-lime-deep"
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden sm:inline">{business.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-sand md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-white/10 bg-green-900 px-4 py-2 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-3 text-base font-medium text-sand/90 hover:bg-white/5 hover:text-lime"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
