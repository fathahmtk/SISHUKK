
import React from 'react';
import { ArrowLeft, TrendingUp, Landmark, LogOut, ArrowUpRight, Check, Rocket, Briefcase, Activity, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExitPage: React.FC = () => {
  const exitPaths = [
    { title: "Institutional REIT Divestment", desc: "Architecture and transparent accounting designed for acquisition by major Indian/Global REIT platforms.", icon: Landmark },
    { title: "Strategic PE Acquisition", desc: "Hospitality focused Private Equity funds seeking yield-stable assets in the ritual corridor.", icon: Briefcase },
    { title: "Stabilized Yield Annuity", desc: "Retention of asset for long-term dividends post-debt retirement (Year 8+).", icon: Activity }
  ];

  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in pb-20">
      <div className="container mx-auto px-6 mb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-10 hover:text-white transition-colors group">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Return to Summary
        </Link>
        <div className="max-w-4xl">
            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Dossier Chapter 10: Value Realization</span>
            <h1 className="text-white font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter mb-8 italic">The Liquidity <br/><span className="gold-gradient-text italic font-black">Event.</span></h1>
            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-2xl border-l border-gold-500/30 pl-8">
                SGT is an institutional product engineered for re-tradeability. We provide clear visibility for capital realization within a 7-year stabilization cycle.
            </p>
        </div>
      </div>

      {/* Strategic Cards */}
      <div className="container mx-auto px-6 mb-40">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {exitPaths.map((item, i) => (
                <div key={i} className="p-12 bg-white/[0.02] border border-white/10 rounded-[3rem] hover:bg-gold-500 hover:text-onyx-950 transition-all duration-700 group cursor-default shadow-3xl">
                   <item.icon className="text-gold-500 group-hover:text-onyx-950 transition-colors mb-12" size={40} />
                   <h3 className="text-white group-hover:text-onyx-950 font-serif text-3xl italic mb-6">{item.title}</h3>
                   <p className="text-slate-500 group-hover:text-onyx-950/70 text-base font-light leading-relaxed mb-10">{item.desc}</p>
                   <div className="pt-8 border-t border-white/10 group-hover:border-onyx-950/10 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest">Visibility: High</span>
                      <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </div>
                </div>
            ))}
         </div>
      </div>

      <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-40">
            <div className="bg-onyx-900 border border-white/10 p-12 md:p-20 rounded-[4rem] flex flex-col justify-between">
               <div>
                  <h3 className="text-white font-serif text-4xl mb-6 italic">REIT-Ready Framework</h3>
                  <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
                     The project maintains Big-4 audited financials and zero-encumbrance asset logs, ensuring it meets the stringent compliance requirements of sovereign wealth funds and public REIT platforms.
                  </p>
               </div>
               <div className="p-8 bg-gold-500/10 border border-gold-500/30 rounded-3xl flex items-center gap-6">
                  <ShieldCheck size={40} className="text-gold-500" />
                  <div>
                     <div className="text-white font-bold text-lg">Institutional Grade SGT</div>
                     <p className="text-slate-500 text-xs uppercase font-black tracking-widest">Compliance Level: High</p>
                  </div>
               </div>
            </div>

            <div className="bg-gold-500 p-12 md:p-20 rounded-[4rem] text-onyx-950 flex flex-col justify-between shadow-[0_40px_80px_rgba(212,175,55,0.3)]">
               <div>
                  <Rocket size={48} className="mb-10 opacity-30" />
                  <h3 className="font-serif text-5xl font-black tracking-tighter leading-none mb-8">Targeting 3.5x <br/>Equity Multiplier.</h3>
                  <p className="font-bold text-lg opacity-80 leading-relaxed max-w-sm uppercase tracking-tight">
                     Projected realization based on 2027 stabilized EBITDA benchmarks.
                  </p>
               </div>
               <div className="pt-12 border-t border-onyx-950/10 flex items-end justify-between">
                  <div>
                     <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Cycle Horizon</div>
                     <div className="font-serif text-4xl font-black">7 Years</div>
                  </div>
                  <div className="text-right">
                     <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Internal Rate (IRR)</div>
                     <div className="font-serif text-4xl font-black">24.2%</div>
                  </div>
               </div>
            </div>
         </div>

         {/* Final Conclusion Anchor */}
         <Link to="/" className="group relative block w-full h-[400px] rounded-[4rem] overflow-hidden border border-gold-500/30 shadow-3xl">
            <div className="absolute inset-0 bg-onyx-900 flex flex-col items-center justify-center p-12">
               <div className="w-24 h-24 bg-gold-500 rounded-full flex items-center justify-center text-onyx-950 mb-10 animate-pulse shadow-[0_0_60px_#D4AF37]">
                  <Check size={48} />
               </div>
               <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] mb-6">Investment Intelligence Logged</span>
               <h3 className="text-white font-serif text-5xl italic leading-none text-center">Return to <br/><span className="gold-gradient-text italic font-black">Executive Summary.</span></h3>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default ExitPage;
