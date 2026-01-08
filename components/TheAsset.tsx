import React from 'react';
import { Building2, TrendingUp, Anchor, LayoutGrid, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheAsset: React.FC = () => {
  return (
    <section id="asset" className="py-24 bg-onyx-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-6">Section 01</span>
            <h2 className="text-white font-serif text-4xl md:text-6xl mb-8 leading-tight">
              This Is Not a Hotel. <br/>
              <span className="italic text-slate-500">This Is an Asset.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              SIRSHUKK GRAND TOWERS has been designed first as a value-retaining real estate asset, and only then as a hospitality operation.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              The twin cylindrical glass towers, unified by a monumental central arch and crowned with illuminated skyline elements, are not architectural indulgence. They are intentional value drivers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {[
                { icon: Building2, label: "Non-replicable architecture" },
                { icon: Anchor, label: "Vertical luxury (No land-spread risk)" },
                { icon: LayoutGrid, label: "High visual recall" },
                { icon: TrendingUp, label: "Event-scale infrastructure" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <item.icon className="text-gold-500" size={20} />
                  <span className="text-white text-xs font-bold uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>

            <Link to="/asset" className="inline-flex items-center gap-4 bg-gold-500 text-onyx-950 px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all">
                Open Full Asset Dossier <ArrowRight size={14} />
            </Link>
          </div>

          <div className="bg-white/5 border border-white/10 p-10 rounded-xl relative group overflow-hidden">
             {/* Preview Image in Background of Card */}
             <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" className="w-full h-full object-cover" alt="" />
             </div>
             <div className="relative z-10">
                <h3 className="text-white font-serif text-2xl mb-8">Landmark Asset Logic</h3>
                <ul className="space-y-6">
                {[
                    "Command premium pricing over market average",
                    "Attract non-resident demand (Dining/Events)",
                    "Maintain valuation across economic cycles",
                    "Exit at higher multiples to institutional funds"
                ].map((point, i) => (
                    <li key={i} className="flex gap-4 items-start">
                    <span className="text-gold-500 font-mono text-sm">0{i+1}</span>
                    <span className="text-slate-300 text-sm leading-relaxed">{point}</span>
                    </li>
                ))}
                </ul>
                <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-widest text-slate-500">
                    Asset Strategy: Engineered to be remembered, recognised, and re-tradeable.
                </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheAsset;