import React from 'react';
import { ArrowUp, Github, Linkedin, Sparkles } from 'lucide-react';
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
    <footer className="border-t border-slate-200 bg-white py-10 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              AS
            </div>
            <div>
              <span className="font-bold text-slate-900 text-sm">{PERSONAL_INFO.name}</span>
              <span className="text-slate-500 ml-2">• AI Automation Developer (TCS)</span>
            </div>
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-700 font-medium">
            <button
              onClick={onOpenRecruiterDrawer}
              className="hover:text-blue-700 flex items-center gap-1 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Recruiter Briefing</span>
            </button>
            <button
              onClick={onOpenResumeModal}
              className="hover:text-blue-700 transition-colors"
            >
              Official Resume
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 flex items-center gap-1 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 flex items-center gap-1 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All enterprise and personal systems documented for recruiter review.
          </div>
          <div>
            Tata Consultancy Services • Chennai, India
          </div>
        </div>

      </div>
    </footer>
  );
};
