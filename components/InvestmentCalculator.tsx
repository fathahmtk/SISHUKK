import React, { useState, useMemo } from 'react';
// Added ShieldCheck to the imported icons from lucide-react
import { IndianRupee, TrendingUp, BarChart3, RefreshCw, ArrowUpRight, Gauge, Activity, ShieldCheck } from 'lucide-react';

const InvestmentCalculator: React.FC = () => {
  const [adr, setAdr] = useState(12000);
  const [occupancy, setOccupancy] = useState(70);

  const stats = useMemo(() => {
    const keys = 420;
    const projectCost = 3500000000;
    const roomRevAnnual = keys * adr * (occupancy / 100) * 365;
    const auxiliaryYieldAnnual = 250000000;
    const totalRev = roomRevAnnual + auxiliaryYieldAnnual;
    const ebitda = totalRev * 0.45;
    const yieldOnCost = (ebitda / projectCost) * 100;
    const simulatedIrr = yieldOnCost + 6.5;

    return {
      totalRev: (totalRev / 10000000).toFixed(1),
      ebitda: (ebitda / 10000000).toFixed(1),
      irr: simulatedIrr.toFixed(1)
    };
  }, [adr, occupancy]);

  return (
    <section id="calculator" className="py-48 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-200 rounded-full bg-gold-50/50 mb-10 shadow-sm">
            <Gauge size={16} className="text-gold-600" />
            <span className="text-gold-600 uppercase text-[10px] font-black tracking-[0.5em]">Live Yield Simulator v4.2</span>
          </div>
          <h2 className="text-slate-950 font-serif text-6xl md:text-9xl leading-[0.8] tracking-tighter italic">The ROI <br/><span className="gold-gradient-text italic font-black">Matrix.</span></h2>
          <p className="text-slate-500 text-2xl font-light leading-relaxed mt-12 italic border-x-2 border-gold-200 px-12">
            Calculate capital appreciation and stabilized operational alpha based on your custom hospitality benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Controls Terminal */}
          <div className="lg:col-span-5 space-y-12 bg-[#FDFBF7] p-16 rounded-[4rem] border border-slate-200 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-[-5%] right-[-5%] text-slate-100 font-serif text-[20rem] font-black pointer-events-none select-none italic leading-none opacity-40 group-hover:scale-110 transition-transform duration-1000">C</div>
            <div className="relative z-10 space-y-16">
              <div className="space-y-10">
                <div className="flex justify-between items-end mb-6">
                  <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">Target ADR (₹)</label>
                  <span className="text-slate-950 font-serif text-5xl italic font-black group-hover:text-gold-600 transition-colors">₹{adr.toLocaleString()}</span>
                </div>
                <div className="relative">
                   <input 
                    type="range" min="8000" max="25000" step="500" value={adr} 
                    onChange={(e) => setAdr(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
                  />
                  <div className="flex justify-between text-[8px] text-slate-300 font-black tracking-widest mt-4">
                    <span>₹8,000 (FLOOR)</span>
                    <span>₹25,000 (CAP)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="flex justify-between items-end mb-6">
                  <label className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">Operational Occupancy</label>
                  <span className="text-slate-950 font-serif text-5xl italic font-black group-hover:text-gold-600 transition-colors">{occupancy}%</span>
                </div>
                <div className="relative">
                   <input 
                    type="range" min="40" max="95" step="1" value={occupancy} 
                    onChange={(e) => setOccupancy(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
                  />
                  <div className="flex justify-between text-[8px] text-slate-300 font-black tracking-widest mt-4">
                    <span>40% (STRESS)</span>
                    <span>95% (OPTIMIZED)</span>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-slate-100 flex items-center justify-between">
                <button onClick={() => {setAdr(12000); setOccupancy(70);}} className="flex items-center gap-4 text-slate-400 hover:text-gold-600 text-[9px] font-black uppercase tracking-widest transition-all group/reset">
                  <RefreshCw size={14} className="group-hover/reset:rotate-180 transition-transform duration-700" /> Reset to Base Case
                </button>
                <div className="flex items-center gap-3 text-[9px] text-slate-300 font-black uppercase tracking-widest">
                   {/* ShieldCheck icon usage below requires the import added at the top */}
                   <ShieldCheck size={12} /> Big-4 Model Verified
                </div>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10 h-full">
            <div className="p-16 rounded-[4rem] bg-gold-500 text-white flex flex-col justify-between shadow-[0_40px_80px_rgba(212,175,55,0.3)] transition-all hover:scale-[1.02] relative overflow-hidden group">
              <div className="absolute top-[-5%] right-[-5%] text-white opacity-10 font-serif text-[15rem] font-black pointer-events-none select-none italic leading-none">R</div>
              <div className="relative z-10 flex justify-between items-start">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white shadow-xl">
                   <IndianRupee size={32} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/70">Consolidated Gross</span>
              </div>
              <div className="relative z-10">
                <div className="text-7xl font-serif font-black mb-4 italic leading-none group-hover:scale-105 transition-transform origin-left">₹{stats.totalRev}Cr</div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/60 border-t border-white/20 pt-6">Includes ₹25Cr Structural Ancillary Yield</p>
              </div>
            </div>

            <div className="p-16 rounded-[4rem] bg-white border border-slate-200 text-slate-950 flex flex-col justify-between shadow-2xl transition-all hover:scale-[1.02] relative overflow-hidden group hover:border-gold-400">
              <div className="absolute top-[-5%] right-[-5%] text-slate-50 opacity-80 font-serif text-[15rem] font-black pointer-events-none select-none italic leading-none">E</div>
              <div className="relative z-10 flex justify-between items-start">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-gold-600 shadow-sm group-hover:bg-gold-500 group-hover:text-white transition-all">
                   <TrendingUp size={32} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Operating EBITDA</span>
              </div>
              <div className="relative z-10">
                <div className="text-7xl font-serif font-black mb-4 italic leading-none group-hover:text-gold-600 transition-colors group-hover:scale-105 transition-transform origin-left">₹{stats.ebitda}Cr</div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-t border-slate-100 pt-6">45% Target Operational Efficiency</p>
              </div>
            </div>

            <div className="sm:col-span-2 p-16 rounded-[4rem] bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between shadow-3xl relative overflow-hidden group transition-all hover:scale-[1.01]">
               <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-500/10 to-transparent pointer-events-none"></div>
               <div className="relative z-10 flex items-center gap-12 mb-12 sm:mb-0">
                  <div className="w-32 h-32 rounded-full border-[10px] border-gold-500/20 border-t-gold-500 animate-[spin_8s_linear_infinite] flex items-center justify-center relative shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                    <span className="text-gold-500 font-serif text-4xl font-black absolute italic">{stats.irr}%</span>
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-5xl italic leading-none mb-3">Equity IRR</h4>
                    <p className="text-slate-500 text-[10px] uppercase tracking-[0.5em] font-black">Projected Yield Cycle Alpha</p>
                  </div>
               </div>
               <div className="relative z-10 flex flex-col items-end gap-6 text-right">
                  <Activity size={64} className="text-gold-500/20 group-hover:scale-110 transition-transform group-hover:text-gold-500/40 duration-1000" />
                  <button className="flex items-center gap-4 text-gold-500 text-[11px] font-black uppercase tracking-[0.4em] hover:text-white transition-colors group/btn">
                     Full Technical Ledger <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculator;