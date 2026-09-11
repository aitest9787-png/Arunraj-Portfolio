import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenRecruiterDrawer: () => void;
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRecruiterDrawer, onOpenResumeModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      // Simple active section detection
      const sections = ['overview', 'metrics', 'projects', 'competencies', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview', id: 'overview' },
    { name: 'Metrics', href: '#metrics', id: 'metrics' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#competencies', id: 'competencies' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-250 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_2px_12px_-4px_rgba(15,23,42,0.06)] py-1.5'
          : 'bg-white border-b border-slate-200/80 py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Compact Formal Brand Identity */}
        <a 
          href="#overview" 
          className="flex items-center gap-2.5 group transition-transform active:scale-98"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-xs border border-slate-800 group-hover:bg-blue-700 transition-colors duration-200">
            AS
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-900 text-sm tracking-tight group-hover:text-blue-700 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                TCS
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-medium -mt-0.5 hidden xs:block">
              AI Automation Developer
            </span>
          </div>
        </a>

        {/* Compact Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-slate-50/80 p-0.5 rounded-lg border border-slate-200/70">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all duration-150 ${
                  isActive
                    ? 'bg-white text-blue-700 shadow-xs border border-slate-200/90'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          {onOpenResumeModal && (
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white hover:bg-slate-50 text-slate-700 border border-slate-300/90 text-xs font-semibold transition-all duration-150 hover:shadow-xs hover:border-slate-400 active:scale-96"
              title="View & Download Official Resume"
            >
              <FileText className="w-3.5 h-3.5 text-slate-600" />
              <span>Resume</span>
            </button>
          )}

          <button
            id="nav-recruiter-briefing-btn"
            onClick={onOpenRecruiterDrawer}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50/90 hover:bg-blue-100 text-blue-800 border border-blue-200 text-xs font-semibold transition-all duration-150 hover:shadow-xs active:scale-96"
            title="Recruiter 30-Second Briefing & ATS Summary"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Recruiter 30s Brief</span>
          </button>

          <a
            id="nav-contact-cta"
            href="#contact"
            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-all duration-150 shadow-xs hover:shadow hover:-translate-y-0.2 active:scale-96"
          >
            <Send className="w-3 h-3" />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center gap-1.5">
          <button
            id="mobile-recruiter-btn"
            onClick={onOpenRecruiterDrawer}
            className="p-1.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold hover:bg-blue-100 transition-colors"
            aria-label="Open Recruiter Briefing"
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2.5 pb-4 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-xl space-y-1 mt-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-1 mb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-md text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="pt-2.5 border-t border-slate-200 flex flex-col gap-2">
            {onOpenResumeModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-slate-800 border border-slate-300 text-xs font-semibold hover:bg-slate-50 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-slate-600" />
                View Official Resume
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruiterDrawer();
              }}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold hover:bg-blue-100 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Recruiter 30-Second Summary
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              Contact Candidate Directly
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
