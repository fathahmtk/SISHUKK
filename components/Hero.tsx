import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Activity, Scan, Globe } from 'lucide-react';
import Logo from './Logo.tsx';

interface HeroProps {
  onInvestorClick?: () => void;
  onProfileClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInvestorClick, onProfileClick }) => {
  const bgRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        bgRef.current.style.transform = `translate3d(0, ${scrollY * 0.3}px, 0) scale(${1 + scrollY * 0.0001})`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="h-dv relative flex flex-col justify-center items-center bg-[#050505] overflow-hidden perspective-2000">
      {/* Visual Anchor Core */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          ref={bgRef}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[3s] ease-in-out ${isLoaded ? 'opacity-70' : 'opacity-0'}`}
          style={{ 
            backgroundImage: 'url("https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
            filter: 'grayscale(0.2) contrast(1.1) brightness(0.8)'
          }}
        ></div>
        {/* Editorial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)] opacity-40"></div>
      </div>

      {/* Floating HUD Elements */}
      <div className="absolute inset-0 pointer-events-none z-10 p-12">
        <div className="w-full h-full border border-white/[0.03] rounded-[4rem] relative">
          {/* Top Left: Location Info */}
          <div className="absolute top-10 left-10 flex items-center gap-4 text-white/40">
             <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></div>
             <span className="text-[8px] font-black uppercase tracking-[0.5em] font-mono">NODE_LOC: 10.59° N // 76.03° E</span>
          </div>
          
          {/* Top Right: Asset ID */}
          <div className="absolute top-10 right-10 text-right space-y-1">
             <div className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em]">SGT_242_ALPHA</div>
             <div className="text-white/20 text-[7px] font-mono uppercase tracking-[0.2em]">INSTITUTIONAL_LEDGER_SYNC</div>
          </div>

          {/* Bottom Right: Status Gauges */}
          <div className="absolute bottom-10 right-10 flex gap-10 items-end">
             <div className="text-right">
                <div className="text-white/20 text-[7px] font-black uppercase tracking-widest mb-2">Equity Target</div>
                <div className="text-gold-500 font-serif text-3xl font-black italic leading-none">₹350 Cr</div>
             </div>
             <div className="w-px h-12 bg-white/10"></div>
             <div className="text-right">
                <div className="text-white/20 text-[7px] font-black uppercase tracking-widest mb-2">Target Yield</div>
                <div className="text-white font-serif text-3xl font-black italic leading-none">24.2%</div>
             </div>
          </div>
        </div>
      </div>

      {/* Main Narrative Content */}
      <div className="container mx-auto px-8 relative z-20 text-center staged-reveal active">
        <div className="flex flex-col items-center">
          <Logo className="w-24 h-24 mb-16 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]" variant="white" />
          
          <div className="space-y-4 mb-12">
            <span className="text-gold-500 text-[12px] font-black uppercase tracking-[1em] pl-[1em] block">The Definitive Asset</span>
            <h1 className="text-white font-serif text-[clamp(4rem,12vw,14rem)] leading-[0.8] tracking-tighter italic font-black">
              Structural <br/>
              <span className="gold-gradient-text not-italic drop-shadow-3xl">Monopoly.</span>
            </h1>
          </div>

          <p className="text-slate-400 text-xl md:text-3xl font-editorial italic max-w-3xl leading-relaxed mb-16 opacity-80">
            A twin-tower landmark redefining spiritual luxury hospitality. <br/>
            <span className="text-white font-serif tracking-tight">Engineered for absolute institutional yield.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-10">
            <button 
              onClick={onInvestorClick}
              className="group px-14 py-7 bg-white text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.5em] transition-all hover:bg-gold-500 hover:text-white shadow-gold-glow flex items-center gap-8 active:scale-95"
            >
              Authorize Vault Access <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button 
              onClick={onProfileClick}
              className="px-14 py-7 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-full text-[11px] font-black uppercase tracking-[0.5em] hover:bg-white/10 transition-all active:scale-95"
            >
              Inspect Profile
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-30 animate-float">
         <span className="text-[8px] font-black uppercase tracking-[1.5em] text-white pl-[1.5em]">Begin Memorandum</span>
         <div className="w-px h-16 bg-gradient-to-b from-white via-white/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;