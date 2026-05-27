import React from 'react';
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 fade-in text-white">
      <button onClick={() => navigate(-1)} className="mb-6 flex items-center text-gray-400 hover:text-white transition-colors group">
        <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
        Back
      </button>
      <div className="glass-card p-8 md:p-14 border-t-4 border-brand-primary rounded-2xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl"></div>
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 drop-shadow-lg uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Project SpaceScope</h1>
        <div className="w-24 h-1 bg-brand-secondary mb-10"></div>
        <div className="space-y-10 text-gray-300 leading-relaxed text-lg z-10 relative font-light">
          <section>
            <p className="text-xl leading-relaxed text-gray-200">
              <strong className="text-brand-primary font-bold">SpaceScope</strong> is your definitive, real-time command center for space exploration, orbital telemetry, and cosmic intelligence. Built for stargazers, students, and space enthusiasts, our platform acts as a unified hub that transforms highly complex astrophysical data into an accessible, immersive, and interactive dashboard.
            </p>
          </section>
          <section className="bg-black/20 p-8 rounded-xl border border-white/5 shadow-inner">
            <h3 className="text-3xl text-white font-display mb-6 border-b border-white/10 pb-4">I. The Mission Control Dashboard</h3>
            <p className="mb-4">At the heart of SpaceScope is the Mission Control dashboard, aggregating live telemetry feeds from global space agencies into a single pane of glass.</p>
            <ul className="list-none space-y-4 text-gray-300">
              <li className="flex gap-4"><span className="text-brand-primary text-xl">👨‍🚀</span> <div><strong className="text-white">Live Orbital Personnel Roster:</strong> Using active telemetry data, SpaceScope continuously monitors exactly how many humans are currently residing in space, pinpointing their names and current stationed spacecraft (such as the ISS or Tiangong).</div></li>
              <li className="flex gap-4"><span className="text-yellow-500 text-xl">☀️</span> <div><strong className="text-white">Solar Weather Monitoring:</strong> Tapping into deep-space radar and solar observatories, the system tracks the active Solar Cycle and reports live geomagnetic storm levels (G-Scale), keeping you informed on space weather that could impact Earth's magnetosphere.</div></li>
              <li className="flex gap-4"><span className="text-red-500 text-xl">☄️</span> <div><strong className="text-white">Near-Earth Object (NEO) Scans:</strong> Our automated threat-detection interface pulls daily orbital parameters to track the exact number of asteroids and Near-Earth Objects passing within our planetary vicinity on any given day.</div></li>
              <li className="flex gap-4"><span className="text-blue-500 text-xl">🛰️</span> <div><strong className="text-white">ISS Orbital Track:</strong> A high-fidelity, real-time map displaying the exact geographic coordinates, altitude, and velocity of the International Space Station as it hurtles around the Earth at 17,500 mph.</div></li>
            </ul>
          </section>
          <section className="bg-black/20 p-8 rounded-xl border border-white/5 shadow-inner">
            <h3 className="text-3xl text-white font-display mb-6 border-b border-white/10 pb-4">II. AstroMind Artificial Intelligence</h3>
            <p className="mb-4">SpaceScope comes equipped with <strong className="text-brand-secondary">AstroMind</strong>, a proprietary, specialized AI entity trained extensively on cosmology, orbital mechanics, and astrophysics.</p>
            <p>
              Whether you want to understand the intricate physics of a supermassive black hole, the chemical composition of Saturn's rings, or the history of the Apollo missions, AstroMind acts as your personal co-pilot. Powered by the advanced Google Gemini AI engine, it is strictly bound to cosmic knowledge, ensuring high-accuracy, hyper-focused intelligence on the universe.
            </p>
          </section>
          <section className="bg-black/20 p-8 rounded-xl border border-white/5 shadow-inner">
            <h3 className="text-3xl text-white font-display mb-6 border-b border-white/10 pb-4">III. Daily Cosmic Intel & Observation</h3>
            <ul className="list-none space-y-4 text-gray-300">
              <li className="flex gap-4"><span className="text-purple-500 text-xl">📸</span> <div><strong className="text-white">Astronomy Picture of the Day (APOD):</strong> Every 24 hours, SpaceScope retrieves and displays breathtaking, high-resolution imagery of distant galaxies, nebulae, and stellar phenomena, complete with detailed explanations curated by leading professional astronomers.</div></li>
              <li className="flex gap-4"><span className="text-indigo-400 text-xl">🔭</span> <div><strong className="text-white">Planet Parade Visibility:</strong> Planning a stargazing night? Our Observation modules calculate which planets in our solar system are currently visible in the night sky based on current orbital alignments.</div></li>
            </ul>
          </section>
          <section className="bg-black/20 p-8 rounded-xl border border-white/5 shadow-inner">
            <h3 className="text-3xl text-white font-display mb-6 border-b border-white/10 pb-4">IV. Educational Integration</h3>
            <p className="mb-4">SpaceScope is not just about raw data; it is an interactive learning platform designed to gamify the exploration of the cosmos.</p>
            <ul className="list-none space-y-4 text-gray-300">
              <li className="flex gap-4"><span className="text-green-500 text-xl">🧠</span> <div><strong className="text-white">Daily Quizzes:</strong> Test your knowledge against the SpaceScope database with dynamically generated daily trivia challenges covering various astronomical disciplines.</div></li>
              <li className="flex gap-4"><span className="text-teal-400 text-xl">📚</span> <div><strong className="text-white">Fact Carousels:</strong> A continuously updating stream of bite-sized, mind-bending facts about the scale, age, and physics of the universe, designed to expand your cosmic perspective every time you log in.</div></li>
              <li className="flex gap-4"><span className="text-orange-400 text-xl">🚀</span> <div><strong className="text-white">Mission Timelines:</strong> A comprehensive tracking system monitoring the exact countdowns and telemetry statuses for upcoming global rocket launches and payload deployments.</div></li>
            </ul>
          </section>
          <div className="mt-12 text-center text-sm font-mono tracking-widest text-brand-primary opacity-60">
            --- END OF MISSION BRIEFING ---
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
