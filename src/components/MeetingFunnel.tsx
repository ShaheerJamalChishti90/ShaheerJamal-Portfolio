// src/components/MeetingFunnel.tsx
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaCalendarAlt, FaCheckCircle, FaExclamationCircle, FaSpinner, FaArrowRight } from 'react-icons/fa';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyzPsehg3fHhoSC6TUneeIc2cVKzOxSuCLO_GH6LVkZo05_fFAVlAQVAVODFxHcvN4GfQ/exec";

interface MeetingFunnelProps {
  onBack: () => void;
}

const MeetingFunnel: React.FC<MeetingFunnelProps> = ({ onBack }) => {
  const [meetingData, setMeetingData] = useState({ name: '', email: '', phone: '', country: '', service: '', customService: '', date: '', time: '' });
  const [meetingStatus, setMeetingStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState(''); // NEW
  
  const [bookedSlots, setBookedSlots] = useState<{date: string, time: string}[]>([]);
  const [isTimeConflict, setIsTimeConflict] = useState(false);
  const [isLoadingSlots, setIsLoadingSlots] = useState(true);

  useEffect(() => {
    fetch(GOOGLE_SCRIPT_URL)
      .then(res => res.json())
      .then(data => {
        if (data.success) setBookedSlots(data.bookedSlots);
        setIsLoadingSlots(false);
      })
      .catch(err => {
        console.error("Error fetching slots:", err);
        setIsLoadingSlots(false);
      });
  }, []);

  useEffect(() => {
    if (meetingData.date && meetingData.time) {
      const conflict = bookedSlots.some(slot => slot.date === meetingData.date && slot.time === meetingData.time);
      setIsTimeConflict(conflict);
    } else {
      setIsTimeConflict(false);
    }
  }, [meetingData.date, meetingData.time, bookedSlots]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isTimeConflict) return; 
    
    setMeetingStatus('submitting');
    const finalService = meetingData.service === 'Custom Service' ? meetingData.customService : meetingData.service;
    
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ type: 'meeting', ...meetingData, service: finalService }),
      });
      const result = await response.json();
      if (result.success) {
        setMeetingStatus('success');
        setMeetingData({ name: '', email: '', phone: '', country: '', service: '', customService: '', date: '', time: '' }); 
      } else {
        setErrorMessage(result.error || "System error.");
        setMeetingStatus('error');
      }
    } catch (error: any) { 
      setErrorMessage(error.message || "Network error.");
      setMeetingStatus('error'); 
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setMeetingData({ ...meetingData, [e.target.name]: e.target.value });
  };

  const timeSlots = [
    "08:00 AM PST", "09:00 AM PST", "10:00 AM PST", "11:00 AM PST", 
    "12:00 PM PST", "01:00 PM PST", "02:00 PM PST", "03:00 PM PST", 
    "04:00 PM PST", "05:00 PM PST", "06:00 PM PST", "07:00 PM PST", "08:00 PM PST"
  ];

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-right-8 duration-500">
      <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 hover:text-blue-400 transition-colors mb-10 group">
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> <span>Back to Options</span>
      </button>
      
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3 tracking-tight">Schedule a Meeting</h2>
        <p className="text-zinc-500">Select a date, time, and service to secure your slot in my database.</p>
      </div>

      {meetingStatus === 'success' ? (
        <div className="bg-[#111113] border border-blue-500/30 rounded-2xl p-12 text-center animate-in zoom-in-95 duration-300 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
          <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
          <h3 className="text-2xl font-bold text-white mb-2">Meeting Slot Confirmed</h3>
          <p className="text-zinc-400">Your meeting request for <strong className="text-slate-200">{meetingData.date}</strong> at <strong className="text-slate-200">{meetingData.time}</strong> has been logged in my database. I will review it shortly.</p>
          <button onClick={() => setMeetingStatus('idle')} className="mt-8 text-sm font-bold uppercase tracking-wider text-blue-500 hover:text-blue-400 transition-colors">Request Another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {meetingStatus === 'error' && (
            <div className="bg-red-950/30 border border-red-900/50 text-red-400 px-4 py-3 text-sm rounded-lg flex items-center gap-3">
              <FaExclamationCircle className="flex-shrink-0" /> <span>{errorMessage}</span>
            </div>
          )}
          
          <div className={`p-6 rounded-xl border transition-colors duration-300 ${isTimeConflict ? 'bg-red-950/20 border-red-500/50' : 'bg-[#18181b] border-zinc-800'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-2"><FaCalendarAlt /> Date *</label>
                <input 
                  type="date" 
                  name="date" 
                  required 
                  value={meetingData.date} 
                  onChange={handleChange} 
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer [color-scheme:dark]" 
                />
              </div>
              <div className="relative">
                <label className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-2">
                  Time (PST) * {isLoadingSlots && <FaSpinner className="animate-spin text-zinc-500" />}
                </label>
                <select name="time" required value={meetingData.time} onChange={handleChange} disabled={isLoadingSlots} className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer disabled:opacity-50">
                  <option value="" disabled>Select Time...</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {isTimeConflict && (
              <div className="mt-4 flex items-center gap-2 text-sm text-red-400 animate-in fade-in">
                <FaExclamationCircle /> <span>This time slot is already booked. Please select another.</span>
              </div>
            )}
          </div>

          <div className="relative">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Service Required *</label>
            <select name="service" required value={meetingData.service} onChange={handleChange} className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
              <option value="" className="bg-black text-white" disabled>Select a service...</option>
              <option value="Cloud Data Engineering" className="bg-black text-white">Cloud Data Engineering</option>
              <option value="Data Engineering" className="bg-black text-white">Data Engineering</option>
              <option value="Data Analysis" className="bg-black text-white">Data Analysis</option>
              <option value="AI Chatbots Development" className="bg-black text-white">AI Chatbots Development</option>
              <option value="Software Development" className="bg-black text-white">Software Development</option>
              <option value="Website Development" className="bg-black text-white">Website Development</option>
              <option value="Application Development (Web & Android)" className="bg-black text-white">Application Development (Web & Android)</option>
              <option value="Custom Service" className="bg-black text-white">Other (Please specify)</option>
            </select>
          </div>

          {meetingData.service === 'Custom Service' && (
            <div className="relative animate-in fade-in slide-in-from-top-2 duration-300">
              <label className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">Specify Requirement *</label>
              <input type="text" name="customService" required={meetingData.service === 'Custom Service'} value={meetingData.customService} onChange={handleChange} className="w-full bg-transparent border-b border-blue-500/50 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="E.g. Database Migration Consulting" />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="relative">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Full Name *</label>
              <input type="text" name="name" required value={meetingData.name} onChange={handleChange} className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-700" placeholder="John Doe" />
            </div>
            <div className="relative">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Email Address *</label>
              <input type="email" name="email" required value={meetingData.email} onChange={handleChange} className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-700" placeholder="john@example.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Phone Number *</label>
              <input type="tel" name="phone" required value={meetingData.phone} onChange={handleChange} className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-700" placeholder="+1 234 567 8900" />
            </div>
            <div className="relative">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Country *</label>
              <input type="text" name="country" required value={meetingData.country} onChange={handleChange} className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-700" placeholder="United States" />
            </div>
          </div>

          <button type="submit" disabled={meetingStatus === 'submitting' || isTimeConflict} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 flex justify-center items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed mt-8">
            {meetingStatus === 'submitting' ? <><FaSpinner className="animate-spin text-xl" /><span>Processing...</span></> : <><span>Secure Meeting Slot</span><FaArrowRight /></>}
          </button>
        </form>
      )}
    </div>
  );
};

export default MeetingFunnel;