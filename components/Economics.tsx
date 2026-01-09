import React from 'react';
import { IndianRupee, BarChart3, ArrowRight, ShieldCheck, Activity, Target, Scan } from 'lucide-react';
import { Link } from 'react-router-dom';

const Economics: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-[#05070A] overflow-hidden group">
      
      {/* Background Layer: Fiscal Abstraction */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-20 saturate-0 grayscale transition-transform duration-[20s] group-hover:scale-105" 
            alt="Fiscal Basis" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-transparent to-onyx-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#05070A_110%)]"></div>
      </div>

      {/* Report Telemetry HUD */}
      <div className="absolute top-10 right-8 md:top-14 md:right-14 z-30 text-right opacity-40">
         <div className="flex items-center justify-end gap-5 text-brass-200 font-black text-[10px] uppercase tracking-[0.5em]">
            Fiscal_Baseline_v4.2 <BarChart3 size={18} />
         </div>
         <div className="text-white text-[8px] font-mono opacity-50 uppercase tracking-widest mt-2">
            Reference: SGT_IRR_SIM_2025
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-7xl px-8 flex flex-col items-center">
         <span className="text-brass-400 text-[11px] md:text-[14px] font-black uppercase tracking-[1.2em] block mb-10 md:mb-20">
           Section 11 // Fiscal Integrity
         </span>
         
         <h2 className="text-white font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.85] md:leading-[0.8] tracking-tighter italic font-black mb-14 md:mb-28">
           Structural <br/>
           <span className="gold-gradient-text not-italic">Stability.</span>
         </h2>

         <p className="text-slate-300 text-lg md:text-3xl font-light font-editorial italic max-w-4xl leading-relaxed mb-16 md:mb-32 opacity-90 px-4">
           Value through absolute ownership. <br className="hidden lg:block"/>
           <span className="text-white font-medium border-b border-brass-400/40 pb-4">A de-risked structural stack backed by 100% freehold land equity, protecting long-term capital yield.</span>
         </p>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-20 w-full mb-16 md:mb-32 max-w-6xl">
            {[
              { l: "Stabilized EBITDA", v: "45.4%", s: "Target Margin" },
              { l: "Asset Grade", v: "Trophy", s: "Market Exclusion" },
              { l: "Hurdle Rate", v: "Low", s: "Zero Land Debt" }
            ].map((stat, i) => (
              <div key={i} className="text-center group/item border-y sm:border-y-0 sm:border-x border-white/5 py-12 transition-all duration-700 hover:bg-white/5 rounded-[2.5rem]">
                 <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-5 group-hover/item:text-brass-200 transition-colors">{stat.l}</div>
                 <div className="text-white font-serif text-5xl md:text-6xl italic font-black mb-3 leading-none">{stat.v}</div>
                 <div className="text-brass-400/60 text-[9px] uppercase tracking-widest font-black opacity-60">{stat.s}</div>
              </div>
            ))}
         </div>

         <Link to="/economics" className="group px-14 md:px-24 py-8 md:py-10 bg-white/5 border border-white/10 text-white rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] hover:bg-brass-400 hover:text-onyx-950 transition-all active:scale-95 flex items-center gap-8 backdrop-blur-xl shadow-premium">
           Access Fiscal Ledger <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform duration-500" />
         </Link>
      </div>

      {/* Vector HUD Data Grid */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.02] hidden sm:block" style={{ backgroundImage: 'linear-gradient(#E8D19F 1px, transparent 1px), linear-gradient(90deg, #E8D19F 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
    </div>
  );
};

export default Economics;