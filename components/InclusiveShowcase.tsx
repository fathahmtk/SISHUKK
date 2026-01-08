
import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const INCLUSIVES = [
  {
    id: 'revolving',
    title: 'Dual Revolving Crowns',
    subtitle: 'Culinary Levitation',
    desc: 'Two independent revolving gastronomy modules at 75m, offering 360-degree panoramas of the temple district and the distant coastline.',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80',
    tags: ['Rooftop', 'Fine Dining', 'Iconic']
  },
  {
    id: 'ballroom',
    title: 'Imperial Ballroom',
    subtitle: 'Ceremonial Majesty',
    desc: '15,000 Sq. Ft. of pillar-less volume. Designed for South India\'s most prestigious destination weddings and global summits.',
    img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
    tags: ['MICE', '1500 Pax', 'Grandeur']
  },
  {
    id: 'skybridge',
    title: 'Connecting Gateway',
    subtitle: 'The Meridian Arch',
    desc: 'A structural masterpiece at Level 15. Housing the Executive Club, library, and private observation sanctuary.',
    img: 'https://images.unsplash.com/photo-1571167431263-6d60156d108d?auto=format&fit=crop&q=80',
    tags: ['Club Lounge', 'Horizon View', 'Private']
  },
  {
    id: 'wellness',
    title: 'Vedic Sanctuary',
    subtitle: 'Wellness Alchemy',
    desc: 'A 12,000 Sq. Ft. ecosystem blending traditional Kerala Ayurveda with modern bio-hacking and holistic recovery.',
    img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80',
    tags: ['Ayurveda', 'Bio-Spa', 'Detox']
  }
];

const InclusiveShowcase: React.FC = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((curr) => (curr + 1) % INCLUSIVES.length);
  const prev = () => setActive((curr) => (curr - 1 + INCLUSIVES.length) % INCLUSIVES.length);

  return (
    <section id="experience" className="bg-onyx-950 py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal-on-scroll">
          <span className="text-gold-400 text-[10px] font-black uppercase tracking-[0.6em] block mb-4">Institutional Portfolio</span>
          <h2 className="text-white font-serif text-4xl md:text-7xl tracking-tighter mb-8 leading-[0.9]">Architectural <br/><span className="gold-gradient-text italic">Inclusives.</span></h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg font-light tracking-wide">
            An institutional breakdown of high-yield revenue centers and unique experiential drivers.
          </p>
        </div>

        <div className="relative h-auto lg:h-[750px] w-full group">
          {INCLUSIVES.map((item, idx) => (
            <div 
              key={item.id}
              className={`lg:absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.16, 1, 0.3, 1)] flex flex-col lg:flex-row rounded-[3rem] overflow-hidden glass-panel border border-white/10 ${
                idx === active ? 'opacity-100 translate-x-0 relative z-10 scale-100 shadow-[0_40px_100px_rgba(0,0,0,0.6)]' : 'opacity-0 translate-x-40 pointer-events-none absolute h-0 w-0 scale-95'
              }`}
            >
              <div className="w-full lg:w-3/5 h-64 md:h-96 lg:h-full relative overflow-hidden group/img">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className={`w-full h-full object-cover transition-transform duration-[8s] ease-linear ${idx === active ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-950/90 via-transparent to-transparent lg:hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-onyx-950/80 via-transparent to-transparent hidden lg:block"></div>
                
                <div className="absolute top-8 left-8 flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-onyx-950/80 backdrop-blur-md border border-white/10 text-white text-[8px] uppercase tracking-widest font-black px-4 py-2 rounded-full shadow-2xl">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                   <div className="w-20 h-20 rounded-full bg-gold-500/10 backdrop-blur-md border border-gold-500/40 flex items-center justify-center text-gold-400">
                      <Maximize2 size={32} />
                   </div>
                </div>
              </div>

              <div className="w-full lg:w-2/5 p-12 md:p-16 flex flex-col justify-center border-l border-white/5 bg-onyx-900/40">
                <div className="mb-10">
                  <span className="text-gold-400 text-[10px] font-black uppercase tracking-[0.4em] block mb-3">{item.subtitle}</span>
                  <h3 className="text-white font-serif text-4xl md:text-5xl leading-tight mb-6">{item.title}</h3>
                  <div className="h-px w-24 bg-gold-500/40"></div>
                </div>

                <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12">
                  {item.desc}
                </p>

                <button className="flex items-center gap-4 text-white text-[10px] font-black uppercase tracking-[0.3em] group w-fit hover:text-gold-300 transition-colors">
                  Technical Specifications 
                  <ArrowRight size={16} className="text-gold-400 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}

          <div className="absolute bottom-8 right-8 flex gap-4 z-20">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold-500 hover:text-onyx-950 transition-all active:scale-95 bg-onyx-950/80 backdrop-blur-md shadow-2xl"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold-500 hover:text-onyx-950 transition-all active:scale-95 bg-onyx-950/80 backdrop-blur-md shadow-2xl"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InclusiveShowcase;
