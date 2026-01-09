import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { ShieldCheck, Activity, ArrowUpRight, Coins, AlertCircle, BarChart3, Database, Globe, Scan, Target } from 'lucide-react';

const DEBT_SNOWBALL_DATA = [
  { year: 'Year 1', debt: 210, equity: 140 },
  { year: 'Year 3', debt: 180, equity: 220 },
  { year: 'Year 5', debt: 120, equity: 450 },
  { year: 'Year 7', debt: 50, equity: 780 },
  { year: 'Year 9', debt: 0, equity: 1100 },
  { year: 'Year 10', debt: 0, equity: 1250 },
];

const FORECAST_TABLE = [
  { yr: "Year 1-3", phase: "Structural Deployment", rev: "Zero-Basis", ebitda: "Negative_Ops", status: "Asset_Accumulation" },
  { yr: "Year 4-5", phase: "Operational Ramp", rev: "Ramping_High", ebitda: "30.0%", status: "Yield_Activation" },
  { yr: "Year 6-7", phase: "Stabilization", rev: "Peak_Capture", ebitda: "45.4%", status: "Authoritative_Alpha" },
  { yr: "Year 8-10", phase: "Exit Realization", rev: "Institutional", ebitda: "Maximized", status: "Liquidity_Window" },
];

