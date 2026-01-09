import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Coins, Briefcase, Landmark, ShieldCheck, CheckCircle2, ArrowUpRight, BarChart3, Target } from 'lucide-react';

const CAPITAL_STACK = [
  { name: 'Bank Debt', value: 210, color: '#1e293b' },
  { name: 'Promoter Equity', value: 70, color: '#475569' },
  { name: 'Investor Tranche', value: 70, color: '#D4AF37' },
];

const InvestmentFramework: React.FC = () => {
  return (
    <section id="framework" className="py-40 bg-onyx-950 relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-4xl">
            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-6">Section 07: Capital Framework</span>
            <h2 className="text-white font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter mb-8 italic">Development <br/><span className="gold-gradient-text italic font-black">Cost.</span></h2>
            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-2xl border-l border-gold-500/30 pl-10">
              Total project cost allocation is intentionally front-loaded to support long-term yield and exit valuation. The breakdown prioritizes structural integrity and high-margin finishings.
            </p>
          </div>
          
          <div className="bg-onyx-900 border border-white/10 p-10 rounded-[2.5rem] shadow-2xl flex flex-col gap-6">
             <div className="flex items-center gap-4">
                <Target className="text-gold-500" size={24} />
                <div>
                   <div className="text-white font-serif text-3xl">₹350 Cr</div>
                   <div className="text-slate-500 text-[8px] font-black uppercase tracking-widest">Total Capital Outlay</div>
                </div>
             </div>
             <div className="h-px bg-white/5 w-full"></div>
             <div className="flex items-center gap-4">
                <ShieldCheck className="text-emerald-500" size={24} />
                <div>
                   <div className="text-white font-bold text-sm">Asset Backed</div>
                   <div className="text-slate-500 text-[8px] font-black uppercase tracking-widest">100% Freehold Land</div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          {/* Capital Stack Card */}
          <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 p-12 rounded-[4rem] relative overflow-hidden group shadow-3xl">
             <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                <BarChart3 size={250} className="text-gold-500" />
             </div>
             <h3 className="text-white font-serif text-3xl mb-12 italic">Source of Funds</h3>
             
             {/* Explicit Dimensions for Recharts */}
             <div style={{ width: '100%', height: 320 }} className="relative">
                <ResponsiveContainer width="100%" height="100%">
                   <PieChart>
                      <Pie data={CAPITAL_STACK} innerRadius="65%" outerRadius="90%" paddingAngle={8} dataKey="value">
                         {CAPITAL_STACK.map((e, i) => <Cell key={i} fill={e.color} stroke="none" />)}
                      </Pie>
                      <Tooltip contentStyle={{backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '16px'}} />
                   </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                   <span className="text-white font-serif text-5xl font-black">60:40</span>
                   <span className="text-slate-500 text-[9px] font-black uppercase tracking-widest">Debt/Equity Ratio</span>
                </div>
             </div>
             
             <div className="grid grid-cols-3 gap-6 mt-12 border-t border-white/5 pt-8">
                {CAPITAL_STACK.map((item, i) => (
                   <div key={i} className="text-center">
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">{item.name}</div>
                      <div className="text-white font-mono text-lg">₹{item.value}Cr</div>
                   </div>
                ))}
             </div>
          </div>

          {/* Deployment Table - Updated Splits */}
          <div className="lg:col-span-7 flex flex-col gap-6">
             {[
               { l: "Structural & Core Construction", v: "45%", d: "Twin-tower shell, central arch, and basement core." },
               { l: "Architectural Façade & Arch", v: "15%", d: "DGU glazing, signature truss work, and exterior finishes." },
               { l: "Interior Luxury Fit-outs", v: "20%", d: "7-star finishing, marble, wood, and FF&E." },
               { l: "Podium, Landscape & Water", v: "10%", d: "Arrival courts, pools, and hardscaping." },
               { l: "Pre-opening & Contingency", v: "10%", d: "Branding, launch, and operational reserves." }
             ].map((item, i) => (
               <div key={i} className="p-10 bg-onyx-900 border border-white/5 rounded-[3rem] hover:bg-white/[0.04] hover:border-gold-500/30 transition-all duration-500 group">
                  <div className="flex justify-between items-end mb-6">
                     <div className="flex flex-col">
                        <h4 className="text-white font-serif text-3xl group-hover:text-gold-400 transition-colors mb-1">{item.l}</h4>
                        <span className="text-slate-500 text-sm font-light italic">{item.d}</span>
                     </div>
                     <div className="text-right">
                        <div className="text-white font-mono text-2xl font-black">{item.v}</div>
                        <div className="text-gold-500 text-[8px] font-black uppercase tracking-widest mt-1">Allocation</div>
                     </div>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-gold-500 shadow-[0_0_10px_#D4AF37] transition-all duration-[2s]" style={{ width: item.v }}></div>
                  </div>
               </div>
             ))}
          </div>
        </div>

        {/* Tranche Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { t: "Equity IRR", v: "Low-to-Mid 20s", sub: "Risk-Adjusted Target", icon: Briefcase },
             { t: "Target MOIC", v: "2.8x - 3.5x", sub: "7-Year Horizon", icon: Landmark, best: true },
             { t: "Payback Period", v: "Mid-Cycle", sub: "Strong Operating Cash", icon: ShieldCheck }
           ].map((card, i) => (
             <div key={i} className={`p-12 rounded-[4rem] border transition-all duration-500 relative flex flex-col justify-between h-[350px] ${
               card.best ? 'bg-gold-500 text-onyx-950 border-gold-500 shadow-3xl scale-105 z-10' : 'bg-white/5 border-white/10 text-white hover:bg-white/[0.08]'
             }`}>
                {card.best && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-white text-onyx-950 text-[10px] font-black uppercase tracking-widest rounded-full shadow-2xl">Preferred Metric</div>}
                
                <div>
                   <card.icon size={48} className={card.best ? 'text-onyx-950 opacity-40' : 'text-gold-500'} />
                   <div className="mt-10">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-2">{card.t}</h4>
                      <p className="text-3xl font-serif font-black">{card.v}</p>
                   </div>
                </div>

                <div className="pt-8 border-t border-black/5 flex items-center justify-between">
                   <span className={`text-[10px] font-black uppercase tracking-widest ${card.best ? 'text-onyx-950/60' : 'text-slate-500'}`}>{card.sub}</span>
                   <ArrowUpRight size={24} className={card.best ? 'text-onyx-950' : 'text-gold-500'} />
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentFramework;