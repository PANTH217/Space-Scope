import React, { useState, useEffect } from 'react';
import { getAPOD } from '../services/nasaApi';
import { useNavigate } from 'react-router-dom';
const ApodDetail = () => {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchApod = async () => {
      try {
        const data = await getAPOD();
        setApod(data);
      } catch (err) {
        console.error('Error fetching APOD details:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchApod();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-primary"></div>
      </div>
    );
  }
  if (!apod) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl text-red-400">Failed to load Astronomy Picture of the Day.</h2>
        <button onClick={() => navigate(-1)} className="mt-4 text-brand-primary hover:underline">Go Back</button>
      </div>
    );
  }
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 fade-in">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 flex items-center text-gray-400 hover:text-white transition-colors group"
      >
        <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
        Back to Mission Control
      </button>
      <div className="glass-card overflow-hidden bg-black/40 border border-white/10 rounded-2xl shadow-2xl">
        {apod.media_type === 'video' ? (
          <div className="aspect-video w-full">
            <iframe
              src={apod.url}
              title={apod.title}
              className="w-full h-full border-0"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="relative group cursor-pointer" onClick={() => window.open(apod.hdurl || apod.url, '_blank')}>
            <img 
              src={apod.url} 
              alt={apod.title} 
              className="w-full h-auto max-h-[70vh] object-contain bg-black"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <span className="text-white border border-white/30 bg-black/50 px-6 py-3 rounded-full backdrop-blur-md">
                Click to view full resolution
              </span>
            </div>
          </div>
        )}
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 gap-4">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white drop-shadow-lg">
              {apod.title}
            </h1>
            <p className="font-mono text-brand-primary text-sm tracking-widest shrink-0">
              {apod.date || new Date().toISOString().split('T')[0]}
            </p>
          </div>
          <div className="w-16 h-1 bg-brand-secondary mb-8"></div>
          <p className="text-gray-300 text-lg leading-relaxed text-justify">
            {apod.explanation}
          </p>
          {apod.copyright && (
            <p className="mt-8 text-sm text-gray-500 font-mono text-right">
              © Image Credit & Copyright: {apod.copyright}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default ApodDetail;
