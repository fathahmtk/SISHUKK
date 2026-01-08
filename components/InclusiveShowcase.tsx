import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const INCLUSIVES = [
  {
    id: 'revolving',
    title: 'Dual Revolving Crowns',
    subtitle: 'Gastronomy in Motion',
    desc: 'Two independent revolving restaurant modules at the peak of each tower, offering 360-degree views of the Guruvayur skyline and the Arabian Sea horizon.',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80',
    tags: ['Level 20', 'Fine Dining', 'Iconic']
  },
  {
    id: 'ballroom',
    title: 'Grand Pillar-less Ballroom',
    subtitle: 'Monumental Celebrations',
    desc: '15,000 Sq. Ft. of pure architectural volume. 8-meter clear heights and state-of-the-art acoustics designed for the most prestigious weddings in South India.',
    img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
    tags: ['MICE', 'Weddings', '1500 Pax']
  },
  {
    id: 'skybridge',
    title: 'The Sky Bridge Lounge',
    subtitle: 'Connecting Horizons',
    desc: 'A structural steel truss bridge at Level 15 connecting the twin towers. Houses an exclusive Executive Club, library, and a glass-floored observation deck.',
    img: 'https://images.unsplash.com/photo-1571167431263-6d60156d108d?auto=format&fit=crop&q=80',
    tags: ['Level 15', 'Exclusive', 'Social Hub']
  },
  {
    id: 'wellness',
    title: 'Ayurvedic Sanctuary',
    subtitle: 'Divine Rejuvenation',
    desc: 'A 12,000 Sq. Ft. wellness ecosystem combining traditional Kerala Ayurveda with modern spa technology, curated for the modern spiritual traveler.',
    img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80',
    tags: ['Wellness', 'Spa', 'Holistic']
  },
  {
    id: 'keys',
    title: 'Precision Luxury Keys',
    subtitle: 'Sovereign Comfort',
    desc: '200 precision-engineered luxury keys. Each room features high-performance DGU glass facades for thermal comfort and panoramic spiritual vistas.',
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80',
    tags: ['5-Star', 'Automation', 'Panoramic']
  }
];

const InclusiveShowcase: React.FC = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((curr) => (curr + 1) % INCLUSIVES.length);
  const prev = () => setActive((curr) => (curr - 1 + INCLUSIVES.length) % INCLUSIVES.length);

  return (
    <section id="experience" className="bg-onyx-950 py-16 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20 animate-fade-in">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.6em] block mb-4">The Portfolio</span>
          <h2 className="text-white font-serif text-4xl md:text-7xl tracking-tighter mb-6 leading-[0.9]">Architectural <br/><span className="gold-gradient-text italic">Inclusives.</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg font-light tracking-wide">
            An institutional-grade breakdown of the asset's high-yield revenue centers and unique experiential drivers.
          </p>
        </div>

        <div className="relative h-auto lg:h-[700px] w-full group">
          {INCLUSIVES.map((item, idx) => (
            <div 
              key={item.id}
              className={`lg:absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.16, 1, 0.3, 1)] flex flex-col lg:flex-row rounded-[3rem] overflow-hidden border border-white/10 glass-card shadow-3xl ${
                idx === active ? 'opacity-100 translate-x-0 relative z-10' : 'opacity-0 translate-x-40 pointer-events-none absolute h-0 w-0'
              }`}
            >
              <div className="w-full lg:w-3/5 h-64 md:h-96 lg:h-full relative overflow-hidden group/img">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className={`w-full h-full object-cover transition-transform duration-[6s] ${idx === active ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-transparent to-transparent lg:hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-onyx-950/40 via-transparent to-transparent hidden lg:block"></div>
                
                <div className="absolute top-4 left-4 md:top-8 md:left-8 flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-black/60 backdrop-blur-md border border-white/20 text-white text-[7px] md:text-[8px] uppercase tracking-widest font-black px-3 md:px-4 py-1 md:py-2 rounded-full shadow-2xl">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                   <div className="w-20 h-20 rounded-full bg-gold-500/20 backdrop-blur-3xl border border-gold-500/50 flex items-center justify-center text-gold-500">
                      <Maximize2 size={32} />
                   </div>
                </div>
              </div>

              <div className="w-full lg:w-2/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-onyx-900/40 backdrop-blur-3xl border-l border-white/5">
                <div className="mb-6 md:mb-10">
                  <span className="text-gold-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] block mb-2">{item.subtitle}</span>
                  <h3 className="text-white font-serif text-3xl md:text-5xl leading-tight mb-4 md:mb-6">{item.title}</h3>
                  <div className="h-px w-20 bg-gold-500/50 shadow-[0_0_10px_#D4AF37]"></div>
                </div>

                <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-12">
                  {item.desc}
                </p>

                <button className="flex items-center gap-4 text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] group w-fit hover:text-gold-500 transition-colors">
                  Detailed Specifications 
                  <ArrowRight size={16} className="text-gold-500 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}

          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex gap-3 md:gap-4 z-20">
            <button 
              onClick={prev}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:text-onyx-950 transition-all active:scale-95 bg-black/40 lg:bg-onyx-950 shadow-2xl"
              aria-label="Previous Inclusive"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={next}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:text-onyx-950 transition-all active:scale-95 bg-black/40 lg:bg-onyx-950 shadow-2xl"
              aria-label="Next Inclusive"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 flex gap-2 md:gap-3 z-20">
            {INCLUSIVES.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActive(i)}
                className={`h-1 transition-all duration-700 rounded-full ${i === active ? 'w-8 md:w-16 bg-gold-500 shadow-[0_0_10px_#D4AF37]' : 'w-2 md:w-4 bg-white/20'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InclusiveShowcase;