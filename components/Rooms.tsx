
import React from 'react';
import { Wifi, Coffee, Eye, Crown, UserCheck, ArrowRight, Maximize2, Wind, Droplets, FileText } from 'lucide-react';
import { Room } from '../types';

interface RoomsProps {
  onInquiryClick?: () => void;
}

const rooms: Room[] = [
  {
    id: 'deluxe',
    name: 'Metropolitan Deluxe',
    description: 'A masterclass in restraint. Neutral palettes meet high-performance glass, offering a silent sanctuary above the bustling temple city.',
    price: '',
    size: '450 Sq. Ft.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80',
    amenities: ['High-Speed Wi-Fi', 'Smart Climate Control', 'Rain Shower']
  },
  {
    id: 'premium',
    name: 'Sanctuary Premium',
    description: 'Positioned on the highest floors of the North Tower, these rooms feature direct unobstructed vistas of the eternal Guruvayur skyline.',
    price: '',
    size: '500 Sq. Ft.',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80',
    amenities: ['Temple View', 'Nespresso Machine', 'Butler Service']
  },
  {
    id: 'suite',
    name: 'The Sirshukk Suite',
    description: 'Our flagship residence. A dual-aspect configuration with a private library, a grand soaking tub, and priority access to the Sky Bridge.',
    price: '',
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
  if (text.includes('club')) return <Crown size={14} />;
  return <ArrowRight size={14} />;
};

const Rooms: React.FC<RoomsProps> = ({ onInquiryClick }) => {
  return (
    <section id="rooms" className="py-32 bg-onyx-950 text-white relative overflow-hidden border-b border-white/5">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-900/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="max-w-2xl">
                <span className="text-gold-500 tracking-[0.6em] uppercase text-[10px] font-black flex items-center gap-4 mb-6">
                    <span className="w-12 h-px bg-gold-500/50"></span> Facility Inventory
                </span>
                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.85] tracking-tighter">
                    Residential <br/><span className="text-gold-400 italic">Specifications.</span>
                </h2>
            </div>
            <p className="text-slate-500 text-lg font-light leading-relaxed max-w-sm mt-8 md:mt-0">
                A technical breakdown of our 200 luxury keys, optimized for thermal comfort and structural silence in a high-demand pilgrimage hub.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
          {rooms.map((room) => (
            <div 
                key={room.id} 
                className="group relative flex flex-col h-[650px] w-full bg-onyx-900 overflow-hidden rounded-[2rem] border border-white/5 hover:border-gold-500/30 transition-all duration-700 shadow-2xl"
            >
              <div className="absolute inset-0 z-0">
                 <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 brightness-[0.6] group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
              </div>

              <div className="relative z-10 flex flex-col justify-between h-full p-10">
                  <div className="flex justify-between items-start">
                      <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full">
                         <span className="text-white text-[9px] font-black uppercase tracking-widest">{room.size}</span>
                      </div>
                      <button className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-gold-500 hover:text-onyx-950 transition-all active:scale-90">
                         <Maximize2 size={18} />
                      </button>
                  </div>

                  <div className="space-y-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                      <div>
                        <h3 className="font-serif text-4xl text-white mb-3 group-hover:text-gold-400 transition-colors">{room.name}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          {room.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        {room.amenities.map((amenity, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-[9px] text-gold-500 uppercase tracking-widest font-black">
                                {getAmenityIcon(amenity)}
                                <span>{amenity}</span>
                            </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between border-t border-white/10 pt-8 mt-4">
                          <div className="flex flex-col">
                              <span className="text-[8px] uppercase text-slate-500 tracking-[0.4em] font-black mb-1">Configuration</span>
                              <span className="font-serif text-xl text-white tracking-tight">Investment Grade</span>
                          </div>
                          <button 
                            onClick={onInquiryClick}
                            className="bg-white/10 hover:bg-gold-500 text-white hover:text-onyx-950 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2 active:scale-95 border border-white/10"
                          >
                              Inquiry <FileText size={14} />
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
