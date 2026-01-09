import React from 'react';
import { ArrowRight, Sparkles, Heart, Compass, Navigation } from 'lucide-react';

const Experiences: React.FC = () => {
  const items = [
    { title: "Spiritual Darshan", desc: "Private guided visits with priority access arrangements.", img: "https://images.unsplash.com/photo-1600675281904-13e90046b961?auto=format&fit=crop&q=80", icon: Sparkles, sub: "Logistics" },
    { title: "Vedic Wellness", desc: "Authentic Panchakarma and signature Ayurvedic therapies.", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80", icon: Heart, sub: "Clinical Spa" },
    { title: "Coastal Escapes", desc: "Sunset cruises through serene backwaters with curated tea.", img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80", icon: Compass, sub: "Backwaters" },
  ];

  return (
    <section id="experiences" className="py-12 bg-white relative h-full flex flex-col justify-center border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-2xl">
                <span className="text-gold-600 tracking-[0.6em] uppercase text-[9px] font-black block mb-4">Chapter 09: Experiential Strategy</span>
                <h2 className="font-serif text-4xl md:text-7xl text-slate-950 leading-[0.8] tracking-tighter italic">
                    Beyond the <br/><span className="gold-gradient-text italic font-black">Ordinary.</span>
                </h2>
            </div>
            <div className="bg-[#FDFBF7] p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
               <Navigation size={18} className="text-gold-600" />
               <span className="text-slate-950 text-[9px] font-bold uppercase tracking-widest">ALOS Multiplier: 2.5x</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[55vh]">
            {items.map((item, idx) => (
                <div key={idx} className={`group relative rounded-[3rem] overflow-hidden cursor-pointer shadow-lg border border-slate-100 bg-slate-50 transition-all duration-700 hover:shadow-2xl ${idx === 1 ? 'lg:translate-y-8' : ''}`}>
                    <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] brightness-[1.1]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-90 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <div className="space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-gold-600 shadow-lg group-hover:bg-gold-500 group-hover:text-white transition-all">
                                <item.icon size={22} />
                            </div>
                            <div>
                               <span className="text-gold-600 text-[8px] font-black uppercase tracking-[0.3em] block mb-1 opacity-0 group-hover:opacity-100 transition-opacity">{item.sub}</span>
                               <h3 className="font-serif text-3xl text-slate-950 leading-none italic group-hover:text-gold-600 transition-colors">{item.title}</h3>
                            </div>
                            <p className="text-slate-500 font-light text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {item.desc}
                            </p>
                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[8px] font-black uppercase tracking-widest text-slate-300 italic">Audit Logged</span>
                                <ArrowRight size={14} className="text-slate-950" />
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