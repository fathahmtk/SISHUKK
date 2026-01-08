
import React from 'react';
// Added ShieldCheck to the imported icons
import { Building2, Crown, TrendingUp, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';

const Snapshot: React.FC = () => {
  const cards = [
    {
      icon: <Building2 className="w-8 h-8 text-gold-500" />,
      title: "Landmark Asset",
      description: "Twin-tower symmetry connected by a monumental illuminated sky-arch. Designed as the primary visual beacon of Guruvayur.",
      metric: "75m Height"
    },
    {
      icon: <Crown className="w-8 h-8 text-gold-500" />,
      title: "Ultra-Luxury",
      description: "Boutique 7-star positioning. Event-led revenue model focusing on the premium UHNWI pilgrimage and wedding segment.",
      metric: "200 Keys"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gold-500" />,
      title: "Yield Velocity",
      description: "Structural year-round demand driven by spiritual heritage and the $50B Indian wedding industry.",
      metric: "24.2% IRR"
    },
    {
      icon: <MapPin className="w-8 h-8 text-gold-500" />,
      title: "Strategic Gap",
      description: "Zero comparable landmark inventory within a 5km radius of the Temple. High barrier to entry micro-market.",
      metric: "1.5km to Nada"
    }
  ];

  return (
    <section id="snapshot" className="py-40 bg-onyx-950 relative overflow-hidden">
      {/* Decorative background numbers */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden select-none">
        <div className="absolute -top-[10%] -left-[10%] text-white/[0.02] font-serif text-[40rem] font-black leading-none italic">SGT</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-end mb-32">
          <div className="max-w-4xl">
            <span className="text-gold-500 text-[11px] font-black uppercase tracking-[0.8em] block mb-10">Executive Memo</span>
            <h2 className="font-serif text-5xl md:text-8xl text-white mb-10 leading-[0.9] tracking-tighter italic">Asset <br/><span className="gold-gradient-text">DNA.</span></h2>
            <p className="text-slate-400 text-xl md:text-3xl font-light leading-relaxed border-l-2 border-gold-500/50 pl-10 max-w-3xl">
              SIRSHUKK is an institutional-grade financial instrument wrapped in ultra-luxury architecture. We capitalize on the recession-proof spiritual economy of South India.
            </p>
          </div>
          <div className="hidden lg:block pb-4">
             <div className="flex items-center gap-4 text-slate-500 text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/10 px-8 py-4 rounded-full">
                <span>Verified Asset Profile</span>
                <ShieldCheck size={16} className="text-gold-500" />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="group glass-card p-12 rounded-[3rem] hover:bg-gold-500/5 transition-all duration-700 flex flex-col justify-between h-[500px] border border-white/5 relative overflow-hidden"
            >
              {/* Subtle hover background glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold-500/5 blur-[100px] group-hover:bg-gold-500/10 transition-colors"></div>
              
              <div>
                <div className="mb-12 bg-onyx-950 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-all duration-700 border border-white/10 group-hover:border-gold-500 shadow-2xl">
                  {card.icon}
                </div>
                <h3 className="font-serif text-3xl text-white mb-6 group-hover:text-gold-400 transition-colors">{card.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed group-hover:text-slate-400 transition-colors duration-500">
                  {card.description}
                </p>
              </div>

              <div className="pt-10 mt-auto border-t border-white/5 flex items-center justify-between">
                 <div className="flex flex-col">
                    <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-1">Performance</span>
                    <span className="text-white font-mono text-xl">{card.metric}</span>
                 </div>
                 <div className="p-3 bg-white/5 rounded-xl text-slate-500 group-hover:text-gold-500 group-hover:bg-gold-500/10 transition-all">
                    <ArrowUpRight size={18} />
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
