import React from 'react';
import { Target, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheMarket: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-[#05070A] overflow-hidden group">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-20 saturate-[0.1] transition-transform duration-[20s] group-hover:scale-110" 
            alt="Pilgrimage Market" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-transparent to-onyx-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#05070A_120%)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-7xl px-6 md:px-8 flex flex-col items-center py-12 md:py-0">
         <span className="text-brass-400 text-[11px] md:text-[15px] font-black uppercase tracking-[0.8em] md:tracking-[1.2em] block mb-8 md:mb-16">
           Chapter 02 // The Ritual Economy
         </span>
         
         <h2 className="text-white font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.9] md:leading-[0.8] tracking-tighter italic font-black mb-12 md:mb-24">
           Ritual <br/>
           <span className="gold-gradient-text not-italic">Engine.</span>
         </h2>

         <p className="text-slate-300 text-lg md:text-3xl font-light font-editorial italic max-w-4xl leading-relaxed mb-12 md:mb-28 opacity-80 px-4">
           Demand is faith-driven and non-cyclical. <br className="hidden lg:block"/>
           <span className="text-white font-medium border-b border-brass-400/40 pb-3">Guruvayur represents an inelastic capital engine with 100% first-mover status.</span>
         </p>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 w-full mb-16 md:mb-32 max-w-6xl">
            {[
              { l: "Annual Traffic", v: "12 Million", s: "HNW Segment Focus" },
              { l: "Daily Events", v: "250+", s: "Captive Wedding Base" },
              { l: "Branded Supply", v: "0.0%", s: "Within 10km Radius" }
            ].map((stat, i) => (
              <div key={i} className="text-center group/item border-y sm:border-y-0 sm:border-x border-white/5 py-10 transition-all duration-700 hover:bg-white/5 rounded-[2rem]">
                 <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-4 group-hover/item:text-brass-200 transition-colors">{stat.l}</div>
                 <div className="text-white font-serif text-3xl md:text-5xl italic font-black mb-2 leading-none">{stat.v}</div>
                 <div className="text-brass-400/60 text-[8px] font-black uppercase tracking-widest font-black">{stat.s}</div>
              </div>
            ))}
         </div>

         <Link to="/market" className="group px-12 md:px-20 py-7 md:py-9 bg-white/5 border border-white/10 text-white rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] hover:bg-brass-400 hover:text-onyx-950 transition-all active:scale-95 flex items-center gap-6 backdrop-blur-xl shadow-premium">
           Market Analysis <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
         </Link>
      </div>

      {/* Decorative Frame */}
      <div className="absolute inset-12 md:inset-24 pointer-events-none border border-white/5 opacity-20 hidden sm:block"></div>
    </div>
  );
};

export default TheMarket;