import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

const INCLUSIVES = [
  {
    id: 'revolving',
    title: 'Dual Revolving Crowns',
    subtitle: 'High-Altitude Gastronomy',
    desc: 'Two independent 60-minute platforms providing 360-degree spiritual vistas. A structural landmark generating massive non-resident revenue.',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80',
    tags: ['USP Engine', 'Institutional']
  },
  {
    id: 'ballroom',
    title: 'Grand Imperial Ballroom',
    subtitle: 'Ritual Event Core',
    desc: '15,000 Sq. Ft. of monumental volume. Engineered for South India\'s most prestigious ceremonies, creating a non-seasonal demand floor.',
    img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
    tags: ['Mega-Scale', 'Alpha Driver']
  },
  {
    id: 'skybridge',
    title: 'The Meridian Arch',
    subtitle: 'Executive Gateway',
    desc: 'Structural masterpiece at Level 15 connecting the twin cores. Housing the executive club and private observation sanctuary.',
    img: 'https://images.unsplash.com/photo-1571167431263-6d60156d108d?auto=format&fit=crop&q=80',
    tags: ['Structural Icon', 'Private']
  }
];

const InclusiveShowcase: React.FC = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((curr) => (curr + 1) % INCLUSIVES.length);
  const prev = () => setActive((curr) => (curr - 1 + INCLUSIVES.length) % INCLUSIVES.length);

  return (
    <div className="w-full h-full flex flex-col justify-center py-20 bg-white">
      <div className="container mx-auto px-10 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-4 px-5 py-2 border border-gold-200 rounded-full bg-gold-50/50 mb-10 transition-all">
              <Layers size={16} className="text-gold-600" />
              <span className="text-gold-600 uppercase text-[10px] font-black tracking-[0.4em]">Asset Anatomy Chapter 05</span>
            </div>
            <h2 className="text-slate-950 font-serif text-5xl md:text-8xl leading-[0.8] tracking-tighter mb-4">Structural <br/><span className="gold-gradient-text italic font-black">Inclusives.</span></h2>
          </div>
          <div className="flex gap-6 mb-4">
            <button 
              onClick={prev}
              className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-950 hover:text-white transition-all shadow-xl active:scale-90"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={next}
              className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-950 hover:text-white transition-all shadow-xl active:scale-90"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>

        <div className="relative w-full h-[65vh] perspective-1000">
          {INCLUSIVES.map((item, idx) => (
            <div 
              key={item.id}
              className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col lg:flex-row rounded-[5rem] overflow-hidden bg-white border border-slate-200 shadow-3xl preserve-3d ${
                idx === active 
                  ? 'opacity-100 translate-x-0 z-10 scale-100 rotate-y-0' 
                  : 'opacity-0 translate-x-40 pointer-events-none scale-95 rotate-y-12'
              }`}
            >
              <div className="w-full lg:w-3/5 h-full relative overflow-hidden group/img">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className={`w-full h-full object-cover transition-transform duration-[10s] ${idx === active ? 'scale-110' : 'scale-100'}`} 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block opacity-40"></div>
                <div className="absolute top-10 left-10 flex gap-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-slate-950/90 backdrop-blur-xl border border-white/20 text-white text-[9px] uppercase tracking-[0.3em] font-black px-6 py-2.5 rounded-full shadow-2xl">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-2/5 p-16 md:p-24 flex flex-col justify-center bg-[#FDFBF7]">
                <div className="mb-12">
                  <span className="text-gold-600 text-[11px] font-black uppercase tracking-[0.5em] block mb-4 italic">{item.subtitle}</span>
                  <h3 className="text-slate-950 font-serif text-5xl md:text-6xl italic leading-[0.8] tracking-tighter mb-8">{item.title}</h3>
                </div>
                <p className="text-slate-500 text-2xl font-light leading-relaxed mb-16 italic border-l-2 border-gold-400 pl-10">{item.desc}</p>
                <div className="pt-12 border-t border-slate-200 flex justify-between items-center">
                   <button className="inline-flex items-center gap-6 text-slate-950 text-[11px] font-black uppercase tracking-[0.4em] group hover:text-gold-600 transition-colors">
                      Technical Portfolio <ArrowRight size={20} className="text-gold-500 group-hover:translate-x-2 transition-transform duration-500" />
                   </button>
                   <div className="text-slate-950 font-serif text-2xl italic font-black">High-Alpha</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InclusiveShowcase;