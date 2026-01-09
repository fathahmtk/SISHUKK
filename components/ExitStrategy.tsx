import React from 'react';
import { LogOut, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExitStrategy: React.FC = () => {
  return (
    <section id="exit" className="py-24 bg-onyx-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
             <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-6">Exit Logic</span>
             <h2 className="text-white font-serif text-4xl md:text-5xl mb-8 leading-tight">
               Multiple Exits <br/>
               <span className="italic text-slate-500">Supported by Iconic Status.</span>
             </h2>
             <p className="text-slate-400 text-lg mb-8">
               The asset is designed for strategic liquidity events, leveraging its landmark positioning.
             </p>
             <Link to="/exit" className="inline-flex items-center gap-4 bg-white/5 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-onyx-950 transition-all border border-white/10">
                Explore Exit Pathways <ArrowRight size={14} />
             </Link>
          </div>
          
          <div className="lg:w-1/2 w-full">
             <div className="space-y-4">
               {[
                 "Strategic sale as a landmark hospitality asset",
                 "Institutional take-out / REIT inclusion",
                 "Long-term yield + refinance strategy",
               ].map((path, i) => (
                 <div key={i} className="group flex justify-between items-center p-6 bg-onyx-950 border border-white/10 hover:border-gold-500 transition-colors cursor-default">
                    <span className="text-white font-bold uppercase tracking-widest text-sm">{path}</span>
                    <ArrowUpRight className="text-slate-600 group-hover:text-gold-500 transition-colors" size={18} />
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