import React, { useState } from 'react';
import { X, Printer, Copy, Check, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyRaw = () => {
    const raw = `ARUNRAJ S
AI Automation Developer | Agentic AI & GenAI | Python Automation
+91-8870127848 | arunrajselvarasu@gmail.com | github.com/arunrajselvarasu | linkedin.com/in/arunraj-s-7a3a12202

AI Automation Developer at TCS specializing in building agentic AI dashboards and virtual assistants, delivering solutions such as predictive, ML-driven ticket automation and multi-source asset dashboards integrated with natural-language SQL agents. Demonstrated expertise in Python/FastAPI agent development (including LangGraph, Gmail/Calendar/ServiceNow API integration, and RAG pipelines) as well as Linux/Ansible-based infrastructure automation.

Work Experience
AI Automation & DevOps Engineer (2 Years Experience • Jul 2024 - Present)
Tata Consultancy Services (TCS) - Chennai, India
• AWX Installation & Cluster Orchestration | Ansible, AWX, YAML, Linux: Automated full provisioning and configuration of AWX / Tower clusters using modular Ansible playbooks, managing RBAC, credentials, and centralized job execution templates.
• Closed-Loop ITSM-to-Server Self-Healing | Python Middleware, ServiceNow ITSM, Ansible AWX: Engineered an end-to-end autonomous self-healing pipeline bridging ServiceNow with server infrastructure via a custom Python middleware that ingests ticket details, triggers Ansible remediation playbooks, and closes tickets post-verification.
• Agentic AI Dashboard (POC) | Python, Random Forest, Isolation Forest, ServiceNow API: Developed proof of concept that collects server details, predicts issues using Random Forest and Isolation Forest models, and automatically creates ServiceNow tickets for predicted anomalies, significantly reducing manual triage effort.
• Agentic Asset Management Dashboard | Python, SQL Agent, Multi-Source Data Integration: Aggregated asset details from multiple data sources into a central database, supported by a virtual assistant functioning as a natural-language SQL query agent.
• AI CVA Agent for ServiceNow Ticketing | Python, FastAPI, LangGraph, Azure LLM: Engineered and deployed a FastAPI/LangGraph-based agent leveraging an Azure-hosted LLM to automate ServiceNow ticket creation from natural-language user prompts.
• Linux Server Patching Automation | Ansible, YAML, Linux: Automated Linux server patching, inventory management, and task scheduling using Ansible playbooks and roles, reducing patch deployment time by approximately 60%.

Projects
• Email Agent - Gmail AI Agent & Multi-Agent Orchestrator: Built an AI agent that reads, summarizes, drafts/replies to emails, and schedules meetings using LangGraph, Groq, Pydantic, and Human-in-the-Loop approval.
• Agentic RAG System: Built an Agentic RAG system with dedicated Query Analysis, Retrieval, Validation, and Answer agents, using FAISS/ChromaDB vector search with Hugging Face embeddings and Tavily/Arxiv tools.
• Autonomous LinkedIn AI Content Agent: Multi-agent system using LangGraph and LangChain with guardrails, TF-IDF cosine duplicate detection, Docker, and 18 automated tests running twice-daily on GitHub Actions.

Education
K. Ramakrishnan College of Engineering (Aug 2020 - May 2024)
Bachelor of Technology (B.Tech) in Information Technology | Tamil Nadu, India

Certifications
• Claude Developer Foundations (Anthropic Academy)
• Generative AI & LLM Chatbot Development (Udemy)
• Advanced Ansible Automation & Advanced Linux System Administration (RJP Infotek)
• PowerShell Scripting (RJP Infotek) | Python Programming (GUVI)`;

    navigator.clipboard.writeText(raw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-300 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
            <FileText className="w-4 h-4 text-blue-700" />
            <span>Arunraj_S_AI_Automation_Developer_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyRaw}
              className="btn-hover px-3 py-1.5 rounded-md bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-300 flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="btn-hover px-3 py-1.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Formal Resume Body */}
        <div className="p-6 sm:p-12 overflow-y-auto bg-white text-slate-900 text-xs sm:text-sm space-y-6">
          
          {/* Resume Header */}
          <div className="text-center pb-5 border-b-2 border-slate-900 space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              ARUNRAJ S
            </h1>
            <p className="text-blue-800 font-bold text-xs sm:text-sm">
              AI Automation Developer | Agentic AI & GenAI | Python Automation
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 pt-1 font-medium">
              <span>+91-8870127848</span>
              <span>•</span>
              <a href="mailto:arunrajselvarasu@gmail.com" className="text-blue-700 hover:underline">arunrajselvarasu@gmail.com</a>
              <span>•</span>
              <a href="https://github.com/arunrajselvarasu" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">github.com/arunrajselvarasu</a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/arunraj-s-7a3a12202/" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">linkedin.com/in/arunraj-s-7a3a12202</a>
              <span>•</span>
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs uppercase text-slate-900 font-extrabold tracking-wider mb-1.5 border-b border-slate-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
              AI Automation Developer at TCS specializing in building agentic AI dashboards and virtual assistants, delivering solutions such as predictive, ML-driven ticket automation and multi-source asset dashboards integrated with natural-language SQL agents. Demonstrated expertise in Python/FastAPI agent development (including LangGraph, Gmail/Calendar/ServiceNow API integration, and RAG pipelines) as well as Linux/Ansible-based infrastructure automation.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs uppercase text-slate-900 font-extrabold tracking-wider mb-2.5 border-b border-slate-200 pb-1">
              Work Experience
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">AI Automation &amp; DevOps Engineer</h3>
                  <div className="text-slate-700 font-semibold text-xs">Tata Consultancy Services (TCS)</div>
                </div>
                <div className="text-right text-xs text-slate-600 font-medium">
                  <div>2 Years Experience • Jul 2024 – Present</div>
                  <div>Chennai, India</div>
                </div>
              </div>

              <div className="space-y-2 pl-2">
                <div className="text-xs text-slate-700">
                  <strong className="text-slate-900 font-bold">• AWX Installation &amp; Cluster Orchestration | Ansible, AWX, YAML, Linux:</strong> Automated end-to-end installation, provisioning, and configuration of AWX / Tower clusters with Ansible playbooks, managing RBAC, credentials, and centralized job execution templates.
                </div>
                <div className="text-xs text-slate-700">
                  <strong className="text-slate-900 font-bold">• Closed-Loop ITSM-to-Server Self-Healing | Python Middleware, ServiceNow ITSM, Ansible AWX:</strong> Engineered an autonomous self-healing pipeline bridging ServiceNow with server infrastructure via a custom Python middleware that ingests ticket details, triggers Ansible remediation playbooks via AWX REST APIs to resolve server issues autonomously, and closes tickets post-verification.
                </div>
                <div className="text-xs text-slate-700">
                  <strong className="text-slate-900 font-bold">• Agentic AI Dashboard (POC) | Python, Random Forest, Isolation Forest, ServiceNow API:</strong> Developed an agentic AI dashboard proof of concept that collects server details, predicts issues using Random Forest and Isolation Forest models, and automatically creates ServiceNow tickets for predicted anomalies, significantly reducing manual triage effort.
                </div>
                <div className="text-xs text-slate-700">
                  <strong className="text-slate-900 font-bold">• Agentic Asset Management Dashboard | Python, SQL Agent, Multi-Source Data Integration:</strong> Developed a dashboard that aggregates asset details from multiple data sources into a central database, delivering a comprehensive asset overview for clients, supported by a virtual assistant functioning as a natural-language SQL query agent.
                </div>
                <div className="text-xs text-slate-700">
                  <strong className="text-slate-900 font-bold">• AI CVA Agent for ServiceNow Ticketing | Python, FastAPI, LangGraph, Azure LLM:</strong> Engineered and deployed a FastAPI/LangGraph-based agent leveraging an Azure-hosted LLM to automate ServiceNow ticket creation from natural-language user prompts.
                </div>
                <div className="text-xs text-slate-700">
                  <strong className="text-slate-900 font-bold">• Linux Server Patching Automation | Ansible, YAML, Linux:</strong> Automated Linux server patching, inventory management, and task scheduling using Ansible playbooks and roles, resulting in a reduction of patch deployment time by approximately 60%.
                </div>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs uppercase text-slate-900 font-extrabold tracking-wider mb-2.5 border-b border-slate-200 pb-1">
              Key Projects
            </h2>
            <div className="space-y-3.5 pl-2">
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                  • Email Agent - Gmail AI Agent & Multi-Agent Orchestrator | <span className="text-slate-600 font-normal">LangGraph, Gmail API, Google Calendar API, Groq, Pydantic</span>
                </h3>
                <ul className="list-disc pl-4 mt-1 space-y-1 text-xs text-slate-700">
                  <li>Built an AI agent that reads, summarizes, drafts/replies to emails, and schedules meetings, using LangGraph for multi-agent orchestration and routing.</li>
                  <li>Used Groq LLM with Pydantic structured outputs for reliable, schema-validated agent responses.</li>
                  <li>Implemented Human-in-the-Loop approval before sending emails or performing sensitive actions.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                  • Agentic RAG System | <span className="text-slate-600 font-normal">LangChain, LangGraph, FAISS, ChromaDB, Hugging Face</span>
                </h3>
                <ul className="list-disc pl-4 mt-1 space-y-1 text-xs text-slate-700">
                  <li>Built an Agentic RAG system with dedicated Query Analysis, Retrieval, Validation, and Answer agents, using FAISS/ChromaDB vector search with Hugging Face embeddings.</li>
                  <li>Integrated tools including Tavily Search, Arxiv, and Wikipedia for dynamic real-time grounding.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                  • Autonomous LinkedIn AI Content Agent | <span className="text-slate-600 font-normal">LangGraph, LangChain, Groq, Tavily, LinkedIn REST API, GitHub Actions</span>
                </h3>
                <ul className="list-disc pl-4 mt-1 space-y-1 text-xs text-slate-700">
                  <li>Developed an autonomous agentic AI system using LangGraph and LangChain to research AI/ML topics, generate recruiter- and engineer-focused LinkedIn posts, validate technical quality, detect duplicate content, and publish via the LinkedIn REST API.</li>
                  <li>Implemented multi-agent workflow orchestration with LLM-based guardrails, retry/regeneration logic, TF-IDF cosine similarity duplicate detection, and idempotent execution controls.</li>
                  <li>Automated twice-daily scheduled execution using GitHub Actions with configurable dry-run/production modes and persistent execution history; containerized with Docker and covered by 18 automated tests.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs uppercase text-slate-900 font-extrabold tracking-wider mb-2 border-b border-slate-200 pb-1">
                Education
              </h2>
              <div className="font-bold text-slate-900 text-xs">K. Ramakrishnan College of Engineering</div>
              <div className="text-slate-700 text-xs font-medium">Bachelor of Technology - Information Technology</div>
              <div className="text-slate-500 text-xs">Aug 2020 – May 2024 | Tamil Nadu, India</div>
            </div>

            <div>
              <h2 className="text-xs uppercase text-slate-900 font-extrabold tracking-wider mb-2 border-b border-slate-200 pb-1">
                Certifications
              </h2>
              <div className="text-xs text-slate-700 space-y-1">
                <div>• Claude Developer Foundations (Anthropic Academy)</div>
                <div>• Generative AI & LLM Chatbot Development (Udemy)</div>
                <div>• Advanced Ansible Automation & Linux System Admin (RJP Infotek)</div>
                <div>• PowerShell Scripting (RJP Infotek) | Python (GUVI)</div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-600">
          <span>Official candidate document of Arunraj S</span>
          <button
            onClick={onClose}
            className="text-blue-700 font-semibold hover:underline"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
