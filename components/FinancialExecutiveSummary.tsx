import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
// Fix: Added ShieldCheck to the imported icons from lucide-react
import { 
  TrendingUp, IndianRupee, ArrowUpRight, Activity, BarChart3, Landmark, ShieldCheck
} from 'lucide-react';

const SUMMARY_CHART_DATA = [
  { name: 'Year 1', revenue: 68.0, ebitda: 18.6 },
  { name: 'Year 4', revenue: 118.0, ebitda: 48.0 },
  { name: 'Year 7', revenue: 155.0, ebitda: 72.5 },
  { name: 'Year 10', revenue: 182.0, ebitda: 91.0 },
];

const FinancialExecutiveSummary: React.FC = () => {
  return (
    <div className="w-full bg-onyx-950 py-12">
      <div className="container mx-auto px-6 max-w-[1600px]">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-500/30 rounded-full bg-gold-500/5 mb-8">
              <span className="text-gold-500 uppercase text-[9px] font-black tracking-[0.5em]">Executive Summary: Financial v4.2</span>
            </div>
            <h2 className="text-white font-serif text-5xl md:text-8xl leading-[0.85] tracking-tighter italic">
              Capital <br/><span className="gold-gradient-text italic font-black">Velocity.</span>
            </h2>
            <p className="text-slate-400 text-xl font-light leading-relaxed mt-10 max-w-xl border-l border-gold-500/30 pl-8">
              SGT is an institutional-grade yield asset. Our revenue model decouples profit from occupancy, leveraging high-margin experiential income.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { l: "Target IRR", v: "24.2%", icon: TrendingUp },
              { l: "Equity MOIC", v: "3.5x", icon: Activity }
            ].map((m, i) => (
              <div key={i} className="bg-onyx-900 border border-white/5 p-10 rounded-[3rem] shadow-sm flex flex-col items-center justify-center text-center min-w-[220px] group hover:bg-white/[0.04] transition-all">
                <m.icon className="text-gold-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
                <div className="text-white font-serif text-4xl mb-1 italic">{m.v}</div>
                <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest">{m.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch h-[55vh]">
          <div className="lg:col-span-8 bg-onyx-900 border border-white/10 p-12 md:p-16 rounded-[4rem] shadow-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform">
              <BarChart3 size={400} className="text-white" />
            </div>
            <div className="flex justify-between items-end mb-16 relative z-10">
              <div>
                <h3 className="text-white font-serif text-4xl mb-2 italic">Growth Trajectory</h3>
                <p className="text-slate-500 text-[10px] uppercase font-black tracking-[0.4em]">Revenue vs. EBITDA (₹ Cr)</p>
              </div>
            </div>

            <div style={{ width: '100%', height: '70%' }} className="relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SUMMARY_CHART_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={9} axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontWeight: 'bold' }} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff10', borderRadius: '16px' }} />
                  <Bar dataKey="revenue" fill="#D4AF37" radius={[10, 10, 0, 0]} barSize={50} />
                  <Bar dataKey="ebitda" fill="#334155" radius={[10, 10, 0, 0]} barSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white/[0.03] border border-white/10 p-12 rounded-[4rem] flex flex-col justify-between h-[300px] group relative overflow-hidden">
                <Landmark size={48} className="text-gold-500 opacity-60 mb-8" />
                <h4 className="text-white font-serif text-5xl font-black italic mb-6">High Alpha.</h4>
                <p className="text-slate-500 text-[9px] uppercase tracking-widest font-black">Validated Multiplier via Landmark Scarcity Index.</p>
                <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                    <span className="text-white/40 text-[9px] font-black uppercase tracking-widest">Horizon</span>
                    <span className="text-white font-serif text-3xl italic">7 Years</span>
                </div>
            </div>
            <div className="bg-gold-500 p-12 rounded-[4rem] flex flex-col justify-between h-[calc(55vh-324px)] group shadow-3xl text-onyx-950">
               <div className="flex items-center gap-6">
                  <ShieldCheck size={32} />
                  <div>
                     <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Capital Status</div>
                     <div className="text-2xl font-serif italic font-black">Zero-Debt Base</div>
                  </div>
               </div>
               <button className="w-full bg-onyx-950 text-white py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-3">
                  Data Room <ArrowUpRight size={14} />
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialExecutiveSummary;