import React, { useState } from 'react';
import { Crown, Globe, Zap, ShieldCheck, ArrowRight, TrendingUp, Gem } from 'lucide-react';

const HIGHLIGHTS = [
  {
    id: 'h1',
    category: 'Architectural Alpha',
    title: 'Visual Monopoly',
    description: 'Standing as the tallest twin-tower structure in the district, Sirshukk creates an instant geographic landmark. This is not just visibility; it is dominance.',
    image: 'https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg',
    icon: Crown,
    stat: 'Landmark Status'
  },
  {
    id: 'h2',
    category: 'Market Arbitrage',
    title: 'The Supply Void',
    description: 'Capitalizing on the complete absence of branded 7-star inventory in a zone with 12M+ annual high-net-worth pilgrims. We are the only option for the elite.',
    image: 'https://cdn-imgix.headout.com/tour/34223/TOUR-IMAGE/95a3df68-963d-4966-980b-2223b2909a37-1647432002221.jpg',
    icon: Globe,
    stat: 'First-Mover'
  },
  {
    id: 'h3',
    category: 'Revenue Engineering',
    title: 'Dual-Core Yield',
    description: 'A de-risked financial model splitting inventory between high-velocity pilgrim transit (Tower A) and long-stay wedding groups (Tower B).',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80',
    icon: TrendingUp,
    stat: 'Diversified Risk'
  },
  {
    id: 'h4',
    category: 'Capital Security',
    title: 'Asset Sovereignty',
    description: 'Built on 100% owned freehold land with zero encumbrance, significantly reducing the project finance burden and maximizing equity IRR.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    icon: ShieldCheck,
    stat: 'Debt-Free Land'
  }
];

const ProjectHighlights: React.FC = () => {
  const [activeId, setActiveId] = useState('h1');

  return (
    <section className="py-40 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-3xl">
            <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.8em] block mb-6">Investment Thesis</span>
            <h2 className="text-onyx-950 font-serif text-5xl md:text-7xl tracking-tighter mb-8 leading-[0.9]">
              The Alpha <br/><span className="text-gold-500 italic">Factors.</span>
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed max-w-xl">
              Four structural pillars that separate Sirshukk Grand Towers from regional inventory, creating an unassailable competitive moat.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-4 bg-white px-8 py-4 rounded-full border border-slate-200 shadow-xl">
             <Gem size={18} className="text-gold-500" />
             <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Institutional Grade Asset</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-[800px] lg:h-[650px] gap-6">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              onMouseEnter={() => setActiveId(item.id)}
              className={`relative rounded-[3rem] overflow-hidden cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] border ${
                activeId === item.id 
                  ? 'lg:flex-[3.5] flex-[3] shadow-[0_30px_60px_rgba(0,0,0,0.2)] border-gold-500' 
                  : 'lg:flex-[0.8] flex-[1] grayscale hover:grayscale-0 border-slate-200 hover:border-gold-500/50'
              }`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-onyx-950/80 via-onyx-950/20 to-transparent transition-opacity duration-700 ${activeId === item.id ? 'opacity-40' : 'opacity-60'}`}></div>
              
              {/* Active State Content - Light Card */}
              <div className={`absolute inset-0 p-10 flex flex-col justify-end transition-all duration-700 ${activeId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                 <div className="bg-white/95 backdrop-blur-xl border border-white/40 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                    {/* Decorative Shine */}
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gold-500/10 to-transparent pointer-events-none"></div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                         <div className="w-14 h-14 rounded-2xl bg-gold-500 flex items-center justify-center text-white shadow-lg shadow-gold-500/30">
                            <item.icon size={28} />
                         </div>
                         <div className="px-4 py-2 bg-slate-100 rounded-full border border-slate-200">
                            <span className="text-gold-600 text-[9px] font-black uppercase tracking-widest">{item.stat}</span>
                         </div>
                      </div>
                      
                      <div className="mb-6">
                         <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] block mb-3">{item.category}</span>
                         <h3 className="text-onyx-950 font-serif text-4xl leading-tight">{item.title}</h3>
                      </div>
                      
                      <p className="text-slate-600 text-sm leading-relaxed mb-8 border-l-2 border-gold-500/50 pl-4 font-medium">
                         {item.description}
                      </p>
                      
                      <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-onyx-950 group-hover:text-gold-600 transition-colors">
                         Full Analysis <ArrowRight size={14} />
                      </div>
                    </div>
                 </div>
              </div>

              {/* Inactive State Content (Vertical Label) */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${activeId === item.id ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                 <h3 className="hidden lg:block -rotate-90 text-white font-serif text-3xl tracking-wider whitespace-nowrap opacity-90 drop-shadow-lg">{item.category}</h3>
                 <div className="lg:hidden absolute bottom-10 left-10">
                    <span className="text-gold-400 text-[9px] font-black uppercase tracking-widest block mb-1">{item.category}</span>
                    <h3 className="text-white font-serif text-2xl">{item.title}</h3>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;