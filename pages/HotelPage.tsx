import React from 'react';
import { ArrowLeft, BedDouble, Wifi, Wind, Coffee, Layout, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HotelPage: React.FC = () => {
  const rooms = [
      {
          type: "Metropolitan Deluxe",
          size: "450 Sq. Ft.",
          count: "120 Units",
          desc: "The baseline standard. Oversized by market standards (avg. local room is 250 sq ft), featuring floor-to-ceiling glass and smart-home integration.",
          img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80"
      },
      {
          type: "Sanctuary Premium",
          size: "500 Sq. Ft.",
          count: "50 Units",
          desc: "Higher floor inventory offering direct views of the Temple Gopuram. Premium amenities include a Nespresso station and soaking tub.",
          img: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80"
      },
      {
          type: "Bridal Suites",
          size: "950 Sq. Ft.",
          count: "20 Units",
          desc: "Designed specifically for wedding preparation. Features a large living area, dressing room with cinematic lighting, and dual vanity bathrooms.",
          img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80"
      },
      {
          type: "Presidential Penthouse",
          size: "2,500 Sq. Ft.",
          count: "2 Units",
          desc: "The crown jewel of each tower. Duplex configuration with private elevator access, dining for 12, and a private terrace.",
          img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80"
      }
  ];

  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-6 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-8 hover:text-white transition-colors">
            <ArrowLeft size={12} /> Return to Summary
        </Link>
        <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Deep Dive: Section 03</span>
        <h1 className="text-white font-serif text-5xl md:text-7xl mb-6">Inventory <span className="text-gold-500 italic">Specifications.</span></h1>
        <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            A granular look at the ~200 keys. We have prioritized room size and acoustic isolation over density, ensuring a true 7-star sleep experience.
        </p>
      </div>

      <div className="container mx-auto px-6 pb-24">
         <div className="grid grid-cols-1 gap-16">
            {rooms.map((room, i) => (
                <div key={i} className="flex flex-col lg:flex-row gap-12 border-b border-white/5 pb-12 last:border-0">
                    <div className="lg:w-1/2 aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-2xl group">
                        <img src={room.img} alt={room.type} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-6 left-6 flex gap-3">
                            <span className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-full text-white text-[9px] font-black uppercase tracking-widest border border-white/10">
                                {room.size}
                            </span>
                            <span className="bg-gold-500 px-4 py-2 rounded-full text-onyx-950 text-[9px] font-black uppercase tracking-widest">
                                {room.count}
                            </span>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <h3 className="text-white font-serif text-4xl mb-6">{room.type}</h3>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
                            {room.desc}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-6">
                             <div className="flex items-center gap-3 text-slate-500 text-xs uppercase tracking-widest font-bold">
                                 <Wifi size={16} className="text-gold-500" /> High-Speed Mesh
                             </div>
                             <div className="flex items-center gap-3 text-slate-500 text-xs uppercase tracking-widest font-bold">
                                 <Wind size={16} className="text-gold-500" /> Hepa Air Filter
                             </div>
                             <div className="flex items-center gap-3 text-slate-500 text-xs uppercase tracking-widest font-bold">
                                 <Coffee size={16} className="text-gold-500" /> In-Room Bar
                             </div>
                             <div className="flex items-center gap-3 text-slate-500 text-xs uppercase tracking-widest font-bold">
                                 <Layout size={16} className="text-gold-500" /> Ergonomic Work
                             </div>
                        </div>
                    </div>
                </div>
            ))}
         </div>

         <div className="mt-16 bg-white/5 border border-white/10 rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-8">
             <div className="p-4 bg-onyx-950 rounded-full text-gold-500 border border-gold-500/30">
                 <Sparkles size={32} />
             </div>
             <div>
                 <h4 className="text-white font-bold text-xl mb-2">The "Bridal Floor" Concept</h4>
                 <p className="text-slate-400 text-sm max-w-2xl">
                     Specific floors in Tower B are designated as "Event Floors." These can be booked in their entirety by wedding parties, creating a private "hotel within a hotel" experience, complete with dedicated elevator access and corridor security.
                 </p>
             </div>
         </div>
      </div>
    </div>
  );
};

export default HotelPage;