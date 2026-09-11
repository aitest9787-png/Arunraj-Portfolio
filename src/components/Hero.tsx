import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  FileText, 
  CheckCircle2, 
  Layers, 
  Workflow, 
  Cpu, 
  ShieldCheck,
  Building2,
  MapPin,
  Play
} from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePhoto from '../assets/images/arunraj_profile_photo_1789060913335.jpg';

interface HeroProps {
  onOpenRecruiterDrawer: () => void;
  onOpenResumeModal: () => void;
  onPlayIntro?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiterDrawer, onOpenResumeModal, onPlayIntro }) => {
  const [imgSrc, setImgSrc] = useState(profilePhoto);

  const handleImageError = () => {
    // If imported asset fails, fallback to public path
    if (imgSrc !== '/profile.jpg') {
      setImgSrc('/profile.jpg');
    }
  };

  return (
    <section id="overview" className="relative pt-16 pb-12 lg:pt-22 lg:pb-20 bg-white border-b border-slate-200">
      {/* Formal subtle background grid */}
      <div className="absolute inset-0 bg-formal-grid opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* Left Column: Formal Executive Introduction (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Corporate Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-800 text-xs font-semibold mb-5 shadow-2xs">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600" />
              <span className="font-bold text-slate-900">Tata Consultancy Services (TCS)</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600 font-normal">AI Automation Developer</span>
            </div>

            {/* Candidate Name with Motion Entrance */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2.5"
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            {/* Clear, Authoritative Professional Title */}
            <div className="mb-4">
              <div className="text-xl sm:text-2xl font-bold text-blue-700">
                AI Automation Developer &amp; Agentic Systems Engineer
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                LangGraph Multi-Agent Workflows • Production RAG Pipelines • Enterprise Linux &amp; Ansible Automation
              </div>
            </div>

            {/* Executive Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mb-5">
              AI Automation Developer specializing in autonomous <strong className="text-slate-900 font-semibold">LangGraph multi-agent architectures</strong>, self-correcting <strong className="text-slate-900 font-semibold">Agentic RAG pipelines</strong>, and enterprise automation. Proven track record at TCS delivering predictive machine learning incident ticketing (Random Forest / Isolation Forest) and infrastructure orchestration that slashed server patching cycles by <strong className="text-slate-900 font-semibold">60%</strong>.
            </p>

            {/* Formal Competency Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-7">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-medium flex items-center gap-1.5">
                <Workflow className="w-3.5 h-3.5 text-blue-600" /> LangGraph Multi-Agent
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-medium flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-600" /> FAISS / ChromaDB RAG
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-medium flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-slate-700" /> Groq Sub-Second Inference
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 text-xs font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> ServiceNow &amp; Ansible
              </span>
            </div>

            {/* Formal Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-7">
              <button
                id="hero-view-resume-btn"
                onClick={onOpenResumeModal}
                className="btn-hover flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-sm cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Official Resume</span>
              </button>

              <button
                id="hero-recruiter-brief-btn"
                onClick={onOpenRecruiterDrawer}
                className="btn-hover flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 font-semibold text-xs sm:text-sm shadow-2xs cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Recruiter 30s Brief</span>
              </button>

              {onPlayIntro && (
                <button
                  id="hero-play-intro-btn"
                  onClick={onPlayIntro}
                  className="btn-hover flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-xs sm:text-sm shadow-2xs cursor-pointer"
                  title="Watch Arunraj animated intro"
                >
                  <Play className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                  <span>Play Intro</span>
                </button>
              )}

              <a
                id="hero-explore-projects-btn"
                href="#projects"
                className="btn-hover flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-medium text-xs sm:text-sm shadow-2xs group cursor-pointer"
              >
                <span>Enterprise Systems</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Quick Formal Contact Details */}
            <div className="w-full pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 hover:text-blue-700 transition-colors">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-800 hover:text-blue-700 truncate font-medium">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-1.5 hover:text-blue-700 transition-colors">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-800 hover:text-blue-700 font-medium">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="text-slate-800 font-medium">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1 text-blue-700 hover:text-blue-900 font-semibold transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
                <span>•</span>
                <a 
                  href={PERSONAL_INFO.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1 text-slate-700 hover:text-slate-900 font-semibold transition-colors"
                >
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Formal Candidate Profile Portrait (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Formal Portrait Card with high-end card hover and elevation */}
            <div className="card-hover w-full max-w-sm bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] p-6 flex flex-col items-center text-center group">
              
              {/* Profile Image with clean circular frame */}
              <div className="relative mb-4.5">
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-white border-2 border-slate-200 shadow-inner overflow-hidden">
                  <img
                    src={imgSrc}
                    alt="Arunraj S - AI Automation Developer"
                    referrerPolicy="no-referrer"
                    onError={handleImageError}
                    className="w-full h-full rounded-full object-cover object-top"
                  />
                </div>

                {/* Verified Corporate Status Badge */}
                <div className="absolute bottom-1.5 right-2 bg-white/95 backdrop-blur-xs border border-slate-200 rounded-full px-2.5 py-0.5 shadow-sm flex items-center gap-1.5 text-[11px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Verified Profile</span>
                </div>
              </div>

              {/* Formal Identification Header */}
              <h2 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                {PERSONAL_INFO.name}
              </h2>
              <p className="text-xs font-semibold text-blue-700 mt-0.5">
                AI Automation Developer
              </p>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                <span>Tata Consultancy Services (TCS)</span>
              </div>

              {/* Key Competency Summary Box */}
              <div className="w-full mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-left text-xs space-y-1.5 group-hover:bg-blue-50/30 transition-colors">
                <div className="flex items-center justify-between text-slate-500 font-semibold border-b border-slate-200/80 pb-1.5">
                  <span className="text-[10px] tracking-wider uppercase font-bold">SPECIALIZATION</span>
                  <span className="text-blue-700 font-semibold text-[11px]">Enterprise Ready</span>
                </div>
                <div className="flex items-center justify-between text-slate-700 text-[11px]">
                  <span>Core Framework:</span>
                  <strong className="text-slate-900 font-semibold">LangGraph & LangChain</strong>
                </div>
                <div className="flex items-center justify-between text-slate-700 text-[11px]">
                  <span>Retrieval Engine:</span>
                  <strong className="text-slate-900 font-semibold">FAISS / ChromaDB RAG</strong>
                </div>
                <div className="flex items-center justify-between text-slate-700 text-[11px]">
                  <span>Enterprise Stack:</span>
                  <strong className="text-slate-900 font-semibold">ServiceNow, FastAPI, Ansible</strong>
                </div>
                <div className="flex items-center justify-between text-slate-700 text-[11px]">
                  <span>Academic Degree:</span>
                  <strong className="text-slate-900 font-semibold">B.Tech IT (2020-2024)</strong>
                </div>
              </div>

              {/* Recruiter Quick Link */}
              <button
                onClick={onOpenRecruiterDrawer}
                className="btn-hover w-full mt-4 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Open Recruiter 30-Sec Dossier</span>
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
