
import React, { useState, useMemo } from 'react';
import { IndianRupee, TrendingUp, BarChart3, PieChart as PieIcon, RefreshCw } from 'lucide-react';

const InvestmentCalculator: React.FC = () => {
  const [adr, setAdr] = useState(12000);
  const [occupancy, setOccupancy] = useState(70);

  const stats = useMemo(() => {
    const keys = 200;
    const annualRev = keys * adr * (occupancy / 100) * 365;
    const weddingRev = 150000000; // 15 Cr static event rev for simplicity
    const totalRev = annualRev + weddingRev;
    const ebitda = totalRev * 0.42; // 42% margin
    const irr = (ebitda / 3500000000) * 100 + 8; // simplified calc for visualization

    return {
      totalRev: (totalRev / 10000000).toFixed(1),
      ebitda: (ebitda / 10000000).toFixed(1),
      irr: irr.toFixed(1)
    };
  }, [adr, occupancy]);

  return (
    <section id="calculator" className="py-32 bg-onyx-900 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.6em] block mb-4">Financial Simulation</span>
          <h2 className="text-white font-serif text-5xl md:text-7xl tracking-tighter">ROI <span className="gold-gradient-text">Engine</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-12 bg-onyx-950 p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
            <div className="space-y-6">
              <div className="flex justify-between items-end mb-4">
                <label className="text-white text-xs font-black uppercase tracking-widest opacity-50">Target ADR (₹)</label>
                <span className="text-gold-500 font-serif text-3xl">₹{adr.toLocaleString()}</span>
              </div>
              <input 
                type="range" min="8000" max="25000" step="500" value={adr} 
                onChange={(e) => setAdr(parseInt(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-black tracking-widest">
                <span>₹8,000</span>
                <span>₹25,000</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-end mb-4">
                <label className="text-white text-xs font-black uppercase tracking-widest opacity-50">Stabilized Occupancy</label>
                <span className="text-gold-500 font-serif text-3xl">{occupancy}%</span>
              </div>
              <input 
                type="range" min="40" max="95" step="1" value={occupancy} 
                onChange={(e) => setOccupancy(parseInt(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-black tracking-widest">
                <span>40% (Conservative)</span>
                <span>95% (Optimistic)</span>
              </div>
            </div>

            <button onClick={() => {setAdr(12000); setOccupancy(70);}} className="flex items-center gap-2 text-slate-500 hover:text-gold-400 text-[10px] font-black uppercase tracking-widest transition-colors">
              <RefreshCw size={14} /> Reset Benchmarks
            </button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            <div className="p-10 rounded-[2rem] bg-gold-500 text-onyx-950 flex flex-col justify-between shadow-2xl">
              <div className="flex justify-between items-start">
                <IndianRupee size={32} className="opacity-40" />
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Estimated Annual Revenue</span>
              </div>
              <div>
                <div className="text-6xl font-serif font-black mb-2">₹{stats.totalRev}Cr</div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Composite Room + Event Yield</p>
              </div>
            </div>

            <div className="p-10 rounded-[2rem] bg-white/5 border border-white/10 text-white flex flex-col justify-between group hover:border-gold-500/50 transition-all">
              <div className="flex justify-between items-start">
                <TrendingUp size={32} className="text-gold-500" />
                <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Operating EBITDA</span>
              </div>
              <div>
                <div className="text-6xl font-serif font-black mb-2 group-hover:text-gold-400 transition-colors">₹{stats.ebitda}Cr</div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Post-stabilization (Year 3+)</p>
              </div>
            </div>

            <div className="sm:col-span-2 p-10 rounded-[2rem] bg-onyx-950 border border-white/10 flex items-center justify-between shadow-xl">
               <div className="flex items-center gap-8">
                  <div className="w-20 h-20 rounded-full border-4 border-gold-500 border-t-transparent animate-[spin_4s_linear_infinite] flex items-center justify-center">
                    <span className="text-gold-500 font-serif text-2xl font-black">{stats.irr}%</span>
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-3xl">Projected Equity IRR</h4>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-black mt-2">Leveraged Returns Profile (Targeted)</p>
                  </div>
               </div>
               <BarChart3 size={40} className="text-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculator;
