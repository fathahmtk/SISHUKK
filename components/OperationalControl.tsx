import React from 'react';
import { Settings, Shield, Cpu, Users, ArrowRight, Layers, Workflow, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const OperationalControl: React.FC = () => {
  return (
    <section id="operations" className="py-20 bg-[#FDFBF7] relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-5">
               <div className="w-12 h-[1px] bg-gold-500"></div>
               <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.8em]">Chapter 06: Invisible Systems</span>
            </div>
            <h2 className="font-serif text-5xl md:text-8xl text-slate-950 mt-6 leading-[0.8] tracking-tighter italic">
              Structural <br/><span className="gold-gradient-text italic font-black">Velocity.</span>
            </h2>
            <p className="text-slate-500 text-xl font-light leading-relaxed border-l-2 border-gold-400 pl-10 mt-8 italic">
               Engineered for peak-load performance. Segregation of guest and event flows via structural intelligence.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-6 bg-white border border-slate-200 px-10 py-6 rounded-[2.5rem] shadow-xl group hover:border-gold-400 transition-all">
             <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center text-gold-500 shadow-xl group-hover:scale-110 transition-transform">
                <Workflow size={20} />
             </div>
             <div>
                <span className="text-slate-400 text-[8px] font-black uppercase tracking-widest block mb-1">Status</span>
                <span className="text-slate-950 text-xs font-bold uppercase tracking-widest">N+1 Redundancy</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Settings, title: "BOH Efficiency", desc: "35% Area Allocation", detail: "Invisible Logistics" },
            { icon: Users, title: "Vertical Core", desc: "12 High-Speed Lifts", detail: "Zero-Lag Flow" },
            { icon: Cpu, title: "Smart MEP", desc: "AI Climate Control", detail: "Peak-Load Ready" },
            { icon: Shield, title: "Closed Loop", desc: "Real-time P&L Sync", detail: "Institutional sync" }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-100 p-10 rounded-[3rem] flex flex-col justify-between h-[380px] hover:border-gold-400 transition-all duration-700 shadow-xl group">
               <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm">
                  <item.icon size={24} />
               </div>
               <div>
                  <h3 className="text-slate-950 font-serif text-2xl mb-2 italic leading-tight">{item.title}</h3>
                  <p className="text-gold-600 text-[9px] font-black uppercase tracking-widest mb-1">{item.desc}</p>
                  <p className="text-slate-400 text-xs font-light italic">{item.detail}</p>
               </div>
               <div className="pt-6 border-t border-slate-50 flex items-center justify-between opacity-30 group-hover:opacity-100 transition-opacity">
                  <span className="text-[7px] font-black uppercase tracking-widest">System Online</span>
                  <Activity size={12} className="text-gold-500 animate-pulse" />
               </div>
            </div>
          ))}
        </div>
        
        <div className="text-center p-12 bg-white border border-slate-200 rounded-[4rem] shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-24 opacity-[0.01] pointer-events-none group-hover:scale-110 transition-transform">
              <Layers size={300} className="text-slate-950" />
           </div>
           <p className="text-slate-950 font-serif text-3xl italic leading-tight max-w-2xl mx-auto relative z-10 mb-10">
              "Operational stress is eliminated through structural intelligence. Back-of-house is pre-calibrated for Year-50 volumes."
           </p>
           <div className="relative z-10">
              <Link to="/operations" className="inline-flex items-center gap-8 bg-slate-950 text-white px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 transition-all shadow-3xl group">
                  Backbone Audit <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
           </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalControl;