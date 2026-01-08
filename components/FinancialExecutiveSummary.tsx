
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell, PieChart, Pie
} from 'recharts';
import { 
  TrendingUp, IndianRupee, PieChart as PieIcon, 
  ArrowUpRight, ShieldCheck, Activity, Target,
  Briefcase, BarChart3, Info, Landmark, Layers
} from 'lucide-react';

const SUMMARY_CHART_DATA = [
  { name: 'Year 1', revenue: 68.0, ebitda: 30.6 },
  { name: 'Year 3', revenue: 92.0, ebitda: 46.0 },
  { name: 'Year 5', revenue: 118.0, ebitda: 64.9 },
  { name: 'Year 7', revenue: 145.0, ebitda: 79.8 },
];

const REVENUE_DRIVERS = [
  {
    title: "Events & Weddings",
    yield: "₹2.5Cr / Mo",
    contribution: "55%",
    desc: "15,000 sq ft pillar-less engine. Recession-proof spiritual ritual demand.",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    color: "gold"
  },
  {
    title: "Room Inventory",
    yield: "₹12,000 ADR",
    contribution: "30%",
    desc: "420 luxury keys (Dual Tower). High-velocity pilgrim and NRI occupancy.",
    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80",
    color: "blue"
  },
  {
    title: "Gastronomy",
    yield: "₹1.2Cr / Mo",
    contribution: "10%",
    desc: "Dual revolving rooftop restaurants. Destination dining for the entire region.",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80",
    color: "emerald"
  }
];

const FinancialExecutiveSummary: React.FC = () => {
  return (
    <section className="py-32 bg-onyx-950 relative overflow-hidden border-b border-white/5">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Cinematic Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-gold-500/30 rounded-full bg-gold-500/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              <span className="text-gold-400 uppercase text-[10px] font-black tracking-[0.4em]">Section 08: Financial Architecture</span>
            </div>
            <h2 className="text-white font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter">
              Yield <br/><span className="gold-gradient-text italic font-black">Performance.</span>
            </h2>
            <p className="text-slate-400 text-xl font-light leading-relaxed mt-10 max-w-2xl border-l border-gold-500/30 pl-8">
              An institutional-grade analysis of the ₹350 Crore capital deployment. SGT is engineered for consistent alpha through a 7-year stabilization cycle.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
            {[
              { l: "Target IRR", v: "24.2%", icon: TrendingUp },
              { l: "Equity Multiple", v: "3.5x", icon: Activity }
            ].map((m, i) => (
              <div key={i} className="bg-onyx-900 border border-white/10 p-8 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center text-center min-w-[200px]">
                <m.icon className="text-gold-500 mb-4" size={24} />
                <div className="text-white font-serif text-4xl mb-1">{m.v}</div>
                <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest">{m.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Showcase: Revenue Engines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {REVENUE_DRIVERS.map((item, i) => (
            <div key={i} className="group relative h-[600px] rounded-[3rem] overflow-hidden border border-white/5 shadow-3xl flex flex-col justify-end p-10 cursor-default">
              {/* Background Image with Parallax-like scale */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-110 brightness-[0.4] group-hover:brightness-[0.6]" 
                  alt={item.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/40 to-transparent"></div>
              </div>

              {/* Top Yield Tag */}
              <div className="absolute top-10 right-10">
                <div className="bg-gold-500/10 backdrop-blur-xl border border-gold-500/30 px-5 py-2 rounded-full shadow-2xl">
                  <span className="text-gold-400 text-[10px] font-black uppercase tracking-widest">{item.contribution} Contribution</span>
                </div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 space-y-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold-500 flex items-center justify-center text-onyx-950 shadow-2xl">
                    <IndianRupee size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-3xl">{item.title}</h4>
                    <p className="text-gold-500 font-mono text-lg font-black">{item.yield}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {item.desc}
                </p>
                <div className="pt-6 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                  <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest italic">Audited Projection</span>
                  <button className="text-white text-[9px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-gold-500 transition-colors">
                    Model Details <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Terminal: Charts & Exit Strategy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Revenue Velocity Chart Card */}
          <div className="lg:col-span-8 bg-onyx-900/50 backdrop-blur-3xl border border-white/10 p-12 rounded-[4rem] shadow-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
              <BarChart3 size={300} className="text-gold-500" />
            </div>
            
            <div className="flex justify-between items-center mb-16 relative z-10">
              <div>
                <h3 className="text-white font-serif text-4xl mb-2">Growth Trajectory</h3>
                <p className="text-slate-500 text-[10px] uppercase font-black tracking-[0.4em]">Annual Gross vs Operating EBITDA (₹ Cr)</p>
              </div>
              <div className="flex gap-8">
                 <div className="flex items-center gap-3">
                   <div className="w-3 h-3 rounded-full bg-gold-500 shadow-[0_0_10px_#D4AF37]"></div>
                   <span className="text-white text-[10px] font-black uppercase tracking-widest">Revenue</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_10px_#2563eb]"></div>
                   <span className="text-white text-[10px] font-black uppercase tracking-widest">EBITDA</span>
                 </div>
              </div>
            </div>

            <div className="h-[400px] w-full relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SUMMARY_CHART_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#475569" 
                    fontSize={10} 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#64748b', fontWeight: 'bold' }}
                  />
                  <YAxis 
                    stroke="#475569" 
                    fontSize={10} 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#64748b' }}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', color: '#fff' }}
                    itemStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}
                    cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                  />
                  <Bar dataKey="revenue" fill="#D4AF37" radius={[12, 12, 0, 0]} barSize={50} />
                  <Bar dataKey="ebitda" fill="#2563eb" radius={[12, 12, 0, 0]} barSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/5 relative z-10">
               {[
                 { l: "EBITDA Margin", v: "45.0%" },
                 { l: "Stabilized Occupancy", v: "72.0%" },
                 { l: "Blended RevPAR", v: "₹8,280" },
                 { l: "Debt Coverage", v: "2.1x DSCR" }
               ].map((stat, i) => (
                 <div key={i}>
                    <div className="text-slate-600 text-[9px] font-black uppercase tracking-widest mb-1">{stat.l}</div>
                    <div className="text-white font-mono text-xl">{stat.v}</div>
                 </div>
               ))}
            </div>
          </div>

          {/* Strategic Exit Terminal */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gold-500 p-12 rounded-[4rem] flex flex-col justify-between shadow-[0_40px_80px_rgba(212,175,55,0.2)] h-[400px] group cursor-default transition-all hover:scale-[1.02]">
              <div>
                <div className="flex justify-between items-start mb-10">
                   <Landmark size={40} className="text-onyx-950 opacity-40" />
                   <span className="text-onyx-950 text-[10px] font-black uppercase tracking-widest bg-white/30 px-4 py-2 rounded-full border border-white/20">REIT-READY</span>
                </div>
                <h4 className="text-onyx-950 font-serif text-6xl font-black tracking-tighter leading-none mb-6">₹1,236 Cr</h4>
                <p className="text-onyx-950/80 text-sm leading-relaxed font-bold uppercase tracking-wider">
                  Target Enterprise Value <br/>Institutional Exit Year 7
                </p>
              </div>
              <div className="pt-8 border-t border-onyx-950/10 flex items-center justify-between">
                <span className="text-onyx-950 text-[10px] font-black uppercase tracking-widest">Multiple</span>
                <span className="text-onyx-950 font-serif text-3xl font-black">12.0x</span>
              </div>
            </div>

            <div className="bg-onyx-900 border border-white/10 p-12 rounded-[4rem] shadow-2xl h-[340px] relative overflow-hidden group">
               <div className="absolute inset-0 z-0">
                  <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-[0.2] transition-transform duration-[10s] group-hover:scale-110" alt="" />
               </div>
               <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <h4 className="text-white font-serif text-2xl mb-4">Capital Security</h4>
                    <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-widest font-black">100% Unencumbered Freehold Land Equity.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                     <div className="flex items-center gap-4 text-emerald-500">
                        <ShieldCheck size={24} />
                        <div>
                           <div className="text-[10px] font-black uppercase tracking-widest">Asset Status</div>
                           <div className="text-white font-bold">100% Debt-Free Base</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>

        </div>

        {/* Global Action Strip */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-onyx-900 border border-white/10 flex items-center justify-center text-gold-500 shadow-2xl">
              <Layers size={28} />
            </div>
            <div>
              <p className="text-white text-xl font-serif">Dynamic Sensitivity Analysis</p>
              <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest">Institutional Partners can model custom ADR/Occ scenarios below</p>
            </div>
          </div>
          <button className="group px-12 py-7 bg-gold-500 hover:bg-white text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.4em] transition-all shadow-3xl flex items-center gap-6">
            Request Data Room Access <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinancialExecutiveSummary;
