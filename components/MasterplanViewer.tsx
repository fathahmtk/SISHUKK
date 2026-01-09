import React, { useState } from 'react';
import { Building2, Info, ArrowUpRight, ShieldCheck, Map, Layers, Target, ScanLine, Compass, Gauge } from 'lucide-react';

const STACK_DATA = [
  { floor: "20", label: "Dual Orbit Crowns", zone: "Gastronomy", detail: "Two independent revolving restaurants capping Tower A and Tower B. Cinematic 360° vistas.", color: "bg-gold-500" },
  { floor: "16-19", label: "Imperial Wings", zone: "Ultra-Luxury", detail: "Presidential Suites and high-value bridal wings above the arch datum.", color: "bg-slate-200" },
  { floor: "15", label: "The Meridian Arch", zone: "Structural Link", detail: "Steel-truss skybridge housing the Executive Club, Library & Sky Bar.", color: "bg-gold-400" },
  { floor: "04-14", label: "Twin Tower Core", zone: "Guest Rooms", detail: "420 luxury units. Tower A (Transient) and Tower B (Long-Stay/Ritual).", color: "bg-slate-100" },
  { floor: "04 Terrace", label: "Podium Roof", zone: "Lifestyle", detail: "Infinity Edge Pool, Open-Air Yoga & High-Altitude Wellness Core.", color: "bg-emerald-100" },
  { floor: "01-03", label: "The Grand Podium", zone: "Events", detail: "15,000 sq ft Ballroom, Pre-function foyer, and Luxury Retail wing.", color: "bg-slate-200" },
  { floor: "Ground", label: "Dual Portals", zone: "Arrival", detail: "Segregated lobbies for resident guests and banquet visitors.", color: "bg-slate-300" },
  { floor: "B1-B2", label: "Logistics Core", zone: "Service", detail: "250-Car Stack Parking, MEP Plant, and Central Staff Atrium.", color: "bg-slate-50" },
];

