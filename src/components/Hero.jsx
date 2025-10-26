import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white" aria-label="IEDC Bootcamp Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft gradient overlay to improve text contrast; doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-40">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold tracking-wide text-white/90 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          IEDC BOOTCAMP CEC • Innovate. Build. Launch.
        </span>
        <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
          A modern hub for events, workshops, and innovation
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Discover upcoming sessions, meet the team, and stay updated with the latest announcements — all in one place.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#events"
            className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            Explore Events
          </a>
          <a
            href="#updates"
            className="rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Latest Updates
          </a>
        </div>
      </div>
    </section>
  );
}
