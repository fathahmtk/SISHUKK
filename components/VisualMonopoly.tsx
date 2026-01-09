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
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-5 mb-10">
               <div className="w-12 h-[1px] bg-gold-500"></div>
               <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.6em]">Chapter 02: Visual Monopoly</span>
            </div>
            <h2 className="text-slate-950 font-serif text-5xl md:text-8xl leading-[0.85] tracking-tighter italic">
              Geometry as a <br/><span className="gold-gradient-text italic font-black">Market Barrier.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-20">
             <p className="text-slate-500 text-xl font-light leading-relaxed border-l-2 border-gold-400 pl-10 italic">
                "In a landscape of fragmented low-rise inventory, the SIRSHUKK Twin-Tower form factor creates an immediate geographic monopoly."
             </p>
          </div>
        </div>

        <div className="relative w-full h-[85vh] rounded-[4rem] overflow-hidden border border-slate-200 shadow-3xl bg-slate-50 group">
          <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            className={`w-full h-full object-cover transition-all duration-[3s] ${activePoint ? 'scale-105 brightness-50 blur-[2px]' : 'brightness-105'}`}
            alt="Architecture View" 
          />
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.2)_100%)] pointer-events-none"></div>

          {/* Technical HUD Overlays */}
          <div className="absolute top-12 left-12 flex items-center gap-6 z-30 pointer-events-none">
             <div className="w-4 h-4 bg-gold-500 rounded-full animate-pulse shadow-[0_0_20px_#D4AF37]"></div>
             <div className="space-y-1">
                <div className="text-white text-[10px] font-black uppercase tracking-[0.4em]">BIM Scan: Active</div>
                <div className="text-gold-500/60 font-mono text-[8px] uppercase tracking-widest">Structural_Mesh_v2.5_Synced</div>
             </div>
          </div>

          <div className="absolute top-12 right-12 text-right z-30 pointer-events-none">
             <div className="text-white/40 text-[9px] font-black uppercase tracking-[0.5em] mb-2">Technical Status</div>
             <div className="flex items-center gap-3 justify-end text-gold-500">
                <ShieldCheck size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Audit Verified</span>
             </div>
          </div>

          {/* Interactive Scanning HUD */}
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gold-500 shadow-[0_0_30px_#D4AF37] animate-[scan_8s_linear_infinite]"></div>
          </div>

          {/* Technical Nodes */}
          {points.map((p) => (
            <div 
              key={p.id}
              className="absolute z-40 transition-all duration-700"
              style={{ top: p.y, left: p.x, transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => { if (!isTouring) setActivePoint(p.id); }}
              onMouseLeave={() => { if (!isTouring) setActivePoint(null); }}
            >
              <div className={`relative flex items-center justify-center`}>
                 <div className={`absolute inset-0 rounded-full border-2 border-gold-500/50 transition-all duration-1000 ${activePoint === p.id ? 'scale-[4] opacity-0' : 'scale-100 opacity-100 animate-pulse'}`}></div>
                 <div className={`w-8 h-8 rounded-full border-2 transition-all duration-500 flex items-center justify-center backdrop-blur-xl ${activePoint === p.id ? 'bg-gold-500 border-white scale-150 shadow-gold-glow' : 'bg-white/40 border-gold-500 hover:bg-white/80'}`}>
                    <div className={`w-2 h-2 rounded-full ${activePoint === p.id ? 'bg-white' : 'bg-gold-600'}`}></div>
                 </div>

                 {/* Label Tooltip */}
                 <div className={`absolute top-12 left-1/2 -translate-x-1/2 transition-all duration-500 whitespace-nowrap ${activePoint === p.id ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0 group-hover:opacity-100'}`}>
                    <span className="bg-black/60 backdrop-blur-md px-6 py-2.5 rounded-xl border border-white/10 text-white text-[9px] font-black uppercase tracking-[0.3em] shadow-2xl flex items-center gap-3">
                       <Ruler size={12} className="text-gold-500" /> {p.label}
                    </span>
                 </div>
              </div>
            </div>
          ))}

          {/* Cinematic Insight Overlay */}
          <div className={`absolute inset-0 z-50 flex items-center justify-center p-12 transition-all duration-1000 pointer-events-none ${activePoint ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
             <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div className={`transition-all duration-1000 delay-100 transform ${activePoint ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                   <h3 className="text-white font-serif text-5xl md:text-7xl italic leading-none mb-10 drop-shadow-2xl">
                      {points.find(p => p.id === activePoint)?.title}
                   </h3>
                   <p className="text-slate-300 text-2xl font-light leading-relaxed italic border-l-2 border-gold-500 pl-10 max-w-md drop-shadow-lg">
                      "{points.find(p => p.id === activePoint)?.desc}"
                   </p>
                </div>
                <div className={`transition-all duration-1000 delay-300 transform ${activePoint ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                   <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[4rem] shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                      <div className="flex justify-between items-start mb-12">
                         <div className="w-16 h-16 rounded-3xl bg-gold-500 flex items-center justify-center text-onyx-950 shadow-2xl">
                            <Info size={32} />
                         </div>
                         <div className="text-right">
                            <div className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-1">Metric Node</div>
                            <div className="text-gold-500 font-mono text-xl font-black">{points.find(p => p.id === activePoint)?.metric}</div>
                         </div>
                      </div>
                      <button className="w-full py-6 bg-white text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-gold-500 transition-all pointer-events-auto shadow-2xl">
                         Audit Technical Node <ArrowUpRight size={18} />
                      </button>
                   </div>
                </div>
             </div>
          </div>

          {/* Bottom Control Strip */}
          <div className="absolute bottom-12 left-12 right-12 z-50 flex flex-col md:flex-row justify-between items-center gap-10">
             <div className="flex gap-10">
                {[
                  { l: "Monopoly Status", v: "100%", d: "Geographic Scarcity" },
                  { l: "Engineering Grade", v: "L300", s: "BIM Compliance" }
                ].map((stat, i) => (
                  <div key={i} className="group cursor-help pointer-events-auto">
                    <div className="text-white/40 text-[8px] font-black uppercase tracking-[0.5em] mb-2 group-hover:text-gold-500 transition-colors">{stat.l}</div>
                    <div className="flex items-baseline gap-2">
                       <span className="text-white font-serif text-3xl italic font-black">{stat.v}</span>
                       <span className="text-gold-600 text-[8px] font-black uppercase tracking-widest">{stat.d || stat.s}</span>
                    </div>
                  </div>
                ))}
             </div>
             
             <div className="flex items-center gap-8 pointer-events-auto">
                <button 
                  onClick={startTour}
                  className={`group px-12 py-5 rounded-full border text-[10px] font-black uppercase tracking-[0.4em] transition-all flex items-center gap-5 ${isTouring ? 'bg-gold-500 text-onyx-950 border-gold-500' : 'bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-gold-500'}`}
                >
                   {isTouring ? <PlayCircle className="animate-spin-slow" size={20} /> : <Scan size={20} className="group-hover:scale-125 transition-transform" />}
                   {isTouring ? 'Touring Structural Nodes' : 'Initialize BIM Audit'}
                </button>
             </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { top: -5%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 105%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default VisualMonopoly;