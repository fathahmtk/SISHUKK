import React from 'react';
/* Added missing ArrowRight import */
import { Ruler, Scale, Building, HardHat, FileText, CheckCircle2, ScanLine, Maximize2, ShieldCheck, Database, ArrowRight } from 'lucide-react';

const ProjectSpecs: React.FC = () => {
  const specs = [
    { label: "Asset Land Base", val: "1.29 Acres", sub: "100% Freehold Sovereignty" },
    { label: "Vertical Density", val: "Lvl 20 Terminal", sub: "Twin Tower Symmetrical" },
    { label: "Gross Footprint", val: "350,000", sub: "Built-up Square Footage" },
    { label: "Aviation Height", val: "75.0 Meters", sub: "Certified Skyline Datum" },
    { label: "Vertical Logistics", val: "12 Cores", sub: "High-Velocity MITSUBISHI" },
    { label: "Capillary Parking", val: "250+ ECS", sub: "Multi-Level Auto Stack" },
  ];

  return (
    <section id="specs" className="py-64 bg-[#FDFBF7] relative overflow-hidden border-t border-slate-200">
      <div className="absolute top-[10%] left-[-2%] text-slate-50 font-serif text-[40rem] font-black italic opacity-40 pointer-events-none select-none">T</div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            
            <div className="lg:col-span-5 space-y-16">
                <div className="space-y-10">
                   <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-200 rounded-full bg-white shadow-sm">
                       <FileText size={14} className="text-gold-600" />
                       <span className="text-gold-600 uppercase text-[10px] font-black tracking-[0.6em]">Chapter 04: Physical Audit</span>
                   </div>
                   <h2 className="font-serif text-6xl md:text-8xl text-slate-950 leading-[0.8] italic tracking-tighter">
                       Engineering <br/><span className="gold-gradient-text italic font-black">Metrics.</span>
                   </h2>
                   <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-lg">
                       A granular audit of the physical asset core. Each metric is calibrated to support institutional-grade ADR and high-volume banquet realization.
                   </p>
                </div>
                
                <div className="p-12 bg-white border border-slate-200 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gold-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                   <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-8">
                         <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm">
                            <ShieldCheck size={28} />
                         </div>
                         <h4 className="text-slate-950 font-serif text-3xl italic">Certified Baseline</h4>
                      </div>
                      <p className="text-slate-500 text-base font-light leading-relaxed mb-10">Structural peer-review completed by International Grade-A consultants. All seismic and wind-load calculations verified for Year 50 life-cycle.</p>
                      <button className="flex items-center gap-6 text-slate-950 text-[10px] font-black uppercase tracking-[0.5em] group/btn">
                         Full Structural Dossier <ArrowRight size={16} className="text-gold-500 group-hover:translate-x-3 transition-transform" />
                      </button>
                   </div>
                </div>
            </div>

            <div className="lg:col-span-7">
               <div className="bg-white border border-slate-100 rounded-[5rem] p-16 md:p-24 shadow-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-24 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                    <Database size={400} className="text-slate-950" />
                  </div>
                  
                  <div className="space-y-16 relative z-10">
                     {specs.map((item, i) => (
                       <div key={i} className="group/row">
                          <div className="flex justify-between items-baseline mb-4">
                             <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] group-hover/row:text-gold-600 transition-colors">{item.label}</div>
                             <div className="flex-1 border-b border-dotted border-slate-200 mx-8"></div>
                             <div className="text-slate-950 font-serif text-5xl italic group-hover/row:scale-105 transition-transform origin-right">{item.val}</div>
                          </div>
                          <div className="text-gold-600 text-[9px] font-black uppercase tracking-[0.3em] pl-1">{item.sub}</div>
                       </div>
                     ))}
                  </div>

                  <div className="mt-24 pt-12 border-t border-slate-100 flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <ScanLine size={16} className="text-gold-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">BIM v3.0 Synced</span>
                     </div>
                     <button className="bg-slate-50 hover:bg-slate-100 px-10 py-5 rounded-full text-slate-950 text-[9px] font-black uppercase tracking-widest transition-all border border-slate-200 shadow-sm">
                        Download Technical PDF
                     </button>
                  </div>
               </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectSpecs;