import React, { useState } from 'react';
import { Crown, Globe, Zap, ShieldCheck, ArrowRight, TrendingUp, Gem } from 'lucide-react';

const HIGHLIGHTS = [
  {
    id: 'h1',
    category: 'Architectural Alpha',
    title: 'Visual Monopoly',
    description: 'Tallest twin-tower structure in the district. Architecture functions as a passive revenue engine.',
    image: 'https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg',
    icon: Crown,
    stat: 'Landmark Status'
  },
  {
    id: 'h2',
    category: 'Market Arbitrage',
    title: 'The Supply Void',
    description: 'Complete absence of branded 7-star inventory in a zone with 12M+ annual pilgrims.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80',
    icon: Globe,
    stat: 'First-Mover Moat'
  },
  {
    id: 'h3',
    category: 'Revenue Logic',
    title: 'Dual-Core Yield',
    description: 'De-risked model splitting inventory between pilgrim transit and high-margin ceremonial weddings.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80',
    icon: TrendingUp,
    stat: 'Diversified Risk'
  },
  {
    id: 'h4',
    category: 'Capital Security',
    title: 'Asset Sovereignty',
    description: '100% owned freehold land with zero encumbrance, maximizing long-term equity IRR.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    icon: ShieldCheck,
    stat: 'Debt-Free Equity'
  }
];

const ProjectHighlights: React.FC = () => {
  const [activeId, setActiveId] = useState('h1');

  return (
    <section className="py-12 bg-white relative h-full flex flex-col justify-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-5">
              <div className="w-12 h-[1px] bg-gold-500"></div>
              <span className="text-gold-600 uppercase text-[9px] font-black tracking-[0.6em]">Investment Thesis</span>
            </div>
            <h2 className="text-slate-950 font-serif text-4xl md:text-7xl tracking-tighter mt-4 leading-none italic">
              The Alpha <span className="gold-gradient-text not-italic font-black">Factors.</span>
            </h2>
          </div>
          <div className="lg:w-1/3 flex items-center gap-6 p-4 bg-slate-50 rounded-2xl border border-slate-200">
             <Gem size={18} className="text-gold-500" />
             <span className="text-slate-950 text-[9px] font-black uppercase tracking-widest">Institutional Asset Class v2.5</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-[55vh] gap-4">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              onMouseEnter={() => setActiveId(item.id)}
              className={`relative rounded-[3rem] overflow-hidden cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] border ${
                activeId === item.id 
                  ? 'lg:flex-[4] flex-[3] shadow-2xl border-gold-500' 
                  : 'lg:flex-[1] flex-[1] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 border-slate-100'
              }`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] brightness-[1.05]"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent transition-opacity duration-700 ${activeId === item.id ? 'opacity-30' : 'opacity-70'}`}></div>
              
              <div className={`absolute inset-0 p-8 flex flex-col justify-end transition-all duration-700 ${activeId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                 <div className="bg-white/95 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                    <div className="flex justify-between items-start mb-6">
                       <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-gold-500">
                          <item.icon size={20} />
                       </div>
                       <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
                          <span className="text-gold-600 text-[8px] font-black uppercase tracking-widest">{item.stat}</span>
                       </div>
                    </div>
                    <h3 className="text-slate-950 font-serif text-3xl mb-3 italic">{item.title}</h3>
                    <p className="text-slate-500 text-sm font-light leading-relaxed border-l-2 border-gold-400 pl-6 italic">
                       {item.description}
                    </p>
                 </div>
              </div>

              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${activeId === item.id ? 'opacity-0' : 'opacity-100'}`}>
                 <h3 className="hidden lg:block -rotate-90 text-white font-serif text-2xl tracking-widest whitespace-nowrap opacity-60 font-black italic">{item.category}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;