const MasterplanViewer: React.FC = () => {
  const [hoveredZone, setHoveredZone] = useState<number | null>(null);

  return (
    <section className="py-64 bg-[#FDFBF7] relative overflow-hidden border-t border-slate-100">
      {/* Engineering Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-end mb-32">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-5">
              <div className="w-12 h-[1px] bg-gold-500"></div>
              <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.8em] block">Chapter 04: Facility Stacking</span>
            </div>
            <h2 className="font-serif text-6xl md:text-9xl text-slate-950 leading-[0.75] tracking-tighter mt-10 italic">Structural <br/><span className="gold-gradient-text not-italic font-black">Hierarchy.</span></h2>
          </div>
          <div className="lg:col-span-5 border-l-2 border-gold-400 pl-16 pb-4">
             <p className="text-slate-500 text-2xl font-light leading-relaxed italic mb-10">
               "A vertical audit of the Twin-Tower G+20 architecture. Revenue centers are vertically segregated to maximize operational yield."
             </p>
             <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
                <Gauge size={20} className="text-gold-500" />
                <span className="text-slate-950 text-[10px] font-black uppercase tracking-widest">BIM Data Sync: Level 3 Certified</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[450px] flex flex-col gap-4 relative p-12 bg-white border border-slate-200 rounded-[5rem] shadow-3xl">
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
                 <div className="h-64 w-px bg-gold-400/30"></div>
                 <Compass size={20} className="text-gold-500 animate-spin-slow" />
                 <div className="h-64 w-px bg-gold-400/30"></div>
              </div>
              
              {STACK_DATA.map((item, i) => (
                <div 
                  key={i}
                  onMouseEnter={() => setHoveredZone(i)}
                  onMouseLeave={() => setHoveredZone(null)}
                  className={`relative h-20 flex items-center justify-center border transition-all duration-700 cursor-pointer group rounded-[1.5rem] ${
                    hoveredZone === i 
                    ? 'border-gold-500 bg-slate-950 text-white shadow-3xl scale-105 z-10' 
                    : 'border-slate-100 bg-slate-50 hover:bg-white hover:border-gold-300'
                  }`}
                >
                   <span className={`absolute -left-16 text-[9px] font-black uppercase tracking-widest transition-colors ${hoveredZone === i ? 'text-gold-600' : 'text-slate-300'}`}>Lvl {item.floor}</span>
                   <span className={`text-[11px] font-black uppercase tracking-[0.3em] transition-colors ${hoveredZone === i ? 'text-white' : 'text-slate-400'}`}>
                     {item.label}
                   </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-[6rem] p-16 md:p-24 shadow-3xl relative overflow-hidden min-h-[650px] flex flex-col justify-center group/card">
              <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none group-hover/card:scale-110 transition-transform duration-[10s]">
                <Layers size={500} className="text-slate-950" />
              </div>

              {hoveredZone !== null ? (
                <div className="animate-fade-in space-y-12">
                  <div className="flex items-center gap-10">
                    <div className="w-24 h-24 bg-gold-500 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl group-hover/card:rotate-12 transition-transform duration-700">
                      <Target size={40} />
                    </div>
                    <div>
                      <span className="text-gold-600 text-[11px] font-black uppercase tracking-[0.5em] block mb-3">Zone Classification: {STACK_DATA[hoveredZone].zone}</span>
                      <h3 className="text-slate-950 font-serif text-5xl md:text-7xl italic leading-none">{STACK_DATA[hoveredZone].label}</h3>
                    </div>
                  </div>
                  <p className="text-slate-500 text-3xl font-light leading-relaxed max-w-2xl italic border-l-2 border-gold-400 pl-12">
                    "{STACK_DATA[hoveredZone].detail}"
                  </p>
                  <div className="flex flex-wrap gap-8 pt-10 border-t border-slate-100">
                    <button className="px-12 py-6 bg-slate-950 text-white rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-gold-500 transition-all shadow-3xl flex items-center gap-6 group">
                      Inspect Physical Node <Info size={18} className="text-gold-500 group-hover:text-white" />
                    </button>
                    <div className="flex items-center gap-4 text-slate-400">
                       <ShieldCheck size={20} className="text-emerald-500" />
                       <span className="text-[10px] font-black uppercase tracking-widest">Engineering Verified</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-12 py-20">
                  <ScanLine size={100} className="text-gold-200 mx-auto animate-pulse" />
                  <h3 className="text-slate-400 font-serif text-5xl italic leading-tight">Authorize a level <br/><span className="text-slate-300 not-italic">to begin audit</span></h3>
                  <div className="flex items-center justify-center gap-6">
                    <div className="h-px w-16 bg-slate-100"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Tactile Interface Active</span>
                    <div className="h-px w-16 bg-slate-100"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-12 bg-white border border-slate-100 rounded-[4rem] flex items-center gap-10 shadow-sm hover:shadow-2xl transition-all duration-700 group hover:border-gold-300">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-slate-950 flex items-center justify-center text-gold-500 shadow-xl group-hover:bg-gold-500 group-hover:text-white transition-all">
                    <Map size={28} />
                  </div>
                  <div>
                    <span className="text-slate-950 text-lg font-black uppercase tracking-widest block mb-1 italic">Symmetry Core</span>
                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Dual cylindrical structural datums.</p>
                  </div>
               </div>
               <div className="p-12 bg-white border border-slate-100 rounded-[4rem] flex items-center gap-10 shadow-sm hover:shadow-2xl transition-all duration-700 group hover:border-gold-300">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-slate-950 flex items-center justify-center text-gold-500 shadow-xl group-hover:bg-gold-500 group-hover:text-white transition-all">
                    <Layers size={28} />
                  </div>
                  <div>
                    <span className="text-slate-950 text-lg font-black uppercase tracking-widest block mb-1 italic">N+1 Logistics</span>
                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Redundant 4.0m/s vertical cores.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterplanViewer;