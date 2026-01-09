import React, { useState } from 'react';
import { Crown, Globe, Zap, ShieldCheck, ArrowRight, TrendingUp, Gem, Activity, Target } from 'lucide-react';

const HIGHLIGHTS = [
  {
    id: 'h1',
    category: 'Architectural Alpha',
    title: 'Visual Monopoly',
    description: 'Standing as the tallest twin-tower structure in the district, SGT creates an instant geographic landmark. Architecture functions here as a passive revenue engine.',
    image: 'https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg',
    icon: Crown,
    stat: 'Landmark Status'
  },
  {
    id: 'h2',
    category: 'Market Arbitrage',
    title: 'The Supply Void',
    description: 'Capitalizing on the complete absence of branded 7-star inventory in a zone with 12M+ annual pilgrims. We capture the absolute top-tier NRI demographic.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80',
    icon: Globe,
    stat: 'First-Mover Moat'
  },
  {
    id: 'h3',
    category: 'Revenue Logic',
    title: 'Dual-Core Yield',
    description: 'A de-risked financial model splitting inventory between high-velocity pilgrim transit and high-margin ceremonial wedding groups.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80',
    icon: TrendingUp,
    stat: 'Diversified Risk'
  },
  {
    id: 'h4',
    category: 'Capital Security',
    title: 'Asset Sovereignty',
    description: 'Built on 100% owned freehold land with zero encumbrance, significantly reducing cost of capital and maximizing long-term equity IRR.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    icon: ShieldCheck,
    stat: 'Debt-Free Equity'
  }
];

const ProjectHighlights: React.FC = () => {
  const [activeId, setActiveId] = useState('h1');

  return (
    <section className="py-64 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-5">
              <div className="w-12 h-[1px] bg-gold-500"></div>
              <span className="text-gold-600 uppercase text-[10px] font-black tracking-[0.8em]">Investment Thesis</span>
            </div>
            <h2 className="text-slate-950 font-serif text-6xl md:text-9xl tracking-tighter mt-10 leading-[0.8] italic">
              The Alpha <br/><span className="gold-gradient-text not-italic font-black">Factors.</span>
            </h2>
          </div>
          <div className="lg:w-1/3 space-y-10">
            <p className="text-slate-500 text-2xl font-light leading-relaxed italic border-l-2 border-gold-400 pl-10">
              "Four structural pillars that separate SGT from regional inventory, creating an unassailable competitive moat."
            </p>
            <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-200">
               <Gem size={24} className="text-gold-500" />
               <span className="text-slate-950 text-[10px] font-black uppercase tracking-widest">Institutional Asset Class v2.5</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-[800px] lg:h-[750px] gap-6">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              onMouseEnter={() => setActiveId(item.id)}
              className={`relative rounded-[4.5rem] overflow-hidden cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] border ${
                activeId === item.id 
                  ? 'lg:flex-[3.5] flex-[3] shadow-3xl border-gold-500' 
                  : 'lg:flex-[0.8] flex-[1] grayscale opacity-50 hover:opacity-100 hover:grayscale-0 border-slate-200 hover:border-gold-300'
              }`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110 brightness-[1.05] contrast-[1.02]"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent transition-opacity duration-700 ${activeId === item.id ? 'opacity-50' : 'opacity-80'}`}></div>
              
              {/* Active State Content */}
              <div className={`absolute inset-0 p-12 flex flex-col justify-end transition-all duration-700 ${activeId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                 <div className="bg-white/95 backdrop-blur-3xl border border-white p-12 rounded-[3.5rem] shadow-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gold-500/10 to-transparent pointer-events-none"></div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-10">
                         <div className="w-16 h-16 rounded-2xl bg-slate-950 flex items-center justify-center text-gold-500 shadow-2xl">
                            <item.icon size={32} />
                         </div>
                         <div className="flex items-center gap-3 px-5 py-2 bg-slate-50 rounded-full border border-slate-100">
                            <span className="text-gold-600 text-[10px] font-black uppercase tracking-widest">{item.stat}</span>
                            <ShieldCheck size={12} className="text-gold-500" />
                         </div>
                      </div>
                      
                      <div className="mb-8">
                         <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] block mb-4">{item.category}</span>
                         <h3 className="text-slate-950 font-serif text-5xl leading-tight italic">{item.title}</h3>
                      </div>
                      
                      <p className="text-slate-500 text-lg font-light leading-relaxed mb-10 border-l-2 border-gold-400 pl-8 italic">
                         {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                         <span className="text-slate-300 text-[9px] font-black uppercase tracking-widest">Technical Annexure Logged</span>
                         <button className="flex items-center gap-4 text-slate-950 text-[10px] font-black uppercase tracking-widest group/btn hover:text-gold-600 transition-colors">
                            Portfolio <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                         </button>
                      </div>
                    </div>
                 </div>
              </div>

              {/* Inactive State Label (Vertical) */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${activeId === item.id ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                 <h3 className="hidden lg:block -rotate-90 text-white font-serif text-4xl tracking-widest whitespace-nowrap opacity-60 drop-shadow-2xl font-black italic">{item.category}</h3>
                 <div className="lg:hidden absolute bottom-12 left-12">
                    <span className="text-gold-400 text-[10px] font-black uppercase tracking-widest block mb-2">{item.category}</span>
                    <h3 className="text-white font-serif text-3xl italic">{item.title}</h3>
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