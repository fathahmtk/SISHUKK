import React from 'react';
import { HeartPulse, ArrowRight, Sparkles, ShieldCheck, Activity, Scan, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const WellnessExperience: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-[#05070A] overflow-hidden group">
      
      {/* Background Layer: Serene Wellness Render */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-25 saturate-0 grayscale transition-transform duration-[20s] group-hover:scale-105" 
            alt="Wellness Interior" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-transparent to-onyx-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#05070A_120%)]"></div>
      </div>

      {/* Report Telemetry HUD */}
      <div className="absolute top-10 right-8 md:top-14 md:right-14 z-30 text-right opacity-40">
         <div className="flex items-center justify-end gap-5 text-brass-200 font-black text-[10px] uppercase tracking-[0.5em]">
            Clinical_Wellness_Node <Heart size={18} />
         </div>
         <div className="text-white text-[8px] font-mono opacity-50 uppercase tracking-widest mt-2">
            Area: 12,000 Sq Ft // Type: Vedic_Alchemy
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-7xl px-8 flex flex-col items-center">
         <span className="text-brass-400 text-[11px] md:text-[14px] font-black uppercase tracking-[1.2em] block mb-10 md:mb-20">
           Section 10 // Serenity Evidence
         </span>
         
         <h2 className="text-white font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.85] md:leading-[0.8] tracking-tighter italic font-black mb-14 md:mb-28">
           Vedic <br/>
           <span className="gold-gradient-text not-italic">Alchemy.</span>
         </h2>

         <p className="text-slate-300 text-lg md:text-3xl font-light font-editorial italic max-w-4xl leading-relaxed mb-16 md:mb-32 opacity-90 px-4">
           Reimagined Clinical Luxury. <br className="hidden lg:block"/>
           <span className="text-white font-medium border-b border-brass-400/40 pb-4">Capturing high-net-worth medical tourism through physician-led Panchakarma and bio-hacking protocols.</span>
         </p>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-20 w-full mb-16 md:mb-32 max-w-6xl">
            {[
              { l: "Therapy Cycle", v: "21 Days", s: "ALOS Multiplier" },
              { l: "Clinic Grade", v: "Clinical", s: "Verified Facility" },
              { l: "Revenue Class", v: "USP Alpha", s: "Loyalty Engine" }
            ].map((stat, i) => (
              <div key={i} className="text-center group/item border-y sm:border-y-0 sm:border-x border-white/5 py-12 transition-all duration-700 hover:bg-white/5 rounded-[2.5rem]">
                 <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-5 group-hover/item:text-brass-200 transition-colors">{stat.l}</div>
                 <div className="text-white font-serif text-5xl md:text-6xl italic font-black mb-3 leading-none">{stat.v}</div>
                 <div className="text-brass-400/60 text-[9px] uppercase tracking-widest font-black opacity-60">{stat.s}</div>
              </div>
            ))}
         </div>

         <Link to="/wellness" className="group px-14 md:px-24 py-8 md:py-10 bg-white/5 border border-white/10 text-white rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] hover:bg-brass-400 hover:text-onyx-950 transition-all active:scale-95 flex items-center gap-8 backdrop-blur-xl shadow-premium">
           View Wellness Dossier <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform duration-500" />
         </Link>
      </div>

      {/* Perspective Alignment Lines */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-white/5 pointer-events-none"></div>
      <div className="absolute inset-y-0 left-1/2 w-px bg-white/5 pointer-events-none"></div>
    </div>
  );
};

export default WellnessExperience;