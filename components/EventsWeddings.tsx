import React from 'react';
import { Layers, Users, Music, Utensils, ArrowRight, Star, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsWeddings: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-[#FDFBF7] relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 grid grid-cols-2 gap-6 h-[600px] order-2 lg:order-1">
                {[
                  { icon: Layers, label: "Grand Ballroom", sub: "15k Sq. Ft.", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80" },
                  { icon: Users, label: "Banquet Halls", sub: "3k Pax Cap.", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" },
                  { icon: Music, label: "Ceremonial Decks", sub: "Outdoor Vistas", img: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80" },
                  { icon: Utensils, label: "High Volume", sub: "Global Core", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" },
                ].map((item, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-[3rem] border border-slate-100 shadow-lg bg-white">
                    <img src={item.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110" alt={item.label} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                       <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-gold-600 mb-2 shadow-xl group-hover:bg-gold-500 group-hover:text-white transition-all">
                          <item.icon size={16} />
                       </div>
                       <span className="text-white text-[9px] font-black uppercase tracking-widest block">{item.label}</span>
                       <span className="text-white/60 text-[7px] font-black uppercase tracking-widest">{item.sub}</span>
                    </div>
                  </div>
                ))}
          </div>
          
          <div className="lg:col-span-6 space-y-12 order-1 lg:order-2">
            <div className="space-y-8">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-[1px] bg-gold-500"></div>
                  <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.6em]">Chapter 04: Revenue Alpha</span>
               </div>
               <h2 className="text-slate-950 font-serif text-5xl md:text-7xl leading-[0.8] tracking-tighter italic">
                 Monumental <br/><span className="gold-gradient-text not-italic font-black">Volumes.</span>
               </h2>
               <p className="text-slate-500 text-xl font-light leading-relaxed border-l-2 border-gold-400 pl-10 max-w-xl italic">
                 Architecture as a market barrier. Our 15,000 sq ft core provides a regional monopoly for mega-scale events.
               </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
               {[
                 { icon: Star, title: "Ritual Engine", desc: "Non-seasonal operational floor independent of leisure cycles." },
                 { icon: Camera, title: "Vista Logic", desc: "Cinematic frame-points designed for high-end ceremonial media." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-8 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm">
                       <item.icon size={20} />
                    </div>
                    <div>
                       <h4 className="text-slate-950 font-serif text-2xl italic mb-1 group-hover:text-gold-600 transition-colors leading-none">{item.title}</h4>
                       <p className="text-slate-400 text-xs font-light leading-relaxed italic">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="pt-6">
              <Link to="/events" className="inline-flex items-center gap-8 bg-slate-950 text-white px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 transition-all shadow-3xl group">
                  Masterplan Audit <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventsWeddings;