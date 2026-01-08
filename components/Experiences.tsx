
import React from 'react';
import { ArrowRight, Sparkles, Map, Heart, Compass } from 'lucide-react';

const Experiences: React.FC = () => {
  const items = [
    { 
      title: "Spiritual Darshan", 
      desc: "Private guided visits to the Guruvayur Temple with priority access arrangements curated for our guests.", 
      img: "https://images.unsplash.com/photo-1600675281904-13e90046b961?auto=format&fit=crop&q=80",
      icon: Sparkles,
      color: "gold"
    },
    { 
      title: "Vedic Wellness", 
      desc: "Authentic Panchakarma and signature Ayurvedic therapies in our dedicated 12,000 sq ft sanctuary.", 
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80",
      icon: Heart,
      color: "rose"
    },
    { 
      title: "Coastal Escapes", 
      desc: "Sunset yacht cruises through the serene backwaters, complete with chef-curated high tea on deck.", 
      img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80",
      icon: Compass,
      color: "blue"
    },
  ];

  return (
    <section id="experiences" className="py-32 bg-onyx-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(212,175,55,0.03)_0%,_transparent_50%)]"></div>
        
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="max-w-2xl">
                <span className="text-gold-500 tracking-[0.6em] uppercase text-[10px] font-black flex items-center gap-4 mb-6">
                    <span className="w-12 h-px bg-gold-500/50"></span> The Lifestyle
                </span>
                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.85] tracking-tighter">
                    Beyond the <br/><span className="text-gold-400 italic">Ordinary.</span>
                </h2>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {items.map((item, idx) => (
                <div key={idx} className="group relative rounded-[2.5rem] overflow-hidden aspect-[3/4] cursor-pointer shadow-2xl border border-white/5">
                    <img 
                        src={item.img} 
                        alt={item.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 brightness-[0.6] group-hover:brightness-90" 
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent opacity-90 transition-opacity"></div>
                    
                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                        <div className="space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-gold-500 shadow-xl group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-500">
                                <item.icon size={20} />
                            </div>
                            <h3 className="font-serif text-3xl md:text-4xl text-white leading-tight group-hover:text-gold-400 transition-colors">{item.title}</h3>
                            <p className="text-slate-300 font-light text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                {item.desc}
                            </p>
                            <div className="pt-4 flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors">
                                Discover More <ArrowRight size={12} className="group-hover:translate-x-2 transition-transform" />
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
