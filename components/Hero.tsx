import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, FileText, ChevronDown, Info } from 'lucide-react';
import Logo from './Logo.tsx';

interface HeroProps {
  onInvestorClick?: () => void;
  onProfileClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInvestorClick, onProfileClick }) => {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    let requestRef: number;
    
    const handleScroll = () => {
      if (bgRef.current && sectionRef.current) {
        const scrollY = window.scrollY;
        const sectionOffset = sectionRef.current.offsetTop;
        const relativeScroll = scrollY - sectionOffset;
        
        // High-Precision Pronounced Parallax Logic
        if (relativeScroll < window.innerHeight && relativeScroll > -window.innerHeight) {
          // Increased velocity for more "depth" (0.65)
          const yPos = relativeScroll * 0.65;
          // Continuous scale factor tied to scroll - creates a "falling into" effect
          const scrollScale = 1.1 + (Math.max(0, relativeScroll) * 0.0002);
          
          bgRef.current.style.transform = `translate3d(0, ${yPos}px, 0) scale(${scrollScale})`;
        }
      }

      // Dynamic opacity and lift for content
      if (contentRef.current) {
        const progress = Math.min(1, window.scrollY / (window.innerHeight * 0.6));
        const opacity = 1 - progress;
        const lift = window.scrollY * 0.35;
        contentRef.current.style.opacity = Math.max(0, opacity).toString();
        contentRef.current.style.transform = `translate3d(0, ${lift}px, 0)`;
      }

      requestRef = requestAnimationFrame(handleScroll);
    };

    requestRef = requestAnimationFrame(handleScroll);
    return () => cancelAnimationFrame(requestRef);
  }, []);

  const facts = [
    { label: "Asset Valuation", value: "₹350 Cr", sub: "Capex Targeted" },
    { label: "Room Inventory", value: "420 Keys", sub: "Tower A & B" },
    { label: "Annual Inflow", value: "12M+", sub: "Strategic Pilgrims" },
    { label: "Yield Target", value: "24.2%", sub: "Projected IRR" },
  ];

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center relative overflow-hidden bg-onyx-950"
    >
      {/* Cinematic Parallax Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          ref={bgRef}
          className={`absolute inset-0 w-full h-[150%] -top-[25%] will-change-transform transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transform: 'translate3d(0, 0, 0) scale(1.1)' }}
        >
          {/* Subtle Background Video - Architectural Loop */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            poster="https://images.unsplash.com/photo-1740626359516-728864703901?q=80&w=3540&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-[0.35] brightness-[0.3] saturate-[0.6]"
          >
            <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=72ad57a582cf6102ca309256159ca57146617201&profile_id=164" type="video/mp4" />
          </video>
        </div>
        
        {/* Deep Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.08)_0%,_transparent_100%)]"></div>
        
        {/* Animated Institutional Grid/Scan Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49.5%,rgba(212,175,55,0.03)_50%,transparent_50.5%)] bg-[length:100%_80px] animate-[scanline_20s_linear_infinite] opacity-40"></div>
      </div>
      
      {/* Meridian Light Leak Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gold-500/20 to-transparent pointer-events-none z-10 hidden lg:block"></div>

      <div ref={contentRef} className="container mx-auto relative z-20 text-center lg:text-left will-change-transform">
        <div className="max-w-6xl mx-auto">
          
          {/* Brand Header: Cinematic Entrance */}
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-10 mb-16">
            <Logo className="w-28 h-28 lg:w-36 lg:h-36 drop-shadow-[0_0_50px_rgba(212,175,55,0.4)] animate-float opacity-0 animate-[fade-in_1s_ease-out_forwards]" />
            <div className="lg:mb-2 text-center lg:text-left overflow-hidden">
              <div className="inline-flex items-center gap-3 px-5 py-2 border border-gold-400/20 bg-gold-400/5 text-gold-300 text-[10px] font-black uppercase tracking-[0.6em] mb-6 backdrop-blur-xl rounded-full mx-auto lg:mx-0 shadow-gold-glow opacity-0 animate-[fade-in-up_1.2s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
                Institutional Offering 2025
              </div>
              <h1 className="text-white font-display text-6xl md:text-8xl lg:text-[9.5rem] leading-[0.8] tracking-tighter">
                <span className="block translate-y-full opacity-0 animate-[reveal-up_1.2s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards]">SIRSHUKK</span>
                <span className="gold-gradient-text drop-shadow-[0_0_45px_rgba(212,175,55,0.15)] italic block mt-3 translate-y-full opacity-0 animate-[reveal-up_1.4s_cubic-bezier(0.16,1,0.3,1)_0.6s_forwards] relative">
                  GRAND TOWERS
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[glint_4s_ease-in-out_infinite] skew-x-[-20deg]"></span>
                </span>
              </h1>
            </div>
          </div>

          {/* Subtext: Elegance & Authority */}
          <h2 className="text-2xl md:text-4xl text-slate-300 font-serif italic mb-16 max-w-4xl opacity-0 animate-[fade-in-up_1.2s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards] leading-tight pr-4">
            Guruvayur's definitive vertical landmark. A high-yield institutional asset unified by the monumental <span className="text-white border-b border-gold-500/30">Meridian Arch</span>.
          </h2>

          {/* Fact Grid: Interactive Quantitative Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {facts.map((fact, i) => (
              <div 
                key={i} 
                onClick={onProfileClick}
                style={{ animationDelay: `${1.2 + (i * 0.15)}s` }}
                className="opacity-0 animate-[fade-in-up_1s_cubic-bezier(0.16,1,0.3,1)_forwards] relative group text-center lg:text-left border-l border-white/5 pl-8 hover:border-gold-500/60 transition-all duration-700 cursor-pointer hover:bg-white/[0.03] py-5 rounded-r-2xl active:scale-95"
              >
                <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
                   <div className="text-gold-500 text-[9px] uppercase font-black tracking-[0.5em] opacity-70 group-hover:opacity-100 transition-opacity">{fact.label}</div>
                   <Info size={10} className="text-gold-500 opacity-0 group-hover:opacity-100 transition-all transform scale-0 group-hover:scale-100" />
                </div>
                <div className="text-white font-serif text-3xl md:text-5xl mb-2 group-hover:text-gold-300 transition-colors drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]">{fact.value}</div>
                <div className="text-slate-600 text-[8px] uppercase tracking-[0.4em] font-black group-hover:text-slate-400 transition-colors">{fact.sub}</div>
                {/* Interaction Pulse */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-gold-500 opacity-0 group-hover:opacity-100 transition-opacity animate-ping"></div>
              </div>
            ))}
          </div>

          {/* CTA Hub */}
          <div className="flex flex-col sm:flex-row gap-8 opacity-0 animate-[fade-in-up_1s_cubic-bezier(0.16,1,0.3,1)_1.8s_forwards] justify-center lg:justify-start">
            <button 
              onClick={() => document.getElementById('config')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gold-500 hover:bg-white text-onyx-950 px-16 py-8 rounded-full text-[11px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-8 transition-all shadow-[0_30px_70px_rgba(212,175,55,0.4)] active:scale-95 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-[800ms] pointer-events-none skew-x-[-15deg]"></div>
              The Masterplan <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
            </button>
            <button 
              onClick={() => onInvestorClick ? onInvestorClick() : document.getElementById('investor-access')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/5 border border-white/10 hover:border-gold-500 text-white hover:text-gold-500 px-16 py-8 rounded-full text-[11px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-8 transition-all backdrop-blur-3xl group shadow-2xl hover:bg-white/10"
            >
              Investor Dossier <FileText size={20} className="group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Navigation Cue */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-[bounce-slow_4s_infinite] opacity-60 hover:opacity-100 transition-all cursor-pointer z-20 group">
        <span className="text-[9px] font-black text-gold-500 uppercase tracking-[0.8em] group-hover:tracking-[1.2em] transition-all">Audit Structure</span>
        <div className="w-10 h-16 border-2 border-gold-500/30 rounded-full p-2 flex justify-center items-start">
           <div className="w-1 h-3 bg-gold-500 rounded-full animate-[mouse-scroll_2s_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes reveal-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes scanline {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
        @keyframes glint {
          0% { transform: translateX(-100%) skewX(-20deg); opacity: 0; }
          40% { opacity: 0.5; }
          50% { transform: translateX(100%) skewX(-20deg); opacity: 0; }
          100% { transform: translateX(100%) skewX(-20deg); opacity: 0; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -15px); }
        }
        @keyframes mouse-scroll {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 0; }
          100% { transform: translateY(12px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;