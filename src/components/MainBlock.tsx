// src/components/MainBlock.tsx
import React from 'react';

interface MainBlockProps {
  title: string;
  desc: string;
  iconClass: string;
  gradientColors: string; 
  hoverTextColor: string;
  onClick: () => void;
}

const MainBlock: React.FC<MainBlockProps> = ({ title, desc, iconClass, gradientColors, hoverTextColor, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="relative group rounded-2xl cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]"
    >
      {/* THE MOVING LIQUID BORDER LAYER */}
      <div className={`absolute inset-[-3px] rounded-2xl bg-gradient-to-r ${gradientColors} animate-gradient-flow opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[8px] -z-10`}></div>

      {/* THE INNER CONTENT LAYER */}
      <div className="relative h-full bg-zinc-900 border border-zinc-800 p-12 rounded-2xl text-center z-10 transition-all duration-500 group-hover:border-transparent flex flex-col items-center">
        {/* ICON CONTAINER WITH SMOOTH ANIMATION:
           - duration-700 ease-in-out: Makes the spin quick but smooth.
           - group-hover:rotate-[360deg]: Spins the icon a full circle.
           - group-hover:scale-110: Keeps the slight zoom effect for extra pop.
        */}
        <div className={`text-5xl mb-6 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg] group-hover:scale-110 flex justify-center w-full ${hoverTextColor}`}>
          <i className={iconClass}></i>
        </div>
        <h2 className={`text-2xl font-bold mb-3 text-slate-100 transition-colors duration-300 ${hoverTextColor}`}>{title}</h2>
        <p className="text-slate-400">{desc}</p>
      </div>
    </div>
  );
};

export default MainBlock;