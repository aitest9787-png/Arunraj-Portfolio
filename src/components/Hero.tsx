import React, { useState } from 'react';
import { 
  Sparkles, 
  Mail, 
  MapPin, 
  Send, 
  FileText, 
  CheckCircle2, 
  ExternalLink,
  Terminal,
  Cpu,
  Linkedin,
  Github,
  Building2,
  Activity,
  BadgeCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePhoto from '../assets/images/arunraj_profile_photo_1789060913335.jpg';

interface HeroProps {
  onOpenRecruiterDrawer: () => void;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenRecruiterDrawer, 
  onOpenResumeModal,
}) => {
  const [imgSrc, setImgSrc] = useState(profilePhoto);

  return (
    <section id="overview" className="relative pt-8 pb-16 lg:pt-12 lg:pb-20 overflow-hidden bg-white">
      
      {/* Decorative Floating Colorful Spheres */}
      {/* 1. Purple Sphere (Top Left) */}
      <motion.div
        animate={{ y: [-6, 8, -6], x: [-3, 3, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[8%] sm:left-[14%] top-16 sm:top-24 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#8B5CF6] shadow-md shadow-purple-500/30 z-10 pointer-events-none"
      />

      {/* 2. Hot Pink Sphere (Top Right) */}
      <motion.div
        animate={{ y: [6, -8, 6], x: [2, -3, 2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[12%] sm:right-[18%] top-12 sm:top-20 w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-[#EC4899] shadow-md shadow-pink-500/30 z-10 pointer-events-none"
      />

      {/* 3. Mint / Teal Sphere (Mid Left) */}
      <motion.div
        animate={{ y: [-4, 6, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[4%] sm:left-[8%] top-[45%] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#10B981] shadow-sm shadow-emerald-500/30 z-10 pointer-events-none"
      />

      {/* 4. Golden Amber Half-Circle Arc (Right Edge) */}
      <motion.div
        animate={{ x: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-6 sm:-right-8 top-[36%] w-16 h-28 sm:w-20 sm:h-36 rounded-l-full bg-[#F59E0B] shadow-lg shadow-amber-500/20 z-10 pointer-events-none"
      />

      {/* 5. Soft Violet Floating Orb (Lower Right) */}
      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[16%] bottom-10 w-5 h-5 rounded-full bg-[#6366F1] opacity-70 z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Top Centered Main Headings */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-xs font-bold text-emerald-800 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Real-Time Status: Active at TCS • Open for Opportunities</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-slate-500" />
                <span>Tata Consultancy Services (TCS) • Chennai, India</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight font-display mb-2">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-slate-700 font-display">
              AI Engineer &amp; RAG Systems Specialist
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1 flex items-center justify-center gap-3 flex-wrap">
              <span className="text-violet-700 font-semibold flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5" />
                LangGraph &amp; Multi-Agent Systems
              </span>
              <span>•</span>
              <span className="text-blue-700 font-semibold flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5" />
                Ansible &amp; AWX Orchestration
              </span>
              <span>•</span>
              <span className="text-emerald-700 font-semibold">ServiceNow Self-Healing ITSM</span>
              <span>•</span>
              <span className="text-slate-700 font-semibold">Enterprise RAG &amp; Vector DBs</span>
            </p>
          </motion.div>
        </div>

        {/* 3-Column Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center mb-16">
          
          {/* Left Column: Biography, Contact, Core Engineering Focus (3 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-6 text-left order-2 lg:order-1"
          >
            {/* Biography */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Professional Profile
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                AI Automation &amp; DevOps Engineer at TCS specializing in LangGraph multi-agent orchestration, self-correcting RAG pipelines, AWX cluster provisioning, and autonomous ITSM self-healing.
              </p>
            </div>

            {/* Core Tech Specialties */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                Core Engineering Focus
              </span>
              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-blue-50/70 border border-blue-100 text-xs text-blue-900">
                  <div className="flex items-center gap-1.5 font-bold mb-0.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-700" />
                    <span>Ansible AWX &amp; Self-Healing</span>
                  </div>
                  <p className="text-[11px] text-blue-800/80 leading-relaxed">
                    Automated AWX cluster setup &amp; Python middleware for closed-loop ServiceNow incident resolution.
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-violet-50/70 border border-violet-100 text-xs text-violet-900">
                  <div className="flex items-center gap-1.5 font-bold mb-0.5">
                    <Cpu className="w-3.5 h-3.5 text-violet-700" />
                    <span>LangGraph &amp; Enterprise RAG</span>
                  </div>
                  <p className="text-[11px] text-violet-800/80 leading-relaxed">
                    Multi-agent state machines, Pydantic contracts, hybrid FAISS/Chroma search, and automated validation.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Direct Contact
              </span>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                {PERSONAL_INFO.location}
              </p>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 transition-colors block truncate font-medium"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs sm:text-sm text-slate-600">
                {PERSONAL_INFO.phone}
              </p>
            </div>
          </motion.div>

          {/* Center Column: Circular Portrait & Centered Headline (6 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-center text-center order-1 lg:order-2"
          >
            
            {/* Circular Profile Avatar with multi-color vibrant ring */}
            <div className="relative mb-6">
              {/* Outer decorative gradient ring */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1.5 bg-gradient-to-tr from-blue-500 via-indigo-500 via-pink-500 to-amber-400 shadow-xl shadow-slate-900/10 flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                  <img
                    src={imgSrc}
                    onError={() => setImgSrc('/profile.jpg')}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
              </div>

              {/* Status pill badge overlapping avatar */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-white border border-slate-200 shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-800">TCS AI Systems Engineer</span>
              </div>
            </div>

            {/* Headline statement below avatar */}
            <div className="max-w-md mx-auto space-y-3 mt-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight font-display">
                Building Autonomous Agentic Graphs &amp; Production AI Systems
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Engineering deterministic multi-agent graphs, Pydantic structured output contracts, and enterprise API automations that bridge LLMs with real operations.
              </p>

              {/* Pill Tags row */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                {['Agentic AI', 'LangGraph', 'Enterprise RAG', 'ServiceNow CVA', 'Ansible AWX', 'ITSM Self-Healing'].map((tag) => (
                  <span 
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Primary Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-3">
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow transition-all active:scale-95 inline-flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Get In Touch</span>
                </a>

                <button
                  onClick={onOpenResumeModal}
                  className="px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-all active:scale-95 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-600" />
                  <span>View Resume</span>
                </button>

                <button
                  onClick={onOpenRecruiterDrawer}
                  className="px-4 py-2.5 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs sm:text-sm font-semibold border border-indigo-200 transition-all active:scale-95 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>30s Fast-Track</span>
                </button>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Valid Key Stats stacked vertically (3 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-6 text-right order-3"
          >
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block font-display">
                2 Years
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Enterprise Experience @ TCS
              </span>
            </div>

            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block font-display text-emerald-600">
                4 Systems
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                TCS Production Deployments
              </span>
            </div>

            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block font-display text-violet-600">
                45+
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Ansible &amp; Agent Workflows
              </span>
            </div>

            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block font-display text-blue-600">
                60% Faster
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Patching Cycles at Scale
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
