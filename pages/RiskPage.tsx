
import React from 'react';
import { ArrowLeft, ShieldCheck, AlertTriangle, Lock, Activity, ArrowRight, Landmark, Search, Zap, Construction, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const RiskPage: React.FC = () => {
  const safeguards = [
    {
      title: "Title & Regulatory Safe",
      icon: Lock,
      desc: "100% Freehold debt-free land. All 14 major NOCs (Aviation, PCB, Fire) secured prior to construction start.",
      status: "De-risked"
    },
    {
      title: "EPC Security",
      icon: Construction,
      desc: "Lump-sum fixed-price contracts with Tier-1 engineering firms, eliminating exposure to raw material price volatility.",
      status: "Guaranteed"
    },
    {
      title: "Structural Moat",
      icon: Landmark,
      desc: "Zero five-star hospitality supply within a 10km radius of the temple. Entry barriers ensure high long-term ADR protection.",
      status: "Resilient"
    },
    {
      title: "Yield Stability",
      icon: Activity,
      desc: "Ritual economy demand is non-seasonal and recession-proof. Convention deposits cover 40% of debt service.",
      status: "Stable"
    }
  ];

  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in pb-20">
      <div className="container mx-auto px-6 mb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-10 hover:text-white transition-colors group">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Return to Summary
        </Link>
        <div className="max-w-4xl">
            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Dossier Chapter 09: Risk Intelligence</span>
            <h1 className="text-white font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter mb-8 italic">Structural <br/><span className="gold-gradient-text italic font-black">Resilience.</span></h1>
            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-2xl border-l border-gold-500/30 pl-8">
                Institutional investment is predicated on identifying the downside before chasing the upside. SGT is engineered for downside protection through asset-heavy security and structural demand.
            </p>
        </div>
      </div>

      {/* Grid of Safeguards */}
      <div className="container mx-auto px-6 mb-40">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {safeguards.map((item, i) => (
                <div key={i} className="group relative p-12 bg-white/[0.02] border border-white/10 rounded-[3.5rem] hover:bg-white/[0.04] hover:border-gold-500/30 transition-all duration-700">
                    <div className="flex justify-between items-start mb-10">
                       <div className="w-16 h-16 rounded-2xl bg-onyx-900 border border-white/5 flex items-center justify-center text-gold-500 group-hover:scale-110 transition-transform">
                          <item.icon size={28} />
                       </div>
                       <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
                          {item.status}
                       </span>
                    </div>
                    <h3 className="text-white font-serif text-3xl italic mb-4">{item.title}</h3>
                    <p className="text-slate-500 text-base leading-relaxed font-light">{item.desc}</p>
                    <div className="absolute bottom-8 right-12 opacity-5 group-hover:opacity-10 transition-opacity">
                       <item.icon size={120} className="text-white" />
                    </div>
                </div>
            ))}
         </div>
      </div>

      <div className="container mx-auto px-6">
         <div className="bg-onyx-900 border border-white/10 p-12 md:p-20 rounded-[4rem] shadow-3xl mb-40 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
               <ShieldCheck size={300} className="text-gold-500" />
            </div>
            <div className="relative z-10 max-w-3xl">
               <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.6em] mb-6 block">Audit & Compliance</span>
               <h3 className="text-white font-serif text-4xl md:text-6xl mb-8 leading-tight">Verified <br/><span className="gold-gradient-text italic">Transparency.</span></h3>
               <div className="space-y-6">
                  {[
                    "Title Search Report by High Court Senior Counsel.",
                    "Full Structural Peer-Review by International Consultants.",
                    "Monthly progress reports audited by Institutional Partners."
                  ].map((line, i) => (
                    <div key={i} className="flex items-center gap-6 group/line">
                       <CheckCircle size={20} className="text-gold-500 group-hover/line:scale-125 transition-transform" />
                       <p className="text-slate-300 text-lg font-light leading-relaxed">{line}</p>
                    </div>
                  ))}
               </div>
               <button className="mt-12 px-12 py-6 bg-gold-500 hover:bg-white text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.4em] transition-all flex items-center gap-4">
                  Request Compliance Log <FileText size={18} />
               </button>
            </div>
         </div>

         {/* Next Chapter Anchor */}
         <Link to="/exit" className="group relative block w-full h-[500px] rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-[0.25] transition-transform duration-[4s] group-hover:scale-105" alt="Next Section" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
               <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] mb-8 animate-pulse">Proceed to Next Intelligence</span>
               <h3 className="text-white font-serif text-6xl md:text-8xl italic mb-12">The Liquidity <br/><span className="gold-gradient-text font-black tracking-tighter">Event.</span></h3>
               <div className="w-20 h-20 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-700 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                  <ArrowRight size={40} />
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default RiskPage;
