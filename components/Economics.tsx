import React from 'react';
import { IndianRupee, BarChart3, ArrowRight, ShieldCheck, Activity, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Economics: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-[#05070A] overflow-hidden group">
      
      {/* Background Layer: Abstract Wealth/Fiscal Visual */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1633156191771-70e241885671?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-10 saturate-0 grayscale transition-transform duration-[20s] group-hover:scale-110" 
            alt="Asset Value Background" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-transparent to-onyx-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#05070A_110%)]"></div>
      </div>

      {/* Telemetry HUD */}
      <div className="absolute top-8 left-6 md:top-12 md:left-12 z-30 opacity-40">
         <div className="flex items-center gap-4 text-brass-200 font-black text-[9px] uppercase tracking-[0.5em]">
            <BarChart3 size={14} /> Project_Integrity_v4.2
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-7xl px-6 md:px-12 flex flex-col items-center">
         <span className="text-brass-400 text-[11px] md:text-[14px] font-black uppercase tracking-[1.2em] block mb-8 md:mb-16">
           Section 11 // Asset Integrity
         </span>
         
         <h2 className="text-white font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.9] md:leading-[0.8] tracking-tighter italic font-black mb-10 md:mb-16">
           Structural <br/>
           <span className="gold-gradient-text not-italic">Stability.</span>
         </h2>

         <p className="text-slate-300 text-lg md:text-3xl font-light font-editorial italic max-w-5xl leading-relaxed mb-12 md:mb-28 opacity-90 px-4">
           Stability through ownership. <br className="hidden lg:block"/>
           <span className="text-white font-medium border-b border-brass-400/40 pb-3">A de-risked stack with 100% freehold land ownership, protecting long-term project value.</span>
         </p>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 w-full mb-12 md:mb-24 max-w-5xl">
            {[
              { l: "EBITDA Projection", v: "45.4%", s: "Stabilized Operations" },
              { l: "Capital Outlay", v: "₹350 Cr", s: "Basis Value" },
              { l: "Yield Alpha", v: "Trophy", s: "Landmark Grade" }
            ].map((stat, i) => (
              <div key={i} className="text-center group/item border-y sm:border-y-0 sm:border-x border-white/5 py-10 transition-all duration-700 hover:bg-white/5 rounded-[2rem]">
                 <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-4 group-hover/item:text-brass-200 transition-colors">{stat.l}</div>
                 <div className="text-white font-serif text-4xl md:text-5xl lg:text-6xl italic font-black mb-2 leading-none">{stat.v}</div>
                 <div className="text-brass-400/60 text-[8px] uppercase tracking-widest font-black opacity-60">{stat.s}</div>
              </div>
            ))}
         </div>

         <Link to="/economics" className="group px-12 md:px-20 py-7 md:py-9 bg-white/5 border border-white/10 text-white rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] hover:bg-brass-400 hover:text-onyx-950 transition-all active:scale-95 flex items-center gap-6 backdrop-blur-xl shadow-premium">
           View Full Fiscal Record <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
         </Link>
      </div>
    </div>
  );
};

export default Economics;