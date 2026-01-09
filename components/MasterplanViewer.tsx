import React, { useState } from 'react';
import { Building2, Info, ArrowUpRight, ShieldCheck, Map, Layers, Target, ScanLine } from 'lucide-react';

const STACK_DATA = [
  { floor: "20", label: "Revolving Crown", zone: "Gastronomy", detail: "Tower A & B high-velocity dining platforms.", color: "bg-gold-500" },
  { floor: "16-19", label: "Sovereign Suites", zone: "Ultra-Luxury", detail: "Duplex configurations & Presidential wings.", color: "bg-slate-200" },
  { floor: "15", label: "Meridian Arch", zone: "The Bridge", detail: "Executive Club, Library & Glass Observation.", color: "bg-gold-400" },
  { floor: "04-14", label: "Asset Inventory", zone: "Rooms", detail: "420 Strategic Keys (Tower A & B).", color: "bg-slate-100" },
  { floor: "01-03", label: "Grand Ballroom", zone: "Events", detail: "15,000 sq ft pillar-less ceremonial volume.", color: "bg-slate-200" },
  { floor: "Ground", label: "The Portal", zone: "Grand Lobby", detail: "Bespoke check-in & Concierge Command.", color: "bg-slate-300" },
  { floor: "Basements", label: "Operational Core", zone: "Logistics", detail: "MEP, Parking & Service Distribution.", color: "bg-slate-50" },
];

const MasterplanViewer: React.FC = () => {
  const [hoveredZone, setHoveredZone] = useState<number | null>(null);

  return (
    <section className="py-64 bg-[#FDFBF7] relative overflow-hidden border-t border-slate-200">
      <div className="absolute top-[20%] left-[-2%] text-slate-100 font-serif text-[40rem] font-black italic pointer-events-none select-none leading-none opacity-40">S</div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-end mb-32">
          <div className="lg:col-span-7">
            <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.8em] block mb-10">Chapter 04: Facility Stacking</span>
            <h2 className="font-serif text-6xl md:text-9xl text-slate-950 leading-[0.75] tracking-tighter italic">Structural <br/><span className="gold-gradient-text not-italic font-black">Hierarchy.</span></h2>
          </div>
          <div className="lg:col-span-5 border-l border-slate-200 pl-16 pb-4">
             <p className="text-slate-500 text-2xl font-light leading-relaxed italic mb-8">
               "A vertical breakdown of the ₹350 Crore facility architecture, optimized for maximum revenue-per-square-foot."
             </p>
             <div className="flex gap-4">
                <div className="px-6 py-3 bg-white border border-slate-200 rounded-full text-gold-600 text-[9px] font-black uppercase tracking-widest shadow-sm">
                   BIM Grade L300
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[400px] flex flex-col gap-3 relative p-12 bg-white border border-slate-200 rounded-[4rem] shadow-2xl">
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-px h-3/4 bg-gold-400/30"></div>
              
              {STACK_DATA.map((item, i) => (
                <div 
                  key={i}
                  onMouseEnter={() => setHoveredZone(i)}
                  onMouseLeave={() => setHoveredZone(null)}
                  className={`relative h-20 flex items-center justify-center border transition-all duration-700 cursor-pointer group rounded-2xl ${
                    hoveredZone === i 
                    ? 'border-gold-500 bg-gold-50 shadow-3xl scale-105 z-10' 
                    : 'border-slate-100 bg-slate-50 hover:bg-white hover:border-gold-200'
                  }`}
                >
                   <span className={`absolute -left-12 text-[9px] font-black uppercase tracking-widest transition-colors ${hoveredZone === i ? 'text-gold-600' : 'text-slate-300'}`}>Lvl {item.floor}</span>
                   <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${hoveredZone === i ? 'text-slate-950' : 'text-slate-400'}`}>
                     {item.label}
                   </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-[5rem] p-16 md:p-24 shadow-3xl relative overflow-hidden min-h-[550px] flex flex-col justify-center group/card">
              <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none group-hover/card:scale-110 transition-transform duration-[10s]">
                <Layers size={400} className="text-slate-950" />
              </div>

              {hoveredZone !== null ? (
                <div className="animate-fade-in space-y-12">
                  <div className="flex items-center gap-8">
                    <div className="w-20 h-20 bg-gold-500 rounded-3xl flex items-center justify-center text-white shadow-2xl group-hover/card:rotate-12 transition-transform">
                      <Layers size={36} />
                    </div>
                    <div>
                      <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.4em] block mb-2">Zone: {STACK_DATA[hoveredZone].zone}</span>
                      <h3 className="text-slate-950 font-serif text-5xl md:text-6xl italic leading-none">{STACK_DATA[hoveredZone].label}</h3>
                    </div>
                  </div>
                  <p className="text-slate-500 text-2xl font-light leading-relaxed max-w-xl italic border-l-2 border-gold-400 pl-12">
                    {STACK_DATA[hoveredZone].detail}
                  </p>
                  <div className="flex gap-6 pt-6">
                    <button className="px-10 py-5 bg-slate-950 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gold-500 transition-all shadow-xl flex items-center gap-4">
                      Technical Specs <Info size={16} />
                    </button>
                    <button className="px-10 py-5 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-gold-400 hover:text-gold-600 transition-all flex items-center gap-4">
                      Yield Logic <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-10">
                  <Building2 size={80} className="text-gold-200 mx-auto mb-8 animate-pulse" />
                  <h3 className="text-slate-400 font-serif text-4xl italic leading-tight">Select a level to audit <br/><span className="text-slate-200 not-italic">Structural Logic</span></h3>
                  <div className="flex items-center justify-center gap-4 text-[9px] font-black uppercase tracking-[0.5em] text-slate-300">
                    <ScanLine size={16} className="text-gold-400 animate-pulse" /> Hover Stack to Inspect
                  </div>
                </div>
              )}
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-12 bg-white border border-slate-100 rounded-[3.5rem] flex items-center gap-8 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-gold-50 flex items-center justify-center text-gold-600 border border-gold-100 shadow-sm">
                    <Map size={28} />
                  </div>
                  <div>
                    <span className="text-slate-950 text-sm font-black uppercase tracking-widest block mb-1">Cylindrical Symmetry</span>
                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Optimized Wind-Load Rating</p>
                  </div>
               </div>
               <div className="p-12 bg-white border border-slate-100 rounded-[3.5rem] flex items-center gap-8 shadow-sm hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-gold-50 flex items-center justify-center text-gold-600 border border-gold-100 shadow-sm">
                    <Layers size={28} />
                  </div>
                  <div>
                    <span className="text-slate-950 text-sm font-black uppercase tracking-widest block mb-1">Dual-Core Logistics</span>
                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Parallel Service Redundancy</p>
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