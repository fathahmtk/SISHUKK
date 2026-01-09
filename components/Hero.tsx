
import React, { useEffect, useState } from 'react';
import { Activity, ScrollText, Scan } from 'lucide-react';
import Logo from './Logo.tsx';

interface HeroProps {
  onInvestorClick?: () => void;
  onProfileClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInvestorClick, onProfileClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setAnimateText(true);
    }, 100);

    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxY = scrollOffset * 0.3;
  const contentFade = Math.max(0, 1 - scrollOffset / 600);

  return (
    <div className="relative w-full h-dv flex flex-col justify-center items-center bg-[#05070A] overflow-hidden group selection:bg-brass-500/30">
      
      {/* Background Core */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <div className={`absolute inset-0 transition-all duration-[4s] ease-[cubic-bezier(0.2,1,0.2,1)] transform ${isLoaded ? 'opacity-90 scale-100' : 'opacity-0 scale-105'}`}>
            <img 
              src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
              alt="SIRSHUKK Twin Towers - Official Rendering" 
              className="w-full h-full object-cover opacity-60 saturate-[0.6] brightness-[0.8]"
            />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-onyx-950/80 via-transparent to-onyx-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#05070A_140%)]"></div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#C5A059 1px, transparent 1px), linear-gradient(90deg, #C5A059 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
      </div>

      {/* Report Telemetry Overlay */}
      <div 
        className={`absolute top-8 left-6 md:top-12 md:left-12 hidden lg:flex flex-col gap-12 z-30 transition-all duration-[2s] delay-700 ${animateText ? 'opacity-60 translate-x-0' : 'opacity-0 -translate-x-12'}`}
        style={{ opacity: contentFade * 0.6 }}
      >
         <div className="space-y-4 border-l border-brass-400 pl-8 group/node cursor-default">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-brass-200 block">Monograph_Sync_Active</span>
            <div className="text-[11px] font-mono text-white flex items-center gap-4">
               <Activity size={14} className="text-brass-400 animate-pulse" /> Core: Architectural_Thesis_v2.5
            </div>
            <div className="text-[9px] font-mono text-slate-500 tracking-tighter">REF: SGT_2025_REPORT</div>
         </div>
      </div>

      {/* Main Narrative Content */}
      <div 
        className="relative z-20 text-center w-full max-w-7xl px-6 md:px-16 flex flex-col items-center justify-center min-h-screen"
        style={{ opacity: contentFade }}
      >
        <div className={`mb-10 transition-all duration-[2.5s] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${animateText ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`}>
           <div className="relative inline-block group" onClick={onProfileClick}>
              <Logo className="w-24 h-24 md:w-32 lg:w-40 mb-8 drop-shadow-[0_0_40px_rgba(184,138,42,0.3)] transition-transform group-hover:scale-105" />
           </div>
        </div>
        
        <div className={`space-y-4 md:space-y-8 mb-12 md:mb-20 transition-all duration-[2s] delay-500 transform ${animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
           <span className="text-brass-400 text-[10px] md:text-[14px] font-black uppercase tracking-[1.2em] block opacity-80 px-4">
             Official Project Monograph
           </span>
           <h1 className="text-white font-serif text-4xl sm:text-6xl md:text-8xl lg:text-[11rem] leading-[0.85] md:leading-[0.75] tracking-tighter italic font-black drop-shadow-2xl px-4">
             Vertical <br/>
             <span className="gold-gradient-text not-italic drop-shadow-none">Heritage.</span>
           </h1>
        </div>

        <p className={`text-slate-300 text-lg md:text-3xl lg:text-4xl font-light font-editorial italic max-w-5xl leading-relaxed mb-16 md:mb-24 opacity-90 px-8 transition-all duration-[2s] delay-700 transform ${animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          The definitive architectural record. <br className="hidden lg:block"/>
          <span className="text-white font-medium border-b border-brass-400/40 pb-2 md:pb-4">An exploration of celestial geometry and lifestyle engineering in Guruvayur.</span>
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 transition-all duration-[2s] delay-1000 transform ${animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} w-full max-w-sm md:max-w-none px-6`}>
          <button 
            onClick={onInvestorClick}
            className="w-full sm:w-auto group relative px-10 md:px-20 py-6 md:py-8 bg-white text-onyx-950 rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] overflow-hidden shadow-premium transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-6"
          >
            <ScrollText size={16} /> Read Project Report
          </button>
          
          <button 
            onClick={onProfileClick}
            className="w-full sm:w-auto group px-10 md:px-20 py-6 md:py-8 bg-white/5 border border-white/10 text-white rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-onyx-950 transition-all active:scale-95 flex items-center justify-center gap-6 backdrop-blur-xl"
          >
            Structural Walkthrough <Scan size={18} className="group-hover:rotate-90 transition-transform duration-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
