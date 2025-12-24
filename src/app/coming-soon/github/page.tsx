'use client';

import React from 'react';
import Link from 'next/link';

const GitHubApology = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-zinc-500/30">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-lg w-full bg-zinc-900 border border-zinc-800 p-10 rounded-3xl text-center shadow-2xl shadow-white/5">
        
        {/* Animated Icon */}
        <div className="mb-8 relative group cursor-default">
          <div className="absolute inset-0 bg-white blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
          <i className="fab fa-github text-8xl text-zinc-700 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] drop-shadow-2xl"></i>
        </div>

        <h1 className="text-4xl font-bold text-slate-100 mb-2">
          Pushing Commits...
        </h1>
        
        <p className="text-slate-400 mb-8 text-lg">
          Oops! This repository is currently private or being cleaned up.
          <br />
          <span className="text-zinc-200 font-medium">The code will be public shortly.</span>
        </p>

        {/* Action Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-800 hover:bg-white hover:text-black text-slate-200 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Return to Portfolio</span>
        </Link>
      </div>
    </div>
  );
};

export default GitHubApology;