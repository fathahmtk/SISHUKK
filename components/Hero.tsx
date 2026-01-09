import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ShieldCheck, Database, Globe, Activity, ChevronDown } from 'lucide-react';
import Logo from './Logo.tsx';

interface HeroProps {
  onInvestorClick?: () => void;
  onProfileClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInvestorClick, onProfileClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateText(true), 300);
    if (videoRef.current) {
        videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center bg-slate-950 overflow-hidden shadow-2xl group selection:bg-gold-500/30">
      
      {/* Cinematic Background Infrastructure */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 transition-opacity duration-[3s] ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <video 
              ref={videoRef}
              autoPlay 
              loop 
              muted 
              playsInline
              preload="auto"
              onCanPlay={() => setIsLoaded(true)}
              poster="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg"
              className="w-full h-full object-cover opacity-[0.5] scale-105 group-hover:scale-100 transition-transform duration-[20s] ease-out"
            >
              <source src="https://videos.pexels.com/video-files/4201389/4201389-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            </video>
        </div>
        
        {/* Static Fallback with High-Res Exterior */}
        <div className={`absolute inset-0 transition-opacity duration-[3s] ${isLoaded ? 'opacity-0' : 'opacity-100'}`}>
            <img 
              src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
              alt="Asset Exterior Render" 
              className="w-full h-full object-cover opacity-40 grayscale-[0.2]"
            />
        </div>

        {/* Multi-layered Masking */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_110%)] opacity-95"></div>
      </div>

      {/* Floating HUD Information Nodes */}
      <div className="absolute top-32 left-10 hidden xl:flex flex-col gap-10 z-10 animate-fade-in opacity-50 hover:opacity-100 transition-opacity duration-700">
         <div className="space-y-2 border-l border-gold-500/40 pl-6">
            <span className="text-[7px] font-black uppercase tracking-[0.5em] text-white/40 block">Signal Identifier</span>
            <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white flex items-center gap-2">
               <Activity size={10} className="text-gold-500" /> Guruvayur // South_Nada
            </div>
         </div>
         <div className="space-y-2 border-l border-gold-500/40 pl-6">
            <span className="text-[7px] font-black uppercase tracking-[0.5em] text-white/40 block">Digital Twin Status</span>
            <div className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500 flex items-center gap-2">
               <ShieldCheck size={10} /> BIM_Level_3.0_Verified
            </div>
         </div>
      </div>

      <div className="absolute bottom-12 left-10 hidden xl:flex items-center gap-12 z-10 animate-fade-in opacity-50">
         <div className="flex items-center gap-4 group cursor-default">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 transition-all group-hover:bg-gold-500 group-hover:text-onyx-950">
               <Database size={16} />
            </div>
            <div>
               <div className="text-[7px] font-black uppercase tracking-widest text-white/30 mb-1">Asset Value</div>
               <div className="text-xl font-serif text-white font-black italic leading-none">₹350 Cr</div>
            </div>
         </div>
         <div className="w-px h-10 bg-white/10"></div>
         <div className="flex items-center gap-4 group cursor-default">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 transition-all group-hover:bg-gold-500 group-hover:text-onyx-950">
               <Globe size={16} />
            </div>
            <div>
               <div className="text-[7px] font-black uppercase tracking-widest text-white/30 mb-1">Target Yield</div>
               <div className="text-xl font-serif text-white font-black italic leading-none">24.2%</div>
            </div>
         </div>
      </div>

      {/* Main Narrative Anchor */}
      <div className="relative z-20 text-center max-w-7xl px-8 flex flex-col items-center">
        
        {/* Symmetrical Reveal Container */}
        <div className={`mb-12 transition-all duration-[1.5s] cubic-bezier(0.16,1,0.3,1) transform ${animateText ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
           <Logo className="w-28 h-28 mb-12 drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]" variant="white" />
        </div>
        
        <div className={`space-y-10 mb-20 transition-all duration-[1.5s] delay-200 cubic-bezier(0.16,1,0.3,1) transform ${animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
           <span className="text-gold-500 text-[11px] md:text-[13px] font-black uppercase tracking-[1em] block drop-shadow-lg">
             The Institutionally Engineered Asset
           </span>
           <h1 className="text-white font-serif text-7xl md:text-9xl lg:text-[11rem] leading-[0.8] tracking-tighter italic font-black drop-shadow-2xl">
             Structural <br/>
             <span className="gold-gradient-text not-italic drop-shadow-lg">Monopoly.</span>
           </h1>
        </div>

        <p className={`text-slate-200 text-lg md:text-3xl font-light font-editorial italic max-w-4xl leading-relaxed mb-24 opacity-80 transition-all duration-[1.5s] delay-400 transform ${animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          A twin-tower landmark redefining spiritual luxury in South India. <br className="hidden lg:block"/>
          <span className="text-white font-medium border-b border-gold-500/40 pb-2">Calibrated for peak operational alpha and capital sovereignty.</span>
        </p>

        {/* Global CTAs */}
        <div className={`flex flex-col sm:flex-row items-center gap-10 transition-all duration-[1.5s] delay-600 transform ${animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <button 
            onClick={onInvestorClick}
            className="group relative px-16 py-7 bg-white text-slate-950 rounded-full text-[11px] font-black uppercase tracking-[0.4em] overflow-hidden shadow-3xl hover:shadow-gold-glow transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gold-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-5">
               <ShieldCheck size={18} className="group-hover:rotate-12 transition-transform duration-500" /> Inspect Financial Core
            </span>
          </button>
          
          <button 
            onClick={onProfileClick}
            className="group px-14 py-7 bg-transparent border border-white/20 text-white rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-onyx-950 hover:border-white transition-all active:scale-95 flex items-center gap-5 backdrop-blur-xl"
          >
            Asset Dossier <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
          </button>
        </div>
      </div>

      {/* Scroll Prompter */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 opacity-40 hover:opacity-100 transition-opacity cursor-pointer flex flex-col items-center gap-4 group">
         <span className="text-[8px] font-black uppercase tracking-[0.5em] text-white">Scroll to Explore Chapters</span>
         <div className="w-px h-12 bg-gradient-to-b from-gold-500 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[moveDown_2s_infinite]"></div>
         </div>
      </div>

      <style>{`
        @keyframes moveDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </div>
  );
};

export default Hero;