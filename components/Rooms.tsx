import React, { useEffect, useRef } from 'react';
import { Wifi, Coffee, Monitor, Wind, Droplets, Eye, Utensils, Crown, Armchair, UserCheck, ArrowRight, Maximize2 } from 'lucide-react';
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
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-20');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.room-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="rooms" ref={sectionRef} className="py-32 bg-luxury-black text-white relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-luxury-charcoal/50 to-transparent pointer-events-none"></div>
       <div className="absolute -left-20 top-40 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 opacity-0 translate-y-10 transition-all duration-1000 ease-out room-card">
            <div>
                <span className="text-gold-400 tracking-[0.2em] uppercase text-xs font-bold flex items-center gap-2 mb-4">
                    <span className="w-8 h-px bg-gold-500"></span> Accommodation
                </span>
                <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight">
                    Stay in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Splendour</span>
                </h2>
            </div>
            <div className="max-w-md mt-6 md:mt-0 text-slate-400 font-light leading-relaxed text-right md:text-left">
                Sanctuaries of calm designed with regional restraint and modern luxury. Every room is a viewpoint to the divine.
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map((room, index) => (
            <div 
                key={room.id} 
                className="room-card group cursor-pointer relative flex flex-col h-[600px] w-full bg-transparent transition-all duration-1000 ease-out opacity-0 translate-y-20"
                style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="absolute inset-0 rounded-sm overflow-hidden z-0">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500 z-10"></div>
                 <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
              </div>

              {/* Content Layer */}
              <div className="relative z-20 flex flex-col justify-between h-full p-8 border border-white/10 group-hover:border-gold-500/30 transition-colors rounded-sm bg-gradient-to-b from-transparent to-black/80">
                  
                  {/* Top Bar */}
                  <div className="flex justify-between items-start opacity-70 group-hover:opacity-100 transition-opacity">
                      <div className="bg-black/50 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-white border border-white/10 rounded">
                         {room.size}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-black transition-all">
                         <Maximize2 size={14} />
                      </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-serif text-3xl text-white mb-2 group-hover:text-gold-300 transition-colors">{room.name}</h3>
                      
                      <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                          <p className="text-slate-300 text-sm mb-6 leading-relaxed font-light border-l border-gold-500 pl-4 my-4">
                            {room.description}
                          </p>
                          
                          <div className="space-y-3 mb-6">
                            {room.amenities.map((amenity, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-xs text-slate-300 uppercase tracking-wider">
                                    <span className="text-gold-400">{getAmenityIcon(amenity)}</span>
                                    {amenity}
                                </div>
                            ))}
                          </div>
                      </div>

                      <div className="flex items-end justify-between border-t border-white/20 pt-6 mt-2">
                          <div>
                              <span className="block text-[10px] uppercase text-slate-500 tracking-widest mb-1">Starting From</span>
                              <span className="font-serif text-2xl text-white">{room.price}</span>
                          </div>
                          <button className="text-xs font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2 group/btn">
                              Book Now <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform text-gold-500" />
                          </button>
                      </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 flex justify-center opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-500 room-card">
            <button className="group px-8 py-4 bg-transparent border border-white/20 text-slate-300 hover:border-gold-500 hover:text-white transition-all duration-300 uppercase text-xs font-bold tracking-[0.2em] flex items-center gap-3">
                View Presidential Suites
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;