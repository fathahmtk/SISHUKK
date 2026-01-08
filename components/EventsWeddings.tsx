import React from 'react';
import { Layers, Users, Music, Utensils, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsWeddings: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-onyx-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Layers, label: "Grand pillar-less ballroom" },
                  { icon: Users, label: "Multiple parallel banquet halls" },
                  { icon: Music, label: "Outdoor ceremonial decks" },
                  { icon: Utensils, label: "Dedicated banquet kitchens" },
                ].map((item, i) => (
                  <div key={i} className="aspect-[4/3] bg-onyx-950 border border-white/10 p-6 flex flex-col justify-center items-center text-center group hover:border-gold-500/30 transition-colors">
                    <item.icon className="text-gold-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
                    <span className="text-white text-xs font-bold uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-6">Section 04</span>
            <h2 className="text-white font-serif text-4xl md:text-5xl mb-8 leading-tight">
              The Core Revenue Engine <br/>
              <span className="italic text-slate-500">Is Designed In, Not Added Later.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              At SIRSHUKK GRAND TOWERS, weddings and events are the primary product, not a secondary revenue stream.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              The entire hotel is engineered to support simultaneous large-scale events without operational stress.
            </p>
            <div className="p-6 border-l-4 border-gold-500 bg-white/5 mb-8">
              <p className="text-white font-serif text-xl italic">
                "Events deliver higher margins, advance bookings, and predictable cash flow."
              </p>
            </div>
            
            <Link to="/events" className="inline-flex items-center gap-4 bg-gold-500 text-onyx-950 px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all">
                Access Event Schematics <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsWeddings;