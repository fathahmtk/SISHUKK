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
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-slate-950 overflow-hidden group">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            className="w-full h-full object-cover opacity-20 grayscale transition-transform duration-[20s] group-hover:scale-110" 
            alt="Physical Evidence" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_110%)]"></div>
      </div>

      {/* Telemetry HUD - Hidden on small screens */}
      <div className="absolute top-12 left-12 z-30 space-y-2 opacity-50 hidden md:block">
         <div className="flex items-center gap-3 text-gold-500 font-black text-[9px] uppercase tracking-[0.4em]">
            <Scan size={14} /> Evidence_Audit_v2.5
         </div>
         <div className="text-white text-[7px] font-mono opacity-60 uppercase tracking-widest">
            Identity: SGT_PHYS_2025_VERIFIED
         </div>
      </div>

      <div className="absolute bottom-12 right-12 z-30 text-right opacity-50 hidden md:block">
         <div className="text-gold-500 font-black text-[9px] uppercase tracking-[0.4em] mb-2">Ledger Synchronization</div>
         <div className="flex items-center justify-end gap-3 text-white text-[11px] font-black uppercase tracking-widest">
            <Activity size={14} className="text-emerald-500 animate-pulse" /> Status: Linked
         </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 text-center w-full max-w-7xl px-6 md:px-12 flex flex-col items-center">
         <span className="text-gold-500 text-[10px] md:text-[13px] font-black uppercase tracking-[1em] block mb-8 md:mb-14">
           Chapter 01 // Portfolio Intelligence
         </span>
         
         <h2 className="text-white font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.9] md:leading-[0.8] tracking-tighter italic font-black mb-12 md:mb-20">
           Physical <br/>
           <span className="gold-gradient-text not-italic">Evidence.</span>
         </h2>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full mb-12 md:mb-24 max-w-6xl">
            {cards.map((card, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] text-center group/item hover:bg-gold-500 hover:text-onyx-950 transition-all duration-500 hover:-translate-y-4 shadow-3xl">
                 <div className="mb-8 flex justify-center text-gold-500 group-hover/item:text-onyx-950 transition-colors duration-500">{card.icon}</div>
                 <div className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.4em] mb-3 opacity-50 group-hover/item:opacity-100 transition-opacity">{card.title}</div>
                 <div className="text-2xl md:text-3xl font-serif italic font-black mb-4 leading-none">{card.val}</div>
                 <p className="text-[10px] md:text-[11px] leading-relaxed opacity-60 font-light group-hover/item:opacity-90 transition-opacity">{card.desc}</p>
              </div>
            ))}
         </div>

         <button 
           onClick={onProfileClick}
           className="group px-12 md:px-20 py-8 md:py-10 bg-white text-onyx-950 rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] hover:bg-gold-500 hover:text-white transition-all active:scale-95 flex items-center justify-center gap-6 shadow-gold-glow"
         >
           Inspect Asset Ledger <ShieldCheck size={20} className="group-hover:rotate-12 transition-transform" />
         </button>
      </div>

      {/* Axis Symmetry lines */}
      <div className="absolute inset-y-0 left-1/4 w-[1px] bg-white/5 hidden 2xl:block"></div>
      <div className="absolute inset-y-0 right-1/4 w-[1px] bg-white/5 hidden 2xl:block"></div>
    </div>
  );
};

export default Snapshot;