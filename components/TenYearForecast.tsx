
import React, { useState } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar, Cell
} from 'recharts';
import { 
  TrendingUp, ShieldCheck, Activity, Target, 
  BarChart3, ArrowUpRight, Coins, Percent, AlertCircle 
} from 'lucide-react';

const DEBT_SNOWBALL_DATA = [
  { year: 'Launch', debt: 210, equity: 140 },
  { year: 'Year 2', debt: 195, equity: 180 },
  { year: 'Year 4', debt: 150, equity: 320 },
  { year: 'Year 6', debt: 80, equity: 580 },
  { year: 'Year 8', debt: 0, equity: 850 },
  { year: 'Year 10', debt: 0, equity: 1020 },
];

const FORECAST_TABLE = [
  { yr: "Year 1", occ: "55%", adr: "₹9,500", rev: "68.0", opex: "37.4", ebitda: "30.6", ncf: "12.6", div: "2.5" },
  { yr: "Year 3", occ: "72%", adr: "₹11,500", rev: "92.0", opex: "46.0", ebitda: "46.0", ncf: "30.5", div: "6.1" },
  { yr: "Year 5", occ: "78%", adr: "₹13,800", rev: "118.0", opex: "53.1", ebitda: "64.9", ncf: "52.9", div: "10.5" },
  { yr: "Year 7", occ: "80%", adr: "₹16,500", rev: "145.0", opex: "65.2", ebitda: "79.8", ncf: "73.8", div: "14.7" },
  { yr: "Year 10", occ: "80%", adr: "₹21,000", rev: "188.0", opex: "84.6", ebitda: "103.4", ncf: "103.4", div: "20.6" },
];

const TenYearForecast: React.FC = () => {
  const [activeChart, setActiveChart] = useState<'snowball' | 'breakeven'>('snowball');

  return (
    <section id="forecast" className="py-32 bg-onyx-950 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.6em] block mb-8">Long-Term Projections</span>
          <h2 className="text-white font-serif text-5xl md:text-7xl tracking-tighter italic">The Financial <br/><span className="gold-gradient-text">Waterfall.</span></h2>
        </div>

        {/* 10-Year Table */}
        <div className="mb-32 overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
                <th className="px-8 py-4">Fiscal Year</th>
                <th className="px-8 py-4">Occupancy %</th>
                <th className="px-8 py-4">ADR (₹)</th>
                <th className="px-8 py-4">Revenue (Cr)</th>
                <th className="px-8 py-4">EBITDA (Cr)</th>
                <th className="px-8 py-4">Net Cash Flow (Cr)</th>
                <th className="px-8 py-4 text-gold-500">Dividend (Cr)</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {FORECAST_TABLE.map((row, i) => (
                <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="px-8 py-8 bg-white/[0.02] border-y border-l border-white/5 rounded-l-2xl text-white font-serif text-xl">{row.yr}</td>
                  <td className="px-8 py-8 bg-white/[0.02] border-y border-white/5 text-slate-400 font-mono">{row.occ}</td>
                  <td className="px-8 py-8 bg-white/[0.02] border-y border-white/5 text-slate-400 font-mono">{row.adr}</td>
                  <td className="px-8 py-8 bg-white/[0.02] border-y border-white/5 text-white font-bold tracking-tight">₹{row.rev} Cr</td>
                  <td className="px-8 py-8 bg-white/[0.02] border-y border-white/5 text-white">₹{row.ebitda} Cr</td>
                  <td className="px-8 py-8 bg-white/[0.02] border-y border-white/5 text-emerald-500">₹{row.ncf} Cr</td>
                  <td className="px-8 py-8 bg-gold-500/5 border border-gold-500/30 text-gold-500 font-bold rounded-r-2xl">₹{row.div} Cr</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-6 text-[10px] text-slate-600 uppercase tracking-widest text-center italic">Institutional Assumption: 45% stabilized operating margin. Corporate tax and depreciation not reflected in simplified Net Cash Flow view.</p>
        </div>

        {/* Deep Dive Charts Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h3 className="text-white font-serif text-4xl mb-6">Deep-Dive Intelligence</h3>
            <div className="flex gap-4">
              <button 
                onClick={() => setActiveChart('snowball')}
                className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeChart === 'snowball' ? 'bg-gold-500 text-onyx-950' : 'bg-white/5 text-slate-500 border border-white/10'
                }`}
              >
                The Debt Snowball
              </button>
              <button 
                onClick={() => setActiveChart('breakeven')}
                className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeChart === 'breakeven' ? 'bg-gold-500 text-onyx-950' : 'bg-white/5 text-slate-500 border border-white/10'
                }`}
              >
                Break-Even Safety Net
              </button>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="text-right">
              <span className="text-slate-600 text-[9px] font-black uppercase tracking-widest block mb-1">Target RevPAR</span>
              <span className="text-white font-serif text-2xl">₹13,200 (Y7)</span>
            </div>
            <div className="text-right">
              <span className="text-slate-600 text-[9px] font-black uppercase tracking-widest block mb-1">Debt Coverage</span>
              <span className="text-emerald-500 font-serif text-2xl">2.1x DSCR</span>
            </div>
          </div>
        </div>

        {/* Interactive Chart Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
          <div className="lg:col-span-8 bg-onyx-900 border border-white/10 rounded-[3rem] p-12 h-[500px] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            {activeChart === 'snowball' ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={DEBT_SNOWBALL_DATA}>
                  <defs>
                    <linearGradient id="colorEquity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorDebt" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#475569" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#475569" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="year" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                  <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', color: '#fff'}} 
                    itemStyle={{fontSize: '10px', textTransform: 'uppercase'}}
                  />
                  <Area type="monotone" dataKey="equity" stroke="#D4AF37" strokeWidth={3} fillOpacity={1} fill="url(#colorEquity)" name="Asset Equity Value" />
                  <Area type="monotone" dataKey="debt" stroke="#475569" strokeWidth={2} fillOpacity={1} fill="url(#colorDebt)" name="Project Debt" />
                  <Legend verticalAlign="top" height={36} iconType="circle" />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex flex-col h-full">
                <div className="flex-1 flex items-center justify-center relative">
                   <div className="w-80 h-80 rounded-full border-8 border-emerald-500/10 flex flex-col items-center justify-center text-center p-8">
                      <ShieldCheck size={48} className="text-emerald-500 mb-4" />
                      <div className="text-6xl font-serif text-white mb-2">38%</div>
                      <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest">Structural Break-Even</p>
                   </div>
                   {/* Orbiting metrics */}
                   <div className="absolute top-0 right-0 p-8 bg-white/5 border border-white/10 rounded-3xl max-w-[180px]">
                      <AlertCircle size={16} className="text-gold-500 mb-2" />
                      <p className="text-[9px] text-slate-400 leading-relaxed uppercase font-bold">The project covers all debt & opex even at <span className="text-white">60% of target</span> occupancy.</p>
                   </div>
                </div>
                <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/5">
                   <div>
                      <h5 className="text-white font-serif text-xl mb-1">Fixed Cost Base</h5>
                      <p className="text-slate-500 text-xs">Efficient vertical design reduces labor overhead by 22% vs horizontal resorts.</p>
                   </div>
                   <div>
                      <h5 className="text-white font-serif text-xl mb-1">Risk Protection</h5>
                      <p className="text-slate-500 text-xs">40% of OpEx covered by non-room revenue (MICE/Retail).</p>
                   </div>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="p-10 rounded-[3rem] bg-gold-500 text-onyx-950 flex flex-col justify-between shadow-2xl h-[240px]">
              <div className="flex justify-between items-start">
                <Coins size={32} className="opacity-40" />
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Wealth Multiplier</span>
              </div>
              <div>
                <div className="text-7xl font-serif font-black mb-2 tracking-tighter">3.3x</div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Total Value Multiple over 7 Years</p>
              </div>
            </div>

            <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 text-white flex flex-col justify-between shadow-xl h-[240px] group hover:border-emerald-500/50 transition-all">
              <div className="flex justify-between items-start">
                <TrendingUp size={32} className="text-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Cumulative Yield</span>
              </div>
              <div>
                <div className="text-6xl font-serif font-black mb-2">₹33.2Cr</div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Total Return on ₹10Cr Stake</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Strip */}
        <div className="p-12 md:p-16 rounded-[4rem] bg-onyx-900 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
           <div>
              <h4 className="text-white font-serif text-3xl md:text-5xl mb-4 tracking-tighter italic">"A Predictable Vertical Engine."</h4>
              <p className="text-slate-500 text-lg font-light tracking-wide max-w-xl">
                Every unit of occupancy generates high-margin flow-through due to our low debt-service and optimized operational structure.
              </p>
           </div>
           <button className="bg-gold-500 hover:bg-white text-onyx-950 px-12 py-6 rounded-full text-[10px] font-black uppercase tracking-[0.4em] transition-all flex items-center gap-4 group">
              Access Full Financial Audit <ArrowUpRight size={18} className="group-hover:rotate-12 transition-transform" />
           </button>
        </div>
      </div>
    </section>
  );
};

export default TenYearForecast;
