import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell
} from 'recharts';
import { 
  TrendingUp, IndianRupee, 
  ArrowUpRight, ShieldCheck, Activity,
  BarChart3, Landmark, Layers
} from 'lucide-react';

const SUMMARY_CHART_DATA = [
  { name: 'Year 1', revenue: 68.0, ebitda: 18.6 },
  { name: 'Year 4', revenue: 118.0, ebitda: 48.0 },
  { name: 'Year 7', revenue: 155.0, ebitda: 72.5 },
  { name: 'Year 10', revenue: 182.0, ebitda: 91.0 },
];

const REVENUE_DRIVERS = [
  {
    title: "Rooms & Suites",
    yield: "Anchor Revenue",
    contribution: "35%",
    desc: "Conservative occupancy baseline. Provides downside protection and covers fixed costs.",
    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80",
    color: "blue"
  },
  {
    title: "Weddings & Events",
    yield: "High Margin Engine",
    contribution: "25%",
    desc: "Architecture pays back here. Twin towers & podium drive disproportionate EBITDA impact.",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    color: "gold"
  },
  {
    title: "F&B + Experiential",
    yield: "Destination Pull",
    contribution: "40%",
    desc: "Non-resident footfall driven by sky-decks, revolving crowns, and brand installations.",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80",
    color: "emerald"
  }
];

