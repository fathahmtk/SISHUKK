
import React from 'react';
import { ArrowLeft, IndianRupee, PieChart, TrendingUp, BarChart, ArrowRight, ShieldCheck, Target, Activity, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const EconomicsPage: React.FC = () => {
  const deployment = [
    { l: "Civil & Structural", v: "₹140 Cr", p: "40%", desc: "Reinforced concrete core for dual 20-floor towers." },
    { l: "Interiors & FF&E", v: "₹105 Cr", p: "30%", desc: "7-star fit-outs including Italian marble and artisanal wood." },
    { l: "MEP & Smart Systems", v: "₹70 Cr", p: "20%", desc: "AI-driven HVAC and high-speed vertical logistics." },
    { l: "Pre-Ops & Marketing", v: "₹35 Cr", p: "10%", desc: "Brand launch and institutional team setup." }
  ];

  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in pb-20">
      <div className="container mx-auto px-6 mb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-10 hover:text-white transition-colors group">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Return to Summary
        </Link>
        <div className="max-w-4xl">
            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Dossier Chapter 08: Financial Structure</span>
            <h1 className="text-white font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter mb-8 italic">Capital <br/><span className="gold-gradient-text italic font-black">Allocation.</span></h1>
            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-2xl border-l border-gold-500/30 pl-8">
                A granular breakdown of the ₹350 Crore project cost. Our capital strategy prioritizes high-yield structural components while leveraging debt-free land equity to lower the project's hurdle rate.
            </p>
        </div>
      </div>

      {/* Hero Stats Strip */}
      <div className="w-full bg-onyx-900 border-y border-white/5 py-12 mb-32">
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: "Total Project Cost", val: "₹350 Cr", sub: "100% Asset-Backed" },
              { label: "Target IRR", val: "24.2%", sub: "Projected 7-Year Cycle" },
              { label: "EBITDA Margin", val: "45%", sub: "Stabilized Operations" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-2xl bg-onyx-950 border border-white/10 flex items-center justify-center text-gold-500 shadow-2xl">
                  <IndianRupee size={28} />
                </div>
                <div>
                  <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1">{stat.label}</div>
                  <div className="text-white font-serif text-4xl">{stat.val}</div>
                  <div className="text-slate-600 text-[9px] uppercase tracking-widest">{stat.sub}</div>
                </div>
              </div>
            ))}
         </div>
      </div>

      <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-40">
             <div className="lg:col-span-7 space-y-12">
                 <h3 className="text-white font-serif text-4xl italic mb-10">Capex Deployment Logic</h3>
                 <div className="space-y-10">
                     {deployment.map((item, i) => (
                         <div key={i} className="group">
                             <div className="flex justify-between items-end mb-4">
                                <div className="flex flex-col">
                                   <span className="text-white font-serif text-2xl group-hover:text-gold-400 transition-colors italic">{item.l}</span>
                                   <span className="text-slate-500 text-[11px] uppercase tracking-widest font-black mt-1">{item.desc}</span>
                                </div>
                                <span className="text-white font-mono text-xl font-bold">{item.v}</span>
                             </div>
                             <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-gold-500 transition-all duration-[2s] group-hover:opacity-80" style={{ width: item.p }}></div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>

             <div className="lg:col-span-5 space-y-8">
                <div className="bg-onyx-900 border border-white/10 p-12 rounded-[4rem] shadow-3xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-12 opacity-5">
                      <Target size={200} className="text-gold-500" />
                   </div>
                   <h3 className="text-white font-serif text-2xl mb-12 flex items-center gap-4 relative z-10">
                      <ShieldCheck className="text-gold-500" size={24} /> Financial Guardrails
                   </h3>
                   <div className="space-y-10 relative z-10">
                      {[
                        { t: "DSCR Threshold", v: "2.1x", d: "Conservative debt service coverage." },
                        { t: "Payback Period", v: "5.4Y", d: "Rapid capital recovery post-launch." },
                        { t: "Asset Value Floor", v: "100%", d: "Debt-free freehold land security." }
                      ].map((stat, i) => (
                        <div key={i} className="flex justify-between items-start">
                           <div>
                              <div className="text-white font-bold text-sm uppercase tracking-widest mb-1">{stat.t}</div>
                              <p className="text-slate-500 text-xs">{stat.d}</p>
                           </div>
                           <div className="text-gold-500 font-serif text-3xl font-black">{stat.v}</div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
         </div>

         {/* Next Chapter Anchor */}
         <Link to="/risk" className="group relative block w-full h-[500px] rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl">
            <img src="https://images.unsplash.com/photo-1512418490979-92798ccc1380?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-[0.25] transition-transform duration-[4s] group-hover:scale-105" alt="Next Section" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
               <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] mb-8 animate-pulse">Proceed to Next Intelligence</span>
               <h3 className="text-white font-serif text-6xl md:text-8xl italic mb-12">Safeguards & <br/><span className="gold-gradient-text font-black tracking-tighter">Mitigation.</span></h3>
               <div className="w-20 h-20 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-700 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                  <ArrowRight size={40} />
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default EconomicsPage;
