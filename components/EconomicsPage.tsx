
import React from 'react';
import { ArrowLeft, IndianRupee, PieChart, TrendingUp, BarChart, ArrowRight, ShieldCheck, Target, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const EconomicsPage: React.FC = () => {
  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-6 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-8 hover:text-white transition-colors">
            <ArrowLeft size={12} /> Return to Summary
        </Link>
        <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Chapter 08: Financial Structure</span>
        <h1 className="text-white font-serif text-5xl md:text-7xl mb-6">Capital <span className="text-gold-500 italic">Allocation.</span></h1>
        <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            Transparent breakdown of the ₹350 Crore project cost and revenue yield logic.
        </p>
      </div>

      {/* Hero Stats */}
      <div className="w-full bg-onyx-900 border-y border-white/5 py-12 mb-20">
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: "Total Project Cost", val: "₹350 Cr", sub: "100% Asset-Backed" },
              { label: "Target IRR", val: "24.2%", sub: "Projected 7-Year Cycle" },
              { label: "EBITDA Margin", val: "45%", sub: "Stabilized Operations" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-onyx-950 border border-white/10 flex items-center justify-center text-gold-500">
                  <IndianRupee size={24} />
                </div>
                <div>
                  <div className="text-slate-500 text-[9px] uppercase tracking-widest font-black mb-1">{stat.label}</div>
                  <div className="text-white font-serif text-3xl">{stat.val}</div>
                  <div className="text-slate-600 text-[9px] uppercase tracking-widest">{stat.sub}</div>
                </div>
              </div>
            ))}
         </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
             <div className="space-y-12">
                 <div>
                    <h3 className="text-white font-serif text-3xl mb-6">Capex Deployment Logic</h3>
                    <p className="text-slate-300 text-lg leading-relaxed font-light">
                        Our capital allocation is prioritized towards high-yield structural components. By securing land as 100% unencumbered debt-free equity, we have significantly reduced the project's hurdle rate.
                    </p>
                 </div>
                 
                 <div className="space-y-6">
                     {[
                         { l: "Civil & Structural", v: "₹140 Cr", p: "40%", desc: "Reinforced concrete core for dual 20-floor towers." },
                         { l: "Interiors & FF&E", v: "₹105 Cr", p: "30%", desc: "7-star fit-outs including Italian marble and artisanal wood." },
                         { l: "MEP & Smart Systems", v: "₹70 Cr", p: "20%", desc: "AI-driven HVAC and high-speed vertical logistics." },
                         { l: "Pre-Ops & Marketing", v: "₹35 Cr", p: "10%", desc: "Brand launch and institutional team setup." }
                     ].map((item, i) => (
                         <div key={i} className="group">
                             <div className="flex justify-between items-end mb-3">
                                <div className="flex flex-col">
                                   <span className="text-white font-bold text-base group-hover:text-gold-400 transition-colors">{item.l}</span>
                                   <span className="text-slate-500 text-[10px]">{item.desc}</span>
                                </div>
                                <span className="text-white font-mono text-lg font-black">{item.v}</span>
                             </div>
                             <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-gold-500 transition-all duration-1000" style={{ width: item.p }}></div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>

             <div className="space-y-12">
                <div className="bg-onyx-900 border border-white/10 p-12 rounded-[3.5rem] shadow-3xl">
                   <h3 className="text-white font-serif text-2xl mb-8 flex items-center gap-3">
                      <Target className="text-gold-500" size={20} /> Revenue Arbitrage
                   </h3>
                   <div className="space-y-8">
                      <div className="p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-gold-500/30 transition-all">
                         <div className="flex items-center gap-4 mb-3">
                            <Activity size={18} className="text-gold-500" />
                            <span className="text-white font-bold text-sm uppercase tracking-widest">Room ADR: ₹12,000</span>
                         </div>
                         <p className="text-slate-500 text-xs leading-relaxed">Conservative ADR based on 5-star supply void in the 10km temple radius. Regional weddings drive peak pricing.</p>
                      </div>
                      <div className="p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-gold-500/30 transition-all">
                         <div className="flex items-center gap-4 mb-3">
                            <ShieldCheck size={18} className="text-gold-500" />
                            <span className="text-white font-bold text-sm uppercase tracking-widest">Banqueting Yield: ₹2.5Cr / Mo</span>
                         </div>
                         <p className="text-slate-500 text-xs leading-relaxed">The 15,000 sq ft ballroom is a high-margin engine independent of room occupancy fluctuations.</p>
                      </div>
                   </div>
                </div>
             </div>
         </div>

         <Link to="/risk" className="group relative block w-full h-[400px] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
            <img src="https://images.unsplash.com/photo-1512418490979-92798ccc1380?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-[0.3] transition-transform duration-[3s] group-hover:scale-105" alt="Next Section" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
               <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] mb-6">Next Chapter</span>
               <h3 className="text-white font-serif text-5xl md:text-7xl italic mb-10">Safeguards & <br/><span className="gold-gradient-text">Mitigation.</span></h3>
               <div className="w-16 h-16 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all">
                  <ArrowRight size={32} />
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default EconomicsPage;
