import React from 'react';

const posts = [
  {
    title: 'Bootcamp registrations now open',
    date: 'Oct 28, 2025',
    excerpt: 'Sign up to secure your seat for our hands-on sessions and mentorship.',
    link: '#',
  },
  {
    title: 'Announcing mentor lineup',
    date: 'Oct 25, 2025',
    excerpt: 'Industry experts from product, AI, and design joining us this season.',
    link: '#',
  },
  {
    title: 'What to expect at the Bootcamp',
    date: 'Oct 22, 2025',
    excerpt: 'A quick overview of tracks, outcomes, and resources to get you started.',
    link: '#',
  },
];

export default function Updates() {
  return (
    <section id="updates" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Latest Updates</h2>
        <p className="mt-1 max-w-2xl text-white/70">
          Announcements, blog posts, and important notices.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, idx) => (
            <a
              key={idx}
              href={p.link}
              className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>{p.date}</span>
                <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-emerald-300">Update</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-emerald-300">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.excerpt}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-emerald-300">Read more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
