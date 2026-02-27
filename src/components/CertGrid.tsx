import React, { useState } from 'react';
import { snowflakeBadges, otherBadges, professionalCerts } from '../app/data/certs';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  type: string;
}

interface CertGridProps {
  certificates: Certificate[];
}

// *** 1. CONFIGURATION AREA ***
const categoryStyles: Record<string, {
  border: string;
  shadow: string;
  text: string;     // Updated to include 'group-hover:' prefix
  bg: string;
  icon: string;
  gradient: string;
}> = {
  snowflake: {
    border: 'hover:border-[#29B5E8]/50',
    shadow: 'hover:shadow-[0_10px_40px_-10px_rgba(41,181,232,0.3)]',
    text: 'group-hover:text-[#29B5E8]', // FIXED: Full class string
    bg: 'hover:bg-[#29B5E8]',
    icon: 'fa-snowflake',
    gradient: 'from-[#29B5E8] to-cyan-200'
  },
  other: {
    border: 'hover:border-purple-500/50',
    shadow: 'hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.3)]',
    text: 'group-hover:text-purple-500', // FIXED: Full class string
    bg: 'hover:bg-purple-500',
    icon: 'fa-star',
    gradient: 'from-purple-500 to-fuchsia-300'
  },
  professional: {
    border: 'hover:border-amber-500/50',
    shadow: 'hover:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.3)]',
    text: 'group-hover:text-amber-500', // FIXED: Full class string
    bg: 'hover:bg-amber-500',
    icon: 'fa-certificate',
    gradient: 'from-amber-400 to-yellow-200'
  },
  default: {
    border: 'hover:border-slate-500/50',
    shadow: 'hover:shadow-[0_10px_40px_-10px_rgba(148,163,184,0.3)]',
    text: 'group-hover:text-slate-400',
    bg: 'hover:bg-slate-500',
    icon: 'fa-star',
    gradient: 'from-slate-400 to-slate-200'
  }
};

