import React from 'react';
import { CheckCircle2, Maximize2, ShieldCheck, Activity, Layers, ArrowRight } from 'lucide-react';

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
    <section id="config" className="py-64 bg-white text-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          
          <div className="lg:col-span-5 space-y-16 order-2 lg:order-1">
            <div className="space-y-12">
               <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-200 rounded-full bg-gold-50/50 shadow-sm">
                  <Layers size={14} className="text-gold-600" />
                  <span className="text-gold-600 uppercase text-[10px] font-black tracking-[0.6em]">Chapter 03: Asset Configuration</span>
               </div>
               <h2 className="font-serif text-6xl md:text-8xl text-slate-950 leading-[0.8] tracking-tighter italic">Designed as <br/><span className="gold-gradient-text not-italic font-black">A Place.</span></h2>
               <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-xl italic">
                  "Architecture is our primary commercial engine. Twin symmetrical towers anchored by a signature arch designed for high-end brand activations."
               </p>
            </div>

            <div className="grid grid-cols-1 gap-10">
              {specs.map((spec, index) => (
                <div key={index} className="flex items-center justify-between border-b border-slate-100 pb-8 group">
                   <div className="flex items-center gap-8">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm">
                         <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <div className="text-[9px] text-slate-400 uppercase tracking-widest mb-1 font-black">{spec.label}</div>
                        <div className="text-2xl font-serif text-slate-950 group-hover:text-gold-600 transition-colors italic">{spec.value}</div>
                      </div>
                   </div>
                   <ArrowRight size={18} className="text-slate-200 group-hover:text-gold-500 transition-colors opacity-0 group-hover:opacity-100 group-hover:translate-x-2" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
             <div className="relative h-[900px] w-full group overflow-hidden rounded-[5rem] shadow-3xl border border-slate-100 bg-slate-50">
                {/* HUD Elements */}
                <div className="absolute inset-0 z-20 pointer-events-none p-12">
                   <div className="w-full h-full border border-gold-500/20 rounded-[4rem] relative">
                      <div className="absolute top-10 right-10 bg-white/80 backdrop-blur-xl border border-gold-200 px-8 py-4 rounded-full text-slate-900 text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl flex items-center gap-4">
                         <Activity size={14} className="text-gold-500 animate-pulse" /> Active Node: ALPHA-2
                      </div>
                      
                      {/* Floating Technical Tags */}
                      <div className="absolute top-[20%] left-[20%] flex flex-col items-center animate-bounce-slow">
                         <div className="w-3 h-3 rounded-full bg-gold-500 shadow-[0_0_20px_#D4AF37]"></div>
                         <div className="mt-4 bg-slate-950/90 backdrop-blur-xl px-5 py-2.5 rounded-xl text-[8px] text-white font-black uppercase tracking-widest whitespace-nowrap shadow-3xl">Core A: Residental</div>
                      </div>
                      <div className="absolute top-[20%] right-[20%] flex flex-col items-center animate-bounce-slow [animation-delay:1.5s]">
                         <div className="w-3 h-3 rounded-full bg-gold-500 shadow-[0_0_20px_#D4AF37]"></div>
                         <div className="mt-4 bg-slate-950/90 backdrop-blur-xl px-5 py-2.5 rounded-xl text-[8px] text-white font-black uppercase tracking-widest whitespace-nowrap shadow-3xl">Core B: Event/Key</div>
                      </div>
                   </div>
                </div>

                <img 
                  src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
                  alt="Sirshukk Architecture" 
                  className="w-full h-full object-cover transition-all duration-[8s] group-hover:scale-110 brightness-[1.05] contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                
                <div className="absolute bottom-16 left-16 right-16 p-12 bg-white/70 backdrop-blur-3xl border border-white/50 rounded-[4rem] shadow-3xl transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-center gap-6 mb-6">
                     <ShieldCheck size={36} className="text-gold-600" />
                     <div>
                        <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.5em] block mb-1">Configuration Audit</span>
                        <p className="text-gold-600 font-serif italic text-4xl leading-none font-black">"Visual Scarcity Engine"</p>
                     </div>
                  </div>
                  <p className="text-slate-500 text-[10px] uppercase tracking-[0.5em] font-black italic border-t border-slate-200 pt-6">Approved Asset Schematic v.2.5</p>
                </div>
             </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes bounce-slow {
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Configuration;