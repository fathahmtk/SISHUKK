import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, Activity, ArrowRight, Landmark, Search, Zap, Construction, FileText, CheckCircle } from 'lucide-react';
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
    <div className="bg-white min-h-screen pt-32 pb-40 animate-fade-in overflow-hidden">
      {/* Background Decor */}
      <div className="fixed top-0 right-0 w-1/3 h-screen bg-[#FDFBF7] -z-10 pointer-events-none border-l border-slate-100"></div>
      <div className="fixed top-[20%] left-[5%] text-slate-50 font-serif text-[40rem] font-black -z-20 pointer-events-none select-none italic leading-none opacity-60">R</div>

      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-4 text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] mb-16 hover:text-slate-950 transition-all group">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-40">
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-5">
              <div className="w-12 h-[1px] bg-gold-400"></div>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.6em]">Dossier Chapter 09: Risk Intelligence</span>
            </div>
            <h1 className="text-slate-950 font-serif text-6xl md:text-[8rem] leading-[0.8] tracking-tighter italic">
              Structural <br/><span className="gold-gradient-text italic font-black">Resilience.</span>
            </h1>
            <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-2xl italic">
                "Institutional investment is predicated on identifying the downside before chasing the upside. SGT is engineered for downside protection through asset-heavy security."
            </p>
          </div>
          
          <div className="lg:col-span-5 pt-20">
             <div className="bg-[#FDFBF7] border border-slate-200 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                   <ShieldCheck size={300} className="text-slate-950" />
                </div>
                <div className="relative z-10">
                   <div className="flex items-center gap-5 mb-10">
                      <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-gold-600 shadow-xl group-hover:bg-gold-500 group-hover:text-white transition-all">
                         <Lock size={28} />
                      </div>
                      <h4 className="text-slate-950 font-serif text-3xl italic">Audit Integrity</h4>
                   </div>
                   <p className="text-slate-500 text-base font-light leading-relaxed mb-10">
                      Our governance model employs Big-4 verification on all deployment milestones, ensuring maximum transparency for capital partners.
                   </p>
                   <div className="pt-8 border-t border-slate-100 flex items-center justify-between opacity-40">
                      <span className="text-[10px] font-black uppercase tracking-widest">Sovereignty Logged</span>
                      <ShieldCheck size={20} className="text-gold-500" />
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-40">
            {safeguards.map((item, i) => (
                <div key={i} className={`group relative p-12 bg-white border border-slate-100 rounded-[4rem] hover:border-gold-400 transition-all duration-700 shadow-xl flex flex-col justify-between h-[450px] overflow-hidden ${i % 2 === 1 ? 'lg:translate-y-12' : ''}`}>
                    <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                       <item.icon size={200} className="text-slate-950" />
                    </div>
                    
                    <div className="relative z-10">
                       <div className="flex justify-between items-start mb-10">
                          <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm border border-slate-100">
                             <item.icon size={28} />
                          </div>
                          <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                             {item.status}
                          </span>
                       </div>
                       <h3 className="text-slate-950 font-serif text-4xl italic mb-4 leading-tight group-hover:text-gold-600 transition-colors">{item.title}</h3>
                       <p className="text-slate-500 text-lg font-light leading-relaxed italic border-l-2 border-slate-100 pl-8 group-hover:border-gold-400 transition-all">{item.desc}</p>
                    </div>

                    <div className="pt-8 border-t border-slate-50 flex items-center justify-between opacity-30 group-hover:opacity-100 transition-opacity">
                       <span className="text-[8px] font-black uppercase tracking-widest">Risk Mitigation Node v2.5</span>
                       <CheckCircle size={16} className="text-emerald-500" />
                    </div>
                </div>
            ))}
        </div>

        <Link to="/exit" className="group relative block w-full h-[600px] rounded-[6rem] overflow-hidden border border-slate-200 shadow-3xl bg-slate-50">
           <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" alt="Next" />
           <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-20 transition-opacity"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <span className="text-gold-600 text-[11px] font-black uppercase tracking-[1em] mb-12 block animate-float">Proceed to Chapter 10</span>
              <h3 className="text-slate-950 font-serif text-7xl md:text-9xl italic mb-20">Value <br/><span className="gold-gradient-text not-italic font-black tracking-tighter">Realization.</span></h3>
              <div className="w-32 h-32 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all duration-1000 shadow-3xl">
                 <ArrowRight size={56} className="group-hover:translate-x-4 transition-transform" />
              </div>
           </div>
        </Link>
      </div>
    </div>
  );
};

export default RiskPage;