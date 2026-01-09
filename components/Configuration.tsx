import React from 'react';
import { CheckCircle2, Maximize2, ShieldCheck, Activity } from 'lucide-react';

const Configuration: React.FC = () => {
  const specs = [
    { label: "Vertical Structure", value: "Symmetrical Twin Towers" },
    { label: "Signature Element", value: "Monumental Central Arch" },
    { label: "Sky Experiences", value: "Viewing Decks & Installations" },
    { label: "Arrival Sequence", value: "Grand Podium & Water Body" },
    { label: "Landscape", value: "Event-Ready Grounds" },
    { label: "Positioning", value: "Luxury Visual Reinforcement" },
  ];

  return (
    <section id="config" className="py-32 bg-onyx-950 text-white relative overflow-hidden border-t border-white/5">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/2 space-y-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold-500/30 rounded-full bg-gold-500/5 mb-2">
            <Maximize2 size={12} className="text-gold-500" />
            <span className="text-gold-400 uppercase text-[9px] font-bold tracking-[0.2em]">Asset Configuration</span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl text-white leading-none tracking-tighter italic">Designed as <br/><span className="gold-gradient-text">A Place.</span></h2>
          <p className="text-slate-400 text-xl font-light leading-relaxed border-l border-gold-500/30 pl-10 max-w-xl">
            Twin symmetrical high-rise towers with upper-level crown features, anchored by an architectural signature arch designed for brand activations and sky experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            {specs.map((spec, index) => (
              <div key={index} className="flex items-start space-x-5 border-b border-white/5 pb-6 group">
                <CheckCircle2 className="text-gold-500 shrink-0 mt-1 group-hover:scale-125 transition-transform" size={18} />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-black">{spec.label}</div>
                  <div className="text-xl font-serif text-slate-100 group-hover:text-gold-300 transition-colors leading-tight">{spec.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 relative h-[800px] w-full group overflow-hidden rounded-[4rem] shadow-3xl border border-white/10">
           {/* Visual Scan Effect Overlay */}
           <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gold-500/50 shadow-[0_0_20px_#D4AF37] animate-[scan_6s_linear_infinite]"></div>
              
              {/* Contextual Hotspots matching the actual photo features */}
              <div className="absolute top-[8%] left-[26%] flex flex-col items-center">
                 <div className="w-4 h-4 rounded-full bg-gold-500/40 border border-gold-500 animate-pulse"></div>
                 <div className="mt-3 bg-onyx-950/90 backdrop-blur-xl px-4 py-2 border border-gold-500/30 rounded-lg text-[9px] text-gold-500 font-black uppercase tracking-widest whitespace-nowrap shadow-2xl">Twin Tower A</div>
              </div>
              <div className="absolute top-[8%] left-[74%] flex flex-col items-center">
                 <div className="w-4 h-4 rounded-full bg-gold-500/40 border border-gold-500 animate-pulse [animation-delay:2s]"></div>
                 <div className="mt-3 bg-onyx-950/90 backdrop-blur-xl px-4 py-2 border border-gold-500/30 rounded-lg text-[9px] text-gold-500 font-black uppercase tracking-widest whitespace-nowrap shadow-2xl">Twin Tower B</div>
              </div>
              <div className="absolute top-[45%] left-[50%] -translate-x-1/2 flex flex-col items-center">
                 <div className="w-6 h-6 rounded-full bg-gold-500/20 border border-gold-500 animate-pulse [animation-delay:1s]"></div>
                 <div className="mt-3 bg-onyx-950/90 backdrop-blur-xl px-4 py-2 border border-gold-500/30 rounded-lg text-[9px] text-gold-500 font-black uppercase tracking-widest whitespace-nowrap shadow-2xl tracking-[0.4em]">Monumental Sky Arch</div>
              </div>
           </div>

           <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            alt="Sirshukk Twin Towers Configuration" 
            className="w-full h-full object-cover transition-all duration-[4s] ease-in-out group-hover:scale-105 brightness-[0.55] group-hover:brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-transparent to-transparent opacity-80"></div>
          
          <div className="absolute top-12 right-12">
             <div className="flex items-center gap-3 bg-onyx-950/60 backdrop-blur-2xl border border-white/10 px-6 py-3 rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em] shadow-3xl">
                <Activity size={14} className="text-gold-500 animate-pulse" /> Asset Class: Destination
             </div>
          </div>

          <div className="absolute bottom-12 left-12 right-12">
            <div className="flex items-center gap-4 mb-4">
               <ShieldCheck size={24} className="text-gold-500" />
               <span className="text-white text-[11px] font-black uppercase tracking-[0.5em] opacity-60">Verified Configuration</span>
            </div>
            <p className="text-gold-400 font-serif italic text-4xl mb-4 leading-none">"Not Just a Building"</p>
            <p className="text-slate-500 text-[10px] uppercase tracking-[0.5em] font-black">Designed as a place for global engagement.</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100px); }
          100% { transform: translateY(800px); }
        }
      `}</style>
    </section>
  );
};

export default Configuration;