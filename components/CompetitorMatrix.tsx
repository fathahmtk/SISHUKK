
import React from 'react';
import { XCircle, CheckCircle, Minus, ShieldCheck, Zap, Info } from 'lucide-react';

const CompetitorMatrix: React.FC = () => {
  const features = [
    { name: "Room Quality", budget: "Basic / Non-AC", luxury: "Standard AC", sgt: "Smart-Tech Luxury Suites" },
    { name: "Banquet Capacity", budget: "< 100 pax", luxury: "200 - 400 pax", sgt: "3,000+ pax (Mega Hall)" },
    { name: "Parking Capacity", budget: "Street / Minimal", luxury: "Limited (10-15 cars)", sgt: "Multi-Level (200+ Cars)" },
    { name: "F&B Variety", budget: "Basic Thali", luxury: "Single Restaurant", sgt: "Multi-Cuisine & Dual Revolving" },
    { name: "Leisure Assets", budget: "None", luxury: "Small Gym (Rare)", sgt: "Rooftop Infinity Pool & Spa" },
  ];

  return (
    <section className="py-32 bg-onyx-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.6em] block mb-4">Market Intelligence</span>
          <h2 className="text-white font-serif text-5xl md:text-7xl tracking-tighter">The <span className="gold-gradient-text">Moat</span> Analysis.</h2>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg">Comparing SIRSHUKK Grand Towers against the fragmented local inventory to reveal the institutional supply void.</p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto pb-12">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
                <th className="px-8 py-4">Structural Feature</th>
                <th className="px-8 py-4 text-center">Budget Lodges</th>
                <th className="px-8 py-4 text-center">Local 3/4 Star</th>
                <th className="px-8 py-4 text-center text-gold-500 bg-gold-500/5 rounded-t-3xl border-x border-t border-gold-500/20">SIRSHUKK Grand Towers</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {features.map((row, i) => (
                <tr key={i} className="group transition-all duration-500">
                  <td className="px-8 py-8 bg-white/[0.02] border-y border-l border-white/5 rounded-l-2xl text-slate-300 font-medium">
                    {row.name}
                  </td>
                  <td className="px-8 py-8 bg-white/[0.02] border-y border-white/5 text-center text-slate-500">
                    <div className="flex flex-col items-center gap-2">
                      <XCircle size={16} className="opacity-30" />
                      <span className="text-[11px] opacity-60 italic">{row.budget}</span>
                    </div>
                  </td>
                  <td className="px-8 py-8 bg-white/[0.02] border-y border-white/5 text-center text-slate-400">
                    <div className="flex flex-col items-center gap-2">
                      <Minus size={16} className="text-slate-600" />
                      <span className="text-[11px] opacity-80">{row.luxury}</span>
                    </div>
                  </td>
                  <td className="px-8 py-8 bg-gold-500/5 border border-gold-500/30 text-center rounded-r-2xl group-hover:bg-gold-500/10 transition-colors">
                    <div className="flex flex-col items-center gap-2">
                      <CheckCircle size={20} className="text-gold-500" />
                      <span className="text-white font-bold tracking-wide">{row.sgt}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="flex items-center gap-4 px-8 py-4 bg-white/5 rounded-2xl border border-white/10">
            <Zap size={20} className="text-gold-500" />
            <span className="text-slate-400 text-xs font-black uppercase tracking-widest">First-Mover Moat</span>
          </div>
          <div className="flex items-center gap-4 px-8 py-4 bg-white/5 rounded-2xl border border-white/10">
            <ShieldCheck size={20} className="text-gold-500" />
            <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Institutional Asset Grade</span>
          </div>
          <div className="flex items-center gap-4 px-8 py-4 bg-white/5 rounded-2xl border border-white/10">
            <Info size={20} className="text-gold-500" />
            <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Validated ADR Arbitrage</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitorMatrix;
