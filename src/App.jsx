import React from 'react';
import Hero from './components/Hero';
import Events from './components/Events';
import Team from './components/Team';
import Updates from './components/Updates';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero with interactive Spline scene */}
      <Hero />

      {/* Events section with registration links */}
      <Events />

      {/* Team highlights for coordinators and student leads */}
      <Team />

      {/* Blog/updates */}
      <Updates />

      <footer className="border-t border-white/10 bg-black py-10 text-center text-sm text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-3 font-semibold text-white">IEDC BOOTCAMP CEC</div>
          <p>Built with a focus on speed, accessibility, and a modern visual style.</p>
          <p className="mt-2">© {new Date().getFullYear()} IEDC CEC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
