import React, { useEffect, useState } from 'react';
import { ShieldCheck, Activity, Lock, Cpu, Scan } from 'lucide-react';
import Logo from './Logo.tsx';

interface HeroProps {
  onInvestorClick?: () => void;
  onProfileClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInvestorClick, onProfileClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setAnimateText(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-dv flex flex-col justify-center items-center bg-[#020617] overflow-hidden group selection:bg-gold-500/30">
      
      {/* High-Fidelity Visual Core */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 transition-all duration-[3s] ease-in-out transform ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
            <img 
              src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
              alt="SIRSHUKK Twin Towers" 
              className="w-full h-full object-cover opacity-60 saturate-[0.8] brightness-[0.8]"
            />
        </div>

        {/* Multi-layered Tactical Masking */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_130%)]"></div>
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: 'clamp(40px, 5vw, 80px) clamp(40px, 5vw, 80px)' }}></div>
      </div>

      {/* Institutional Telemetry HUD (Left) - Safe Zones */}
      <div className={`absolute top-28 left-6 md:top-32 md:left-12 hidden sm:flex flex-col gap-8 md:gap-12 z-10 transition-all duration-[2s] delay-500 ${animateText ? 'opacity-40 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
         <div className="space-y-2 md:space-y-3 border-l-2 border-gold-500/40 pl-6 md:pl-8 group/node cursor-default">
            <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.5em] text-white/40 block group-hover:text-gold-500 transition-colors">Signal_Origin</span>
            <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white flex items-center gap-3">
               <Activity size={10} className="text-gold-500 animate-pulse md:size-3" /> Guruvayur // Node_Alpha
            </div>
         </div>
         <div className="space-y-2 md:space-y-3 border-l-2 border-gold-500/40 pl-6 md:pl-8 group/node cursor-default">
            <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.5em] text-white/40 block group-hover:text-gold-500 transition-colors">BIM_Lifecycle</span>
            <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 flex items-center gap-3">
               <ShieldCheck size={10} className="md:size-3" /> Sync_Status: Nominal
            </div>
         </div>
      </div>

      {/* Asset Valuation HUD (Right) - Safe Zones */}
      <div className={`absolute bottom-12 right-6 md:bottom-16 md:right-12 hidden sm:flex flex-col items-end gap-8 md:gap-10 z-10 transition-all duration-[2s] delay-700 ${animateText ? 'opacity-40 translate-x-0' : 'opacity-0 translate-x-12'}`}>
         <div className="text-right space-y-1 md:space-y-2 group cursor-default">
            <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.4em] text-gold-500 group-hover:text-white transition-colors">Total_Project_Basis</span>
            <div className="text-3xl md:text-5xl font-serif font-black italic text-white leading-none tracking-tighter">₹350 Cr</div>
         </div>
         <div className="flex items-center gap-3 md:gap-4 text-white/60">
            <Cpu size={12} className="text-gold-500 md:size-3.5" />
            <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em]">Node: SGT-CLOUD-SYNC-01</span>
         </div>
      </div>

      {/* Main Narrative Anchor - Perfect Centering */}
      <div className="relative z-20 text-center w-full max-w-7xl px-6 md:px-12 flex flex-col items-center">
        
        {/* Logo Reveal */}
        <div className={`mb-8 md:mb-12 transition-all duration-[2s] cubic-bezier(0.16,1,0.3,1) transform ${animateText ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-90'}`}>
           <div className="relative inline-block">
              <Logo className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-8 drop-shadow-[0_0_50px_rgba(212,175,55,0.4)]" variant="white" />
              <div className="absolute inset-0 bg-gold-500/10 blur-3xl rounded-full animate-pulse-slow"></div>
           </div>
        </div>
        
        {/* Headline Section */}
        <div className={`space-y-4 md:space-y-8 mb-12 md:mb-20 transition-all duration-[2s] delay-300 cubic-bezier(0.16,1,0.3,1) transform ${animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
           <span className="text-gold-500 text-[9px] md:text-[12px] font-black uppercase tracking-[0.8em] md:tracking-[1.2em] block drop-shadow-2xl opacity-80">
             Authorized Institutional Portfolio
           </span>
           <h1 className="text-white font-serif text-6xl sm:text-7xl md:text-9xl lg:text-[11rem] leading-[0.85] md:leading-[0.75] tracking-tighter italic font-black drop-shadow-2xl">
             Structural <br/>
             <span className="gold-gradient-text not-italic drop-shadow-2xl">Monopoly.</span>
           </h1>
        </div>

        {/* Vision Statement */}
        <p className={`text-slate-200 text-lg md:text-3xl lg:text-4xl font-light font-editorial italic max-w-4xl leading-relaxed mb-16 md:mb-24 opacity-80 transition-all duration-[2s] delay-500 transform ${animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          Kerala's definitive twin-tower destination asset. <br className="hidden lg:block"/>
          <span className="text-white font-medium border-b border-gold-500/40 pb-2 md:pb-3">Engineered for capital sovereignty and ritual-economy alpha.</span>
        </p>

        {/* Interaction Hub - Responsive Grid/Flex */}
        <div className={`flex flex-col sm:flex-row items-center gap-6 md:gap-10 transition-all duration-[2s] delay-700 transform ${animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <button 
            onClick={onInvestorClick}
            className="w-full sm:w-auto group relative px-12 md:px-20 py-5 md:py-8 bg-white text-onyx-950 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] overflow-hidden shadow-3xl hover:shadow-gold-glow transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gold-500 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
            <span className="relative z-10 flex items-center justify-center gap-4 md:gap-6">
               <Lock size={16} className="md:size-[18px] group-hover:text-gold-600 transition-colors" /> Open Data Vault
            </span>
          </button>
          
          <button 
            onClick={onProfileClick}
            className="w-full sm:w-auto group px-10 md:px-16 py-5 md:py-8 bg-transparent border border-white/20 text-white rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] hover:bg-white hover:text-onyx-950 hover:border-white transition-all active:scale-95 flex items-center justify-center gap-4 md:gap-6 backdrop-blur-3xl shadow-2xl"
          >
            Asset ID Scan <Scan size={18} className="md:size-[20px] group-hover:rotate-90 transition-transform duration-700" />
          </button>
        </div>
      </div>

      {/* Cinematic Scroll Indicator */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-30 opacity-30 hover:opacity-100 transition-opacity flex flex-col items-center gap-4 md:gap-5 group cursor-pointer animate-fade-in delay-1000">
         <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-white">Initialize chapters</span>
         <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-gold-500 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[slide_3s_infinite_ease-in-out]"></div>
         </div>
      </div>

      <style>{`
        @keyframes slide { 0% { transform: translateY(-100%); } 100% { transform: translateY(300%); } }
        .h-dv { height: 100vh; height: 100dvh; }
      `}</style>
    </div>
  );
};

export default Hero;