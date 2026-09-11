import React, { useState } from 'react';
import { Film, Cpu, Palette, Layers, Terminal } from 'lucide-react';

interface SafeImageProps {
  src?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  categoryBadge?: string;
  overlayGradient?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative w-full h-full overflow-hidden bg-slate-950',
  categoryBadge,
  overlayGradient = true,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const renderCategoryIcon = () => {
    const badgeLower = (categoryBadge || alt).toLowerCase();
    if (badgeLower.includes('agent') || badgeLower.includes('rag') || badgeLower.includes('ai')) {
      return <Cpu className="w-8 h-8 text-blue-400" />;
    }
    if (badgeLower.includes('color') || badgeLower.includes('grade')) {
      return <Palette className="w-8 h-8 text-pink-400" />;
    }
    if (badgeLower.includes('motion') || badgeLower.includes('reel') || badgeLower.includes('viral')) {
      return <Film className="w-8 h-8 text-violet-400" />;
    }
    if (badgeLower.includes('automation') || badgeLower.includes('ansible') || badgeLower.includes('itsm')) {
      return <Terminal className="w-8 h-8 text-emerald-400" />;
    }
    return <Layers className="w-8 h-8 text-indigo-400" />;
  };

  const showImage = Boolean(src) && !hasError;

  return (
    <div className={containerClassName}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`${className} transition-all duration-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-40 scale-102 blur-xs'
          }`}
        />
      ) : (
        /* High-Production Clean SVG/Tech Fallback */
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-5 text-center select-none overflow-hidden">
          {/* Subtle geometric dot grid */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }}
          />
          {/* Subtle glowing orb */}
          <div className="absolute w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />

          {/* Central Badge Icon */}
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-xl flex items-center justify-center mb-3">
            {renderCategoryIcon()}
          </div>

          <span className="relative z-10 text-xs font-bold text-white tracking-wide max-w-[220px] truncate">
            {alt}
          </span>

          <div className="relative z-10 flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-mono text-slate-300 font-semibold tracking-wider">
              {categoryBadge || 'System Image'}
            </span>
          </div>
        </div>
      )}

      {/* Subtle overlay gradient */}
      {overlayGradient && showImage && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />
      )}
    </div>
  );
};
