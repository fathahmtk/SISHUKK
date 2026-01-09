import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Scale, Landmark, Zap, Search, Activity, Scan } from 'lucide-react';
import { Link } from 'react-router-dom';

const RiskControl: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-[#05070A] overflow-hidden group">
      
      {/* Background Layer: Protection/Structural Anchor */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1512418490979-92798ccc1380?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-20 brightness-[0.5] saturate-0 transition-transform duration-[20s] group-hover:scale-105" 
            alt="Asset Security" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-transparent to-onyx-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#05070A_110%)]"></div>
      </div>

      {/* Report HUD Terminals */}
      <div className="absolute bottom-10 left-8 md:bottom-14 md:left-14 z-30 space-y-4 opacity-40">
         <div className="flex items-center gap-5 text-brass-200 font-black text-[10px] uppercase tracking-[0.5em]">
            Protection_Protocol_v4.2 <ShieldCheck size={18} />
         </div>
         <div className="text-white text-[8px] font-mono opacity-50 uppercase tracking-widest">
            Audit: SGT_RISK_HEDGE_VERIFIED
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-7xl px-8 flex flex-col items-center">
         <span className="text-brass-400 text-[11px] md:text-[14px] font-black uppercase tracking-[1.2em] block mb-10 md:mb-20">
           Section 12 // Protection Evidence
         </span>
         
         <h2 className="text-white font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.85] md:leading-[0.8] tracking-tighter italic font-black mb-14 md:mb-28">
           Security <br/>
           <span className="gold-gradient-text not-italic">Safeguards.</span>
         </h2>

         <p className="text-slate-300 text-lg md:text-3xl font-light font-editorial italic max-w-5xl leading-relaxed mb-16 md:mb-32 opacity-90 px-4">
           De-risking through scarcity. <br className="hidden lg:block"/>
           <span className="text-white font-medium border-b border-brass-400/40 pb-4">Physical asset hedges combined with non-seasonal ritual demand provide structural security and long-term peace of mind.</span>
         </p>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-20 w-full mb-16 md:mb-32 max-w-6xl">
            {[
              { l: "Demand Inelasticity", v: "100%", s: "Faith-Driven Market" },
              { l: "Capital Security", v: "Freehold", s: "Zero Debt Risk" },
              { l: "Asset Class", v: "Trophy", s: "Landmark Series" }
            ].map((stat, i) => (
              <div key={i} className="text-center group/item border-y sm:border-y-0 sm:border-x border-white/5 py-12 transition-all duration-700 hover:bg-white/5 rounded-[2.5rem]">
                 <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-5 group-hover/item:text-brass-200 transition-colors">{stat.l}</div>
                 <div className="text-white font-serif text-5xl md:text-6xl italic font-black mb-3 leading-none">{stat.v}</div>
                 <div className="text-brass-400/60 text-[9px] uppercase tracking-widest font-black opacity-60">{stat.s}</div>
              </div>
            ))}
         </div>

         <Link to="/risk" className="group px-14 md:px-24 py-8 md:py-10 bg-white/5 border border-white/10 text-white rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] hover:bg-brass-400 hover:text-onyx-950 transition-all active:scale-95 flex items-center gap-8 backdrop-blur-xl shadow-premium">
           Open Safety Dossier <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform duration-500" />
         </Link>
      </div>

      {/* Scanning Laser HUD */}
      <div className="absolute inset-10 md:inset-20 pointer-events-none border border-white/5 opacity-20 hidden sm:block"></div>
    </div>
  );
};

export default RiskControl;