import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Workflow, 
  Terminal, 
  Server, 
  Sparkles, 
  Database, 
  Code2, 
  Box, 
  Zap, 
  ShieldCheck, 
  Activity, 
  GitBranch, 
  Building2, 
  Layers,
  CheckCircle2,
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import { TECH_ECOSYSTEM_LOGOS } from '../data/portfolioData';

type FilterCategory = 'all' | 'ai-agents' | 'infra-devops' | 'data-retrieval' | 'enterprise';

export const TechEcosystem: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const categories: { key: FilterCategory; label: string; count: number }[] = [
    { key: 'all', label: 'Complete Ecosystem', count: TECH_ECOSYSTEM_LOGOS.length },
    { key: 'ai-agents', label: 'Agentic AI & LLMs', count: TECH_ECOSYSTEM_LOGOS.filter(t => t.category === 'ai-agents').length },
    { key: 'infra-devops', label: 'Infra & Ansible AWX', count: TECH_ECOSYSTEM_LOGOS.filter(t => t.category === 'infra-devops').length },
    { key: 'data-retrieval', label: 'Vector & Data RAG', count: TECH_ECOSYSTEM_LOGOS.filter(t => t.category === 'data-retrieval').length },
    { key: 'enterprise', label: 'Enterprise & Middleware', count: TECH_ECOSYSTEM_LOGOS.filter(t => t.category === 'enterprise').length },
  ];

  const filteredTech = TECH_ECOSYSTEM_LOGOS.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const getTechIcon = (id: string) => {
    switch (id) {
      case 'langgraph':
        return <Workflow className="w-5 h-5 text-violet-600" />;
      case 'ansible-awx':
        return <Terminal className="w-5 h-5 text-blue-600" />;
      case 'servicenow':
        return <Server className="w-5 h-5 text-emerald-600" />;
      case 'anthropic-claude':
        return <Sparkles className="w-5 h-5 text-amber-600" />;
      case 'faiss-chroma':
        return <Database className="w-5 h-5 text-indigo-600" />;
      case 'fastapi-python':
        return <Code2 className="w-5 h-5 text-sky-600" />;
      case 'docker-linux':
        return <Box className="w-5 h-5 text-cyan-600" />;
      case 'groq-lpu':
        return <Zap className="w-5 h-5 text-orange-500" />;
      case 'pydantic-contracts':
        return <ShieldCheck className="w-5 h-5 text-pink-600" />;
      case 'scikit-learn':
        return <Activity className="w-5 h-5 text-purple-600" />;
      case 'github-actions':
        return <GitBranch className="w-5 h-5 text-emerald-600" />;
      case 'tcs-enterprise':
        return <Building2 className="w-5 h-5 text-slate-700" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-600" />;
    }
  };

  const getAccentClasses = (accent: string) => {
    switch (accent) {
      case 'violet':
        return {
          badge: 'bg-violet-50 text-violet-700 border-violet-200',
          pill: 'bg-violet-100 text-violet-800',
          borderHover: 'hover:border-violet-300 hover:shadow-violet-500/5',
          iconBg: 'bg-violet-50 border-violet-200/80',
        };
      case 'blue':
        return {
          badge: 'bg-blue-50 text-blue-700 border-blue-200',
          pill: 'bg-blue-100 text-blue-800',
          borderHover: 'hover:border-blue-300 hover:shadow-blue-500/5',
          iconBg: 'bg-blue-50 border-blue-200/80',
        };
      case 'emerald':
        return {
          badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          pill: 'bg-emerald-100 text-emerald-800',
          borderHover: 'hover:border-emerald-300 hover:shadow-emerald-500/5',
          iconBg: 'bg-emerald-50 border-emerald-200/80',
        };
      case 'amber':
        return {
          badge: 'bg-amber-50 text-amber-700 border-amber-200',
          pill: 'bg-amber-100 text-amber-800',
          borderHover: 'hover:border-amber-300 hover:shadow-amber-500/5',
          iconBg: 'bg-amber-50 border-amber-200/80',
        };
      case 'indigo':
        return {
          badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          pill: 'bg-indigo-100 text-indigo-800',
          borderHover: 'hover:border-indigo-300 hover:shadow-indigo-500/5',
          iconBg: 'bg-indigo-50 border-indigo-200/80',
        };
      case 'sky':
        return {
          badge: 'bg-sky-50 text-sky-700 border-sky-200',
          pill: 'bg-sky-100 text-sky-800',
          borderHover: 'hover:border-sky-300 hover:shadow-sky-500/5',
          iconBg: 'bg-sky-50 border-sky-200/80',
        };
      case 'cyan':
        return {
          badge: 'bg-cyan-50 text-cyan-700 border-cyan-200',
          pill: 'bg-cyan-100 text-cyan-800',
          borderHover: 'hover:border-cyan-300 hover:shadow-cyan-500/5',
          iconBg: 'bg-cyan-50 border-cyan-200/80',
        };
      case 'orange':
        return {
          badge: 'bg-orange-50 text-orange-700 border-orange-200',
          pill: 'bg-orange-100 text-orange-800',
          borderHover: 'hover:border-orange-300 hover:shadow-orange-500/5',
          iconBg: 'bg-orange-50 border-orange-200/80',
        };
      case 'pink':
        return {
          badge: 'bg-pink-50 text-pink-700 border-pink-200',
          pill: 'bg-pink-100 text-pink-800',
          borderHover: 'hover:border-pink-300 hover:shadow-pink-500/5',
          iconBg: 'bg-pink-50 border-pink-200/80',
        };
      case 'purple':
        return {
          badge: 'bg-purple-50 text-purple-700 border-purple-200',
          pill: 'bg-purple-100 text-purple-800',
          borderHover: 'hover:border-purple-300 hover:shadow-purple-500/5',
          iconBg: 'bg-purple-50 border-purple-200/80',
        };
      default:
        return {
          badge: 'bg-slate-100 text-slate-700 border-slate-200',
          pill: 'bg-slate-100 text-slate-800',
          borderHover: 'hover:border-slate-400',
          iconBg: 'bg-slate-50 border-slate-200',
        };
    }
  };

  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background architectural grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wider uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Production Architecture &amp; Frameworks</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Enterprise Technology Stack &amp; Ecosystem
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
              Enterprise platforms, state machine frameworks, and infrastructure tools deployed in production systems.
            </p>
          </div>

          {/* Quick Realtime Indicator */}
          <div className="shrink-0 flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-bold text-slate-800">
              12 Production Technologies
            </span>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-0 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                activeCategory === cat.key
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:bg-slate-50'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                activeCategory === cat.key ? 'bg-slate-700 text-slate-200' : 'bg-slate-100 text-slate-500'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Grid of Elevated Technology Cards */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredTech.map((tech) => {
              const styles = getAccentClasses(tech.accent);

              return (
                <motion.div
                  key={tech.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setHoveredId(tech.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group ${styles.borderHover}`}
                >
                  <div>
                    {/* Top Row: Icon + Code Pill + Status Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-transform group-hover:scale-105 duration-200 ${styles.iconBg}`}>
                          {getTechIcon(tech.id)}
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                          {tech.code}
                        </span>
                      </div>

                      <span className={`text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full border ${styles.badge}`}>
                        {tech.badge}
                      </span>
                    </div>

                    {/* Tech Name & Role */}
                    <div className="mb-2.5">
                      <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                        {tech.role}
                      </p>
                    </div>

                    {/* Highlight Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {tech.highlight}
                    </p>
                  </div>

                  {/* Card Bottom Meta Tag */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-medium text-slate-500">
                      {tech.categoryLabel}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Production
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Enterprise Architecture Benchmarks Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            Production Engineering Benchmarks &amp; Reliability SLA
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-violet-50 text-violet-700 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Deterministic Schemas</div>
                <p className="text-xs text-slate-500 mt-0.5">
                  100% Pydantic contract validation on all agent tool parameters &amp; state transitions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-orange-50 text-orange-600 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Sub-Second Execution</div>
                <p className="text-xs text-slate-500 mt-0.5">
                  &lt; 500ms time-to-first-token inference pipeline for interactive multi-agent routing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-700 shrink-0">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">60% Faster Patching</div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Automated AWX cluster playbooks reducing Linux server patch rollout from hours to minutes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 shrink-0">
                <Workflow className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Closed-Loop Self-Healing</div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Autonomous ServiceNow incident ingestion to automated Ansible AWX remediation.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
