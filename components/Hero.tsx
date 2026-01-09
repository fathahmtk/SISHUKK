import React, { useEffect, useState } from 'react';
import { ShieldCheck, Activity, Lock, Cpu, Scan, Landmark } from 'lucide-react';
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

  const parallaxY = scrollOffset * 0.4;
  const contentFade = Math.max(0, 1 - scrollOffset / 700);
  const contentTranslate = scrollOffset * 0.1;

  return (
    <div className="relative w-full h-dv flex flex-col justify-center items-center bg-[#020617] overflow-hidden group selection:bg-gold-500/30">
      
      {/* High-Fidelity Visual Core */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <div className={`absolute inset-0 transition-all duration-[4s] ease-[cubic-bezier(0.2,1,0.2,1)] transform ${isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-xl'}`}>
            <img 
              src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
              alt="SIRSHUKK Twin Towers" 
              className="w-full h-full object-cover opacity-70 saturate-[0.7] brightness-[0.7]"
            />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_140%)]"></div>
        
        {/* Tactical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
      </div>

      {/* Institutional Telemetry HUD (Left) */}
      <div 
        className={`absolute top-28 left-6 md:top-36 md:left-16 hidden sm:flex flex-col gap-12 z-30 transition-all duration-[2s] delay-700 ${animateText ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
        style={{ opacity: contentFade }}
      >
         <div className="space-y-5 border-l-2 border-gold-500 pl-10 group/node cursor-default">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-gold-500 block group-hover:text-white transition-colors animate-pulse">Telemetry_Link_Operational</span>
            <div className="text-[11px] font-black uppercase tracking-[0.4em] text-white flex items-center gap-4">
               <Activity size={14} className="text-gold-500 animate-pulse" /> Asset: Site_Alpha_Core
            </div>
            <div className="text-[9px] font-mono text-slate-500 tracking-tighter">BIM_LOC: 10.5952N / 76.0375E</div>
         </div>
         <div className="space-y-5 border-l-2 border-emerald-500/30 pl-10 group/node cursor-default">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-emerald-500 block">Asset_Clearance</span>
            <div className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-500 flex items-center gap-4">
               <ShieldCheck size={14} /> Tier-1 Institutional Hub
            </div>
         </div>
      </div>

      {/* Asset Valuation HUD (Right) */}
      <div 
        className={`absolute bottom-20 right-6 md:bottom-28 md:right-16 hidden sm:flex flex-col items-end gap-12 z-30 transition-all duration-[2s] delay-1000 ${animateText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
        style={{ opacity: contentFade }}
      >
         <div className="text-right space-y-3 group cursor-default">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-gold-500 group-hover:text-white transition-colors">Asset_Valuation_Ledger</span>
            <div className="text-5xl md:text-7xl font-serif font-black italic text-white leading-none tracking-tighter drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]">₹350 Cr</div>
         </div>
         <div className="flex flex-col items-end gap-5 text-white/50">
            <div className="flex items-center gap-4">
               <span className="text-[10px] font-black uppercase tracking-[0.4em]">Node: SGT-SYMMETRY</span>
               <Cpu size={14} className="text-gold-500 animate-spin-slow" />
            </div>
            <div className="flex items-center gap-4">
               <span className="text-[10px] font-black uppercase tracking-[0.4em]">Target IRR: 24.2%</span>
               <Activity size={14} className="text-emerald-500" />
            </div>
         </div>
      </div>

      {/* Main Narrative Anchor */}
      <div 
        className="relative z-20 text-center w-full max-w-7xl px-8 md:px-16 flex flex-col items-center"
        style={{ 
            opacity: contentFade, 
            transform: `translateY(${contentTranslate}px)` 
        }}
      >
        
        {/* Brand Reveal */}
        <div className={`mb-16 md:mb-20 transition-all duration-[2.5s] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${animateText ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
           <div className="relative inline-block group cursor-pointer" onClick={onProfileClick}>
              <Logo className="w-32 h-32 md:w-44 md:h-44 mb-8 drop-shadow-[0_0_60px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-gold-500/20 blur-[100px] rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gold-500 text-onyx-950 px-8 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-3xl opacity-0 group-hover:opacity-100 transition-all translate-y-6 group-hover:translate-y-0">
                 Inspect Asset Integrity
              </div>
           </div>
        </div>
        
        {/* Master Headline */}
        <div className={`space-y-8 md:space-y-12 mb-16 md:mb-24 transition-all duration-[2s] delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
           <span className="text-gold-500 text-[11px] md:text-[15px] font-black uppercase tracking-[1em] md:tracking-[1.8em] block drop-shadow-2xl opacity-70 selection:bg-white selection:text-onyx-950">
             Authorized Institutional Ledger
           </span>
           <h1 className="text-white font-serif text-7xl sm:text-8xl md:text-9xl lg:text-[13rem] leading-[0.8] md:leading-[0.65] tracking-tighter italic font-black drop-shadow-2xl">
             Structural <br/>
             <span className="gold-gradient-text not-italic drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">Monopoly.</span>
           </h1>
        </div>

        {/* Vision Matrix */}
        <p className={`text-slate-200 text-xl md:text-3xl lg:text-4xl font-light font-editorial italic max-w-5xl leading-relaxed mb-20 md:mb-32 opacity-90 transition-all duration-[2s] delay-700 transform ${animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          Kerala's definitive high-rise trophy asset. <br className="hidden lg:block"/>
          <span className="text-white font-medium border-b border-gold-500/50 pb-4 shadow-[0_5px_15px_rgba(212,175,55,0.2)]">Engineered for absolute capital sovereignty.</span>
        </p>

        {/* Interaction Interface */}
        <div className={`flex flex-col sm:flex-row items-center gap-10 md:gap-14 transition-all duration-[2s] delay-1000 transform ${animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <button 
            onClick={onInvestorClick}
            className="w-full sm:w-auto group relative px-16 md:px-28 py-8 md:py-12 bg-white text-onyx-950 rounded-full text-[11px] md:text-[13px] font-black uppercase tracking-[0.6em] overflow-hidden shadow-3xl hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gold-500 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
            <span className="relative z-10 flex items-center justify-center gap-8">
               <Lock size={20} className="group-hover:text-gold-600 transition-colors" /> Open Data Vault
            </span>
          </button>
          
          <button 
            onClick={onProfileClick}
            className="w-full sm:w-auto group px-14 md:px-24 py-8 md:py-12 bg-white/5 border border-white/20 text-white rounded-full text-[11px] md:text-[13px] font-black uppercase tracking-[0.6em] hover:bg-white hover:text-onyx-950 hover:border-white transition-all active:scale-95 flex items-center justify-center gap-8 backdrop-blur-3xl shadow-2xl"
          >
            Asset Scan <Scan size={22} className="group-hover:rotate-90 transition-transform duration-1000" />
          </button>
        </div>
      </div>

      {/* Atmospheric Scanning Line */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-30">
         <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-500 shadow-[0_0_30px_#D4AF37] animate-[scan_15s_linear_infinite]"></div>
      </div>

      <style>{`
        @keyframes scan { 0% { top: -5%; } 100% { top: 105%; } }
        .h-dv { height: 100vh; height: 100dvh; }
      `}</style>
    </div>
  );
};

export default Hero;