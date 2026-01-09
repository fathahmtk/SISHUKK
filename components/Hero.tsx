import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Info, ShieldCheck } from 'lucide-react';
import Logo from './Logo.tsx';

interface HeroProps {
  onInvestorClick?: () => void;
  onProfileClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInvestorClick, onProfileClick }) => {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    let requestRef: number;
    
    const handleScroll = () => {
      if (bgRef.current && sectionRef.current) {
        const scrollY = window.scrollY;
        const scrollScale = 1 + (scrollY * 0.0001);
        const yPos = scrollY * 0.4;
        bgRef.current.style.transform = `translate3d(0, ${yPos}px, 0) scale(${scrollScale})`;
      }
      requestRef = requestAnimationFrame(handleScroll);
    };

    requestRef = requestAnimationFrame(handleScroll);
    return () => cancelAnimationFrame(requestRef);
  }, []);

  const stats = [
    { label: "Asset Value", val: "₹350 Cr", sub: "Institutional Base" },
    { label: "Architecture", val: "Twin Tower", sub: "Structural Scarcity" },
    { label: "Target Yield", val: "24.2%", sub: "Projected IRR" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen relative flex flex-col justify-end bg-white overflow-hidden"
    >
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          ref={bgRef}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[2s] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            backgroundImage: 'url("https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
            filter: 'brightness(1.05) saturate(1.1) contrast(1.02)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-transparent"></div>
      </div>

      {/* Editorial Content Overlay */}
      <div className="container mx-auto px-6 relative z-10 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          <div className="lg:col-span-8 space-y-12">
            <div className="overflow-hidden">
               <div className="flex items-center gap-6 mb-8 opacity-0 animate-[fade-in-up_1.2s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
                  <Logo className="w-16 h-16" />
                  <div className="h-10 w-px bg-slate-200"></div>
                  <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.6em]">Portfolio Intelligence v2.5</span>
               </div>
               
               <h1 className="text-slate-950 font-serif text-[clamp(4rem,10vw,12rem)] leading-[0.75] tracking-tighter opacity-0 animate-[fade-in-up_1.4s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards]">
                  Structural <br/>
                  <span className="gold-gradient-text italic font-black">Monopoly.</span>
               </h1>
            </div>

            <div className="max-w-xl opacity-0 animate-[fade-in-up_1.4s_cubic-bezier(0.16,1,0.3,1)_0.6s_forwards]">
              <p className="text-slate-500 text-2xl font-light leading-tight italic border-l-2 border-gold-400 pl-10">
                A twin-tower hospitality landmark redefining spiritual luxury in the South Indian corridor. Engineered for institutional yield.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 pt-10 opacity-0 animate-[fade-in-up_1.4s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards]">
               <button 
                onClick={onInvestorClick}
                className="group px-12 py-6 bg-slate-950 text-white rounded-full text-[11px] font-black uppercase tracking-[0.5em] transition-all hover:bg-gold-500 shadow-2xl flex items-center gap-6 active:scale-95"
               >
                 Authorize Vault Access <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
               </button>
               <button 
                onClick={onProfileClick}
                className="px-12 py-6 bg-white/50 backdrop-blur-xl border border-slate-200 text-slate-900 rounded-full text-[11px] font-black uppercase tracking-[0.5em] hover:bg-white transition-all shadow-xl"
               >
                 Inspect Profile
               </button>
            </div>
          </div>

          <div className="lg:col-span-4 lg:border-l border-slate-100 lg:pl-12 space-y-12 opacity-0 animate-[fade-in_2s_ease-out_1s_forwards]">
             {stats.map((s, i) => (
               <div key={i} className="group cursor-default">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2">{s.label}</span>
                  <div className="text-slate-950 font-serif text-4xl group-hover:text-gold-600 transition-colors italic leading-none mb-1">{s.val}</div>
                  <span className="text-gold-600 text-[8px] font-black uppercase tracking-widest">{s.sub}</span>
               </div>
             ))}
          </div>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 animate-pulse">
         <span className="text-[8px] font-black uppercase tracking-[1em] text-slate-400">Scroll to Audit</span>
         <ChevronDown size={24} className="text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;