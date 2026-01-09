import React from 'react';
import { Wifi, Coffee, Eye, Crown, UserCheck, ArrowRight, Maximize2, Wind, Droplets, ChevronRight, Layers } from 'lucide-react';
import { Room } from '../types';

interface RoomsProps {
  onInquiryClick?: () => void;
}

const rooms: Room[] = [
  {
    id: 'deluxe',
    name: 'Metro Deluxe',
    description: 'Neutral palettes meet high-performance glass. A silent sanctuary above the temple city. 220 Units available.',
    price: '',
    size: '450 Sq. Ft.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80',
    amenities: ['High-Speed Wi-Fi', 'Smart Climate', 'Rain Shower']
  },
  {
    id: 'premium',
    name: 'Sanctuary Prem',
    description: 'Highest floors of North Tower. Direct unobstructed vistas of the Guruvayur skyline. 200 Units available.',
    price: '',
    size: '500 Sq. Ft.',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80',
    amenities: ['Temple View', 'Nespresso', 'Butler Service']
  },
  {
    id: 'suite',
    name: 'Sirshukk Suite',
    description: 'Dual-aspect config with private library and priority access to the Sky Bridge. 20 Exclusive Units.',
    price: '',
    size: '950 Sq. Ft.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80',
    amenities: ['Separate Living', 'Private Dining', 'Jacuzzi']
  }
];

const getAmenityIcon = (amenity: string) => {
  const text = amenity.toLowerCase();
  if (text.includes('wi-fi')) return <Wifi size={12} />;
  if (text.includes('climate')) return <Wind size={12} />;
  if (text.includes('shower') || text.includes('jacuzzi')) return <Droplets size={12} />;
  if (text.includes('coffee') || text.includes('nespresso')) return <Coffee size={12} />;
  if (text.includes('view')) return <Eye size={12} />;
  if (text.includes('butler')) return <UserCheck size={12} />;
  if (text.includes('club')) return <Crown size={12} />;
  return <ArrowRight size={12} />;
};

const Rooms: React.FC<RoomsProps> = ({ onInquiryClick }) => {
  return (
    <section id="rooms" className="py-12 bg-white relative h-full flex flex-col justify-center border-b border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-2xl">
                <span className="text-gold-600 tracking-[0.6em] uppercase text-[9px] font-black flex items-center gap-4 mb-6">
                    <Layers size={14} /> Chapter 07: Facility Inventory
                </span>
                <h2 className="font-serif text-4xl md:text-7xl text-slate-950 leading-[0.8] tracking-tighter italic">
                    Inventory <br/><span className="gold-gradient-text italic font-black">Catalogue.</span>
                </h2>
            </div>
            <p className="text-slate-500 text-lg font-light leading-tight max-w-xs border-l-2 border-gold-400 pl-8 italic">
                Technical breakdown of 440 luxury units, optimized for acoustic silence and 24.2% yield.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[60vh]">
          {rooms.map((room) => (
            <div 
                key={room.id} 
                className="group relative flex flex-col w-full bg-slate-50 overflow-hidden rounded-[3rem] border border-slate-200 transition-all duration-700 shadow-lg hover:shadow-2xl"
            >
              <div className="absolute inset-0 z-0">
                 <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-105 brightness-[1.1]" />
                 <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
              </div>

              <div className="relative z-10 flex flex-col justify-between h-full p-8">
                  <div className="flex justify-between items-start">
                      <div className="bg-white/90 backdrop-blur-md border border-gold-200 px-4 py-2 rounded-full shadow-md">
                         <span className="text-gold-600 text-[8px] font-black uppercase tracking-widest">{room.size}</span>
                      </div>
                      <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-white transition-all">
                         <Maximize2 size={16} />
                      </button>
                  </div>

                  <div className="space-y-6">
                      <div className="bg-white/95 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white shadow-xl">
                        <h3 className="font-serif text-2xl text-slate-950 mb-3 group-hover:text-gold-600 transition-colors italic leading-none">{room.name}</h3>
                        <p className="text-slate-500 text-xs leading-relaxed font-light mb-6">
                          {room.description}
                        </p>
                        <div className="grid grid-cols-1 gap-2">
                          {room.amenities.map((amenity, idx) => (
                              <div key={idx} className="flex items-center gap-3 text-[8px] text-slate-400 uppercase tracking-widest font-black">
                                  <div className="text-gold-600">{getAmenityIcon(amenity)}</div>
                                  <span>{amenity}</span>
                              </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                          <span className="font-serif text-xl text-slate-950 italic">Asset Type-A</span>
                          <button 
                            onClick={onInquiryClick}
                            className="bg-slate-950 hover:bg-gold-500 text-white px-6 py-3 rounded-full text-[9px] font-black uppercase tracking-widest transition-all flex items-center gap-3"
                          >
                              Inquiry <ChevronRight size={14} />
                          </button>
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

export default Rooms;