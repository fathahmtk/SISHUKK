import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, BedDouble, Key, ShieldCheck, Sparkles, Utensils, Music, ChevronRight, Star, Home, HeartPulse, Clock, Shield, Thermometer, AirVent, Ruler, Activity, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HotelPage: React.FC = () => {
  const [isLogisticsMode, setIsLogisticsMode] = useState(false);

  const rooms = [
      {
          type: "Metropolitan Deluxe",
          size: "450 Sq. Ft.",
          count: "200 Units",
          tag: "Tower A Portfolio",
          desc: "Engineered for the high-velocity transient guest. Strategically positioned for immediate temple access, featuring smart-tech automation and acoustic isolation.",
          img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80",
          features: ["Smart Automation", "Triple Glazing", "Italian Marble"]
      },
      {
          type: "Sovereign Bridal Suites",
          size: "950 Sq. Ft.",
          count: "20 Units",
          tag: "The Event Engine",
          desc: "Designed specifically for wedding preparation. Featuring dual-vanity wings, cinematic lighting, and private salon access.",
          img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80",
          features: ["Dual Entry", "Priority Service", "Panorama View"]
      },
      {
          type: "The Sanctuary Residency",
          size: "500 Sq. Ft.",
          count: "200 Units",
          tag: "Tower B Inventory",
          desc: "Optimized for extended pilgrimage stays and religious medical tourism, featuring integrated wellness controls.",
          img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80",
          features: ["HEPA Filters", "Nespresso Hub", "Vedic Tech"]
      }
  ];

  return (
    <div className="bg-slate-950 min-h-screen animate-fade-in overflow-hidden font-sans text-white">
      
      {/* Hero Section with Interactive Atrium Scan */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
         <img 
            src="https://cdn-imgix.headout.com/tour/34223/TOUR-IMAGE/95a3df68-963d-4966-980b-2223b2909a37-1647432002221.jpg" 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[3s] ${isLogisticsMode ? 'brightness-[0.3] blur-[2px]' : 'brightness-70'}`}
            alt="Hotel Atrium"
         />
         
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

         {/* Logistics HUD */}
         {isLogisticsMode && (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="w-full h-full relative">
                    {/* Pulsing Balcony Indicators */}
                    <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[80vw] h-[2px] bg-gold-500/20 shadow-[0_0_20px_#D4AF37]"></div>
                    <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[85vw] h-[2px] bg-gold-500/20 shadow-[0_0_20px_#D4AF37]"></div>
                    <div className="absolute top-[70%] left-1/2 -translate-x-1/2 w-[90vw] h-[2px] bg-gold-500/20 shadow-[0_0_20px_#D4AF37]"></div>
                    
                    {/* Central Lift Shaft Path */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gold-500/30 -translate-x-1/2">
                        <div className="w-4 h-4 bg-gold-500 rounded-full absolute -left-[7.5px] animate-[bounce_4s_infinite]"></div>
                    </div>

                    {/* Data Points */}
                    <div className="absolute top-1/4 left-20 space-y-6">
                        <div className="bg-black/60 border border-white/10 p-6 rounded-2xl backdrop-blur-xl animate-reveal-left">
                            <div className="text-[8px] font-black text-gold-500 uppercase tracking-widest mb-1">Acoustic Logic</div>
                            <div className="text-xl font-serif italic text-white">-35dB Dampening</div>
                        </div>
                        <div className="bg-black/60 border border-white/10 p-6 rounded-2xl backdrop-blur-xl animate-reveal-left [animation-delay:0.5s]">
                            <div className="text-[8px] font-black text-gold-500 uppercase tracking-widest mb-1">Vertical Cores</div>
                            <div className="text-xl font-serif italic text-white">Mitsubishi High-V</div>
                        </div>
                    </div>
                </div>
            </div>
         )}
         
         <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-end pb-32">
            <div className="flex justify-between items-end">
                <div className="max-w-4xl">
                   <Link to="/" className="inline-flex items-center gap-4 text-white/60 hover:text-gold-400 text-[10px] font-black uppercase tracking-[0.5em] mb-12 transition-all group w-fit backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                       <ArrowLeft size={14} /> Return to Summary
                   </Link>
                   <div className="flex items-center gap-6 mb-8 animate-fade-in-up">
                      <div className="w-16 h-[2px] bg-gold-500"></div>
                      <span className="text-gold-400 text-[11px] font-black uppercase tracking-[0.6em]">Chapter 03: Inventory Audit</span>
                   </div>
                   <h1 className="font-serif text-6xl md:text-[8rem] lg:text-[8rem] leading-[0.85] tracking-tight mb-8 text-white drop-shadow-2xl">
                      Inventory <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-200 font-bold italic">Catalogue.</span>
                   </h1>
                </div>

                <div className="pb-10">
                    <button 
                        onClick={() => setIsLogisticsMode(!isLogisticsMode)}
                        className={`px-10 py-5 rounded-full border text-[10px] font-black uppercase tracking-[0.4em] transition-all flex items-center gap-4 ${isLogisticsMode ? 'bg-gold-500 text-onyx-950 border-gold-500 shadow-gold-glow' : 'bg-white/5 text-white border-white/20 hover:bg-white/10'}`}
                    >
                        {isLogisticsMode ? <Activity size={16} className="animate-pulse" /> : <Users size={16} />}
                        {isLogisticsMode ? 'Analyzing Circulation' : 'View Logistics Scan'}
                    </button>
                </div>
            </div>
         </div>
      </div>

      {/* Stats Panel */}
      <div className="relative z-20 -mt-24 container mx-auto px-6 mb-32">
        <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { l: "Tower A Mix", v: "200 Keys", s: "Transient Core" },
              { l: "Tower B Mix", v: "220 Keys", s: "Ceremonial Residencies" },
              { l: "Efficiency", v: "92%", s: "BIM Grade A" },
              { l: "Target ARR", v: "₹12,000", s: "Audit Verified" }
            ].map((stat, i) => (
              <div key={i} className="group md:border-r border-white/5 last:border-0 md:pr-8">
                <div className="text-slate-400 text-[9px] font-black uppercase tracking-[0.3em] mb-3 group-hover:text-gold-500 transition-colors">{stat.l}</div>
                <div className="text-white font-serif text-4xl lg:text-5xl mb-2 font-bold tracking-tight">{stat.v}</div>
                <div className="text-gold-600 text-[9px] uppercase tracking-widest font-bold">{stat.s}</div>
              </div>
            ))}
        </div>
      </div>

      {/* Inventory Breakdown */}
      <div className="container mx-auto px-6 mb-40">
         {rooms.map((room, i) => (
            <div key={i} className="relative min-h-[80vh] w-full flex items-center border-t border-white/5 overflow-hidden group py-20">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="relative h-[600px] rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl">
                     <img src={room.img} className="w-full h-full object-cover opacity-60 transition-transform duration-[10s] group-hover:scale-110" alt={room.type} />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  </div>
                  
                  <div className="space-y-10">
                     <span className="inline-block px-6 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-[10px] font-black uppercase tracking-[0.4em]">
                        {room.tag}
                     </span>
                     <h2 className="font-serif text-5xl md:text-7xl text-white leading-[0.9] tracking-tight italic">
                        {room.type}
                     </h2>
                     <p className="text-lg text-slate-300 font-light leading-relaxed border-l-2 border-gold-500/50 pl-8 italic">
                        {room.desc}
                     </p>
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {room.features.map((f, j) => (
                           <div key={j} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                              <ShieldCheck size={16} className="text-gold-500" />
                              <span className="text-[10px] font-bold text-white uppercase tracking-widest">{f}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>

      {/* Link to Next Chapter */}
      <Link to="/events" className="group relative block w-full h-[600px] overflow-hidden">
         <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Next" />
         <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
         <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-gold-400 text-[10px] font-black uppercase tracking-[0.8em] mb-12 animate-float">Proceed to Chapter 04</span>
            <h2 className="font-serif text-5xl md:text-8xl text-white leading-[0.8] mb-12">
               Event <br/><span className="italic text-gold-500 font-bold">Masterplan.</span>
            </h2>
            <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:text-black transition-all shadow-3xl">
               <ArrowRight size={32} />
            </div>
         </div>
      </Link>

    </div>
  );
};

export default HotelPage;