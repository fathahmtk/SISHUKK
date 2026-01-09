import React from 'react';
import { IndianRupee, PieChart, ArrowRight, ShieldCheck, Target, TrendingUp, Activity, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Economics: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-slate-950 overflow-hidden group">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-20 saturate-0 transition-transform duration-[20s] group-hover:scale-110" 
            alt="Capital Structure" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_110%)]"></div>
      </div>

      {/* Telemetry HUD */}
      <div className="absolute top-12 left-12 z-10 space-y-2 opacity-50">
         <div className="flex items-center gap-3 text-gold-500 font-black text-[9px] uppercase tracking-[0.4em]">
            <BarChart3 size={12} /> Fiscal_Model_v4.2
         </div>
         <div className="text-white text-[7px] font-mono opacity-40 uppercase tracking-widest">
            Basis: ₹350 Cr // Hurdle: 10.2%
         </div>
      </div>

      <div className="absolute bottom-12 right-12 z-10 text-right opacity-50">
         <div className="text-gold-500 font-black text-[9px] uppercase tracking-[0.4em] mb-2">Portfolio Capital Sync</div>
         <div className="flex items-center justify-end gap-3 text-white text-[11px] font-black uppercase tracking-widest">
            <Activity size={14} className="text-emerald-500 animate-pulse" /> Equity_IRR: 24.2%_Projected
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl px-8 flex flex-col items-center">
         <span className="text-gold-500 text-[11px] md:text-[13px] font-black uppercase tracking-[1em] block mb-12 animate-fade-in">
           Chapter 08 // Yield Engineering
         </span>
         
         <h2 className="text-white font-serif text-6xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter italic font-black mb-16">
           Capital <br/>
           <span className="gold-gradient-text not-italic">Sovereignty.</span>
         </h2>

         <p className="text-slate-200 text-xl md:text-3xl font-light font-editorial italic max-w-4xl leading-relaxed mb-24 opacity-80">
           Institutional-grade deployment. <br className="hidden lg:block"/>
           <span className="text-white font-medium border-b border-gold-500/40 pb-2">A de-risked capital stack with 100% freehold land equity providing a massive yield hedge.</span>
         </p>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-20">
            {[
              { l: "Target IRR", v: "24.2%", s: "7-Year Cycle" },
              { l: "Equity Multiplier", v: "3.5x", s: "MOIC Projection" },
              { l: "EBITDA Margin", v: "45.4%", s: "Stabilized Optima" }
            ].map((stat, i) => (
              <div key={i} className="text-center group/item border-x border-white/5 px-10">
                 <div className="text-slate-500 text-[8px] font-black uppercase tracking-widest mb-4 group-hover/item:text-gold-500 transition-colors">{stat.l}</div>
                 <div className="text-white font-serif text-4xl italic font-black mb-2 leading-none">{stat.v}</div>
                 <div className="text-gold-600 text-[8px] uppercase tracking-widest font-black opacity-60">{stat.s}</div>
              </div>
            ))}
         </div>

         <Link to="/economics" className="group px-14 py-7 bg-white/5 border border-white/20 text-white rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 hover:text-onyx-950 hover:border-gold-500 transition-all active:scale-95 flex items-center gap-5 backdrop-blur-xl shadow-2xl">
           Economic Audit <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
         </Link>
      </div>

      {/* Vector HUD Grid */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
    </div>
  );
};

export default Economics;