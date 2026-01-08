import React from 'react';
import { Building2, TrendingUp, Anchor, LayoutGrid, ArrowRight, ShieldCheck, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SHOWCASE_IMAGES = [
  {
    src: "https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg",
    label: "Monumental Perspective",
    sub: "Twin 20-Floor Elevation",
    height: "aspect-[4/5]"
  },
  {
    src: "https://images.unsplash.com/photo-1740626359516-728864703901?q=80&w=3540&auto=format&fit=crop",
    label: "The Meridian Arch",
    sub: "Structural Gateway",
    height: "aspect-square"
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    label: "Crystalline Facade",
    sub: "High-Performance DGU",
    height: "aspect-[3/4]"
  },
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    label: "Retail Podium",
    sub: "Gastronomy Hub",
    height: "aspect-video"
  },
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80",
    label: "Lobby Volume",
    sub: "7-Star Entrance",
    height: "aspect-[4/3]"
  }
];

const TheAsset: React.FC = () => {
  return (
    <section id="asset" className="py-48 bg-onyx-950 border-t border-white/5 relative overflow-hidden">
      {/* Visual background gradient for architectural depth */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-900/5 to-transparent pointer-events-none"></div>
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:w-2/5 reveal-on-scroll sticky top-32">
            <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] block mb-10">Dossier: Asset Chapter 01</span>
            <h2 className="text-white font-serif text-6xl md:text-8xl mb-12 leading-[0.8] tracking-tighter italic">
              This Is Not <br/>a Hotel. <br/>
              <span className="gold-gradient-text italic font-black">This Is an Asset.</span>
            </h2>
            <p className="text-slate-400 text-2xl font-light leading-relaxed mb-12 max-w-xl border-l border-gold-500/30 pl-10">
              SIRSHUKK GRAND TOWERS is engineered first as a value-retaining capital asset, and only then as a hospitality operation. This is structural alpha.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
              {[
                { icon: Building2, label: "Non-replicable architecture" },
                { icon: Anchor, label: "Vertical luxury footprint" },
                { icon: LayoutGrid, label: "Institutional Recall" },
                { icon: TrendingUp, label: "High-Margin Infrastructure" }
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
                    <h3 className="text-white font-serif text-xl italic">Investment Thesis</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed italic">
                    "Asset resilience is derived from the structural supply void in the 1.5KM temple radius."
                  </p>
               </div>
            </div>
          </div>

          {/* Masonry Image Showcase */}
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
                      <span className="text-[8px] font-black uppercase tracking-widest">Enlarge Asset View</span>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-gold-500/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] flex items-center justify-between group cursor-default">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-onyx-900 border border-gold-500/20 flex items-center justify-center text-gold-500">
                  <LayoutGrid size={20} />
                </div>
                <div>
                  <span className="text-white text-sm font-bold uppercase tracking-widest">Master Image Library</span>
                  <p className="text-slate-600 text-[10px] uppercase font-black tracking-widest mt-1">48 High-Resolution Renders Logged</p>
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