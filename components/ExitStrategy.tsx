import React from 'react';
import { ArrowUpRight, ArrowRight, Landmark, Briefcase, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExitStrategy: React.FC = () => {
  return (
    <section id="exit" className="py-12 bg-onyx-950 border-t border-white/5 relative h-full flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center h-[60vh]">
          <div className="lg:w-1/2 space-y-10">
             <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] block">Section 10: Exit Strategy</span>
             <h2 className="text-white font-serif text-4xl md:text-7xl mb-6 leading-tight tracking-tighter italic">
               Defined <br/>
               <span className="gold-gradient-text italic font-black">Exit Pathways.</span>
             </h2>
             <p className="text-slate-400 text-xl font-light leading-tight border-l-2 border-gold-500/50 pl-8 italic max-w-md">
               "Valuation driven by EBITDA multiples, enhanced by landmark status and diversified income."
             </p>
             <Link to="/exit" className="inline-flex items-center gap-6 bg-white/5 text-white px-10 py-5 text-[9px] font-black uppercase tracking-widest hover:bg-white hover:text-onyx-950 transition-all border border-white/10 rounded-full">
                Explore Exit Pathways <ArrowRight size={14} />
             </Link>
          </div>
          
          <div className="lg:w-1/2 w-full flex flex-col gap-3">
             {[
               { t: "REIT Divestment", d: "Tier-1 indian/global REIT platforms.", icon: Landmark },
               { t: "PE Acquisition", d: "Hospitality focused sovereign funds.", icon: Briefcase },
               { t: "Yield Annuity", d: "Post-debt retention for dividend yield.", icon: Activity },
             ].map((path, i) => (
               <div key={i} className="group flex justify-between items-center p-8 bg-onyx-900 border border-white/5 hover:border-gold-500 transition-all cursor-default rounded-3xl shadow-lg">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-xl bg-onyx-950 border border-white/10 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all">
                           <path.icon size={20} />
                        </div>
                        <div>
                            <span className="text-white font-serif text-2xl italic leading-none block mb-1">{path.t}</span>
                            <span className="text-slate-500 text-xs font-light">{path.d}</span>
                        </div>
                    </div>
                    <ArrowUpRight className="text-slate-600 group-hover:text-gold-500 transition-all" size={20} />
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExitStrategy;