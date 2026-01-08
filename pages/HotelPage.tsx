
import React from 'react';
import { ArrowLeft, ArrowRight, BedDouble, Wifi, Wind, Coffee, Layout, Sparkles, Maximize, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HotelPage: React.FC = () => {
  const rooms = [
      {
          type: "Metropolitan Deluxe",
          size: "450 Sq. Ft.",
          count: "200 Units",
          tag: "Tower A Portfolio",
          desc: "A sanctuary of restraint. High-performance acoustic glazing ensures silent residency above the city vibrant ritual pace.",
          img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80",
          features: ["Smart Automation", "Triple Glazing", "Italian Marble"]
      },
      {
          type: "Sovereign Bridal Suites",
          size: "950 Sq. Ft.",
          count: "20 Units",
          tag: "The Event Engine",
          desc: "Designed specifically for wedding preparation. Featuring dual-vanity wings, cinematic lighting, and private salon access.",
          img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
          features: ["Dual Entry", "Priority Service", "Panorama View"]
      },
      {
          type: "The Sanctuary Residency",
          size: "500 Sq. Ft.",
          count: "200 Units",
          tag: "Tower B Inventory",
          desc: "Optimized for extended pilgrimage stays and religious medical tourism, featuring integrated wellness controls.",
          img: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80",
          features: ["HEPA Filters", "Nespresso Hub", "Vedic Tech"]
      }
  ];

  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in pb-20">
      <div className="container mx-auto px-6 mb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-10 hover:text-white transition-colors group">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Return to Summary
        </Link>
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="max-w-4xl">
            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Dossier Chapter 03: Inventory Specifications</span>
            <h1 className="text-white font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter mb-8 italic">Curated <br/><span className="gold-gradient-text italic font-black">Residencies.</span></h1>
            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-2xl border-l border-gold-500/30 pl-8">
                A granular breakdown of the 420 luxury keys. Engineered for thermal comfort, acoustic isolation, and high-velocity hospitality operations.
            </p>
          </div>
          <div className="bg-onyx-900 border border-white/10 p-8 rounded-3xl flex items-center gap-6 shadow-2xl">
             <div className="text-right">
                <div className="text-slate-600 text-[9px] font-black uppercase tracking-widest mb-1">Asset Depth</div>
                <div className="text-white font-serif text-4xl font-bold">420</div>
                <div className="text-gold-500 text-[8px] font-black uppercase tracking-widest">Strategic Keys</div>
             </div>
             <div className="w-px h-12 bg-white/10"></div>
             <Layout className="text-gold-500" size={32} />
          </div>
        </div>
      </div>

      {/* Magazine Style Units */}
      <div className="container mx-auto px-6 mb-40">
         <div className="space-y-40">
            {rooms.map((room, i) => (
                <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
                    <div className="lg:w-3/5 relative group rounded-[4rem] overflow-hidden shadow-3xl">
                       <img src={room.img} className="w-full h-[600px] object-cover transition-transform duration-[3s] group-hover:scale-105 brightness-90 group-hover:brightness-100" alt={room.type} />
                       <div className="absolute top-10 left-10">
                          <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full">
                             <span className="text-white text-[10px] font-black uppercase tracking-widest">{room.tag}</span>
                          </div>
                       </div>
                    </div>
                    <div className="lg:w-2/5 space-y-8">
                       <div className="space-y-2">
                          <span className="text-gold-500 text-[9px] font-black uppercase tracking-[0.4em]">{room.size} Configuration</span>
                          <h3 className="text-white font-serif text-5xl leading-tight">{room.type}</h3>
                       </div>
                       <p className="text-slate-400 text-lg leading-relaxed font-light">{room.desc}</p>
                       <div className="grid grid-cols-2 gap-4">
                          {room.features.map((f, j) => (
                             <div key={j} className="flex items-center gap-3 text-[10px] text-slate-500 font-black uppercase tracking-widest bg-white/5 p-3 rounded-xl border border-white/5">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div> {f}
                             </div>
                          ))}
                       </div>
                       <div className="pt-6 border-t border-white/5">
                          <div className="flex justify-between items-center">
                             <div>
                                <div className="text-slate-600 text-[9px] font-black uppercase tracking-widest mb-1">Unit Volume</div>
                                <div className="text-white font-mono text-xl">{room.count}</div>
                             </div>
                             <button className="p-4 rounded-full border border-gold-500/30 text-gold-500 hover:bg-gold-500 hover:text-onyx-950 transition-all">
                                <ArrowRight size={20} />
                             </button>
                          </div>
                       </div>
                    </div>
                </div>
            ))}
         </div>
      </div>

      {/* Next Chapter Anchor */}
      <div className="container mx-auto px-6">
        <Link to="/events" className="group relative block w-full h-[500px] rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl">
           <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-[0.25] transition-transform duration-[4s] group-hover:scale-105" alt="Next Section" />
           <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] mb-8 animate-pulse">Proceed to Next Intelligence</span>
              <h3 className="text-white font-serif text-6xl md:text-8xl italic mb-12">Event <br/><span className="gold-gradient-text font-black tracking-tighter">Masterplan.</span></h3>
              <div className="w-20 h-20 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-700 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                 <ArrowRight size={40} />
              </div>
           </div>
        </Link>
      </div>
    </div>
  );
};

export default HotelPage;
