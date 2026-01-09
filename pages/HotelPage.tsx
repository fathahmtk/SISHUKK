import React from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, BedDouble, Star, Activity, Layers, Scan, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';

// Fixed children prop type from invalid React.HighLevel to React.ReactNode and improved component definition
const CinematicLevel: React.FC<{ children: React.ReactNode, bg: string, id: string }> = ({ children, bg, id }) => (
  <section id={id} className="h-screen w-full relative snap-start overflow-hidden flex flex-col justify-center bg-slate-950">
    <div className="absolute inset-0 z-0">
      <img src={bg} className="w-full h-full object-cover opacity-25 transition-transform duration-[20s] hover:scale-110" alt="Background" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_110%)]"></div>
    </div>
    <div className="relative z-10 container mx-auto px-8">
      {children}
    </div>
  </section>
);

const HotelPage: React.FC = () => {
  return (
    <div className="h-screen w-full bg-slate-950 overflow-y-scroll snap-y snap-mandatory no-scrollbar scroll-smooth">
      
      {/* Chapter 01: Portfolio Header */}
      <CinematicLevel id="inventory-home" bg="https://cdn-imgix.headout.com/tour/34223/TOUR-IMAGE/95a3df68-963d-4966-980b-2223b2909a37-1647432002221.jpg">
         <div className="max-w-5xl">
            <Link to="/" className="inline-flex items-center gap-4 text-gold-500 text-[10px] font-black uppercase tracking-[0.5em] mb-16 hover:text-white transition-all group">
               <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Dashboard
            </Link>
            <div className="flex items-center gap-6 mb-8">
               <Layers size={24} className="text-gold-500 animate-pulse" />
               <span className="text-white text-[11px] font-black uppercase tracking-[0.6em]">Inventory Portfolio // Node_Unit_Catalogue</span>
            </div>
            <h1 className="text-white font-serif text-7xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter italic font-black mb-16">
               Luxury <br/><span className="gold-gradient-text not-italic">Units.</span>
            </h1>
            <p className="text-slate-300 text-2xl md:text-4xl font-light font-editorial italic max-w-4xl leading-relaxed mb-12 opacity-80 border-l-4 border-gold-500/40 pl-10">
               440 calibrated keys across two symmetrical cores. Each unit is a high-performance yield asset optimized for acoustic silence and smart thermal control.
            </p>
         </div>
      </CinematicLevel>

      {/* Chapter 02: Metro Deluxe */}
      <CinematicLevel id="metro" bg="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] block">Asset Class // Metro_Deluxe</span>
               <h2 className="text-white font-serif text-6xl md:text-8xl leading-[0.9] italic font-black">Tower A <br/>Deluxe.</h2>
               <p className="text-slate-400 text-2xl font-editorial italic leading-relaxed">
                  "Designed for the high-velocity transient pilgrim. Featuring smart-dispatch elevator access and -45dB acoustic dampening."
               </p>
               <div className="grid grid-cols-2 gap-6 pt-10">
                  {[
                    { l: "Unit Count", v: "220", s: "Primary Tranche" },
                    { l: "Unit Area", v: "450", s: "Sq. Ft. Net" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md">
                       <div className="text-slate-500 text-[8px] font-black uppercase tracking-widest mb-2">{stat.l}</div>
                       <div className="text-white font-serif text-4xl font-black italic">{stat.v}</div>
                       <div className="text-gold-500 text-[8px] font-black uppercase tracking-widest mt-2">{stat.s}</div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="hidden lg:flex flex-col gap-6">
               {[
                 { i: Scan, t: "Acoustic Shielding", d: "Triple Glazed DGU" },
                 { i: Activity, t: "IoT Hub", d: "Keyless Node Entry" },
                 { i: Ruler, t: "Ceiling Datum", d: "3.4m Clear Height" }
               ].map((feat, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl flex items-center gap-10 hover:border-gold-500 transition-all">
                    <div className="w-16 h-16 bg-gold-500 rounded-3xl flex items-center justify-center text-onyx-950 shadow-2xl">
                       <feat.i size={28} />
                    </div>
                    <div>
                       <div className="text-white font-serif text-2xl italic leading-none mb-2">{feat.t}</div>
                       <div className="text-slate-500 text-[9px] font-black uppercase tracking-[0.4em]">{feat.d}</div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </CinematicLevel>

      {/* Chapter 03: Sovereign Suites */}
      <CinematicLevel id="sovereign" bg="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80">
         <div className="text-center max-w-6xl mx-auto space-y-16">
            <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] block">Asset Class // Sovereign_Suite</span>
            <h2 className="text-white font-serif text-6xl md:text-9xl leading-[0.8] italic font-black">Imperial <br/><span className="gold-gradient-text not-italic">Wings.</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { l: "Unit Area", v: "950", s: "Sq. Ft. Ultra" },
                 { l: "Service Grade", v: "VVIP", s: "Private Butler" },
                 { l: "Location", v: "L16-19", s: "Apex Positions" }
               ].map((item, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[4rem] backdrop-blur-md group hover:border-gold-500 transition-all duration-700">
                    <div className="w-16 h-16 bg-slate-950 rounded-full flex items-center justify-center text-gold-500 mx-auto mb-10 shadow-2xl border border-white/5 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all">
                       <Star size={32} />
                    </div>
                    <div className="text-white font-serif text-5xl font-black italic mb-4">{item.v}</div>
                    <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{item.l}</div>
                 </div>
               ))}
            </div>

            <Link to="/events" className="group px-14 py-7 bg-white text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 transition-all active:scale-95 inline-flex items-center gap-5 shadow-gold-glow">
               Next: Event Masterplan <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
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

export default HotelPage;