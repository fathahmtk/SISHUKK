import React, { useState } from 'react';
import { Info, ShieldCheck, Map, Layers, Target, Compass, Gauge, ScanLine } from 'lucide-react';

const STACK_DATA = [
  { floor: "20", label: "Dual Orbit Crowns", zone: "Gastronomy", detail: "Revolving restaurants capping Tower A and B. Cinematic 360° vistas." },
  { floor: "16-19", label: "Imperial Wings", zone: "Ultra-Luxury", detail: "Presidential Suites and high-value bridal wings above the arch." },
  { floor: "15", label: "The Meridian Arch", zone: "Link", detail: "Steel-truss skybridge housing the Executive Club & Sky Bar." },
  { floor: "04-14", label: "Twin Tower Core", zone: "Guest Rooms", detail: "420 luxury units optimized for high-yield transit and ritual stays." },
  { floor: "04 Terrace", label: "Podium Roof", zone: "Lifestyle", detail: "Infinity Edge Pool, Open-Air Yoga & Wellness Core." },
  { floor: "01-03", label: "The Grand Podium", zone: "Events", detail: "15,000 sq ft Ballroom, Retail wing, and Pre-function foyer." },
  { floor: "Ground", label: "Dual Portals", zone: "Arrival", detail: "Segregated lobbies for resident guests and banquet visitors." },
  { floor: "B1-B2", label: "Logistics Core", zone: "Service", detail: "250-Car Stack Parking, MEP Plant, and Central Staff Atrium." },
];

const MasterplanViewer: React.FC = () => {
  const [hoveredZone, setHoveredZone] = useState<number | null>(0);

  return (
    <section className="py-12 bg-[#FDFBF7] relative h-full flex flex-col justify-center border-t border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-5">
              <div className="w-12 h-[1px] bg-gold-500"></div>
              <span className="text-gold-600 text-[9px] font-black uppercase tracking-[0.6em] block">Chapter 04: Facility Stacking</span>
            </div>
            <h2 className="font-serif text-4xl md:text-7xl text-slate-950 leading-[0.8] tracking-tighter mt-4 italic">Structural <br/><span className="gold-gradient-text not-italic font-black">Hierarchy.</span></h2>
          </div>
          <div className="lg:col-span-5 border-l-2 border-gold-400 pl-10 pb-2 flex items-center gap-6">
             <p className="text-slate-500 text-lg font-light italic flex-1 leading-tight">
               "A vertical audit of the G+20 architecture. Revenue centers are vertically segregated to maximize yield."
             </p>
             <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
                <Gauge size={14} className="text-gold-500" />
                <span className="text-slate-950 text-[8px] font-black uppercase tracking-widest">BIM Level 3 Certified</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch h-[60vh]">
          <div className="lg:col-span-4 flex flex-col gap-2 relative p-6 bg-white border border-slate-200 rounded-[3rem] shadow-xl overflow-y-auto no-scrollbar">
            {STACK_DATA.map((item, i) => (
              <div 
                key={i}
                onMouseEnter={() => setHoveredZone(i)}
                className={`relative h-12 flex items-center justify-center border transition-all duration-500 cursor-pointer rounded-xl ${
                  hoveredZone === i 
                  ? 'border-gold-500 bg-slate-950 text-white shadow-lg scale-105 z-10' 
                  : 'border-slate-100 bg-slate-50 hover:bg-white hover:border-gold-300'
                }`}
              >
                 <span className={`absolute -left-2 text-[7px] font-black uppercase tracking-widest transition-colors ${hoveredZone === i ? 'text-gold-600' : 'text-slate-300'}`}>L{item.floor}</span>
                 <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${hoveredZone === i ? 'text-white' : 'text-slate-400'}`}>
                   {item.label}
                 </span>
              </div>
            ))}
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-200 rounded-[4rem] p-12 shadow-2xl h-full flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform">
                <Layers size={400} className="text-slate-950" />
              </div>

              <div className="animate-fade-in space-y-8 relative z-10">
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center text-white shadow-xl">
                    <Target size={28} />
                  </div>
                  <div>
                    <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.4em] block mb-2">Zone: {STACK_DATA[hoveredZone!].zone}</span>
                    <h3 className="text-slate-950 font-serif text-4xl md:text-6xl italic leading-none">{STACK_DATA[hoveredZone!].label}</h3>
                  </div>
                </div>
                <p className="text-slate-500 text-2xl font-light leading-relaxed max-w-2xl italic border-l-2 border-gold-400 pl-10">
                  "{STACK_DATA[hoveredZone!].detail}"
                </p>
                <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
                  <button className="px-8 py-4 bg-slate-950 text-white rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-gold-500 transition-all shadow-xl flex items-center gap-4">
                    Audit Node <Info size={14} />
                  </button>
                  <div className="flex items-center gap-3 text-slate-400">
                     <ShieldCheck size={16} className="text-emerald-500" />
                     <span className="text-[8px] font-black uppercase tracking-widest">Engineering Verified</span>
                  </div>
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