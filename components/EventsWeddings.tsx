import React from 'react';
import { Layers, Users, Music, Utensils, ArrowRight, Zap, Target, Star, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsWeddings: React.FC = () => {
  return (
    <section id="events" className="py-64 bg-[#FDFBF7] border-y border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-32 items-center">
          
          <div className="lg:w-1/2 order-2 lg:order-1">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Layers, label: "Grand Ballroom", sub: "15k Sq. Ft.", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80" },
                  { icon: Users, label: "Banquet Halls", sub: "3k Pax Cap.", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" },
                  { icon: Music, label: "Ceremonial Decks", sub: "Lvl 4 Terrace", img: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80" },
                  { icon: Utensils, label: "Banquet Core", sub: "High-Volume", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" },
                ].map((item, i) => (
                  <div key={i} className="group relative aspect-square overflow-hidden rounded-[4rem] border border-slate-100 shadow-xl transition-all duration-700 hover:shadow-3xl bg-white">
                    <img src={item.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110 brightness-[1.05]" alt={item.label} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 transition-opacity"></div>
                    
                    <div className="absolute inset-0 p-10 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-gold-600 mb-6 shadow-xl group-hover:bg-gold-500 group-hover:text-white transition-all">
                          <item.icon size={24} />
                       </div>
                       <span className="text-white text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</span>
                       <span className="text-white/60 text-[8px] font-black uppercase tracking-widest italic">{item.sub}</span>
                    </div>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2 space-y-16">
            <div className="space-y-10">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-[1px] bg-gold-500"></div>
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.6em]">Chapter 04: Revenue Alpha</span>
               </div>
               
               <h2 className="text-slate-950 font-serif text-6xl md:text-8xl leading-[0.8] tracking-tighter italic">
                 Monumental <br/><span className="gold-gradient-text not-italic font-black">Volumes.</span>
               </h2>
               
               <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-xl italic">
                 "Architecture as a market barrier. Our 15,000 sq ft core provides a regional monopoly for mega-scale events."
               </p>
            </div>

            <div className="grid grid-cols-1 gap-12">
               {[
                 { icon: Star, title: "Ritual Engine", desc: "Non-seasonal operational floor independent of leisure cycles." },
                 { icon: Camera, title: "Vista Logic", desc: "Cinematic frame-points designed for high-end ceremonial media." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-10 items-start group">
                    <div className="w-16 h-16 rounded-3xl bg-white border border-slate-200 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm">
                       <item.icon size={28} />
                    </div>
                    <div>
                       <h4 className="text-slate-950 font-serif text-3xl italic mb-2 group-hover:text-gold-600 transition-colors leading-none">{item.title}</h4>
                       <p className="text-slate-400 text-base font-light leading-relaxed italic">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="pt-10">
              <Link to="/events" className="inline-flex items-center gap-10 bg-slate-950 text-white px-16 py-7 rounded-full text-[11px] font-black uppercase tracking-[0.5em] hover:bg-gold-500 transition-all shadow-3xl group">
                  Access Masterplan <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventsWeddings;