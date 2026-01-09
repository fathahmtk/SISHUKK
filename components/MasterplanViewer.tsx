
import React, { useState } from 'react';
import { ShieldCheck, Layers, Gauge, ScanLine, Activity, Database, Ruler, ArrowRight, Box } from 'lucide-react';

const STACK_DATA = [
  { floor: "20", label: "Dual Orbit Crowns", zone: "Gastronomy", area: "12,000", detail: "Twin revolving platforms capping Tower A and B. Cinematic 360° spiritual vistas.", metric: "Record Apex" },
  { floor: "16-19", label: "Sovereign Wings", zone: "Ultra-Luxury", area: "45,000", detail: "Exclusive presidential and bridal residency tiers located above the Meridian Link.", metric: "Inventory Alpha" },
  { floor: "15", label: "The Meridian Arch", zone: "Nexus Link", area: "8,500", detail: "Structural link housing the Executive Club and glass spiritual observation deck.", metric: "Structural Node" },
  { floor: "04-14", label: "Twin Core Stacks", zone: "Inventory", area: "185,000", detail: "420 units optimized for high-velocity ritual and transient spiritual demand.", metric: "Primary Stack" },
  { floor: "04 Terrace", label: "Lifestyle Deck", zone: "Wellness", area: "22,000", detail: "Infinity Edge Pool and Open-Air Vedic Wellness core serving residents.", metric: "Wellness Core" },
  { floor: "01-03", label: "The Grand Podium", zone: "Events", area: "75,000", detail: "15,000 sq ft pillar-less Ballroom and high-end ritual retail wing.", metric: "Event Hub" },
];

const MasterplanViewer: React.FC = () => {
  const [hoveredZone, setHoveredZone] = useState<number>(0);

  return (
    <section className="h-full w-full bg-[#05070A] relative overflow-hidden flex flex-col justify-center py-12 md:py-24 border-y border-white/5">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl h-full flex flex-col">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-5 mb-8 md:mb-10">
              <div className="w-12 h-[1px] bg-brass-400"></div>
              <span className="text-brass-400 text-[10px] md:text-[12px] font-black uppercase tracking-[0.8em]">Section 06 // Structural Stacking</span>
            </div>
            <h2 className="text-white font-serif text-5xl md:text-8xl leading-[0.85] tracking-tighter italic font-black">
              Vertical <br/><span className="gold-gradient-text not-italic">Hierarchy.</span>
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-8 bg-white/5 px-10 py-6 rounded-[2.5rem] border border-white/10 shadow-premium backdrop-blur-md">
             <div className="w-14 h-14 rounded-2xl bg-brass-400 flex items-center justify-center text-onyx-950 shadow-premium">
                <ScanLine size={24} className="animate-pulse" />
             </div>
             <div>
                <span className="text-brass-200/40 text-[8px] font-black uppercase tracking-widest block mb-1">BIM_Structural_Log</span>
                <span className="text-white text-xs font-bold uppercase tracking-widest">Master Record v2.5</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 flex-1 items-stretch overflow-hidden">
          <div className="lg:col-span-4 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto no-scrollbar pb-6 lg:pb-0 snap-x">
            {STACK_DATA.map((item, i) => (
              <button 
                key={i}
                onMouseEnter={() => setHoveredZone(i)}
                onClick={() => setHoveredZone(i)}
                className={`flex-none lg:w-full text-left group relative p-6 md:p-8 rounded-[2.5rem] border transition-all duration-500 min-w-[240px] md:min-w-0 snap-center ${
                  hoveredZone === i 
                  ? 'bg-brass-400 border-brass-400 shadow-premium lg:translate-x-4' 
                  : 'bg-white/5 border-white/5 hover:border-brass-400/30'
                }`}
              >
                 <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                       <span className={`text-[9px] md:text-[10px] font-mono font-black ${hoveredZone === i ? 'text-onyx-950' : 'text-brass-400/40'}`}>L{item.floor}</span>
                       <span className={`text-[12px] md:text-[13px] font-black uppercase tracking-widest ${hoveredZone === i ? 'text-onyx-950' : 'text-white/60 group-hover:text-white'}`}>{item.label}</span>
                    </div>
                 </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 flex-1 min-h-[450px]">
            <div className="bg-[#0A0C10] rounded-[4rem] p-10 md:p-20 shadow-premium relative overflow-hidden group h-full flex flex-col justify-center border border-white/5">
               <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#E8D19F 1px, transparent 1px), linear-gradient(90deg, #E8D19F 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
               
               <div className="relative z-10 space-y-12 md:space-y-16">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                     <div className="space-y-8 md:space-y-10 flex-1">
                        <div className="flex items-center gap-5 text-brass-400">
                           <Layers size={22} className="animate-bounce-slow" />
                           <span className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.5em]">Identity: {STACK_DATA[hoveredZone].zone}</span>
                        </div>
                        <h3 className="text-white font-serif text-5xl md:text-7xl lg:text-8xl italic leading-[1] font-black">{STACK_DATA[hoveredZone].label}</h3>
                        <p className="text-slate-400 text-xl md:text-3xl font-light font-editorial leading-relaxed max-w-2xl italic border-l-4 border-brass-400 pl-10">
                           "{STACK_DATA[hoveredZone].detail}"
                        </p>
                     </div>
                     
                     <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-12 rounded-[3rem] w-full md:w-auto md:min-w-[320px] shadow-premium">
                        <div className="space-y-10">
                           <div>
                              <div className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-3 flex items-center gap-4"><Ruler size={16} /> Node_Area</div>
                              <div className="text-brass-200 font-mono text-4xl md:text-5xl font-black">{STACK_DATA[hoveredZone].area} <span className="text-[12px] uppercase text-white/20">sq.ft</span></div>
                           </div>
                           <div className="h-px bg-white/10"></div>
                           <div>
                              <div className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-3 flex items-center gap-4"><Database size={16} /> Report_Node</div>
                              <div className="text-white font-serif text-3xl italic leading-none font-black">{STACK_DATA[hoveredZone].metric}</div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                     <div className="flex items-center gap-10">
                        <div className="flex items-center gap-4">
                           <ShieldCheck size={20} className="text-emerald-500" />
                           <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">BIM_Verified</span>
                        </div>
                     </div>
                     <button className="w-full md:w-auto px-12 py-6 bg-white text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-8 hover:bg-brass-400 transition-all shadow-premium active:scale-95 group">
                        Examine Vertical Logic <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
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
