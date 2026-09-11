import React, { useState } from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Cpu, Server, Terminal, ShieldCheck } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const exp = EXPERIENCES[0]; // TCS Experience

  return (
    <section id="experience" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-2 text-blue-700 text-xs font-bold tracking-wider uppercase mb-1.5">
            <Briefcase className="w-4 h-4" />
            <span>Professional Track Record & Production Systems</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Enterprise Experience at Tata Consultancy Services (TCS)
          </h2>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl">
            Engineering resilient agentic tools, predictive anomaly models, and automated infrastructure orchestration pipelines.
          </p>
        </div>

        {/* Company Card Header */}
        <div className="card-hover p-6 sm:p-8 rounded-xl bg-white border border-slate-200/90 shadow-2xs mb-6 group hover:border-slate-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 group-hover:scale-105 group-hover:bg-blue-100 transition-all duration-200">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-900 transition-colors">
                    {exp.company}
                  </h3>
                  <div className="text-blue-700 font-bold text-sm">
                    {exp.role}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-600">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-50 border border-slate-200 font-medium">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>{exp.period}</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-50 border border-slate-200 font-medium">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{exp.location}</span>
              </span>
              <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-xs">
                Current Role
              </span>
            </div>
          </div>

          <p className="text-slate-700 text-sm leading-relaxed mt-4">
            {exp.summary}
          </p>
        </div>

        {/* Shipped Systems Cards */}
        <div className="space-y-3">
          <div className="text-xs uppercase text-slate-700 font-bold tracking-wider mb-1">
            Detailed Breakdown of Shipped Enterprise Solutions
          </div>

          {exp.achievements.map((item, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/90 bg-white hover:border-slate-300 transition-all duration-200 overflow-hidden shadow-2xs hover:shadow-xs"
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 group cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-blue-700 shrink-0 mt-0.5 sm:mt-0 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                      {idx === 0 && <Server className="w-4 h-4" />}
                      {idx === 1 && <Cpu className="w-4 h-4" />}
                      {idx === 2 && <ShieldCheck className="w-4 h-4" />}
                      {idx === 3 && <Terminal className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {item.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-medium hover:bg-slate-200 hover:text-slate-900 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 p-1 rounded-md text-slate-400 group-hover:text-slate-700">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 space-y-3.5 border-t border-slate-100 pt-4 bg-slate-50/60 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div>
                      <span className="text-xs uppercase text-slate-500 font-bold block mb-1">
                        System Architecture & Technical Execution
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-blue-50 border border-blue-200 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs uppercase text-blue-900 font-bold block mb-0.5">
                          Quantified Business Impact
                        </span>
                        <p className="text-xs sm:text-sm text-blue-950 font-medium">
                          {item.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
