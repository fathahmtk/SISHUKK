import React from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Target, Activity, Maximize2, Layers, Scan, Globe, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CinematicLevel: React.FC<{ children: React.ReactNode, bg: string, id: string }> = ({ children, bg, id }) => (
  <section id={id} className="h-screen w-full relative snap-start overflow-hidden flex flex-col justify-center bg-slate-950">
    <div className="absolute inset-0 z-0">
      <img src={bg} className="w-full h-full object-cover opacity-20 transition-transform duration-[20s] hover:scale-110 saturate-[0.5]" alt="Background" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_110%)]"></div>
    </div>
    <div className="relative z-10 container mx-auto px-8">
      {children}
    </div>
    <div className="absolute bottom-12 left-12 z-20 flex flex-col gap-2 opacity-30">
       <div className="flex items-center gap-3 text-gold-500 font-black text-[8px] uppercase tracking-[0.4em]">
          <Scan size={10} /> Sector_Scan_Active
       </div>
    </div>
  </section>
);

const EventsPage: React.FC = () => {
  return (
    <div className="h-screen w-full bg-slate-950 overflow-y-scroll snap-y snap-mandatory no-scrollbar scroll-smooth">
      
      {/* Chapter 01: Volume Authority */}
      <CinematicLevel id="volumes" bg="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80">
         <div className="max-w-5xl">
            <Link to="/" className="inline-flex items-center gap-4 text-gold-500 text-[10px] font-black uppercase tracking-[0.5em] mb-16 hover:text-white transition-all group">
               <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Dashboard
            </Link>
            <div className="flex items-center gap-6 mb-8">
               <Layers size={24} className="text-gold-500 animate-pulse" />
               <span className="text-white text-[11px] font-black uppercase tracking-[0.6em]">Revenue Alpha // Node_Events_Core</span>
            </div>
            <h1 className="text-white font-serif text-7xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter italic font-black mb-16">
               Monumental <br/><span className="gold-gradient-text not-italic">Volumes.</span>
            </h1>
            <p className="text-slate-300 text-2xl md:text-4xl font-light font-editorial italic max-w-4xl leading-relaxed mb-12 opacity-80 border-l-4 border-gold-500/40 pl-10">
               Architecture as a market barrier. 15,000 sq. ft. of pillar-less ritual space engineered for South India's largest ceremonial gatherings.
            </p>
         </div>
      </CinematicLevel>

      {/* Chapter 02: Flux Engineering */}
      <CinematicLevel id="flux" bg="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] block">Capacity Metrics // Flux_Control</span>
               <h2 className="text-white font-serif text-6xl md:text-8xl leading-[0.9] italic font-black">High <br/>Capture.</h2>
               <div className="grid grid-cols-1 gap-6 pt-10">
                  {[
                    { l: "Global Capacity", v: "3,000 Pax", s: "Concurrent Threshold" },
                    { l: "Ceiling Datum", v: "8.0 Meters", s: "Clear Vertical Arc" },
                    { l: "Logistics Core", v: "Segregated", s: "Zero-Lag Flow" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-md flex justify-between items-center group/row hover:border-gold-500 transition-all">
                       <div>
                          <div className="text-slate-500 text-[8px] font-black uppercase tracking-widest mb-1">{stat.l}</div>
                          <div className="text-white font-serif text-4xl font-black italic">{stat.v}</div>
                       </div>
                       <div className="text-right">
                          <div className="text-gold-500 text-[10px] font-mono font-bold leading-none mb-1">{stat.s}</div>
                          <div className="text-[7px] text-white/20 uppercase font-black tracking-widest">Audit_Node_E{i+1}</div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="hidden lg:block">
               <div className="bg-slate-900/60 border border-white/10 p-20 rounded-[5rem] backdrop-blur-3xl shadow-3xl text-center">
                  <Target size={80} className="text-gold-500 mx-auto mb-12 animate-pulse" />
                  <p className="text-white text-3xl font-editorial italic leading-relaxed mb-12">
                     "The ballroom is a high-margin engine independent of room seasonality, providing a structural yield floor for the entire asset."
                  </p>
                  <div className="inline-flex items-center gap-6 px-8 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                     <ShieldCheck size={18} className="text-emerald-500" />
                     <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em]">Revenue Protection: Verified</span>
                  </div>
               </div>
            </div>
         </div>
      </CinematicLevel>

      {/* Chapter 03: Operational Axis */}
      <CinematicLevel id="ops-axis" bg="https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80">
         <div className="text-center max-w-6xl mx-auto space-y-16">
            <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] block">Process Node // Vertical_Logistics</span>
            <h2 className="text-white font-serif text-6xl md:text-9xl leading-[0.8] italic font-black">Ritual <br/>Monopoly.</h2>
            
            <div className="p-16 bg-white/5 border border-white/10 rounded-[5rem] backdrop-blur-md relative overflow-hidden">
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
               <div className="flex flex-col md:flex-row justify-around gap-12 relative z-10">
                  <div className="space-y-4">
                     <Globe size={40} className="text-gold-500 mx-auto" />
                     <div className="text-white font-serif text-4xl italic">365 Days</div>
                     <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Utilization Cycle</div>
                  </div>
                  <div className="w-px bg-white/10 hidden md:block"></div>
                  <div className="space-y-4">
                     <Activity size={40} className="text-gold-500 mx-auto" />
                     <div className="text-white font-serif text-4xl italic">N+1</div>
                     <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Service Redundancy</div>
                  </div>
                  <div className="w-px bg-white/10 hidden md:block"></div>
                  <div className="space-y-4">
                     <Star size={40} className="text-gold-500 mx-auto" fill="currentColor" />
                     <div className="text-white font-serif text-4xl italic">Trophy</div>
                     <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Venue Grade</div>
                  </div>
               </div>
            </div>

            <Link to="/dining" className="group px-14 py-7 bg-white text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 transition-all active:scale-95 inline-flex items-center gap-5 shadow-gold-glow">
               Next: Gastronomy Portfolio <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
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

export default EventsPage;