'use client';

import React from 'react';
import Link from 'next/link';

const LinkedInApology = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-blue-500/30">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-lg w-full bg-zinc-900 border border-zinc-800 p-10 rounded-3xl text-center shadow-2xl shadow-blue-900/20">
        
        {/* Animated Icon */}
        <div className="mb-8 relative group cursor-default">
          <div className="absolute inset-0 bg-[#0A66C2] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
          <i className="fab fa-linkedin text-8xl text-zinc-700 group-hover:text-[#0A66C2] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 drop-shadow-2xl"></i>
        </div>

        <h1 className="text-4xl font-bold text-slate-100 mb-2">
          Drafting Post...
        </h1>
        
        <p className="text-slate-400 mb-8 text-lg">
          Apologies! The case study for this project is still being written.
          <br />
          <span className="text-blue-400 font-medium">Connect with me to see when it drops!</span>
        </p>

        {/* Action Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-800 hover:bg-[#0A66C2] text-slate-200 hover:text-white rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Return to Portfolio</span>
        </Link>
      </div>
    </div>
  );
};

export default LinkedInApology;