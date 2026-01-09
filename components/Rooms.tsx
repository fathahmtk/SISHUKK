import React from 'react';
import { Wifi, Coffee, Eye, Crown, UserCheck, ArrowRight, Maximize2, Wind, Droplets, FileText, ChevronRight, Layers } from 'lucide-react';
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
    <section id="rooms" className="py-64 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Background Architectural Watermark */}
      <div className="absolute top-[10%] right-[-5%] text-slate-50 font-serif text-[40rem] font-black pointer-events-none select-none italic leading-none opacity-40">R</div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-16">
            <div className="max-w-4xl">
                <span className="text-gold-600 tracking-[0.8em] uppercase text-[10px] font-black flex items-center gap-6 mb-10">
                    <Layers size={16} /> Chapter 07: Facility Inventory
                </span>
                <h2 className="font-serif text-6xl md:text-9xl text-slate-950 leading-[0.8] tracking-tighter italic">
                    Residential <br/><span className="gold-gradient-text italic font-black">Catalogue.</span>
                </h2>
            </div>
            <p className="text-slate-500 text-2xl font-light leading-relaxed max-w-sm md:mt-0 border-l-2 border-gold-400 pl-12 italic">
                A technical breakdown of our 420 luxury units, optimized for acoustic silence and thermal efficiency.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {rooms.map((room) => (
            <div 
                key={room.id} 
                className="group relative flex flex-col h-[750px] w-full bg-[#FDFBF7] overflow-hidden rounded-[4rem] border border-slate-200 hover:border-gold-400 transition-all duration-1000 shadow-xl hover:shadow-3xl"
            >
              <div className="absolute inset-0 z-0">
                 <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-110 brightness-[1.05] contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-40 transition-opacity"></div>
              </div>

              <div className="relative z-10 flex flex-col justify-between h-full p-12">
                  <div className="flex justify-between items-start">
                      <div className="bg-white/90 backdrop-blur-xl border border-gold-200 px-6 py-3 rounded-full shadow-lg">
                         <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.4em]">{room.size} Unit</span>
                      </div>
                      <button className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-white transition-all shadow-xl active:scale-90">
                         <Maximize2 size={24} />
                      </button>
                  </div>

                  <div className="space-y-8 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-1000">
                      <div className="bg-white/95 backdrop-blur-3xl p-12 rounded-[3.5rem] border border-white shadow-2xl">
                        <h3 className="font-serif text-4xl text-slate-950 mb-6 group-hover:text-gold-600 transition-colors italic leading-tight">{room.name}</h3>
                        <p className="text-slate-500 text-base leading-relaxed font-light mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                          {room.description}
                        </p>
                        
                        <div className="grid grid-cols-1 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200">
                          {room.amenities.map((amenity, idx) => (
                              <div key={idx} className="flex items-center gap-4 text-[9px] text-slate-400 uppercase tracking-widest font-black border-b border-slate-50 pb-3">
                                  <div className="text-gold-600">{getAmenityIcon(amenity)}</div>
                                  <span>{amenity}</span>
                              </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-100 pt-10">
                          <div className="flex flex-col">
                              <span className="text-[8px] uppercase text-slate-400 tracking-[0.6em] font-black mb-1">Status</span>
                              <span className="font-serif text-2xl text-slate-950 italic">Asset Type-A</span>
                          </div>
                          <button 
                            onClick={onInquiryClick}
                            className="bg-slate-950 hover:bg-gold-500 text-white px-12 py-6 rounded-full text-[11px] font-black uppercase tracking-[0.5em] transition-all flex items-center gap-6 active:scale-95 shadow-2xl group/btn"
                          >
                              Inquiry <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
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