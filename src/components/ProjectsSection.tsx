import React, { useState } from 'react';
import { 
  Layers, 
  ExternalLink, 
  Github, 
  Network, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck,
  Zap
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ArchitectureModal } from './ArchitectureModal';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'agentic' | 'rag' | 'automation'>('all');
  const [inspectedProject, setInspectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Enterprise Systems' },
    { id: 'agentic', label: 'Multi-Agent & LangGraph' },
    { id: 'rag', label: 'Agentic RAG & Vector' },
    { id: 'automation', label: 'Enterprise Automation' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-700 text-xs font-bold tracking-wider uppercase mb-1.5">
              <Network className="w-4 h-4" />
              <span>Flagship Deployments & Production Systems</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Agentic Workflows & Enterprise AI Pipelines
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              Systems engineered with state machines, Pydantic type safety, self-correcting retrieval loops, and automated test suites.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200 self-start sm:self-auto">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeFilter === f.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards */}
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-hover p-6 sm:p-8 rounded-xl bg-white border border-slate-200/90 shadow-2xs group hover:border-slate-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left side: Content & Impact (8 cols) */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    {/* Category & Status */}
                    <div className="flex flex-wrap items-center gap-2 mb-2.5">
                      <span className="px-2.5 py-0.5 rounded text-[11px] uppercase font-bold bg-blue-50 text-blue-800 border border-blue-200">
                        {project.category.toUpperCase()} ARCHITECTURE
                      </span>
                      {project.featured && (
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold text-amber-800 bg-amber-50 border border-amber-200 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-600" /> Featured System
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-1 group-hover:text-blue-900 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-blue-700 mb-3">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-2 mb-5">
                      {project.bulletPoints.map((bp, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-500 mr-1">TECH STACK:</span>
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200/80 hover:text-slate-950 border border-slate-200 text-slate-800 text-xs font-medium transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right side: Key Metrics & Graph Inspection (4 cols) */}
                <div className="lg:col-span-4 flex flex-col justify-between p-5 rounded-xl bg-slate-50/80 border border-slate-200/90 group-hover:bg-slate-50 transition-colors">
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
                      <span className="text-xs uppercase text-slate-700 font-bold tracking-wider flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-600" />
                        Key Technical Outcomes
                      </span>
                    </div>

                    {/* Impact Metrics */}
                    <div className="space-y-2 mb-4">
                      {project.impactMetrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 font-medium flex items-start gap-2 shadow-2xs hover:border-slate-300 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>

                    {/* Topology Summary */}
                    <div className="mb-4">
                      <span className="text-[11px] uppercase text-slate-500 font-bold block mb-1">
                        State Machine Workflow
                      </span>
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-600 leading-snug">
                        {project.architectureSummary}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-3 border-t border-slate-200">
                    <button
                      id={`project-inspect-${project.id}`}
                      onClick={() => setInspectedProject(project)}
                      className="btn-hover w-full py-2.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Network className="w-4 h-4" />
                      <span>Inspect Agent Architecture</span>
                    </button>

                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-hover w-full py-2 px-3 rounded-lg bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-300 shadow-2xs"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>View Source Code on GitHub</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-400" />
                      </a>
                    )}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Architecture Modal */}
      <ArchitectureModal
        project={inspectedProject}
        onClose={() => setInspectedProject(null)}
      />
    </section>
  );
};
