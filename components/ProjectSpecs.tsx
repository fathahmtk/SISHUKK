import React from 'react';
import { Ruler, Scale, Building, HardHat } from 'lucide-react';

const ProjectSpecs: React.FC = () => {
  return (
    <section id="specs" className="py-24 bg-luxury-charcoal border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="font-serif text-4xl text-white mb-2">Technical Specifications</h2>
                <p className="text-slate-400">Project Data Sheet & Area Statement</p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
                <span className="text-gold-500 font-mono text-xs uppercase tracking-widest border border-gold-500/30 px-3 py-1 rounded">Status: Planning / Pre-Approval</span>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Data Table */}
            <div className="bg-white/5 border border-white/10 rounded-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white/5">
                            <th className="p-4 text-xs font-bold text-slate-300 uppercase tracking-wider border-b border-white/10">Parameter</th>
                            <th className="p-4 text-xs font-bold text-slate-300 uppercase tracking-wider border-b border-white/10">Specification</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-slate-200 font-mono">
                        {[
                            { label: "Plot Area", val: "2.5 Acres (Approx.)" },
                            { label: "Building Configuration", val: "2B + G + 20 Floors x 2 Towers" },
                            { label: "Total Built-up Area", val: "~350,000 Sq. Ft." },
                            { label: "Height", val: "75 Meters (Subject to AAI NOC)" },
                            { label: "Primary Structural System", val: "Reinforced Concrete Core + Steel Frame" },
                            { label: "Facade", val: "High-Performance Double Glazed Unit (DGU)" },
                            { label: "Elevators", val: "8 Passenger (High Speed) + 2 Service" },
                            { label: "Parking Capacity", val: "250+ ECS (Multi-level + Basement)" },
                            { label: "Zoning", val: "Commercial / Mixed-Use Hospitality" }
                        ].map((row, i) => (
                            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="p-4 border-r border-white/5">{row.label}</td>
                                <td className="p-4 text-gold-100">{row.val}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Right: Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-luxury-dark p-6 border-l-2 border-gold-500">
                    <Ruler className="text-slate-400 mb-4" size={24} />
                    <h3 className="text-white font-bold mb-2">Floor-to-Ceiling</h3>
                    <p className="text-slate-400 text-sm">Grand 4.2m height for lobby and ballrooms; 3.4m clear height for guest rooms ensuring luxury volume.</p>
                </div>
                <div className="bg-luxury-dark p-6 border-l-2 border-gold-500">
                    <Scale className="text-slate-400 mb-4" size={24} />
                    <h3 className="text-white font-bold mb-2">Efficiency Ratio</h3>
                    <p className="text-slate-400 text-sm">Targeting 85% efficiency on typical floor plates to maximize revenue-generating carpet area.</p>
                </div>
                <div className="bg-luxury-dark p-6 border-l-2 border-gold-500">
                    <Building className="text-slate-400 mb-4" size={24} />
                    <h3 className="text-white font-bold mb-2">Sky Ring Structure</h3>
                    <p className="text-slate-400 text-sm">Steel truss connecting bridge at 15th floor level containing lounge and observation deck.</p>
                </div>
                <div className="bg-luxury-dark p-6 border-l-2 border-gold-500">
                    <HardHat className="text-slate-400 mb-4" size={24} />
                    <h3 className="text-white font-bold mb-2">Sustainability</h3>
                    <p className="text-slate-400 text-sm">Designed for IGBC Gold Certification with STP, Rainwater Harvesting, and Solar integration.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSpecs;