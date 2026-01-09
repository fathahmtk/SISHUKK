import React from 'react';
import { Ruler, Scale, Building, HardHat, FileText, CheckCircle2, ScanLine } from 'lucide-react';

const ProjectSpecs: React.FC = () => {
  const specs = [
    { label: "Plot Area", val: "1.29 Acres (Freehold)" },
    { label: "Building Structure", val: "2B + G + 20 Floors" },
    { label: "Gross Built-up", val: "~350,000 Sq. Ft." },
    { label: "Structural Height", val: "75 Meters AGL" },
    { label: "Construction Type", val: "RCC Core + Steel Periphery" },
    { label: "Facade System", val: "Unitized DGU Glazing" },
    { label: "Vertical Transport", val: "12 High-Speed Elevators" },
    { label: "Parking Capacity", val: "250+ ECS (Automated)" },
    { label: "Zoning Class", val: "Commercial / Hospitality" }
  ];

  return (
    <section id="specs" className="py-40 bg-onyx-950 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
            
            {/* Left Column: Data Terminal */}
            <div className="lg:w-1/2">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-3 px-4 py-2 border border-gold-500/30 rounded-full bg-gold-500/5 mb-8">
                        <FileText size={14} className="text-gold-500" />
                        <span className="text-gold-400 uppercase text-[10px] font-black tracking-[0.4em]">Technical Datasheet</span>
                    </div>
                    <h2 className="font-serif text-5xl md:text-7xl text-white mb-6 italic leading-none">
                        Project <br/><span className="gold-gradient-text not-italic font-black tracking-tighter">Specifications.</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                        A granular audit of the physical asset. Engineered for maximum floor-plate efficiency and long-term structural resilience.
                    </p>
                </div>

                <div className="bg-onyx-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/5">
                                    <th className="p-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Parameter</th>
                                    <th className="p-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] text-right">Specification</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {specs.map((row, i) => (
                                    <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                                        <td className="p-6 text-xs font-bold text-slate-300 uppercase tracking-wide group-hover:text-gold-400 transition-colors flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-gold-500 transition-colors"></div>
                                            {row.label}
                                        </td>
                                        <td className="p-6 text-sm font-mono text-white text-right">{row.val}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Right Column: Visual & Highlights */}
            <div className="lg:w-1/2 space-y-10 sticky top-32">
                <div className="relative rounded-[3rem] overflow-hidden aspect-[4/3] group shadow-3xl border border-white/10">
                    <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
                        alt="Structural Detail" 
                        className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110 brightness-[0.4] group-hover:brightness-[0.6]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-transparent to-transparent opacity-80"></div>
                    
                    {/* Overlay Tech Stats */}
                    <div className="absolute bottom-10 left-10 right-10">
                        <div className="flex justify-between items-end border-b border-white/20 pb-6 mb-6">
                            <div>
                                <span className="text-gold-500 text-[9px] font-black uppercase tracking-widest mb-1 block">Facade Tech</span>
                                <span className="text-white font-serif text-3xl italic">Double Glazed Unit</span>
                            </div>
                            <ScanLine size={32} className="text-white/20 group-hover:text-gold-500 transition-colors" />
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-[10px] text-slate-300 font-bold uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={12} className="text-emerald-500" /> Acoustic Rated
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={12} className="text-emerald-500" /> Thermal Break
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { icon: Ruler, title: "Grand Volume", desc: "4.2m lobby height; 3.4m clear in suites." },
                      { icon: Scale, title: "Efficiency", desc: "85% floor-plate efficiency ratio." },
                      { icon: Building, title: "Sky Link", desc: "Level 15 steel truss bridge." },
                      { icon: HardHat, title: "IGBC Gold", desc: "Sustainable green building design." }
                    ].map((item, i) => (
                      <div key={i} className="bg-white/[0.03] p-8 rounded-[2rem] border border-white/5 hover:border-gold-500/30 transition-all group hover:-translate-y-1">
                        <item.icon className="text-gold-500 mb-4 group-hover:scale-110 transition-transform" size={24} />
                        <h3 className="text-white font-serif text-lg mb-2 italic">{item.title}</h3>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSpecs;