import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { ShieldCheck, Activity, ArrowUpRight, Coins, AlertCircle, BarChart3, Database, Globe } from 'lucide-react';

const DEBT_SNOWBALL_DATA = [
  { year: 'Year 1', debt: 210, equity: 140 },
  { year: 'Year 3', debt: 180, equity: 220 },
  { year: 'Year 5', debt: 120, equity: 450 },
  { year: 'Year 7', debt: 50, equity: 780 },
  { year: 'Year 9', debt: 0, equity: 1100 },
  { year: 'Year 10', debt: 0, equity: 1250 },
];

const FORECAST_TABLE = [
  { yr: "Year 1-3", phase: "Development", rev: "-", ebitda: "-", status: "Construction & Drawdown" },
  { yr: "Year 4-5", phase: "Operational Ramp", rev: "Ramping", ebitda: "Positive", status: "Events & Exp. Activation" },
  { yr: "Year 6-7", phase: "Stabilization", rev: "Peak", ebitda: "30-35%", status: "Strong Free Cash Flow" },
  { yr: "Year 8-10", phase: "Exit Window", rev: "Optimized", ebitda: "Maximized", status: "Valuation Peak" },
];

const TenYearForecast: React.FC = () => {
  return (
    <section id="forecast" className="py-40 bg-onyx-950 relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-4xl">
            <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] block mb-8">Section 08: Financial Structure</span>
            <h2 className="text-white font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter mb-10 italic">10-Year <br/><span className="gold-gradient-text italic font-black">Horizon.</span></h2>
            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-2xl border-l border-gold-500/30 pl-10">
              The model projects a clear lifecycle: Development (Y1-3), Ramp-up (Y4-5), Stabilisation (Y6-7), and Peak Valuation/Exit (Y8-10). Early negative cash flows transition rapidly to strong EBITDA once events and experiences activate.
            </p>
          </div>
          
          <div className="flex gap-6">
             <div className="p-8 bg-onyx-900 border border-white/10 rounded-3xl text-center min-w-[180px]">
                <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1">Target Margin</div>
                <div className="text-white font-serif text-3xl">30-35%</div>
                <div className="text-gold-500 text-[8px] font-black uppercase tracking-widest mt-2">Blended EBITDA</div>
             </div>
             <div className="p-8 bg-gold-500 rounded-3xl text-onyx-950 text-center min-w-[180px] shadow-3xl">
                <div className="text-onyx-950/60 text-[9px] font-black uppercase tracking-widest mb-1">Equity MOIC</div>
                <div className="text-onyx-950 font-serif text-4xl font-black">3.5x</div>
                <div className="text-onyx-950/60 text-[8px] font-black uppercase tracking-widest mt-2">Target Exit</div>
             </div>
          </div>
        </div>

        {/* Forecast Table Terminal */}
        <div className="mb-32 bg-onyx-900 border border-white/10 rounded-[4rem] overflow-hidden shadow-3xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 border-b border-white/5 text-slate-500 text-[9px] font-black uppercase tracking-[0.4em]">
                  <th className="px-10 py-8">Timeline</th>
                  <th className="px-10 py-8">Lifecycle Phase</th>
                  <th className="px-10 py-8 text-center">Revenue Trajectory</th>
                  <th className="px-10 py-8 text-center">EBITDA Profile</th>
                  <th className="px-10 py-8 text-right text-gold-500">Cash Flow Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {FORECAST_TABLE.map((row, i) => (
                  <tr key={i} className="group border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="px-10 py-8 text-white font-serif text-2xl italic group-hover:text-gold-400 transition-colors">{row.yr}</td>
                    <td className="px-10 py-8 text-slate-300 font-bold uppercase tracking-wider text-xs">{row.phase}</td>
                    <td className="px-10 py-8 text-center text-slate-400 font-mono">{row.rev}</td>
                    <td className="px-10 py-8 text-center text-white font-bold">{row.ebitda}</td>
                    <td className="px-10 py-8 text-right">
                       <span className="text-gold-500 font-bold uppercase tracking-widest text-[10px]">{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white/5 p-6 flex items-center justify-center gap-8 border-t border-white/10">
             <span className="text-[8px] text-slate-600 font-black uppercase tracking-[0.5em] flex items-center gap-2">
                <AlertCircle size={10} /> Model assumes operational ramp-up allows rapid EBITDA acceleration
             </span>
          </div>
        </div>

        {/* Value Creation Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 bg-onyx-900 border border-white/10 p-12 rounded-[4rem] h-[550px] shadow-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
               <BarChart3 size={300} className="text-gold-500" />
            </div>
            
            <div className="flex justify-between items-center mb-16 relative z-10">
               <h3 className="text-white font-serif text-3xl italic">The Equity Snowball</h3>
               <div className="flex gap-8">
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-gold-500">
                    <div className="w-2 h-2 rounded-full bg-gold-500"></div> Asset Value
                  </div>
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-blue-600">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div> Remaining Debt
                  </div>
               </div>
            </div>

            {/* Explicit Dimensions for Recharts */}
            <div style={{ width: '100%', height: 350 }} className="relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={DEBT_SNOWBALL_DATA}>
                  <defs>
                    <linearGradient id="colorEq" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorDt" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="year" stroke="#475569" fontSize={9} axisLine={false} tickLine={false} tick={{fill: '#64748b', fontWeight: 'bold'}} />
                  <Tooltip contentStyle={{backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px'}} />
                  <Area type="monotone" dataKey="equity" stroke="#D4AF37" strokeWidth={3} fillOpacity={1} fill="url(#colorEq)" name="Equity (Cr)" />
                  <Area type="monotone" dataKey="debt" stroke="#2563eb" strokeWidth={2} fillOpacity={1} fill="url(#colorDt)" name="Debt (Cr)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-10">
             <div className="p-10 bg-gold-500 rounded-[3.5rem] flex flex-col justify-between h-[250px] shadow-3xl transform transition-transform hover:scale-[1.02]">
                <div>
                   <Globe size={40} className="opacity-30 mb-6" />
                   <h4 className="text-onyx-950 text-[10px] font-black uppercase tracking-[0.5em] mb-2">Equity Multiplier</h4>
                   <div className="text-onyx-950 font-serif text-7xl font-black tracking-tighter">3.5x</div>
                </div>
                <p className="text-onyx-950 text-[9px] font-bold uppercase tracking-widest italic border-t border-onyx-950/10 pt-4">Projected Exit at Stabilization</p>
             </div>

             <div className="p-10 bg-onyx-900 border border-white/10 rounded-[3.5rem] flex flex-col justify-between h-[250px] shadow-2xl relative overflow-hidden group">
                <div className="relative z-10">
                   <Activity size={32} className="text-emerald-500 mb-6 group-hover:scale-125 transition-transform duration-700" />
                   <h4 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.5em] mb-2">Internal Rate of Return</h4>
                   <div className="text-white font-serif text-5xl">22-24%</div>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 px-6 py-3 rounded-full flex items-center justify-between group-hover:bg-emerald-500/20 transition-all">
                   <span className="text-emerald-500 text-[9px] font-black uppercase tracking-widest">DSCR Rating</span>
                   <span className="text-white font-mono text-xs font-bold">2.1x</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenYearForecast;