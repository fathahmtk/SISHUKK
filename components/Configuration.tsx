import React from 'react';
import { ShieldCheck, Activity, Database, Scan, Ruler, Box, ArrowRight } from 'lucide-react';

const Configuration: React.FC = () => {
  const specs = [
    { label: "Structure", value: "Twin Cylindrical Towers", metric: "G+20 High-Rise" },
    { label: "Nexus Link", value: "Level 15 Steel Skybridge", metric: "24m Clear Span" },
    { label: "Apex Feature", value: "Dual Revolving Crowns", metric: "60-Min Cycles" },
    { label: "Base Platform", value: "3-Level Grand Podium", metric: "GSF 120,000" },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-[#05070A] overflow-hidden group">
      
      {/* Background Layer: Schematic X-Ray */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            className="w-full h-full object-cover opacity-10 brightness-[0.2] saturate-0 transition-transform duration-[20s] group-hover:scale-110" 
            alt="Asset Schematic" 
         />
         {/* Technical Grid */}
         <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#C5A059 1px, transparent 1px), linear-gradient(90deg, #C5A059 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
         <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-transparent to-onyx-950"></div>
      </div>

      {/* Telemetry HUD */}
      <div className="absolute top-12 right-12 z-10 text-right space-y-3 opacity-40">
         <div className="flex items-center justify-end gap-4 text-brass-200 font-black text-[9px] uppercase tracking-[0.5em]">
            BIM_Spatial_Mesh <Box size={14} />
         </div>
         <div className="text-white text-[7px] font-mono opacity-50 uppercase tracking-widest hidden sm:block">
            Seismic: Zone IV Verified // Auth: L3
         </div>
      </div>

      <div className="absolute bottom-12 left-12 z-10 space-y-3 opacity-40">
         <div className="text-brass-200 font-black text-[9px] uppercase tracking-[0.5em] mb-3">Structural Clearance Datum</div>
         <div className="flex items-center gap-4 text-white text-[11px] font-black uppercase tracking-widest">
            <Ruler size={16} className="text-brass-400" /> AAI_Height: 75.0M Verified
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl px-8 flex flex-col items-center py-12 md:py-0">
         <span className="text-brass-400 text-[11px] md:text-[14px] font-black uppercase tracking-[1.2em] block mb-12">
           Chapter 03 // Asset Configuration
         </span>
         
         <h2 className="text-white font-serif text-6xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter italic font-black mb-16 md:mb-20">
           Twin <br/>
           <span className="gold-gradient-text not-italic">Monoliths.</span>
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full mb-16 md:mb-24 max-w-6xl">
            {specs.map((spec, i) => (
              <div key={i} className="flex justify-between items-center bg-white/5 border border-white/10 p-10 md:p-12 rounded-[3rem] backdrop-blur-md group/item hover:border-brass-400 transition-all duration-700 shadow-premium">
                 <div className="flex items-center gap-8">
                    <div className="w-16 h-16 rounded-2xl bg-onyx-950 flex items-center justify-center text-brass-400 shadow-premium group-hover/item:bg-brass-400 group-hover/item:text-onyx-950 transition-all duration-500">
                       <Database size={24} />
                    </div>
                    <div className="text-left">
                       <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-2">{spec.label}</div>
                       <div className="text-white font-serif text-3xl md:text-4xl italic font-black leading-none">{spec.value}</div>
                    </div>
                 </div>
                 <div className="text-right hidden sm:block">
                    <div className="text-brass-200 font-mono text-sm font-black leading-none mb-2">{spec.metric}</div>
                    <div className="text-[7px] text-white/20 uppercase font-black tracking-widest">Audit_Node_0{i+1}</div>
                 </div>
              </div>
            ))}
         </div>

         <div className="flex items-center gap-8 px-10 py-6 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl shadow-premium">
            <Activity size={24} className="text-brass-400 animate-pulse" />
            <span className="text-white text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] italic">Live BIM Synchronization: 100% Operational</span>
         </div>
      </div>

      {/* Scanner Layer */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-20">
         <div className="absolute top-0 left-0 w-full h-[1px] bg-brass-400 shadow-brass-glow animate-[scan_12s_linear_infinite]"></div>
      </div>
    </div>
  );
};

export default Configuration;