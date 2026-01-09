import React, { useState } from 'react';
import { Scan, Eye, Crown, Target, MousePointer2, Maximize } from 'lucide-react';

const VisualMonopoly: React.FC = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  const points = [
    {
      id: 1,
      x: '50%',
      y: '40%',
      label: 'The Central Arch',
      title: 'Structural Scarcity',
      desc: 'The defining silhouette. Impossible to replicate in dense urban grids, creating an immediate geographic monopoly and brand recall.',
      icon: Crown
    },
    {
      id: 2,
      x: '28%',
      y: '60%',
      label: 'Tower A: Symmetry',
      title: 'Visual Balance',
      desc: 'Psychological appeal of vertical symmetry drives higher perceived luxury value and dominance in the skyline.',
      icon: Eye
    },
    {
      id: 3,
      x: '72%',
      y: '60%',
      label: 'Tower B: Dominance',
      title: 'Skyline Command',
      desc: 'Unobstructed height dominance ensures the asset is the primary visual anchor for the entire Guruvayur district.',
      icon: Target
    }
  ];

  return (
    <section className="py-32 bg-onyx-950 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.6em] block mb-6">Strategic Moat</span>
          <h2 className="text-white font-serif text-5xl md:text-7xl leading-[0.9] tracking-tighter italic mb-8">
            The Visual <br/><span className="gold-gradient-text font-black not-italic">Monopoly.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            How architectural geometry creates an unassailable competitive advantage. <br/>
            <span className="text-gold-500 font-bold text-xs uppercase tracking-widest mt-4 inline-block animate-pulse">
              <MousePointer2 className="inline mr-2" size={12} /> Interact with the Scan
            </span>
          </p>
        </div>

        <div className="relative w-full h-[700px] md:h-[800px] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] group select-none bg-onyx-900">
          {/* Main Image */}
          <img 
            src="https://lh3.googleusercontent.com/pw/AP1GczPXEdEgvGM6pr_-8W5dA2gc2LxocofZCQLAKsY0K47aKSWXDHrvok954L5OCt6vV4IBUjUraysnSFTbajD9R9d3QB5LWWiLIQoiTiEZuMrYgLpbnl6b4IAqNx3-PLMXum_O7VvVt2e0Fvg_wJg07ttSUw=w1319-h879-s-no-gm?authuser=0" 
            className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105 brightness-[0.5] group-hover:brightness-[0.6]"
            alt="Visual Monopoly Architecture" 
          />
          
          {/* Scanning Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-onyx-950/80 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gold-500/50 shadow-[0_0_40px_#D4AF37] animate-[scan_6s_linear_infinite]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-20"></div>

          {/* Interactive Points */}
          {points.map((p) => (
            <div 
              key={p.id}
              className="absolute z-20 cursor-pointer group/point"
              style={{ top: p.y, left: p.x, transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => setActivePoint(p.id)}
              onMouseLeave={() => setActivePoint(null)}
            >
              {/* Pulse Ring */}
              <div className={`absolute inset-0 rounded-full border border-gold-500/50 ${activePoint === p.id ? 'animate-ping' : 'animate-none'} opacity-50`}></div>
              
              {/* Core Dot */}
              <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${activePoint === p.id ? 'bg-gold-500 border-gold-500 scale-125' : 'bg-onyx-950/60 border-white/50 hover:bg-gold-500 hover:border-gold-500'}`}>
                <div className={`w-2 h-2 rounded-full ${activePoint === p.id ? 'bg-onyx-950' : 'bg-white'}`}></div>
              </div>

              {/* Label Tag (Always Visible) */}
              <div className={`absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${activePoint === p.id ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                <span className="bg-onyx-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-widest text-white shadow-xl flex items-center gap-2">
                  <Maximize size={10} className="text-gold-500" /> {p.label}
                </span>
              </div>
            </div>
          ))}

          {/* Info Card Overlay */}
          <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-onyx-900/90 backdrop-blur-2xl border border-gold-500/30 p-10 rounded-[2rem] shadow-3xl transition-all duration-500 ${activePoint ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
            {activePoint && (() => {
              const activeData = points.find(p => p.id === activePoint);
              if (!activeData) return null;
              return (
                <div className="flex gap-8 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-gold-500 flex items-center justify-center text-onyx-950 shrink-0 shadow-2xl">
                    <activeData.icon size={32} />
                  </div>
                  <div>
                    <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-2">{activeData.label}</span>
                    <h3 className="text-white font-serif text-3xl italic mb-4">{activeData.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{activeData.desc}</p>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Static HUD Elements */}
          <div className="absolute top-12 right-12 flex items-center gap-3 opacity-60">
             <Scan size={16} className="text-gold-500 animate-pulse" />
             <span className="text-white text-[10px] font-mono uppercase tracking-widest">Architectural Scan: Active</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default VisualMonopoly;