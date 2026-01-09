import React, { useState, useEffect } from 'react';
import { Scan, Eye, Crown, Target, MousePointer2, Maximize, PlayCircle, Info, ShieldCheck, Ruler, ArrowUpRight } from 'lucide-react';

const VisualMonopoly: React.FC = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  const points = [
    {
      id: 1,
      x: '50%',
      y: '40%',
      label: 'Structural Axis',
      title: 'The Meridian Arch',
      desc: 'Steel truss system bridging twin cores at Level 15. A non-replicable geometric USP.',
      metric: 'Lvl 15 Link'
    },
    {
      id: 2,
      x: '30%',
      y: '65%',
      label: 'Tower A Symmetry',
      title: 'Vertical Core',
      desc: 'Reinforced cylindrical RC structure de-risked for Seismic Zone IV.',
      metric: 'G+20 High-Rise'
    },
    {
      id: 3,
      x: '70%',
      y: '65%',
      label: 'Skyline Authority',
      title: 'Monopoly Silhouette',
      desc: 'Unobstructed height command ensuring consistent regional visual dominance.',
      metric: '75.0m Apex'
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-[#05070A] overflow-hidden group">
      
      {/* Full-Screen Render Background */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            className="w-full h-full object-cover opacity-30 brightness-[0.5] transition-transform duration-[20s] group-hover:scale-105" 
            alt="Asset Silhouette" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-transparent to-onyx-950"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#05070A_110%)]"></div>
      </div>

      {/* Report HUD Terminals */}
      <div className="absolute top-10 left-8 md:top-14 md:left-14 z-30 opacity-40">
         <div className="flex items-center gap-5 text-brass-200 font-black text-[10px] uppercase tracking-[0.5em]">
            <Scan size={18} className="animate-pulse" /> Silhouette_Scan_v2.5
         </div>
         <div className="text-white text-[8px] font-mono opacity-50 uppercase tracking-widest mt-2">
            Asset_ID: SGT_MASTER_PLAN_2025
         </div>
      </div>

      {/* Main Narrative Overlay */}
      <div className="relative z-10 text-center w-full max-w-7xl px-8 flex flex-col items-center">
         <span className="text-brass-400 text-[11px] md:text-[14px] font-black uppercase tracking-[1.2em] block mb-10 md:mb-20">
           Section 02 // Silhouette Evidence
         </span>
         
         <h2 className="text-white font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.85] md:leading-[0.8] tracking-tighter italic font-black mb-16 md:mb-28">
           Visual <br/>
           <span className="gold-gradient-text not-italic">Monopoly.</span>
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-6xl">
            {points.map((p, i) => (
              <div 
                key={p.id} 
                className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-14 rounded-[3rem] text-left group/card hover:border-brass-400 transition-all duration-700 shadow-premium"
                onMouseEnter={() => setActivePoint(p.id)}
                onMouseLeave={() => setActivePoint(null)}
              >
                 <div className="flex justify-between items-start mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-onyx-950 flex items-center justify-center text-brass-400 shadow-premium group-hover/card:bg-brass-400 group-hover/card:text-onyx-950 transition-all duration-500">
                       <Ruler size={24} />
                    </div>
                    <span className="text-brass-200 font-mono text-[10px] font-bold opacity-30">{p.metric}</span>
                 </div>
                 <h4 className="text-white text-[9px] font-black uppercase tracking-widest mb-4 opacity-50 group-hover/card:opacity-100 transition-opacity">{p.label}</h4>
                 <h3 className="text-white font-serif text-3xl md:text-4xl italic font-black mb-4 leading-none">{p.title}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed font-light italic opacity-60 group-hover/card:opacity-100 transition-opacity">"{p.desc}"</p>
              </div>
            ))}
         </div>
      </div>

      {/* Technical HUD Grid Layer */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#C5A059 1px, transparent 1px), linear-gradient(90deg, #C5A059 1px, transparent 1px)', backgroundSize: '120px 120px' }}></div>
    </div>
  );
};

export default VisualMonopoly;