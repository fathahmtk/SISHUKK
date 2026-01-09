import React from 'react';
import { ArrowLeft, IndianRupee, PieChart, TrendingUp, BarChart, ArrowRight, ShieldCheck, Target, Activity, CheckCircle2, Layers, Landmark, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const EconomicsPage: React.FC = () => {
  const deployment = [
    { l: "Civil & Structural Core", v: "₹140 Cr", p: "40%", desc: "Reinforced concrete core for dual 20-floor towers, including Meridian Arch truss." },
    { l: "7-Star Interiors & FF&E", v: "₹105 Cr", p: "30%", desc: "Bespoke fit-outs featuring Italian marble and artisanal temple-craft wood." },
    { l: "MEP & Smart AI Systems", v: "₹70 Cr", p: "20%", desc: "AI-driven HVAC management and 12 high-speed vertical logistics cores." },
    { l: "Pre-Opening & Launch", v: "₹35 Cr", p: "10%", desc: "Institutional brand rollout and core hospitality leadership recruitment." }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-40 animate-fade-in overflow-hidden">
      {/* Background Decor */}
      <div className="fixed top-0 right-0 w-1/3 h-screen bg-[#FDFBF7] -z-10 pointer-events-none border-l border-slate-100"></div>
      <div className="fixed top-[20%] left-[5%] text-slate-50 font-serif text-[40rem] font-black -z-20 pointer-events-none select-none italic leading-none opacity-60">F</div>

      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-4 text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] mb-16 hover:text-slate-950 transition-all group">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-40">
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-5">
              <div className="w-12 h-[1px] bg-gold-400"></div>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.6em]">Chapter 08: Financial Structure</span>
            </div>
            <h1 className="text-slate-950 font-serif text-6xl md:text-[8rem] leading-[0.8] tracking-tighter italic">Capital <br/><span className="gold-gradient-text italic font-black">Allocation.</span></h1>
            <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-2xl italic">
                "Strategic financial deployment of the ₹350 Crore capital outlay. Securing land as 100% unencumbered equity minimizes cost of capital."
            </p>
          </div>
          
          <div className="lg:col-span-5 pt-20">
             <div className="bg-white border border-slate-200 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                   <IndianRupee size={300} className="text-slate-950" />
                </div>
                <div className="relative z-10">
                   <div className="flex items-center gap-5 mb-10">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-gold-600 shadow-xl group-hover:bg-gold-500 group-hover:text-white transition-all">
                         <Calculator size={28} />
                      </div>
                      <h4 className="text-slate-950 font-serif text-3xl italic">Audit v2.5</h4>
                   </div>
                   <div className="text-slate-950 font-serif text-7xl font-black mb-4 italic leading-none">₹350 Cr</div>
                   <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] mb-10">Total Asset Cost Basis</p>
                   <div className="pt-8 border-t border-slate-100 flex items-center justify-between opacity-40">
                      <span className="text-[10px] font-black uppercase tracking-widest">Big-4 Audited Model</span>
                      <ShieldCheck size={20} className="text-gold-500" />
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Institutional Stats Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40 border-y border-slate-100 py-16">
            {[
              { label: "Equity Hurdle", val: "10.2%", sub: "Risk-Adjusted WACC" },
              { label: "Target IRR", val: "24.2%", sub: "7-Year Realization" },
              { label: "EBITDA Margin", val: "45.4%", sub: "Stabilized Base Case" }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-3 group-hover:text-gold-600 transition-colors">{stat.label}</div>
                <div className="text-slate-950 font-serif text-5xl mb-2 italic leading-none">{stat.val}</div>
                <div className="text-gold-600 text-[10px] uppercase tracking-widest font-black italic">{stat.sub}</div>
              </div>
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-40 pt-24 border-t border-slate-100">
             <div className="lg:col-span-7 space-y-20">
                 <h3 className="text-slate-950 font-serif text-5xl md:text-[6rem] italic leading-[0.9] tracking-tighter">Strategic <br/><span className="gold-gradient-text not-italic font-black">Waterfall.</span></h3>
                 <div className="space-y-16">
                     {deployment.map((item, i) => (
                         <div key={i} className="group/row">
                             <div className="flex justify-between items-baseline mb-6">
                                <div className="flex flex-col">
                                   <span className="text-slate-950 font-serif text-3xl group-hover/row:text-gold-600 transition-colors italic leading-none mb-4">{item.l}</span>
                                   <span className="text-slate-400 text-[11px] uppercase tracking-[0.2em] font-black leading-relaxed max-w-lg border-l-2 border-slate-100 pl-6 group-hover/row:border-gold-400 transition-all">{item.desc}</span>
                                </div>
                                <div className="text-right">
                                   <span className="text-slate-950 font-mono text-3xl font-black">{item.v}</span>
                                   <div className="text-gold-600 text-[9px] font-black uppercase tracking-widest mt-2">{item.p} of Capex</div>
                                </div>
                             </div>
                             <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-gold-500 shadow-[0_0_15px_#D4AF37] transition-all duration-[2.5s] ease-out group-hover/row:opacity-80" style={{ width: item.p }}></div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>

             <div className="lg:col-span-5">
                <div className="bg-[#FDFBF7] border border-slate-200 p-12 md:p-16 rounded-[4rem] shadow-3xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-16 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform">
                      <Target size={350} className="text-slate-950" />
                   </div>
                   <h3 className="text-slate-950 font-serif text-4xl mb-16 flex items-center gap-6 relative z-10 italic">
                      <ShieldCheck className="text-gold-500" size={32} /> Safety & Solvency
                   </h3>
                   <div className="space-y-12 relative z-10">
                      {[
                        { t: "DSCR Threshold", v: "2.1x", d: "Conservative debt service coverage." },
                        { t: "Payback Horizon", v: "5.4Y", d: "Projected capital recovery post-opening." },
                        { t: "Floor Valuation", v: "100%", d: "Asset backed by debt-free land equity." }
                      ].map((stat, i) => (
                        <div key={i} className="group/stat">
                           <div className="flex justify-between items-baseline mb-4">
                              <div className="text-slate-950 font-bold text-sm uppercase tracking-widest group-hover/stat:text-gold-600 transition-colors">{stat.t}</div>
                              <div className="text-gold-600 font-serif text-4xl font-black pl-8 italic">{stat.v}</div>
                           </div>
                           <p className="text-slate-400 text-xs italic leading-relaxed border-l border-slate-200 pl-6">{stat.d}</p>
                        </div>
                      ))}
                   </div>
                   <div className="mt-20 pt-10 border-t border-slate-100 flex items-center justify-center">
                      <p className="text-[10px] text-slate-300 font-black uppercase tracking-[0.5em] italic">XIRR Methodology Verified Jan 2025</p>
                   </div>
                </div>
             </div>
         </div>

         {/* Next Link */}
         <Link to="/risk" className="group relative block w-full h-[650px] rounded-[6rem] overflow-hidden border border-slate-200 shadow-3xl bg-slate-50">
            <img src="https://images.unsplash.com/photo-1512418490979-92798ccc1380?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" alt="Next" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-20 transition-opacity"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
               <span className="text-gold-600 text-[11px] font-black uppercase tracking-[1em] mb-12 block animate-float">Chapter 09</span>
               <h3 className="text-slate-950 font-serif text-7xl md:text-9xl italic mb-20">Risk <br/><span className="gold-gradient-text not-italic font-black tracking-tighter">Mitigation.</span></h3>
               <div className="w-32 h-32 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all duration-1000 shadow-3xl">
                  <ArrowRight size={56} className="group-hover:translate-x-4 transition-transform" />
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default EconomicsPage;