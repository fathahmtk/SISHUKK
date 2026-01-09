import React, { useState, useEffect } from 'react';
import { Scan, Eye, Crown, Target, MousePointer2, Maximize, PlayCircle } from 'lucide-react';

const VisualMonopoly: React.FC = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const [isTouring, setIsTouring] = useState(false);

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

  useEffect(() => {
    let timeout: number;
    if (isTouring && activePoint !== null) {
      const currentIndex = points.findIndex(p => p.id === activePoint);
      
      timeout = window.setTimeout(() => {
        if (currentIndex < points.length - 1) {
          setActivePoint(points[currentIndex + 1].id);
        } else {
          setIsTouring(false);
          setActivePoint(null);
        }
      }, 4500);
    }
    return () => clearTimeout(timeout);
  }, [activePoint, isTouring, points]);

  const startTour = () => {
    if (isTouring) return;
    setActivePoint(points[0].id);
    setIsTouring(true);
  };

  return (
    <section className="py-48 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-[10%] right-[-5%] text-slate-50 font-serif text-[45rem] font-black italic leading-none select-none pointer-events-none opacity-60">V</div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-32 text-center max-w-4xl mx-auto">
          <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.8em] block mb-10">Strategic Moat: Anatomy</span>
          <h2 className="text-slate-950 font-serif text-6xl md:text-9xl leading-[0.8] tracking-tighter italic mb-12">
            Visual <br/><span className="gold-gradient-text font-black not-italic italic">Monopoly.</span>
          </h2>
          <p className="text-slate-500 text-2xl font-light leading-relaxed mb-16 italic border-x-2 border-gold-200 px-12">
            "How architectural geometry functions as a regional commercial moat."
          </p>
          
          <div className="flex flex-col items-center gap-8">
             <button 
                onClick={startTour}
                disabled={isTouring}
                className={`group px-16 py-8 rounded-full font-black uppercase tracking-[0.5em] text-[11px] flex items-center gap-6 transition-all shadow-3xl ${isTouring ? 'bg-slate-100 text-gold-600 border border-gold-300' : 'bg-slate-950 text-white hover:bg-gold-500 active:scale-95'}`}
             >
                {isTouring ? (
                  <>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-600"></span>
                    </span>
                    Tour Logic Active
                  </>
                ) : (
                  <>
                    <PlayCircle size={20} className="group-hover:scale-125 transition-transform" /> Initialize Structural Audit
                  </>
                )}
             </button>
             
             {!isTouring && (
               <span className="text-slate-300 font-bold text-[9px] uppercase tracking-[0.4em] flex items-center gap-4">
                 <MousePointer2 size={14} className="text-gold-500" /> Hover Interaction Nodes
               </span>
             )}
          </div>
        </div>

        <div className="relative w-full h-[800px] md:h-[900px] rounded-[5rem] overflow-hidden border border-slate-200 shadow-3xl group select-none bg-slate-50">
          <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            className={`w-full h-full object-cover transition-all duration-[2s] ${activePoint ? 'scale-105 brightness-[0.95]' : 'brightness-100'}`}
            alt="Visual Monopoly Architecture" 
          />
          
          <div className={`absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent transition-opacity duration-1000 ${activePoint ? 'opacity-90' : 'opacity-100'}`}></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gold-500 shadow-[0_0_40px_#D4AF37] animate-[scan_8s_linear_infinite]"></div>

          {/* Interactive Points */}
          {points.map((p) => (
            <div 
              key={p.id}
              className="absolute z-20 cursor-pointer"
              style={{ top: p.y, left: p.x, transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => { if (!isTouring) setActivePoint(p.id); }}
              onMouseLeave={() => { if (!isTouring) setActivePoint(null); }}
            >
              <div className={`absolute inset-0 rounded-full border-4 border-gold-500/40 ${activePoint === p.id ? 'animate-ping' : 'opacity-0'} transition-opacity`}></div>
              
              <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${activePoint === p.id ? 'bg-gold-500 border-gold-500 scale-150 shadow-2xl' : 'bg-white/80 backdrop-blur-xl border-gold-300 hover:scale-110 shadow-lg'}`}>
                <div className={`w-2 h-2 rounded-full ${activePoint === p.id ? 'bg-white' : 'bg-gold-600'}`}></div>
              </div>

              <div className={`absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-500 ${activePoint === p.id ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <span className="bg-white/90 backdrop-blur-xl px-6 py-3 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-950 shadow-2xl flex items-center gap-3">
                  <Maximize size={12} className="text-gold-600" /> {p.label}
                </span>
              </div>
            </div>
          ))}

          {/* Info Card Overlay */}
          <div className={`absolute bottom-16 left-16 right-16 md:left-auto md:right-16 md:w-[500px] bg-white/80 backdrop-blur-3xl border border-white/50 p-12 rounded-[4rem] shadow-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${activePoint ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
            {activePoint && (() => {
              const activeData = points.find(p => p.id === activePoint);
              if (!activeData) return null;
              return (
                <div className="space-y-8">
                  <div className="flex justify-between items-start">
                     <div className="w-16 h-16 rounded-2xl bg-gold-500 flex items-center justify-center text-white shadow-2xl">
                        <activeData.icon size={32} />
                     </div>
                     <div className="flex gap-2">
                        {points.map(pt => (
                          <div key={pt.id} className={`w-2 h-2 rounded-full transition-all duration-500 ${pt.id === activePoint ? 'bg-gold-600 w-6' : 'bg-gold-200'}`}></div>
                        ))}
                     </div>
                  </div>
                  <div>
                    <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] block mb-4">{activeData.label}</span>
                    <h3 className="text-slate-950 font-serif text-4xl italic mb-6 leading-tight">{activeData.title}</h3>
                    <p className="text-slate-500 text-lg font-light leading-relaxed border-l-2 border-gold-400 pl-8">{activeData.desc}</p>
                  </div>
                  <div className="pt-8 border-t border-slate-100">
                     <span className="text-slate-300 text-[9px] font-black uppercase tracking-widest italic">Technical Node v2.5 Verified</span>
                  </div>
                </div>
              );
            })()}
          </div>

          <div className="absolute top-12 left-12 flex items-center gap-4">
             <div className="w-3 h-3 rounded-full bg-gold-500 animate-pulse shadow-[0_0_15px_#D4AF37]"></div>
             <span className="text-slate-900 text-[10px] font-mono uppercase tracking-[0.4em] font-black">Scan: Structural Core v2.5</span>
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