import React from 'react';
import { Building2, Crown, TrendingUp, MapPin, ShieldCheck, Activity, Scan, BookOpen } from 'lucide-react';

interface SnapshotProps {
  onProfileClick?: () => void;
}

const Snapshot: React.FC<SnapshotProps> = ({ onProfileClick }) => {
  const cards = [
    { icon: <Building2 size={24} />, title: "Project Class", val: "Sky-Rise Trophy", desc: "A definitive landmark designed for non-seasonal ritual high-traffic." },
    { icon: <Crown size={24} />, title: "Design Moat", val: "Cylindrical Twin", desc: "Twin-tower symmetry creating immediate geographic monopoly." },
    { icon: <TrendingUp size={24} />, title: "Project Status", val: "Phase II Active", desc: "Current construction tracking 42.5% ahead of regional cycles." },
    { icon: <MapPin size={24} />, title: "Core Context", val: "Nexus Site", desc: "Absolute center-point of Guruvayur's primary spiritual corridor." }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-[#05070A] overflow-hidden group">
      
      {/* Background Rendering Inclusion */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            className="w-full h-full object-cover opacity-30 saturate-0 transition-transform duration-[20s] group-hover:scale-105" 
            alt="Tower Evidence" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-onyx-950/20 to-onyx-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#05070A_110%)]"></div>
      </div>

      {/* Technical HUD Marker */}
      <div className="absolute top-10 left-8 md:top-14 md:left-14 z-30 opacity-40">
         <div className="flex items-center gap-5 text-brass-200 font-black text-[10px] uppercase tracking-[0.5em]">
            <Scan size={18} className="animate-pulse" /> Physical_Evidence_Scan
         </div>
         <div className="text-white text-[8px] font-mono opacity-50 uppercase tracking-widest mt-2">
            Asset_Ref: SGT_RECORD_2025_VERIFIED
         </div>
      </div>

      <div className="relative z-10 text-center w-full max-w-7xl px-8 flex flex-col items-center">
         <span className="text-brass-400 text-[11px] md:text-[14px] font-black uppercase tracking-[1.4em] block mb-10 md:mb-16">
           Section 01 // Physical Evidence
         </span>
         
         <h2 className="text-white font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.85] md:leading-[0.8] tracking-tighter italic font-black mb-14 md:mb-24">
           Architectural <br/>
           <span className="gold-gradient-text not-italic">Monograph.</span>
         </h2>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mb-16 md:mb-28 max-w-6xl">
            {cards.map((card, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[3.5rem] text-center group/item hover:bg-brass-400 hover:text-onyx-950 transition-all duration-700 hover:-translate-y-4 shadow-premium relative overflow-hidden">
                 <div className="mb-10 flex justify-center text-brass-400 group-hover/item:text-onyx-950 transition-colors duration-500">{card.icon}</div>
                 <div className="text-[8px] font-black uppercase tracking-[0.5em] mb-4 opacity-40 group-hover/item:opacity-100 transition-opacity">{card.title}</div>
                 <div className="text-2xl md:text-3xl font-serif italic font-black mb-4 leading-none">{card.val}</div>
                 <p className="text-[12px] leading-relaxed opacity-50 font-light font-editorial group-hover/item:opacity-100 transition-opacity italic">"{card.desc}"</p>
                 <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-brass-400/20 group-hover:border-onyx-950/40 transition-colors"></div>
              </div>
            ))}
         </div>

         <button 
           onClick={onProfileClick}
           className="group px-14 py-8 bg-white text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.5em] hover:bg-brass-400 transition-all active:scale-95 flex items-center justify-center gap-8 shadow-premium"
         >
           Examine Project Ledger <BookOpen size={20} className="group-hover:scale-110 transition-transform" />
         </button>
      </div>
    </div>
  );
};

export default Snapshot;