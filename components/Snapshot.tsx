import React from 'react';
import { Building2, Crown, TrendingUp, MapPin, ShieldCheck, Target, Activity, Layout, Layers } from 'lucide-react';

interface SnapshotProps {
  onProfileClick?: () => void;
}

const Snapshot: React.FC<SnapshotProps> = ({ onProfileClick }) => {
  const cards = [
    { icon: <Building2 size={24} />, title: "Asset Class", val: "Trophy Hub", desc: "Hospitality core serving non-seasonal ritual demand with structural monopoly." },
    { icon: <Crown size={24} />, title: "Design Moat", val: "Visual Icon", desc: "Twin-tower skyline command creating immediate region-wide brand recall." },
    { icon: <TrendingUp size={24} />, title: "Yield Curve", val: "High Alpha", desc: "Diversified revenue verticals decoupled from traditional market cycles." },
    { icon: <MapPin size={24} />, title: "Strategic Pin", val: "Nexus Site", desc: "South Nada corridor positioning with 12M+ annual verified footfall." }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center py-32 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-[10%] left-[-8%] text-onyx-900/5 font-serif text-[50rem] font-black italic pointer-events-none select-none">S</div>
      
      <div className="container mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-end mb-32">
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-6">
              <div className="w-16 h-[1.5px] bg-gold-500 shadow-gold-glow"></div>
              <span className="text-gold-600 uppercase text-[10px] font-black tracking-[0.8em]">Phase 01: Portfolio Intelligence</span>
            </div>
            <h2 className="text-slate-950 font-serif text-6xl md:text-[9rem] leading-[0.75] tracking-tighter italic">
              Physical <br/><span className="gold-gradient-text italic font-black">Evidence.</span>
            </h2>
            <p className="text-slate-500 text-3xl font-editorial italic leading-tight max-w-2xl border-l-2 border-gold-400/50 pl-12 py-4">
              "SIRSHUKK is an engineering prototype designed as a high-yield revenue engine for the next half-century. Every square foot is audited for commercial velocity."
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col items-end">
            <div 
              className="w-full p-10 bg-white border border-slate-200 rounded-[3rem] group hover:border-gold-500 transition-all cursor-pointer shadow-3xl relative overflow-hidden" 
              onClick={onProfileClick}
            >
               <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="flex items-center gap-8 relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-onyx-950 flex items-center justify-center text-gold-500 shadow-2xl group-hover:scale-105 transition-transform duration-700">
                    <ShieldCheck size={36} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">Security Hash Verification</div>
                    <div className="text-slate-950 font-black uppercase tracking-[0.2em] text-sm">Asset Ledger v2.5 Synchronized</div>
                  </div>
                  <Activity size={20} className="text-gold-500 animate-pulse" />
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="group p-12 bg-white border border-slate-100 rounded-[4rem] flex flex-col justify-between h-[520px] transition-all duration-700 hover:border-gold-400 hover:shadow-gold-glow relative overflow-hidden hover:-translate-y-4"
            >
               <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none duration-1000">
                  <Layers size={300} className="text-onyx-950" />
               </div>
               
               <div>
                  <div className="w-16 h-16 rounded-3xl bg-[#FDFBF7] border border-slate-100 flex items-center justify-center text-gold-600 mb-12 shadow-sm group-hover:bg-onyx-950 group-hover:text-white transition-all">
                     {card.icon}
                  </div>
                  <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] mb-6 block italic">{card.title}</span>
                  <h3 className="text-slate-950 font-serif text-5xl mb-8 italic font-black leading-none">{card.val}</h3>
                  <p className="text-slate-500 text-lg font-editorial italic leading-relaxed group-hover:text-slate-900 transition-colors">
                    {card.desc}
                  </p>
               </div>
               
               <div className="pt-10 border-t border-slate-50 mt-auto flex items-center justify-between opacity-30 group-hover:opacity-100 transition-all duration-700">
                  <span className="text-[8px] font-mono font-black uppercase tracking-widest text-slate-400">NODE_VERIFY_SUCCESS</span>
                  <Target size={18} className="text-gold-600" />
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Snapshot;