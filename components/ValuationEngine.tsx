
import React, { useState } from 'react';
import { 
  Scale, TrendingUp, Landmark, Calculator, 
  ArrowRight, ShieldCheck, AlertCircle, 
  Activity, PieChart as PieIcon, BarChart3, Layers,
  ChevronRight
} from 'lucide-react';

const ValuationEngine: React.FC = () => {
  const benchmarks = [
    { metric: "WACC (Cost of Capital)", projection: "10.2%", benchmark: "10% - 12%", status: "Efficient" },
    { metric: "Project IRR (10Y)", projection: "24.2%", benchmark: "18% - 22%", status: "Outperforming" },
    { metric: "Net Present Value (NPV)", projection: "+ ₹92 Cr", benchmark: "> 0", status: "Value Creative" },
    { metric: "Payback Period", projection: "5.4 Years", benchmark: "6 - 8 Years", status: "Rapid Recovery" },
  ];

  const sensitivityMatrix = [
    { adr: "₹10,500", occ60: "18.2%", occ70: "20.4%", occ80: "22.1%" },
    { adr: "₹12,000", occ60: "20.1%", occ70: "24.2%", occ80: "26.8%" },
    { adr: "₹13,500", occ60: "22.4%", occ70: "27.1%", occ80: "30.2%" },
  ];

  return (
    <section id="valuation" className="py-32 bg-onyx-950 relative overflow-hidden border-t border-white/5">
      {/* Background Math Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden flex flex-wrap gap-12 font-mono text-[10px] text-white p-10 leading-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i}>WACC = (E/V * Re) + (D/V * Rd * (1-T)) ... NPV = Σ (CFt / (1+r)^t) ... IRR where NPV=0 ... TV = EBITDA * Exit Multiple</div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24">
          <div className="max-w-4xl">
            <span className="text-gold-500 text-[11px] font-black uppercase tracking-[0.8em] block mb-8">Module 13: Valuation Methodology</span>
            <h2 className="text-white font-serif text-5xl md:text-8xl leading-[0.9] tracking-tighter mb-10 italic">The Scrutiny <br/><span className="gold-gradient-text">Protocol.</span></h2>
            <p className="text-slate-500 text-xl font-light leading-relaxed border-l-2 border-gold-500/50 pl-10 max-w-3xl">
              Financial value is derived from certainty. We use a risk-adjusted WACC of 10.2% to discount our 10-year cash flow projections, ensuring every rupee of investment creates measurable alpha.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          {/* Detailed WACC Component */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-12 relative overflow-hidden group shadow-3xl">
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                <Calculator size={180} className="text-gold-500" />
             </div>
             
             <h3 className="text-white font-serif text-3xl mb-12 flex items-center gap-4">
                <ShieldCheck className="text-gold-500" size={24} /> WACC Breakdown
             </h3>

             <div className="space-y-8">
                {[
                  { label: "Equity Cost (Re)", val: "14.5%", desc: "CAPM Derived: Rf 7.2% + Beta 1.3" },
                  { label: "Debt Cost (Rd)", val: "9.5%", desc: "Pre-tax project debt financing rate" },
                  { label: "Tax Shield (T)", val: "25%", desc: "Effective Indian Corporate Tax" },
                  { label: "Debt/Equity Ratio", val: "60:40", desc: "Optimized capital structure for leverage" },
                ].map((item, i) => (
                  <div key={i} className="group/item">
                    <div className="flex justify-between items-end mb-2">
                       <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                       <span className="text-white font-mono font-bold text-lg">{item.val}</span>
                    </div>
                    <p className="text-slate-600 text-[9px] uppercase tracking-widest font-medium opacity-60 group-hover/item:opacity-100 transition-opacity italic">
                       {item.desc}
                    </p>
                    <div className="h-px bg-white/5 mt-4 group-hover/item:bg-gold-500/30 transition-colors"></div>
                  </div>
                ))}
                
                <div className="pt-8 flex justify-between items-center">
                  <div className="text-slate-400 text-xs font-black uppercase tracking-[0.3em]">Hurdle Rate</div>
                  <div className="text-gold-500 font-serif text-5xl font-black shadow-gold-500/20 drop-shadow-lg">10.2%</div>
                </div>
             </div>
          </div>

          {/* Table & Terminal Value */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-onyx-900 border border-white/10 rounded-[3rem] p-12 overflow-x-auto shadow-2xl relative">
               <div className="flex items-center justify-between mb-12">
                  <h3 className="text-white font-serif text-3xl italic">Performance Benchmarks</h3>
                  <div className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-600">Institutional Audit Pass</div>
               </div>
               <table className="w-full text-left border-separate border-spacing-y-4">
                  <thead>
                    <tr className="text-slate-600 text-[9px] font-black uppercase tracking-widest border-b border-white/5">
                      <th className="px-6 py-4">Metric</th>
                      <th className="px-6 py-4">SGT Projection</th>
                      <th className="px-6 py-4">Market Avg</th>
                      <th className="px-6 py-4 text-center">Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    {benchmarks.map((row, i) => (
                      <tr key={i} className="group">
                        <td className="px-6 py-8 bg-white/5 border-y border-l border-white/5 rounded-l-2xl text-slate-300 font-medium group-hover:text-gold-400 transition-colors">{row.metric}</td>
                        <td className="px-6 py-8 bg-white/5 border-y border-white/5 text-white font-serif text-xl">{row.projection}</td>
                        <td className="px-6 py-8 bg-white/5 border-y border-white/5 text-slate-500">{row.benchmark}</td>
                        <td className="px-6 py-8 bg-white/5 border-y border-r border-white/5 rounded-r-2xl text-center">
                          <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
               </table>
            </div>

            <div className="p-12 bg-gold-500 text-onyx-950 rounded-[3.5rem] shadow-3xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-125 transition-transform duration-1000">
                  <Landmark size={200} />
               </div>
               <div className="relative z-10">
                 <span className="text-[11px] font-black uppercase tracking-[0.6em] mb-4 block opacity-60">Year 10 Monetization</span>
                 <div className="flex items-end gap-6 mb-6">
                    <h3 className="text-7xl md:text-8xl font-serif font-black tracking-tighter">₹1,236 Cr</h3>
                    <div className="pb-4 text-[10px] font-black uppercase tracking-widest opacity-60">Target Exit Value</div>
                 </div>
                 <p className="text-lg font-medium opacity-80 leading-relaxed max-w-xl">
                   Valuation predicated on a conservative 12x EBITDA multiple exit. Benchmarked against 2026-2027 luxury asset transactions in the Indian spiritual hospitality corridor.
                 </p>
               </div>
            </div>
          </div>
        </div>

        {/* IRR Sensitivity Table */}
        <div className="bg-onyx-900 border border-white/10 rounded-[4rem] p-12 md:p-24 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
             <Activity size={400} className="text-gold-500" />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.6em] mb-6 block">Scenario Analysis</span>
              <h3 className="text-white font-serif text-4xl md:text-6xl mb-10 leading-tight">Irr <br/><span className="gold-gradient-text italic">Sensitivity.</span></h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-12">
                Even in our "Pessimistic Base Case" (₹10,500 ADR & 60% Occupancy), the project remains value-creative, delivering returns that significantly outperform standard debt instruments.
              </p>
              <div className="flex flex-wrap gap-4">
                 {[
                   { label: "Hedge: Events Revenue", icon: ShieldCheck },
                   { label: "Hedge: High Barrier Location", icon: Landmark }
                 ].map((badge, i) => (
                    <div key={i} className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-widest">
                       <badge.icon size={16} className="text-gold-500" /> {badge.label}
                    </div>
                 ))}
              </div>
            </div>

            <div className="overflow-x-auto">
               <div className="text-center text-slate-600 text-[10px] font-black uppercase tracking-widest mb-8 border-b border-white/5 pb-4">Projected Equity IRR Matrix</div>
               <table className="w-full text-center border-separate border-spacing-2">
                  <thead>
                    <tr>
                      <th className="p-4 text-slate-500 text-[10px] uppercase font-black tracking-widest italic">ADR vs Occ %</th>
                      <th className="p-4 bg-white/5 text-slate-400 text-xs rounded-t-2xl">60%</th>
                      <th className="p-4 bg-gold-500/10 text-gold-500 text-xs rounded-t-2xl">70% (Target)</th>
                      <th className="p-4 bg-white/5 text-slate-400 text-xs rounded-t-2xl">80%</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono text-base">
                    {sensitivityMatrix.map((row, i) => (
                      <tr key={i}>
                        <td className="p-6 bg-white/5 border border-white/5 text-white font-medium rounded-l-2xl shadow-xl">{row.adr}</td>
                        <td className="p-6 bg-white/[0.02] text-slate-500 border border-white/5">{row.occ60}</td>
                        <td className="p-6 bg-gold-500/5 text-gold-500 border border-gold-500/20 font-black text-xl">{row.occ70}</td>
                        <td className="p-6 bg-white/[0.02] text-slate-400 border border-white/5 rounded-r-2xl">{row.occ80}</td>
                      </tr>
                    ))}
                  </tbody>
               </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuationEngine;
