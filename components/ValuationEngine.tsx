import React, { useState } from 'react';
import { Calculator, ShieldCheck, Activity, Landmark, ArrowUpRight, Target, Scale, Info, Zap } from 'lucide-react';

type Scenario = 'stress' | 'base' | 'bull';

const ValuationEngine: React.FC = () => {
  const [scenario, setScenario] = useState<Scenario>('base');

  const scenarioData = {
    stress: { valuation: 980, multiple: '10.5x', irr: '18.4%', yield: 'Conservative', color: 'text-slate-400' },
    base: { valuation: 1236, multiple: '12.0x', irr: '24.2%', yield: 'Standard Alpha', color: 'text-gold-500' },
    bull: { valuation: 1580, multiple: '14.5x', irr: '29.8%', yield: 'High Capture', color: 'text-emerald-500' }
  };

  const active = scenarioData[scenario];

  return (
    <section id="valuation" className="py-48 bg-[#FDFBF7] relative overflow-hidden border-b border-slate-200">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex flex-wrap gap-20 font-mono text-[8px] p-20 leading-none text-slate-900">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="max-w-[150px] overflow-hidden whitespace-nowrap">VALUATION_PROTOCOL_V4.2 // WACC_10.2% // SCENARIO_{scenario.toUpperCase()}</div>
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
              
              <div className="mt-16 flex gap-4">
                 {(['stress', 'base', 'bull'] as Scenario[]).map((s) => (
                    <button 
                       key={s}
                       onClick={() => setScenario(s)}
                       className={`px-8 py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all border ${
                          scenario === s 
                          ? 'bg-slate-950 text-white border-slate-950 shadow-xl scale-105' 
                          : 'bg-white text-slate-400 border-slate-200 hover:border-gold-400'
                       }`}
                    >
                       {s} Case
                    </button>
                 ))}
              </div>
           </div>
           
           <div className="p-16 bg-white border border-slate-200 text-slate-950 rounded-[4rem] flex flex-col justify-between h-[520px] w-full lg:w-[500px] shadow-3xl group transition-all hover:border-gold-400 relative">
              <div className="absolute top-0 right-12 px-6 py-2 bg-slate-50 border-x border-b border-slate-100 rounded-b-2xl text-[8px] font-black uppercase tracking-widest text-slate-400">
                 Projection Case: {scenario.toUpperCase()}
              </div>
              <div className="relative z-10">
                 <Landmark size={56} className="text-gold-600 mb-12 opacity-80" />
                 <h4 className="text-[11px] font-black uppercase tracking-[0.6em] mb-4 text-slate-400">Exit Value Potential</h4>
                 <div className={`text-7xl font-serif font-black tracking-tighter mb-8 leading-none transition-all duration-700 italic ${active.color}`}>
                    ₹{active.valuation} Cr
                 </div>
                 <p className="text-xs font-bold leading-relaxed uppercase tracking-widest text-slate-400">Target Institutional Divestment at Year 7 Stabilization Cycle.</p>
              </div>
              <div className="relative z-10 pt-10 border-t border-slate-100 flex justify-between items-center">
                 <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Target Multiple</span>
                    <span className="text-4xl font-serif font-black italic">{active.multiple}</span>
                 </div>
                 <div className="text-right">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Projected IRR</span>
                    <span className="text-4xl font-serif font-black italic text-gold-600">{active.irr}</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-start">
           <div className="lg:col-span-7 bg-white border border-slate-100 rounded-[4rem] p-16 shadow-2xl relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform">
                 <Activity size={300} className="text-slate-900" />
              </div>
              <h3 className="text-slate-950 font-serif text-4xl mb-16 italic relative z-10">Performance Arbitrage</h3>
              <div className="space-y-12 relative z-10">
                 {[
                    { label: "Equity Yield Type", val: active.yield, status: "Verified" },
                    { label: "Exit Horizon", val: "84 Months", status: "Stated" },
                    { label: "WACC Baseline", val: "10.2%", status: "Fixed" }
                 ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-slate-50 pb-8 last:border-0 group/row transition-all hover:pl-4">
                       <div>
                          <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-2">{row.label}</div>
                          <div className="text-slate-950 font-serif text-3xl italic">{row.val}</div>
                       </div>
                       <div className="px-5 py-2 bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase tracking-widest rounded-full border border-emerald-100">
                          {row.status}
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-5 bg-slate-950 p-12 md:p-16 rounded-[4rem] text-white shadow-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                 <Zap size={150} className="text-gold-500" />
              </div>
              <h3 className="text-white font-serif text-4xl mb-12 italic relative z-10">Stress Sensitivity</h3>
              <div className="space-y-10 relative z-10">
                 <p className="text-slate-400 text-lg font-light leading-relaxed italic border-l border-gold-500/50 pl-6">
                    "Model is stressed for a 25% drop in F&B yield. Even at stress-case occupancy of 55%, the DSCR remains above 1.4x."
                 </p>
                 <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/10">
                    <div>
                       <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-2">DSCR Floor</div>
                       <div className="text-gold-500 font-mono text-2xl font-black">1.42x</div>
                    </div>
                    <div>
                       <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-2">Occ Sensitivity</div>
                       <div className="text-white font-mono text-2xl font-bold">55.0%</div>
                    </div>
                 </div>
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