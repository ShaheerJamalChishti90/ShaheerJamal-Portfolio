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

// --- ICON IMPORTS ---
import { FaYoutube, FaLinkedin, FaGithub, FaEnvelope, FaGoogle, FaFileAlt, FaTimes, FaHeart, FaArrowLeft, FaCheckCircle, FaExclamationCircle, FaSpinner, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const nameParts = ["Muhammad", "Shaheer", "Jamal", "Chishti"];

  // --- FORM STATES ---
  const [formData, setFormData] = useState({ 
    name: '', email: '', phone: '', company: '', country: '', city: '', message: '' 
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // --- FORM SUBMISSION HANDLER ---
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // 🔴 PASTE YOUR WEB3FORMS KEY HERE 🔴
    const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_GOES_HERE"; 

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', country: '', city: '', message: '' }); 
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setActiveModal(null);
    setTimeout(() => setFormStatus('idle'), 300); 
  };

  return (
    <div className="min-h-screen text-slate-200 bg-black font-sans relative overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* --- HEADER --- */}
      <header className="flex flex-col items-center justify-center pt-20 pb-12 px-4 text-center z-10 relative">
        
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
        
        <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mb-8 px-4">
          Building scalable data pipelines with Kafka, Snowflake, & AWS, and developing robust software & mobile applications.
        </p>
        
        {/* --- SOCIAL ICONS --- */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-8">
            <a href="https://www.youtube.com/@cdewithshaheer" target="_blank" className="text-4xl text-slate-500 hover:text-[#FF0000] transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-red-500/20 rounded-full" title="YouTube">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/in/m-shaheer-jamal-chishti-b75307272" target="_blank" className="text-4xl text-slate-500 hover:text-[#0A66C2] transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-blue-500/20 rounded-full" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/ShaheerJamalChishti90" target="_blank" className="text-4xl text-slate-500 hover:text-white transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-white/20 rounded-full" title="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:shaheerjamalchishti@gmail.com" className="text-4xl text-slate-500 hover:text-[#0078D4] transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-[#0078D4]/20 rounded-full" title="Send Email (App)">
              <FaEnvelope />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shaheerjamalchishti@gmail.com" target="_blank" rel="noopener noreferrer" className="text-4xl text-slate-500 hover:text-[#EA4335] transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-red-500/20 rounded-full" title="Open in Gmail Web">
              <FaGoogle />
            </a>
        </div>

        {/* --- RESUME DOWNLOAD BUTTON --- */}
        <div>
          <a href="/resume.pdf" download="Shaheer_Jamal_Resume" target="_blank" className="relative inline-flex items-center gap-3 px-8 py-3 bg-zinc-900 border border-zinc-700 rounded-full text-slate-200 font-bold tracking-wide transition-all duration-300 hover:bg-zinc-800 hover:text-white hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:-translate-y-1 group cursor-pointer">
            <FaFileAlt className="group-hover:text-cyan-400 transition-colors" />
            <span>Download Resume</span>
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
              desc="Schedule a consultation or reach out for custom data engineering and software development services." 
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

            {/* === BLOCK 5 CONTENT (CONTACT OPTIONS) === */}
            {activeModal === 'contact' && (
              <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
                <div className="mb-12 border-b border-zinc-800 pb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 tracking-tight">Let's Connect.</h2>
                  <p className="text-zinc-400 text-lg">Select a method below to inquire about services, request a quote, or schedule a consultation.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Option 1: Form */}
                  <div 
                    onClick={() => setActiveModal('contact-form')}
                    className="group cursor-pointer bg-[#111113] border border-zinc-800 p-10 rounded-2xl hover:border-cyan-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col items-start"
                  >
                    <FaEnvelope className="text-3xl text-cyan-500 mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                    <h3 className="text-xl font-semibold text-white mb-3">Send an Inquiry</h3>
                    <p className="text-sm text-zinc-400 mb-10 leading-relaxed flex-grow">Use our secure form to send a direct message. Ideal for detailed project requirements or general questions.</p>
                    <div className="mt-auto flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span>Open Form</span>
                      <FaArrowRight className="transform transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>

                  {/* Option 2: Calendly */}
                  <div className="group cursor-pointer bg-[#111113] border border-zinc-800 p-10 rounded-2xl hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col items-start">
                    <FaCalendarAlt className="text-3xl text-blue-500 mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                    <h3 className="text-xl font-semibold text-white mb-3">Schedule a Meeting</h3>
                    <p className="text-sm text-zinc-400 mb-10 leading-relaxed flex-grow">Book a dedicated time slot via Calendly for a 1-on-1 video consultation to discuss your specific business needs.</p>
                    <div className="mt-auto flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-blue-400 group-hover:text-blue-300 transition-colors">
                      <span>Book Now</span>
                      <FaArrowRight className="transform transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* === ENTERPRISE CONTACT FORM VIEW WITH CYAN COLORS & NEW FIELDS === */}
            {activeModal === 'contact-form' && (
              <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-right-8 duration-500">
                <button 
                  onClick={() => setActiveModal('contact')}
                  className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 hover:text-cyan-400 transition-colors mb-10 group"
                >
                  <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                  <span>Back</span>
                </button>

                <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3 tracking-tight">Direct Inquiry</h2>
                  <p className="text-zinc-500">Please provide your details below.</p>
                </div>

                {formStatus === 'success' ? (
                  <div className="bg-[#111113] border border-cyan-500/30 p-12 rounded-2xl text-center animate-in zoom-in-95 duration-300">
                    <FaCheckCircle className="text-cyan-400 text-5xl mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-2">Inquiry Submitted</h3>
                    <p className="text-zinc-400">Thank you. Your message has been routed to my inbox. Expect a response shortly.</p>
                    <button onClick={() => setFormStatus('idle')} className="mt-8 text-sm font-bold uppercase tracking-wider text-cyan-500 hover:text-cyan-400 transition-colors">Submit Another</button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-8">
                    {formStatus === 'error' && (
                      <div className="bg-red-950/30 border border-red-900/50 text-red-400 px-4 py-3 text-sm rounded-lg flex items-center gap-3">
                        <FaExclamationCircle />
                        <span>System error. Please try again later or email directly.</span>
                      </div>
                    )}
                    
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Full Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          required 
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-zinc-700" 
                          placeholder="e.g. John Doe"
                        />
                      </div>
                      <div className="relative">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Email Address *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          required 
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-zinc-700" 
                          placeholder="e.g. john@company.com"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative">
                        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Phone Number (Optional)</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-zinc-700" 
                          placeholder="e.g. +1 234 567 8900"
                        />
                      </div>
                      <div className="relative">
                        <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Company Name (Optional)</label>
                        <input 
                          type="text" 
                          id="company" 
                          name="company" 
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-zinc-700" 
                          placeholder="e.g. Tech Solutions Inc."
                        />
                      </div>
                    </div>

                    {/* Row 3: Country & City */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative">
                        <label htmlFor="country" className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Country *</label>
                        <input 
                          type="text" 
                          id="country" 
                          name="country" 
                          required
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-zinc-700" 
                          placeholder="e.g. United States"
                        />
                      </div>
                      <div className="relative">
                        <label htmlFor="city" className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">City (Optional)</label>
                        <input 
                          type="text" 
                          id="city" 
                          name="city" 
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-zinc-700" 
                          placeholder="e.g. New York"
                        />
                      </div>
                    </div>
                    
                    {/* Row 4: Message */}
                    <div className="relative">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Message *</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        required 
                        rows={4} 
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none placeholder:text-zinc-700" 
                        placeholder="Describe your project or inquiry..."
                      ></textarea>
                    </div>

                    <div className="pt-6">
                      <button 
                        type="submit" 
                        disabled={formStatus === 'submitting'}
                        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <FaSpinner className="animate-spin text-lg" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Inquiry</span>
                            <FaEnvelope />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
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