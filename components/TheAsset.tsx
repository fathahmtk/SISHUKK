import React from 'react';
import { Building2, TrendingUp, ArrowRight, Layers, ShieldCheck, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const THESIS_POINTS = [
  { label: "Architectural Scarcity", d: "Non-replicable twin-tower silhouette creating a permanent regional landmark." },
  { label: "Revenue Multiplier", d: "Diversified yield capture from rooms, F&B, and South India's largest event core." },
  { label: "Capital Sovereignty", d: "100% Freehold debt-free land base reducing institutional risk profile." },
  { label: "Exit Visibility", d: "REIT-calibrated financial governance designed for Year 7 divestment." }
];

const TheAsset: React.FC = () => {
  return (
    <section className="py-48 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          <div className="lg:col-span-5 sticky top-32 space-y-16">
            <div className="space-y-12">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-[1px] bg-gold-500"></div>
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.6em]">Chapter 01: Strategic Thesis</span>
               </div>
               <h2 className="text-slate-950 font-serif text-6xl md:text-8xl leading-[0.8] tracking-tighter italic">
                  Value through <br/><span className="gold-gradient-text font-black italic">Scarcity.</span>
               </h2>
               <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-xl italic">
                  SGT is engineered as a <strong>Visual Monopoly</strong>. In dense pilgrimage corridors, architecture functions as a commercial engine.
               </p>
            </div>

            <div className="grid grid-cols-1 gap-12 pt-12 border-t border-slate-100">
               {THESIS_POINTS.map((item, i) => (
                 <div key={i} className="group flex gap-8 items-start">
                    <div className="text-gold-600 font-serif text-3xl italic opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                    <div>
                       <h4 className="text-slate-950 font-black uppercase tracking-widest text-[11px] mb-2 group-hover:text-gold-600 transition-colors">{item.label}</h4>
                       <p className="text-slate-400 text-sm leading-relaxed italic">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="pt-10">
               <Link to="/asset" className="inline-flex items-center gap-10 bg-slate-950 text-white px-12 py-7 rounded-full text-[11px] font-black uppercase tracking-[0.5em] hover:bg-gold-500 transition-all shadow-3xl group">
                  Full Asset Portfolio <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-24">
             <div className="relative rounded-[4rem] overflow-hidden shadow-3xl aspect-[4/5] border border-slate-100 group bg-slate-50">
                <img 
                   src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
                   className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-110" 
                   alt="Main Elevation" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-16 left-16 right-16">
                   <div className="flex items-center gap-6 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gold-500 flex items-center justify-center text-white shadow-2xl">
                         <Layers size={32} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-white/60 uppercase tracking-widest block mb-1">Blueprint Audit</span>
                        <h4 className="text-white font-serif text-3xl italic">Tower Symmetrical v2.5</h4>
                      </div>
                   </div>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-square border border-slate-200 group">
                   <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Structural Link" />
                </div>
                <div className="p-12 bg-[#FDFBF7] border border-slate-200 rounded-[4rem] shadow-xl group hover:border-gold-400 transition-all">
                   <TrendingUp className="text-gold-500 mb-8" size={32} />
                   <h4 className="text-slate-950 font-serif text-3xl mb-4 italic leading-tight">Yield <br/>Insulation.</h4>
                   <p className="text-slate-400 text-sm leading-relaxed">Structural USPs protect ADR from market volatility, creating a durable capital moat.</p>
                   <button className="mt-8 text-gold-600 text-[9px] font-black uppercase tracking-widest flex items-center gap-3">
                      Audit Yield Data <ArrowRight size={12} />
                   </button>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheAsset;