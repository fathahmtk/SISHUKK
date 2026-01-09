import React from 'react';
import { ArrowRight, Sparkles, Map, Heart, Compass, Star, Navigation } from 'lucide-react';

const Experiences: React.FC = () => {
  const items = [
    { 
      title: "Spiritual Darshan", 
      desc: "Private guided visits to the Guruvayur Temple with priority access arrangements curated for our guests.", 
      img: "https://images.unsplash.com/photo-1600675281904-13e90046b961?auto=format&fit=crop&q=80",
      icon: Sparkles,
      sub: "Priority Logistics"
    },
    { 
      title: "Vedic Wellness", 
      desc: "Authentic Panchakarma and signature Ayurvedic therapies in our dedicated 12,000 sq ft sanctuary.", 
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80",
      icon: Heart,
      sub: "Clinical Grade Spa"
    },
    { 
      title: "Coastal Escapes", 
      desc: "Sunset yacht cruises through the serene backwaters, complete with chef-curated high tea on deck.", 
      img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80",
      icon: Compass,
      sub: "Luxe Backwaters"
    },
  ];

  return (
    <section id="experiences" className="py-64 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-[10%] left-[-5%] text-slate-50 font-serif text-[45rem] font-black italic leading-none select-none pointer-events-none opacity-60">X</div>
        
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-16">
            <div className="max-w-4xl">
                <span className="text-gold-600 tracking-[0.8em] uppercase text-[10px] font-black block mb-10">Chapter 09: Experiential Strategy</span>
                <h2 className="font-serif text-6xl md:text-9xl text-slate-950 leading-[0.8] tracking-tighter italic">
                    Beyond the <br/><span className="gold-gradient-text italic font-black">Ordinary.</span>
                </h2>
                <p className="text-slate-500 text-2xl font-light leading-relaxed mt-12 border-l-2 border-gold-400 pl-12 max-w-2xl">
                  "Experiences are engineered to increase the Average Length of Stay (ALOS) by 2.5x, driving non-linear revenue capture."
                </p>
            </div>
            <div className="bg-[#FDFBF7] p-8 rounded-[3rem] border border-slate-200 shadow-xl group hover:border-gold-400 transition-all flex items-center gap-6">
               <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-gold-600 shadow-sm group-hover:scale-110 transition-transform">
                  <Navigation size={24} />
               </div>
               <div>
                  <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-1">Impact Analysis</span>
                  <span className="text-slate-950 text-xs font-bold uppercase tracking-widest">ALOS Multiplier: 2.5x</span>
               </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
            {items.map((item, idx) => (
                <div key={idx} className={`group relative rounded-[4rem] overflow-hidden aspect-[3/4.5] cursor-pointer shadow-2xl border border-slate-100 bg-slate-50 transition-all duration-1000 hover:shadow-3xl ${idx === 1 ? 'lg:translate-y-24' : ''}`}>
                    <img 
                        src={item.img} 
                        alt={item.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 brightness-[1.05] contrast-[1.02]" 
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-700"></div>
                    
                    <div className="absolute inset-0 p-12 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                        <div className="space-y-8">
                            <div className="w-16 h-16 rounded-3xl bg-white border border-slate-100 flex items-center justify-center text-gold-600 shadow-xl group-hover:bg-gold-500 group-hover:text-white transition-all duration-500">
                                <item.icon size={28} />
                            </div>
                            <div>
                               <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.4em] mb-3 block opacity-0 group-hover:opacity-100 transition-opacity">{item.sub}</span>
                               <h3 className="font-serif text-4xl md:text-5xl text-slate-950 leading-none italic group-hover:text-gold-600 transition-colors">{item.title}</h3>
                            </div>
                            <p className="text-slate-400 font-light text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                {item.desc}
                            </p>
                            <div className="pt-6 border-t border-slate-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 italic">Audit Logged v2.5</span>
                                <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center text-white">
                                   <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </div>
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