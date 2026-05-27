import React from 'react';
import { useNavigate } from 'react-router-dom';
const Privacy = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 fade-in text-white">
      <button onClick={() => navigate(-1)} className="mb-6 flex items-center text-gray-400 hover:text-white transition-colors group">
        <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
        Back
      </button>
      <div className="glass-card p-8 md:p-12 border-t-4 border-brand-secondary rounded-2xl shadow-2xl relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 drop-shadow-md">Privacy Policy</h1>
        <div className="w-16 h-1 bg-brand-primary mb-8"></div>
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            At SpaceScope, your privacy and data security are our highest priorities. This policy outlines how we handle your information when you access our telemetry dashboard.
          </p>
          <h3 className="text-2xl text-white font-display mt-8 mb-4">1. Information Collection</h3>
          <p>
            When you register an account, we securely store your email address and an encrypted hash of your password in our MongoDB database. For users utilizing Google OAuth, we only store the email provided by the OAuth provider.
          </p>
          <h3 className="text-2xl text-white font-display mt-8 mb-4">2. AI Integration & API Keys</h3>
          <p>
            The AstroMind chatbot allows you to input a custom Google Gemini API Key. <strong className="text-brand-secondary">We do NOT store your custom API keys on our servers.</strong> Custom keys are stored exclusively in your browser's local storage and are transmitted directly to the backend for immediate, stateless execution during chat sessions.
          </p>
          <h3 className="text-2xl text-white font-display mt-8 mb-4">3. Local Caching</h3>
          <p>
            To prevent excessive API calls to NASA and other space agencies, SpaceScope heavily utilizes browser Local Storage to cache telemetry data (e.g., APOD, NEO tracking) for periods ranging from 1 to 12 hours. This data is strictly astronomical and contains no personal identifiable information.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Privacy;
