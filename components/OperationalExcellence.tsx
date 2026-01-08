
import React from 'react';
import { 
  Users, ShieldCheck, Cpu, Database, 
  Truck, BarChart3, Cloud, Zap, 
  Crown, Heart, Globe, Settings2,
  Network, Layout, ArrowUpRight, CheckCircle2, Workflow
} from 'lucide-react';

const OperationalExcellence: React.FC = () => {
  const pillars = [
    {
      title: "VVIP Protocol",
      icon: Crown,
      desc: "Dedicated department for HNW pilgrims providing 'Temple to Room' seamless transit and private ritual management.",
      stat: "24/7 Butler Core"
    },
    {
      title: "Supply Resilience",
      icon: Truck,
      desc: "Direct-to-farm contracts for organic F&B and global vendor alignments for luxury FF&E asset maintenance.",
      stat: "0% Middle-man"
    },
    {
      title: "Revenue AI",
      icon: BarChart3,
      desc: "Proprietary software optimizing ADR based on the Guruvayur Temple calendar and historical footfall spikes.",
      stat: "Dynamic Pricing"
    }
  ];

  return (
    <section id="ops" className="py-40 bg-onyx-950 relative overflow-hidden border-b border-white/5">
      {/* Background Flow Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
         <Network size={1200} strokeWidth={0.5} className="text-gold-500 absolute -right-[20%] -top-[10%] animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-gold-500/30 rounded-full bg-gold-500/5 mb-8">
              <Workflow size={14} className="text-gold-500" />
              <span className="text-gold-400 uppercase text-[10px] font-black tracking-[0.4em]">Section 12: Operational Integrity</span>
            </div>
            <h2 className="text-white font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter italic">Process <br/><span className="gold-gradient-text italic font-black">Architecture.</span></h2>
            <p className="text-slate-400 text-2xl font-light leading-relaxed mt-10 max-w-2xl border-l border-gold-500/30 pl-10">
              Operational excellence is the guardian of the bottom line. SGT utilizes a tech-first governance model to eliminate friction and maximize operating EBITDA.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
             <div className="p-8 bg-onyx-900 border border-white/10 rounded-3xl flex items-center gap-6 shadow-2xl">
                <div className="w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center text-onyx-950">
                   <ShieldCheck size={24} />
                </div>
                <div>
                   <div className="text-white font-bold text-lg leading-none mb-1">Big-4 Audited</div>
                   <p className="text-slate-500 text-[9px] uppercase tracking-widest font-black">Financial Governance</p>
                </div>
             </div>
          </div>
        </div>

        {/* Global Strategy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
           {pillars.map((item, i) => (
             <div key={i} className="group relative p-12 bg-white/[0.02] border border-white/10 rounded-[4rem] hover:bg-white/[0.04] transition-all duration-700 shadow-3xl flex flex-col justify-between h-[450px]">
                <div>
                   <div className="w-20 h-20 rounded-[2rem] bg-onyx-900 border border-white/5 flex items-center justify-center text-gold-500 group-hover:scale-110 group-hover:border-gold-500/30 transition-all duration-700 mb-12 shadow-2xl">
                      <item.icon size={36} />
                   </div>
                   <h4 className="text-white font-serif text-3xl italic mb-6 group-hover:text-gold-400 transition-colors">{item.title}</h4>
                   <p className="text-slate-500 text-base leading-relaxed font-light group-hover:text-slate-300 transition-colors">{item.desc}</p>
                </div>
                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                   <span className="text-gold-500 text-[9px] font-black uppercase tracking-widest">{item.stat}</span>
                   <CheckCircle2 size={18} className="text-emerald-500 opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
             </div>
           ))}
        </div>

        {/* Technical Stack Overlay */}
        <div className="relative rounded-[5rem] overflow-hidden bg-onyx-900 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] p-12 lg:p-24 group">
           <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
              <Cpu size={500} className="text-white" />
           </div>
           
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <div className="space-y-4">
                    <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] block">Invisible Engineering</span>
                    <h3 className="text-white font-serif text-5xl md:text-7xl italic leading-none">Smart-Tower <br/>Eco-System.</h3>
                 </div>
                 <p className="text-slate-400 text-xl font-light leading-relaxed">
                    Integration of AI building systems directly contributes to a 12% reduction in recurring OpEx through occupied-zone precision cooling and automated demand forecasting.
                 </p>
                 <div className="flex gap-6">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center flex-1">
                       <div className="text-white font-mono text-2xl font-bold">12%</div>
                       <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mt-1">Energy Saving</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center flex-1">
                       <div className="text-white font-mono text-2xl font-bold">30%</div>
                       <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mt-1">Labor Efficiency</p>
                    </div>
                 </div>
              </div>

              <div className="space-y-8">
                 {[
                   { t: "IoT Guest Interface", d: "Keyless mobile identity and voice-controlled luxury suites.", icon: Settings2 },
                   { t: "AI Chiller Analytics", d: "Magnetic levitation HVAC optimized by predictive occupancy.", icon: Zap },
                   { t: "Closed-Loop Governance", d: "Real-time P&L visibility for institutional stakeholders.", icon: Database }
                 ].map((row, i) => (
                    <div key={i} className="flex gap-8 items-start group/row">
                       <div className="w-14 h-14 rounded-2xl bg-onyx-950 border border-white/10 flex items-center justify-center text-gold-500 group-hover/row:border-gold-500 group-hover/row:scale-110 transition-all duration-500 shadow-2xl">
                          <row.icon size={24} />
                       </div>
                       <div className="flex-1 pb-8 border-b border-white/5 group-hover/row:border-white/10 transition-colors">
                          <h4 className="text-white font-serif text-2xl mb-2 italic">{row.t}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed font-light">{row.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="mt-24 text-center">
           <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.6em] mb-10">Institutional Operations Playbook v2.5</p>
           <button className="px-12 py-7 bg-transparent border border-white/10 hover:border-gold-500 text-white rounded-full text-[11px] font-black uppercase tracking-[0.5em] transition-all flex items-center gap-4 mx-auto group shadow-2xl backdrop-blur-xl">
             Inspect Ops Framework <ArrowUpRight size={18} className="text-gold-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </button>
        </div>
      </div>
    </section>
  );
};

export default OperationalExcellence;
