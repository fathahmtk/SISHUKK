import React from 'react';
import { Plane, Train, MapPin, Globe, Activity, Scan, ArrowRight } from 'lucide-react';

const LOGISTICS = [
  { id: 'cok', label: 'Cochin Intl (COK)', dist: '78 KM', time: '120 Min', type: 'Air', desc: 'Primary international gateway for global Kerala diaspora.' },
  { id: 'ccj', label: 'Calicut Intl (CCJ)', dist: '95 KM', time: '150 Min', type: 'Air', desc: 'Secondary hub for high-velocity Middle-East traffic.' },
  { id: 'rail', label: 'Rail Node Node', dist: '0.5 KM', time: '02 Min', type: 'Rail', desc: 'Direct access to South Indian metropolitan networks.' },
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

      {/* Telemetry HUD */}
      <div className="absolute top-12 left-12 z-10 space-y-2 opacity-50">
         <div className="flex items-center gap-3 text-gold-500 font-black text-[9px] uppercase tracking-[0.4em]">
            <Globe size={12} /> Logistical_Nexus_v2.5
         </div>
         <div className="text-white text-[7px] font-mono opacity-40 uppercase tracking-widest">
            Origin: SGT_Core // Status: High_Flux
         </div>
      </div>

      <div className="absolute bottom-12 right-12 z-10 text-right opacity-50">
         <div className="text-gold-500 font-black text-[9px] uppercase tracking-[0.4em] mb-2">Transit Capture Index</div>
         <div className="flex items-center justify-end gap-3 text-white text-[11px] font-black uppercase tracking-widest">
            <Activity size={14} className="text-emerald-500 animate-pulse" /> Connectivity: Optimized
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl px-8 flex flex-col items-center">
         <span className="text-gold-500 text-[11px] md:text-[13px] font-black uppercase tracking-[1em] block mb-12">
           Chapter 05 // Global Accessibility
         </span>
         
         <h2 className="text-white font-serif text-6xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter italic font-black mb-16">
           Global <br/>
           <span className="gold-gradient-text not-italic">Nexus.</span>
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-20">
            {LOGISTICS.map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] text-left group/item hover:border-gold-500 transition-all duration-500 hover:-translate-y-4">
                 <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-onyx-950 flex items-center justify-center text-gold-500 shadow-2xl group-hover/item:bg-gold-500 group-hover/item:text-onyx-950 transition-all">
                       {item.type === 'Air' ? <Plane size={24} /> : <Train size={24} />}
                    </div>
                    <div className="text-right">
                       <div className="text-gold-500 font-mono text-xs font-bold leading-none mb-1">{item.dist}</div>
                       <div className="text-[7px] text-white/20 uppercase font-black tracking-widest">{item.time} Arrival</div>
                    </div>
                 </div>
                 <div className="text-[8px] font-black uppercase tracking-widest mb-2 opacity-50">{item.type} Node</div>
                 <div className="text-2xl font-serif italic font-black mb-4 leading-none text-white">{item.label}</div>
                 <p className="text-[11px] leading-relaxed opacity-60 font-light text-slate-300">"{item.desc}"</p>
              </div>
            ))}
         </div>

         <div className="flex items-center gap-8 p-1 px-8 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <span className="text-gold-500 text-[8px] font-black uppercase tracking-[0.5em]">Logistical Flux Rating:</span>
            <div className="flex gap-1.5 py-4">
               {[1,2,3,4,5,6,7,8,9,10].map(dot => (
                  <div key={dot} className={`w-1 h-3 rounded-full ${dot <= 9 ? 'bg-gold-500' : 'bg-white/10'}`}></div>
               ))}
            </div>
            <span className="text-white text-[9px] font-black uppercase tracking-widest ml-4">High Precision Linkage</span>
         </div>
      </div>

      {/* Decorative Scanner HUD */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
    </div>
  );
};

export default Connectivity;