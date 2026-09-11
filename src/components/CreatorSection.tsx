import React, { useState } from 'react';
import { 
  Film, 
  Instagram, 
  Youtube, 
  Palette, 
  Zap, 
  Volume2, 
  Flame, 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Scissors, 
  Camera 
} from 'lucide-react';
import { CREATOR_PILLARS, PERSONAL_INFO } from '../data/portfolioData';

export const CreatorSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const creatorEmail = PERSONAL_INFO.creatorEmail || 'kuttyeditsofc@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(creatorEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const editingSkillsStack = [
    {
      name: 'DaVinci Resolve Studio',
      category: 'Color Grading & ACES',
      badge: 'Colorist',
      description: 'ACEScc color science, cinematic 3D LUTs, HDR color wheels, node grading, and calibrated skin-tone protection.',
      icon: Palette,
      accent: 'from-pink-500 to-rose-600',
    },
    {
      name: 'Adobe Premiere Pro',
      category: 'Dynamic Rhythm & Cutting',
      badge: 'Core NLE',
      description: 'Frame-accurate rhythm editing, beat-synced cutting, multi-camera sequencing, speed ramps, and audio ducking.',
      icon: Scissors,
      accent: 'from-purple-500 to-indigo-600',
    },
    {
      name: 'Adobe After Effects',
      category: 'VFX & 3D Motion Graphics',
      badge: 'Motion Design',
      description: '3D camera projection mapping, kinetic vector typography, seamless object masking, optical flares, and mocha tracking.',
      icon: Film,
      accent: 'from-blue-500 to-cyan-600',
    },
    {
      name: 'CapCut Pro',
      category: 'Short-Form Viral Retention',
      badge: 'Viral Social',
      description: 'Sub-second visual hooks, rapid storyboarding, dynamic kinetic subtitles, sound punch-ins, and retention optimization.',
      icon: Zap,
      accent: 'from-amber-500 to-orange-600',
    },
    {
      name: 'Adobe Audition',
      category: 'Spatial Sound & Foley',
      badge: 'Audio Engineer',
      description: 'Multi-track spatial audio design, sub-bass impacts, transitional risers, stereo panning, and Foley synthesis.',
      icon: Volume2,
      accent: 'from-emerald-500 to-teal-600',
    },
    {
      name: 'Adobe Photoshop',
      category: 'Compositing & Visuals',
      badge: 'Graphics',
      description: 'High-CTR YouTube/Reel thumbnail design, color grading pre-visualization, matte painting, and photo manipulation.',
      icon: Camera,
      accent: 'from-sky-500 to-blue-600',
    },
  ];

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-pink-400" />;
      case 'Volume2':
        return <Volume2 className="w-5 h-5 text-blue-400" />;
      case 'Flame':
      default:
        return <Flame className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <section id="creator" className="py-20 bg-slate-950 text-white relative overflow-hidden border-y border-slate-800">
      {/* Ambient studio lighting */}
      <div className="absolute top-0 left-1/4 w-[32rem] h-[32rem] bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header: Focused on Creator Studio, Editing Skills, Official Accounts & Email */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>Official Video Editing &amp; Creative Studio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Kutty Edits 2.0 Studio
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
              Official video editing, Hollywood-style DaVinci Resolve color grading, motion graphics, and audio soundscaping.
              Managed by Arunraj across YouTube (<strong className="text-white">@kuttyedits2.0</strong>) and 
              Instagram (<strong className="text-white">@kutty_edits_2.0</strong>).
            </p>
          </div>

          {/* Official Social Media Accounts */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white text-xs font-bold transition-all shadow-md hover:shadow-pink-500/20 inline-flex items-center gap-2"
              title="Official Instagram Page"
            >
              <Instagram className="w-4 h-4" />
              <span>@{PERSONAL_INFO.instagramHandle}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={PERSONAL_INFO.youtube}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow-md hover:shadow-red-600/20 inline-flex items-center gap-2"
              title="Official YouTube Channel"
            >
              <Youtube className="w-4 h-4" />
              <span>@{PERSONAL_INFO.youtubeHandle}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Official Edits Gmail Commission Card (Prominently Highlighted) */}
        <div className="mb-14 rounded-2xl bg-gradient-to-r from-pink-950/40 via-slate-900 to-purple-950/40 border border-pink-500/30 p-6 sm:p-7 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="space-y-1.5 max-w-xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-[11px] font-mono font-bold tracking-wide uppercase">
                <Mail className="w-3.5 h-3.5 text-pink-400" />
                <span>Official Business &amp; Editing Inquiries</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                Work with Kutty Edits 2.0
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                For commercial video editing, brand reels, color grading contracts, sound design, and YouTube Shorts commissions, contact our official editing desk directly:
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <div className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 flex items-center justify-between gap-3 shadow-inner">
                <span className="text-xs font-mono font-bold text-white selection:bg-pink-500">
                  {creatorEmail}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Official Edits Email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <a
                href={`mailto:${creatorEmail}?subject=Video%20Editing%20Commission%20Inquiry%20-%20Kutty%20Edits%202.0`}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-xs shadow-lg hover:shadow-pink-500/30 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>{copiedEmail ? 'Email Copied!' : 'Email Kutty Edits'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section 1: Video Editing Skills Stack (Deep Technical Mastery) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-pink-400 uppercase tracking-widest font-mono">
                Technical Mastery &amp; Software
              </span>
              <h3 className="text-2xl font-bold text-white mt-0.5">
                Video Editing Skills &amp; Creative Toolchain
              </h3>
            </div>
            <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-mono font-bold bg-pink-500/10 text-pink-300 border border-pink-500/20">
              Pipeline: 4K 10-Bit Color &amp; Dynamic NLEs
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {editingSkillsStack.map((skill) => {
              const IconComp = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-pink-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg hover:shadow-pink-500/5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.accent} text-white flex items-center justify-center shadow-md`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {skill.badge}
                      </span>
                    </div>
                    
                    <h4 className="text-base font-bold text-white group-hover:text-pink-400 transition-colors">
                      {skill.name}
                    </h4>
                    
                    <span className="text-xs font-medium text-pink-400 block mb-2">
                      {skill.category}
                    </span>
                    
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Four Core Editing Foundations */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-pink-400 uppercase tracking-widest font-mono">
                Creative Principles
              </span>
              <h3 className="text-2xl font-bold text-white mt-0.5">
                Core Production Disciplines
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CREATOR_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center mb-3">
                  {getPillarIcon(pillar.iconName)}
                </div>
                <span className="text-[11px] font-mono font-bold text-pink-400 block mb-1">
                  {pillar.metric}
                </span>
                <h4 className="text-sm font-bold text-white mb-1">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
