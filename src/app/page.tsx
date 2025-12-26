'use client';

import React, { useState } from 'react';

// --- IMPORTS ---
import { cdeProjects } from './data/cde';
import { freelanceProjects } from './data/freelance';
import { softwareProjects } from './data/software';
import { certifications } from './data/certs';

import MainBlock from '../components/MainBlock';
import ProjectGrid from '../components/ProjectGrid';
import CertGrid from '../components/CertGrid';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const nameParts = ["Muhammad", "Shaheer", "Jamal", "Chishti"];

  return (
    <div className="min-h-screen text-slate-200 bg-black font-sans relative overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* --- HEADER --- */}
      <header className="flex flex-col items-center justify-center pt-20 pb-12 px-4 text-center z-10 relative">
        
        {/* ANIMATED NAME CONTAINER */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-4">
          {nameParts.map((name, index) => (
            <div key={index} className="group relative cursor-pointer">
              <div className="
                text-5xl md:text-7xl font-bold 
                bg-cool-spectrum 
                transition-all duration-500 ease-in-out
                group-hover:-translate-y-2 
              ">
                {name}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xl md:text-2xl text-slate-300 font-light mb-2 mt-2">
          Cloud Data Engineer & Developer
        </p>
        <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mb-8">
          Building scalable data pipelines with Kafka, Snowflake, and AWS.
        </p>
        
        {/* --- SOCIAL ICONS & DUAL EMAIL --- */}
        <div className="flex items-center gap-8 mb-8">
            
            {/* 1. YouTube */}
            <a 
              href="https://www.youtube.com/@cdewithshaheer" 
              target="_blank" 
              className="text-4xl text-slate-500 hover:text-[#FF0000] transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-red-500/20 rounded-full" 
              title="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
            
            {/* 2. LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/m-shaheer-jamal-chishti-b75307272" 
              target="_blank" 
              className="text-4xl text-slate-500 hover:text-[#0A66C2] transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-blue-500/20 rounded-full" 
              title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            
            {/* 3. GitHub */}
            <a 
              href="https://github.com/ShaheerJamalChishti90" 
              target="_blank" 
              className="text-4xl text-slate-500 hover:text-white transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-white/20 rounded-full" 
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>

            {/* 4. Standard Email (Envelope Icon) - Best for Mobile Apps/Outlook */}
            <a 
              href="mailto:shaheer.jamal09@gmail.com" 
              className="text-4xl text-slate-500 hover:text-[#00ccff] transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-red-500/20 rounded-full" 
              title="Send Email (App)"
            >
              <i className="fas fa-envelope"></i>
            </a>

            {/* 5. Web Gmail (Google Icon) - Best for PC Browser */}
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shaheer.jamal09@gmail.com"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-4xl text-slate-500 hover:text-[#EA4335] transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-red-500/20 rounded-full" 
              title="Open in Gmail Web"
            >
              <i className="fab fa-google"></i>
            </a>
        </div>

        {/* --- RESUME DOWNLOAD BUTTON --- */}
        <div>
          <a 
            href="/resume.pdf" 
            download="ShaheerJamal_Resume" 
            target="_blank"
            className="
              relative inline-flex items-center gap-3 px-8 py-3 
              bg-zinc-900 border border-zinc-700 rounded-full 
              text-slate-200 font-bold tracking-wide
              transition-all duration-300
              hover:bg-zinc-800 hover:border-cyan-500 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:-translate-y-1
              group cursor-pointer
            "
          >
            <i className="fas fa-file-alt group-hover:text-cyan-400 transition-colors"></i>
            <span>Download Resume</span>
          </a>
        </div>

      </header>

      {/* --- MAIN 4-BLOCK GRID --- */}
      <main className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        
        {/* Block 1: CDE Projects */}
        <MainBlock 
          title="Cloud Data Engineering"
          desc="14+ End-to-End Projects featuring AWS, Kafka, Airflow & Snowflake."
          iconClass="fas fa-cloud"
          hoverTextColor="text-cyan-400"
          gradientColors="from-cyan-500 via-blue-600 to-purple-600"
          onClick={() => setActiveModal('cde')}
        />

        {/* Block 2: Certifications */}
        <MainBlock 
          title="Certifications"
          desc="Snowflake Badges, AWS Certifications & Professional Milestones."
          iconClass="fas fa-certificate"
          hoverTextColor="text-purple-400"
          gradientColors="from-purple-500 via-pink-600 to-fuchsia-600"
          onClick={() => setActiveModal('certs')}
        />

        {/* Block 3: Software Hub */}
        <MainBlock 
          title="Software & Scripting Hub"
          desc="My playground for Python, JS, Java, C++, and HTML/CSS."
          iconClass="fas fa-code"
          hoverTextColor="text-emerald-400"
          gradientColors="from-cyan-500 via-emerald-500 to-teal-600"
          onClick={() => setActiveModal('learn')}
        />

        {/* Block 4: Freelancing */}
        <MainBlock 
          title="Freelancing Projects"
          desc="Client deliverables including Attendance & Student Management Systems."
          iconClass="fas fa-briefcase"
          hoverTextColor="text-orange-400"
          gradientColors="from-purple-600 via-red-500 to-orange-500"
          onClick={() => setActiveModal('freelance')}
        />
      </main>

      {/* --- MODALS OVERLAY --- */}
      <div className={`fixed inset-0 bg-black/90 z-50 flex justify-center items-start overflow-y-auto p-4 backdrop-blur-sm transition-opacity duration-500 ${activeModal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setActiveModal(null)}>
        {activeModal && (
        <div className="bg-black border border-zinc-800 w-full max-w-5xl rounded-2xl p-8 my-10 relative shadow-2xl shadow-cyan-900/20 animate-in fade-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-2xl transition-all duration-300 hover:rotate-90 hover:scale-110"
            >
              <i className="fas fa-times"></i>
            </button>

            {/* BLOCK 1 CONTENT */}
            {activeModal === 'cde' && (
              <>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">Cloud Data Engineering Projects</h2>
                <p className="text-slate-400 mb-6">A collection of my 14+ projects involving modern data stack tools.</p>
                <ProjectGrid projects={cdeProjects} />
              </>
            )}

            {/* BLOCK 2 CONTENT */}
            {activeModal === 'certs' && (
              <>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-8">Certifications</h2>
                <CertGrid certificates={certifications} />
              </>
            )}

            {/* BLOCK 3 CONTENT */}
            {activeModal === 'learn' && (
              <>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">Software & Scripting Hub</h2>
                <p className="text-slate-400 mb-6">General programming journey and learnings.</p>
                <ProjectGrid projects={softwareProjects} color="emerald" />
              </>
            )}

            {/* BLOCK 4 CONTENT */}
            {activeModal === 'freelance' && (
               <>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400 mb-2">Freelancing Projects</h2>
                <p className="text-slate-400 mb-6">Real-world solutions delivered to clients.</p>
                <ProjectGrid projects={freelanceProjects} color="purple" />
              </>
            )}
          </div>
        )}
      </div>

      {/* --- FOOTER --- */}
      <footer className="text-center py-8 text-slate-600 text-sm relative z-10">
        {/* <p>
            MUHAMMAD SHAHEER JAMAL CHISHTI
        </p> */}
        <p className="mt-2">
          Thankyou for visiting <i className="fas fa-heart text-red-900 mx-1"></i>
        </p>
      </footer>
    </div>
  );
};

export default App;