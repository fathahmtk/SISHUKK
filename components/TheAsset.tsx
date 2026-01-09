import React from 'react';
import { Building2, TrendingUp, ArrowRight, Layers, ShieldCheck, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const THESIS_POINTS = [
  { label: "Architectural Scarcity", d: "Non-replicable twin-tower silhouette creating a regional landmark." },
  { label: "Revenue Multiplier", d: "Diversified yield capture from rooms and event cores." },
  { label: "Capital Sovereignty", d: "100% Freehold debt-free land base reducing risk." },
  { label: "Exit Visibility", d: "REIT-calibrated financial governance for Year 7." }
];

const TheAsset: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-8">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-[1px] bg-gold-500"></div>
                  <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.6em]">Chapter 01: Strategic Thesis</span>
               </div>
               <h2 className="text-slate-950 font-serif text-5xl md:text-7xl leading-[0.8] tracking-tighter italic">
                  Value through <br/><span className="gold-gradient-text font-black italic">Scarcity.</span>
               </h2>
               <p className="text-slate-500 text-xl font-light leading-relaxed border-l-2 border-gold-400 pl-10 max-w-lg italic">
                  Architecture functions as a commercial engine. In dense pilgrimage corridors, visual dominance defines market capture.
               </p>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-8 border-t border-slate-100">
               {THESIS_POINTS.map((item, i) => (
                 <div key={i} className="group flex gap-6 items-start">
                    <div className="text-gold-600 font-serif text-2xl italic opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                    <div>
                       <h4 className="text-slate-950 font-black uppercase tracking-widest text-[10px] mb-1 group-hover:text-gold-600 transition-colors">{item.label}</h4>
                       <p className="text-slate-400 text-xs leading-relaxed italic">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="pt-6">
               <Link to="/asset" className="inline-flex items-center gap-8 bg-slate-950 text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 transition-all shadow-3xl group">
                  Full Portfolio <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-8 h-[600px]">
             <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border border-slate-100 group bg-slate-50 row-span-2">
                <img 
                   src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
                   className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-110" 
                   alt="Main Elevation" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-10 left-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center text-white shadow-2xl">
                         <Layers size={24} />
                      </div>
                      <span className="text-white font-serif text-xl italic">Tower Symmetry</span>
                    </div>
                </div>
             </div>
             <div className="rounded-[3.5rem] overflow-hidden shadow-xl aspect-square border border-slate-100 group">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Detail" />
             </div>
             <div className="p-10 bg-[#FDFBF7] border border-slate-200 rounded-[3.5rem] shadow-lg group hover:border-gold-400 transition-all flex flex-col justify-center">
                <TrendingUp className="text-gold-500 mb-6" size={28} />
                <h4 className="text-slate-950 font-serif text-2xl mb-2 italic leading-tight">Yield Insulation.</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Structural USPs protect ADR from market volatility.</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheAsset;