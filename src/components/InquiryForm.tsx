// src/components/InquiryForm.tsx
import React, { useState } from 'react';
import { FaArrowLeft, FaCheckCircle, FaExclamationCircle, FaSpinner, FaEnvelope } from 'react-icons/fa';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyzPsehg3fHhoSC6TUneeIc2cVKzOxSuCLO_GH6LVkZo05_fFAVlAQVAVODFxHcvN4GfQ/exec";

interface InquiryFormProps {
  onBack: () => void;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', country: '', city: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState(''); // NEW

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ type: 'inquiry', ...formData }),
      });
      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', country: '', city: '', message: '' }); 
      } else {
        setErrorMessage(result.error || "System error.");
        setFormStatus('error');
      }
    } catch (error: any) { 
      setErrorMessage(error.message || "Network Error.");
      setFormStatus('error'); 
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-right-8 duration-500">
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 hover:text-cyan-400 transition-colors mb-10 group">
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> <span>Back</span>
      </button>

      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3 tracking-tight">Direct Inquiry</h2>
        <p className="text-zinc-500">Please provide your details below.</p>
      </div>

      {formStatus === 'success' ? (
        <div className="bg-[#111113] border border-cyan-500/30 p-12 rounded-2xl text-center animate-in zoom-in-95 duration-300">
          <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
          <h3 className="text-2xl font-bold text-white mb-2">Inquiry Confirmed</h3>
          <p className="text-zinc-400">Thank you. Your message has been routed to my inbox. Expect a response shortly.</p>
          <button onClick={() => setFormStatus('idle')} className="mt-8 text-sm font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors">Submit Another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {formStatus === 'error' && (
            <div className="bg-red-950/30 border border-red-900/50 text-red-400 px-4 py-3 text-sm rounded-lg flex items-center gap-3">
              <FaExclamationCircle className="flex-shrink-0" /> <span>{errorMessage}</span>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Full Name *</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-zinc-700" placeholder="e.g. John Doe" />
            </div>
            <div className="relative">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Email Address *</label>
              <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-zinc-700" placeholder="e.g. john@company.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Phone Number (Optional)</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-zinc-700" placeholder="e.g. +1 234 567 8900" />
            </div>
            <div className="relative">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Company Name (Optional)</label>
              <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-zinc-700" placeholder="e.g. Tech Solutions Inc." />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Country *</label>
              <input type="text" name="country" required value={formData.country} onChange={handleChange} className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-zinc-700" placeholder="e.g. United States" />
            </div>
            <div className="relative">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">City (Optional)</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-zinc-700" placeholder="e.g. New York" />
            </div>
          </div>
          
          <div className="relative">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Message *</label>
            <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none placeholder:text-zinc-700" placeholder="Describe your project or inquiry..."></textarea>
          </div>

          <div className="pt-6">
            <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed">
              {formStatus === 'submitting' ? <><FaSpinner className="animate-spin text-lg" /><span>Processing...</span></> : <><span>Submit Inquiry</span><FaEnvelope /></>}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default InquiryForm;