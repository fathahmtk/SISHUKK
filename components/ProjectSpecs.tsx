
import React from 'react';
import { Ruler, Scale, Building, HardHat } from 'lucide-react';

const ProjectSpecs: React.FC = () => {
  return (
    <section id="specs" className="py-24 bg-onyx-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="font-serif text-4xl text-white mb-2">Technical Specifications</h2>
                <p className="text-slate-400">Project Data Sheet & Area Statement</p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
                <span className="text-gold-500 font-mono text-[9px] uppercase tracking-widest border border-gold-500/30 px-4 py-2 rounded-full bg-gold-500/5 backdrop-blur-sm">Status: Planning / Pre-Approval</span>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Data Table */}
            <div className="bg-onyx-900 border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white/5">
                            <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-white/5">Parameter</th>
                            <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-white/5">Specification</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-slate-300 font-mono">
                        {[
                            { label: "Plot Area", val: "1.29 Acres (Debt-Free)" },
                            { label: "Building Configuration", val: "2B + G + 20 Floors x 2 Towers" },
                            { label: "Total Built-up Area", val: "~350,000 Sq. Ft." },
                            { label: "Height", val: "75 Meters (Iconic Presence)" },
                            { label: "Primary Structure", val: "RCC Core + Steel Frame" },
                            { label: "Facade", val: "High-Performance DGU Glass" },
                            { label: "Elevators", val: "8 Passenger (High Speed)" },
                            { label: "Parking Capacity", val: "250+ ECS Multi-level" },
                            { label: "Zoning", val: "Luxury Hospitality" }
                        ].map((row, i) => (
                            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                                <td className="p-6 border-r border-white/5 text-[11px] uppercase tracking-widest font-black text-slate-500 group-hover:text-gold-500 transition-colors">{row.label}</td>
                                <td className="p-6 text-slate-200">{row.val}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Right: Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Ruler, title: "Floor-to-Ceiling", desc: "Grand 4.2m height for lobby and ballrooms; 3.4m clear height for guest rooms." },
                  { icon: Scale, title: "Efficiency Ratio", desc: "Targeting 85% efficiency on typical floor plates to maximize revenue area." },
                  { icon: Building, title: "Sky Bridge", desc: "Steel truss bridge at Level 15 containing club lounge and observation deck." },
                  { icon: HardHat, title: "Sustainability", desc: "Designed for IGBC Gold Certification with STP and Solar integration." }
                ].map((item, i) => (
                  <div key={i} className="bg-onyx-900 p-8 border border-white/5 rounded-2xl group hover:border-gold-500/50 transition-all">
                    <item.icon className="text-gold-500 mb-6 group-hover:scale-110 transition-transform" size={28} />
                    <h3 className="text-white font-serif text-xl mb-3">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSpecs;
