import React, { useState } from 'react';
/* Added missing ArrowRight icon import */
import { Info, ShieldCheck, Layers, Target, Compass, Gauge, ScanLine, Activity, Database, Ruler, ArrowRight } from 'lucide-react';

const STACK_DATA = [
  { floor: "20", label: "Dual Orbit Crowns", zone: "Gastronomy", area: "12,000", detail: "Twin revolving platforms capping Tower A and B. Cinematic 360° spiritual vistas.", metric: "USP Engine" },
  { floor: "16-19", label: "Imperial Wings", zone: "Ultra-Luxury", area: "45,000", detail: "Presidential Suites and high-value bridal wings above the arch.", metric: "Yield Alpha" },
  { floor: "15", label: "The Meridian Arch", zone: "Link", area: "8,500", detail: "Steel-truss skybridge housing the Executive Club & Private Lounge.", metric: "Structural Link" },
  { floor: "04-14", label: "Twin Tower Core", zone: "Inventory", area: "185,000", detail: "420 luxury units optimized for high-yield transit and ritual stays.", metric: "Anchor Rev" },
  { floor: "04 Terrace", label: "Podium Roof", zone: "Lifestyle", area: "22,000", detail: "Infinity Edge Pool, Open-Air Yoga & Vedic Wellness Core.", metric: "ALOS Booster" },
  { floor: "01-03", label: "The Grand Podium", zone: "Events", area: "75,000", detail: "15,000 sq ft Ballroom, Retail wing, and Pre-function foyer.", metric: "MICE Core" },
  { floor: "Ground", label: "Dual Portals", zone: "Arrival", area: "15,000", detail: "Segregated lobbies for resident guests and banquet visitors.", metric: "Flow Matrix" },
  { floor: "B1-B2", label: "Logistics Core", zone: "Service", area: "80,000", detail: "250-Car Stack Parking, MEP Plant, and Central Staff Atrium.", metric: "OpEx Shield" },
];

const MasterplanViewer: React.FC = () => {
  const [hoveredZone, setHoveredZone] = useState<number>(0);

  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-12 h-[1px] bg-gold-500"></div>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.8em]">Chapter 04: Facility Stacking</span>
            </div>
            <h2 className="text-slate-950 font-serif text-5xl md:text-8xl leading-[0.8] tracking-tighter italic">
              Vertical <br/><span className="gold-gradient-text italic font-black">Hierarchy.</span>
            </h2>
          </div>
          <div className="lg:w-1/3 flex items-center gap-8 bg-[#FDFBF7] px-10 py-6 rounded-[3rem] border border-slate-200 shadow-2xl">
             <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center text-gold-500 shadow-xl">
                <Gauge size={24} className="animate-pulse" />
             </div>
             <div>
                <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-1">BIM Scan</span>
                <span className="text-slate-950 text-xs font-bold uppercase tracking-widest">Structural Audit v2.5</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start h-full">
          {/* Vertical Navigation Stack */}
          <div className="lg:col-span-4 space-y-4">
            {STACK_DATA.map((item, i) => (
              <button 
                key={i}
                onMouseEnter={() => setHoveredZone(i)}
                className={`w-full text-left group relative p-6 rounded-[2rem] border transition-all duration-700 ${
                  hoveredZone === i 
                  ? 'bg-slate-950 border-gold-500 shadow-gold-glow translate-x-4' 
                  : 'bg-white border-slate-100 hover:border-gold-300'
                }`}
              >
                 <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                       <span className={`text-[8px] font-mono font-black ${hoveredZone === i ? 'text-gold-500' : 'text-slate-300'}`}>L{item.floor}</span>
                       <span className={`text-xs font-black uppercase tracking-widest ${hoveredZone === i ? 'text-white' : 'text-slate-500'}`}>{item.label}</span>
                    </div>
                    {hoveredZone === i && <Activity size={14} className="text-gold-500 animate-pulse" />}
                 </div>
              </button>
            ))}
          </div>

          {/* Interactive Technical Viewport */}
          <div className="lg:col-span-8">
            <div className="bg-slate-950 rounded-[4rem] p-16 md:p-24 shadow-3xl relative overflow-hidden group min-h-[700px] flex flex-col justify-center border border-white/10">
               {/* Background Technical Grid */}
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
               
               <div className="relative z-10 space-y-16">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                     <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gold-500">
                           <Layers size={24} />
                           <span className="text-[10px] font-black uppercase tracking-[0.5em]">Node Identity: {STACK_DATA[hoveredZone].zone}</span>
                        </div>
                        <h3 className="text-white font-serif text-5xl md:text-7xl italic leading-none">{STACK_DATA[hoveredZone].label}</h3>
                        <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-xl italic border-l border-gold-500 pl-10">
                           "{STACK_DATA[hoveredZone].detail}"
                        </p>
                     </div>
                     
                     <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[3rem] min-w-[280px]">
                        <div className="space-y-10">
                           <div>
                              <div className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-2 flex items-center gap-3"><Ruler size={12} /> Zone Area (GSF)</div>
                              <div className="text-gold-500 font-mono text-4xl font-black">{STACK_DATA[hoveredZone].area} <span className="text-xs uppercase">ft²</span></div>
                           </div>
                           <div className="h-px bg-white/10"></div>
                           <div>
                              <div className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-2 flex items-center gap-3"><Database size={12} /> Commercial Profile</div>
                              <div className="text-white font-serif text-2xl italic">{STACK_DATA[hoveredZone].metric}</div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
                     <div className="flex items-center gap-10">
                        <div className="flex items-center gap-4">
                           <ShieldCheck size={20} className="text-emerald-500" />
                           <span className="text-white text-[9px] font-black uppercase tracking-widest">BIM Verified</span>
                        </div>
                        <div className="flex items-center gap-4">
                           <ScanLine size={20} className="text-gold-500" />
                           <span className="text-white text-[9px] font-black uppercase tracking-widest">N+1 Redundancy</span>
                        </div>
                     </div>
                     <button className="px-12 py-6 bg-white text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-4 hover:bg-gold-500 transition-all shadow-2xl">
                        Audit Structural Node <ArrowRight size={18} />
                     </button>
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