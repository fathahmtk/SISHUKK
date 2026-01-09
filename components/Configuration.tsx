import React from 'react';
import { ShieldCheck, Activity, Box, ArrowRight, ScanLine } from 'lucide-react';

const Configuration: React.FC = () => {
  const specs = [
    { label: "Structure", value: "Twin Cylindrical Towers" },
    { label: "Nexus Link", value: "Level 15 Steel Skybridge" },
    { label: "Apex Feature", value: "Dual Revolving Crowns" },
    { label: "Base Platform", value: "3-Level Grand Podium" },
    { label: "Facade", value: "Unitized DGU System" },
  ];

  return (
    <section id="config" className="py-20 bg-[#FDFBF7] text-slate-900 relative overflow-hidden border-t border-slate-100 h-screen flex items-center">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex flex-wrap gap-20 font-mono text-[8px] p-20 leading-none text-slate-900">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i}>BIM_STRUCTURAL_MESH // SYMMETRY_CORE_V2.5</div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-[1px] bg-gold-500"></div>
                  <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.6em]">Chapter 03: Asset Configuration</span>
               </div>
               <h2 className="font-serif text-5xl md:text-7xl text-slate-950 leading-[0.8] tracking-tighter italic">Twin <br/><span className="gold-gradient-text not-italic font-black">Monoliths.</span></h2>
               <p className="text-slate-500 text-xl font-light leading-relaxed border-l-2 border-gold-400 pl-10 max-w-xl italic">
                  Architecture is our primary multiplier. Twin towers rise from a podium connected by a signature sky-link.
               </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {specs.map((spec, index) => (
                <div key={index} className="flex items-center justify-between border-b border-slate-200 pb-5 group cursor-default">
                   <div className="flex items-center gap-6">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm">
                         <Box size={18} />
                      </div>
                      <div>
                        <div className="text-[8px] text-slate-400 uppercase tracking-widest font-black">{spec.label}</div>
                        <div className="text-xl font-serif text-slate-950 group-hover:text-gold-600 transition-colors italic leading-none">{spec.value}</div>
                      </div>
                   </div>
                   <ArrowRight size={14} className="text-gold-500 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 h-[700px]">
             <div className="relative h-full w-full group overflow-hidden rounded-[4rem] shadow-3xl border border-slate-200 bg-slate-50">
                {/* HUD Elements */}
                <div className="absolute inset-0 z-20 pointer-events-none p-10">
                   <div className="w-full h-full border border-gold-500/5 rounded-[3rem] relative">
                      <div className="absolute top-8 right-8 bg-slate-950/90 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full text-white text-[9px] font-black uppercase tracking-[0.4em] shadow-2xl flex items-center gap-3">
                         <Activity size={12} className="text-gold-500 animate-pulse" /> Active Node: TWIN-CORE
                      </div>
                   </div>
                </div>

                <img 
                  src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
                  alt="Architecture" 
                  className="w-full h-full object-cover transition-all duration-[10s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent opacity-80 transition-opacity"></div>
                
                <div className="absolute bottom-10 left-10 right-10 p-10 bg-white/80 backdrop-blur-2xl border border-white rounded-[3rem] shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                     <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center text-gold-500 shadow-xl">
                           <ShieldCheck size={28} />
                        </div>
                        <div>
                           <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.5em] block mb-1">Configuration Audit</span>
                           <h3 className="text-slate-950 font-serif italic text-3xl leading-none font-black">"Symmetry as a Service"</h3>
                        </div>
                     </div>
                     <div className="text-right">
                        <span className="text-[9px] font-mono font-black text-gold-600 block">GSF: 350,000</span>
                        <div className="flex items-center gap-2 text-gold-600 text-[8px] font-black uppercase mt-1">
                           <ScanLine size={12} className="animate-pulse" /> SECURE_CORE
                        </div>
                     </div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Configuration;