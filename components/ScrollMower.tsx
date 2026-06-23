"use client";

import { useEffect, useRef, useState } from "react";

// Renders the hero's diagonal "freshly mowed lawn" stripes AND a red mower that
// rides down one of those stripes as the user scrolls, recoloring that single
// band from light green (uncut) to dark green (mowed) behind it.
//
// The trick: the stripes and the mowing lane live in the SAME rotated element,
// so the mower is guaranteed to sit exactly on a real stripe. In the field's
// local (un-rotated) frame the stripes are simple vertical bands; rotating the
// whole field by 25deg turns them into the 115deg diagonal stripes on screen —
// visually identical to the original repeating-linear-gradient pattern.
const ANGLE = 25; // deg; vertical bands rotated 25deg == 115deg diagonal stripes
const BAND = 38; // one stripe band width (matches the original pattern)
const PERIOD = BAND * 2; // dark + light
const DARK = "#15311F"; // green-900
const LIGHT = "#225234"; // green-700

const FIELD_W = 3040; // fixed, a whole number of periods so bands are predictable
const FIELD_H = 2400;
const CX = FIELD_W / 2; // 1520 — a band boundary (1520 / 76 = 20 exactly)
const CY = FIELD_H / 2;
// The dark band immediately right of center: x in [1520, 1558]. The mower rides
// this uncut dark stripe and leaves a bright (light green) freshly-cut stripe.
const LANE_X = CX; // left edge of the mowed band
const MOWER_W = BAND;
const MOWER_H = 49;

const START_CUT = 880; // lane-local y of the cut line at scroll top
const SPAN = 1400; // how far the cut line travels over a full hero scroll

export function ScrollMower() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [cut, setCut] = useState(START_CUT);
  const [reduced, setReduced] = useState(false);

  // Honor prefers-reduced-motion: hold the mower at the start, no tracking.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduced) return;

    const update = () => {
      const hero = wrapRef.current?.parentElement;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const scrolled = Math.min(Math.max(-rect.top, 0), rect.height);
      const p = rect.height > 0 ? scrolled / rect.height : 0;
      setCut(START_CUT + p * SPAN);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reduced]);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: FIELD_W,
          height: FIELD_H,
          transform: `translate(-50%, -50%) rotate(${ANGLE}deg)`,
          // The freshly-mowed-lawn stripes (vertical bands in this local frame).
          backgroundImage: `repeating-linear-gradient(90deg, ${DARK} 0, ${DARK} ${BAND}px, ${LIGHT} ${BAND}px, ${LIGHT} ${PERIOD}px)`,
        }}
      >
        {/* The freshly mowed portion of the band (light green behind the mower). */}
        <div
          className="absolute top-0"
          style={{ left: LANE_X, width: BAND, height: cut, background: LIGHT }}
        />
        {/* The mower, cutting edge sitting on the boundary of the lane. */}
        <div
          className="absolute top-0 will-change-transform"
          style={{
            left: LANE_X + BAND / 2,
            transform: `translate(-50%, ${cut - MOWER_H}px)`,
          }}
        >
          <RedMower className="drop-shadow-[0_4px_5px_rgba(21,49,31,0.55)]" />
        </div>
      </div>
    </div>
  );
}

function RedMower({ className }: { className?: string }) {
  return (
    <svg
      width={MOWER_W}
      height={MOWER_H}
      viewBox="0 0 40 52"
      fill="none"
      className={className}
      aria-hidden
      focusable="false"
    >
      {/* Handle, trailing back over the freshly mowed strip */}
      <path
        d="M13 24V10a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14"
        stroke="#7d1a10"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="12" y="4" width="16" height="4" rx="2" fill="#7d1a10" />
      {/* Wheels */}
      <rect x="2" y="26" width="6" height="11" rx="2" fill="#231f1f" />
      <rect x="32" y="26" width="6" height="11" rx="2" fill="#231f1f" />
      <rect x="3" y="40" width="6" height="9" rx="2" fill="#231f1f" />
      <rect x="31" y="40" width="6" height="9" rx="2" fill="#231f1f" />
      {/* Deck */}
      <rect
        x="5"
        y="24"
        width="30"
        height="26"
        rx="7"
        fill="#d83a2a"
        stroke="#7d1a10"
        strokeWidth="2.5"
      />
      {/* Engine cap */}
      <circle cx="20" cy="37" r="6" fill="#2b2b2b" />
      <circle cx="20" cy="37" r="2.6" fill="#e7e2d2" />
    </svg>
  );
}
