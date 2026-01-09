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
            className="w-full h-full object-cover opacity-30 grayscale-[0.2] transition-transform duration-[20s] group-hover:scale-110" 
            alt="Asset Elevation" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_110%)]"></div>
      </div>

      {/* Telemetry HUD */}
      <div className="absolute top-12 left-12 z-10 space-y-2 opacity-50">
         <div className="flex items-center gap-3 text-gold-500 font-black text-[9px] uppercase tracking-[0.4em]">
            <Scan size={12} /> Vector_Scan_01
         </div>
         <div className="text-white text-[7px] font-mono opacity-40 uppercase tracking-widest">
            X: 10.5952 // Y: 76.0375
         </div>
      </div>

      <div className="absolute bottom-12 right-12 z-10 text-right opacity-50">
         <div className="text-gold-500 font-black text-[9px] uppercase tracking-[0.4em] mb-2">BIM Core Synchronization</div>
         <div className="flex items-center justify-end gap-3 text-white text-[11px] font-black uppercase tracking-widest">
            <Activity size={14} className="text-emerald-500 animate-pulse" /> Asset_Sovereignty: Verified
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl px-8 flex flex-col items-center">
         <span className="text-gold-500 text-[11px] md:text-[13px] font-black uppercase tracking-[1em] block mb-12 animate-fade-in">
           Chapter 01 // The Strategic Thesis
         </span>
         
         <h2 className="text-white font-serif text-6xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter italic font-black mb-16">
           Value through <br/>
           <span className="gold-gradient-text not-italic">Scarcity.</span>
         </h2>

         <p className="text-slate-200 text-xl md:text-3xl font-light font-editorial italic max-w-4xl leading-relaxed mb-24 opacity-80">
           Architecture functions as a commercial engine. In dense spiritual corridors, <br className="hidden lg:block"/>
           <span className="text-white font-medium border-b border-gold-500/40 pb-2">visual dominance defines the ultimate market capture.</span>
         </p>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-20">
            {[
              { l: "Built Area", v: "350,000", s: "Sq. Ft. GSF" },
              { l: "Capital Outlay", v: "₹350 Cr", s: "Institutional" },
              { l: "Asset Status", v: "Active", s: "BIM Grade A" }
            ].map((stat, i) => (
              <div key={i} className="text-center group/item border-x border-white/5 px-10">
                 <div className="text-slate-500 text-[8px] font-black uppercase tracking-widest mb-4 group-hover/item:text-gold-500 transition-colors">{stat.l}</div>
                 <div className="text-white font-serif text-4xl italic font-black mb-2 leading-none">{stat.v}</div>
                 <div className="text-gold-600 text-[8px] uppercase tracking-widest font-black opacity-60">{stat.s}</div>
              </div>
            ))}
         </div>

         <Link to="/asset" className="group px-14 py-7 bg-white/5 border border-white/20 text-white rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 hover:text-onyx-950 hover:border-gold-500 transition-all active:scale-95 flex items-center gap-5 backdrop-blur-xl shadow-2xl">
           Structural Dossier <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
         </Link>
      </div>

      {/* Vertical Scanning HUD */}
      <div className="absolute inset-0 z-20 pointer-events-none border-x border-white/5 flex items-center justify-between">
         <div className="h-full w-px bg-white/5"></div>
         <div className="h-full w-px bg-white/5"></div>
      </div>
    </div>
  );
};

export default TheAsset;