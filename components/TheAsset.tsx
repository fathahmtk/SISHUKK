import React from 'react';
import { Building2, TrendingUp, Anchor, LayoutGrid, ArrowRight, ShieldCheck, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SHOWCASE_IMAGES = [
  {
    src: "https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg",
    label: "Architectural Scarcity",
    sub: "Non-Replicable Asset",
    height: "aspect-[4/5]"
  },
  {
    src: "https://us.images.westend61.de/0001233140pw/aerial-view-of-the-luxurious-burj-al-arab-hotel-by-night-in-dubai-bay-uae-AAEF02792.jpg",
    label: "Diversified Revenue",
    sub: "Multi-Vertical Yield",
    height: "aspect-square"
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    label: "Institutional Exit",
    sub: "REIT / Strategic Sale",
    height: "aspect-[3/4]"
  }
];

const TheAsset: React.FC = () => {
  return (
    <section id="asset" className="py-48 bg-onyx-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-900/5 to-transparent pointer-events-none"></div>
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:w-2/5 reveal-on-scroll sticky top-32">
            <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] block mb-10">Strategic Rationale</span>
            <h2 className="text-white font-serif text-6xl md:text-8xl mb-12 leading-[0.8] tracking-tighter italic">
              Investment <br/>
              <span className="gold-gradient-text italic font-black">Thesis.</span>
            </h2>
            <p className="text-slate-400 text-2xl font-light leading-relaxed mb-12 max-w-xl border-l border-gold-500/30 pl-10">
              Sirshukk Grand Towers is positioned as a landmark hospitality destination. The investment thesis rests on architectural scarcity, diversified revenue streams, and high-margin experiential income.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
              {[
                { icon: Building2, label: "Architectural Scarcity" },
                { icon: Anchor, label: "Diversified Revenue Model" },
                { icon: LayoutGrid, label: "High-Margin Event Income" },
                { icon: TrendingUp, label: "Institutional Exit Readiness" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group cursor-default">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-gold-500/50 transition-all shadow-xl group-hover:bg-onyx-900">
                    <item.icon className="text-gold-500" size={20} />
                  </div>
                  <span className="text-white text-[11px] font-black uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>

            <Link to="/asset" className="inline-flex items-center gap-8 bg-gold-500 text-onyx-950 px-12 py-6 rounded-full text-[11px] font-black uppercase tracking-[0.5em] hover:bg-white transition-all shadow-3xl group">
                Open Full Asset Dossier <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>

            <div className="mt-20 p-10 bg-onyx-900 border border-white/10 rounded-[3rem] hidden lg:block relative overflow-hidden group">
               <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <ShieldCheck className="text-gold-500" size={20} />
                    <h3 className="text-white font-serif text-xl italic">Investor Signal</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed italic">
                    "This is not inventory. This is a destination where architecture functions as a commercial engine."
                  </p>
               </div>
            </div>
          </div>

          <div className="lg:w-3/5 w-full">
            <div className="columns-1 md:columns-2 gap-8 space-y-8">
              {SHOWCASE_IMAGES.map((img, i) => (
                <div 
                  key={i} 
                  className={`relative group overflow-hidden rounded-[2.5rem] border border-white/10 shadow-3xl break-inside-avoid animate-fade-in-up`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <img 
                    src={img.src} 
                    alt={img.label} 
                    className="w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-110 brightness-[0.6] group-hover:brightness-90" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="text-gold-500 text-[9px] font-black uppercase tracking-[0.4em] mb-2">{img.sub}</span>
                    <h3 className="text-white font-serif text-3xl group-hover:text-gold-300 transition-colors leading-tight">{img.label}</h3>
                    <div className="mt-4 flex items-center gap-3 text-white/40 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 duration-500">
                      <Maximize2 size={16} />
                      <span className="text-[8px] font-black uppercase tracking-widest">Enlarge View</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] flex items-center justify-between group cursor-default">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-onyx-900 border border-gold-500/20 flex items-center justify-center text-gold-500">
                  <LayoutGrid size={20} />
                </div>
                <div>
                  <span className="text-white text-sm font-bold uppercase tracking-widest">Valuation Insulation</span>
                  <p className="text-slate-600 text-[10px] uppercase font-black tracking-widest mt-1">Driven by Visual Monopoly & Scarcity</p>
                </div>
              </div>
              <button className="p-4 rounded-full border border-white/10 text-slate-500 group-hover:text-gold-500 group-hover:border-gold-500 transition-all">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheAsset;