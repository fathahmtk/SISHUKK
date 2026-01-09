import React from 'react';
import { CheckCircle2, Maximize2, ShieldCheck, Activity, Layers, ArrowRight, ScanLine, Box } from 'lucide-react';

const Configuration: React.FC = () => {
  const specs = [
    { label: "Vertical Structure", value: "Twin Cylindrical Towers" },
    { label: "Structural Link", value: "Level 15 Steel Skybridge" },
    { label: "Apex Feature", value: "Dual Revolving Crowns (L20)" },
    { label: "Base Platform", value: "3-Level Grand Podium" },
    { label: "Facade System", value: "Unitized DGU with Fins" },
    { label: "Core Layout", value: "Central Circular Service Core" },
  ];

  return (
    <section id="config" className="py-64 bg-[#FDFBF7] text-slate-900 relative overflow-hidden border-t border-slate-100">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex flex-wrap gap-20 font-mono text-[8px] p-20 leading-none text-slate-900">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="max-w-[150px] overflow-hidden whitespace-nowrap">BIM_LEVEL_300 // STRUCTURAL_MESH // SYMMETRY_CORE_V2.5 // TWIN_TOWER_DATUM</div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          
          <div className="lg:col-span-5 space-y-16 order-2 lg:order-1">
            <div className="space-y-12">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-[1px] bg-gold-500"></div>
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.6em]">Chapter 03: Asset Configuration</span>
               </div>
               <h2 className="font-serif text-6xl md:text-8xl text-slate-950 leading-[0.8] tracking-tighter italic">Twin <br/><span className="gold-gradient-text not-italic font-black">Monoliths.</span></h2>
               <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-xl italic">
                  "Architecture is our primary yield multiplier. Two symmetrical cylindrical towers anchored by a podium and connected by a signature steel sky-link."
               </p>
            </div>

            <div className="grid grid-cols-1 gap-10">
              {specs.map((spec, index) => (
                <div key={index} className="flex items-center justify-between border-b border-slate-200 pb-8 group cursor-default">
                   <div className="flex items-center gap-8">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm">
                         <Box size={20} />
                      </div>
                      <div>
                        <div className="text-[9px] text-slate-400 uppercase tracking-widest mb-1 font-black">{spec.label}</div>
                        <div className="text-2xl font-serif text-slate-950 group-hover:text-gold-600 transition-colors italic leading-none">{spec.value}</div>
                      </div>
                   </div>
                   <ArrowRight size={18} className="text-slate-200 group-hover:text-gold-500 transition-colors opacity-0 group-hover:opacity-100 group-hover:translate-x-2" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
             <div className="relative h-[950px] w-full group overflow-hidden rounded-[5rem] shadow-[0_60px_120px_rgba(0,0,0,0.15)] border border-slate-200 bg-slate-50">
                {/* HUD Elements */}
                <div className="absolute inset-0 z-20 pointer-events-none p-12">
                   <div className="w-full h-full border border-gold-500/10 rounded-[4rem] relative">
                      <div className="absolute top-10 right-10 bg-slate-950/90 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full text-white text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl flex items-center gap-4">
                         <Activity size={14} className="text-gold-500 animate-pulse" /> Active Node: TWIN-CORE
                      </div>
                      
                      {/* Floating Technical Tags */}
                      <div className="absolute top-[25%] left-[20%] flex flex-col items-center animate-bounce-slow">
                         <div className="w-4 h-4 rounded-full bg-gold-500 shadow-[0_0_25px_#D4AF37] border-2 border-white"></div>
                         <div className="mt-4 bg-slate-950/95 backdrop-blur-xl px-6 py-3 rounded-2xl text-[9px] text-white font-black uppercase tracking-widest whitespace-nowrap shadow-3xl border border-white/10">Tower A: Transient Core</div>
                      </div>
                      <div className="absolute top-[25%] right-[20%] flex flex-col items-center animate-bounce-slow [animation-delay:1.5s]">
                         <div className="w-4 h-4 rounded-full bg-gold-500 shadow-[0_0_25px_#D4AF37] border-2 border-white"></div>
                         <div className="mt-4 bg-slate-950/95 backdrop-blur-xl px-6 py-3 rounded-2xl text-[9px] text-white font-black uppercase tracking-widest whitespace-nowrap shadow-3xl border border-white/10">Tower B: Residential Core</div>
                      </div>
                      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce-slow [animation-delay:0.75s]">
                         <div className="w-4 h-4 rounded-full bg-gold-500 shadow-[0_0_25px_#D4AF37] border-2 border-white"></div>
                         <div className="mt-4 bg-slate-950/95 backdrop-blur-xl px-6 py-3 rounded-2xl text-[9px] text-white font-black uppercase tracking-widest whitespace-nowrap shadow-3xl border border-white/10">The Grand Podium Base</div>
                      </div>
                   </div>
                </div>

                <img 
                  src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
                  alt="Sirshukk Architecture" 
                  className="w-full h-full object-cover transition-all duration-[10s] group-hover:scale-105 brightness-[1.02] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-80 group-hover:opacity-30 transition-opacity duration-1000"></div>
                
                <div className="absolute bottom-16 left-16 right-16 p-12 bg-white/80 backdrop-blur-3xl border border-white rounded-[4rem] shadow-3xl transform translate-y-6 group-hover:translate-y-0 transition-transform duration-1000">
                  <div className="flex items-center justify-between mb-10">
                     <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-3xl bg-slate-950 flex items-center justify-center text-gold-500 shadow-2xl">
                           <ShieldCheck size={36} />
                        </div>
                        <div>
                           <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] block mb-2">Configuration Audit</span>
                           <h3 className="text-slate-950 font-serif italic text-4xl leading-none font-black">"Symmetry as a Service"</h3>
                        </div>
                     </div>
                     <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono font-black text-gold-600">GSF: 350,000</span>
                        <span className="text-[10px] font-mono font-black text-slate-400">STATUS: APPROVED</span>
                     </div>
                  </div>
                  <div className="h-px w-full bg-slate-200 mb-10"></div>
                  <div className="flex justify-between items-center text-slate-500 text-[10px] uppercase tracking-[0.5em] font-black italic">
                     <span>Approved Asset Schematic v.2.5</span>
                     <div className="flex items-center gap-3 text-gold-600">
                        <ScanLine size={16} className="animate-pulse" /> SCANNING CORE
                     </div>
                  </div>
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