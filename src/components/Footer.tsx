import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Sparkles, FileText, Phone, Terminal, Cpu, Film } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenRecruiterDrawer: () => void;
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenRecruiterDrawer,
  onOpenResumeModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-100 bg-white py-14 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          
          {/* Brand & Blurb (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-display font-extrabold text-xs flex items-center justify-center">
                AS
              </div>
              <span className="text-base font-extrabold tracking-tight text-slate-900 font-display">
                {PERSONAL_INFO.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
            </div>
            
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              AI Automation &amp; DevOps Engineer at Tata Consultancy Services (TCS), specializing in LangGraph multi-agent orchestration, Ansible AWX cluster provisioning, and closed-loop ServiceNow self-healing automation.
            </p>

            <div className="pt-2 text-[11px] text-slate-400">
              © {new Date().getFullYear()} Arunraj S • Production Portfolio
            </div>
          </div>

          {/* Links Columns (7 cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            
            {/* Column 1: Navigation */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3 font-display">
                Navigation
              </span>
              <ul className="space-y-2 text-slate-500">
                <li><a href="#overview" className="hover:text-slate-900 transition-colors">Overview</a></li>
                <li><a href="#works" className="hover:text-slate-900 transition-colors">Projects &amp; Architectures</a></li>
                <li><a href="#experience" className="hover:text-slate-900 transition-colors">TCS Experience</a></li>
                <li>
                  <button 
                    onClick={onOpenResumeModal} 
                    className="hover:text-slate-900 transition-colors text-left cursor-pointer"
                  >
                    Official Resume
                  </button>
                </li>
                <li>
                  <button 
                    onClick={onOpenRecruiterDrawer} 
                    className="hover:text-slate-900 transition-colors text-left cursor-pointer"
                  >
                    Recruiter 30s Brief
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Core Engineering Services */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3 font-display">
                Services
              </span>
              <ul className="space-y-2 text-slate-500">
                <li><a href="#services" className="hover:text-slate-900 transition-colors">Agentic AI &amp; LangGraph</a></li>
                <li><a href="#services" className="hover:text-slate-900 transition-colors">Enterprise RAG &amp; Vector DBs</a></li>
                <li><a href="#services" className="hover:text-slate-900 transition-colors">ServiceNow Automation</a></li>
                <li><a href="#services" className="hover:text-slate-900 transition-colors">Docker &amp; CI/CD MLOps</a></li>
              </ul>
            </div>

            {/* Column 3: Professional & Contact Channels */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3 font-display">
                Professional Channels
              </span>
              <ul className="space-y-2 text-slate-500">
                <li>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors inline-flex items-center gap-1.5">
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn Profile</span>
                  </a>
                </li>
                <li>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors inline-flex items-center gap-1.5">
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Repositories</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-emerald-600 transition-colors inline-flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>AI Engineer Email</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${PERSONAL_INFO.creatorEmail || 'kuttyeditsofc@gmail.com'}`} className="hover:text-pink-600 transition-colors inline-flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5 text-pink-500" />
                    <span>Edits Email ({PERSONAL_INFO.creatorEmail || 'kuttyeditsofc@gmail.com'})</span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-purple-600 transition-colors inline-flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call / WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar with Scroll To Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Chennai, India (IST) • Live Status: Available for Opportunities</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
