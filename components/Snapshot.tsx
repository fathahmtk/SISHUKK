import React from 'react';
import { Building2, Crown, TrendingUp, MapPin, ShieldCheck, Activity, Scan } from 'lucide-react';

interface SnapshotProps {
  onProfileClick?: () => void;
}

const Snapshot: React.FC<SnapshotProps> = ({ onProfileClick }) => {
  const cards = [
    { icon: <Building2 size={24} />, title: "Asset Class", val: "Trophy Hub", desc: "Hospitality core serving non-seasonal ritual demand." },
    { icon: <Crown size={24} />, title: "Design Moat", val: "Visual Icon", desc: "Twin-tower skyline command creating immediate recall." },
    { icon: <TrendingUp size={24} />, title: "Yield Curve", val: "High Alpha", desc: "Diversified revenue verticals decoupled from market cycles." },
    { icon: <MapPin size={24} />, title: "Strategic Pin", val: "Nexus Site", desc: "South Nada corridor with 12M+ annual verified footfall." }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-[#05070A] overflow-hidden group">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            className="w-full h-full object-cover opacity-20 saturate-0 grayscale transition-transform duration-[20s] group-hover:scale-110" 
            alt="Physical Evidence" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-transparent to-onyx-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#05070A_110%)]"></div>
      </div>

      {/* Standardized Telemetry HUD */}
      <div className="absolute top-8 left-6 md:top-12 md:left-12 z-30 space-y-3 opacity-40 hidden md:block">
         <div className="flex items-center gap-4 text-brass-200 font-black text-[9px] uppercase tracking-[0.5em]">
            <Scan size={14} /> Evidence_Audit_v2.5
         </div>
         <div className="text-white text-[7px] font-mono opacity-50 uppercase tracking-widest">
            Identity: SGT_PHYS_2025_VERIFIED
         </div>
      </div>

      <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-30 text-right opacity-40 hidden md:block">
         <div className="text-brass-200 font-black text-[9px] uppercase tracking-[0.5em] mb-3">Ledger Synchronization</div>
         <div className="flex items-center justify-end gap-3 text-white text-[11px] font-black uppercase tracking-widest">
            <Activity size={16} className="text-emerald-500 animate-pulse" /> Status: Linked
         </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 text-center w-full max-w-7xl px-6 md:px-12 flex flex-col items-center py-12 md:py-0">
         <span className="text-brass-400 text-[11px] md:text-[14px] font-black uppercase tracking-[1.2em] block mb-8 md:mb-16">
           Chapter 01 // Portfolio Intelligence
         </span>
         
         <h2 className="text-white font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.9] md:leading-[0.8] tracking-tighter italic font-black mb-12 md:mb-20">
           Physical <br/>
           <span className="gold-gradient-text not-italic">Evidence.</span>
         </h2>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full mb-12 md:mb-24 max-w-6xl">
            {cards.map((card, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] text-center group/item hover:bg-brass-400 hover:text-onyx-950 transition-all duration-700 hover:-translate-y-4 shadow-3xl">
                 <div className="mb-10 flex justify-center text-brass-400 group-hover/item:text-onyx-950 transition-colors duration-500">{card.icon}</div>
                 <div className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.5em] mb-4 opacity-50 group-hover/item:opacity-100 transition-opacity">{card.title}</div>
                 <div className="text-2xl md:text-3xl font-serif italic font-black mb-4 leading-none">{card.val}</div>
                 <p className="text-[11px] md:text-[12px] leading-relaxed opacity-60 font-light font-editorial group-hover/item:opacity-100 transition-opacity italic">"{card.desc}"</p>
              </div>
            ))}
         </div>

         <button 
           onClick={onProfileClick}
           className="group px-12 md:px-20 py-7 md:py-9 bg-white text-onyx-950 rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] hover:bg-brass-400 transition-all active:scale-95 flex items-center justify-center gap-6 shadow-premium"
         >
           Inspect Asset Ledger <ShieldCheck size={20} className="group-hover:rotate-12 transition-transform" />
         </button>
      </div>

      {/* Symmetry Markers */}
      <div className="absolute inset-y-0 left-1/4 w-px bg-white/5 hidden 2xl:block"></div>
      <div className="absolute inset-y-0 right-1/4 w-px bg-white/5 hidden 2xl:block"></div>
    </div>
  );
};

export default Snapshot;