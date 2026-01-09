import React from 'react';
import { Building2, Crown, TrendingUp, MapPin, ShieldCheck, Search, ArrowRight, Layout } from 'lucide-react';

interface SnapshotProps {
  onProfileClick?: () => void;
}

const Snapshot: React.FC<SnapshotProps> = ({ onProfileClick }) => {
  const cards = [
    {
      icon: <Building2 size={24} />,
      title: "Asset Class",
      val: "Landmark Hub",
      desc: "Iconic hospitality core serving high-frequency ritual demand."
    },
    {
      icon: <Crown size={24} />,
      title: "Design Value",
      val: "Visual Icon",
      desc: "Twin-tower symmetry creating unassailable skyline command."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Yield Vector",
      val: "High Alpha",
      desc: "Diversified revenue decoupled from simple occupancy cycles."
    },
    {
      icon: <MapPin size={24} />,
      title: "Strategic Pin",
      val: "Nexus Site",
      desc: "Prime South Nada positioning in the 12M+ pilgrim corridor."
    }
  ];

  return (
    <section className="py-48 bg-white relative overflow-hidden">
      {/* Decorative Branding */}
      <div className="absolute top-[10%] left-[-5%] text-slate-100 font-serif text-[45rem] font-black italic leading-none select-none pointer-events-none opacity-40">01</div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-32">
          
          <div className="lg:col-span-6 space-y-12">
            <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-200 bg-gold-50/50 rounded-full">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              <span className="text-gold-600 uppercase text-[10px] font-black tracking-[0.5em]">Phase 1: Institutional Snapshot</span>
            </div>
            <h2 className="text-slate-950 font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.8] tracking-tighter italic">
              Physical <br/><span className="gold-gradient-text italic font-black">Evidence.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-slate-500 text-2xl font-light leading-relaxed mb-12 border-l-2 border-gold-400 pl-10">
              SIRSHUKK is not a standard hospitality asset. It is an engineering marvel designed to function as a <strong>revenue-generating landmark</strong> for the next 50 years.
            </p>
            <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:border-gold-300 transition-all cursor-pointer shadow-sm" onClick={onProfileClick}>
               <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-gold-600 shadow-sm group-hover:bg-gold-500 group-hover:text-white transition-all">
                  <ShieldCheck size={28} />
               </div>
               <div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Audit Verification</div>
                  <div className="text-slate-950 font-bold uppercase tracking-widest text-sm">Institutional Grade Asset v2.5</div>
               </div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="group p-12 bg-[#FDFBF7] border border-slate-200 rounded-[3.5rem] flex flex-col justify-between h-[520px] transition-all duration-700 hover:bg-white hover:border-gold-400 hover:shadow-3xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <Layout size={150} className="text-slate-950" />
               </div>
               
               <div>
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-gold-600 mb-12 shadow-sm group-hover:bg-gold-500 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                     {card.icon}
                  </div>
                  <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">{card.title}</span>
                  <h3 className="text-slate-950 font-serif text-4xl mb-6 italic leading-none">{card.val}</h3>
                  <p className="text-slate-400 text-base font-light leading-relaxed group-hover:text-slate-600 transition-colors">
                    {card.desc}
                  </p>
               </div>

               <div className="pt-8 border-t border-slate-100 mt-auto flex items-center justify-between opacity-40 group-hover:opacity-100 transition-all">
                  <span className="text-[8px] font-black uppercase tracking-[0.5em] text-slate-400">Technical Audit</span>
                  <Search size={16} className="text-gold-600 group-hover:translate-x-1 transition-transform" />
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Snapshot;