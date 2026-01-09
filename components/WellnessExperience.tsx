import React from 'react';
import { HeartPulse, ArrowRight, Sparkles, ShieldCheck, Activity, Scan } from 'lucide-react';
import { Link } from 'react-router-dom';

const WellnessExperience: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-slate-950 overflow-hidden group">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-20 saturate-[0.5] transition-transform duration-[20s] group-hover:scale-110" 
            alt="Wellness Sanctuary" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_110%)]"></div>
      </div>

      {/* Telemetry HUD */}
      <div className="absolute top-12 right-12 z-10 text-right space-y-2 opacity-50">
         <div className="flex items-center justify-end gap-3 text-gold-500 font-black text-[9px] uppercase tracking-[0.4em]">
            Wellness_Core_v3.0 <HeartPulse size={12} />
         </div>
         <div className="text-white text-[7px] font-mono opacity-40 uppercase tracking-widest">
            Area: 12,000 Sq Ft // Grade: Clinical
         </div>
      </div>

      <div className="absolute bottom-12 left-12 z-10 space-y-2 opacity-50">
         <div className="text-gold-500 font-black text-[9px] uppercase tracking-[0.4em] mb-2">Therapy Cycle Impact</div>
         <div className="flex items-center gap-3 text-white text-[11px] font-black uppercase tracking-widest">
            <Activity size={14} className="text-emerald-500 animate-pulse" /> ALOS_Multiplier: 2.5x_Target
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl px-8 flex flex-col items-center">
         <span className="text-gold-500 text-[11px] md:text-[13px] font-black uppercase tracking-[1em] block mb-12 animate-fade-in">
           Chapter 06 // Wellness Core
         </span>
         
         <h2 className="text-white font-serif text-6xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter italic font-black mb-16">
           Vedic <br/>
           <span className="gold-gradient-text not-italic">Alchemy.</span>
         </h2>

         <p className="text-slate-200 text-xl md:text-3xl font-light font-editorial italic max-w-4xl leading-relaxed mb-24 opacity-80">
           Reimagined Clinical Luxury. <br className="hidden lg:block"/>
           <span className="text-white font-medium border-b border-gold-500/40 pb-2">Leveraging high-net-worth medical tourism through authentic Panchakarma and Bio-hacking protocols.</span>
         </p>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-20">
            {[
              { l: "Clinic GSF", v: "12,000", s: "Specialized Core" },
              { l: "ALOS Projection", v: "21 Days", s: "Therapy Cycle Avg" },
              { l: "Yield Vector", v: "High", s: "Premium Medical" }
            ].map((stat, i) => (
              <div key={i} className="text-center group/item border-x border-white/5 px-10">
                 <div className="text-slate-500 text-[8px] font-black uppercase tracking-widest mb-4 group-hover/item:text-gold-500 transition-colors">{stat.l}</div>
                 <div className="text-white font-serif text-4xl italic font-black mb-2 leading-none">{stat.v}</div>
                 <div className="text-gold-600 text-[8px] uppercase tracking-widest font-black opacity-60">{stat.s}</div>
              </div>
            ))}
         </div>

         <Link to="/wellness" className="group px-14 py-7 bg-white/5 border border-white/20 text-white rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 hover:text-onyx-950 hover:border-gold-500 transition-all active:scale-95 flex items-center gap-5 backdrop-blur-xl shadow-2xl">
           Explore Wellness <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
         </Link>
      </div>

      {/* Vector HUD circle */}
      <div className="absolute w-[80vh] h-[80vh] border border-white/5 rounded-full pointer-events-none opacity-10"></div>
    </div>
  );
};

export default WellnessExperience;