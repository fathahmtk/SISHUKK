import React from 'react';
import { Building2, Crown, TrendingUp, MapPin, ArrowUpRight, ShieldCheck, Search } from 'lucide-react';

interface SnapshotProps {
  onProfileClick?: () => void;
}

const Snapshot: React.FC<SnapshotProps> = ({ onProfileClick }) => {
  const cards = [
    {
      icon: <Building2 className="w-8 h-8 text-gold-300" />,
      title: "Landmark Presence",
      description: "Twin-tower symmetry connected by a monumental sky-arch. A beacon of modern architectural sovereignty in Guruvayur.",
      metric: "75m Height"
    },
    {
      icon: <Crown className="w-8 h-8 text-gold-300" />,
      title: "Sovereign Luxury",
      description: "A 5-star experiential standard. Pure vegetarian service honoring sacred traditions. Two distinct towers for hospitality and events.",
      metric: "420 Keys"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gold-300" />,
      title: "Yield Velocity",
      description: "Structural demand driven by India's spiritual economy and the region's 250 daily weddings.",
      metric: "24.2% IRR"
    },
    {
      icon: <MapPin className="w-8 h-8 text-gold-300" />,
      title: "Strategic Moat",
      description: "No existing five-star hotels in the vicinity. Sirshukk fulfills a significant market gap for local and NRI clientele.",
      metric: "1.5km to Nada"
    }
  ];

  return (
    <section id="snapshot" className="py-40 bg-onyx-950 relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute -top-[10%] -left-[10%] text-white/[0.03] font-serif text-[40rem] font-black leading-none italic pointer-events-none select-none">DNA</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-end mb-32 reveal-on-scroll">
          <div className="max-w-4xl">
            <span className="text-gold-400 text-[11px] font-black uppercase tracking-[0.8em] block mb-8">Executive Snapshot</span>
            <h2 className="font-serif text-5xl md:text-8xl text-white mb-10 leading-[0.9] tracking-tighter italic">
              The <span className="gold-gradient-text">Thesis.</span>
            </h2>
            <p className="text-slate-400 text-xl md:text-3xl font-light leading-relaxed border-l-2 border-gold-500/40 pl-10 max-w-2xl">
              SIRSHUKK is a world-class hospitality project blending spirituality with luxury, honoring the traditions of Guruvayur while delivering high-velocity yield.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-slate-500 text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/10 px-8 py-5 rounded-full mb-4 backdrop-blur-sm cursor-pointer hover:bg-gold-500/10 transition-colors group" onClick={onProfileClick}>
             <span>Verified Institutional Asset</span>
             <ShieldCheck size={16} className="text-gold-400 group-hover:scale-125 transition-transform" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              onClick={onProfileClick}
              className="group glass-panel p-12 rounded-[2.5rem] hover:bg-gold-500/10 transition-all duration-700 flex flex-col justify-between h-[520px] border border-white/5 relative overflow-hidden reveal-on-scroll cursor-pointer active:scale-95"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold-500/5 blur-[100px] group-hover:bg-gold-500/20 transition-colors"></div>
              
              {/* Scan effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div>
                <div className="mb-12 bg-onyx-900 w-20 h-20 flex items-center justify-center rounded-2xl border border-white/10 group-hover:border-gold-400/50 shadow-2xl transition-all duration-500">
                  {card.icon}
                </div>
                <h3 className="font-serif text-3xl text-white mb-6 group-hover:text-gold-300 transition-colors">{card.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-500">
                  {card.description}
                </p>
              </div>

              <div className="pt-10 mt-auto border-t border-white/10 flex items-center justify-between">
                 <div>
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1 block">Yield Driver</span>
                    <span className="text-white font-mono text-xl">{card.metric}</span>
                 </div>
                 <div className="p-4 bg-white/5 rounded-xl text-slate-400 group-hover:text-gold-400 group-hover:bg-gold-500/10 transition-all">
                    <Search size={20} />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Snapshot;