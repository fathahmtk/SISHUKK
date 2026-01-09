import React from 'react';
import { BedDouble, ArrowRight, ShieldCheck, Activity, Star, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheHotel: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-slate-950 overflow-hidden group">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://cdn-imgix.headout.com/tour/34223/TOUR-IMAGE/95a3df68-963d-4966-980b-2223b2909a37-1647432002221.jpg" 
            className="w-full h-full object-cover opacity-25 saturate-[0.1] transition-transform duration-[20s] group-hover:scale-110" 
            alt="Hotel Atrium" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_110%)]"></div>
      </div>

      {/* Telemetry HUD */}
      <div className="absolute top-8 left-6 md:top-12 md:left-12 z-10 space-y-2 opacity-50 hidden sm:block">
         <div className="flex items-center gap-3 text-gold-500 font-black text-[9px] uppercase tracking-[0.4em]">
            <Layers size={12} /> Inventory_Stack_v2.5
         </div>
         <div className="text-white text-[7px] font-mono opacity-40 uppercase tracking-widest">
            Keys: 440 // Cores: 12 Mitsubishi
         </div>
      </div>

      <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-10 text-right opacity-50 hidden sm:block">
         <div className="text-gold-500 font-black text-[9px] uppercase tracking-[0.4em] mb-2">Hospitality Specification Grade</div>
         <div className="flex items-center justify-end gap-3 text-white text-[11px] font-black uppercase tracking-widest">
            <Star size={14} fill="currentColor" className="text-gold-500" /> 7-Star_Benchmark: Validated
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-6xl px-6 md:px-8 flex flex-col items-center">
         <span className="text-gold-500 text-[10px] md:text-[13px] font-black uppercase tracking-[0.8em] md:tracking-[1em] block mb-8 md:mb-12 animate-fade-in">
           Chapter 03 // Inventory Portfolio
         </span>
         
         <h2 className="text-white font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.9] md:leading-[0.8] tracking-tighter italic font-black mb-10 md:mb-16">
           Luxury <br/>
           <span className="gold-gradient-text not-italic">Units.</span>
         </h2>

         <p className="text-slate-200 text-lg md:text-3xl font-light font-editorial italic max-w-4xl leading-relaxed mb-12 md:mb-24 opacity-80 px-4">
           Institutional-grade accommodation. <br className="hidden lg:block"/>
           <span className="text-white font-medium border-b border-gold-500/40 pb-2 md:pb-2 shadow-[0_4px_12px_rgba(212,175,55,0.1)]">A calibrated mix of 440 luxury units designed to serve high-frequency ritual demand.</span>
         </p>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 w-full mb-12 md:mb-20 max-w-5xl">
            {[
              { l: "Tower A Keys", v: "220", s: "Metropolitan Deluxe" },
              { l: "Tower B Keys", v: "200", s: "Sanctuary Residency" },
              { l: "Sovereign Units", v: "20", s: "Presidential Tranche" }
            ].map((stat, i) => (
              <div key={i} className="text-center group/item border-y sm:border-y-0 sm:border-x border-white/5 py-6 sm:px-10">
                 <div className="text-slate-500 text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-3 md:mb-4 group-hover/item:text-gold-500 transition-colors">{stat.l}</div>
                 <div className="text-white font-serif text-3xl md:text-4xl italic font-black mb-1 md:mb-2 leading-none">{stat.v}</div>
                 <div className="text-gold-600 text-[7px] md:text-[8px] uppercase tracking-widest font-black opacity-60">{stat.s}</div>
              </div>
            ))}
         </div>

         <Link to="/hotel" className="group px-12 md:px-14 py-6 md:py-7 bg-white/5 border border-white/20 text-white rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 hover:text-onyx-950 hover:border-gold-500 transition-all active:scale-95 flex items-center gap-4 md:gap-5 backdrop-blur-xl shadow-2xl">
           Inventory Specs <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
         </Link>
      </div>

      {/* Central Axis Line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5 -translate-x-1/2 pointer-events-none hidden sm:block"></div>
    </div>
  );
};

export default TheHotel;