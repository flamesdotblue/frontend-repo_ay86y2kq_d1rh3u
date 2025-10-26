import React from 'react';

const events = [
  {
    title: 'Kickoff Keynote: The Startup Mindset',
    date: 'Nov 12, 2025',
    location: 'Auditorium A',
    tag: 'Keynote',
    desc: 'Gain insights into ideation, rapid validation, and building with intent.',
    link: '#',
  },
  {
    title: 'Design Sprint Workshop',
    date: 'Nov 13, 2025',
    location: 'Studio Lab',
    tag: 'Workshop',
    desc: 'Hands-on sprint to move from problem to prototype in a single day.',
    link: '#',
  },
  {
    title: 'Build Day: Prototyping + Mentorship',
    date: 'Nov 14, 2025',
    location: 'Makerspace',
    tag: 'Build',
    desc: 'Ship your MVP with guidance from mentors across product and engineering.',
    link: '#',
  },
];

export default function Events() {
  return (
    <section id="events" className="relative w-full bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Upcoming Events</h2>
            <p className="mt-1 text-white/70">Register to reserve your spot. Limited seats available.</p>
          </div>
          <a
            href="#updates"
            className="hidden rounded-md border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/10 sm:inline-block"
          >
            See updates
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((ev, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 shadow-2xl ring-1 ring-white/5 backdrop-blur-sm"
            >
              <div className="mb-3 inline-flex items-center gap-2">
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  {ev.tag}
                </span>
                <span className="text-xs text-white/60">{ev.date} • {ev.location}</span>
              </div>
              <h3 className="text-xl font-semibold">{ev.title}</h3>
              <p className="mt-2 text-sm text-white/70">{ev.desc}</p>
              <div className="mt-5 flex items-center justify-between">
                <a
                  href={ev.link}
                  className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                >
                  Register
                </a>
                <span className="text-xs text-white/50">Free for students</span>
              </div>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-70" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
