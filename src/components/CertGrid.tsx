// src/components/CertGrid.tsx
import React, { useState } from 'react';
import { snowflakeBadges } from '../app/data/certs';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  type: string;
}

interface CertGridProps {
  certificates: Certificate[];
}

const CertGrid: React.FC<CertGridProps> = ({ certificates }) => {
  const [activeView, setActiveView] = useState<'list' | 'snowflake'>('list');

  // Function to handle back button
  const goBack = () => setActiveView('list');

  // --- VIEW 1: THE LIST OF CATEGORIES (Default) ---
  if (activeView === 'list') {
    return (
      <div className="mb-12">
        {/* Animated Title Section */}
        <div className="flex items-center gap-4 mb-8 group cursor-default w-fit mx-auto md:mx-0">
          <div className="relative">
            <div className="absolute inset-0 bg-[#29B5E8] blur-lg opacity-20 rounded-full group-hover:opacity-40 transition-opacity"></div>
            <div className="relative text-4xl text-[#29B5E8] transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]">
              <i className="fas fa-snowflake"></i>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-slate-200 group-hover:text-[#29B5E8] transition-colors drop-shadow-md">
            Snowflake Certifications
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              onClick={() => cert.type === 'snowflake' ? setActiveView('snowflake') : null}
              className="
                group relative cursor-pointer 
                bg-gradient-to-br from-zinc-900 to-zinc-950 
                border border-zinc-800 rounded-2xl p-6 
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:scale-[1.02]
                hover:border-[#29B5E8]/50 
                hover:shadow-[0_10px_40px_-10px_rgba(41,181,232,0.3)]
              "
            >
              {/* Glow Effect behind the card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#29B5E8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

              {/* Icon / Image Area */}
              <div className="h-32 bg-zinc-900/50 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden border border-zinc-800 group-hover:border-[#29B5E8]/30 transition-colors">
                 {/* Big Snowflake Icon that glows on hover */}
                 <i className="fas fa-snowflake text-5xl text-zinc-700 group-hover:text-[#29B5E8] group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(41,181,232,0.5)] transition-all duration-500"></i>
              </div>

              {/* Text Content */}
              <div className="text-center relative z-10">
                <h3 className="font-bold text-lg text-slate-200 group-hover:text-[#29B5E8] transition-colors mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium tracking-wide">
                  {cert.issuer}
                </p>
                
                {/* 'View' Button indicator */}
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wider group-hover:text-white transition-colors bg-zinc-800/50 px-3 py-1 rounded-full group-hover:bg-[#29B5E8] group-hover:shadow-lg group-hover:shadow-[#29B5E8]/20">
                  <span>View Badges</span>
                  <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- VIEW 2: THE DETAILED BADGES (Drill Down) ---
  return (
    <div className="mb-12 animate-in fade-in slide-in-from-right-10 duration-500">
      
      {/* Header with Back Button */}
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={goBack}
          className="bg-zinc-800 hover:bg-[#29B5E8] hover:text-white text-zinc-400 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(41,181,232,0.4)]"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#29B5E8] to-cyan-200">
          Hands On Essentials Badges
        </h3>
      </div>

      {/* Big Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {snowflakeBadges.map((badge) => (
          <div key={badge.id} className="relative bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center hover:border-[#29B5E8]/50 hover:shadow-[0_0_30px_rgba(41,181,232,0.15)] transition-all duration-300 group hover:-translate-y-1">
            
            {/* BIG IMAGE CONTAINER - UPDATED FOR LARGER IMAGES */}
            {/* Changed aspect-video to aspect-[4/3] and reduced padding to p-2 */}
            <div className="w-full aspect-[4/3] bg-zinc-950/50 rounded-xl mb-5 p-2 flex items-center justify-center overflow-hidden relative border border-zinc-800/50 group-hover:border-[#29B5E8]/20 transition-all">
              <img 
                src={badge.image} 
                alt={badge.title} 
                // Increased hover scale slightly for more pop
                className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110" 
              />
            </div>

            <h4 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-[#29B5E8] transition-colors">{badge.title}</h4>
            <p className="text-sm text-slate-500 mb-6">Snowflake Inc.</p>

            {/* VERIFY BUTTON */}
            <a 
              href={badge.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto w-full py-2 flex items-center justify-center gap-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-[#29B5E8] hover:text-white transition-all duration-300 font-medium group/btn shadow-lg hover:shadow-[#29B5E8]/30"
            >
              <i className="fas fa-award text-lg group-hover/btn:scale-110 transition-transform"></i>
              <span>Verify Credential</span>
            </a>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CertGrid;