const CertGrid: React.FC<CertGridProps> = ({ certificates }) => {
  const [activeView, setActiveView] = useState<'list' | 'snowflake' | 'other' | 'professional'>('list');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const goBack = () => setActiveView('list');
  const closePopup = () => setSelectedImage(null);

  // Helper to get style based on type
  const getStyle = (type: string) => categoryStyles[type] || categoryStyles.default;

  // --- VIEW 1: THE LIST OF CATEGORIES ---
  if (activeView === 'list') {
    return (
      <div className="mb-8 mt-10"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {certificates.map((cert) => {
            const style = getStyle(cert.type);

            return (
              <div 
                key={cert.id} 
                onClick={() => {
                   if (['snowflake', 'other', 'professional'].includes(cert.type)) {
                     setActiveView(cert.type as any);
                   }
                }}
                className={`
                  group relative cursor-pointer
                  bg-gradient-to-br from-zinc-900 to-zinc-950
                  border border-zinc-800 rounded-2xl p-6
                  transition-all duration-300 ease-out
                  hover:-translate-y-2 hover:scale-[1.02]
                  ${style.border} 
                  ${style.shadow}
                `}
              >
                <div className="absolute inset-0 bg-zinc-900/0 transition-colors duration-500 rounded-2xl pointer-events-none"></div>

                {/* Icon Container - Fixed hover logic */}
                <div className={`h-32 bg-zinc-900/50 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden border border-zinc-800 transition-colors ${style.border.replace('hover:', 'group-hover:').replace('/50', '/30')}`}>
                   {/* We removed 'group-hover:' here because it's now inside style.text */}
                   <i className={`fas ${style.icon} text-5xl text-zinc-700 ${style.text} group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-500`}></i>
                </div>

                <div className="text-center relative z-10">
                  {/* Title - Fixed hover logic */}
                  <h3 className={`font-bold text-lg text-slate-200 ${style.text} transition-colors mb-1`}>
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium tracking-wide">
                    {cert.issuer}
                  </p>
                  
                  <div className={`mt-4 inline-flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wider group-hover:text-white transition-colors bg-zinc-800/50 px-3 py-1 rounded-full ${style.bg} group-hover:shadow-lg`}>
                    <span>View</span>
                    <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // --- VIEW 2: THE DETAILED BADGES ---
  let activeData = otherBadges;
  if (activeView === 'snowflake') activeData = snowflakeBadges;
  if (activeView === 'professional') activeData = professionalCerts;

  const activeStyle = getStyle(activeView);

  return (
    <div className="mb-12 animate-in fade-in slide-in-from-right-10 duration-500">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={goBack}
          className="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${activeStyle.gradient}`}>
          {activeView === 'snowflake' ? 'Hands On Essentials Badges' : 
           activeView === 'professional' ? 'Professional Certifications' : 
           'Other Professional Achievements'}
        </h3>
      </div>

      {/* Snowflake Note */}
      {activeView === 'snowflake' && (
        <div className="mb-8 p-4 rounded-xl bg-red-950/20 border border-red-500/20 flex items-center gap-4 max-w-2xl">
          <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
            <i className="fab fa-youtube text-red-500 text-xl"></i>
          </div>
          <div>
            <h5 className="text-red-400 font-bold text-sm mb-0.5">Note</h5>
            <p className="text-red-300/80 text-sm leading-relaxed">
              Detailed video walkthroughs for these badges will be uploaded to my YouTube channel soon. Stay tuned!
            </p>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeData.map((badge) => (
          <div key={badge.id} className={`relative bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center transition-all duration-300 group hover:-translate-y-1 ${activeStyle.border} ${activeStyle.shadow}`}>

            {/* Image Container */}
            <div className={`w-full aspect-[4/3] bg-zinc-950/50 rounded-xl mb-5 p-2 flex items-center justify-center overflow-hidden relative border border-zinc-800/50 transition-all ${activeStyle.border.replace('hover:', 'group-hover:').replace('/50', '/20')}`}>
              <img
                src={badge.image}
                alt={badge.title}
                className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110" 
              />
            </div>

            {/* Title - Fixed logic to allow hover color from activeStyle */}
            <h4 className={`text-xl font-bold text-slate-100 mb-1 transition-colors ${activeStyle.text}`}>{badge.title}</h4>
            <p className="text-sm text-slate-500 mb-6">
               {activeView === 'snowflake' ? 'Snowflake Inc.' : 'Verified Credential'}
            </p>

            {/* BUTTON LOGIC */}
            {activeView === 'snowflake' ? (
              <a 
                href={badge.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`mt-auto w-full py-2 flex items-center justify-center gap-2 bg-zinc-800 text-zinc-300 rounded-lg hover:text-white transition-all duration-300 font-medium group/btn shadow-lg ${activeStyle.bg.replace('group-hover:', 'hover:')}`}
              >
                <i className="fas fa-external-link-alt text-lg group-hover/btn:scale-110 transition-transform"></i>
                <span>Verify Credential</span>
              </a>
            ) : (
              <button 
                onClick={() => setSelectedImage(badge.image)}
                className={`mt-auto w-full py-2 flex items-center justify-center gap-2 bg-zinc-800 text-zinc-300 rounded-lg hover:text-white transition-all duration-300 font-medium group/btn shadow-lg ${activeStyle.bg.replace('group-hover:', 'hover:')}`}
              >
                <i className="fas fa-expand text-lg group-hover/btn:scale-110 transition-transform"></i>
                <span>View Certificate</span>
              </button>
            )}

          </div>
        ))}
      </div>

      {/* POPUP MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closePopup}
        >
          <button 
            onClick={closePopup}
            className="absolute top-4 right-4 text-white/50 hover:text-white bg-zinc-800/50 hover:bg-red-500/80 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
};

export default CertGrid;