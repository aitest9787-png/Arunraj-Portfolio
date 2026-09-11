import React, { useState } from 'react';
import { 
  Sparkles, 
  Database, 
  Cpu, 
  Activity, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Workflow, 
  ExternalLink 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_OFFERED } from '../data/portfolioData';
import { ServiceOfferItem } from '../types';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceOfferItem | null>(null);

  const getServiceIcon = (iconName: string, theme: string) => {
    switch (iconName) {
      case 'Sparkles':
        return (
          <div className="w-12 h-12 rounded-xl bg-emerald-100/80 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-5">
            <Sparkles className="w-6 h-6" />
          </div>
        );
      case 'Database':
        return (
          <div className="w-12 h-12 rounded-xl bg-purple-100/80 border border-purple-200 text-purple-700 flex items-center justify-center mb-5">
            <Database className="w-6 h-6" />
          </div>
        );
      case 'Cpu':
        return (
          <div className="w-12 h-12 rounded-xl bg-amber-100/80 border border-amber-200 text-amber-700 flex items-center justify-center mb-5">
            <Cpu className="w-6 h-6" />
          </div>
        );
      case 'Activity':
      default:
        return (
          <div className="w-12 h-12 rounded-xl bg-rose-100/80 border border-rose-200 text-rose-700 flex items-center justify-center mb-5">
            <Activity className="w-6 h-6" />
          </div>
        );
    }
  };

  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case 'mint':
        return {
          card: 'pastel-card-mint bg-[#f0fdf4] border-[#bbf7d0] hover:border-[#86efac]',
          btn: 'bg-[#10b981] hover:bg-[#059669] text-white shadow-xs',
          tag: 'bg-emerald-100/70 text-emerald-800 border-emerald-200',
        };
      case 'purple':
        return {
          card: 'pastel-card-purple bg-[#f5f3ff] border-[#ddd6fe] hover:border-[#c4b5fd]',
          btn: 'bg-white hover:bg-purple-50 text-purple-700 border border-purple-200',
          tag: 'bg-purple-100/70 text-purple-800 border-purple-200',
        };
      case 'amber':
        return {
          card: 'pastel-card-amber bg-[#fffbeb] border-[#fde68a] hover:border-[#fcd34d]',
          btn: 'bg-white hover:bg-amber-50 text-amber-800 border border-amber-200',
          tag: 'bg-amber-100/70 text-amber-800 border-amber-200',
        };
      case 'pink':
      default:
        return {
          card: 'pastel-card-pink bg-[#fff1f2] border-[#fecdd3] hover:border-[#fda4af]',
          btn: 'bg-white hover:bg-rose-50 text-rose-800 border border-rose-200',
          tag: 'bg-rose-100/70 text-rose-800 border-rose-200',
        };
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Figma Template */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-2">
            Services I Offer to Our Clients
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            End-to-end AI engineering from autonomous multi-agent stategraphs to self-correcting RAG architectures and enterprise API integrations.
          </p>
        </div>

        {/* 4 Pastel Cards Grid matching bottom-right of Figma template */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_OFFERED.map((service) => {
            const styles = getThemeClasses(service.colorTheme);
            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${styles.card}`}
              >
                <div>
                  {getServiceIcon(service.iconName, service.colorTheme)}

                  <h3 className="text-lg font-bold text-slate-900 font-display mb-1.5">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs font-medium text-slate-500 mb-3">
                    {service.subtitle}
                  </p>

                  <p className="text-xs text-slate-700 leading-relaxed mb-5">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/50 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">
                    Production Ready
                  </span>
                  
                  <button
                    onClick={() => setSelectedService(service)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all inline-flex items-center gap-1 active:scale-95 ${styles.btn}`}
                  >
                    <span>See More</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                {getServiceIcon(selectedService.iconName, selectedService.colorTheme)}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {selectedService.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                {selectedService.description}
              </p>

              {/* Core Features */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Key Architecture &amp; Execution Highlights</span>
                </h4>
                <div className="space-y-2">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Tags */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-2">
                  Core Technologies &amp; Libraries
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.techTags.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sample Project Showcase */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Representative Shipped System
                </span>
                <p className="text-sm font-bold text-slate-900">
                  {selectedService.sampleProject}
                </p>
              </div>

              {/* Modal footer action */}
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2 rounded-full text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white inline-flex items-center gap-1.5"
                >
                  <span>Discuss This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
