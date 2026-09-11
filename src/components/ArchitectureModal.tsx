import React, { useState } from 'react';
import { X, Network, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface ArchitectureModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [selectedNodeIndex, setSelectedNodeIndex] = useState<number>(0);

  const getNodeColor = (type: string, isSelected: boolean) => {
    if (isSelected) {
      return 'border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-500';
    }
    switch (type) {
      case 'input':
        return 'border-blue-200 bg-blue-50/50 text-blue-900';
      case 'agent':
        return 'border-indigo-200 bg-indigo-50/50 text-indigo-900';
      case 'evaluator':
        return 'border-amber-200 bg-amber-50/50 text-amber-900';
      case 'tool':
        return 'border-emerald-200 bg-emerald-50/50 text-emerald-900';
      case 'output':
        return 'border-slate-300 bg-slate-100 text-slate-900';
      default:
        return 'border-slate-200 bg-slate-50 text-slate-800';
    }
  };

  const selectedNode = project.nodes ? project.nodes[selectedNodeIndex] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-300 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 border border-blue-200 text-blue-800">
              <Network className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                {project.title} — System Architecture & Flow
              </h3>
              <p className="text-xs text-slate-500">
                LangGraph State Machine & Multi-Agent Directed Node Graph
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
            aria-label="Close Architecture Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          
          {/* Executive Flow Summary */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs uppercase text-slate-600 font-bold block mb-1.5">
              End-to-End Orchestration Summary
            </span>
            <p className="text-xs sm:text-sm text-slate-800 bg-white p-3 rounded-lg border border-slate-200">
              {project.architectureSummary}
            </p>
          </div>

          {/* Interactive Node Graph Visualizer */}
          {project.nodes && project.nodes.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase text-slate-700 font-bold">
                  Interactive Node Sequence (Click any node to inspect logic)
                </span>
                <span className="text-xs text-blue-700 font-semibold">
                  {project.nodes.length} Nodes in Directed Graph
                </span>
              </div>

              {/* Horizontal Scrollable Graph Track */}
              <div className="flex items-center gap-3 overflow-x-auto pb-3 pt-1">
                {project.nodes.map((node, nIdx) => (
                  <React.Fragment key={node.id}>
                    <button
                      onClick={() => setSelectedNodeIndex(nIdx)}
                      className={`shrink-0 p-3 rounded-xl border text-left transition-all min-w-[150px] sm:min-w-[170px] ${getNodeColor(node.type, selectedNodeIndex === nIdx)}`}
                    >
                      <div className="flex items-center justify-between text-[11px] opacity-75 mb-1 font-semibold uppercase">
                        <span>Node 0{nIdx + 1}</span>
                        <span>{node.type}</span>
                      </div>
                      <div className="font-bold text-sm text-slate-900">{node.name}</div>
                      <div className="text-[11px] text-slate-600 mt-0.5 line-clamp-1">{node.role}</div>
                    </button>

                    {nIdx < project.nodes!.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Selected Node Deep Dive Card */}
              {selectedNode && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mt-2 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-800 font-bold uppercase">
                      Node Specification: {selectedNode.name}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-white text-slate-700 border border-slate-200">
                      Category: {selectedNode.type}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800">
                    <strong className="font-semibold text-slate-900">Functionality:</strong> {selectedNode.role}
                  </p>
                  <p className="text-xs text-slate-500">
                    State Transition: Managed by LangGraph state dictionary with Pydantic schema validation and error boundaries.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Key Engineering Highlights & Safeguards */}
          <div className="space-y-2.5">
            <span className="text-xs uppercase text-slate-700 font-bold block">
              Production Safeguards & Architectural Details
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {project.bulletPoints.map((bp, bIdx) => (
                <div key={bIdx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{bp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-500">Core Technologies:</span>
            {project.techStack.map((tech, tIdx) => (
              <span key={tIdx} className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200">
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Source & Details: <strong className="text-slate-800">github.com/arunrajselvarasu</strong>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
