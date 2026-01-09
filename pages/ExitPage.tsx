import React from 'react';
import { ArrowLeft, TrendingUp, Landmark, LogOut, ArrowUpRight, Check, Rocket, Briefcase, Activity, ShieldCheck, Globe, Target, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExitPage: React.FC = () => {
  const exitPaths = [
    { title: "Institutional REIT Divestment", desc: "Technical architecture and transparent accounting pre-calibrated for acquisition by Tier-1 Indian or Global REIT platforms.", icon: Landmark, visibility: "High" },
    { title: "Strategic PE Acquisition", desc: "Hospitality-focused Sovereign funds and Private Equity platforms seeking non-cyclical, yield-stable spiritual assets.", icon: Briefcase, visibility: "Stable" },
    { title: "Stabilized Yield Annuity", desc: "Option for long-term retention providing consistent dividend yield post-debt retirement in Year 8.", icon: Activity, visibility: "Medium" }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-40 animate-fade-in overflow-hidden">
      {/* Background Decor */}
      <div className="fixed top-0 right-0 w-1/3 h-screen bg-[#FDFBF7] -z-10 pointer-events-none border-l border-slate-100"></div>
      <div className="fixed top-[20%] left-[5%] text-slate-50 font-serif text-[40rem] font-black -z-20 pointer-events-none select-none italic leading-none opacity-60">X</div>

      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-4 text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] mb-16 hover:text-slate-950 transition-all group">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-40">
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-5">
              <div className="w-12 h-[1px] bg-gold-400"></div>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.6em]">Dossier Chapter 10: Value Realization</span>
            </div>
            <h1 className="text-slate-950 font-serif text-6xl md:text-[8rem] leading-[0.8] tracking-tighter italic">The Liquidity <br/><span className="gold-gradient-text italic font-black">Event.</span></h1>
            <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-2xl italic">
                "SIRSHUKK is an institutional product engineered for high-velocity realization. We provide capitalized visibility for exit within a 7-year stabilization cycle."
            </p>
          </div>
          
          <div className="lg:col-span-5 pt-20">
             <div className="bg-white border border-slate-200 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                   <Rocket size={300} className="text-slate-950" />
                </div>
                <div className="relative z-10">
                   <div className="flex items-center gap-5 mb-10">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-gold-600 shadow-xl group-hover:bg-gold-500 group-hover:text-white transition-all">
                         <Target size={28} />
                      </div>
                      <h4 className="text-slate-950 font-serif text-3xl italic">Liquidity Index</h4>
                   </div>
                   <div className="text-slate-950 font-serif text-7xl font-black mb-4 italic leading-none">3.5x</div>
                   <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] mb-10">Target Equity Multiplier</p>
                   <div className="pt-8 border-t border-slate-100 flex items-center justify-between opacity-40">
                      <span className="text-[10px] font-black uppercase tracking-widest">REIT-Ready Framework</span>
                      <ShieldCheck size={20} className="text-gold-500" />
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Realization Pathways Cluster */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-40">
            {exitPaths.map((item, i) => (
                <div key={i} className={`p-12 bg-white border border-slate-200 rounded-[4rem] hover:border-gold-400 transition-all duration-700 group cursor-default shadow-xl flex flex-col justify-between h-[550px] relative overflow-hidden ${i % 2 === 1 ? 'lg:translate-y-24' : ''}`}>
                   <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                      <item.icon size={250} className="text-slate-950" />
                   </div>
                   
                   <div>
                      <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm mb-12 border border-slate-100">
                         <item.icon size={32} />
                      </div>
                      <h3 className="text-slate-950 font-serif text-4xl italic mb-8 leading-tight group-hover:text-gold-600 transition-colors">{item.title}</h3>
                      <p className="text-slate-500 text-lg font-light leading-relaxed italic border-l-2 border-slate-100 pl-8 group-hover:border-gold-400 transition-all">{item.desc}</p>
                   </div>
                   
                   <div className="pt-10 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-1">Visibility Index</span>
                        <span className="text-slate-950 font-bold text-lg uppercase tracking-widest">{item.visibility}</span>
                      </div>
                      <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all">
                        <ArrowUpRight size={24} />
                      </div>
                   </div>
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40 pt-24 border-t border-slate-100 items-center">
            <div className="bg-[#FDFBF7] border border-slate-200 p-16 md:p-24 rounded-[6rem] flex flex-col justify-between shadow-3xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-24 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform">
                  <Globe size={400} className="text-slate-950" />
               </div>
               <div className="relative z-10">
                  <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-200 bg-white rounded-full text-gold-600 text-[10px] font-black uppercase tracking-widest mb-10 shadow-sm">
                    <ShieldCheck size={14} /> Institutional Compliance
                  </div>
                  <h3 className="text-slate-950 font-serif text-5xl md:text-7xl mb-12 italic leading-[0.9] tracking-tighter">REIT-Ready <br/><span className="gold-gradient-text not-italic font-black">Framework.</span></h3>
                  <p className="text-slate-500 text-2xl font-light leading-relaxed mb-16 italic border-l-2 border-gold-400 pl-12">
                     "Asset governance maintains Big-4 audited transparency and 100% debt-free land logs, meeting mandatory thresholds for global wealth platforms."
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 pt-12 border-t border-slate-200">
                     <div className="group/val">
                        <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-2 group-hover/val:text-gold-600 transition-colors">Audit Cycle</div>
                        <div className="text-slate-950 font-serif text-3xl italic">Quarterly</div>
                     </div>
                     <div className="group/val">
                        <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-2 group-hover/val:text-emerald-600 transition-colors">Title Status</div>
                        <div className="text-emerald-600 font-serif text-3xl italic">Unencumbered</div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-slate-950 p-16 md:p-24 rounded-[6rem] text-white flex flex-col justify-between shadow-3xl h-full relative overflow-hidden group transition-all hover:scale-[1.01]">
               <div className="absolute top-0 right-0 p-24 opacity-10 rotate-12 group-hover:scale-110 transition-transform">
                  <Rocket size={400} className="text-gold-500" />
               </div>
               <div className="relative z-10">
                  <div className="flex justify-between items-start mb-16">
                     <div className="w-16 h-16 rounded-2xl bg-gold-500 flex items-center justify-center text-onyx-950 shadow-2xl">
                        <Rocket size={32} />
                     </div>
                     <div className="text-[10px] font-black uppercase tracking-widest border border-white/20 px-8 py-3 rounded-full">PROJECTED 2027-28</div>
                  </div>
                  <h3 className="font-serif text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-12 italic">Targeting <br/><span className="gold-gradient-text not-italic">3.5x Multiplier.</span></h3>
                  <p className="text-slate-400 text-xl font-light leading-relaxed max-w-sm uppercase tracking-tight italic border-l border-white/10 pl-8">
                     Projected realization based on stabilized Year 7 Operating EBITDA benchmarks.
                  </p>
               </div>
               <div className="pt-20 border-t border-white/10 flex flex-col sm:flex-row items-end justify-between gap-10 relative z-10">
                  <div className="w-full sm:w-auto">
                     <div className="text-white/40 text-[11px] font-black uppercase tracking-widest mb-3">Cycle Horizon</div>
                     <div className="font-serif text-6xl font-black leading-none italic">7 Years</div>
                  </div>
                  <div className="text-right w-full sm:w-auto">
                     <div className="text-white/40 text-[11px] font-black uppercase tracking-widest mb-3">Targeted IRR</div>
                     <div className="font-serif text-6xl font-black leading-none italic text-gold-500">24.2%</div>
                  </div>
               </div>
            </div>
         </div>

         {/* Final Conclusion Anchor */}
         <Link to="/" className="group relative block w-full h-[500px] rounded-[6rem] overflow-hidden border border-slate-200 shadow-3xl bg-white">
            <div className="absolute inset-0 bg-[#FDFBF7] flex flex-col items-center justify-center p-12 overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="w-32 h-32 bg-slate-950 rounded-full flex items-center justify-center text-gold-500 mb-16 animate-float shadow-3xl group-hover:scale-110 transition-transform">
                  <Check size={64} />
               </div>
               <div className="relative z-10 text-center space-y-6">
                  <span className="text-gold-600 text-[11px] font-black uppercase tracking-[1em] mb-4 block">End of Dossier Intelligence</span>
                  <h3 className="text-slate-950 font-serif text-6xl md:text-7xl italic leading-none">Return to <br/><span className="gold-gradient-text italic font-black tracking-tighter">Executive Summary.</span></h3>
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default ExitPage;