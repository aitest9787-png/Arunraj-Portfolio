import React from 'react';
import { Zap, Workflow, ShieldCheck, CheckCircle2, TrendingUp } from 'lucide-react';
import { METRICS } from '../data/portfolioData';

export const MetricsBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-600" />;
      case 'Bot':
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-blue-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-indigo-600" />;
      default:
        return <TrendingUp className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section id="metrics" className="py-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span>Key Engineering Metrics & Quantified Production Impact</span>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Production Validated
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="card-hover p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-slate-100 border border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:scale-105 transition-all duration-200">
                    {getIcon(metric.iconName)}
                  </div>
                  <span className="text-3xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                    {metric.value}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-slate-950 transition-colors">
                  {metric.label}
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mt-2 pt-2 border-t border-slate-100">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
