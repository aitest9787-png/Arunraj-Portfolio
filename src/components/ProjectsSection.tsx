import React, { useState } from 'react';
import { 
  Network, 
  ExternalLink, 
  Github, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Workflow, 
  Cpu, 
  Activity 
} from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ArchitectureModal } from './ArchitectureModal';
import { SafeImage } from './SafeImage';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'agentic' | 'rag' | 'automation'>('all');
  const [inspectedProject, setInspectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'agentic', label: 'Agentic AI' },
    { id: 'rag', label: 'Enterprise RAG' },
    { id: 'automation', label: 'Automation & ITSM' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'agentic':
        return {
          badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
          accent: 'text-emerald-600',
        };
      case 'rag':
        return {
          badge: 'bg-purple-50 text-purple-700 border-purple-200',
          gradient: 'from-purple-500/10 via-indigo-500/5 to-transparent',
          accent: 'text-purple-600',
        };
      case 'automation':
      default:
        return {
          badge: 'bg-amber-50 text-amber-700 border-amber-200',
          gradient: 'from-amber-500/10 via-orange-500/5 to-transparent',
          accent: 'text-amber-600',
        };
    }
  };

  return (
    <section id="works" className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row with GitHub Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-2">
              <Workflow className="w-3.5 h-3.5 text-violet-600" />
              <span>Production Architectures</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Featured AI &amp; Automation Systems
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl">
              Production multi-agent graphs, self-correcting RAG pipelines, and enterprise ServiceNow automations.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 self-start sm:self-auto shrink-0 shadow-xs hover:shadow"
          >
            <Github className="w-4 h-4" />
            <span>View All on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Category Filter Pills matching the Figma Template */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id as any)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid matching Figma Gallery Presentation with Impressive Visual Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const theme = getCategoryTheme(project.category);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="card-hover bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs flex flex-col justify-between group"
              >
                {/* Impressive Project Cover Image Header */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900 border-b border-slate-200/80">
                  <SafeImage
                    src={project.imageUrl}
                    alt={project.title}
                    categoryBadge={project.category === 'agentic' ? 'Multi-Agent AI' : project.category === 'rag' ? 'Agentic RAG' : 'ITSM Automation'}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  />
                  {/* Visual gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />

                  {/* Top floating badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide backdrop-blur-md bg-slate-900/80 text-white border border-white/20 shadow-xs">
                      {project.category === 'agentic' ? 'Multi-Agent LangGraph' : project.category === 'rag' ? 'Self-Correcting RAG' : 'ITSM Automation'}
                    </span>
                    
                    <button
                      onClick={() => setInspectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-white/90 hover:bg-white text-slate-900 border border-white/40 shadow-xs transition-all hover:scale-105 cursor-pointer"
                    >
                      <Network className="w-3.5 h-3.5 text-blue-600" />
                      <span>Architecture</span>
                    </button>
                  </div>

                  {/* Bottom title overlay on image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium backdrop-blur-md bg-white/20 text-white border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Header Banner Info */}
                <div className={`p-6 sm:p-7 border-b border-slate-100 bg-gradient-to-br ${theme.gradient}`}>
                  <h3 className="text-xl font-bold text-slate-900 font-display tracking-tight group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Project Body */}
                <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Highlights */}
                  <div className="space-y-1.5 py-3 border-y border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Validated Production Impact
                    </span>
                    {project.impactMetrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills & GitHub Link */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setInspectedProject(project)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
                      >
                        <Network className="w-3.5 h-3.5" />
                        <span>Inspect Nodes</span>
                      </button>

                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900"
                          title="View Source on GitHub"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Architecture Directed Flow Modal */}
      {inspectedProject && (
        <ArchitectureModal
          project={inspectedProject}
          onClose={() => setInspectedProject(null)}
        />
      )}
    </section>
  );
};
