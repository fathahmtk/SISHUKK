import React from 'react';
import { ArrowUpRight, ArrowRight, Landmark, Briefcase, Activity, Rocket, Globe, Scan } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExitStrategy: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-[#05070A] overflow-hidden group">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-20 saturate-0 grayscale brightness-[0.4] transition-transform duration-[20s] group-hover:scale-110" 
            alt="Liquidity Horizon" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-transparent to-onyx-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#05070A_110%)]"></div>
      </div>

      {/* Telemetry HUD */}
      <div className="absolute top-8 left-6 md:top-12 md:left-12 z-10 space-y-3 opacity-40 hidden sm:block">
         <div className="flex items-center gap-4 text-brass-200 font-black text-[9px] uppercase tracking-[0.5em]">
            <Rocket size={14} /> Realization_Window_v2.5
         </div>
         <div className="text-white text-[7px] font-mono opacity-50 uppercase tracking-widest">
            Cycle: 7-Year // Status: REIT-Ready
         </div>
      </div>

      <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-10 text-right opacity-40 hidden sm:block">
         <div className="text-brass-200 font-black text-[9px] uppercase tracking-[0.5em] mb-3">Liquidity Pathway Mapping</div>
         <div className="flex items-center justify-end gap-3 text-white text-[11px] font-black uppercase tracking-widest">
            <Activity size={16} className="text-emerald-500 animate-pulse" /> Target_MOIC: 3.5x_Stabilized
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-7xl px-6 md:px-8 flex flex-col items-center">
         <span className="text-brass-400 text-[11px] md:text-[15px] font-black uppercase tracking-[1.2em] block mb-8 md:mb-16 animate-fade-in">
           Chapter 13 // Value Realization
         </span>
         
         <h2 className="text-white font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.9] md:leading-[0.8] tracking-tighter italic font-black mb-10 md:mb-16">
           Liquidity <br/>
           <span className="gold-gradient-text not-italic">Event.</span>
         </h2>

         <p className="text-slate-300 text-lg md:text-3xl font-light font-editorial italic max-w-5xl leading-relaxed mb-12 md:mb-28 opacity-90 px-4">
           Institutional exit clarity. <br className="hidden lg:block"/>
           <span className="text-white font-medium border-b border-brass-400/40 pb-3 shadow-brass-glow">A technical architecture pre-calibrated for acquisition by Tier-1 Indian or Global REIT platforms.</span>
         </p>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 w-full mb-12 md:mb-24 max-w-5xl">
            {[
              { l: "Exit Horizon", v: "Y7-Y8", s: "Stabilization Cycle" },
              { l: "Acquisition Target", v: "Tier-1", s: "Institutional REIT" },
              { l: "EBITDA Multiple", v: "12.5x", s: "Trophy Asset Class" }
            ].map((stat, i) => (
              <div key={i} className="text-center group/item border-y sm:border-y-0 sm:border-x border-white/5 py-10 transition-all duration-700 hover:bg-white/5 rounded-[2rem]">
                 <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-4 group-hover/item:text-brass-200 transition-colors">{stat.l}</div>
                 <div className="text-white font-serif text-4xl md:text-5xl lg:text-6xl italic font-black mb-1 md:mb-2 leading-none">{stat.v}</div>
                 <div className="text-brass-400/60 text-[8px] font-black uppercase tracking-widest opacity-60">{stat.s}</div>
              </div>
            ))}
         </div>

         <Link to="/exit" className="group px-12 md:px-20 py-7 md:py-9 bg-white/5 border border-white/10 text-white rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] hover:bg-brass-400 hover:text-onyx-950 transition-all active:scale-95 flex items-center gap-6 backdrop-blur-xl shadow-premium">
           Exit Pathways <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
         </Link>
      </div>

      {/* Background Central Crosshair */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-5 hidden sm:flex items-center justify-center">
         <div className="w-[1px] h-32 md:h-64 bg-brass-200"></div>
         <div className="h-[1px] w-32 md:h-64 bg-brass-200"></div>
      </div>
    </div>
  );
};

export default ExitStrategy;