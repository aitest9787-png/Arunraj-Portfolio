import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Copy, Check, MessageSquare, Send, FileText } from 'lucide-react';
import { PERSONAL_INFO, RECRUITER_HIGHLIGHTS } from '../data/portfolioData';

interface RecruiterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeModal: () => void;
}

export const RecruiterDrawer: React.FC<RecruiterDrawerProps> = ({
  isOpen,
  onClose,
  onOpenResumeModal,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const recruiterSummaryText = `Candidate: Arunraj S
Current: AI Automation & DevOps Engineer at Tata Consultancy Services (TCS), Chennai
Experience: 2 Years Enterprise Production Systems (Jul 2024 - Present)
Target Roles: AI Engineer | DevOps Engineer (Ansible/AWX) | AI Automation Engineer
Key Technologies: LangGraph, LangChain, FAISS, ChromaDB, Ansible, AWX, Python, ServiceNow ITSM REST, Linux, Docker, FastAPI
Impact Highlights:
- AWX Automation: Provisioned & automated AWX clusters with modular Ansible playbooks, managing RBAC and vault credentials.
- ITSM-to-Server Self-Healing: Built Python middleware polling ServiceNow incident tickets to trigger Ansible AWX self-healing playbooks.
- Built LangGraph multi-agent systems with Human-in-the-Loop (HITL) approval nodes & sub-second Groq inference.
- Engineered self-correcting RAG with dedicated hallucination validation agents & live Tavily/Arxiv search fallback.
- Shipped ML-driven anomaly detection (Random Forest/Isolation Forest) + automatic ServiceNow incident ticketing.
- Reduced Linux server patching deployment times by 60% via Ansible playbooks.
Contact: arunrajselvarasu@gmail.com | +91-8870127848 | linkedin.com/in/arunraj-s-7a3a12202`;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(recruiterSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-xs">
      {/* Backdrop click to close */}
      <div className="flex-1" onClick={onClose} />

      {/* Drawer content */}
      <div 
        className="w-full max-w-xl bg-white border-l border-slate-200 shadow-2xl flex flex-col h-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-100 border border-blue-200 text-blue-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 tracking-tight">
                Recruiter 30-Second Candidate Briefing
              </h3>
              <p className="text-xs text-slate-500">
                Technical Recruiter Assessment & ATS Summary
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors"
            aria-label="Close Recruiter Briefing"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-xs sm:text-sm">
          
          {/* Top Quick Status Pill */}
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-blue-800 block font-bold">CANDIDATE STATUS</span>
              <span className="text-sm font-bold text-slate-900">Arunraj S — TCS AI Developer</span>
            </div>
            <button
              onClick={handleCopySummary}
              className="btn-hover flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 shadow-2xs cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Brief' : 'Copy ATS Summary'}</span>
            </button>
          </div>

          {/* Target Roles */}
          <div>
            <span className="text-xs uppercase text-slate-700 font-bold tracking-wider block mb-2">
              Target Interview Positions
            </span>
            <div className="flex flex-wrap gap-1.5">
              {RECRUITER_HIGHLIGHTS.targetRoles.map((role, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-xs hover:bg-slate-200 transition-colors"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Why Arunraj Stands Out */}
          <div className="space-y-3">
            <span className="text-xs uppercase text-slate-700 font-bold tracking-wider block">
              5 Reasons Candidate Stands Out in 5 Seconds
            </span>
            {RECRUITER_HIGHLIGHTS.whyHire.map((item, idx) => (
              <div
                key={idx}
                className="card-hover p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/90 space-y-1 hover:border-slate-300"
              >
                <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Recommended Interview Questions */}
          <div className="card-hover p-4 rounded-xl bg-slate-50/80 border border-slate-200/90 space-y-2.5 hover:border-slate-300">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-xs uppercase">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              <span>Suggested Technical Interview Questions</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700 list-disc pl-4">
              <li>
                <em>"How did you design the LangGraph state transitions and HITL safety gate for the Gmail & Calendar agent?"</em>
              </li>
              <li>
                <em>"What was your hallucination scoring strategy in the Agentic RAG validation node before falling back to Tavily or Arxiv?"</em>
              </li>
              <li>
                <em>"How did you implement the Isolation Forest anomaly detector to trigger automated ServiceNow incident creation at TCS?"</em>
              </li>
              <li>
                <em>"Walk us through your Ansible playbooks that slashed server patch deployment times by 60%."</em>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="pt-3 border-t border-slate-200 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-semibold">Direct Email:</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-700 font-bold underline hover:text-blue-800">
                {PERSONAL_INFO.email}
              </a>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-semibold">Direct Phone:</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="text-blue-700 font-bold underline hover:text-blue-800">
                {PERSONAL_INFO.phone}
              </a>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-semibold">Location:</span>
              <span className="text-slate-900 font-semibold">{PERSONAL_INFO.location} (Open to Remote / Hybrid)</span>
            </div>
          </div>

        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenResumeModal();
            }}
            className="btn-hover flex-1 py-2.5 px-3 rounded-lg bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-300 shadow-2xs cursor-pointer"
          >
            <FileText className="w-4 h-4 text-slate-600" />
            <span>View Full Resume</span>
          </button>

          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Interview Request: AI / RAG Engineer Role&body=Hi Arunraj,%0D%0A%0D%0AWe reviewed your portfolio and were impressed by your LangGraph multi-agent and RAG systems at TCS. We'd love to connect for a 20-minute conversation regarding an engineering role.`}
            className="btn-hover flex-1 py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Schedule Interview</span>
          </a>
        </div>
      </div>
    </div>
  );
};
