'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaTools, FaShieldAlt, FaCheckCircle, FaHourglassHalf, FaServer, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';

const UnderConstruction: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-cyan-500/30 pb-20">
      
      {/* --- HR / RECRUITER APOLOGY BANNER (Expanded & Larger) --- */}
      <div className="bg-amber-950/40 border-b border-amber-900/50 p-6 flex justify-center w-full">
        <div className="max-w-7xl w-full flex items-start sm:items-center gap-5 animate-in slide-in-from-top-5 duration-700">
          <FaTools className="text-amber-500 text-3xl sm:text-4xl flex-shrink-0" />
          <div className="flex-1">
            <h4 className="font-bold text-amber-400 mb-2 text-lg md:text-xl tracking-wide">Notice to Recruitment Teams & HR Professionals</h4>
            <p className="text-base md:text-lg text-amber-200/90 leading-relaxed max-w-5xl">
              I am currently migrating my portfolio to a dynamic, database-driven architecture to better showcase my work. I sincerely apologize for the limited view during this transition. Below is a focused snapshot of my qualifications, certifications, and target roles.
            </p>
          </div>
        </div>
      </div>

      {/* --- HEADER & ABOUT SECTION --- */}
      <header className="max-w-5xl mx-auto px-6 pt-16 text-center">
        
		{/* Name (Responsive, single-line, no cutoff) */}
        <div className="mb-6 flex justify-center w-full py-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 md:whitespace-nowrap tracking-tight">
            Muhammad Shaheer Jamal Chishti
          </h1>
        </div>
        
        {/* Updated Professional Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-slate-300 mb-10 flex items-center justify-center gap-3">
          <FaShieldAlt className="text-cyan-500" />
          Targeting SOC Analyst Roles
        </h2>

        {/* Updated About Me */}
        <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl text-left shadow-lg mb-12">
          <h3 className="text-xl font-bold text-cyan-400 mb-4">About Me</h3>
          <p className="text-slate-300 leading-relaxed mb-4 text-base md:text-lg">
            I am a Bachelors of Cybersecurity student at Sir Syed University of Engineering & Technology with a dedicated focus on Defensive Security. My technical foundation is built on analyzing network security protocols, understanding threat analysis methodologies, and safeguarding enterprise networking environments.
          </p>
          <p className="text-slate-300 leading-relaxed text-base md:text-lg">
            My goal is to leverage my academic background and hands-on project experience to actively monitor, detect, and mitigate cyber threats as a SOC Analyst, contributing to robust organizational security postures.
          </p>
        </div>

        {/* --- SOCIAL & RESUME LINKS --- */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-20">
          <a href="https://www.linkedin.com/in/m-shaheer-jamal-chishti-b75307272" target="_blank" rel="noopener noreferrer" className="text-3xl text-slate-500 hover:text-[#0A66C2] transition-transform hover:scale-110" title="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/ShaheerJamalChishti90" target="_blank" rel="noopener noreferrer" className="text-3xl text-slate-500 hover:text-white transition-transform hover:scale-110" title="GitHub"><FaGithub /></a>
          <a href="mailto:shaheerjamalchishti@gmail.com" className="text-3xl text-slate-500 hover:text-[#0078D4] transition-transform hover:scale-110" title="Email"><FaEnvelope /></a>
          
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="ml-4 inline-flex items-center gap-2 px-8 py-3 bg-cyan-950/30 border border-cyan-900/50 rounded-full text-cyan-400 font-bold hover:bg-cyan-900/50 hover:text-cyan-300 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <FaFileAlt />
            <span>View Resume</span>
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* --- LEFT COLUMN: CERTIFICATIONS --- */}
        <div className="space-y-10">
          
          {/* Completed Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
              <FaCheckCircle className="text-emerald-500" />
              Completed Certifications
            </h3>
            <div className="space-y-4">
              
              <a href="https://cs50.harvard.edu/certificates/01c2026f-ee29-409f-8939-fe8bd2226397" target="_blank" rel="noopener noreferrer" className="block bg-zinc-900 border border-zinc-800 p-5 rounded-xl hover:border-emerald-500/50 transition-all group hover:-translate-y-1">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-bold text-slate-200 group-hover:text-emerald-400 transition-colors text-lg">Introduction to Cybersecurity</div>
                  <FaExternalLinkAlt className="text-zinc-600 group-hover:text-emerald-500 text-sm mt-1" />
                </div>
                <div className="text-sm font-semibold text-emerald-500 mb-2">Harvard CS50</div>
                <p className="text-sm text-slate-400 leading-relaxed">Studied cryptography, network threats, and web vulnerabilities (SQLi/XSS) to understand attacker behavior and secure IT infrastructure.</p>
              </a>

              <a href="https://coursera.org/share/9afec1e144ced5525a94b3677163d250" target="_blank" rel="noopener noreferrer" className="block bg-zinc-900 border border-zinc-800 p-5 rounded-xl hover:border-emerald-500/50 transition-all group hover:-translate-y-1">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-bold text-slate-200 group-hover:text-emerald-400 transition-colors text-lg">Foundations of Cybersecurity</div>
                  <FaExternalLinkAlt className="text-zinc-600 group-hover:text-emerald-500 text-sm mt-1" />
                </div>
                <div className="text-sm font-semibold text-emerald-500 mb-2">Google, Inc</div>
                <p className="text-sm text-slate-400 leading-relaxed">Applied standard security frameworks (CIA triad, NIST, CISSP domains) to evaluate threats and recommend system defenses.</p>
              </a>

              <a href="https://coursera.org/share/0ede9411f237b52eb02a768cec9df945" target="_blank" rel="noopener noreferrer" className="block bg-zinc-900 border border-zinc-800 p-5 rounded-xl hover:border-emerald-500/50 transition-all group hover:-translate-y-1">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-bold text-slate-200 group-hover:text-emerald-400 transition-colors text-lg">Play It Safe: Manage Security Risks</div>
                  <FaExternalLinkAlt className="text-zinc-600 group-hover:text-emerald-500 text-sm mt-1" />
                </div>
                <div className="text-sm font-semibold text-emerald-500 mb-2">Google, Inc</div>
                <p className="text-sm text-slate-400 leading-relaxed">Evaluated threat models and audited security controls using the NIST framework.</p>
              </a>

              <a href="https://www.datacamp.com/completed/statement-of-accomplishment/course/1461988d34a1368b52b57d78e1535aa2ded8be95" target="_blank" rel="noopener noreferrer" className="block bg-zinc-900 border border-zinc-800 p-5 rounded-xl hover:border-emerald-500/50 transition-all group hover:-translate-y-1">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-bold text-slate-200 group-hover:text-emerald-400 transition-colors text-lg">Introduction to SQL</div>
                  <FaExternalLinkAlt className="text-zinc-600 group-hover:text-emerald-500 text-sm mt-1" />
                </div>
                <div className="text-sm font-semibold text-emerald-500 mb-2">DataCamp</div>
                <p className="text-sm text-slate-400 leading-relaxed">Used SQL queries (filtering, joins, aggregates) to parse and correlate large datasets for threat-hunting workflows.</p>
              </a>

              <a href="https://www.datacamp.com/completed/statement-of-accomplishment/course/ca8d795395e0bfde4aa46fc316f31e9daad46392" target="_blank" rel="noopener noreferrer" className="block bg-zinc-900 border border-zinc-800 p-5 rounded-xl hover:border-emerald-500/50 transition-all group hover:-translate-y-1">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-bold text-slate-200 group-hover:text-emerald-400 transition-colors text-lg">Intermediate SQL</div>
                  <FaExternalLinkAlt className="text-zinc-600 group-hover:text-emerald-500 text-sm mt-1" />
                </div>
                <div className="text-sm font-semibold text-emerald-500 mb-2">DataCamp</div>
                <p className="text-sm text-slate-400 leading-relaxed">Advanced parsing and correlation of datasets for security investigations.</p>
              </a>

              <div className="block bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
                <div className="font-bold text-slate-200 text-lg mb-2">Linux Essentials</div>
                <div className="text-sm font-semibold text-emerald-500 mb-2">FreeCodeCamp, Inc</div>
                <p className="text-sm text-slate-400 leading-relaxed">Configured Linux defenses using advanced permissions, SSH security, UFW, and Fail2Ban to support incident triage via the command line.</p>
              </div>

            </div>
          </div>

          {/* In Progress Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
              <FaHourglassHalf className="text-blue-500" />
              Currently Pursuing
            </h3>
            <div className="space-y-4">
              
              <div className="bg-zinc-900/50 border border-zinc-800/50 p-5 rounded-xl opacity-90 border-l-4 border-l-blue-500">
                <div className="font-bold text-blue-400 text-lg mb-1">CompTIA Network+ (Exam N10-009)</div>
                <p className="text-sm text-slate-400 leading-relaxed">Studying enterprise networking concepts, including OSI and TCP/IP models, subnetting, and routing protocols, to better analyze network-level attacks.</p>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800/50 p-5 rounded-xl opacity-90 border-l-4 border-l-blue-500">
                <div className="font-bold text-blue-400 text-lg mb-1">Connect and Protect: Networks and Network Security</div>
                <div className="text-sm font-semibold text-blue-500/80 mb-2">Google, Inc</div>
                <p className="text-sm text-slate-400 leading-relaxed">Learning to secure enterprise network architectures and analyze traffic.</p>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800/50 p-5 rounded-xl opacity-90 border-l-4 border-l-blue-500">
                <div className="font-bold text-blue-400 text-lg mb-1">Introduction to Database with SQL</div>
                <div className="text-sm font-semibold text-blue-500/80 mb-2">Harvard CS50</div>
                <p className="text-sm text-slate-400 leading-relaxed">Learning database architecture and advanced querying (SQLite, MS SQL Server) to investigate SIEM logs and identify backend vulnerabilities.</p>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800/50 p-5 rounded-xl opacity-90 border-l-4 border-l-blue-500">
                <div className="font-bold text-blue-400 text-lg mb-1">Wireshark (Network Traffic Analysis)</div>
                <div className="text-sm font-semibold text-blue-500/80 mb-2">IBM SkillUp</div>
                <p className="text-sm text-slate-400 leading-relaxed">Analyzing network traffic and packet captures (PCAPs) using Wireshark to detect network anomalies and security incidents.</p>
              </div>

            </div>
          </div>

        </div>

        {/* --- RIGHT COLUMN: CYBERSECURITY PROJECTS --- */}
        <div>
          <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
            <FaServer className="text-purple-500" />
            Projects & Practical Application
          </h3>
          <div className="space-y-5">
            
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-purple-500/50 transition-all group hover:-translate-y-1">
              <h4 className="font-bold text-slate-200 group-hover:text-purple-400 transition-colors text-lg mb-2">Threat Intelligence Analysis (CS50 Final Project)</h4>
              <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                Wrote an OSINT report on the 2026 Handala APT breach, documenting how the group used credential harvesting to exploit the gap between enterprise and personal security controls.
              </p>
              <a href="https://youtu.be/Nekz8YW07pg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-400 transition-colors">
                <FaYoutube className="text-xl" />
                <span>Watch on YouTube</span>
              </a>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-purple-500/50 transition-all group hover:-translate-y-1">
              <h4 className="font-bold text-slate-200 group-hover:text-purple-400 transition-colors text-lg mb-2">Automated Threat Intelligence Tool (Python)</h4>
              <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                Wrote a Python script using the VirusTotal API to automatically check if IP addresses and file hashes are malicious, speeding up the triage process for Indicators of Compromise (IoCs).
              </p>
              <a href="https://github.com/ShaheerJamalChishti90/IoC-Threat-Analyzer-Python" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors">
                <FaGithub className="text-xl" />
                <span>View on GitHub</span>
              </a>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-purple-500/50 transition-all group hover:-translate-y-1">
              <h4 className="font-bold text-slate-200 group-hover:text-purple-400 transition-colors text-lg mb-2">Local SIEM Implementation (Wazuh)</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Installed and configured a Wazuh SIEM on Linux to collect system authentication logs. Built custom dashboards to monitor login activity and practice triaging security alerts.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-purple-500/50 transition-all group hover:-translate-y-1">
              <h4 className="font-bold text-slate-200 group-hover:text-purple-400 transition-colors text-lg mb-2">Custom Linux Hardening & IDS Setup</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Secured a local Linux Mint environment by configuring UFW (Uncomplicated Firewall) rules and deploying Fail2Ban to automatically detect and block simulated brute-force SSH attacks.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-purple-500/50 transition-all group hover:-translate-y-1">
              <h4 className="font-bold text-slate-200 group-hover:text-purple-400 transition-colors text-lg mb-2">Python Network Port Scanner</h4>
              <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                Developed a lightweight port scanner in Python using the socket library to identify open network ports and running services on local virtual machines.
              </p>
              <a href="https://github.com/ShaheerJamalChishti90/PortScanner" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors">
                <FaGithub className="text-xl" />
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
