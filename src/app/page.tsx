'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaTools, FaShieldAlt, FaCheckCircle, FaHourglassHalf, FaServer } from 'react-icons/fa';

const UnderConstruction: React.FC = () => {
  const nameParts = ["Muhammad", "Shaheer", "Jamal", "Chishti"];

  return (
    <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-cyan-500/30 pb-20">
      
      {/* --- HR / RECRUITER APOLOGY BANNER --- */}
      <div className="bg-amber-950/40 border-b border-amber-900/50 p-4 flex justify-center">
        <div className="max-w-4xl flex items-start gap-4 animate-in slide-in-from-top-5 duration-700">
          <FaTools className="text-amber-500 text-2xl flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-amber-400 mb-1 tracking-wide">Notice to Recruitment Teams & HR Professionals</h4>
            <p className="text-sm text-amber-200/80 leading-relaxed">
              I am currently migrating my portfolio to a dynamic, database-driven architecture to better showcase my work. I sincerely apologize for the limited view during this transition. Below is a focused snapshot of my qualifications, certifications, and target roles.
            </p>
          </div>
        </div>
      </div>

      {/* --- HEADER & ABOUT SECTION --- */}
      <header className="max-w-4xl mx-auto px-6 pt-16 text-center">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6">
          {nameParts.map((name, index) => (
            <div key={index} className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {name}
            </div>
          ))}
        </div>
        
        <h2 className="text-2xl font-semibold text-slate-300 mb-8 flex items-center justify-center gap-3">
          <FaShieldAlt className="text-cyan-500" />
          Targeting SOC Analyst Roles
        </h2>

        <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl text-left shadow-lg mb-12">
          <h3 className="text-xl font-bold text-cyan-400 mb-4">About Me</h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            I am a Computer Science student with a dedicated focus on Defensive Security. My technical foundation is built on analyzing network security protocols, understanding threat analysis methodologies, and safeguarding enterprise networking environments. 
          </p>
          <p className="text-slate-400 leading-relaxed">
            My goal is to leverage my academic background and hands-on project experience to actively monitor, detect, and mitigate cyber threats as a SOC Analyst, contributing to robust organizational security postures.
          </p>
        </div>

        {/* --- SOCIAL & RESUME LINKS --- */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-16">
          <a href="https://www.linkedin.com/in/m-shaheer-jamal-chishti-b75307272" target="_blank" rel="noopener noreferrer" className="text-3xl text-slate-500 hover:text-[#0A66C2] transition-transform hover:scale-110" title="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/ShaheerJamalChishti90" target="_blank" rel="noopener noreferrer" className="text-3xl text-slate-500 hover:text-white transition-transform hover:scale-110" title="GitHub"><FaGithub /></a>
          <a href="mailto:shaheerjamalchishti@gmail.com" className="text-3xl text-slate-500 hover:text-[#0078D4] transition-transform hover:scale-110" title="Email"><FaEnvelope /></a>
          
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="ml-4 inline-flex items-center gap-2 px-6 py-2.5 bg-cyan-950/30 border border-cyan-900/50 rounded-full text-cyan-400 font-bold hover:bg-cyan-900/50 hover:text-cyan-300 transition-all">
            <FaFileAlt />
            <span>View Resume</span>
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* --- CERTIFICATIONS LIST --- */}
        <div className="space-y-8">
          
          {/* Completed */}
          <div>
            <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
              <FaCheckCircle className="text-emerald-500" />
              Completed Certifications
            </h3>
            <div className="space-y-3">
              {/* Edit these links to match your actual verification URLs */}
              <a href="#" className="block bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:border-emerald-500/50 transition-colors group">
                <div className="font-bold text-slate-300 group-hover:text-emerald-400 transition-colors">Google: Introduction to Cybersecurity</div>
                <div className="text-sm text-slate-500">Google</div>
              </a>
              <a href="#" className="block bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:border-emerald-500/50 transition-colors group">
                <div className="font-bold text-slate-300 group-hover:text-emerald-400 transition-colors">Harvard: Cybersecurity</div>
                <div className="text-sm text-slate-500">Harvard University</div>
              </a>
              <a href="#" className="block bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:border-emerald-500/50 transition-colors group">
                <div className="font-bold text-slate-300 group-hover:text-emerald-400 transition-colors">Beginners Guide to Ethical Hacking</div>
                <div className="text-sm text-slate-500">Professional Credential</div>
              </a>
            </div>
          </div>

          {/* In Progress */}
          <div>
            <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
              <FaHourglassHalf className="text-blue-500" />
              Currently Pursuing
            </h3>
            <div className="space-y-3">
              <div className="bg-zinc-900/50 border border-zinc-800/50 p-4 rounded-xl opacity-80">
                <div className="font-bold text-blue-400">CompTIA Network+</div>
                <div className="text-sm text-slate-500">Focusing on foundational networking infrastructure</div>
              </div>
            </div>
          </div>

        </div>

        {/* --- CYBERSECURITY PROJECTS --- */}
        <div>
          <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
            <FaServer className="text-purple-500" />
            Security Projects
          </h3>
          <div className="space-y-4">
            
            {/* Project 1 */}
            <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl hover:border-purple-500/50 transition-colors group">
              <h4 className="font-bold text-slate-200 group-hover:text-purple-400 transition-colors mb-2">Intrusion Detection System (IDS) Analysis</h4>
              <p className="text-sm text-slate-400 mb-4">
                Developed comprehensive documentation and flowchart logic mapping out an Intrusion Detection System for a university data structures and algorithms implementation.
              </p>
              <a href="https://github.com/ShaheerJamalChishti90" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                <FaGithub className="text-lg" />
                <span>View on GitHub</span>
              </a>
            </div>

            {/* Project 2 (Placeholder - Update with your own) */}
            <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl hover:border-purple-500/50 transition-colors group">
              <h4 className="font-bold text-slate-200 group-hover:text-purple-400 transition-colors mb-2">Network Traffic Analyzer</h4>
              <p className="text-sm text-slate-400 mb-4">
                [Placeholder] A custom script utilized to capture, parse, and flag suspicious packet behaviors within a simulated network environment.
              </p>
              <a href="https://github.com/ShaheerJamalChishti90" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                <FaGithub className="text-lg" />
                <span>View on GitHub</span>
              </a>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
};

export default UnderConstruction;
