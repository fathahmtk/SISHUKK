import React from 'react';
import { ArrowLeft, TrendingUp, Landmark, LogOut, ArrowUpRight, Check, Rocket, Briefcase, Activity, ShieldCheck, Globe, Target, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExitPage: React.FC = () => {
  const exitPaths = [
    { title: "Institutional REIT Divestment", desc: "Technical architecture and transparent accounting pre-calibrated for acquisition by Tier-1 Indian or Global REIT platforms.", icon: Landmark, visibility: "High" },
    { title: "Strategic PE Acquisition", desc: "Hospitality-focused Sovereign funds and Private Equity platforms seeking non-cyclical, yield-stable spiritual assets.", icon: Briefcase, visibility: "Stable" },
    { title: "Stabilized Yield Annuity", desc: "Option for long-term retention providing consistent dividend yield post-debt retirement in Year 8.", icon: Activity, visibility: "Medium" }
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
              <Rocket size={14} /> Dossier Chapter 10: Value Realization
            </div>
            <h1 className="text-white font-serif text-6xl md:text-9xl leading-[0.8] tracking-tighter mb-10 italic">The Liquidity <br/><span className="gold-gradient-text italic font-black">Event.</span></h1>
            <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-gold-500/30 pl-10">
                SIRSHUKK is an institutional product engineered for high-velocity realization. We provide capitalized visibility for exit within a 7-year stabilization cycle, targeting a market-leading equity multiplier.
            </p>
          </div>
          <div className="bg-onyx-900 border border-white/10 p-8 rounded-[2.5rem] hidden lg:block shadow-3xl">
            <div className="flex items-center gap-4 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-3">
              <Target size={18} /> Liquidity Rating
            </div>
            <p className="text-slate-400 text-xs font-mono">Asset Status: <br/><span className="text-white">REIT-READY BLUEPRINT</span></p>
          </div>
        </div>
      </div>

      {/* Strategic Realization Cards */}
      <div className="container mx-auto px-6 mb-40">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {exitPaths.map((item, i) => (
                <div key={i} className="p-12 bg-white/[0.02] border border-white/10 rounded-[3.5rem] hover:bg-gold-500 hover:text-onyx-950 transition-all duration-700 group cursor-default shadow-3xl flex flex-col justify-between h-[520px] relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                      <item.icon size={150} className="text-white" />
                   </div>
                   
                   <div>
                      <item.icon className="text-gold-500 group-hover:text-onyx-950 transition-colors mb-12" size={48} />
                      <h3 className="text-white group-hover:text-onyx-950 font-serif text-4xl italic mb-8 leading-tight">{item.title}</h3>
                      <p className="text-slate-500 group-hover:text-onyx-950/70 text-lg font-light leading-relaxed">{item.desc}</p>
                   </div>
                   
                   <div className="pt-10 border-t border-white/10 group-hover:border-onyx-950/10 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Visibility Index</span>
                        <span className="text-white group-hover:text-onyx-950 font-bold text-lg uppercase tracking-widest">{item.visibility}</span>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:bg-onyx-950 group-hover:text-white transition-all">
                        <ArrowUpRight size={20} />
                      </div>
                   </div>
                </div>
            ))}
         </div>
      </div>

      <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40">
            <div className="bg-onyx-900 border border-white/10 p-12 md:p-24 rounded-[5rem] flex flex-col justify-between shadow-3xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-24 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform">
                  <Globe size={400} className="text-white" />
               </div>
               <div className="relative z-10">
                  <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-500/20 bg-gold-500/5 rounded-full text-gold-500 text-[10px] font-black uppercase tracking-widest mb-10">
                    <ShieldCheck size={14} /> Institutional Compliance
                  </div>
                  <h3 className="text-white font-serif text-5xl md:text-6xl mb-10 italic leading-none">REIT-Ready <br/>Framework.</h3>
                  <p className="text-slate-400 text-xl font-light leading-relaxed mb-16 italic">
                     "Asset governance maintains Big-4 audited transparency and 100% debt-free land equity logs, meeting the mandatory due-diligence thresholds of global sovereign wealth platforms."
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/10">
                     <div>
                        <div className="text-slate-600 text-[10px] font-black uppercase tracking-widest mb-2">Audit Cycle</div>
                        <div className="text-white font-serif text-2xl">Quarterly</div>
                     </div>
                     <div>
                        <div className="text-slate-600 text-[10px] font-black uppercase tracking-widest mb-2">Title Status</div>
                        <div className="text-emerald-500 font-serif text-2xl">Unencumbered</div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-gold-500 p-12 md:p-24 rounded-[5rem] text-onyx-950 flex flex-col justify-between shadow-[0_50px_100px_rgba(212,175,55,0.3)] group transition-all hover:scale-[1.01]">
               <div>
                  <div className="flex justify-between items-start mb-12">
                     <Rocket size={64} className="opacity-30 group-hover:scale-110 transition-transform duration-700" />
                     <div className="text-[10px] font-black uppercase tracking-widest border-2 border-onyx-950 px-6 py-2 rounded-full">PROJECTED 2027-28</div>
                  </div>
                  <h3 className="font-serif text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-12 italic">Targeting <br/>3.5x Multiplier.</h3>
                  <p className="font-bold text-xl opacity-80 leading-relaxed max-w-sm uppercase tracking-tight italic">
                     Projected realization based on stabilized Year 7 Operating EBITDA benchmarks.
                  </p>
               </div>
               <div className="pt-16 border-t border-onyx-950/20 flex flex-col sm:flex-row items-end justify-between gap-10">
                  <div className="w-full sm:w-auto">
                     <div className="text-[11px] font-black uppercase tracking-widest opacity-60 mb-2">Cycle Horizon</div>
                     <div className="font-serif text-5xl font-black leading-none">7 Years</div>
                  </div>
                  <div className="text-right w-full sm:w-auto">
                     <div className="text-[11px] font-black uppercase tracking-widest opacity-60 mb-2">Targeted IRR</div>
                     <div className="font-serif text-5xl font-black leading-none">24.2%</div>
                  </div>
               </div>
            </div>
         </div>

         {/* Final Conclusion Anchor */}
         <Link to="/" className="group relative block w-full h-[450px] rounded-[5rem] overflow-hidden border border-gold-500/30 shadow-[0_0_60px_rgba(212,175,55,0.1)]">
            <div className="absolute inset-0 bg-onyx-900 flex flex-col items-center justify-center p-12 overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="w-24 h-24 bg-gold-500 rounded-full flex items-center justify-center text-onyx-950 mb-12 animate-float shadow-[0_0_60px_#D4AF37] group-hover:scale-110 transition-transform">
                  <Check size={48} />
               </div>
               <div className="relative z-10 text-center space-y-4">
                  <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] mb-4 block">End of Dossier Intelligence</span>
                  <h3 className="text-white font-serif text-6xl italic leading-none">Return to <br/><span className="gold-gradient-text italic font-black">Executive Summary.</span></h3>
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default ExitPage;