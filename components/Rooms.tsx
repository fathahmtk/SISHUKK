import React from 'react';
import { Wifi, Coffee, Monitor, Wind, Droplets, Eye, Utensils, Crown, Armchair, UserCheck, ArrowRight } from 'lucide-react';
import { Room } from '../types';

const rooms: Room[] = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    description: 'Contemporary elegance with floor-to-ceiling windows offering panoramic city views.',
    price: '₹12,000',
    size: '450 Sq. Ft.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80',
    amenities: ['High-Speed Wi-Fi', 'Smart Climate Control', 'Rain Shower']
  },
  {
    id: 'premium',
    name: 'Premium View',
    description: 'Elevated floors guaranteeing unobstructed views of the temple skyline and coconut groves.',
    price: '₹15,500',
    size: '500 Sq. Ft.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80',
    amenities: ['Temple View', 'Nespresso Machine', 'Butler Service']
  },
  {
    id: 'suite',
    name: 'Royal Suite',
    description: 'Expansive living area, private dining, and a master bath with a freestanding soaking tub.',
    price: '₹28,000',
    size: '950 Sq. Ft.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80',
    amenities: ['Separate Living', 'Private Dining', 'Jacuzzi', 'Club Access']
  }
];

const getAmenityIcon = (amenity: string) => {
  const text = amenity.toLowerCase();
  if (text.includes('wi-fi')) return <Wifi size={14} />;
  if (text.includes('climate')) return <Wind size={14} />;
  if (text.includes('shower') || text.includes('jacuzzi')) return <Droplets size={14} />;
  if (text.includes('coffee') || text.includes('nespresso')) return <Coffee size={14} />;
  if (text.includes('view')) return <Eye size={14} />;
  if (text.includes('butler')) return <UserCheck size={14} />;
  if (text.includes('dining')) return <Utensils size={14} />;
  if (text.includes('living')) return <Armchair size={14} />;
  if (text.includes('club')) return <Crown size={14} />;
  return <Monitor size={14} />;
};

const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-24 bg-black text-white relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-gold-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-400 tracking-[0.2em] uppercase text-xs font-bold flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-gold-500"></span> Accommodation <span className="w-6 h-px bg-gold-500"></span>
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6 text-white">Stay in Splendour</h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light text-lg">
            Sanctuaries of calm designed with regional restraint and modern luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="group cursor-pointer flex flex-col h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl">
              <div className="overflow-hidden relative aspect-[4/3]">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                     <div className="bg-black/60 backdrop-blur-xl px-4 py-2 border border-white/10 rounded-lg">
                        <span className="font-serif text-xl text-gold-400">{room.price}</span> <span className="text-[10px] uppercase text-slate-300 tracking-wider">/ Night</span>
                    </div>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-baseline mb-4">
                    <h3 className="font-serif text-2xl text-white group-hover:text-gold-400 transition-colors">{room.name}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-white/10 px-2 py-1 rounded">{room.size}</span>
                </div>
                <p className="text-slate-400 font-light text-sm mb-8 leading-relaxed line-clamp-2">
                  {room.description}
                </p>
                
                <div className="mb-8 border-t border-white/5 pt-6 mt-auto">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Inclusions</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {room.amenities.map((amenity, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                        <span className="text-gold-400 p-1.5 bg-gold-500/5 rounded-full border border-gold-500/10 group-hover:border-gold-500/40 transition-colors">{getAmenityIcon(amenity)}</span>
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full text-xs font-bold uppercase tracking-[0.2em] border border-white/20 py-4 text-center rounded-lg hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(197,160,40,0.2)]">
                  Reserve Suite <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <p className="text-slate-500 italic font-serif mb-4">Looking for something more exclusive?</p>
            <button className="inline-flex items-center gap-2 bg-transparent border-b border-gold-500 text-gold-400 pb-1 uppercase tracking-widest text-xs font-bold hover:text-white hover:border-white transition-all">
                View Presidential Suites <ArrowRight size={14} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;