import React from 'react';

const leads = [
  {
    name: 'Aarav Nair',
    role: 'Student Lead',
  },
  {
    name: 'Meera Suresh',
    role: 'Program Coordinator',
  },
  {
    name: 'Rahul Menon',
    role: 'Tech Lead',
  },
  {
    name: 'Diya Joseph',
    role: 'Design Lead',
  },
];

export default function Team() {
  return (
    <section id="team" className="relative w-full bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Meet the Team</h2>
        <p className="mt-1 max-w-2xl text-white/70">
          Coordinators and student leads driving the IEDC Bootcamp at CEC.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leads.map((m, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-sky-400 text-black font-bold">
                {m.name.split(' ').map((p) => p[0]).join('').slice(0,2)}
              </div>
              <h3 className="text-lg font-semibold">{m.name}</h3>
              <p className="text-sm text-white/70">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
