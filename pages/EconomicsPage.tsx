import React from 'react';
import { ArrowLeft, IndianRupee, PieChart, TrendingUp, BarChart, ArrowRight, ShieldCheck, Target, Activity, CheckCircle2, Layers, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const EconomicsPage: React.FC = () => {
  const deployment = [
    { l: "Civil & Structural Core", v: "₹140 Cr", p: "40%", desc: "Reinforced concrete core for dual 20-floor towers, including Meridian Arch truss." },
    { l: "7-Star Interiors & FF&E", v: "₹105 Cr", p: "30%", desc: "Bespoke fit-outs featuring Italian marble and artisanal temple-craft wood." },
    { l: "MEP & Smart AI Systems", v: "₹70 Cr", p: "20%", desc: "AI-driven HVAC management and 12 high-speed vertical logistics cores." },
    { l: "Pre-Opening & Launch", v: "₹35 Cr", p: "10%", desc: "Institutional brand rollout and core hospitality leadership recruitment." }
  ];

  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in pb-20">
      <div className="container mx-auto px-6 mb-20">
        <Link to="/" className="inline-flex items-center gap-3 text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-12 hover:text-white transition-all group">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
        </Link>
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-slate-500 text-[10px] font-black uppercase tracking-[0.6em] mb-6">
              <Landmark size={14} /> Dossier Chapter 08: Financial Structure
            </div>
            <h1 className="text-white font-serif text-6xl md:text-9xl leading-[0.8] tracking-tighter mb-10 italic">Capital <br/><span className="gold-gradient-text italic font-black">Allocation.</span></h1>
            <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-gold-500/30 pl-10">
                Strategic financial deployment of the ₹350 Crore capital outlay. By securing land as 100% unencumbered debt-free equity, we minimize cost of capital and maximize net operational alpha.
            </p>
          </div>
          <div className="bg-onyx-900 border border-white/10 p-8 rounded-[2.5rem] hidden lg:block shadow-3xl">
            <div className="flex items-center gap-4 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-3">
              <ShieldCheck size={18} /> Asset Audit v2.5
            </div>
            <p className="text-slate-400 text-xs font-mono">Cost Basis: <br/><span className="text-white">FIXED-PRICE EPC CONTRACTS</span></p>
          </div>
        </div>
      </div>

      {/* Institutional Stats Strip */}
      <div className="w-full bg-onyx-900 border-y border-white/5 py-16 mb-40 shadow-inner">
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { label: "Total Asset Cost", val: "₹350 Cr", sub: "100% Asset-Backed" },
              { label: "Equity Hurdle", val: "10.2%", sub: "Risk-Adjusted WACC" },
              { label: "EBITDA Margin", val: "45.4%", sub: "Stabilized Base Projection" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-10 group">
                <div className="w-20 h-20 rounded-[2rem] bg-onyx-950 border border-white/10 flex items-center justify-center text-gold-500 shadow-3xl group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-500">
                  <IndianRupee size={32} />
                </div>
                <div>
                  <div className="text-slate-600 text-[10px] font-black uppercase tracking-widest mb-2 group-hover:text-gold-500 transition-colors">{stat.label}</div>
                  <div className="text-white font-serif text-5xl mb-1">{stat.val}</div>
                  <div className="text-slate-700 text-[9px] uppercase tracking-widest font-black italic">{stat.sub}</div>
                </div>
              </div>
            ))}
         </div>
      </div>

      <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 mb-40">
             <div className="lg:col-span-7 space-y-16">
                 <div className="space-y-4">
                    <span className="text-gold-500 text-[11px] font-black uppercase tracking-[0.6em] block">Resource Deployment</span>
                    <h3 className="text-white font-serif text-5xl italic leading-tight">Strategic Capex <br/>Waterfall.</h3>
                 </div>
                 <div className="space-y-12">
                     {deployment.map((item, i) => (
                         <div key={i} className="group">
                             <div className="flex justify-between items-end mb-6">
                                <div className="flex flex-col">
                                   <span className="text-white font-serif text-3xl group-hover:text-gold-400 transition-colors italic">{item.l}</span>
                                   <span className="text-slate-500 text-[11px] uppercase tracking-widest font-black mt-2 leading-relaxed max-w-lg">{item.desc}</span>
                                </div>
                                <div className="text-right">
                                   <span className="text-white font-mono text-2xl font-black">{item.v}</span>
                                   <div className="text-gold-500 text-[10px] font-black mt-1">{item.p} of Budget</div>
                                </div>
                             </div>
                             <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-gold-500 shadow-[0_0_15px_#D4AF37] transition-all duration-[2.5s] ease-out group-hover:opacity-80" style={{ width: item.p }}></div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>

             <div className="lg:col-span-5 space-y-10">
                <div className="bg-onyx-900 border border-white/10 p-12 md:p-16 rounded-[4rem] shadow-3xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                      <Target size={250} className="text-gold-500" />
                   </div>
                   <h3 className="text-white font-serif text-3xl mb-12 flex items-center gap-6 relative z-10 italic">
                      <ShieldCheck className="text-gold-500" size={32} /> Safety & Solvency
                   </h3>
                   <div className="space-y-12 relative z-10">
                      {[
                        { t: "DSCR Threshold", v: "2.1x", d: "Conservative debt service coverage." },
                        { t: "Payback Horizon", v: "5.4Y", d: "Projected capital recovery post-opening." },
                        { t: "Floor Valuation", v: "100%", d: "Asset backed by debt-free land equity." }
                      ].map((stat, i) => (
                        <div key={i} className="flex justify-between items-start group/stat">
                           <div className="flex-1">
                              <div className="text-white font-bold text-sm uppercase tracking-widest mb-2 group-hover/stat:text-gold-400 transition-colors">{stat.t}</div>
                              <p className="text-slate-500 text-xs italic leading-relaxed">{stat.d}</p>
                           </div>
                           <div className="text-gold-500 font-serif text-4xl font-black pl-8">{stat.v}</div>
                        </div>
                      ))}
                   </div>
                   <div className="mt-16 pt-10 border-t border-white/5 flex items-center justify-center">
                      <p className="text-[10px] text-slate-700 font-black uppercase tracking-[0.5em] italic">Audited by Big-4 Consultants</p>
                   </div>
                </div>
             </div>
         </div>

         {/* Next Chapter Anchor */}
         <Link to="/risk" className="group relative block w-full h-[600px] rounded-[5rem] overflow-hidden border border-white/10 shadow-3xl">
            <img src="https://images.unsplash.com/photo-1512418490979-92798ccc1380?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-[0.2] transition-transform duration-[6s] group-hover:scale-105" alt="Next Section" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
               <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] mb-10 animate-pulse">Chapter 09</span>
               <h3 className="text-white font-serif text-7xl md:text-9xl italic mb-16">Risk <br/><span className="gold-gradient-text font-black tracking-tighter">Mitigation.</span></h3>
               <div className="w-24 h-24 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-1000 shadow-[0_0_60px_rgba(212,175,55,0.4)]">
                  <ArrowRight size={48} className="group-hover:translate-x-2 transition-transform" />
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default EconomicsPage;