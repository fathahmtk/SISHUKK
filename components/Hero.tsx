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
        
        if (relativeScroll < window.innerHeight && relativeScroll > -window.innerHeight) {
          const yPos = relativeScroll * 0.5;
          const scrollScale = 1.1 + (Math.max(0, relativeScroll) * 0.0002);
          bgRef.current.style.transform = `translate3d(0, ${yPos}px, 0) scale(${scrollScale})`;
        }
      }

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
    { label: "Architecture", value: "Landmark", sub: "Visual Monopoly" },
    { label: "Asset Type", value: "Destination", sub: "Experience-Driven" },
    { label: "Revenue", value: "Diversified", sub: "Multi-Vertical" },
    { label: "Exit", value: "Institutional", sub: "Strategic / REIT" },
  ];

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center relative overflow-hidden bg-onyx-950"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          ref={bgRef}
          className={`absolute inset-0 w-full h-[150%] -top-[25%] will-change-transform transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            transform: 'translate3d(0, 0, 0) scale(1.1)',
            backgroundImage: 'url("https://clickpetroleoegas.com.br/wp-content/uploads/2025/12/Torres-gemeas-Katara-custam-600-milhoes-de-dolares-erguem-211-metros-em-Doha-e-abrigam-o-Raffles-Doha-hotel-6-estrelas-so-de-suites-.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.65) saturate(0.9)'
          }}
        >
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-onyx-950/70 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49.5%,rgba(212,175,55,0.03)_50%,transparent_50.5%)] bg-[length:100%_80px] animate-[scanline_20s_linear_infinite] opacity-30"></div>
      </div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gold-500/20 to-transparent pointer-events-none z-10 hidden lg:block"></div>

      <div ref={contentRef} className="container mx-auto relative z-20 text-center lg:text-left will-change-transform">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-10 mb-12">
            <Logo className="w-28 h-28 lg:w-36 lg:h-36 drop-shadow-[0_0_50px_rgba(212,175,55,0.4)] animate-float opacity-0 animate-[fade-in_1s_ease-out_forwards]" />
            <div className="lg:mb-2 text-center lg:text-left overflow-hidden">
              <div className="inline-flex items-center gap-3 px-5 py-2 border border-gold-400/20 bg-gold-400/5 text-gold-300 text-[10px] font-black uppercase tracking-[0.6em] mb-6 backdrop-blur-xl rounded-full mx-auto lg:mx-0 shadow-gold-glow opacity-0 animate-[fade-in-up_1.2s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
                Hospitality-Led Landmark Asset
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

          <h2 className="text-2xl md:text-4xl text-slate-300 font-serif italic mb-12 max-w-4xl opacity-0 animate-[fade-in-up_1.2s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards] leading-tight pr-4">
            A Landmark Hospitality & Experiential Destination. <br/>
            <span className="text-white text-xl md:text-2xl font-sans not-italic font-light mt-4 block text-slate-400">
              An architecturally iconic twin-tower development anchored by a monumental sky-arch, designed to operate as a diversified, high-margin institutional asset.
            </span>
          </h2>

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
                <div className="text-white font-serif text-2xl md:text-3xl lg:text-4xl mb-2 group-hover:text-gold-300 transition-colors drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                   {fact.value}
                </div>
                <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{fact.sub}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 opacity-0 animate-[fade-in-up_1s_cubic-bezier(0.16,1,0.3,1)_1.6s_forwards]">
            <button 
              onClick={onInvestorClick}
              className="group relative px-12 py-6 bg-gold-500 text-onyx-950 rounded-full font-black uppercase tracking-[0.4em] text-[11px] shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:bg-white transition-all duration-500 active:scale-95 flex items-center gap-4"
            >
              <span>Request Investor Access</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.4em] border-b border-white/10 pb-2 hover:border-gold-500">
              <FileText size={16} /> Download Dossier (NDA)
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40 z-20">
        <ChevronDown size={32} className="text-white" />
      </div>
    </section>
  );
};

export default Hero;