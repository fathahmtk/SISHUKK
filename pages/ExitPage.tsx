import React from 'react';
import { ArrowLeft, TrendingUp, Landmark, LogOut, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExitPage: React.FC = () => {
  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-6 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-8 hover:text-white transition-colors">
            <ArrowLeft size={12} /> Return to Summary
        </Link>
        <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Deep Dive: Section 10</span>
        <h1 className="text-white font-serif text-5xl md:text-7xl mb-6">Liquidity <span className="text-gold-500 italic">Event.</span></h1>
        <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            The asset is engineered to be re-tradeable. We are building an institutional product designed for acquisition by global funds or REITs.
        </p>
      </div>

      <div className="container mx-auto px-6 pb-24">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
             {[
                 { 
                     title: "Private Equity Sale", 
                     desc: "Sale to a hospitality-focused PE fund (Blackstone, Brookfield) seeking stable yield assets in emerging tier-2 markets.", 
                     icon: TrendingUp 
                 },
                 { 
                     title: "REIT Acquisition", 
                     desc: "Absorption into a Hospitality REIT portfolio looking for long-term lease rental discounting (LRD) assets.", 
                     icon: Landmark 
                 },
                 { 
                     title: "Strategic Brand Buyout", 
                     desc: "Acquisition by a major hotel operator (Taj, Marriott, Hyatt) to secure a flagship location in Guruvayur.", 
                     icon: LogOut 
                 }
             ].map((path, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:bg-gold-500 hover:text-onyx-950 transition-all group cursor-default">
                     <div className="mb-8 text-gold-500 group-hover:text-onyx-950 transition-colors">
                         <path.icon size={40} />
                     </div>
                     <h3 className="text-white font-serif text-2xl mb-4 group-hover:text-onyx-950">{path.title}</h3>
                     <p className="text-slate-400 text-sm leading-relaxed group-hover:text-onyx-950/70">{path.desc}</p>
                 </div>
             ))}
         </div>

         <div className="bg-onyx-900 border border-white/10 p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12">
             <div className="max-w-xl">
                 <h3 className="text-white font-serif text-3xl mb-4">The Valuation Multiplier</h3>
                 <p className="text-slate-400 text-lg leading-relaxed">
                     By establishing SIRSHUKK as the *only* 7-star destination in a high-demand market, we create scarcity value. Institutional buyers pay a premium for assets with:
                 </p>
                 <ul className="mt-6 space-y-2">
                     <li className="flex items-center gap-3 text-slate-300 text-sm"><div className="w-1 h-1 bg-gold-500 rounded-full"></div> Unreplicable Location</li>
                     <li className="flex items-center gap-3 text-slate-300 text-sm"><div className="w-1 h-1 bg-gold-500 rounded-full"></div> Stabilized Cash Flow</li>
                     <li className="flex items-center gap-3 text-slate-300 text-sm"><div className="w-1 h-1 bg-gold-500 rounded-full"></div> Brand Dominance</li>
                 </ul>
             </div>
             
             <div className="shrink-0">
                 <button className="bg-gold-500 hover:bg-white text-onyx-950 px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-4">
                     Discuss Exit Scenarios <ArrowUpRight size={16} />
                 </button>
             </div>
         </div>
      </div>
    </div>
  );
};

export default ExitPage;