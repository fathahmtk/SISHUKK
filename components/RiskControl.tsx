import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Scale, Landmark, Zap, Search, Activity, Scan } from 'lucide-react';
import { Link } from 'react-router-dom';

const RiskControl: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-[#05070A] overflow-hidden group">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1512418490979-92798ccc1380?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-20 brightness-[0.5] saturate-0 transition-transform duration-[20s] group-hover:scale-110" 
            alt="Risk Audit" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-transparent to-onyx-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#05070A_110%)]"></div>
      </div>

      {/* Telemetry HUD */}
      <div className="absolute top-8 right-6 md:top-12 md:right-12 z-10 text-right space-y-3 opacity-40">
         <div className="flex items-center justify-end gap-4 text-brass-200 font-black text-[9px] uppercase tracking-[0.5em]">
            Downside_Hedge_Index <ShieldCheck size={14} />
         </div>
         <div className="text-white text-[7px] font-mono opacity-50 uppercase tracking-widest hidden sm:block">
            Exposure: Minimal // Title: Freehold
         </div>
      </div>

      <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 z-10 space-y-3 opacity-40">
         <div className="text-brass-200 font-black text-[9px] uppercase tracking-[0.5em] mb-3">Capital Safeguard Protocol</div>
         <div className="flex items-center gap-4 text-white text-[11px] font-black uppercase tracking-widest">
            <Activity size={16} className="text-emerald-500 animate-pulse" /> Insulation: Asset-Heavy_Security
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-7xl px-6 md:px-8 flex flex-col items-center">
         <span className="text-brass-400 text-[11px] md:text-[15px] font-black uppercase tracking-[1.2em] block mb-8 md:mb-16 animate-fade-in">
           Chapter 12 // Risk Intelligence
         </span>
         
         <h2 className="text-white font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.9] md:leading-[0.8] tracking-tighter italic font-black mb-10 md:mb-16">
           Downside <br/>
           <span className="gold-gradient-text not-italic">Insulation.</span>
         </h2>

         <p className="text-slate-300 text-lg md:text-3xl font-light font-editorial italic max-w-5xl leading-relaxed mb-12 md:mb-28 opacity-90 px-4">
           Stability through scarcity. <br className="hidden lg:block"/>
           <span className="text-white font-medium border-b border-brass-400/40 pb-3">Physical asset hedges combined with non-seasonal ritual demand provide structural capital protection.</span>
         </p>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 w-full mb-12 md:mb-24 max-w-5xl">
            {[
              { l: "Demand Inelasticity", v: "100%", s: "Faith-Driven Core" },
              { l: "Asset Security", v: "Freehold", s: "0% Encumbrance" },
              { l: "Supply Barrier", v: "Absolute", s: "Land Scarcity" }
            ].map((stat, i) => (
              <div key={i} className="text-center group/item border-y sm:border-y-0 sm:border-x border-white/5 py-10 transition-all duration-700 hover:bg-white/5 rounded-[2rem]">
                 <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-4 group-hover/item:text-brass-200 transition-colors">{stat.l}</div>
                 <div className="text-white font-serif text-4xl md:text-5xl lg:text-6xl italic font-black mb-1 md:mb-2 leading-none">{stat.v}</div>
                 <div className="text-brass-400/60 text-[8px] uppercase tracking-widest font-black opacity-60">{stat.s}</div>
              </div>
            ))}
         </div>

         <Link to="/risk" className="group px-12 md:px-20 py-7 md:py-9 bg-white/5 border border-white/10 text-white rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] hover:bg-brass-400 hover:text-onyx-950 transition-all active:scale-95 flex items-center gap-6 backdrop-blur-xl shadow-premium">
           Mitigation Matrix <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
         </Link>
      </div>

      {/* Technical Scan Frame */}
      <div className="absolute inset-8 md:inset-20 pointer-events-none border border-white/5 opacity-20 hidden sm:block"></div>
    </div>
  );
};

export default RiskControl;