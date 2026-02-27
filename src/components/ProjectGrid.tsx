// src/components/ProjectGrid.tsx
import React from 'react';
import { FaYoutube } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  desc: string;
  links: {
    youtube?: string;
    github?: string;
    linkedin?: string;
  };
}

interface ProjectGridProps {
  projects: Project[];
  color?: string; 
  showYoutubeNote?: boolean; // Added this "switch"
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, color = "cyan", showYoutubeNote = false }) => {
  
  // Dynamic glow classes based on the color prop
  const hoverBorder = color === 'purple' ? 'hover:border-purple-500' : 'hover:border-cyan-500';
  const hoverShadow = color === 'purple' ? 'hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]' : 'hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)]';
  const titleColor  = color === 'purple' ? 'group-hover:text-purple-400' : 'group-hover:text-cyan-400';
  const gradient    = color === 'purple' ? 'from-purple-500/10' : 'from-cyan-500/10';

  return (
    <div>
      {/* --- YOUTUBE NOTE BANNER (Only renders if showYoutubeNote is true) --- */}
      {showYoutubeNote && (
        <div className="bg-red-950/20 border border-red-900/40 p-5 rounded-xl flex items-start gap-4 animate-in fade-in duration-500 mb-2 mt-4">
          <FaYoutube className="text-red-500 text-2xl flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-red-400 mb-1 text-sm tracking-wide">Note</h4>
            <p className="text-sm text-red-200/80 leading-relaxed">
              Detailed video walkthroughs for these projects will be uploaded to my YouTube channel soon. Stay tuned!
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 pb-4">
        {projects.map((proj) => (
          <div 
            key={proj.id} 
            className={`
              group relative bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex flex-col justify-between 
              transition-all duration-300 ease-out 
              hover:-translate-y-2 ${hoverBorder} ${hoverShadow}
              overflow-hidden
            `}
          >
            {/* Subtle Background Gradient Fade-In on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

            <div className="relative z-10">
              <h3 className={`text-xl font-bold text-slate-100 mb-2 transition-colors duration-300 ${titleColor}`}>
                {proj.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 group-hover:text-slate-300 transition-colors">
                {proj.desc}
              </p>
            </div>

            {/* --- ICON FOOTER (Always Visible) --- */}
            <div className="relative z-10 flex items-center gap-5 pt-4 border-t border-zinc-800 group-hover:border-white/10 transition-colors mt-auto">
              
              {/* YouTube Icon */}
              <a 
                href={proj.links.youtube || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl text-zinc-500 transition-all duration-300 hover:text-[#FF0000] hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]"
                title="Watch Demo on YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>

              {/* GitHub Icon */}
              <a 
                href={proj.links.github || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl text-zinc-500 transition-all duration-300 hover:text-white hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                title="View Code on GitHub"
              >
                <i className="fab fa-github"></i>
              </a>

              {/* LinkedIn Icon */}
              <a 
                href={proj.links.linkedin || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl text-zinc-500 transition-all duration-300 hover:text-[#0A66C2] hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.5)]"
                title="View Post on LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;