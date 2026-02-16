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

// Import our new decoupled form components!
import InquiryForm from '../components/InquiryForm';
import MeetingFunnel from '../components/MeetingFunnel';

// --- ICON IMPORTS ---
import { FaYoutube, FaLinkedin, FaGithub, FaEnvelope, FaGoogle, FaFileAlt, FaTimes, FaHeart, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const nameParts = ["Muhammad", "Shaheer", "Jamal", "Chishti"];

  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen text-slate-200 bg-black font-sans relative overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* --- HEADER --- */}
      <header className="flex flex-col items-center justify-center pt-20 pb-12 px-4 text-center z-10 relative">
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-4">
          {nameParts.map((name, index) => (
            <div key={index} className="group relative cursor-pointer">
              <div className="text-5xl md:text-7xl font-bold bg-cool-spectrum transition-all duration-500 ease-in-out group-hover:-translate-y-2">
                {name}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xl md:text-2xl text-slate-300 font-light mb-2 mt-2">Cloud Data Engineer & Developer</p>
        <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mb-8 px-4">
          Building scalable data pipelines with Kafka, Snowflake, & AWS, and developing robust software & mobile applications.
        </p>
        
        {/* --- SOCIAL ICONS --- */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-8">
            <a href="https://www.youtube.com/@cdewithshaheer" target="_blank" className="text-4xl text-slate-500 hover:text-[#FF0000] transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-red-500/20 rounded-full" title="YouTube"><FaYoutube /></a>
            <a href="https://www.linkedin.com/in/m-shaheer-jamal-chishti-b75307272" target="_blank" className="text-4xl text-slate-500 hover:text-[#0A66C2] transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-blue-500/20 rounded-full" title="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/ShaheerJamalChishti90" target="_blank" className="text-4xl text-slate-500 hover:text-white transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-white/20 rounded-full" title="GitHub"><FaGithub /></a>
            <a href="mailto:shaheerjamalchishti@gmail.com" className="text-4xl text-slate-500 hover:text-[#0078D4] transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-[#0078D4]/20 rounded-full" title="Send Email (App)"><FaEnvelope /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shaheerjamalchishti@gmail.com" target="_blank" rel="noopener noreferrer" className="text-4xl text-slate-500 hover:text-[#EA4335] transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-red-500/20 rounded-full" title="Open in Gmail Web"><FaGoogle /></a>
        </div>

        {/* --- RESUME VIEW BUTTON --- */}
        <div>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center gap-3 px-8 py-3 bg-zinc-900 border border-zinc-700 rounded-full text-slate-200 font-bold tracking-wide transition-all duration-300 hover:bg-zinc-800 hover:text-white hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:-translate-y-1 group cursor-pointer">
            <FaFileAlt className="group-hover:text-cyan-400 transition-colors" />
            <span>View Resume</span>
          </a>
        </div>
      </header>

      {/* --- MAIN 4-BLOCK GRID --- */}
      <main className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        <MainBlock title="Cloud Data Engineering" desc="14+ End-to-End Projects featuring AWS, Kafka, Airflow & Snowflake." iconClass="fas fa-cloud" hoverTextColor="text-cyan-400" gradientColors="from-cyan-500 via-blue-600 to-purple-600" onClick={() => setActiveModal('cde')} />
        <MainBlock title="Certifications" desc="Snowflake Badges, AWS Certifications & Professional Milestones." iconClass="fas fa-certificate" hoverTextColor="text-purple-400" gradientColors="from-purple-500 via-pink-600 to-fuchsia-600" onClick={() => setActiveModal('certs')} />
        <MainBlock title="Software & Scripting Hub" desc="My playground for Python, JS, Java, C++, and HTML/CSS." iconClass="fas fa-code" hoverTextColor="text-emerald-400" gradientColors="from-cyan-500 via-emerald-500 to-teal-600" onClick={() => setActiveModal('learn')} />
        <MainBlock title="Freelancing Projects" desc="Client deliverables including Attendance & Student Management Systems." iconClass="fas fa-briefcase" hoverTextColor="text-orange-400" gradientColors="from-orange-400 via-red-500 to-yellow-500" onClick={() => setActiveModal('freelance')} />

        {/* === 5TH BLOCK: CENTERED === */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <MainBlock 
              title="Connect & Collaborate" 
              desc="Schedule a consultation or reach out for custom data engineering, web development and software development services." 
              iconClass="fas fa-envelope-open-text" 
              hoverTextColor="text-cyan-400" 
              gradientColors="from-cyan-600 via-blue-500 to-teal-400" 
              onClick={() => setActiveModal('contact')} 
            />
          </div>
        </div>
      </main>

      {/* --- MODALS OVERLAY --- */}
      <div className={`fixed inset-0 bg-black/95 z-50 flex justify-center items-start overflow-y-auto p-4 backdrop-blur-md transition-opacity duration-500 ${activeModal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={closeModal}>
        {activeModal && (
        <div className="bg-[#0a0a0a] border border-zinc-800 w-full max-w-5xl rounded-xl p-8 md:p-12 my-10 relative shadow-2xl animate-in fade-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-6 right-6 text-zinc-500 hover:text-white text-2xl transition-colors duration-300">
              <FaTimes />
            </button>

            {/* BLOCK 1 CONTENT */}
            {activeModal === 'cde' && (
              <>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">Cloud Data Engineering Projects</h2>
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
                <ProjectGrid projects={softwareProjects} color="emerald" />
              </>
            )}

            {/* BLOCK 4 CONTENT */}
            {activeModal === 'freelance' && (
               <>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400 mb-2">Freelancing Projects</h2>
                <ProjectGrid projects={freelanceProjects} color="purple" />
              </>
            )}

            {/* === BLOCK 5 CONTENT (CONTACT OPTIONS MENU) === */}
            {activeModal === 'contact' && (
              <div className="max-w-4xl mx-auto animate-in fade-in duration-500 pt-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 tracking-tight">Let's Work Together</h2>
                  <p className="text-slate-400 text-lg max-w-2xl mx-auto">Select a method below to inquire about services, request a quote, or schedule a 1-on-1 consultation.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Option 1: Form Button */}
                  <div className="group bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-cyan-500/50 hover:bg-zinc-900 transition-all duration-300 shadow-lg hover:shadow-cyan-900/20 hover:-translate-y-1">
                    <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mb-6 text-cyan-400 text-3xl group-hover:scale-110 transition-transform">
                      <FaEnvelope />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-cyan-400 transition-colors">Send an Inquiry</h3>
                    <p className="text-sm text-slate-400 mb-8 leading-relaxed">Use our secure form to send a direct message. Ideal for detailed project requirements or general questions.</p>
                    
                    <button 
                      onClick={() => setActiveModal('contact-form')}
                      className="mt-auto px-6 py-4 w-full bg-zinc-800 hover:bg-cyan-600 text-slate-200 hover:text-white font-bold rounded-xl transition-all flex justify-center items-center gap-3"
                    >
                      <span>Open Form</span>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Option 2: Calendly Button */}
                  <div className="group bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-blue-500/50 hover:bg-zinc-900 transition-all duration-300 shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1">
                    <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 text-blue-400 text-3xl group-hover:scale-110 transition-transform">
                      <FaCalendarAlt />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-blue-400 transition-colors">Book a Meeting</h3>
                    <p className="text-sm text-slate-400 mb-8 leading-relaxed">Schedule a dedicated time slot via our custom calendar logic to discuss your specific business needs via video call.</p>
                    
                    <button 
                      onClick={() => setActiveModal('meeting-funnel')}
                      className="mt-auto px-6 py-4 w-full bg-zinc-800 hover:bg-blue-600 text-slate-200 hover:text-white font-bold rounded-xl transition-all flex justify-center items-center gap-3"
                    >
                      <span>Schedule Call</span>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* RENDER THE IMPORTED COMPONENTS BASED ON STATE */}
            {activeModal === 'contact-form' && <InquiryForm onBack={() => setActiveModal('contact')} />}
            {activeModal === 'meeting-funnel' && <MeetingFunnel onBack={() => setActiveModal('contact')} />}
            
          </div>
        )}
      </div>

      {/* --- FOOTER --- */}
      <footer className="text-center py-8 text-slate-600 text-sm relative z-10">
        <p className="mt-2 flex items-center justify-center gap-1">
          Thank you <FaHeart className="text-red-900 mx-1" /> for visiting.
        </p>
      </footer>
    </div>
  );
};

export default App;