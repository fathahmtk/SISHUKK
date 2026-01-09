import React, { useState, useEffect } from 'react';
import { Scan, Eye, Crown, Target, MousePointer2, Maximize, PlayCircle, Info, ShieldCheck, Ruler, ArrowUpRight } from 'lucide-react';

const VisualMonopoly: React.FC = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const [isTouring, setIsTouring] = useState(false);

  const points = [
    {
      id: 1,
      x: '50%',
      y: '40%',
      label: 'Structural Axis',
      title: 'The Meridian Arch',
      desc: 'High-tensile steel truss system bridging the twin high-rise cores at Level 15. A non-replicable geometric USP.',
      metric: 'Level 15 Sky-Link'
    },
    {
      id: 2,
      x: '28%',
      y: '60%',
      label: 'Tower A: Symmetry',
      title: 'Vertical Core',
      desc: 'Reinforced cylindrical RC structure de-risked for Seismic Zone IV. High-velocity Mitsubishi elevator cores.',
      metric: 'G+20 High-Rise'
    },
    {
      id: 3,
      x: '72%',
      y: '60%',
      label: 'Tower B: Dominance',
      title: 'Skyline Authority',
      desc: 'Unobstructed height command ensuring consistent brand recall. Unrivaled vistas of the temple precinct.',
      metric: '75.0m Terminal Ht.'
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
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [activePoint, isTouring]);

  const startTour = () => {
    if (isTouring) return;
    setActivePoint(points[0].id);
    setIsTouring(true);
  };

  return (
    <section className="h-full w-full bg-[#FDFBF7] relative overflow-hidden flex flex-col justify-center py-12 md:py-24">
      <div className="container mx-auto px-6 h-full flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start mb-10 md:mb-20 shrink-0">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-10">
               <div className="w-8 md:w-12 h-[1px] bg-brass-400"></div>
               <span className="text-slate-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] md:tracking-[0.8em]">Chapter 02: Visual Monopoly</span>
            </div>
            <h2 className="text-slate-950 font-serif text-4xl md:text-7xl lg:text-8xl leading-[0.9] md:leading-[0.85] tracking-tighter italic">
              Geometry as a <br/><span className="gold-gradient-text italic font-black">Market Barrier.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-16 hidden lg:block">
             <p className="text-slate-500 text-2xl font-light font-editorial leading-relaxed border-l-2 border-brass-400 pl-10 italic">
                "In a landscape of fragmented low-rise inventory, the SIRSHUKK Twin-Tower form factor creates an immediate geographic monopoly."
             </p>
          </div>
        </div>

        <div className="relative w-full flex-1 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-slate-200 shadow-premium bg-onyx-950 group min-h-[400px]">
          <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            className={`w-full h-full object-cover transition-all duration-[3s] ${activePoint ? 'scale-105 brightness-[0.25] blur-[2px]' : 'brightness-[0.9] saturate-[0.8]'}`}
            alt="Architecture View" 
          />
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] pointer-events-none"></div>

          {/* Technical HUD Overlays */}
          <div className="absolute top-6 left-6 md:top-12 md:left-12 flex items-center gap-4 md:gap-6 z-30 pointer-events-none">
             <div className="w-3 h-3 md:w-4 md:h-4 bg-brass-400 rounded-full animate-pulse shadow-[0_0_20px_#B88A2A]"></div>
             <div className="space-y-0.5 md:space-y-1">
                <div className="text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">BIM Scan: Active</div>
                <div className="text-brass-200/60 font-mono text-[6px] md:text-[8px] uppercase tracking-widest">Structural_Mesh_v2.5_Synced</div>
             </div>
          </div>

          <div className="absolute top-6 right-6 md:top-12 md:right-12 text-right z-30 pointer-events-none hidden sm:block">
             <div className="text-white/40 text-[9px] font-black uppercase tracking-[0.5em] mb-2">Technical Status</div>
             <div className="flex items-center gap-3 justify-end text-brass-400">
                <ShieldCheck size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Audit Verified</span>
             </div>
          </div>

          {/* Interactive Scanning HUD */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-[1px] bg-brass-400 shadow-[0_0_30px_#B88A2A] animate-[scan_8s_linear_infinite]"></div>
          </div>

          {/* Technical Nodes */}
          {points.map((p) => (
            <div 
              key={p.id}
              className="absolute z-40 transition-all duration-700"
              style={{ top: p.y, left: p.x, transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => { if (!isTouring) setActivePoint(p.id); }}
              onClick={() => setActivePoint(activePoint === p.id ? null : p.id)}
              onMouseLeave={() => { if (!isTouring) setActivePoint(null); }}
            >
              <div className={`relative flex items-center justify-center cursor-pointer`}>
                 <div className={`absolute inset-0 rounded-full border-2 border-brass-400/50 transition-all duration-1000 ${activePoint === p.id ? 'scale-[3] md:scale-[4] opacity-0' : 'scale-100 opacity-100 animate-pulse'}`}></div>
                 <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-2 transition-all duration-500 flex items-center justify-center backdrop-blur-xl ${activePoint === p.id ? 'bg-brass-400 border-white scale-125 md:scale-150 shadow-brass-glow' : 'bg-white/30 border-brass-400 hover:bg-white/80'}`}>
                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${activePoint === p.id ? 'bg-white' : 'bg-brass-600'}`}></div>
                 </div>

                 {/* Label Tooltip - Desktop only */}
                 <div className={`absolute top-10 md:top-12 left-1/2 -translate-x-1/2 transition-all duration-500 whitespace-nowrap hidden sm:block ${activePoint === p.id ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                    <span className="bg-black/60 backdrop-blur-md px-6 py-2.5 rounded-xl border border-white/10 text-white text-[9px] font-black uppercase tracking-[0.3em] shadow-premium flex items-center gap-3">
                       <Ruler size={12} className="text-brass-400" /> {p.label}
                    </span>
                 </div>
              </div>
            </div>
          ))}

          {/* Cinematic Insight Overlay */}
          <div className={`absolute inset-0 z-50 flex items-center justify-center p-6 md:p-12 transition-all duration-1000 pointer-events-none ${activePoint ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
             <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
                <div className={`transition-all duration-1000 delay-100 transform text-center md:text-left ${activePoint ? 'translate-x-0 opacity-100' : '-translate-x-10 md:-translate-x-20 opacity-0'}`}>
                   <h3 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl italic leading-[1.1] mb-6 md:mb-10 drop-shadow-2xl font-black">
                      {points.find(p => p.id === activePoint)?.title}
                   </h3>
                   <p className="text-slate-200 text-lg md:text-3xl font-light font-editorial leading-relaxed italic border-l-2 md:border-l-4 border-brass-400 pl-6 md:pl-10 max-w-md drop-shadow-lg mx-auto md:mx-0">
                      "{points.find(p => p.id === activePoint)?.desc}"
                   </p>
                </div>
                <div className={`transition-all duration-1000 delay-300 transform ${activePoint ? 'translate-x-0 opacity-100' : 'translate-x-10 md:translate-x-20 opacity-0'}`}>
                   <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] shadow-premium">
                      <div className="flex justify-between items-start mb-8 md:mb-12">
                         <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-brass-400 flex items-center justify-center text-onyx-950 shadow-premium">
                            <Info size={24} className="md:size-8" />
                         </div>
                         <div className="text-right">
                            <div className="text-white/40 text-[8px] md:text-[9px] font-black uppercase tracking-widest mb-1">Metric Node</div>
                            <div className="text-brass-200 font-mono text-base md:text-xl font-black">{points.find(p => p.id === activePoint)?.metric}</div>
                         </div>
                      </div>
                      <button className="w-full py-4 md:py-6 bg-white text-onyx-950 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-3 md:gap-4 hover:bg-brass-400 transition-all pointer-events-auto shadow-premium active:scale-95">
                         Audit Node <ArrowUpRight size={16} />
                      </button>
                   </div>
                </div>
             </div>
          </div>

          {/* Bottom Control Strip */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 z-50 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 pointer-events-none">
             <div className="flex gap-8 md:gap-14 pointer-events-auto">
                {[
                  { l: "Monopoly Status", v: "100%", d: "Scarcity" },
                  { l: "Engineering", v: "L300", s: "BIM" }
                ].map((stat, i) => (
                  <div key={i} className="group cursor-help">
                    <div className="text-white/40 text-[7px] md:text-[8px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] mb-1 md:mb-2 group-hover:text-brass-400 transition-colors">{stat.l}</div>
                    <div className="flex items-baseline gap-1.5 md:gap-2">
                       <span className="text-white font-serif text-2xl md:text-4xl italic font-black">{stat.v}</span>
                       <span className="text-brass-400 text-[7px] md:text-[8px] font-black uppercase tracking-widest">{stat.d || stat.s}</span>
                    </div>
                  </div>
                ))}
             </div>
             
             <div className="flex items-center gap-4 md:gap-8 pointer-events-auto w-full md:w-auto">
                <button 
                  onClick={startTour}
                  className={`flex-1 md:flex-none group px-8 md:px-12 py-4 md:py-5 rounded-full border text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-3 md:gap-5 shadow-premium ${isTouring ? 'bg-brass-400 text-onyx-950 border-brass-400' : 'bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-brass-400'} active:scale-95`}
                >
                   {isTouring ? <PlayCircle className="animate-spin-slow" size={18} /> : <Scan size={18} className="group-hover:scale-125 transition-transform" />}
                   {isTouring ? 'Touring Nodes' : 'Initialize BIM Audit'}
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualMonopoly;