import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

interface HeroProps {
  onInvestorClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInvestorClick }) => {
  const facts = [
    { label: "Project Cost", value: "₹350 Cr", sub: "Hotel Only" },
    { label: "Land Asset", value: "1.29 Acres", sub: "Secured & Paid" },
    { label: "Location", value: "Guruvayur", sub: "Kerala, India" },
    { label: "Inventory", value: "~200 Keys", sub: "Luxury Configuration" },
    { label: "Revenue Model", value: "Event-Led", sub: "Non-Seasonal" },
    { label: "Status", value: "Active", sub: "Investor-Ready" },
  ];

  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/80 to-onyx-950/40"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1.5 border border-gold-500 text-gold-500 text-[9px] font-black uppercase tracking-[0.3em] mb-8">
            Confidential Investment Memorandum
          </div>
          
          <h1 className="text-white font-display text-5xl md:text-7xl lg:text-9xl leading-[0.85] tracking-tight mb-6">
            SIRSHUKK <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 drop-shadow-[0_0_35px_rgba(197,160,89,0.5)]">GRAND TOWERS</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-white font-serif italic mb-8 opacity-90 leading-tight">
            A landmark, event-led hospitality asset designed for institutional capital.
          </h2>

          <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed max-w-2xl mb-12 border-l border-gold-500/50 pl-6">
            SIRSHUKK GRAND TOWERS is a twin-tower, ultra-luxury hotel development conceived as a vertical destination asset, delivering a 7-star experiential standard within a 5-star compliant operational framework.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {facts.map((fact, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-4 backdrop-blur-sm hover:border-gold-500/50 transition-colors">
                <div className="text-gold-500 text-[10px] uppercase font-black tracking-widest mb-2">{fact.label}</div>
                <div className="text-white font-serif text-xl md:text-2xl mb-1">{fact.value}</div>
                <div className="text-slate-500 text-[9px] uppercase tracking-wider">{fact.sub}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-6">
            <button 
              onClick={() => document.getElementById('asset')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gold-500 hover:bg-white text-black px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 transition-all"
            >
              View Investment Logic <ArrowRight size={14} />
            </button>
            <button 
              onClick={() => onInvestorClick ? onInvestorClick() : document.getElementById('investor-access')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border border-white/20 hover:border-gold-500 text-white hover:text-gold-500 px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 transition-all"
            >
              Investor Discussion <FileText size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;