const TenYearForecast: React.FC = () => {
  return (
    <section id="forecast" className="py-24 bg-slate-950 relative overflow-hidden">
      
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        
        {/* Header Terminal */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-6 mb-12">
               <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500 shadow-gold-glow">
                  <Target size={28} className="animate-pulse" />
               </div>
               <div className="space-y-1">
                  <span className="text-gold-500 uppercase text-[10px] font-black tracking-[0.6em] block">Financial Simulation Node</span>
                  <div className="text-white/40 text-[8px] font-mono uppercase tracking-widest">Dossier_Ref: SGT_IRR_v2.5_Alpha</div>
               </div>
            </div>
            <h2 className="text-white font-serif text-7xl md:text-[9rem] leading-[0.8] tracking-tighter mb-12 italic font-black">
              Equity <br/><span className="gold-gradient-text not-italic font-black">Snowball.</span>
            </h2>
            <p className="text-slate-400 text-3xl font-light font-editorial italic leading-relaxed max-w-3xl border-l-4 border-gold-500/40 pl-16 py-4">
              "The 10-year model illustrates a rapid transition from structural deployment to massive operational free cash flow. Value creation is maximized at stabilization."
            </p>
          </div>
          
          <div className="flex gap-10">
             <div className="p-12 bg-white/5 border border-white/10 rounded-[3.5rem] text-center min-w-[240px] group hover:border-gold-500/40 transition-all duration-700 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent"></div>
                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-3 relative z-10">Target Margin</div>
                <div className="text-white font-serif text-6xl italic font-black relative z-10 group-hover:scale-110 transition-transform">45.4%</div>
                <div className="text-gold-500/40 text-[9px] font-black uppercase tracking-widest mt-3 relative z-10">Stabilized EBITDA</div>
             </div>
             <div className="p-12 bg-gold-500 rounded-[3.5rem] text-onyx-950 text-center min-w-[240px] shadow-[0_50px_100px_rgba(212,175,55,0.3)] group hover:scale-[1.02] transition-all duration-700 cursor-pointer">
                <div className="text-onyx-950/60 text-[10px] font-black uppercase tracking-widest mb-3">Equity Multiple</div>
                <div className="text-onyx-950 font-serif text-7xl font-black relative z-10 group-hover:scale-110 transition-transform">3.5x</div>
                <div className="text-onyx-950/60 text-[9px] font-black uppercase tracking-widest mt-3">Target Realization</div>
             </div>
          </div>
        </div>

        {/* Forecast Tactical Table */}
        <div className="mb-40 bg-slate-900/60 border border-white/10 rounded-[5rem] overflow-hidden shadow-3xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/5 text-slate-500 text-[10px] font-black uppercase tracking-[0.5em]">
                  <th className="px-16 py-12">Timeline Node</th>
                  <th className="px-16 py-12">Strategic Phase</th>
                  <th className="px-16 py-12 text-center">Revenue Curve</th>
                  <th className="px-16 py-12 text-center">EBITDA Profile</th>
                  <th className="px-16 py-12 text-right text-gold-500">Node_Status</th>
                </tr>
              </thead>
              <tbody>
                {FORECAST_TABLE.map((row, i) => (
                  <tr key={i} className="group border-b border-white/5 last:border-0 hover:bg-white/[0.04] transition-all duration-500">
                    <td className="px-16 py-12 text-white font-serif text-4xl italic group-hover:text-gold-500 transition-colors font-black">{row.yr}</td>
                    <td className="px-16 py-12">
                       <div className="text-white font-black uppercase tracking-widest text-[12px] mb-1">{row.phase}</div>
                       <div className="text-slate-600 text-[9px] font-mono">Trace: SGT_T_0{i+1}</div>
                    </td>
                    <td className="px-16 py-12 text-center">
                       <span className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-slate-400 font-mono text-xs">{row.rev}</span>
                    </td>
                    <td className="px-16 py-12 text-center">
                       <span className="text-white font-serif text-2xl italic font-black">{row.ebitda}</span>
                    </td>
                    <td className="px-16 py-12 text-right">
                       <span className="text-gold-500 font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-end gap-3">
                          <Scan size={14} className="opacity-40" /> {row.status}
                       </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white/5 p-10 flex items-center justify-center gap-10 border-t border-white/10 backdrop-blur-3xl">
             <div className="flex items-center gap-4 text-[10px] text-slate-600 font-black uppercase tracking-[0.6em]">
                <AlertCircle size={14} className="text-gold-500 animate-pulse" /> Fiscal modeling calibrated for institutional REIT-ready stabilization by Y7.
             </div>
          </div>
        </div>

        {/* Value Realization Simulation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-8 bg-slate-900 border border-white/10 p-16 md:p-24 rounded-[6rem] shadow-3xl relative overflow-hidden group">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-[15s]">
               <Database size={600} className="text-white" />
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center mb-24 relative z-10 gap-10">
               <div>
                  <h3 className="text-white font-serif text-5xl mb-4 italic font-black leading-none">Value Creation Trap</h3>
                  <p className="text-slate-500 text-[11px] uppercase font-black tracking-[0.6em]">Equity Basis vs. Senior Obligation (₹ Cr)</p>
               </div>
               <div className="flex gap-12 bg-slate-950/80 px-10 py-5 rounded-full border border-white/10 backdrop-blur-3xl">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-gold-500 shadow-gold-glow"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Fixed_Asset</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Debt_Level</span>
                  </div>
               </div>
            </div>

            <div style={{ width: '100%', height: 450 }} className="relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={DEBT_SNOWBALL_DATA}>
                  <defs>
                    <linearGradient id="colorEq_tactical" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorDt_tactical" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" vertical={false} />
                  <XAxis 
                    dataKey="year" 
                    stroke="#475569" 
                    fontSize={10} 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#64748b', fontWeight: 'black', textTransform: 'uppercase', letterSpacing: '0.2em'}} 
                  />
                  <Tooltip 
                    contentStyle={{backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', color: '#fff'}}
                    itemStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'black' }}
                  />
                  <Area type="monotone" dataKey="equity" stroke="#D4AF37" strokeWidth={4} fillOpacity={1} fill="url(#colorEq_tactical)" name="Asset Value" />
                  <Area type="monotone" dataKey="debt" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorDt_tactical)" name="Senior Debt" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-10">
             <div className="p-16 bg-slate-900 border border-white/10 rounded-[5rem] flex flex-col justify-between h-[400px] shadow-3xl relative overflow-hidden group hover:border-gold-500/40 transition-all duration-700">
                <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 pointer-events-none">
                   <Globe size={300} />
                </div>
                <div className="relative z-10">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 mb-10 shadow-2xl">
                      <Globe size={32} />
                   </div>
                   <h4 className="text-gold-500 text-[11px] font-black uppercase tracking-[0.8em] mb-4">Exit Multiplier</h4>
                   <div className="text-white font-serif text-8xl font-black italic tracking-tighter leading-none group-hover:scale-110 transition-transform origin-left">3.5x</div>
                </div>
                <div className="pt-10 border-t border-white/5 flex items-center justify-between mt-auto">
                   <span className="text-white/30 text-[10px] font-black uppercase tracking-widest italic">Year 7 Realization</span>
                   <Scan size={18} className="text-gold-500 opacity-40" />
                </div>
             </div>

             <div className="p-16 bg-white/5 border border-white/10 rounded-[5rem] flex flex-col justify-between flex-1 shadow-2xl relative overflow-hidden group hover:bg-gold-500/5 transition-all duration-1000">
                <div className="relative z-10">
                   <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-10 group-hover:scale-110 transition-transform duration-700 shadow-2xl">
                      <Activity size={32} />
                   </div>
                   <h4 className="text-slate-500 text-[11px] font-black uppercase tracking-[0.6em] mb-4">Risk-Adjusted IRR</h4>
                   <div className="text-white font-serif text-6xl font-black italic leading-none">24.2%</div>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 px-8 py-4 rounded-full flex items-center justify-between mt-auto group-hover:bg-emerald-500/20 transition-all">
                   <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">DSCR Projection</span>
                   <span className="text-white font-mono text-lg font-bold">2.14x</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenYearForecast;