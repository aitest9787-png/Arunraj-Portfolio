import React, { useState } from 'react';
import { 
  Sparkles, 
  Database, 
  Cpu, 
  Terminal, 
  Search, 
  Layers, 
  Wrench, 
  CheckCircle2,
  Workflow,
  Code2,
  ShieldCheck,
  X,
  FileCheck
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'skills' | 'architecture'>('skills');
  const [cardModes, setCardModes] = useState<Record<string, 'skills' | 'architecture'>>({});

  const toggleCardMode = (categoryId: string) => {
    setCardModes((prev) => {
      const current = prev[categoryId] || viewMode;
      return {
        ...prev,
        [categoryId]: current === 'skills' ? 'architecture' : 'skills',
      };
    });
  };

  const setGlobalViewMode = (mode: 'skills' | 'architecture') => {
    setViewMode(mode);
    const updated: Record<string, 'skills' | 'architecture'> = {};
    SKILL_CATEGORIES.forEach((cat) => {
      updated[cat.id] = mode;
    });
    setCardModes(updated);
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-blue-600" />;
      case 'Database':
        return <Database className="w-4 h-4 text-indigo-600" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-emerald-700" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-slate-800" />;
      default:
        return <Wrench className="w-4 h-4 text-slate-600" />;
    }
  };

  const allCategories = [
    { id: 'all', name: 'All Domains', iconName: 'Layers' },
    ...SKILL_CATEGORIES.map((c) => ({ id: c.id, name: c.name, iconName: c.iconName })),
  ];

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchesCategory = activeCategory === 'all' || activeCategory === cat.id;
    if (!matchesCategory) return null;

    const filteredSkills = cat.skills.filter((s) => {
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        s.name.toLowerCase().includes(query) ||
        (s.tag && s.tag.toLowerCase().includes(query)) ||
        cat.name.toLowerCase().includes(query)
      );
    });

    if (filteredSkills.length === 0 && searchQuery.trim()) return null;

    return {
      ...cat,
      skills: filteredSkills.length > 0 ? filteredSkills : cat.skills,
    };
  }).filter(Boolean);

  return (
    <section id="competencies" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-700 text-xs font-bold tracking-wider uppercase mb-1.5">
              <Workflow className="w-4 h-4" />
              <span>Technical Arsenal &amp; Verified Competencies</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Engineering Domain Competencies
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              Recruiter-indexed engineering skills across agentic state machines, vector retrieval, and enterprise infrastructure automation.
            </p>
          </div>

          {/* Header Controls: Search & Global View Switcher */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Quick Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter skill (e.g. LangGraph, FAISS)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 transition-colors shadow-2xs"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Global Segmented Perspective Switcher */}
            <div className="inline-flex rounded-lg border border-slate-300 bg-white p-1 shadow-2xs">
              <button
                onClick={() => setGlobalViewMode('skills')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'skills'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Skills Matrix</span>
              </button>
              <button
                onClick={() => setGlobalViewMode('architecture')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'architecture'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Workflow className="w-3.5 h-3.5" />
                <span>Architecture Blueprints</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Domain Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {allCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
              }`}
            >
              {getCategoryIcon(cat.iconName)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Competencies Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCategories.map((cat) => {
            const currentMode = cardModes[cat!.id] || viewMode;

            return (
              <div
                key={cat!.id}
                className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  {/* Card Header & Per-Card Mode Tab */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-4 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800">
                        {getCategoryIcon(cat!.iconName)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 tracking-tight">
                          {cat!.name}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {cat!.description}
                        </p>
                      </div>
                    </div>

                    {/* View Switcher for this Card */}
                    <div className="inline-flex rounded-md border border-slate-200 bg-slate-100 p-0.5 shrink-0 self-start sm:self-auto">
                      <button
                        onClick={() => toggleCardMode(cat!.id)}
                        className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                          currentMode === 'skills'
                            ? 'bg-white text-blue-700 shadow-2xs font-bold'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Skills ({cat!.skills.length})
                      </button>
                      <button
                        onClick={() => toggleCardMode(cat!.id)}
                        className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                          currentMode === 'architecture'
                            ? 'bg-white text-blue-700 shadow-2xs font-bold'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Architecture
                      </button>
                    </div>
                  </div>

                  {/* Mode 1: Skills Matrix */}
                  {currentMode === 'skills' ? (
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {cat!.skills.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            className={`px-2.5 py-1.5 rounded-md text-xs flex items-center gap-1.5 border transition-colors cursor-default ${
                              skill.featured
                                ? 'bg-blue-50 text-blue-900 border-blue-200 font-semibold'
                                : 'bg-slate-50 text-slate-800 border-slate-200 font-medium'
                            }`}
                          >
                            <span>{skill.name}</span>
                            {skill.tag && (
                              <span className="text-[10px] text-slate-500 border-l border-slate-300 pl-1.5 font-normal">
                                {skill.tag}
                              </span>
                            )}
                            {skill.level === 'Advanced' && (
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" title="Advanced Proficiency" />
                            )}
                          </div>
                        ))}
                      </div>

                      {cat!.productionImpact && (
                        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                          <strong className="text-slate-900 font-semibold">TCS Production Delivery: </strong>
                          {cat!.productionImpact}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Mode 2: In-Depth Architecture & Production Design Patterns */
                    <div className="space-y-3.5">
                      <div className="space-y-2">
                        {cat!.architectureHighlights?.map((item, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed flex items-start gap-2.5">
                            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-slate-900 block font-bold mb-0.5">{item.pattern}</strong>
                              <span className="text-slate-600">{item.detail}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {cat!.libraries && (
                        <div className="pt-2 border-t border-slate-100">
                          <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1.5">
                            Core Python Frameworks &amp; Toolchain:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {cat!.libraries.map((lib, lIdx) => (
                              <span
                                key={lIdx}
                                className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200 text-xs font-mono"
                              >
                                {lib}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Validated in production enterprise repositories</span>
                  </div>
                  <button
                    onClick={() => toggleCardMode(cat!.id)}
                    className="text-blue-700 font-bold hover:underline cursor-pointer"
                  >
                    {currentMode === 'skills' ? 'View Architecture Details →' : '← Back to Skills Matrix'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
