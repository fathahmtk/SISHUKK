import React, { useState } from 'react';
import { ShieldCheck, Layers, Gauge, ScanLine, Activity, Database, Ruler, ArrowRight } from 'lucide-react';

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
    <section className="py-16 md:py-32 bg-white relative overflow-hidden h-full flex flex-col justify-center">
      <div className="container mx-auto px-6 h-full flex flex-col max-w-7xl">
        
        {/* Header Block - Absolute Alignment */}
        <div className="flex flex-col lg:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-8 md:gap-12 shrink-0">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-10">
              <div className="w-10 md:w-16 h-[1px] bg-gold-500"></div>
              <span className="text-slate-400 text-[10px] md:text-[12px] font-black uppercase tracking-[0.6em] md:tracking-[0.8em]">Chapter 06: Stacking Logic</span>
            </div>
            <h2 className="text-slate-950 font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.9] md:leading-[0.8] tracking-tighter italic font-black">
              Vertical <br/><span className="gold-gradient-text not-italic">Hierarchy.</span>
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-8 bg-[#FDFBF7] px-12 py-8 rounded-[3.5rem] border border-slate-200 shadow-2xl">
             <div className="w-16 h-16 rounded-2xl bg-slate-950 flex items-center justify-center text-gold-500 shadow-xl">
                <Gauge size={28} className="animate-pulse" />
             </div>
             <div>
                <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-1">BIM Scan_Audit</span>
                <span className="text-slate-950 text-xs font-bold uppercase tracking-widest">Structural Audit v2.5</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start flex-1 overflow-hidden">
          {/* Floor Switcher - Mobile-First Horizontal Scroller */}
          <div className="lg:col-span-4 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto no-scrollbar pb-6 lg:pb-0 shrink-0 snap-x">
            {STACK_DATA.map((item, i) => (
              <button 
                key={i}
                onMouseEnter={() => setHoveredZone(i)}
                onClick={() => setHoveredZone(i)}
                className={`flex-none lg:w-full text-left group relative p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border transition-all duration-700 min-w-[200px] md:min-w-0 snap-center ${
                  hoveredZone === i 
                  ? 'bg-slate-950 border-gold-500 shadow-[0_20px_50px_rgba(212,175,55,0.2)] lg:translate-x-4' 
                  : 'bg-white border-slate-100 hover:border-gold-300'
                }`}
              >
                 <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                       <span className={`text-[8px] md:text-[10px] font-mono font-black ${hoveredZone === i ? 'text-gold-500' : 'text-slate-300'}`}>L{item.floor}</span>
                       <span className={`text-[11px] md:text-[13px] font-black uppercase tracking-widest ${hoveredZone === i ? 'text-white' : 'text-slate-500 group-hover:text-slate-800'}`}>{item.label}</span>
                    </div>
                    {hoveredZone === i && <Activity size={14} className="text-gold-500 animate-pulse hidden md:block" />}
                 </div>
              </button>
            ))}
          </div>

          {/* Interactive Data Viewport */}
          <div className="lg:col-span-8 h-full min-h-[400px] md:min-h-0">
            <div className="bg-slate-950 rounded-[3rem] md:rounded-[5rem] p-10 md:p-20 lg:p-28 shadow-3xl relative overflow-hidden group h-full flex flex-col justify-center border border-white/10">
               {/* Technical Background */}
               <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
               
               <div className="relative z-10 space-y-12 md:space-y-20">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16">
                     <div className="space-y-6 md:space-y-10">
                        <div className="flex items-center gap-4 text-gold-500">
                           <Layers size={24} className="animate-bounce-slow" />
                           <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">Node Identity: {STACK_DATA[hoveredZone].zone}</span>
                        </div>
                        <h3 className="text-white font-serif text-4xl md:text-7xl lg:text-8xl italic leading-[1.1] md:leading-none font-black">{STACK_DATA[hoveredZone].label}</h3>
                        <p className="text-slate-400 text-lg md:text-3xl font-light leading-relaxed max-w-2xl italic border-l-4 border-gold-500 pl-8 md:pl-12">
                           "{STACK_DATA[hoveredZone].detail}"
                        </p>
                     </div>
                     
                     <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-14 rounded-[3rem] md:rounded-[4rem] w-full md:min-w-[320px] md:w-auto shadow-2xl">
                        <div className="space-y-10 md:space-y-14">
                           <div>
                              <div className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-3 flex items-center gap-3"><Ruler size={14} /> Zone Area_GSF</div>
                              <div className="text-gold-500 font-mono text-3xl md:text-5xl font-black">{STACK_DATA[hoveredZone].area} <span className="text-[12px] md:text-[14px] uppercase text-white/20">sq.ft</span></div>
                           </div>
                           <div className="h-[1px] bg-white/10"></div>
                           <div>
                              <div className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-3 flex items-center gap-3"><Database size={14} /> Commercial_Role</div>
                              <div className="text-white font-serif text-2xl md:text-3xl italic leading-none font-black">{STACK_DATA[hoveredZone].metric}</div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="pt-10 md:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                     <div className="flex items-center gap-8 md:gap-14">
                        <div className="flex items-center gap-4">
                           <ShieldCheck size={20} className="text-emerald-500" />
                           <span className="text-white text-[9px] md:text-[11px] font-black uppercase tracking-widest">BIM Verified</span>
                        </div>
                        <div className="flex items-center gap-4">
                           <ScanLine size={20} className="text-gold-500" />
                           <span className="text-white text-[9px] md:text-[11px] font-black uppercase tracking-widest">N+1 Ready</span>
                        </div>
                     </div>
                     <button className="w-full md:w-auto px-12 md:px-16 py-7 md:py-8 bg-white text-onyx-950 rounded-full text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-6 hover:bg-gold-500 transition-all shadow-3xl active:scale-95">
                        Audit Node Protocol <ArrowRight size={20} />
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