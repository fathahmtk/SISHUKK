import React from 'react';
import { Wifi, Coffee, Monitor, Wind } from 'lucide-react';
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

const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-24 bg-white text-luxury-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-600 tracking-[0.2em] uppercase text-xs font-bold">Accommodation</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-6">Stay in Splendour</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-light text-lg">
            Sanctuaries of calm designed with regional restraint and modern luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="group cursor-pointer">
              <div className="overflow-hidden relative aspect-[4/3] mb-6">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 bg-white px-6 py-3">
                    <span className="font-serif text-xl">{room.price}</span> <span className="text-xs uppercase text-slate-500">/ Night</span>
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-serif text-2xl group-hover:text-gold-600 transition-colors">{room.name}</h3>
                    <span className="text-xs text-slate-400 font-mono">{room.size}</span>
                </div>
                <p className="text-slate-600 font-light text-sm mb-6 leading-relaxed line-clamp-2">
                  {room.description}
                </p>
                
                <div className="flex gap-4 text-slate-400 mb-6">
                   <Wifi size={18} />
                   <Wind size={18} />
                   <Coffee size={18} />
                   <Monitor size={18} />
                </div>

                <button className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-slate-500 italic font-serif mb-4">Looking for something more exclusive?</p>
            <button className="bg-luxury-black text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-gold-600 transition-colors">
                View Presidential Suites
            </button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;