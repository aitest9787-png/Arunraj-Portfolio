import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenRecruiterDrawer: () => void;
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenRecruiterDrawer, 
  onOpenResumeModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['overview', 'works', 'competencies', 'services', 'experience', 'creator', 'education', 'contact'];
      const scrollPosition = window.scrollY + 140;

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

  // Real-time IST Clock for recruiters
  const [liveTime, setLiveTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const ist = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setLiveTime(ist);
      } catch {
        setLiveTime('IST');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview', id: 'overview' },
    { name: 'Works', href: '#works', id: 'works' },
    { name: 'Skills', href: '#competencies', id: 'competencies' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Creator', href: '#creator', id: 'creator' },
    { name: 'Mastery', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl backdrop-saturate-150 border-b border-white/60 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.05)] py-2.5'
          : 'bg-white/80 backdrop-blur-lg backdrop-saturate-150 border-b border-slate-200/50 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Professional Brand Identity */}
          <a 
            href="#overview" 
            className="flex items-center gap-2.5 group shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900/90 backdrop-blur-md text-white font-display font-extrabold text-xs sm:text-sm flex items-center justify-center shadow-xs border border-white/20 group-hover:bg-violet-600 transition-colors">
              AS
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900 font-display">
                  {PERSONAL_INFO.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 hidden sm:block">
                AI Automation Engineer @ TCS
              </span>
            </div>
          </a>

          {/* Center Navigation Links: Exquisite Glassmorphic Floating Pill */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-2">
            <div className="flex items-center gap-1 p-1 rounded-full bg-white/40 backdrop-blur-xl backdrop-saturate-150 border border-white/70 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] ring-1 ring-slate-900/5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-white/95 text-slate-900 shadow-[0_2px_8px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,1)] border border-slate-200/60 font-bold backdrop-blur-md'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/50 hover:shadow-2xs backdrop-blur-xs'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {/* Resume Button */}
            {onOpenResumeModal && (
              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white/60 hover:bg-white/90 backdrop-blur-md border border-white/80 shadow-2xs transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                <span>Resume</span>
              </button>
            )}

            {/* 30s Fast-Track Brief */}
            <button
              onClick={onOpenRecruiterDrawer}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 hover:bg-slate-900 text-white backdrop-blur-md border border-slate-800 shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>30s Fast-Track</span>
            </button>

            {/* Compact Social Icons */}
            <div className="flex items-center gap-1 pl-1 border-l border-slate-200 text-slate-500">
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="w-7 h-7 rounded-lg hover:bg-white/70 backdrop-blur-sm flex items-center justify-center hover:text-blue-600 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer" 
                className="w-7 h-7 rounded-lg hover:bg-white/70 backdrop-blur-sm flex items-center justify-center hover:text-slate-900 transition-colors"
                title="GitHub Repositories"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenRecruiterDrawer}
              className="px-2.5 py-1 text-xs font-semibold bg-slate-900/90 text-white rounded-full backdrop-blur-sm border border-slate-800"
            >
              30s Brief
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-white/80 backdrop-blur-sm cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu with Glassmorphism */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 mb-2 p-3 rounded-2xl bg-white/85 backdrop-blur-2xl backdrop-saturate-150 border border-white/70 shadow-[0_8px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-900/5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeSection === link.id
                    ? 'bg-white/95 text-slate-900 font-bold shadow-xs border border-slate-200/70'
                    : 'text-slate-600 hover:bg-white/60 hover:text-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2.5 mt-2 border-t border-slate-200/60 flex flex-col gap-2">

              {onOpenResumeModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-md border border-white/80 text-slate-800 text-xs font-semibold hover:bg-white transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Resume</span>
                </button>
              )}

              <div className="flex items-center justify-center gap-4 pt-2 text-slate-600">
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 hover:text-blue-600 rounded-lg hover:bg-white/60"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href={PERSONAL_INFO.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 hover:text-slate-900 rounded-lg hover:bg-white/60"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="p-2 hover:text-emerald-600 rounded-lg hover:bg-white/60"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};
