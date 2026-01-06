import React from 'react';
import { Building2, Crown, TrendingUp, MapPin } from 'lucide-react';

const Snapshot: React.FC = () => {
  const cards = [
    {
      icon: <Building2 className="w-8 h-8 text-gold-400" />,
      title: "Landmark Asset",
      description: "Twin towers, sky bridge, dual revolving restaurants. Iconic vertical symmetry."
    },
    {
      icon: <Crown className="w-8 h-8 text-gold-400" />,
      title: "Ultra-Luxury",
      description: "Boutique 5-star positioning. Event-led, experience-first, not just a room inventory."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gold-400" />,
      title: "High Yield",
      description: "Structural demand from weddings & pilgrimage. High-margin event revenue."
    },
    {
      icon: <MapPin className="w-8 h-8 text-gold-400" />,
      title: "Market Gap",
      description: "Zero comparable iconic 5-star inventory in a high-footfall micro-market."
    }
  ];

  return (
    <section id="snapshot" className="py-24 bg-luxury-dark relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Executive Snapshot</h2>
          <p className="text-slate-400 text-lg max-w-3xl border-l-2 border-gold-500 pl-6">
            Designed for decision-making. This is a landmark asset, not a vanilla hotel. 
            Capitalizing on structural demand with an event-led revenue model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="mb-6 bg-luxury-black w-16 h-16 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform border border-gold-900">
                {card.icon}
              </div>
              <h3 className="font-serif text-xl text-slate-100 mb-3">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Snapshot;