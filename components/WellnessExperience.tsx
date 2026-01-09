import React from 'react';
import { HeartPulse, ArrowRight, Sparkles, ShieldCheck, Activity, Scan } from 'lucide-react';
import { Link } from 'react-router-dom';

const WellnessExperience: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-[#05070A] overflow-hidden group">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-20 saturate-0 transition-transform duration-[20s] group-hover:scale-110" 
            alt="Wellness Sanctuary" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-transparent to-onyx-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#05070A_110%)]"></div>
      </div>

      {/* Telemetry HUD */}
      <div className="absolute top-12 right-12 z-10 text-right space-y-3 opacity-40">
         <div className="flex items-center justify-end gap-4 text-brass-200 font-black text-[9px] uppercase tracking-[0.5em]">
            Wellness_Core_v3.0 <HeartPulse size={14} />
         </div>
         <div className="text-white text-[7px] font-mono opacity-50 uppercase tracking-widest hidden sm:block">
            Area: 12,000 Sq Ft // Grade: Clinical
         </div>
      </div>

      <div className="absolute bottom-12 left-12 z-10 space-y-3 opacity-40">
         <div className="text-brass-200 font-black text-[9px] uppercase tracking-[0.5em] mb-3">Therapy Cycle Impact</div>
         <div className="flex items-center gap-4 text-white text-[11px] font-black uppercase tracking-widest">
            <Activity size={16} className="text-emerald-500 animate-pulse" /> ALOS_Multiplier: 2.5x_Target
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl px-6 md:px-8 flex flex-col items-center">
         <span className="text-brass-400 text-[11px] md:text-[15px] font-black uppercase tracking-[1.2em] block mb-12 animate-fade-in">
           Chapter 06 // Wellness Core
         </span>
         
         <h2 className="text-white font-serif text-6xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter italic font-black mb-16">
           Vedic <br/>
           <span className="gold-gradient-text not-italic">Alchemy.</span>
         </h2>

         <p className="text-slate-300 text-xl md:text-3xl font-light font-editorial italic max-w-5xl leading-relaxed mb-24 opacity-90">
           Reimagined Clinical Luxury. <br className="hidden lg:block"/>
           <span className="text-white font-medium border-b border-brass-400/40 pb-3">Leveraging high-net-worth medical tourism through authentic Panchakarma and Bio-hacking protocols.</span>
         </p>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-24 max-w-6xl">
            {[
              { l: "Clinic GSF", v: "12,000", s: "Specialized Core" },
              { l: "ALOS Projection", v: "21 Days", s: "Therapy Cycle Avg" },
              { l: "Yield Vector", v: "High", s: "Premium Medical" }
            ].map((stat, i) => (
              <div key={i} className="text-center group/item border-x border-white/5 px-10 py-4 hover:bg-white/5 transition-all duration-700 rounded-3xl">
                 <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-4 group-hover/item:text-brass-200 transition-colors">{stat.l}</div>
                 <div className="text-white font-serif text-4xl lg:text-5xl italic font-black mb-2 leading-none">{stat.v}</div>
                 <div className="text-brass-400/60 text-[8px] uppercase tracking-widest font-black opacity-60">{stat.s}</div>
              </div>
            ))}
         </div>

         <Link to="/wellness" className="group px-12 md:px-20 py-7 md:py-9 bg-white/5 border border-white/10 text-white rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] hover:bg-brass-400 hover:text-onyx-950 transition-all active:scale-95 flex items-center gap-6 backdrop-blur-xl shadow-premium">
           Explore Wellness <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
         </Link>
      </div>

      {/* Vector HUD circle */}
      <div className="absolute w-[80vh] h-[80vh] border border-white/5 rounded-full pointer-events-none opacity-5"></div>
    </div>
  );
};

export default WellnessExperience;