import React from 'react';
import { motion } from 'motion/react';
import { METRICS } from '../data/portfolioData';
import { Briefcase, ShieldCheck, CheckCircle2, Zap, Activity, Cpu } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const getMetricIcon = (iconName: string, idx: number) => {
    switch (idx) {
      case 0:
        return <Briefcase className="w-5 h-5 text-violet-600" />;
      case 1:
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 2:
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      case 3:
        return <Zap className="w-5 h-5 text-amber-500" />;
      default:
        return <Activity className="w-5 h-5 text-violet-600" />;
    }
  };

  return (
    <section id="metrics" className="py-8 sm:py-10 bg-slate-50/80 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Real-time Telemetry Indicator Banner */}
        <div className="flex items-center justify-between flex-wrap gap-2 mb-6 pb-4 border-b border-slate-200/60 text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-bold text-slate-900">Real-Time Production Telemetry</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500 hidden sm:inline">Tata Consultancy Services (TCS) &amp; Open Source</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>SLA Uptime: 99.9%</span>
          </div>
        </div>

        {/* Horizontal 4-Stat Metrics Row with Icons and Valid Enterprise Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {METRICS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                  {getMetricIcon(item.iconName, idx)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Metric #{idx + 1}
                </span>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-0.5">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 font-display">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                  {item.subtext}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
