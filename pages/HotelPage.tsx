import React from 'react';
import { ArrowLeft, ArrowRight, BedDouble, Wifi, Wind, Coffee, Layout, Sparkles, Maximize, UserCheck, Key, ShieldCheck, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const HotelPage: React.FC = () => {
  const rooms = [
      {
          type: "Metropolitan Deluxe",
          size: "450 Sq. Ft.",
          count: "200 Units",
          tag: "Tower A Portfolio",
          desc: "A sanctuary of restraint. High-performance acoustic glazing ensures silent residency above the city's vibrant ritual pace. Designed for high-frequency pilgrim turnover.",
          img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80",
          features: ["Smart Automation", "Triple Glazing", "Italian Marble"]
      },
      {
          type: "Sovereign Bridal Suites",
          size: "950 Sq. Ft.",
          count: "20 Units",
          tag: "The Event Engine",
          desc: "Designed specifically for wedding preparation. Featuring dual-vanity wings, cinematic lighting, and private salon access to drive wedding package sales.",
          img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80",
          features: ["Dual Entry", "Priority Service", "Panorama View"]
      },
      {
          type: "The Sanctuary Residency",
          size: "500 Sq. Ft.",
          count: "200 Units",
          tag: "Tower B Inventory",
          desc: "Optimized for extended pilgrimage stays and religious medical tourism, featuring integrated wellness controls and dietary pantries.",
          img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80",
          features: ["HEPA Filters", "Nespresso Hub", "Vedic Tech"]
      }
  ];

  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in pb-20">
      <div className="container mx-auto px-6 mb-16">
        <Link to="/" className="inline-flex items-center gap-3 text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-12 hover:text-white transition-all group">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
        </Link>
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-slate-500 text-[10px] font-black uppercase tracking-[0.6em] mb-6">
              <Key size={14} /> Dossier Chapter 03: Inventory Specifications
            </div>
            <h1 className="text-white font-serif text-6xl md:text-9xl leading-[0.8] tracking-tighter mb-10 italic">
              Curated <br/><span className="gold-gradient-text italic font-black">Residencies.</span>
            </h1>
            <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-gold-500/30 pl-10">
                A granular breakdown of the 420 luxury keys. Engineered for thermal comfort, acoustic isolation, and high-velocity hospitality operations.
            </p>
          </div>
          <div className="bg-onyx-900 border border-white/10 p-8 rounded-[2.5rem] hidden lg:block shadow-3xl">
            <div className="flex items-center gap-4 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-3">
              <Layout size={18} /> Asset Depth
            </div>
            <p className="text-slate-400 text-xs font-mono">Total Inventory: <br/><span className="text-white font-serif text-3xl">420 KEYS</span></p>
          </div>
        </div>
      </div>

      {/* Yield Dashboard */}
      <div className="w-full bg-onyx-900 border-y border-white/5 py-16 mb-32 shadow-inner">
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { l: "Tower A Mix", v: "200 Keys", s: "Transient / Pilgrim" },
              { l: "Tower B Mix", v: "220 Keys", s: "Wedding / Long-Stay" },
              { l: "Avg Room Size", v: "475 Sq.Ft", s: "Market Leader" },
              { l: "Target ARR", v: "₹12,000", s: "Conservative Base" }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-slate-600 text-[10px] font-black uppercase tracking-widest mb-2 group-hover:text-gold-500 transition-colors">{stat.l}</div>
                <div className="text-white font-serif text-4xl mb-1">{stat.v}</div>
                <div className="text-slate-700 text-[9px] uppercase tracking-widest font-black italic">{stat.s}</div>
              </div>
            ))}
         </div>
      </div>

      {/* Magazine Style Units */}
      <div className="container mx-auto px-6 mb-40">
         <div className="space-y-40">
            {rooms.map((room, i) => (
                <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center group/room`}>
                    <div className="lg:w-3/5 relative rounded-[4rem] overflow-hidden shadow-3xl border border-white/5">
                       <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-transparent to-transparent opacity-60 z-10"></div>
                       <img src={room.img} className="w-full h-[650px] object-cover transition-transform duration-[3s] group-hover/room:scale-105 brightness-[0.8] group-hover/room:brightness-100" alt={room.type} />
                       <div className="absolute top-10 left-10 z-20">
                          <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full">
                             <span className="text-gold-400 text-[10px] font-black uppercase tracking-widest">{room.tag}</span>
                          </div>
                       </div>
                       <div className="absolute bottom-10 right-10 z-20 opacity-0 group-hover/room:opacity-100 transition-opacity duration-700">
                          <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/20">
                             <Maximize size={24} />
                          </div>
                       </div>
                    </div>
                    
                    <div className="lg:w-2/5 space-y-10">
                       <div className="space-y-4">
                          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] block border-b border-gold-500/20 pb-4">{room.size} Configuration</span>
                          <h3 className="text-white font-serif text-5xl md:text-6xl leading-[0.9] italic">{room.type}</h3>
                       </div>
                       <p className="text-slate-400 text-lg leading-relaxed font-light">{room.desc}</p>
                       <div className="grid grid-cols-1 gap-4">
                          {room.features.map((f, j) => (
                             <div key={j} className="flex items-center gap-4 text-[10px] text-slate-300 font-black uppercase tracking-widest bg-white/[0.03] p-4 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-colors">
                                <ShieldCheck size={14} className="text-gold-500" /> {f}
                             </div>
                          ))}
                       </div>
                       <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                          <div>
                             <div className="text-slate-600 text-[9px] font-black uppercase tracking-widest mb-1">Unit Volume</div>
                             <div className="text-white font-mono text-2xl font-black">{room.count}</div>
                          </div>
                          <button className="px-8 py-4 rounded-full border border-gold-500/30 text-gold-500 hover:bg-gold-500 hover:text-onyx-950 transition-all text-[10px] font-black uppercase tracking-widest">
                             View Floorplate
                          </button>
                       </div>
                    </div>
                </div>
            ))}
         </div>
      </div>

      {/* Next Chapter Anchor */}
      <div className="container mx-auto px-6">
        <Link to="/events" className="group relative block w-full h-[600px] rounded-[5rem] overflow-hidden border border-white/10 shadow-3xl">
           <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-[0.25] transition-transform duration-[6s] group-hover:scale-105" alt="Next Section" />
           <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] mb-10 animate-pulse">Proceed to Chapter 04</span>
              <h3 className="text-white font-serif text-7xl md:text-9xl italic mb-16">Event <br/><span className="gold-gradient-text font-black tracking-tighter">Masterplan.</span></h3>
              <div className="w-24 h-24 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-1000 shadow-[0_0_60px_rgba(212,175,55,0.4)]">
                 <ArrowRight size={48} className="group-hover:translate-x-2 transition-transform" />
              </div>
           </div>
        </Link>
      </div>
    </div>
  );
};

export default HotelPage;