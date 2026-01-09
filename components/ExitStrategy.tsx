import React from 'react';
import { LogOut, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExitStrategy: React.FC = () => {
  return (
    <section id="exit" className="py-24 bg-onyx-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
             <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-6">Section 10: Exit Strategy</span>
             <h2 className="text-white font-serif text-4xl md:text-5xl mb-8 leading-tight">
               Defined <br/>
               <span className="italic text-slate-500">Exit Pathways.</span>
             </h2>
             <p className="text-slate-400 text-lg mb-8">
               Exit valuation is driven by EBITDA multiples, enhanced by the asset's landmark status and diversified income.
             </p>
             <Link to="/exit" className="inline-flex items-center gap-4 bg-white/5 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-onyx-950 transition-all border border-white/10">
                Explore Exit Pathways <ArrowRight size={14} />
             </Link>
          </div>
          
          <div className="lg:w-1/2 w-full">
             <div className="space-y-4">
               {[
                 { t: "Strategic Sale", d: "Sale to global hospitality or destination asset operators." },
                 { t: "REIT / Institutional Take-Out", d: "Inclusion in hospitality or mixed-use REIT platforms." },
                 { t: "Refinance & Yield Hold", d: "Capital recycling while retaining ownership for dividend yield." },
               ].map((path, i) => (
                 <div key={i} className="group flex justify-between items-center p-6 bg-onyx-950 border border-white/10 hover:border-gold-500 transition-colors cursor-default">
                    <div>
                        <span className="text-white font-bold uppercase tracking-widest text-sm block mb-1">{path.t}</span>
                        <span className="text-slate-500 text-xs font-light">{path.d}</span>
                    </div>
                    <ArrowUpRight className="text-slate-600 group-hover:text-gold-500 transition-colors shrink-0" size={18} />
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExitStrategy;