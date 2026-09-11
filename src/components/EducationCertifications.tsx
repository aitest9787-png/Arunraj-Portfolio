import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Server, 
  Code2, 
  FileCode, 
  Layers, 
  Database, 
  Activity, 
  Clock, 
  X,
  BadgeCheck,
  Zap,
  BookOpen
} from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { CertificationItem } from '../types';

export const EducationCertifications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'devops' | 'software'>('all');
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const filteredCerts = CERTIFICATIONS.filter((cert) => {
    if (activeCategory === 'all') return true;
    return cert.category === activeCategory;
  });

  const getCertIcon = (title: string, category?: string) => {
    if (title.includes('Claude') || title.includes('Anthropic')) return <Sparkles className="w-5 h-5 text-violet-600" />;
    if (title.includes('Generative') || title.includes('LLM')) return <Cpu className="w-5 h-5 text-indigo-600" />;
    if (title.includes('Ansible')) return <Terminal className="w-5 h-5 text-blue-600" />;
    if (title.includes('Linux')) return <Server className="w-5 h-5 text-cyan-600" />;
    if (title.includes('PowerShell')) return <Code2 className="w-5 h-5 text-sky-600" />;
    if (title.includes('Python')) return <FileCode className="w-5 h-5 text-emerald-600" />;
    return <Award className="w-5 h-5 text-violet-600" />;
  };

  return (
    <section id="education" className="py-20 bg-slate-50/70 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Real-Time Verification Status */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-violet-700 text-xs font-bold tracking-wider uppercase mb-2">
              <Award className="w-4 h-4" />
              <span>Accreditation &amp; Engineering Rigor</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Certifications &amp; Continuous Mastery
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Validated industry credentials across Agentic AI pipelines, Red Hat Ansible automation, and Linux systems engineering, paired with a formal B.Tech in Information Technology.
            </p>
          </div>

          {/* Real-Time Telemetry Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <div>
                <span className="text-[11px] font-bold text-slate-900 block leading-tight">
                  Active Status
                </span>
                <span className="text-[10px] text-slate-500 block leading-tight">
                  7/7 Active Credentials
                </span>
              </div>
            </div>

            <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-2.5">
              <BadgeCheck className="w-4 h-4 text-violet-600" />
              <div>
                <span className="text-[11px] font-bold text-slate-900 block leading-tight">
                  Continuous Mastery
                </span>
                <span className="text-[10px] text-slate-500 block leading-tight">
                  100% Production Applied
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Mastery Live Tracker Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="p-2 sm:px-4">
              <div className="flex items-center gap-2 text-violet-600 mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Agentic Track</span>
              </div>
              <div className="text-base sm:text-lg font-extrabold text-slate-900 font-display">Anthropic + GenAI</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Prompting, Tool Calling &amp; RAG</div>
            </div>

            <div className="p-2 sm:px-4 pt-3 sm:pt-2">
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <Terminal className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">DevOps Track</span>
              </div>
              <div className="text-base sm:text-lg font-extrabold text-slate-900 font-display">Ansible &amp; AWX</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Enterprise Fleet Orchestration</div>
            </div>

            <div className="p-2 sm:px-4 pt-3 sm:pt-2">
              <div className="flex items-center gap-2 text-emerald-600 mb-1">
                <Activity className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Application Rate</span>
              </div>
              <div className="text-base sm:text-lg font-extrabold text-slate-900 font-display">100% In Production</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Active at TCS Enterprise</div>
            </div>

            <div className="p-2 sm:px-4 pt-3 sm:pt-2">
              <div className="flex items-center gap-2 text-amber-600 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Current Sprint</span>
              </div>
              <div className="text-base sm:text-lg font-extrabold text-slate-900 font-display">CKA &amp; Cloud Arch</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Target Q4 2026 Mastery</div>
            </div>
          </div>
        </div>

        {/* Core Layout: Academic Foundation (Left 5 cols) & Certifications (Right 7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* ========================================================
              LEFT: Academic Foundation (B.Tech in IT)
             ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-violet-700 text-xs font-bold tracking-wider uppercase mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-4">
                Formal Education
              </h3>

              <div className="card-hover p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs relative overflow-hidden group">
                
                {/* Realtime Degree Status Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Accredited Degree</span>
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{EDUCATION.period}</span>
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 font-display mb-1.5">
                  {EDUCATION.degree}
                </h4>
                
                <div className="text-slate-800 font-semibold text-sm mb-1">
                  {EDUCATION.institution}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{EDUCATION.location}</span>
                </div>

                {/* Coursework Modules */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] uppercase text-slate-400 font-bold block mb-2.5">
                    Foundational Curriculum &amp; Specialization:
                  </span>
                  <div className="space-y-2">
                    {EDUCATION.focusAreas.map((area, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Academic Rigor Note */}
            <div className="p-4 rounded-xl bg-violet-50/90 border border-violet-200/90 text-xs text-violet-950 flex items-start gap-3 shadow-2xs">
              <Sparkles className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="font-bold block mb-0.5">Software Engineering Rigor:</span>
                Structured training in discrete algorithms, system-level memory management, relational database indexing, and network socket programming.
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT: Professional Certifications & Mastery Cards
             ======================================================== */}
          <div className="lg:col-span-7">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 text-violet-700 text-xs font-bold tracking-wider uppercase mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Credential Vault</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  Industry Accreditations ({CERTIFICATIONS.length})
                </h3>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-xl w-fit border border-slate-200 text-xs">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    activeCategory === 'all'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All ({CERTIFICATIONS.length})
                </button>
                <button
                  onClick={() => setActiveCategory('ai')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    activeCategory === 'ai'
                      ? 'bg-white text-violet-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  AI &amp; LLMs
                </button>
                <button
                  onClick={() => setActiveCategory('devops')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    activeCategory === 'devops'
                      ? 'bg-white text-blue-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  DevOps
                </button>
                <button
                  onClick={() => setActiveCategory('software')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    activeCategory === 'software'
                      ? 'bg-white text-emerald-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Software
                </button>
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredCerts.map((cert, cIdx) => {
                const isAI = cert.category === 'ai';
                const isDevOps = cert.category === 'devops';

                return (
                  <div
                    key={cIdx}
                    onClick={() => setSelectedCert(cert)}
                    className={`card-hover p-5 rounded-2xl border transition-all flex flex-col justify-between shadow-xs bg-white group cursor-pointer hover:border-slate-300 ${
                      cert.highlight
                        ? 'border-violet-200 ring-1 ring-violet-50'
                        : 'border-slate-200/90'
                    }`}
                  >
                    <div>
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-lg ${
                            isAI ? 'bg-violet-50' : isDevOps ? 'bg-blue-50' : 'bg-emerald-50'
                          }`}>
                            {getCertIcon(cert.title, cert.category)}
                          </div>
                          <span className="text-xs font-bold text-slate-500">
                            {cert.issuer}
                          </span>
                        </div>

                        {/* Active credential indicator */}
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Active Credential</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 font-display leading-snug group-hover:text-violet-700 transition-colors">
                        {cert.title}
                      </h4>

                      {/* Badge / Focus */}
                      {cert.badge && (
                        <div className="mt-2">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/70">
                            {cert.badge}
                          </span>
                        </div>
                      )}

                      {/* Skills Validated Chips */}
                      {cert.skillsValidated && cert.skillsValidated.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1">
                          {cert.skillsValidated.slice(0, 3).map((skill, sIdx) => (
                            <span key={sIdx} className="text-[9px] font-semibold text-slate-600 bg-slate-50 border border-slate-200/60 px-1.5 py-0.5 rounded">
                              {skill}
                            </span>
                          ))}
                          {cert.skillsValidated.length > 3 && (
                            <span className="text-[9px] font-semibold text-slate-400">
                              +{cert.skillsValidated.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Credential ID & Action */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span className="text-[10px] font-mono text-slate-400">
                        {cert.credentialId || 'AUTHENTICATED'}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCert(cert);
                        }}
                        className="text-[11px] font-bold text-violet-700 hover:text-violet-900 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Inspect Verification</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>

      {/* ========================================================
          Interactive Real-Time Credential Inspection Modal
         ======================================================== */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-7 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-violet-50 text-violet-700 border border-violet-200">
                  {getCertIcon(selectedCert.title, selectedCert.category)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Real-Time Authenticated</span>
                    </span>
                    <span className="text-xs text-slate-400">Issued {selectedCert.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-display mt-1">
                    {selectedCert.title}
                  </h3>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Issuing Body:</span>
                  <span className="font-bold text-slate-800">{selectedCert.issuer}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Credential ID:</span>
                  <span className="font-mono text-slate-800 font-bold">{selectedCert.credentialId || 'CREDENTIAL-01'}</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Competencies &amp; Technical Skills Validated:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skillsValidated?.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-violet-50 text-violet-800 border border-violet-200 text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-emerald-950 mb-0.5">Enterprise Application:</span>
                  Active continuous proficiency reflected directly in production delivery at Tata Consultancy Services (TCS) and open-source GitHub implementations.
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
