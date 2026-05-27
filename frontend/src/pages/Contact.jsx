import React from 'react';
import { useNavigate } from 'react-router-dom';
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 fade-in text-white">
      <button onClick={() => navigate(-1)} className="mb-6 flex items-center text-gray-400 hover:text-white transition-colors group">
        <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
        Back
      </button>
      <div className="glass-card p-8 md:p-12 border-t-4 border-brand-primary rounded-2xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
        <div className="w-48 h-48 shrink-0 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary p-1 overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.3)]">
           <div className="w-full h-full bg-space-black rounded-full flex items-center justify-center text-6xl">
             👨‍💻
           </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">Panth Haveliwala</h1>
          <p className="text-brand-primary font-mono tracking-widest text-sm mb-6">MISSION COMMANDER</p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Thank you for exploring the cosmos with SpaceScope. If you have any inquiries regarding the telemetry data, codebase structure, or if you encounter any anomalies, please reach out via the secure channels below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="mailto:panthhaveliwala@gmail.com" className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 hover:border-brand-primary/50 transition-all flex items-center gap-4 group">
              <span className="text-2xl group-hover:scale-110 transition-transform">✉️</span>
              <div className="text-left overflow-hidden">
                <p className="text-[10px] text-gray-500 font-mono tracking-wider">EMAIL COMM LINK</p>
                <p className="text-white font-bold text-sm truncate">panthhaveliwala@gmail.com</p>
              </div>
            </a>
            <a href="tel:+919265507356" className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 hover:border-green-500/50 transition-all flex items-center gap-4 group">
              <span className="text-2xl group-hover:scale-110 transition-transform">📱</span>
              <div className="text-left overflow-hidden">
                <p className="text-[10px] text-gray-500 font-mono tracking-wider">SECURE DIRECT LINE (INDIA)</p>
                <p className="text-white font-bold text-sm truncate">+91 92655 07356</p>
              </div>
            </a>
            <a href="https://github.com/PANTH217" target="_blank" rel="noreferrer" className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 hover:border-brand-secondary/50 transition-all flex items-center gap-4 group">
              <span className="text-2xl group-hover:scale-110 transition-transform">💻</span>
              <div className="text-left overflow-hidden">
                <p className="text-[10px] text-gray-500 font-mono tracking-wider">GITHUB DATABANKS</p>
                <p className="text-white font-bold text-sm truncate">@PANTH217</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/panth-haveliwala-06811131a" target="_blank" rel="noreferrer" className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 hover:border-[#0077b5]/50 transition-all flex items-center gap-4 group">
              <span className="text-2xl group-hover:scale-110 transition-transform">🤝</span>
              <div className="text-left overflow-hidden">
                <p className="text-[10px] text-gray-500 font-mono tracking-wider">PROFESSIONAL NETWORK</p>
                <p className="text-white font-bold text-sm truncate">LinkedIn Profile</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
