import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Scan, Cpu, Activity, Ruler, Database, Box, Layers, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

// Fixed children prop type and component definition to ensure TypeScript recognizes children correctly in JSX
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
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-30">
       <span className="text-[7px] font-black uppercase tracking-[0.5em] text-white">Next Operational Node</span>
       <div className="w-px h-12 bg-gradient-to-b from-gold-500 to-transparent"></div>
    </div>
  </section>
);

const AssetPage: React.FC = () => {
  return (
    <div className="h-screen w-full bg-slate-950 overflow-y-scroll snap-y snap-mandatory no-scrollbar scroll-smooth">
      
      {/* Chapter 01: Elevation Scan */}
      <CinematicLevel id="elevation" bg="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg">
         <div className="max-w-5xl">
            <Link to="/" className="inline-flex items-center gap-4 text-gold-500 text-[10px] font-black uppercase tracking-[0.5em] mb-16 hover:text-white transition-all group">
               <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Back to Dashboard
            </Link>
            <div className="flex items-center gap-6 mb-8">
               <Scan size={24} className="text-gold-500 animate-pulse" />
               <span className="text-white text-[11px] font-black uppercase tracking-[0.6em]">Structural Dossier // Node_Elevation</span>
            </div>
            <h1 className="text-white font-serif text-7xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter italic font-black mb-16">
               Twin <br/><span className="gold-gradient-text not-italic">Monoliths.</span>
            </h1>
            <p className="text-slate-300 text-2xl md:text-4xl font-light font-editorial italic max-w-4xl leading-relaxed mb-12 opacity-80 border-l-4 border-gold-500/40 pl-10">
               Architecture as a capital barrier. Guruvayur's only twin-tower skyline asset engineered for institutional scale.
            </p>
         </div>
      </CinematicLevel>

      {/* Chapter 02: BIM Specifications */}
      <CinematicLevel id="metrics" bg="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] block">Asset Metrics // Node_BIM</span>
               <h2 className="text-white font-serif text-6xl md:text-8xl leading-[0.9] italic font-black">Technical <br/>Baseline.</h2>
               <div className="grid grid-cols-2 gap-8 pt-10">
                  {[
                    { l: "Built Area", v: "350,000", s: "Sq. Ft. GSF" },
                    { l: "Vertical", v: "G+20", s: "Seismic Grade IV" },
                    { l: "Logistics", v: "12 Cores", s: "High-V Mitsubishi" },
                    { l: "Clearance", v: "75.0m", s: "AAI Verified" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md">
                       <div className="text-slate-500 text-[8px] font-black uppercase tracking-widest mb-3">{stat.l}</div>
                       <div className="text-white font-serif text-3xl font-black italic mb-1">{stat.v}</div>
                       <div className="text-gold-500 text-[8px] uppercase tracking-widest font-black opacity-60">{stat.s}</div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="hidden lg:block relative group">
               <div className="absolute -inset-10 bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
               <div className="bg-slate-900/60 border border-white/10 p-16 rounded-[4rem] backdrop-blur-3xl shadow-3xl relative">
                  <Activity size={64} className="text-gold-500 mb-12" />
                  <p className="text-white text-3xl font-editorial italic leading-relaxed mb-12">
                     "Every structural node is synchronized with the BIM Level 3 twin, ensuring lifecycle transparency for capital partners."
                  </p>
                  <div className="flex items-center gap-6 p-8 bg-white/5 rounded-3xl">
                     <ShieldCheck size={24} className="text-emerald-500" />
                     <span className="text-[10px] font-black uppercase tracking-[0.4em]">Audit Status: Structural_Grade_A</span>
                  </div>
               </div>
            </div>
         </div>
      </CinematicLevel>

      {/* Chapter 03: The Facility Stack */}
      <CinematicLevel id="stacking" bg="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80">
         <div className="text-center max-w-6xl mx-auto space-y-16">
            <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] block">Hierarchy // Node_Vertical</span>
            <h2 className="text-white font-serif text-6xl md:text-9xl leading-[0.8] italic font-black">Vertical <br/>Hierarchy.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               {[
                 { f: "L20", n: "Orbit Crowns", d: "Gastronomy" },
                 { f: "L15", n: "Meridian Arch", d: "Executive" },
                 { f: "L04-14", n: "Inventory", d: "440 keys" },
                 { f: "L01-03", n: "Podium", d: "MICE Core" }
               ].map((lvl, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-gold-500 hover:text-onyx-950 transition-all duration-500 group/item">
                    <div className="text-gold-500 group-hover/item:text-onyx-950 text-[10px] font-mono font-bold mb-4">{lvl.f}</div>
                    <div className="text-2xl font-serif font-black italic mb-2 leading-none">{lvl.n}</div>
                    <div className="text-[8px] uppercase tracking-[0.3em] font-black opacity-40">{lvl.d}</div>
                 </div>
               ))}
            </div>

            <Link to="/market" className="group px-14 py-7 bg-white text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 transition-all active:scale-95 inline-flex items-center gap-5 shadow-gold-glow">
               Next: Market Dynamics <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
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

export default AssetPage;