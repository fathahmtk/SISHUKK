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
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-slate-950 overflow-hidden group">
      
      {/* Background Layer: Schematic X-Ray */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            className="w-full h-full object-cover opacity-10 brightness-[0.2] saturate-0 transition-transform duration-[20s] group-hover:scale-110" 
            alt="Asset Schematic" 
         />
         {/* Technical Grid */}
         <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
         <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
      </div>

      {/* Telemetry HUD */}
      <div className="absolute top-12 right-12 z-10 text-right space-y-2 opacity-50">
         <div className="flex items-center justify-end gap-3 text-gold-500 font-black text-[9px] uppercase tracking-[0.4em]">
            BIM_Spatial_Mesh <Box size={12} />
         </div>
         <div className="text-white text-[7px] font-mono opacity-40 uppercase tracking-widest">
            Seismic: Zone IV Verified
         </div>
      </div>

      <div className="absolute bottom-12 left-12 z-10 space-y-2 opacity-50">
         <div className="text-gold-500 font-black text-[9px] uppercase tracking-[0.4em] mb-2">Structural Clearance Datum</div>
         <div className="flex items-center gap-3 text-white text-[11px] font-black uppercase tracking-widest">
            <Ruler size={14} className="text-gold-500" /> AAI_Height: 75.0M Verified
         </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl px-8 flex flex-col items-center">
         <span className="text-gold-500 text-[11px] md:text-[13px] font-black uppercase tracking-[1em] block mb-12">
           Chapter 03 // Asset Configuration
         </span>
         
         <h2 className="text-white font-serif text-6xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter italic font-black mb-16">
           Twin <br/>
           <span className="gold-gradient-text not-italic">Monoliths.</span>
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-20">
            {specs.map((spec, i) => (
              <div key={i} className="flex justify-between items-center bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md group/item hover:border-gold-500 transition-all duration-500">
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-onyx-950 flex items-center justify-center text-gold-500 shadow-2xl group-hover/item:bg-gold-500 group-hover/item:text-onyx-950 transition-all">
                       <Database size={20} />
                    </div>
                    <div className="text-left">
                       <div className="text-slate-500 text-[8px] font-black uppercase tracking-widest mb-1">{spec.label}</div>
                       <div className="text-white font-serif text-2xl italic leading-none">{spec.value}</div>
                    </div>
                 </div>
                 <div className="text-right">
                    <div className="text-gold-500 font-mono text-xs font-bold leading-none mb-1">{spec.metric}</div>
                    <div className="text-[7px] text-white/20 uppercase font-black tracking-widest">Audit_Node_0{i+1}</div>
                 </div>
              </div>
            ))}
         </div>

         <div className="flex items-center gap-6 p-8 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <Activity size={24} className="text-gold-500 animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.5em]">Live BIM Synchronization: 100% Operational</span>
         </div>
      </div>

      {/* Decorative HUD Scan Line */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gold-500/30 animate-[scan_10s_linear_infinite]"></div>
      </div>

      <style>{`
        @keyframes scan { 0% { top: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
      `}</style>
    </div>
  );
};

export default Configuration;