const FinancialExecutiveSummary: React.FC = () => {
  return (
    <section className="py-48 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Background Architectural Patterns */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-50/30 blur-[180px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-32 gap-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-200 rounded-full bg-gold-50/50 mb-10">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              <span className="text-gold-600 uppercase text-[10px] font-black tracking-[0.5em]">Executive Summary: Financial Model v4.2</span>
            </div>
            <h2 className="text-slate-950 font-serif text-6xl md:text-9xl leading-[0.8] tracking-tighter italic">
              Capital <br/><span className="gold-gradient-text italic font-black">Velocity.</span>
            </h2>
            <p className="text-slate-500 text-2xl font-light leading-relaxed mt-12 max-w-2xl border-l-2 border-gold-400 pl-12">
              SGT is architected as an <strong>Institutional Yield Asset</strong>. Our revenue model decouples profit from simple occupancy, leveraging high-margin experiential income centers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-auto">
            {[
              { l: "Target IRR", v: "24.2%", icon: TrendingUp },
              { l: "Equity MOIC", v: "3.5x", icon: Activity }
            ].map((m, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-12 rounded-[3rem] shadow-sm flex flex-col items-center justify-center text-center min-w-[240px] group hover:bg-white hover:border-gold-400 transition-all duration-500">
                <m.icon className="text-gold-600 mb-6 group-hover:scale-110 transition-transform" size={32} />
                <div className="text-slate-950 font-serif text-5xl mb-2 italic">{m.v}</div>
                <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{m.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-40">
          {REVENUE_DRIVERS.map((item, i) => (
            <div key={i} className="group relative h-[650px] rounded-[4rem] overflow-hidden border border-slate-100 shadow-xl flex flex-col justify-end p-12 transition-all duration-700 hover:shadow-3xl bg-slate-50">
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" 
                  alt={item.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-40 transition-opacity"></div>
              </div>

              <div className="absolute top-12 left-12">
                <div className="bg-white/90 backdrop-blur-xl border border-gold-200 px-6 py-3 rounded-full shadow-lg">
                  <span className="text-gold-600 text-[10px] font-black uppercase tracking-widest">{item.contribution} Weighting</span>
                </div>
              </div>

              <div className="relative z-10 space-y-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                <div className="bg-white/90 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/50 shadow-2xl">
                   <div className="flex items-center gap-5 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gold-500 flex items-center justify-center text-white shadow-xl">
                        <IndianRupee size={24} />
                      </div>
                      <div>
                        <h4 className="text-slate-950 font-serif text-3xl italic">{item.title}</h4>
                        <p className="text-gold-600 text-[9px] font-black uppercase tracking-widest">{item.yield}</p>
                      </div>
                   </div>
                   <p className="text-slate-500 text-sm leading-relaxed font-light mb-4">
                     {item.desc}
                   </p>
                   <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                     <span className="text-[8px] text-slate-400 font-black uppercase tracking-widest italic opacity-0 group-hover:opacity-100 transition-opacity">Audited Projection</span>
                     <button className="text-slate-950 text-[9px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-gold-600 transition-colors">
                       Metrics <ArrowUpRight size={14} />
                     </button>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          <div className="lg:col-span-8 bg-[#FDFBF7] border border-slate-200 p-16 md:p-24 rounded-[5rem] shadow-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
              <BarChart3 size={400} className="text-slate-950" />
            </div>
            
            <div className="flex justify-between items-end mb-24 relative z-10">
              <div>
                <h3 className="text-slate-950 font-serif text-5xl mb-4 italic leading-none">Growth Trajectory</h3>
                <p className="text-slate-400 text-[10px] uppercase font-black tracking-[0.5em]">Consolidated Revenue vs. EBITDA (₹ Cr)</p>
              </div>
              <div className="flex gap-10">
                 <div className="flex items-center gap-3">
                   <div className="w-3 h-3 rounded-full bg-gold-500"></div>
                   <span className="text-slate-900 text-[10px] font-black uppercase tracking-widest">Gross</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-3 h-3 rounded-full bg-slate-950"></div>
                   <span className="text-slate-900 text-[10px] font-black uppercase tracking-widest">EBITDA</span>
                 </div>
              </div>
            </div>

            <div style={{ width: '100%', height: 450 }} className="relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SUMMARY_CHART_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#94a3b8" 
                    fontSize={10} 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#64748b', fontWeight: 'bold', textTransform: 'uppercase' }}
                  />
                  <YAxis stroke="#94a3b8" fontSize={10} axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #f1f5f9', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    itemStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'black' }}
                    cursor={{ fill: '#f8fafc' }}
                  />
                  <Bar dataKey="revenue" fill="#D4AF37" radius={[14, 14, 0, 0]} barSize={60} />
                  <Bar dataKey="ebitda" fill="#1e293b" radius={[14, 14, 0, 0]} barSize={60} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-slate-200 relative z-10">
               {[
                 { l: "Target EBITDA Margin", v: "35.4%", c: "text-gold-600" },
                 { l: "Occupancy Floor", v: "62.0%", c: "text-slate-950" },
                 { l: "Exit Multiple", v: "12.0x", c: "text-slate-950" },
                 { l: "WACC Benchmark", v: "10.2%", c: "text-slate-950" }
               ].map((stat, i) => (
                 <div key={i}>
                    <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-3">{stat.l}</div>
                    <div className={`font-serif text-3xl italic ${stat.c}`}>{stat.v}</div>
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-10">
            <div className="bg-slate-950 p-16 rounded-[4rem] flex flex-col justify-between shadow-3xl h-[450px] group relative overflow-hidden transition-all hover:scale-[1.01]">
              <div className="absolute top-[-10%] right-[-10%] text-white/[0.03] font-serif text-[20rem] font-black pointer-events-none italic leading-none">A</div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                   <Landmark size={48} className="text-gold-500 opacity-60" />
                   <span className="text-white text-[9px] font-black uppercase tracking-widest border border-white/20 px-5 py-2 rounded-full">Institutional Grade</span>
                </div>
                <h4 className="text-white font-serif text-7xl font-black tracking-tighter leading-none mb-8 italic">High Alpha.</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-bold uppercase tracking-widest">
                  Validated Revenue Multiplier via Landmark Scarcity Index.
                </p>
              </div>
              <div className="relative z-10 pt-10 border-t border-white/10 flex items-center justify-between">
                <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Realization Term</span>
                <span className="text-white font-serif text-4xl italic">7 Years</span>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-12 rounded-[4rem] shadow-xl h-[340px] relative overflow-hidden group">
               <div className="absolute inset-0 bg-gold-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
               <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <h4 className="text-slate-950 font-serif text-3xl mb-4 italic">Equity Security</h4>
                    <p className="text-slate-400 text-[10px] leading-relaxed uppercase tracking-[0.3em] font-black">100% Unencumbered Freehold Land Sovereignty.</p>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group-hover:bg-white group-hover:border-gold-300 transition-all duration-500">
                     <div className="flex items-center gap-5 text-emerald-600">
                        <ShieldCheck size={32} />
                        <div>
                           <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Capital Status</div>
                           <div className="text-slate-950 font-bold text-lg">Zero-Debt Base</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-32 flex flex-col md:flex-row items-center justify-between gap-12 pt-16 border-t border-slate-100">
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center text-gold-600 shadow-sm group hover:border-gold-400 transition-all">
              <Layers size={32} className="group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <p className="text-slate-950 text-2xl font-serif italic">Operational Stress Testing</p>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Access dynamic modeling terminal for sensitivity analysis</p>
            </div>
          </div>
          <button className="group px-16 py-8 bg-slate-950 hover:bg-gold-500 text-white rounded-full text-[11px] font-black uppercase tracking-[0.5em] transition-all shadow-2xl flex items-center gap-6 active:scale-95">
            Authorize Data Room Access <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinancialExecutiveSummary;