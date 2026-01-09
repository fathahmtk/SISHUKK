import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Maximize2, Layers } from 'lucide-react';

const INCLUSIVES = [
  {
    id: 'revolving',
    title: 'Dual Revolving Crowns',
    subtitle: 'High-Altitude Gastronomy',
    desc: 'Two independent revolving modules at Level 20, providing 360-degree panoramas of the temple district. A structural landmark generating massive non-resident revenue.',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80',
    tags: ['USP Engine', 'Fine Dining', 'Institutional']
  },
  {
    id: 'ballroom',
    title: 'Grand Imperial Ballroom',
    subtitle: 'Ritual Event Core',
    desc: '15,000 Sq. Ft. of monumental volume. Engineered for South India\'s most prestigious ceremonial events, creating a non-seasonal operational floor.',
    img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
    tags: ['Mega-Scale', '1200 Banquet', 'Alpha Driver']
  },
  {
    id: 'skybridge',
    title: 'The Meridian Arch',
    subtitle: 'Executive Gateway',
    desc: 'A structural masterpiece at Level 15 connecting the twin cores. Housing the executive club, observation sanctuary, and private capital lounge.',
    img: 'https://images.unsplash.com/photo-1571167431263-6d60156d108d?auto=format&fit=crop&q=80',
    tags: ['Structural Icon', 'Private Club', 'Secure']
  }
];

const InclusiveShowcase: React.FC = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((curr) => (curr + 1) % INCLUSIVES.length);
  const prev = () => setActive((curr) => (curr - 1 + INCLUSIVES.length) % INCLUSIVES.length);

  return (
    <section id="experience" className="bg-white py-48 relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-200 rounded-full bg-gold-50/50 mb-10 shadow-sm">
              <Layers size={16} className="text-gold-600" />
              <span className="text-gold-600 uppercase text-[10px] font-black tracking-[0.5em]">Asset Anatomy Chapter 05</span>
            </div>
            <h2 className="text-slate-950 font-serif text-6xl md:text-9xl leading-[0.8] tracking-tighter italic">Structural <br/><span className="gold-gradient-text italic font-black">Inclusives.</span></h2>
            <p className="text-slate-500 text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-gold-400 pl-12 mt-12">
              High-yield revenue centers that operate independently of room occupancy. These architectural "anchors" define the asset's destination appeal.
            </p>
          </div>
          <div className="flex gap-6 z-20">
            <button 
              onClick={prev}
              className="w-20 h-20 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all active:scale-90 shadow-sm"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={next}
              className="w-20 h-20 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all active:scale-90 shadow-sm"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>

        <div className="relative w-full h-[850px] group">
          {INCLUSIVES.map((item, idx) => (
            <div 
              key={item.id}
              className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col lg:flex-row rounded-[5rem] overflow-hidden bg-white border border-slate-200 shadow-3xl ${
                idx === active ? 'opacity-100 translate-x-0 z-10 scale-100' : 'opacity-0 translate-x-40 pointer-events-none scale-95'
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-3/5 h-full relative overflow-hidden group/img">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className={`w-full h-full object-cover transition-transform duration-[8s] ease-linear brightness-[1.05] contrast-[1.02] ${idx === active ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-80 lg:hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent hidden lg:block opacity-60"></div>
                
                <div className="absolute top-12 left-12 flex flex-wrap gap-3">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-slate-950/90 backdrop-blur-xl border border-white/20 text-white text-[9px] uppercase tracking-widest font-black px-6 py-2.5 rounded-full shadow-2xl">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-700">
                   <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center text-slate-950 shadow-3xl">
                      <Maximize2 size={36} />
                   </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/5 p-16 md:p-24 flex flex-col justify-center bg-[#FDFBF7] border-l border-slate-100">
                <div className="mb-12">
                  <span className="text-gold-600 text-[11px] font-black uppercase tracking-[0.5em] block mb-4">{item.subtitle}</span>
                  <h3 className="text-slate-950 font-serif text-5xl md:text-7xl leading-none italic mb-10">{item.title}</h3>
                  <div className="h-px w-32 bg-gold-400"></div>
                </div>

                <p className="text-slate-500 text-2xl font-light leading-relaxed mb-16 italic">
                  {item.desc}
                </p>

                <div className="space-y-12">
                   <button className="inline-flex items-center gap-6 text-slate-950 text-[11px] font-black uppercase tracking-[0.4em] group w-fit hover:text-gold-600 transition-colors">
                      Technical Portfolio
                      <ArrowRight size={20} className="text-gold-500 group-hover:translate-x-3 transition-transform" />
                   </button>
                   
                   <div className="grid grid-cols-2 gap-10 pt-16 border-t border-slate-200">
                      <div>
                        <div className="text-slate-400 text-[8px] font-black uppercase tracking-widest mb-2">Yield Weighting</div>
                        <div className="text-slate-950 font-serif text-3xl italic">High-Alpha</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-[8px] font-black uppercase tracking-widest mb-2">Market Moat</div>
                        <div className="text-emerald-600 font-serif text-3xl italic">Secured</div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          ))}

          {/* Indicator Dots */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-4 z-20">
            {INCLUSIVES.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActive(i)}
                className={`h-1.5 transition-all duration-700 rounded-full ${active === i ? 'w-16 bg-gold-500' : 'w-4 bg-slate-200 hover:bg-slate-300'}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InclusiveShowcase;