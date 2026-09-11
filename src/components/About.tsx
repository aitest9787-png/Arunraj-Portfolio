import React from 'react';
import { UserCheck, Network, ShieldAlert, Cpu, Sparkles, MapPin, GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-2 text-blue-700 text-xs font-bold tracking-wider uppercase mb-1.5">
            <UserCheck className="w-4 h-4" />
            <span>Executive Candidate Overview</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Bridging Generative AI with Enterprise Production Systems
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              I am an <strong className="text-slate-900 font-semibold">AI Automation Developer at Tata Consultancy Services (TCS)</strong>, specializing in architecting resilient, production-ready GenAI and multi-agent solutions for mission-critical enterprise environments.
            </p>
            <p>
              Rather than basic API wrappers, my core focus is on <strong className="text-slate-900 font-semibold">LangGraph state graphs</strong> with conditional cyclical routing, strict schema enforcement using <strong className="text-slate-900 font-semibold">Pydantic</strong>, and mandatory <strong className="text-slate-900 font-semibold">Human-in-the-Loop (HITL)</strong> governance for high-stakes actions like sending client emails or modifying calendars.
            </p>
            <p>
              My hands-on experience bridges predictive machine learning (Random Forest, Isolation Forest anomaly models) with enterprise IT workflows—including natural-language SQL agents and automated ServiceNow ticketing. In retrieval systems, I design self-correcting RAG pipelines that leverage hybrid vector stores (FAISS and ChromaDB) paired with hallucination evaluation nodes.
            </p>

            {/* Core Architectural Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              <div className="card-hover p-4 rounded-xl bg-slate-50/80 border border-slate-200/90 shadow-2xs group hover:border-slate-300">
                <Network className="w-5 h-5 text-blue-600 mb-2 group-hover:scale-105 transition-transform" />
                <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-900 transition-colors">Stateful Graph Control</h4>
                <p className="text-xs text-slate-600 leading-normal">
                  LangGraph routing, supervisor-worker topologies, and HITL approval checkpoints.
                </p>
              </div>

              <div className="card-hover p-4 rounded-xl bg-slate-50/80 border border-slate-200/90 shadow-2xs group hover:border-slate-300">
                <ShieldAlert className="w-5 h-5 text-indigo-600 mb-2 group-hover:scale-105 transition-transform" />
                <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-indigo-900 transition-colors">Self-Correcting RAG</h4>
                <p className="text-xs text-slate-600 leading-normal">
                  FAISS/ChromaDB hybrid search, hallucination scoring, and live web fallbacks.
                </p>
              </div>

              <div className="card-hover p-4 rounded-xl bg-slate-50/80 border border-slate-200/90 shadow-2xs group hover:border-slate-300">
                <Cpu className="w-5 h-5 text-emerald-700 mb-2 group-hover:scale-105 transition-transform" />
                <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-emerald-900 transition-colors">Enterprise Automation</h4>
                <p className="text-xs text-slate-600 leading-normal">
                  ServiceNow REST API, Google Workspace, Ansible playbooks, and Docker CI/CD.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Candidate Summary Sheet (5 cols) */}
          <div className="lg:col-span-5">
            <div className="card-hover p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 shadow-2xs space-y-4 hover:border-slate-300 group">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs uppercase text-slate-700 font-bold tracking-wider">
                  Candidate Dossier Summary
                </span>
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Active at TCS
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 block font-semibold">Current Employer & Role</span>
                    <strong className="text-slate-900 font-bold">Tata Consultancy Services (TCS)</strong>
                    <span className="text-xs text-slate-600 block">AI Automation Developer (Jul 2025 – Present)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-indigo-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 block font-semibold">Academic Credentials</span>
                    <strong className="text-slate-900 font-bold">B.Tech in Information Technology</strong>
                    <span className="text-xs text-slate-600 block">K. Ramakrishnan College of Engineering (2020–2024)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 block font-semibold">Location & Mobility</span>
                    <strong className="text-slate-900 font-bold">{PERSONAL_INFO.location}</strong>
                    <span className="text-xs text-emerald-700 block font-medium">Available for On-site, Hybrid & Remote Roles</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 block font-semibold">Primary Target Positions</span>
                    <span className="text-slate-900 font-bold">AI Engineer, RAG Engineer, AI Automation Engineer</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500">Inquiry turnaround:</span>
                <span className="text-slate-900 font-bold">Within 24 Business Hours</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
