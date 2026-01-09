import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Layers, Target, Info, Ruler, Compass, Database, Scan, Activity, Cpu, Zap, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloorPlanExplorer from '../components/FloorPlanExplorer.tsx';

const AssetPage: React.FC = () => {
  const [isScanActive, setIsScanActive] = useState(true);

  const structuralNodes = [
    { x: '35%', y: '30%', label: 'Tower A: High-Rise Core', value: 'G+20 Cylindrical' },
    { x: '50%', y: '48%', label: 'Meridian Arch', value: 'Steel Truss Sky-Link' },
    { x: '65%', y: '30%', label: 'Tower B: Residency Core', value: 'Seismic Grade IV' },
    { x: '50%', y: '85%', label: 'Monolithic Podium', value: 'GSF 120,000' }
  ];

  return (
    <div className="bg-white min-h-screen animate-fade-in overflow-hidden">
      {/* Cinematic Asset Hero with BIM Overlay */}
      <div className="relative h-[90vh] w-full bg-slate-900 flex items-end pb-24 overflow-hidden">
         <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[3s] ${isScanActive ? 'brightness-[0.4] saturate-[0.2] scale-105' : 'brightness-70'}`}
            alt="Asset Exterior"
         />
         
         {/* BIM HUD Layer */}
         {isScanActive && (
            <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Horizontal Scan Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gold-500/50 shadow-[0_0_15px_#D4AF37] animate-[scan_6s_linear_infinite]"></div>
                
                {/* Vector Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
                
                {/* Technical Callouts */}
                <div className="absolute inset-0 p-20">
                    <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M35 30 L50 48 L65 30" stroke="#D4AF37" strokeWidth="0.1" fill="none" className="animate-[draw_3s_ease-out_forwards]" style={{ strokeDasharray: '1000', strokeDashoffset: '1000' }} />
                    </svg>
                </div>

                {structuralNodes.map((node, i) => (
                    <div key={i} className="absolute pointer-events-auto" style={{ left: node.x, top: node.y }}>
                        <div className="relative group">
                            <div className="w-3 h-3 bg-gold-500 rounded-full animate-pulse shadow-[0_0_10px_#D4AF37]"></div>
                            <div className="absolute left-6 top-0 -translate-y-1/2 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl whitespace-nowrap opacity-100 transition-all">
                                <div className="text-[7px] font-black text-gold-500 uppercase tracking-widest mb-1">{node.label}</div>
                                <div className="text-[10px] font-mono text-white uppercase tracking-tight">{node.value}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         )}

         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

         <div className="container mx-auto px-6 relative z-20">
            <div className="flex justify-between items-end">
                <div className="max-w-4xl">
                   <Link to="/" className="inline-flex items-center gap-4 text-gold-400 text-[10px] font-black uppercase tracking-[0.5em] mb-12 hover:text-white transition-all group">
                       <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Back to Dashboard
                   </Link>
                   
                   <div className="flex items-center gap-5 mb-8">
                      <div className="w-12 h-[1px] bg-gold-500 shadow-gold-glow"></div>
                      <span className="text-white text-[10px] font-black uppercase tracking-[0.6em] flex items-center gap-3">
                         <Scan size={14} className="text-gold-500" /> Phase 01: Structural Integrity
                      </span>
                   </div>
                   <h1 className="text-white font-serif text-6xl md:text-[8rem] leading-[0.8] tracking-tighter italic mb-8 drop-shadow-2xl">
                      Structural <br/><span className="gold-gradient-text italic font-black">Monopoly.</span>
                   </h1>
                </div>

                <div className="pb-10">
                    <button 
                        onClick={() => setIsScanActive(!isScanActive)}
                        className={`px-10 py-5 rounded-full border text-[10px] font-black uppercase tracking-[0.4em] transition-all flex items-center gap-4 ${isScanActive ? 'bg-gold-500 text-onyx-950 border-gold-500' : 'bg-white/5 text-white border-white/20 hover:bg-white/10'}`}
                    >
                        {isScanActive ? <Cpu size={16} className="animate-spin-slow" /> : <Maximize2 size={16} />}
                        {isScanActive ? 'Deactivate BIM Inspect' : 'Initialize BIM Inspect'}
                    </button>
                </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-20">
        {/* Core Technical Matrix */}
        <div className="bg-white border border-slate-200 rounded-[3rem] p-12 shadow-3xl mb-32 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { l: "Built-up Area", v: "350k", s: "Sq. Ft. GSF" },
              { l: "Vertical Datum", v: "G+20", s: "Cylindrical Cores" },
              { l: "Podium Base", v: "G+3", s: "Event Logistics" },
              { l: "Sky Link", v: "Lvl 15", s: "Meridian Arch" }
            ].map((stat, i) => (
              <div key={i} className="group border-b md:border-b-0 md:border-r last:border-0 border-slate-100 pr-8 pb-8 md:pb-0">
                <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-3 group-hover:text-gold-600 transition-colors">{stat.l}</div>
                <div className="text-slate-950 font-serif text-5xl mb-2 italic leading-none font-bold">{stat.v}</div>
                <div className="text-gold-600 text-[9px] uppercase tracking-widest font-black italic">{stat.s}</div>
              </div>
            ))}
        </div>

        {/* Narrative Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-40 items-center">
            <div className="lg:col-span-6 space-y-12">
               <h2 className="text-slate-950 font-serif text-5xl md:text-7xl leading-[0.9] tracking-tighter italic">Asset <br/><span className="gold-gradient-text not-italic font-black">DNA.</span></h2>
               <div className="space-y-8">
                  <p className="text-slate-600 text-xl font-light leading-relaxed border-l-2 border-gold-200 pl-8 bg-[#FDFBF7] py-10 rounded-r-3xl italic">
                     "Architecture is our primary yield multiplier. The twin-tower symmetry creates an instant geographic waypoint, ensuring the asset commands a premium ADR and banqueting floor from day zero."
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="p-8 border border-slate-100 rounded-3xl bg-white shadow-sm hover:border-gold-300 transition-all group">
                       <Activity size={24} className="text-gold-500 mb-4 group-hover:scale-110 transition-transform" />
                       <h4 className="text-slate-950 font-serif text-xl italic mb-1">Efficiency Ratio</h4>
                       <p className="text-slate-400 text-xs uppercase font-black tracking-widest">92% Floor Plate Utilization</p>
                    </div>
                    <div className="p-8 border border-slate-100 rounded-3xl bg-white shadow-sm hover:border-gold-300 transition-all group">
                       <Compass size={24} className="text-gold-500 mb-4 group-hover:scale-110 transition-transform" />
                       <h4 className="text-slate-950 font-serif text-xl italic mb-1">Aviation Height</h4>
                       <p className="text-slate-400 text-xs uppercase font-black tracking-widest">75.0M Datum Point AAI Verified</p>
                    </div>
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-6">
               <div className="relative rounded-[4rem] overflow-hidden border border-slate-200 shadow-2xl group h-[600px] bg-slate-950">
                  <img src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110 opacity-80" alt="Detail" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  
                  {/* Technical Overlay */}
                  <div className="absolute top-10 right-10 text-right space-y-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                     <div className="text-gold-500 font-mono text-[9px] font-black uppercase tracking-widest">MESH_ACTIVE // BIM_SYNC: 100%</div>
                     <div className="text-white/40 font-mono text-[8px] uppercase tracking-tighter">RENDER_ENGINE: L300_PHYSICAL</div>
                  </div>

                  <div className="absolute bottom-12 left-12">
                     <span className="text-gold-400 text-[10px] font-black uppercase tracking-widest mb-2 block">Level 20 Architecture</span>
                     <h3 className="text-white font-serif text-4xl italic">Twin Monolith Symmetry</h3>
                  </div>
               </div>
            </div>
        </div>

        {/* Floor Plan Explorer Component */}
        <div className="mb-40 pt-32 border-t border-slate-200">
           <FloorPlanExplorer />
        </div>

        {/* Visual Link to Next Chapter */}
        <Link to="/market" className="group relative block w-full h-[700px] rounded-[6rem] overflow-hidden border border-slate-200 shadow-3xl bg-slate-50 mb-20">
           <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" alt="Market" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] mb-12 block animate-float">Proceed to Chapter 02</span>
              <h3 className="text-white font-serif text-7xl md:text-9xl italic mb-20">Market <br/><span className="gold-gradient-text not-italic font-black tracking-tighter">Dynamics.</span></h3>
              <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-950 transition-all duration-1000 shadow-3xl backdrop-blur-md">
                 <ArrowRight size={56} className="group-hover:translate-x-4 transition-transform" />
              </div>
           </div>
        </Link>
      </div>
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default AssetPage;