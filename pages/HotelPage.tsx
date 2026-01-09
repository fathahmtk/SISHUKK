import React from 'react';
import { ArrowLeft, ArrowRight, BedDouble, Wifi, Wind, Coffee, Layout, Sparkles, Maximize, UserCheck, Key, ShieldCheck, BarChart3, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const HotelPage: React.FC = () => {
  const rooms = [
      {
          type: "Metropolitan Deluxe",
          size: "450 Sq. Ft.",
          count: "200 Units",
          tag: "Tower A Portfolio",
          desc: "A sanctuary of restraint. High-performance acoustic glazing ensures silent residency above the city's vibrant ritual pace. Optimized for high-frequency pilgrim turnover.",
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
    <div className="bg-white min-h-screen pt-32 pb-40 animate-fade-in overflow-hidden">
      {/* Background Decor */}
      <div className="fixed top-0 right-0 w-1/3 h-screen bg-[#FDFBF7] -z-10 pointer-events-none border-l border-slate-100"></div>
      <div className="fixed top-[20%] left-[5%] text-slate-50 font-serif text-[40rem] font-black -z-20 pointer-events-none select-none italic leading-none opacity-60">H</div>

      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-4 text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] mb-16 hover:text-slate-950 transition-all group">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-40">
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-5">
              <div className="w-12 h-[1px] bg-gold-400"></div>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.6em]">Chapter 03: Inventory Specifications</span>
            </div>
            <h1 className="text-slate-950 font-serif text-6xl md:text-[8rem] leading-[0.8] tracking-tighter italic">
              Inventory <br/><span className="gold-gradient-text italic font-black">Audit.</span>
            </h1>
            <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-2xl italic">
                A granular breakdown of the 420 luxury keys. Engineered for thermal comfort, acoustic isolation, and high-velocity hospitality operations.
            </p>
          </div>
          
          <div className="lg:col-span-5 pt-20">
             <div className="bg-white border border-slate-200 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                   <Key size={300} className="text-slate-950" />
                </div>
                <div className="relative z-10">
                   <div className="flex items-center gap-5 mb-10">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-gold-600 shadow-xl group-hover:bg-gold-500 group-hover:text-white transition-all">
                         <BedDouble size={28} />
                      </div>
                      <h4 className="text-slate-950 font-serif text-3xl italic">Unit Portfolio</h4>
                   </div>
                   <div className="text-slate-950 font-serif text-7xl font-black mb-4">420</div>
                   <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] mb-10">Total Asset Inventory</p>
                   <div className="pt-8 border-t border-slate-100 flex items-center justify-between opacity-40">
                      <span className="text-[10px] font-black uppercase tracking-widest">Global Key Count</span>
                      <ShieldCheck size={20} className="text-gold-500" />
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Yield Strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-40 border-y border-slate-100 py-16">
            {[
              { l: "Tower A Mix", v: "200 Keys", s: "Transient Core" },
              { l: "Tower B Mix", v: "220 Keys", s: "Ceremonial Residencies" },
              { l: "Avg Room Size", v: "475 Sq.Ft", s: "Efficiency: 92%" },
              { l: "Target ARR", v: "₹12,000", s: "Audit Verified" }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-3 group-hover:text-gold-600 transition-colors">{stat.l}</div>
                <div className="text-slate-950 font-serif text-5xl mb-2 italic leading-none">{stat.v}</div>
                <div className="text-gold-600 text-[9px] uppercase tracking-widest font-black italic">{stat.s}</div>
              </div>
            ))}
        </div>

        {/* Arranged Inventory Cards */}
        <div className="space-y-48 mb-40">
            {rooms.map((room, i) => (
                <div key={i} className={`grid grid-cols-1 lg:grid-cols-12 gap-24 items-center group/room`}>
                    <div className={`lg:col-span-7 relative h-[700px] rounded-[5rem] overflow-hidden border border-slate-100 shadow-3xl bg-slate-50 ${i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                       <img src={room.img} className="w-full h-full object-cover transition-transform duration-[8s] group-hover/room:scale-105 brightness-[1.05] contrast-[1.02]" alt={room.type} />
                       <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-40 transition-opacity"></div>
                       
                       <div className="absolute top-12 left-12">
                          <div className="bg-white/90 backdrop-blur-xl border border-slate-200 px-8 py-3 rounded-full shadow-2xl">
                             <span className="text-gold-600 text-[10px] font-black uppercase tracking-widest leading-none">{room.tag}</span>
                          </div>
                       </div>
                    </div>
                    
                    <div className={`lg:col-span-5 space-y-12 ${i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                       <div className="space-y-6">
                          <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] block border-b border-slate-100 pb-6 flex items-center justify-between">
                            {room.size} Unit Config <span className="text-gold-500 opacity-40 font-mono text-[9px]">Inventory v2.5</span>
                          </span>
                          <h3 className="text-slate-950 font-serif text-5xl md:text-7xl leading-[0.9] italic group-hover/room:text-gold-600 transition-colors">{room.type}</h3>
                       </div>
                       <p className="text-slate-500 text-xl font-light leading-relaxed italic border-l-2 border-gold-400 pl-10">{room.desc}</p>
                       <div className="grid grid-cols-1 gap-4">
                          {room.features.map((f, j) => (
                             <div key={j} className="flex items-center gap-6 text-[10px] text-slate-400 font-black uppercase tracking-widest bg-[#FDFBF7] p-6 rounded-[2.5rem] border border-slate-100 hover:border-gold-300 transition-all shadow-sm">
                                <ShieldCheck size={18} className="text-gold-500" /> {f}
                             </div>
                          ))}
                       </div>
                       <div className="pt-10 border-t border-slate-100 flex items-center justify-between">
                          <div>
                             <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-2">Portfolio Volume</div>
                             <div className="text-slate-950 font-serif text-4xl font-black italic">{room.count}</div>
                          </div>
                          <button className="w-16 h-16 rounded-full border border-slate-200 text-slate-300 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all flex items-center justify-center active:scale-90 shadow-xl">
                             <ArrowRight size={28} />
                          </button>
                       </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Next Chapter Link */}
        <Link to="/events" className="group relative block w-full h-[650px] rounded-[6rem] overflow-hidden border border-slate-200 shadow-3xl bg-slate-50">
           <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" alt="Next" />
           <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-20 transition-opacity"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <span className="text-gold-600 text-[11px] font-black uppercase tracking-[1em] mb-12 block animate-float">Proceed to Chapter 04</span>
              <h3 className="text-slate-950 font-serif text-7xl md:text-9xl italic mb-20">Event <br/><span className="gold-gradient-text not-italic font-black tracking-tighter">Masterplan.</span></h3>
              <div className="w-32 h-32 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all duration-1000 shadow-3xl">
                 <ArrowRight size={56} className="group-hover:translate-x-4 transition-transform" />
              </div>
           </div>
        </Link>
      </div>
    </div>
  );
};

export default HotelPage;