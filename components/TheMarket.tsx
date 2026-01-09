import React from 'react';
import { Target, ArrowRight, Globe, TrendingUp, Scan, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheMarket: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-slate-950 overflow-hidden group">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-20 saturate-[0.2] transition-transform duration-[20s] group-hover:scale-110" 
            alt="Pilgrimage Market" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_110%)]"></div>
      </div>

      {/* Telemetry HUD */}
      <div className="absolute top-8 right-6 md:top-12 md:right-12 z-10 text-right space-y-2 opacity-50 hidden sm:block">
         <div className="flex items-center justify-end gap-3 text-gold-500 font-black text-[9px] uppercase tracking-[0.4em]">
            Market_Void_Index <Target size={12} />
         </div>
         <div className="text-white text-[7px] font-mono opacity-40 uppercase tracking-widest">
            Annual: 12.5M+ Verified
         </div>
      </div>

      <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 z-10 space-y-2 opacity-50 hidden sm:block">
         <div className="text-gold-500 font-black text-[9px] uppercase tracking-[0.4em] mb-2">Demand Recurrence Pattern</div>
         <div className="flex items-center gap-3 text-white text-[11px] font-black uppercase tracking-widest">
            <TrendingUp size={14} className="text-emerald-500 animate-pulse" /> Stability: Inelastic_Alpha
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-6xl px-6 md:px-8 flex flex-col items-center">
         <span className="text-gold-500 text-[10px] md:text-[13px] font-black uppercase tracking-[0.8em] md:tracking-[1em] block mb-8 md:mb-12 animate-fade-in">
           Chapter 02 // The Ritual Economy
         </span>
         
         <h2 className="text-white font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.9] md:leading-[0.8] tracking-tighter italic font-black mb-10 md:mb-16">
           Ritual <br/>
           <span className="gold-gradient-text not-italic">Engine.</span>
         </h2>

         <p className="text-slate-200 text-lg md:text-3xl font-light font-editorial italic max-w-4xl leading-relaxed mb-12 md:mb-24 opacity-80 px-4">
           Demand is faith-driven and non-cyclical. <br className="hidden lg:block"/>
           <span className="text-white font-medium border-b border-gold-500/40 pb-2">Guruvayur represents an inelastic capital engine with 100% first-mover status.</span>
         </p>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 w-full mb-12 md:mb-20 max-w-5xl">
            {[
              { l: "Annual Traffic", v: "12 Million", s: "HNW Segment Focus" },
              { l: "Daily Events", v: "250+", s: "Captive Wedding Base" },
              { l: "Branded Competition", v: "0.0%", s: "Within 10km Radius" }
            ].map((stat, i) => (
              <div key={i} className="text-center group/item border-y sm:border-y-0 sm:border-x border-white/5 py-6 sm:px-10">
                 <div className="text-slate-500 text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-3 md:mb-4 group-hover/item:text-gold-500 transition-colors">{stat.l}</div>
                 <div className="text-white font-serif text-3xl md:text-4xl italic font-black mb-1 md:mb-2 leading-none">{stat.v}</div>
                 <div className="text-gold-600 text-[7px] md:text-[8px] uppercase tracking-widest font-black opacity-60">{stat.s}</div>
              </div>
            ))}
         </div>

         <Link to="/market" className="group px-12 md:px-14 py-6 md:py-7 bg-white/5 border border-white/20 text-white rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 hover:text-onyx-950 hover:border-gold-500 transition-all active:scale-95 flex items-center gap-4 md:gap-5 backdrop-blur-xl shadow-2xl">
           Market Analysis <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
         </Link>
      </div>

      {/* Technical Scan Frame */}
      <div className="absolute inset-10 md:inset-20 pointer-events-none border border-white/5 opacity-20"></div>
    </div>
  );
};

export default TheMarket;