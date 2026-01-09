import React from 'react';
import { FileText, ScanLine, ShieldCheck, Database, ArrowRight } from 'lucide-react';

const ProjectSpecs: React.FC = () => {
  const specs = [
    { label: "Land Base", val: "1.29 Acres", sub: "100% Freehold" },
    { label: "Vertical", val: "G+20 Towers", sub: "Twin Symmetry" },
    { label: "GSF Area", val: "350,000", sub: "Built-up Square Footage" },
    { label: "Datum Ht", val: "75.0 Meters", sub: "AAI Certified" },
    { label: "Vertical Ops", val: "12 Cores", sub: "Mitsubishi High-V" },
    { label: "Parking", val: "250+ ECS", sub: "Auto Stack" },
  ];

  return (
    <section id="specs" className="py-12 bg-[#FDFBF7] relative h-full flex flex-col justify-center border-t border-slate-200">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start h-[75vh]">
            
            <div className="lg:col-span-5 space-y-10 h-full flex flex-col justify-center">
                <div className="space-y-6">
                   <div className="inline-flex items-center gap-4 px-4 py-2 border border-gold-200 rounded-full bg-white shadow-sm">
                       <FileText size={12} className="text-gold-600" />
                       <span className="text-gold-600 uppercase text-[9px] font-black tracking-[0.4em]">Physical Audit</span>
                   </div>
                   <h2 className="font-serif text-4xl md:text-7xl text-slate-950 leading-[0.8] italic tracking-tighter">
                       Engineering <br/><span className="gold-gradient-text italic font-black">Metrics.</span>
                   </h2>
                   <p className="text-slate-500 text-xl font-light leading-relaxed border-l-2 border-gold-400 pl-8 italic max-w-md">
                       Granular audit of the physical core. Calibrated to support institutional-grade yield and high-volume realization.
                   </p>
                </div>
                
                <div className="p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl group">
                   <div className="flex items-center gap-6 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-gold-600">
                         <ShieldCheck size={24} />
                      </div>
                      <h4 className="text-slate-950 font-serif text-2xl italic leading-none">Certified Baseline</h4>
                   </div>
                   <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">Wind-load and seismic peer-review verified for Year 50 life-cycle.</p>
                   <button className="flex items-center gap-4 text-slate-950 text-[9px] font-black uppercase tracking-[0.4em] group/btn">
                      Technical Dossier <ArrowRight size={14} className="text-gold-500 group-hover:translate-x-2 transition-transform" />
                   </button>
                </div>
            </div>

            <div className="lg:col-span-7 h-full flex flex-col justify-center">
               <div className="bg-white border border-slate-100 rounded-[4rem] p-12 md:p-16 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform">
                    <Database size={300} className="text-slate-950" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-x-12 gap-y-10 relative z-10">
                     {specs.map((item, i) => (
                       <div key={i} className="group/row">
                          <div className="text-slate-400 text-[8px] font-black uppercase tracking-[0.4em] mb-2 group-hover/row:text-gold-600 transition-colors">{item.label}</div>
                          <div className="text-slate-950 font-serif text-4xl italic group-hover/row:scale-105 transition-transform origin-left">{item.val}</div>
                          <div className="text-gold-600 text-[8px] font-black uppercase tracking-[0.2em] mt-1">{item.sub}</div>
                       </div>
                     ))}
                  </div>

                  <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <ScanLine size={14} className="text-gold-500 animate-pulse" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">BIM v3.0 Synced</span>
                     </div>
                     <button className="bg-slate-50 hover:bg-slate-100 px-6 py-3 rounded-full text-slate-950 text-[8px] font-black uppercase tracking-widest transition-all border border-slate-200">
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