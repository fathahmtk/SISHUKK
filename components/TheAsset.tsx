import React from 'react';
import { ShieldCheck, ArrowRight, Layers, Database, Activity, Scan } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheAsset: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-slate-950 overflow-hidden group">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            className="w-full h-full object-cover opacity-40 grayscale-[0.2] transition-transform duration-[20s] group-hover:scale-110" 
            alt="Asset Elevation" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_120%)]"></div>
      </div>

      {/* Telemetry HUD */}
      <div className="absolute top-12 left-12 z-10 space-y-3 opacity-50">
         <div className="flex items-center gap-4 text-gold-500 font-black text-[10px] uppercase tracking-[0.5em]">
            <Scan size={14} /> Vector_Scan_Core_01
         </div>
         <div className="text-white text-[8px] font-mono opacity-50 uppercase tracking-widest">
            X: 10.5952 // Y: 76.0375 // Grade: Institutional
         </div>
      </div>

      <div className="absolute bottom-12 right-12 z-10 text-right opacity-50">
         <div className="text-gold-500 font-black text-[10px] uppercase tracking-[0.5em] mb-3">BIM Synchronization Protocol</div>
         <div className="flex items-center justify-end gap-4 text-white text-[12px] font-black uppercase tracking-widest">
            <Activity size={16} className="text-emerald-500 animate-pulse" /> Asset_Status: Fully_Authenticated
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl px-8 flex flex-col items-center">
         <span className="text-gold-500 text-[12px] md:text-[14px] font-black uppercase tracking-[1.2em] block mb-14 animate-fade-in drop-shadow-2xl">
           Chapter 01 // The Strategic Thesis
         </span>
         
         <h2 className="text-white font-serif text-7xl md:text-9xl lg:text-[11rem] leading-[0.8] tracking-tighter italic font-black mb-20 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
           Value through <br/>
           <span className="gold-gradient-text not-italic drop-shadow-none">Scarcity.</span>
         </h2>

         <p className="text-slate-200 text-xl md:text-3xl lg:text-4xl font-light font-editorial italic max-w-5xl leading-relaxed mb-28 opacity-90">
           Architecture as a commercial engine. In dense spiritual corridors, <br className="hidden lg:block"/>
           <span className="text-white font-medium border-b border-gold-500/50 pb-3 shadow-gold-glow">visual dominance defines the ultimate market capture.</span>
         </p>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full mb-28 max-w-6xl">
            {[
              { l: "Built Area", v: "350,000", s: "Sq. Ft. GSF" },
              { l: "Capital Outlay", v: "₹350 Cr", s: "Institutional Basis" },
              { l: "Asset Class", v: "Trophy", s: "Market_Exclusion" }
            ].map((stat, i) => (
              <div key={i} className="text-center group/item border-x border-white/5 px-14 py-4 transition-all duration-700 hover:bg-white/5 rounded-3xl">
                 <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-5 group-hover/item:text-gold-500 transition-colors">{stat.l}</div>
                 <div className="text-white font-serif text-5xl italic font-black mb-3 leading-none group-hover/item:scale-110 transition-transform">{stat.v}</div>
                 <div className="text-gold-600/60 text-[9px] uppercase tracking-[0.2em] font-black">{stat.s}</div>
              </div>
            ))}
         </div>

         <Link to="/asset" className="group px-16 py-8 bg-white/5 border border-white/20 text-white rounded-full text-[12px] font-black uppercase tracking-[0.5em] hover:bg-gold-500 hover:text-onyx-950 hover:border-gold-500 transition-all active:scale-95 flex items-center gap-8 backdrop-blur-xl shadow-3xl">
           Inspect Structural Dossier <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
         </Link>
      </div>

      {/* Aesthetic Frame HUD */}
      <div className="absolute inset-16 pointer-events-none border border-white/5 opacity-20"></div>
    </div>
  );
};

export default TheAsset;