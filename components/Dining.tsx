import React from 'react';
import { Compass, Star, ArrowRight, Activity, Scan, RotateCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dining: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-slate-950 overflow-hidden group">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-30 transition-transform duration-[20s] group-hover:scale-110" 
            alt="Gastronomy" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_110%)]"></div>
      </div>

      {/* Telemetry HUD */}
      <div className="absolute top-12 left-12 z-10 space-y-2 opacity-50">
         <div className="flex items-center gap-3 text-gold-500 font-black text-[9px] uppercase tracking-[0.4em]">
            <RotateCw size={12} /> Gastronomy_Core_v1.0
         </div>
         <div className="text-white text-[7px] font-mono opacity-40 uppercase tracking-widest">
            Type: Dual_Revolving // Datum: Lvl 20
         </div>
      </div>

      <div className="absolute bottom-12 right-12 z-10 text-right opacity-50">
         <div className="text-gold-500 font-black text-[9px] uppercase tracking-[0.4em] mb-2">High Altitude Capture</div>
         <div className="flex items-center justify-end gap-3 text-white text-[11px] font-black uppercase tracking-widest">
            <Activity size={14} className="text-emerald-500 animate-pulse" /> Yield_Alpha: Validated
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl px-8 flex flex-col items-center">
         <span className="text-gold-500 text-[11px] md:text-[13px] font-black uppercase tracking-[1em] block mb-12 animate-fade-in">
           Chapter 05 // Gastronomy Portfolio
         </span>
         
         <h2 className="text-white font-serif text-6xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter italic font-black mb-16">
           Orbit <br/>
           <span className="gold-gradient-text not-italic">Crowns.</span>
         </h2>

         <p className="text-slate-200 text-xl md:text-3xl font-light font-editorial italic max-w-4xl leading-relaxed mb-24 opacity-80">
           Two independent revolving platforms. <br className="hidden lg:block"/>
           <span className="text-white font-medium border-b border-gold-500/40 pb-2">German-engineered vibration-free dynamics providing 360-degree spiritual and coastal vistas.</span>
         </p>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-20">
            {[
              { l: "Cycle Time", v: "60 Min", s: "360° Perspective" },
              { l: "Altitude", v: "75.0M", s: "Highest Regional Hub" },
              { l: "Yield Class", v: "USP Core", s: "Non-Resident Driver" }
            ].map((stat, i) => (
              <div key={i} className="text-center group/item border-x border-white/5 px-10">
                 <div className="text-slate-500 text-[8px] font-black uppercase tracking-widest mb-4 group-hover/item:text-gold-500 transition-colors">{stat.l}</div>
                 <div className="text-white font-serif text-4xl italic font-black mb-2 leading-none">{stat.v}</div>
                 <div className="text-gold-600 text-[8px] uppercase tracking-widest font-black opacity-60">{stat.s}</div>
              </div>
            ))}
         </div>

         <Link to="/dining" className="group px-14 py-7 bg-white/5 border border-white/20 text-white rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 hover:text-onyx-950 hover:border-gold-500 transition-all active:scale-95 flex items-center gap-5 backdrop-blur-xl shadow-2xl">
           Inspect Concepts <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
         </Link>
      </div>

      {/* Vector HUD lines */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-10">
         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></div>
         <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white"></div>
      </div>
    </div>
  );
};

export default Dining;