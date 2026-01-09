import React from 'react';
import { Calculator, ShieldCheck, Activity, Landmark, ArrowUpRight, BarChart3, Layers, Target, Scale } from 'lucide-react';

const ValuationEngine: React.FC = () => {
  const benchmarks = [
    { metric: "Asset Class Logic", sgt: "Landmark Destination", market: "Standard City Hotel", res: "Superior" },
    { metric: "Target IRR (Equity)", sgt: "22 - 24%", market: "16 - 18%", res: "High Alpha" },
    { metric: "Exit Valuation Method", sgt: "EBITDA Multiple", market: "Cost Replacement", res: "Premium" },
    { metric: "Equity MOIC (7Y)", sgt: "3.5x", market: "2.5x", res: "Outperformer" },
  ];

  const sensitivity = [
    { adr: "₹10,500", s60: "18.2%", s70: "20.1%", s80: "22.4%" },
    { adr: "₹12,000", s60: "20.4%", s70: "24.2%", s80: "27.1%" },
    { adr: "₹13,500", s60: "22.1%", s70: "26.8%", s80: "30.2%" },
  ];

  return (
    <section id="valuation" className="py-40 bg-onyx-950 relative overflow-hidden border-b border-white/5">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none flex flex-wrap gap-12 font-mono text-[9px] p-10 leading-none text-white">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i}>WACC = (E/V * Re) + (D/V * Rd * (1-T)) ... NPV = Σ (CFt / (1+r)^t) ... TERMINAL VALUE ... EXIT MULTIPLE 12x</div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-12">
           <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-gold-500/30 rounded-full bg-gold-500/5 mb-10">
                <Scale className="text-gold-500" size={14} />
                <span className="text-gold-400 uppercase text-[10px] font-black tracking-[0.4em]">Valuation Protocol v4.2</span>
              </div>
              <h2 className="text-white font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter mb-12 italic">The Audit <br/><span className="gold-gradient-text italic font-black">Scrutiny.</span></h2>
              <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-2xl border-l border-gold-500/30 pl-10">
                Financial value is derived from certainty. Our institutional model applies a risk-adjusted WACC of 10.2% and a conservative 12x exit multiple, ensuring structural margin protection.
              </p>
           </div>
           
           <div className="p-12 bg-gold-500 text-onyx-950 rounded-[4rem] flex flex-col justify-between h-[420px] w-full lg:w-[450px] shadow-3xl group transition-all hover:scale-[1.02]">
              <div>
                 <Landmark size={48} className="opacity-30 mb-10" />
                 <h4 className="text-[12px] font-black uppercase tracking-[0.5em] mb-4 opacity-70">Target Exit Value</h4>
                 <div className="text-7xl font-serif font-black tracking-tighter mb-6 leading-none">₹1,236 Cr</div>
                 <p className="text-sm font-bold leading-relaxed uppercase tracking-tight">Projected Institutional Exit at Year 7 Stabilization Cycle.</p>
              </div>
              <div className="pt-8 border-t border-onyx-950/10 flex justify-between items-center">
                 <span className="text-[10px] font-black uppercase tracking-widest">Benchmark Multiple</span>
                 <span className="text-4xl font-serif font-black">12.0x</span>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
           {/* Performance Table */}
           <div className="lg:col-span-7 bg-onyx-900 border border-white/10 rounded-[4rem] p-12 shadow-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                 <Activity size={250} className="text-gold-500" />
              </div>
              <h3 className="text-white font-serif text-3xl mb-12 italic">Performance Benchmarks</h3>
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="text-slate-600 text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-4">
                          <th className="pb-6">Key Risk Metric</th>
                          <th className="pb-6">SGT Model</th>
                          <th className="pb-6">Market Avg</th>
                          <th className="pb-6 text-right">Pass Status</th>
                       </tr>
                    </thead>
                    <tbody className="text-sm">
                       {benchmarks.map((row, i) => (
                          <tr key={i} className="group/row">
                             <td className="py-8 text-white font-serif text-xl border-b border-white/5 group-hover/row:text-gold-400 transition-colors">{row.metric}</td>
                             <td className="py-8 text-gold-500 font-mono font-bold border-b border-white/5">{row.sgt}</td>
                             <td className="py-8 text-slate-500 border-b border-white/5">{row.market}</td>
                             <td className="py-8 text-right border-b border-white/5">
                                <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-500 text-[9px] font-black uppercase tracking-widest rounded-full border border-emerald-500/20">
                                   {row.res}
                                </span>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>

           {/* Sensitivity Matrix */}
           <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 rounded-[4rem] p-12 shadow-2xl">
              <h3 className="text-white font-serif text-3xl mb-12 italic">IRR Sensitivity Matrix</h3>
              <div className="space-y-6">
                 <div className="grid grid-cols-4 gap-4 text-center text-slate-600 text-[9px] font-black uppercase tracking-widest mb-4">
                    <div className="text-left italic">ADR / Occ%</div>
                    <div className="bg-white/5 p-3 rounded-t-2xl">60%</div>
                    <div className="bg-gold-500/10 text-gold-500 p-3 rounded-t-2xl">70%</div>
                    <div className="bg-white/5 p-3 rounded-t-2xl">80%</div>
                 </div>
                 {sensitivity.map((row, i) => (
                    <div key={i} className="grid grid-cols-4 gap-4 items-center">
                       <div className="text-white font-mono text-xs">{row.adr}</div>
                       <div className="bg-white/5 p-6 rounded-2xl text-slate-500 text-xs text-center">{row.s60}</div>
                       <div className="bg-gold-500/5 border border-gold-500/30 p-6 rounded-2xl text-gold-500 text-lg font-black text-center shadow-xl">{row.s70}</div>
                       <div className="bg-white/5 p-6 rounded-2xl text-slate-400 text-xs text-center">{row.s80}</div>
                    </div>
                 ))}
              </div>
              <div className="mt-12 p-8 bg-onyx-950 rounded-3xl border border-white/5 flex items-start gap-4">
                 <Calculator className="text-gold-500 shrink-0" size={20} />
                 <p className="text-slate-500 text-[10px] leading-relaxed uppercase font-black tracking-widest">
                    Model factors in corporate tax shielding and accelerated depreciation schedules (v2.5).
                 </p>
              </div>
           </div>
        </div>

        {/* Action Link */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-onyx-900 border border-white/10 flex items-center justify-center text-gold-500">
                 <Target size={28} />
              </div>
              <div>
                 <p className="text-white text-xl font-serif italic">Institutional Valuation Log</p>
                 <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest">Big-4 Audited Cash-Flow Forecasts Available</p>
              </div>
           </div>
           <button className="px-12 py-6 bg-gold-500 hover:bg-white text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.5em] transition-all flex items-center gap-4 shadow-3xl">
              Enter Data Room <ArrowUpRight size={18} />
           </button>
        </div>
      </div>
    </section>
  );
};

export default ValuationEngine;