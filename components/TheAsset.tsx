import React from 'react';
import { ArrowRight, Activity, Scan } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheAsset: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-[#05070A] overflow-hidden group">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            className="w-full h-full object-cover opacity-40 grayscale-[0.3] transition-transform duration-[20s] group-hover:scale-110" 
            alt="Asset Elevation" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-transparent to-onyx-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#05070A_130%)]"></div>
      </div>

      {/* Telemetry HUD */}
      <div className="absolute top-8 left-6 md:top-12 md:left-12 z-10 space-y-3 opacity-40">
         <div className="flex items-center gap-4 text-brass-200 font-black text-[9px] uppercase tracking-[0.5em]">
            <Scan size={14} /> Vector_Trace_v2.5
         </div>
         <div className="text-white text-[7px] font-mono opacity-50 uppercase tracking-widest hidden sm:block">
            X: 10.5952 // Y: 76.0375 // Grade: AAA+
         </div>
      </div>

      <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-10 text-right opacity-40 hidden sm:block">
         <div className="text-brass-200 font-black text-[9px] uppercase tracking-[0.5em] mb-3">Sync Protocol // Active</div>
         <div className="flex items-center justify-end gap-3 text-white text-[11px] font-black uppercase tracking-widest">
            <Activity size={16} className="text-emerald-500 animate-pulse" /> Status: Verified
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-7xl px-6 md:px-8 flex flex-col items-center py-16 md:py-0">
         <span className="text-brass-400 text-[11px] md:text-[15px] font-black uppercase tracking-[1em] md:tracking-[1.4em] block mb-8 md:mb-16 animate-fade-in">
           Chapter 01 // The Strategic Thesis
         </span>
         
         <h2 className="text-white font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.9] md:leading-[0.8] tracking-tighter italic font-black mb-12 md:mb-24">
           Value through <br/>
           <span className="gold-gradient-text not-italic">Scarcity.</span>
         </h2>

         <p className="text-slate-300 text-lg md:text-3xl lg:text-4xl font-light font-editorial italic max-w-5xl leading-relaxed mb-12 md:mb-28 opacity-90 px-4">
           Architecture as a commercial engine. In high-velocity spiritual hubs, <br className="hidden lg:block"/>
           <span className="text-white font-medium border-b border-brass-400/40 pb-3">visual command defines the ultimate market share.</span>
         </p>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-20 w-full mb-16 md:mb-32 max-w-6xl overflow-hidden">
            {[
              { l: "Built Area", v: "350,000", s: "GSF Net" },
              { l: "Capital Outlay", v: "₹350 Cr", s: "Institutional Basis" },
              { l: "Asset Grade", v: "Trophy", s: "Market_Exclusion" }
            ].map((stat, i) => (
              <div key={i} className="text-center group/item border-y sm:border-y-0 sm:border-x border-white/5 py-10 transition-all duration-700 hover:bg-white/5 rounded-[2rem]">
                 <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-4 group-hover/item:text-brass-200 transition-colors">{stat.l}</div>
                 <div className="text-white font-serif text-3xl md:text-5xl lg:text-6xl italic font-black mb-2 leading-none">{stat.v}</div>
                 <div className="text-brass-400/60 text-[8px] font-black uppercase tracking-widest">{stat.s}</div>
              </div>
            ))}
         </div>

         <Link to="/asset" className="group px-12 md:px-20 py-7 md:py-9 bg-white/5 border border-white/10 text-white rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] hover:bg-brass-400 hover:text-onyx-950 transition-all active:scale-95 flex items-center gap-6 backdrop-blur-xl shadow-premium">
           Inspect Structural Dossier <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
         </Link>
      </div>

      <div className="absolute inset-10 md:inset-20 pointer-events-none border border-white/5 opacity-20"></div>
    </div>
  );
};

export default TheAsset;