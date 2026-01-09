import React from 'react';
import { Building2, Crown, TrendingUp, MapPin, ShieldCheck, Target, Activity, Layout, Layers, Scan } from 'lucide-react';

interface SnapshotProps {
  onProfileClick?: () => void;
}

const Snapshot: React.FC<SnapshotProps> = ({ onProfileClick }) => {
  const cards = [
    { icon: <Building2 size={16} />, title: "Asset Class", val: "Trophy Hub", desc: "Hospitality core serving non-seasonal ritual demand." },
    { icon: <Crown size={16} />, title: "Design Moat", val: "Visual Icon", desc: "Twin-tower skyline command creating immediate recall." },
    { icon: <TrendingUp size={16} />, title: "Yield Curve", val: "High Alpha", desc: "Diversified revenue verticals decoupled from market cycles." },
    { icon: <MapPin size={16} />, title: "Strategic Pin", val: "Nexus Site", desc: "South Nada corridor with 12M+ annual verified footfall." }
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

      {/* Telemetry HUD */}
      <div className="absolute top-12 left-12 z-10 space-y-2 opacity-40">
         <div className="flex items-center gap-3 text-gold-500 font-black text-[9px] uppercase tracking-[0.4em]">
            <Scan size={12} /> Evidence_Audit_01
         </div>
         <div className="text-white text-[7px] font-mono opacity-60 uppercase tracking-widest">
            Hash: SGT_PHYS_2025_VERIFIED
         </div>
      </div>

      <div className="absolute bottom-12 right-12 z-10 text-right opacity-40">
         <div className="text-gold-500 font-black text-[9px] uppercase tracking-[0.4em] mb-2">Ledger Synchronization</div>
         <div className="flex items-center justify-end gap-3 text-white text-[11px] font-black uppercase tracking-widest">
            <Activity size={14} className="text-emerald-500 animate-pulse" /> Data_Node: Connected
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl px-8 flex flex-col items-center">
         <span className="text-gold-500 text-[11px] md:text-[13px] font-black uppercase tracking-[1em] block mb-12">
           Chapter 00 // Portfolio Intelligence
         </span>
         
         <h2 className="text-white font-serif text-6xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter italic font-black mb-16">
           Physical <br/>
           <span className="gold-gradient-text not-italic">Evidence.</span>
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mb-20">
            {cards.map((card, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] text-center group/item hover:bg-gold-500 hover:text-onyx-950 transition-all duration-500 hover:-translate-y-4 shadow-2xl">
                 <div className="mb-8 flex justify-center text-gold-500 group-hover/item:text-onyx-950 transition-colors">{card.icon}</div>
                 <div className="text-[7px] font-black uppercase tracking-widest mb-2 opacity-50">{card.title}</div>
                 <div className="text-2xl font-serif italic font-black mb-4 leading-none">{card.val}</div>
                 <p className="text-[10px] leading-relaxed opacity-60 font-light">{card.desc}</p>
              </div>
            ))}
         </div>

         <button 
           onClick={onProfileClick}
           className="group px-14 py-7 bg-white text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 transition-all active:scale-95 flex items-center gap-5 shadow-gold-glow"
         >
           Inspect Asset Ledger <ShieldCheck size={18} className="group-hover:rotate-12 transition-transform" />
         </button>
      </div>

      {/* Vertical Axis lines */}
      <div className="absolute inset-y-0 left-1/4 w-px bg-white/5 hidden lg:block"></div>
      <div className="absolute inset-y-0 right-1/4 w-px bg-white/5 hidden lg:block"></div>
    </div>
  );
};

export default Snapshot;