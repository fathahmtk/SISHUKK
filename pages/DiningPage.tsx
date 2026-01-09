import React from 'react';
import { ArrowLeft, RotateCw, ArrowRight, ShieldCheck, Activity, Compass, Hexagon, Star, Scan } from 'lucide-react';
import { Link } from 'react-router-dom';

const CinematicLevel: React.FC<{ children: React.ReactNode, bg: string, id: string }> = ({ children, bg, id }) => (
  <section id={id} className="h-screen w-full relative snap-start overflow-hidden flex flex-col justify-center bg-slate-950">
    <div className="absolute inset-0 z-0">
      <img src={bg} className="w-full h-full object-cover opacity-20 transition-transform duration-[20s] hover:scale-110" alt="Background" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_110%)]"></div>
    </div>
    <div className="relative z-10 container mx-auto px-8">
      {children}
    </div>
  </section>
);

const DiningPage: React.FC = () => {
  return (
    <div className="h-screen w-full bg-slate-950 overflow-y-scroll snap-y snap-mandatory no-scrollbar scroll-smooth">
      
      {/* Chapter 01: High Altitude Gastronomy */}
      <CinematicLevel id="orbit" bg="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80">
         <div className="max-w-5xl">
            <Link to="/" className="inline-flex items-center gap-4 text-gold-500 text-[10px] font-black uppercase tracking-[0.5em] mb-16 hover:text-white transition-all group">
               <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Dashboard
            </Link>
            <div className="flex items-center gap-6 mb-8">
               <RotateCw size={24} className="text-gold-500 animate-spin-slow" />
               <span className="text-white text-[11px] font-black uppercase tracking-[0.6em]">USP Node // Gastronomy_Peak</span>
            </div>
            <h1 className="text-white font-serif text-7xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter italic font-black mb-16">
               Orbit <br/><span className="gold-gradient-text not-italic">Crowns.</span>
            </h1>
            <p className="text-slate-300 text-2xl md:text-4xl font-light font-editorial italic max-w-4xl leading-relaxed mb-12 opacity-80 border-l-4 border-gold-500/40 pl-10">
               Two independent revolving platforms. German-engineered vibration-free dynamics providing 360-degree spiritual and coastal vistas from Lvl 20.
            </p>
         </div>
      </CinematicLevel>

      {/* Chapter 02: Mechanical Precision */}
      <CinematicLevel id="mechanical" bg="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] block">Technical Datum // Rotation_Matrix</span>
               <h2 className="text-white font-serif text-6xl md:text-8xl leading-[0.9] italic font-black">Zero <br/>Resonance.</h2>
               <div className="grid grid-cols-2 gap-8 pt-10">
                  {[
                    { l: "Cycle Time", v: "60 Min", s: "Constant Sync" },
                    { l: "Altitude", v: "75.0m", s: "Terminal Datum" },
                    { l: "Drive Train", v: "German", s: "Silent Hub" },
                    { l: "Status", v: "Verified", s: "L3 BIM Node" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md">
                       <div className="text-slate-500 text-[8px] font-black uppercase tracking-widest mb-3">{stat.l}</div>
                       <div className="text-white font-serif text-3xl font-black italic mb-1">{stat.v}</div>
                       <div className="text-gold-500 text-[8px] uppercase tracking-widest font-black opacity-60">{stat.s}</div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="hidden lg:flex flex-col gap-6">
               <div className="bg-slate-900/60 border border-white/10 p-16 rounded-[4rem] backdrop-blur-3xl shadow-3xl text-center relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                     <Compass size={300} className="text-white" />
                  </div>
                  <Hexagon size={64} className="text-gold-500 mx-auto mb-10 animate-pulse" />
                  <p className="text-white text-3xl font-editorial italic leading-relaxed mb-10 relative z-10">
                     "Gastronomy is a non-resident driver, capturing high-velocity regional spend beyond the hotel inventory."
                  </p>
                  <div className="flex items-center justify-center gap-6 relative z-10">
                     <ShieldCheck size={20} className="text-emerald-500" />
                     <span className="text-[10px] font-black uppercase tracking-[0.4em]">Audit Status: Revenue_Priority_A</span>
                  </div>
               </div>
            </div>
         </div>
      </CinematicLevel>

      {/* Chapter 03: Culinary Realization */}
      <CinematicLevel id="culinary" bg="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80">
         <div className="text-center max-w-6xl mx-auto space-y-16">
            <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] block">Concept Portfolio // Node_Fine_Dining</span>
            <h2 className="text-white font-serif text-6xl md:text-9xl leading-[0.8] italic font-black">Pure <br/><span className="gold-gradient-text not-italic">Vedic.</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
               {[
                 { t: "Vedic Hearth", d: "7-Star Fine Dining Ritual" },
                 { t: "Sovereign Deck", d: "Exclusive Ritual Lounge" }
               ].map((c, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[4rem] hover:bg-gold-500 hover:text-onyx-950 transition-all duration-700 group/item">
                    <div className="text-gold-500 group-hover/item:text-onyx-950 mb-6 flex justify-center">
                       <Star size={32} fill="currentColor" />
                    </div>
                    <div className="text-3xl font-serif font-black italic mb-2 leading-none">{c.t}</div>
                    <div className="text-[9px] uppercase tracking-[0.3em] font-black opacity-40">{c.d}</div>
                 </div>
               ))}
            </div>

            <Link to="/wellness" className="group px-14 py-7 bg-white text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 transition-all active:scale-95 inline-flex items-center gap-5 shadow-gold-glow">
               Next: Vedic Wellness <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
         </div>
      </CinematicLevel>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default DiningPage;