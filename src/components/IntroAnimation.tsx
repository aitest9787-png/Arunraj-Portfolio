import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface IntroAnimationProps {
  onComplete: () => void;
  show: boolean;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete, show }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!show) return;

    // Fast progress bar from 0 to 100 over ~1.9s
    const startTime = Date.now();
    const duration = 1900;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 250);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [show, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro-curtain"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white overflow-hidden select-none"
        >
          {/* Subtle background ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(30,58,138,0.28),transparent_70%)] pointer-events-none" />
          
          {/* Skip Intro Button */}
          <button
            onClick={onComplete}
            className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full border border-slate-700/80 bg-slate-900/80 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-500 transition-colors flex items-center gap-1.5 cursor-pointer z-10"
          >
            <span>Skip Intro</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="relative z-10 max-w-xl w-full px-6 flex flex-col items-center text-center">
            {/* Top Brand / Organization */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-400 mb-6 shadow-sm"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-slate-300 font-semibold">TATA CONSULTANCY SERVICES</span>
              <span className="text-slate-600">•</span>
              <span>CHENNAI</span>
            </motion.div>

            {/* Main Name Animation: Staggered Letters for ARUNRAJ S */}
            <div className="overflow-hidden mb-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-1.5 sm:gap-2.5"
              >
                {'ARUNRAJ S'.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 35, rotateX: -60 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.65,
                      delay: 0.25 + index * 0.05,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className={`text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight ${
                      char === ' ' ? 'w-3 sm:w-5' : 'text-white'
                    }`}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Role Title with Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base sm:text-xl font-semibold text-blue-400 mb-3 tracking-wide"
            >
              AI Automation Developer &amp; Systems Engineer
            </motion.div>

            {/* Focus Specialization Pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-wrap items-center justify-center gap-2 mb-8 text-xs text-slate-400"
            >
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                LangGraph Workflows
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Production RAG
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Ansible &amp; Linux
              </span>
            </motion.div>

            {/* Loading Progress Line */}
            <div className="w-48 sm:w-64 h-1 bg-slate-800 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="mt-2 text-[11px] font-mono text-slate-500 flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" />
              <span>Initializing Portfolio • {progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
