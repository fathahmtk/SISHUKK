import React from 'react';
import { BedDouble, ArrowRight, ShieldCheck, Activity, Star, Layers, Scan } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheHotel: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-[#05070A] overflow-hidden group">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://cdn-imgix.headout.com/tour/34223/TOUR-IMAGE/95a3df68-963d-4966-980b-2223b2909a37-1647432002221.jpg" 
            className="w-full h-full object-cover opacity-25 saturate-0 transition-transform duration-[20s] group-hover:scale-110" 
            alt="Hotel Atrium" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-transparent to-onyx-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#05070A_110%)]"></div>
      </div>

      {/* Standardized Telemetry HUD */}
      <div className="absolute top-8 left-6 md:top-12 md:left-12 z-10 space-y-3 opacity-40">
         <div className="flex items-center gap-4 text-brass-200 font-black text-[9px] uppercase tracking-[0.5em]">
            <Scan size={14} /> Inventory_Audit_v2.5
         </div>
         <div className="text-white text-[7px] font-mono opacity-50 uppercase tracking-widest hidden sm:block">
            Sector: Inventory // Node: 440_Keys
         </div>
      </div>

      <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-10 text-right opacity-40">
         <div className="text-brass-200 font-black text-[9px] uppercase tracking-[0.5em] mb-3">Hospitality Baseline</div>
         <div className="flex items-center justify-end gap-3 text-white text-[10px] md:text-[11px] font-black uppercase tracking-widest">
            <Star size={16} fill="currentColor" className="text-brass-400" /> Asset_Grade: Trophy
         </div>
      </div>

      {/* Main Content - Centered Alignment */}
      <div className="relative z-10 text-center w-full max-w-7xl px-6 md:px-8 flex flex-col items-center">
         <span className="text-brass-400 text-[11px] md:text-[15px] font-black uppercase tracking-[1.2em] block mb-8 md:mb-16 animate-fade-in">
           Chapter 03 // Inventory Portfolio
         </span>
         
         <h2 className="text-white font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.85] md:leading-[0.8] tracking-tighter italic font-black mb-10 md:mb-16">
           Luxury <br/>
           <span className="gold-gradient-text not-italic">Units.</span>
         </h2>

         <p className="text-slate-300 text-lg md:text-3xl font-light font-editorial italic max-w-4xl leading-relaxed mb-12 md:mb-28 opacity-90 px-4">
           Institutional-grade accommodation. <br className="hidden lg:block"/>
           <span className="text-white font-medium border-b border-brass-400/40 pb-3">A calibrated mix of 440 luxury units designed to serve high-frequency ritual demand.</span>
         </p>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 w-full mb-12 md:mb-24 max-w-5xl">
            {[
              { l: "Tower A Keys", v: "220", s: "Metropolitan Deluxe" },
              { l: "Tower B Keys", v: "200", s: "Sanctuary Residency" },
              { l: "Sovereign Units", v: "20", s: "Presidential Tranche" }
            ].map((stat, i) => (
              <div key={i} className="text-center group/item border-y sm:border-y-0 sm:border-x border-white/5 py-10 transition-all duration-700 hover:bg-white/5 rounded-[2rem]">
                 <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-4 group-hover/item:text-brass-200 transition-colors">{stat.l}</div>
                 <div className="text-white font-serif text-4xl md:text-5xl lg:text-6xl italic font-black mb-2 leading-none">{stat.v}</div>
                 <div className="text-brass-400/60 text-[8px] font-black uppercase tracking-widest">{stat.s}</div>
              </div>
            ))}
         </div>

         <Link to="/hotel" className="group px-12 md:px-20 py-7 md:py-9 bg-white/5 border border-white/10 text-white rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] hover:bg-brass-400 hover:text-onyx-950 transition-all active:scale-95 flex items-center gap-6 backdrop-blur-xl shadow-premium">
           Inventory Specs <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
         </Link>
      </div>

      {/* Axis Marker HUD */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/5 -translate-x-1/2 pointer-events-none hidden md:block"></div>
    </div>
  );
};

export default TheHotel;