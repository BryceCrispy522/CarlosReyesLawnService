"use client";

import { useState, type FormEvent } from "react";
import { business, serviceAreaLine } from "@/lib/business";
import { PhoneIcon, MailIcon, MapPinIcon } from "./icons";

// To switch from mailto: to Formspree later, set this to your endpoint
// (e.g. "https://formspree.io/f/xxxxxxxx"). One-line change — no other edits needed.
const FORMSPREE_ENDPOINT: string | null = null;

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const address = String(data.get("address") ?? "");
    const message = String(data.get("message") ?? "");

    if (FORMSPREE_ENDPOINT) {
      setSubmitting(true);
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        if (res.ok) {
          setSent(true);
          form.reset();
        }
      } finally {
        setSubmitting(false);
      }
      return;
    }

    // Default: build a prefilled mailto: to the business inbox.
    const subject = `Quote request from ${name || "website visitor"}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Property address: ${address}`,
      "",
      "Message:",
      message,
    ].join("\n");
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section
      id="contact"
      className="bg-sand-2 py-20 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left: contact details */}
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-lime-deep">
            Get in touch
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-display text-3xl font-extrabold text-green-900 sm:text-4xl"
          >
            Request your free quote
          </h2>
          <p className="mt-4 text-lg text-muted">
            Tell us about your property and we'll get back to you with a clear,
            honest estimate — usually the same day.
          </p>

          <ul className="mt-8 space-y-4">
            <li>
              <a
                href={business.phoneHref}
                className="flex items-start gap-4 rounded-card bg-white/70 p-4 shadow-card transition-shadow hover:shadow-lift"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-card bg-green-900 text-lime">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-muted">Call or text</span>
                  <span className="font-display text-lg font-semibold text-green-900">
                    {business.phoneDisplay}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${business.email}`}
                className="flex items-start gap-4 rounded-card bg-white/70 p-4 shadow-card transition-shadow hover:shadow-lift"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-card bg-green-900 text-lime">
                  <MailIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-muted">Email</span>
                  <span className="font-display text-lg font-semibold text-green-900 break-all">
                    {business.email}
                  </span>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-4 rounded-card bg-white/70 p-4 shadow-card">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-card bg-green-900 text-lime">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-medium text-muted">Service area</span>
                <span className="font-display text-lg font-semibold text-green-900">
                  {serviceAreaLine}
                </span>
              </span>
            </li>
          </ul>
        </div>

        {/* Right: quote form */}
        <div className="rounded-card border border-ink/5 bg-white p-6 shadow-card sm:p-8">
          {sent ? (
            <div role="status" className="flex h-full flex-col items-center justify-center text-center">
              <h3 className="font-display text-2xl font-extrabold text-green-900">
                Thanks — we got it!
              </h3>
              <p className="mt-2 text-muted">
                We'll be in touch shortly. For anything urgent, call{" "}
                <a href={business.phoneHref} className="font-semibold text-green-700 underline">
                  {business.phoneDisplay}
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <Field id="name" name="name" label="Name" autoComplete="name" required />
              <Field
                id="phone"
                name="phone"
                label="Phone"
                type="tel"
                autoComplete="tel"
                required
              />
              <Field
                id="address"
                name="address"
                label="Property address"
                autoComplete="street-address"
              />
              <div>
                <label htmlFor="message" className="block font-display font-semibold text-green-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us what you need — mowing, sod, irrigation, a full cleanup…"
                  className="mt-1.5 w-full rounded-card border border-ink/15 bg-sand/40 px-4 py-3 text-ink placeholder:text-muted/70 focus:border-green-500"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="btn-pill w-full bg-green-700 text-base text-sand hover:bg-green-900 disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send my quote request"}
              </button>
              <p className="text-center text-sm text-muted">
                Prefer to talk? Call{" "}
                <a href={business.phoneHref} className="font-semibold text-green-700 underline">
                  {business.phoneDisplay}
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
};

function Field({ id, name, label, type = "text", autoComplete, required }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block font-display font-semibold text-green-900">
        {label}
        {required && <span className="text-lime-deep"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-1.5 w-full rounded-card border border-ink/15 bg-sand/40 px-4 py-3 text-ink placeholder:text-muted/70 focus:border-green-500"
      />
    </div>
  );
}
