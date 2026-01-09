import React from 'react';
import { Plane, Train, MapPin, Globe, Activity, Scan, ArrowRight } from 'lucide-react';

const LOGISTICS = [
  { id: 'cok', label: 'Cochin Intl (COK)', dist: '78 KM', time: '120 Min', type: 'Air', desc: 'Primary international gateway for global Kerala diaspora.' },
  { id: 'ccj', label: 'Calicut Intl (CCJ)', dist: '95 KM', time: '150 Min', type: 'Air', desc: 'Secondary hub for high-velocity Middle-East traffic.' },
  { id: 'rail', label: 'Rail Node', dist: '0.5 KM', time: '02 Min', type: 'Rail', desc: 'Direct access to South Indian metropolitan networks.' },
];

const Connectivity: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-slate-950 overflow-hidden group">
      
      {/* Background Layer: Logistical Network */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#D4AF37 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
         <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
         {/* Pulsing Signal Circles */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] border border-gold-500/10 rounded-full animate-pulse-slow"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vh] h-[50vh] border border-gold-500/5 rounded-full animate-pulse"></div>
      </div>

      {/* Telemetry HUD - Hidden on small screens */}
      <div className="absolute top-12 left-12 z-10 space-y-2 opacity-50 hidden md:block">
         <div className="flex items-center gap-3 text-gold-500 font-black text-[9px] uppercase tracking-[0.4em]">
            <Globe size={12} /> Logistical_Nexus_v2.5
         </div>
         <div className="text-white text-[7px] font-mono opacity-40 uppercase tracking-widest">
            Origin: SGT_Core // Status: High_Flux
         </div>
      </div>

      <div className="absolute bottom-12 right-12 z-10 text-right opacity-50 hidden md:block">
         <div className="text-gold-500 font-black text-[9px] uppercase tracking-[0.4em] mb-2">Transit Capture Index</div>
         <div className="flex items-center justify-end gap-3 text-white text-[11px] font-black uppercase tracking-widest">
            <Activity size={14} className="text-emerald-500 animate-pulse" /> Connectivity: Optimized
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl px-6 md:px-8 flex flex-col items-center w-full">
         <span className="text-gold-500 text-[9px] md:text-[13px] font-black uppercase tracking-[0.8em] md:tracking-[1em] block mb-6 md:mb-12">
           Chapter 05 // Global Accessibility
         </span>
         
         <h2 className="text-white font-serif text-5xl md:text-9xl lg:text-[10rem] leading-[0.9] md:leading-[0.8] tracking-tighter italic font-black mb-10 md:mb-16">
           Global <br/>
           <span className="gold-gradient-text not-italic">Nexus.</span>
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full mb-12 md:mb-20 max-w-5xl md:max-w-none overflow-y-auto max-h-[40vh] md:max-h-none no-scrollbar">
            {LOGISTICS.map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] text-left group/item hover:border-gold-500 transition-all duration-500 hover:md:-translate-y-4">
                 <div className="flex justify-between items-start mb-6 md:mb-8">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-onyx-950 flex items-center justify-center text-gold-500 shadow-2xl group-hover/item:bg-gold-500 group-hover/item:text-onyx-950 transition-all">
                       {item.type === 'Air' ? <Plane size={20} className="md:size-6" /> : <Train size={20} className="md:size-6" />}
                    </div>
                    <div className="text-right">
                       <div className="text-gold-500 font-mono text-[10px] md:text-xs font-bold leading-none mb-1">{item.dist}</div>
                       <div className="text-[7px] text-white/20 uppercase font-black tracking-widest">{item.time} Arrival</div>
                    </div>
                 </div>
                 <div className="text-[7px] md:text-[8px] font-black uppercase tracking-widest mb-1 md:mb-2 opacity-50">{item.type} Node</div>
                 <div className="text-xl md:text-2xl font-serif italic font-black mb-2 md:mb-4 leading-none text-white">{item.label}</div>
                 <p className="text-[9px] md:text-[11px] leading-relaxed opacity-60 font-light text-slate-300">"{item.desc}"</p>
              </div>
            ))}
         </div>

         <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 p-4 md:p-1 md:px-8 bg-white/5 border border-white/10 rounded-3xl md:rounded-full backdrop-blur-md">
            <span className="text-gold-500 text-[7px] md:text-[8px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em]">Logistical Flux Rating:</span>
            <div className="flex gap-1 md:gap-1.5 py-1 md:py-4">
               {[1,2,3,4,5,6,7,8,9,10].map(dot => (
                  <div key={dot} className={`w-1 h-2 md:h-3 rounded-full ${dot <= 9 ? 'bg-gold-500' : 'bg-white/10'}`}></div>
               ))}
            </div>
            <span className="text-white text-[8px] md:text-[9px] font-black uppercase tracking-widest">High Precision Linkage</span>
         </div>
      </div>

      {/* Decorative Scanner HUD */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
    </div>
  );
};

export default Connectivity;