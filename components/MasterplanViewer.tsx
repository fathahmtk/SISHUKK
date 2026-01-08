
import React, { useState } from 'react';
import { Building2, Info, ArrowUpRight, ShieldCheck, Map, Layers } from 'lucide-react';

const STACK_DATA = [
  { floor: "20", label: "Revolving Crown", zone: "Gastronomy", detail: "Tower A & B high-velocity dining platforms.", color: "bg-gold-500" },
  { floor: "16-19", label: "Sovereign Suites", zone: "Ultra-Luxury", detail: "Duplex configurations & Presidential wings.", color: "bg-white/20" },
  { floor: "15", label: "Meridian Arch", zone: "The Bridge", detail: "Executive Club, Library & Glass Observation.", color: "bg-gold-400" },
  { floor: "04-14", label: "Asset Inventory", zone: "Rooms", detail: "420 Strategic Keys (Tower A & B).", color: "bg-white/10" },
  { floor: "01-03", label: "Grand Ballroom", zone: "Events", detail: "15,000 sq ft pillar-less ceremonial volume.", color: "bg-white/20" },
  { floor: "Ground", label: "The Portal", zone: "Grand Lobby", detail: "Bespoke check-in & Concierge Command.", color: "bg-white/30" },
  { floor: "Basements", label: "Operational Core", zone: "Logistics", detail: "MEP, Parking & Service Distribution.", color: "bg-white/5" },
];

const MasterplanViewer: React.FC = () => {
  const [hoveredZone, setHoveredZone] = useState<number | null>(null);

  return (
    <section className="py-32 bg-onyx-950 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] block mb-6">Facility Stacking Plan</span>
          <h2 className="font-serif text-5xl md:text-8xl text-white mb-10 tracking-tighter">Structural <br/><span className="gold-gradient-text italic">Hierarchy.</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A vertical breakdown of the ₹350 Crore facility architecture, optimized for maximum revenue-per-square-foot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Vertical Stack Visualization */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[300px] flex flex-col gap-2 relative">
              <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-white/10 to-transparent"></div>
              
              {STACK_DATA.map((item, i) => (
                <div 
                  key={i}
                  onMouseEnter={() => setHoveredZone(i)}
                  onMouseLeave={() => setHoveredZone(null)}
                  className={`relative h-16 flex items-center justify-center border transition-all duration-500 cursor-pointer group rounded-xl ${
                    hoveredZone === i 
                    ? 'border-gold-500 bg-gold-500/10 shadow-[0_0_30px_rgba(212,175,55,0.2)] scale-105 z-10' 
                    : 'border-white/5 bg-white/[0.02] hover:border-white/20'
                  }`}
                >
                   <span className="absolute -left-10 text-[8px] font-black text-slate-600 uppercase group-hover:text-gold-500 transition-colors">Lvl {item.floor}</span>
                   <span className={`text-[9px] font-black uppercase tracking-widest ${hoveredZone === i ? 'text-gold-500' : 'text-slate-400'}`}>
                     {item.label}
                   </span>
                   {hoveredZone === i && (
                     <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gold-500 rotate-45 animate-pulse"></div>
                   )}
                </div>
              ))}
            </div>
          </div>

          {/* Contextual Detail Card */}
          <div className="lg:col-span-7">
            <div className="bg-onyx-900 border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-3xl relative overflow-hidden min-h-[450px] flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                <Layers size={300} className="text-white" />
              </div>

              {hoveredZone !== null ? (
                <div className="animate-fade-in space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center text-onyx-950 shadow-2xl">
                      <Layers size={32} />
                    </div>
                    <div>
                      <span className="text-gold-500 text-[10px] font-black uppercase tracking-widest block mb-1">Zone: {STACK_DATA[hoveredZone].zone}</span>
                      <h3 className="text-white font-serif text-4xl">{STACK_DATA[hoveredZone].label}</h3>
                    </div>
                  </div>
                  <p className="text-slate-400 text-xl font-light leading-relaxed max-w-xl">
                    {STACK_DATA[hoveredZone].detail}
                  </p>
                  <div className="flex gap-4">
                    <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white hover:bg-gold-500 hover:text-onyx-950 transition-all flex items-center gap-3">
                      Technical Specs <Info size={14} />
                    </button>
                    <button className="px-8 py-4 bg-gold-500/10 border border-gold-500/30 rounded-full text-[10px] font-black uppercase tracking-widest text-gold-500 hover:bg-gold-500 hover:text-onyx-950 transition-all flex items-center gap-3">
                      Revenue Forecast <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <Building2 size={64} className="text-slate-700 mx-auto mb-8 animate-pulse" />
                  <h3 className="text-slate-500 font-serif text-3xl">Select a level to audit <br/><span className="text-slate-700 italic">Structural USPs</span></h3>
                  <div className="flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-[0.4em] text-slate-800">
                    <ShieldCheck size={12} /> Hover Vertical Stack to Inspect
                  </div>
                </div>
              )}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-8 bg-onyx-950 border border-white/5 rounded-3xl flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500">
                    <Map size={24} />
                  </div>
                  <div>
                    <span className="text-white text-xs font-bold uppercase tracking-widest block mb-1">Cylindrical Symmetry</span>
                    <p className="text-slate-600 text-[10px]">Optimized for wind-load and 360-degree vistas.</p>
                  </div>
               </div>
               <div className="p-8 bg-onyx-950 border border-white/5 rounded-3xl flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500">
                    <Layers size={24} />
                  </div>
                  <div>
                    <span className="text-white text-xs font-bold uppercase tracking-widest block mb-1">Dual-Core Logistics</span>
                    <p className="text-slate-600 text-[10px]">Independent service cores for Tower A & B.</p>
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
