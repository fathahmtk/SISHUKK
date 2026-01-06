import React from 'react';
import { ArrowRight } from 'lucide-react';

const Experiences: React.FC = () => {
  const items = [
    { title: "Guruvayur Temple Darshan", desc: "Private guided visits and priority access arrangements.", img: "https://images.unsplash.com/photo-1623696238775-68748d55734e?auto=format&fit=crop&q=80" },
    { title: "Backwater Sunset Cruise", desc: "Luxury yacht trips through the serene Kerala backwaters.", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80" },
    { title: "Ayurvedic Rejuvenation", desc: "Signature therapies at our award-winning wellness sanctuary.", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80" },
  ];

  return (
    <section id="experiences" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-900 via-transparent to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <span className="text-gold-400 tracking-[0.2em] uppercase text-xs font-bold">Discover</span>
                <h2 className="font-serif text-4xl md:text-5xl mt-2 text-white">Curated Experiences</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-slate-400 border-b border-slate-700 pb-1 hover:text-gold-400 hover:border-gold-400 transition-colors mt-6 md:mt-0">
                View All Activities <ArrowRight size={14} />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, idx) => (
                <div key={idx} className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-auto md:h-[500px]">
                    <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                    />
                    
                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity"></div>
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="font-serif text-2xl mb-3 text-white group-hover:text-gold-400 transition-colors leading-tight">{item.title}</h3>
                            <div className="h-0.5 w-8 bg-gold-500 mb-4 group-hover:w-full transition-all duration-700 opacity-50"></div>
                            <p className="text-slate-300 font-light text-sm line-clamp-2 leading-relaxed">{item.desc}</p>
                            <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                <ArrowRight className="text-white w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;