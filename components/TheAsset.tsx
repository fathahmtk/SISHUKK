import React from 'react';
import { ArrowRight, Activity, Scan, Ruler, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheAsset: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-[#05070A] overflow-hidden group">
      
      {/* High Fidelity Background Render */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            className="w-full h-full object-cover opacity-40 saturate-[0.8] transition-transform duration-[20s] group-hover:scale-110" 
            alt="Vertical Landmark Elevation" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-transparent to-onyx-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#05070A_140%)]"></div>
      </div>

      {/* Report Telemetry HUD */}
      <div className="absolute top-10 left-8 md:top-14 md:left-14 z-30 opacity-40">
         <div className="flex items-center gap-5 text-brass-200 font-black text-[10px] uppercase tracking-[0.5em]">
            <Scan size={18} className="animate-pulse" /> Geometric_Analysis_v2.5
         </div>
         <div className="text-white text-[8px] font-mono opacity-50 uppercase tracking-widest mt-2">
            Ref: SGT_VERTICAL_CORE_TRACE
         </div>
      </div>

      <div className="absolute bottom-10 right-8 md:bottom-14 md:right-14 z-30 text-right opacity-40">
         <div className="text-brass-200 font-black text-[10px] uppercase tracking-[0.5em] mb-4">Master Record Sync</div>
         <div className="flex items-center justify-end gap-3 text-white text-[11px] font-black uppercase tracking-widest">
            <Activity size={18} className="text-emerald-500 animate-pulse" /> Status: Verified_Active
         </div>
      </div>

      {/* Main Narrative Content */}
      <div className="relative z-10 text-center w-full max-w-7xl px-8 flex flex-col items-center">
         <span className="text-brass-400 text-[11px] md:text-[14px] font-black uppercase tracking-[1.4em] block mb-12 md:mb-20">
           Section 03 // Design Thesis
         </span>
         
         <h2 className="text-white font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.85] md:leading-[0.8] tracking-tighter italic font-black mb-14 md:mb-24">
           Vertical <br/>
           <span className="gold-gradient-text not-italic">Heritage.</span>
         </h2>

         <p className="text-slate-300 text-lg md:text-3xl font-light font-editorial italic max-w-5xl leading-relaxed mb-16 md:mb-32 opacity-90 px-4">
           Architecture as a structural shield. <br className="hidden lg:block"/>
           <span className="text-white font-medium border-b border-brass-400/40 pb-4 shadow-brass-glow">Twin-tower symmetry engineered to anchor South India's premier spiritual node.</span>
         </p>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-20 w-full mb-16 md:mb-32 max-w-6xl">
            {[
              { l: "Built Area", v: "350,000", s: "Sq. Ft. Net" },
              { l: "Capital Basis", v: "₹350 Cr", s: "Institutional Grade" },
              { l: "Peak Reach", v: "75.0m", s: "Region Dominance" }
            ].map((stat, i) => (
              <div key={i} className="text-center group/item border-y sm:border-y-0 sm:border-x border-white/5 py-12 transition-all duration-700 hover:bg-white/5 rounded-[3rem]">
                 <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-5 group-hover/item:text-brass-200 transition-colors">{stat.l}</div>
                 <div className="text-white font-serif text-5xl md:text-6xl italic font-black mb-3 leading-none">{stat.v}</div>
                 <div className="text-brass-400/60 text-[9px] uppercase tracking-widest font-black opacity-60">{stat.s}</div>
              </div>
            ))}
         </div>

         <Link to="/asset" className="group px-14 md:px-24 py-8 md:py-10 bg-white/5 border border-white/10 text-white rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] hover:bg-brass-400 hover:text-onyx-950 transition-all active:scale-95 flex items-center gap-8 backdrop-blur-xl shadow-premium">
           Inspect Structural Record <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform duration-500" />
         </Link>
      </div>

      {/* Background Precision Grid */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#C5A059 1px, transparent 1px), linear-gradient(90deg, #C5A059 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
    </div>
  );
};

export default TheAsset;