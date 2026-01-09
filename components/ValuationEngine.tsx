import React from 'react';
import { Calculator, ShieldCheck, Activity, Landmark, ArrowUpRight, BarChart3, Layers, Target, Scale, Info } from 'lucide-react';

const ValuationEngine: React.FC = () => {
  const benchmarks = [
    { metric: "Asset Class Logic", sgt: "Landmark Destination", market: "Standard City Hotel", res: "Superior" },
    { metric: "Target IRR (Equity)", sgt: "24.2%", market: "16 - 18%", res: "High Alpha" },
    { metric: "Exit Valuation Method", sgt: "EBITDA Multiple", market: "Cost Replacement", res: "Premium" },
    { metric: "Equity MOIC (7Y)", sgt: "3.5x", market: "2.5x", res: "Outperformer" },
  ];

  const sensitivity = [
    { adr: "₹10,500", s60: "18.2%", s70: "20.1%", s80: "22.4%" },
    { adr: "₹12,000", s60: "20.4%", s70: "24.2%", s80: "27.1%" },
    { adr: "₹13,500", s60: "22.1%", s70: "26.8%", s80: "30.2%" },
  ];

  return (
    <section id="valuation" className="py-48 bg-[#FDFBF7] relative overflow-hidden border-b border-slate-200">
      {/* Background Architectural Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex flex-wrap gap-20 font-mono text-[8px] p-20 leading-none text-slate-900">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="max-w-[150px] overflow-hidden whitespace-nowrap">VALUATION_PROTOCOL_V4.2 // WACC_10.2% // TERMINAL_VAL_12X // IRR_CALC_ENGINE</div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-16">
           <div className="max-w-4xl">
              <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-200 rounded-full bg-white mb-12 shadow-sm">
                <Scale className="text-gold-600" size={16} />
                <span className="text-gold-600 uppercase text-[10px] font-black tracking-[0.5em]">Valuation Scrutiny v4.2</span>
              </div>
              <h2 className="text-slate-950 font-serif text-6xl md:text-9xl leading-[0.8] tracking-tighter italic">The Asset <br/><span className="gold-gradient-text italic font-black">Audit.</span></h2>
              <p className="text-slate-500 text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-gold-400 pl-12 mt-12">
                Value is a product of scarcity. Our model applies a risk-adjusted 10.2% WACC and a 12x exit multiple—conservative benchmarks for a regional visual monopoly.
              </p>
           </div>
           
           <div className="p-16 bg-white border border-slate-200 text-slate-950 rounded-[4rem] flex flex-col justify-between h-[480px] w-full lg:w-[500px] shadow-3xl group transition-all hover:border-gold-400">
              <div className="absolute top-[-5%] right-[-5%] text-slate-50 font-serif text-[25rem] font-black pointer-events-none select-none italic leading-none">V</div>
              <div className="relative z-10">
                 <Landmark size={56} className="text-gold-600 mb-12 opacity-80" />
                 <h4 className="text-[11px] font-black uppercase tracking-[0.6em] mb-4 text-slate-400">Exit Value Potential</h4>
                 <div className="text-7xl font-serif font-black tracking-tighter mb-8 leading-none group-hover:text-gold-600 transition-colors italic">₹1,236 Cr</div>
                 <p className="text-xs font-bold leading-relaxed uppercase tracking-widest text-slate-400">Target Institutional Divestment at Year 7 Stabilization Cycle.</p>
              </div>
              <div className="relative z-10 pt-10 border-t border-slate-100 flex justify-between items-center">
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Target Multiple</span>
                 <span className="text-5xl font-serif font-black italic">12.0x</span>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-start">
           {/* Technical Benchmarks Table */}
           <div className="lg:col-span-7 bg-white border border-slate-100 rounded-[4rem] p-16 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform">
                 <Activity size={300} className="text-slate-900" />
              </div>
              <h3 className="text-slate-950 font-serif text-4xl mb-16 italic relative z-10">Performance Arbitrage</h3>
              <div className="overflow-x-auto relative z-10">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-50 pb-6">
                          <th className="pb-8">Institutional Metric</th>
                          <th className="pb-8">SGT Asset</th>
                          <th className="pb-8">Market Avg</th>
                          <th className="pb-8 text-right">Status</th>
                       </tr>
                    </thead>
                    <tbody className="text-sm">
                       {benchmarks.map((row, i) => (
                          <tr key={i} className="group/row">
                             <td className="py-10 text-slate-900 font-serif text-2xl border-b border-slate-50 group-hover/row:text-gold-600 transition-colors italic">{row.metric}</td>
                             <td className="py-10 text-gold-600 font-mono font-black border-b border-slate-50 text-lg">{row.sgt}</td>
                             <td className="py-10 text-slate-400 border-b border-slate-50 font-medium italic">{row.market}</td>
                             <td className="py-10 text-right border-b border-slate-50">
                                <span className="px-5 py-2 bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase tracking-widest rounded-full border border-emerald-100 shadow-sm">
                                   {row.res}
                                </span>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>

           {/* Sensitivity Analysis Terminal */}
           <div className="lg:col-span-5 bg-white border border-slate-200 rounded-[4rem] p-12 md:p-16 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-gold-50/20 to-transparent pointer-events-none"></div>
              <h3 className="text-slate-950 font-serif text-4xl mb-16 italic relative z-10">IRR Sensitivity Matrix</h3>
              <div className="space-y-8 relative z-10">
                 <div className="grid grid-cols-4 gap-6 text-center text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">
                    <div className="text-left italic">ADR / Occ %</div>
                    <div className="bg-slate-50 p-4 rounded-t-3xl border-x border-t border-slate-100">60%</div>
                    <div className="bg-gold-500 text-white p-4 rounded-t-3xl shadow-lg">70%</div>
                    <div className="bg-slate-50 p-4 rounded-t-3xl border-x border-t border-slate-100">80%</div>
                 </div>
                 {sensitivity.map((row, i) => (
                    <div key={i} className="grid grid-cols-4 gap-6 items-center group/row">
                       <div className="text-slate-950 font-mono text-xs font-black">{row.adr}</div>
                       <div className="bg-slate-50 p-8 rounded-[2rem] text-slate-400 text-xs text-center border border-slate-100 group-hover/row:bg-white transition-colors">{row.s60}</div>
                       <div className="bg-gold-500/5 border-2 border-gold-400 p-8 rounded-[2.5rem] text-gold-600 text-2xl font-black text-center shadow-2xl relative">
                          {row.s70}
                          {i === 1 && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-600 text-white text-[7px] px-3 py-1 rounded-full font-black uppercase tracking-widest shadow-xl">Target Case</div>}
                       </div>
                       <div className="bg-slate-50 p-8 rounded-[2rem] text-slate-400 text-xs text-center border border-slate-100 group-hover/row:bg-white transition-colors">{row.s80}</div>
                    </div>
                 ))}
              </div>
              <div className="mt-16 p-10 bg-[#FDFBF7] rounded-[3rem] border border-slate-200 flex items-start gap-6 relative z-10">
                 <Calculator className="text-gold-600 shrink-0 mt-1" size={24} />
                 <p className="text-slate-500 text-[11px] leading-relaxed font-bold uppercase tracking-widest italic">
                    Calculated using XIRR methodology factoring in corporate tax shields and front-loaded CapEx depreciation.
                 </p>
              </div>
           </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-16 border-t border-slate-200 gap-10">
           <div className="flex items-center gap-10">
              <div className="w-20 h-20 rounded-full bg-slate-950 flex items-center justify-center text-gold-500 shadow-2xl group hover:bg-gold-500 hover:text-white transition-all">
                 <Target size={32} className="group-hover:scale-110 transition-transform" />
              </div>
              <div>
                 <p className="text-slate-950 text-3xl font-serif italic">Verified Valuation Ledger</p>
                 <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">Audit Logs Available for Registered Institutional Partners</p>
              </div>
           </div>
           <button className="px-16 py-8 bg-slate-950 hover:bg-gold-500 text-white rounded-full text-[11px] font-black uppercase tracking-[0.6em] transition-all shadow-3xl flex items-center gap-6 active:scale-95 group">
              Audit the Model <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </button>
        </div>
      </div>
    </section>
  );
};

export default ValuationEngine;