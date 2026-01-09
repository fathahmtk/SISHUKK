import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// Added missing Database import
import { TrendingUp, Activity, BarChart3, Landmark, ShieldCheck, ArrowUpRight, Target, IndianRupee, Scan, Database } from 'lucide-react';

const SUMMARY_CHART_DATA = [
  { name: 'Year 1', revenue: 68.5, ebitda: 22.4 },
  { name: 'Year 4', revenue: 118.0, ebitda: 48.0 },
  { name: 'Year 7', revenue: 155.0, ebitda: 72.5 },
];

const FinancialExecutiveSummary: React.FC = () => {
  return (
    <div className="w-full bg-slate-950 py-12">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Technical HUD Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-6 mb-10">
               <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500 shadow-gold-glow">
                  <Scan size={24} className="animate-pulse" />
               </div>
               <div className="space-y-1">
                  <span className="text-gold-500 uppercase text-[10px] font-black tracking-[0.6em] block">Core Fiscal Protocol</span>
                  <div className="text-white/40 text-[8px] font-mono uppercase tracking-widest">Auth_Node: SGT-KER-2025-v18.0</div>
               </div>
            </div>
            <h2 className="text-white font-serif text-6xl md:text-[8rem] leading-[0.8] tracking-tighter italic font-black">
               Capital <br/><span className="gold-gradient-text not-italic">Velocity.</span>
            </h2>
            <p className="text-slate-400 text-2xl font-light font-editorial italic leading-relaxed mt-12 max-w-3xl border-l-4 border-gold-500/40 pl-12 py-2">
              "An institutional yield engine de-risked through 100% debt-free land equity. SGT creates a structural barrier to entry in Kerala's high-velocity spiritual corridor."
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-auto">
            {[
              { l: "Target IRR", v: "24.2%", icon: TrendingUp, s: "7-Year Cycle" },
              { l: "Equity MOIC", v: "3.5x", icon: Activity, s: "Stabilized Exit" }
            ].map((m, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[4rem] flex flex-col items-center justify-center text-center min-w-[280px] group hover:bg-gold-500/5 transition-all duration-700 shadow-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <m.icon className="text-gold-500 mb-8 group-hover:scale-125 transition-transform duration-700" size={40} />
                <div className="text-white font-serif text-6xl mb-3 italic font-black relative z-10">{m.v}</div>
                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1 relative z-10">{m.l}</div>
                <div className="text-gold-600/40 text-[8px] font-black uppercase tracking-widest relative z-10">{m.s}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch h-full lg:min-h-[700px]">
          <div className="lg:col-span-8 bg-slate-900/60 border border-white/10 p-16 md:p-24 rounded-[5rem] shadow-3xl relative overflow-hidden group">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
              <BarChart3 size={600} className="text-white" />
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 relative z-10 gap-8">
              <div>
                <h3 className="text-white font-serif text-5xl mb-4 italic font-black leading-none">Fiscal Outlook</h3>
                <div className="flex items-center gap-4 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                   <Activity size={14} className="animate-pulse" /> Live_Sync_Operational
                </div>
              </div>
              <div className="flex gap-12 bg-white/5 px-10 py-5 rounded-full border border-white/10 backdrop-blur-md">
                 <div className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full bg-gold-500 shadow-gold-glow"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Gross_Rev</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full bg-slate-600"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">EBITDA_MARG</span>
                 </div>
              </div>
            </div>

            <div style={{ width: '100%', height: 400 }} className="relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SUMMARY_CHART_DATA} margin={{top: 20, right: 0, left: 0, bottom: 0}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#475569" 
                    fontSize={10} 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#64748b', fontWeight: 'black', textTransform: 'uppercase', letterSpacing: '0.2em' }} 
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', color: '#fff' }}
                    itemStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'black' }}
                  />
                  <Bar dataKey="revenue" fill="#D4AF37" radius={[12, 12, 0, 0]} barSize={80} />
                  <Bar dataKey="ebitda" fill="#334155" radius={[12, 12, 0, 0]} barSize={80} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-16 pt-10 border-t border-white/5 flex justify-center items-center gap-10 opacity-40">
               <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-slate-500">
                  <Database size={14} /> Ref_Ledger: SGT_Y7_P4
               </div>
               <div className="w-1 h-1 rounded-full bg-white/10"></div>
               <div className="text-[9px] font-black uppercase tracking-widest text-slate-500 italic">Big-4 Model Verified</div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-10">
            <div className="bg-white/5 border border-white/10 p-16 rounded-[4.5rem] flex flex-col justify-between flex-1 group relative overflow-hidden shadow-2xl hover:border-gold-500/40 transition-all duration-700">
                <div className="absolute top-[-10%] right-[-10%] text-white/5 font-serif text-[15rem] italic font-black pointer-events-none select-none">A</div>
                <Landmark size={64} className="text-gold-500 opacity-60 mb-12 group-hover:scale-110 transition-transform duration-700" />
                <div>
                   <h4 className="text-white font-serif text-5xl font-black italic mb-6 leading-none">Yield Alpha.</h4>
                   <p className="text-slate-500 text-sm font-light leading-relaxed italic border-l-2 border-gold-400 pl-8">"Landmark status ensures 24% ADR premium over regional fragmented supply cycles."</p>
                </div>
                <div className="pt-12 border-t border-white/10 flex justify-between items-center mt-10">
                    <span className="text-white/30 text-[10px] font-black uppercase tracking-widest">Cycle Target</span>
                    <span className="text-white font-serif text-4xl italic font-black">7 Yrs</span>
                </div>
            </div>
            
            <div className="bg-gold-500 p-16 rounded-[4.5rem] flex flex-col justify-between shadow-[0_40px_100px_rgba(212,175,55,0.3)] text-onyx-950 relative overflow-hidden transition-all duration-700 hover:scale-[1.02] cursor-pointer">
               <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
                  <ShieldCheck size={250} />
               </div>
               <div className="relative z-10 flex items-center gap-10">
                  <div className="w-16 h-16 rounded-2xl bg-onyx-950 text-gold-500 flex items-center justify-center shadow-2xl">
                     <IndianRupee size={32} />
                  </div>
                  <div>
                     <div className="text-[11px] font-black uppercase tracking-widest opacity-60 mb-1">Asset Status</div>
                     <div className="text-3xl font-serif italic font-black leading-none">Unencumbered <br/>Freehold.</div>
                  </div>
               </div>
               <button className="relative z-10 w-full bg-onyx-950 text-white py-8 rounded-[2rem] text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-6 shadow-3xl hover:bg-white hover:text-onyx-950 transition-all active:scale-95 group">
                  Transmit Full Ledger <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialExecutiveSummary;