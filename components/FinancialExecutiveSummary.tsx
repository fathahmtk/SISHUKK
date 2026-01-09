import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Activity, BarChart3, Landmark, ShieldCheck, ArrowUpRight } from 'lucide-react';

const SUMMARY_CHART_DATA = [
  { name: 'Year 1', revenue: 68.5, ebitda: 22.4 },
  { name: 'Year 4', revenue: 118.0, ebitda: 48.0 },
  { name: 'Year 7', revenue: 155.0, ebitda: 72.5 },
];

const FinancialExecutiveSummary: React.FC = () => {
  return (
    <div className="w-full bg-onyx-950 py-24">
      <div className="container mx-auto px-6 max-w-[1600px]">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-500/30 rounded-full bg-gold-500/5 mb-10">
              <span className="text-gold-500 uppercase text-[10px] font-black tracking-[0.6em]">Financial Core Protocol v2.5</span>
            </div>
            <h2 className="text-white font-serif text-6xl md:text-[9rem] leading-[0.8] tracking-tighter italic">
              Capital <br/><span className="gold-gradient-text italic font-black">Velocity.</span>
            </h2>
            <p className="text-slate-400 text-2xl font-light leading-relaxed mt-12 max-w-2xl border-l-2 border-gold-500/30 pl-10">
              SIRSHUKK is an institutional-grade yield engine. By securing 100% freehold land equity, we've minimized cost of capital and de-risked the ₹350 Crore development path.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {[
              { l: "Target IRR", v: "24.2%", icon: TrendingUp },
              { l: "Equity MOIC", v: "3.5x", icon: Activity }
            ].map((m, i) => (
              <div key={i} className="bg-onyx-900 border border-white/5 p-12 rounded-[4rem] flex flex-col items-center justify-center text-center min-w-[280px] group hover:bg-white/[0.04] transition-all duration-700 shadow-3xl">
                <m.icon className="text-gold-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
                <div className="text-white font-serif text-5xl mb-2 italic font-black">{m.v}</div>
                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{m.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch h-[65vh]">
          <div className="lg:col-span-8 bg-onyx-900 border border-white/10 p-16 md:p-24 rounded-[5rem] shadow-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
              <BarChart3 size={500} className="text-white" />
            </div>
            <div className="flex justify-between items-end mb-24 relative z-10">
              <div>
                <h3 className="text-white font-serif text-5xl mb-3 italic">Fiscal Trajectory</h3>
                <p className="text-slate-500 text-[11px] uppercase font-black tracking-[0.5em]">Gross Revenue vs. Operating EBITDA (₹ Cr)</p>
              </div>
              <div className="hidden md:flex gap-10">
                 <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gold-500 shadow-gold-glow"></div>
                    <span className="text-[10px] font-black uppercase text-slate-400">Revenue</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <span className="text-[10px] font-black uppercase text-slate-400">EBITDA</span>
                 </div>
              </div>
            </div>

            <div style={{ width: '100%', height: '70%' }} className="relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SUMMARY_CHART_DATA} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" vertical={false} />
                  <XAxis dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontWeight: 'black', textTransform: 'uppercase', letterSpacing: '0.1em' }} />
                  <Tooltip contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', color: '#fff' }} />
                  <Bar dataKey="revenue" fill="#D4AF37" radius={[14, 14, 0, 0]} barSize={60} />
                  <Bar dataKey="ebitda" fill="#334155" radius={[14, 14, 0, 0]} barSize={60} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/[0.03] border border-white/10 p-16 rounded-[4.5rem] flex flex-col justify-between h-[350px] group relative overflow-hidden shadow-2xl">
                <Landmark size={64} className="text-gold-500 opacity-60 mb-10 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-serif text-5xl font-black italic mb-4 leading-none">High Alpha.</h4>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-black italic">Landmark scarcity index ensures 24% ADR premium over regional fragmented supply.</p>
                <div className="pt-10 border-t border-white/5 flex justify-between items-center">
                    <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Cycle Horizon</span>
                    <span className="text-white font-serif text-4xl italic font-black">7 Years</span>
                </div>
            </div>
            <div className="bg-gold-500 p-16 rounded-[4.5rem] flex flex-col justify-between h-[calc(65vh-382px)] group shadow-[0_40px_100px_rgba(212,175,55,0.3)] text-onyx-950 relative overflow-hidden transition-all hover:scale-[1.02]">
               <div className="absolute top-0 right-0 p-12 opacity-10">
                  <ShieldCheck size={200} />
               </div>
               <div className="relative z-10 flex items-center gap-8">
                  <ShieldCheck size={48} className="shadow-2xl" />
                  <div>
                     <div className="text-[11px] font-black uppercase tracking-widest opacity-70 mb-1">Capital Status</div>
                     <div className="text-3xl font-serif italic font-black">Zero-Debt Land Base</div>
                  </div>
               </div>
               <a 
                 href="/#/report"
                 className="relative z-10 w-full bg-onyx-950 text-white py-6 rounded-[2rem] text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-4 shadow-3xl hover:bg-white hover:text-onyx-950 transition-all"
                >
                  Full Technical Dossier <ArrowUpRight size={18} />
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialExecutiveSummary;