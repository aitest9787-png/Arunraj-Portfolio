import React, { useState } from 'react';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  RotateCw, 
  RotateCcw, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  Activity,
  Server
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface FlattenedInitiative {
  id: string;
  role: string;
  company: string;
  period: string;
  track: 'ai' | 'devops';
  trackLabel: string;
  subtitle: string;
  title: string;
  tech: string[];
  description: string;
  impact: string;
  highlights: string[];
  architectureFlow: string[];
  productionMetrics: string;
}

export const ExperienceSection: React.FC = () => {
  // Flatten all achievements across both TCS roles into individual initiative cards
  const allInitiatives: FlattenedInitiative[] = EXPERIENCES.flatMap((exp, roleIdx) => 
    exp.achievements.map((ach, achIdx) => ({
      id: `${roleIdx}-${achIdx}`,
      role: exp.role,
      company: exp.company,
      period: exp.period,
      track: (ach.track || (roleIdx === 1 ? 'devops' : 'ai')) as 'ai' | 'devops',
      trackLabel: ach.track === 'devops' || roleIdx === 1 ? 'DevOps & Ansible Automation' : 'AI Automation & LangGraph',
      subtitle: ach.subtitle || (roleIdx === 1 ? 'Enterprise DevOps & Infrastructure' : 'Agentic AI & GenAI Systems'),
      title: ach.title,
      tech: ach.tech,
      description: ach.description,
      impact: ach.impact,
      highlights: ach.highlights || [
        ach.description.slice(0, 80) + '...',
        ach.impact.slice(0, 80) + '...',
      ],
      architectureFlow: ach.architectureFlow || ['Telemetry / Queue', 'Processing Layer', 'Execution Engine', 'Resolution'],
      productionMetrics: ach.productionMetrics || 'Production Deployed',
    }))
  );

  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'devops'>('all');
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const filteredInitiatives = allInitiatives.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.track === activeFilter;
  });

  const toggleFlip = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleFlipAll = () => {
    const anyFlipped = filteredInitiatives.some((item) => flippedCards[item.id]);
    const newState: Record<string, boolean> = { ...flippedCards };
    filteredInitiatives.forEach((item) => {
      newState[item.id] = !anyFlipped;
    });
    setFlippedCards(newState);
  };

  const areAllFlipped = filteredInitiatives.length > 0 && filteredInitiatives.every((item) => flippedCards[item.id]);

  return (
    <section id="experience" className="py-20 bg-slate-50/50 border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-violet-700 text-xs font-bold tracking-wider uppercase mb-2">
              <Briefcase className="w-4 h-4" />
              <span>Enterprise Track Record • Tata Consultancy Services (TCS)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Enterprise Experience at Tata Consultancy Services (TCS)
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              2 years of active production engineering spanning autonomous multi-agent systems, AWX cluster orchestration, and closed-loop ITSM self-healing infrastructure.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <span className="text-[11px] font-bold text-slate-900 block leading-tight">2 Years at TCS</span>
                <span className="text-[10px] text-slate-500 block leading-tight">Jul 2024 – Present</span>
              </div>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-2.5">
              <Server className="w-4 h-4 text-blue-600" />
              <div>
                <span className="text-[11px] font-bold text-slate-900 block leading-tight">6 Shipped Systems</span>
                <span className="text-[10px] text-slate-500 block leading-tight">AI &amp; DevOps Tracks</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Credentials Banner */}
        <div className="card-hover p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900 text-white shadow-xs">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                    Tata Consultancy Services (TCS)
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                    Active Full-Time
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-600 mt-1">
                  <span className="font-semibold text-violet-700">AI Automation Developer</span>
                  <span className="text-slate-300">•</span>
                  <span className="font-semibold text-blue-700">DevOps Engineer (Ansible &amp; ITSM)</span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    Chennai, India
                  </span>
                </div>
              </div>
            </div>

            {/* Impact Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <div className="text-base font-extrabold text-slate-900 font-display">&gt;70%</div>
                <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">MTTR Reduced</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                <div className="text-base font-extrabold text-slate-900 font-display">~60%</div>
                <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Faster Patching</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center col-span-2 sm:col-span-1">
                <div className="text-base font-extrabold text-slate-900 font-display">Zero-Touch</div>
                <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Self-Healing</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-4">
            Specialized engineering engagement driving both production-grade Agentic AI pipelines (LangGraph multi-agent workflows, Azure OpenAI, predictive anomaly classification) and enterprise infrastructure automation (Red Hat AWX cluster deployment, Python middleware for ServiceNow-to-server remediation, and idempotent Ansible Linux fleet operations).
          </p>
        </div>

        {/* Filter Controls & Flip-All Utility Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/70 rounded-2xl w-fit border border-slate-200">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Initiatives ({allInitiatives.length})
            </button>
            <button
              onClick={() => setActiveFilter('ai')}
              className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'ai'
                  ? 'bg-white text-violet-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-violet-600" />
              <span>AI Automation &amp; RAG (3)</span>
            </button>
            <button
              onClick={() => setActiveFilter('devops')}
              className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'devops'
                  ? 'bg-white text-blue-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              <span>DevOps &amp; Ansible (3)</span>
            </button>
          </div>

          {/* Interactive Flip Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleFlipAll}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs hover:text-slate-900 transition-all cursor-pointer"
              title="Flip all cards between Overview and Architecture Deep-Dive"
            >
              <RotateCw className={`w-3.5 h-3.5 text-violet-600 transition-transform ${areAllFlipped ? 'rotate-180' : ''}`} />
              <span>{areAllFlipped ? 'Flip All to Overview' : 'Flip All to Architecture'}</span>
            </button>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <span>💡 Click any card to flip</span>
            </span>
          </div>
        </div>

        {/* 3D Flip Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInitiatives.map((item, index) => {
            const isFlipped = !!flippedCards[item.id];
            const isDevOps = item.track === 'devops';

            return (
              <div
                key={item.id}
                className="perspective-1000 h-[510px] sm:h-[490px] w-full cursor-pointer select-none group"
                onClick={() => toggleFlip(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFlip(item.id);
                  }
                }}
                aria-label={`${item.title} - ${isFlipped ? 'Click to flip to overview' : 'Click to flip to more details'}`}
              >
                {/* 3D Flippable Container */}
                <div 
                  className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ease-out ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* ========================================================
                      FRONT FACE: Clean Executive Overview & Key Highlights
                     ======================================================== */}
                  <div className="absolute inset-0 backface-hidden w-full h-full rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between overflow-hidden">
                    
                    {/* Top Metadata Row */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span 
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border ${
                            isDevOps 
                              ? 'bg-blue-50 text-blue-700 border-blue-200' 
                              : 'bg-violet-50 text-violet-700 border-violet-200'
                          }`}
                        >
                          {isDevOps ? <Terminal className="w-3 h-3" /> : <Cpu className="w-3 h-3" />}
                          <span>{isDevOps ? 'DevOps & Ansible' : 'AI Automation'}</span>
                        </span>

                        <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                          <span>Initiative #{index + 1}</span>
                        </div>
                      </div>

                      {/* Subtitle / Focus */}
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        {item.subtitle}
                      </span>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display tracking-tight leading-snug line-clamp-2">
                        {item.title}
                      </h3>

                      {/* Short Executive Summary */}
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>

                      {/* Key Highlights Bullet points */}
                      <div className="mt-3.5 space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          Key Deliverables:
                        </span>
                        {item.highlights.slice(0, 3).map((hl, hlIdx) => (
                          <div key={hlIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isDevOps ? 'bg-blue-600' : 'bg-violet-600'}`} />
                            <span className="line-clamp-1">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Section: Tech Stack & Flip Action Button */}
                    <div className="pt-3 border-t border-slate-100">
                      {/* Tech Pills */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-3">
                        {item.tech.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/60"
                          >
                            {t}
                          </span>
                        ))}
                        {item.tech.length > 4 && (
                          <span className="text-[10px] font-semibold text-slate-400">
                            +{item.tech.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Action Bar */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80 truncate max-w-[150px]">
                          {item.productionMetrics}
                        </span>

                        <button
                          type="button"
                          onClick={(e) => toggleFlip(item.id, e)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white transition-all shadow-xs cursor-pointer ${
                            isDevOps 
                              ? 'bg-blue-600 hover:bg-blue-700' 
                              : 'bg-violet-600 hover:bg-violet-700'
                          }`}
                        >
                          <span>Flip to Details</span>
                          <RotateCw className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* ========================================================
                      BACK FACE: In-Depth Architecture, Pipeline & Production Impact
                     ======================================================== */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 w-full h-full rounded-2xl bg-white border-2 border-violet-200/80 shadow-md p-5 sm:p-6 flex flex-col justify-between overflow-y-auto">
                    
                    {/* Top Row: Back Bar */}
                    <div>
                      <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100 mb-3">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 font-display">
                          <Layers className={`w-4 h-4 ${isDevOps ? 'text-blue-600' : 'text-violet-600'}`} />
                          <span>Architecture &amp; Impact</span>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => toggleFlip(item.id, e)}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-[11px] font-bold text-slate-700 transition-colors cursor-pointer"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Flip Back</span>
                        </button>
                      </div>

                      {/* Title Reminder */}
                      <h4 className="text-sm font-bold text-slate-900 leading-snug mb-2 font-display">
                        {item.title}
                      </h4>

                      {/* Architecture Step Flow */}
                      <div className="mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                          Execution Pipeline Flow:
                        </span>
                        <div className="flex flex-wrap items-center gap-1 text-[10px] font-semibold text-slate-700">
                          {item.architectureFlow.map((step, sIdx) => (
                            <React.Fragment key={sIdx}>
                              <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200/80">
                                {step}
                              </span>
                              {sIdx < item.architectureFlow.length - 1 && (
                                <ArrowRight className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                      {/* Full Engineering Narrative */}
                      <div className="text-xs text-slate-600 leading-relaxed space-y-2 mb-3">
                        <p>{item.description}</p>
                      </div>

                      {/* Production Impact Box */}
                      <div className="p-3 rounded-xl bg-emerald-50/90 border border-emerald-200/90 text-xs">
                        <div className="flex items-center gap-1.5 font-bold text-emerald-950 mb-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>Production Outcome</span>
                        </div>
                        <p className="text-emerald-900 text-[11px] leading-relaxed">
                          {item.impact}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Return CTA */}
                    <div className="pt-3 border-t border-slate-100 mt-2 flex items-center justify-between">
                      <div className="flex flex-wrap items-center gap-1">
                        {item.tech.slice(0, 3).map((t) => (
                          <span key={t} className="text-[9px] font-bold px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={(e) => toggleFlip(item.id, e)}
                        className="text-xs font-bold text-slate-600 hover:text-slate-900 inline-flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Return to Overview</span>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 font-medium">
            Each card flips 180° to reveal architectural execution pipelines, system flows, and production outcomes.
          </p>
        </div>

      </div>
    </section>
  );
};

