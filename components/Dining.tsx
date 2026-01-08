import React from 'react';
import { Compass, Coffee, Wine, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dining: React.FC = () => {
  const venues = [
    { name: "Rooftop Revolving Restaurant (Tower A)", icon: Compass },
    { name: "Rooftop Revolving Restaurant (Tower B)", icon: Compass },
    { name: "Sky Lounge & Bar", icon: Wine },
    { name: "Fine Dining Restaurant", icon: UtensilsCrossed },
    { name: "All-Day Dining", icon: UtensilsCrossed },
    { name: "Café & Patisserie", icon: Coffee },
  ];

  return (
    <section id="dining" className="py-24 bg-onyx-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Section 05</span>
          <h2 className="text-white font-serif text-4xl md:text-6xl">
            Dining That Attracts Revenue <br/>
            <span className="italic text-slate-500">Beyond Room Guests.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-10 md:p-16">
          <p className="text-slate-300 text-center text-lg leading-relaxed mb-12">
            The rooftop revolving restaurants atop both towers are conceived as destination experiences, not hotel amenities. They are designed to attract non-resident diners, event guests, and premium local clientele.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-12">
            {venues.map((venue, i) => (
              <div key={i} className="flex items-center gap-4 border-b border-white/5 pb-4 last:border-0">
                <venue.icon className="text-gold-500" size={18} />
                <span className="text-white text-sm font-bold uppercase tracking-wider">{venue.name}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
             <Link to="/dining" className="inline-flex items-center gap-4 bg-transparent border border-white/20 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gold-500 hover:text-onyx-950 hover:border-gold-500 transition-all">
                View F&B Concepts <ArrowRight size={14} />
             </Link>
          </div>
          
          <div className="mt-12 text-center pt-8 border-t border-white/10">
             <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Strategic Value: Monetisation independent of room occupancy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;