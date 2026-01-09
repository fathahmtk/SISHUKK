import React from 'react';
import { Settings, Shield, Cpu, Users, ArrowRight, Layers, Workflow, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const OperationalControl: React.FC = () => {
  return (
    <section id="operations" className="py-48 bg-[#FDFBF7] border-t border-slate-200 relative overflow-hidden">
      <div className="absolute top-[20%] right-[-5%] text-slate-100 font-serif text-[40rem] font-black pointer-events-none select-none italic leading-none opacity-40">O</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-16">
          <div className="max-w-4xl">
            <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.8em] block mb-10">Chapter 07: Invisible Systems</span>
            <h2 className="font-serif text-6xl md:text-9xl text-slate-950 mb-12 leading-[0.8] tracking-tighter italic">
              Operational <br/><span className="gold-gradient-text italic font-black">Velocity.</span>
            </h2>
            <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 italic">
              "The asset is engineered for seamless peak-load performance. Complete segregation of resident guest and event visitor circulation."
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-8 bg-white px-12 py-8 rounded-[3rem] border border-slate-200 shadow-2xl group transition-all hover:border-gold-300">
             <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-gold-600 shadow-sm group-hover:scale-110 transition-transform">
                <Workflow size={24} className="animate-pulse" />
             </div>
             <div>
                <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-1">Process Status</span>
                <span className="text-slate-950 text-xs font-bold uppercase tracking-widest">N+1 Redundancy</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { icon: Settings, title: "Oversized BOH", desc: "35% Area Allocation", detail: "Invisible Service Core" },
            { icon: Users, title: "Vertical Logistics", desc: "12 High-Speed Cores", detail: "Zero-Lag Movement" },
            { icon: Cpu, title: "High-Capacity MEP", desc: "Peak-Load Engineered", detail: "Climate Sovereignty" },
            { icon: Shield, title: "BMS Loop", desc: "Real-time AI Control", detail: "Energy Optimization" }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-100 p-12 rounded-[4rem] flex flex-col justify-between h-[450px] hover:border-gold-400 transition-all duration-700 shadow-xl group">
               <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm">
                  <item.icon size={28} />
               </div>
               <div>
                  <h3 className="text-slate-950 font-serif text-3xl mb-4 italic">{item.title}</h3>
                  <p className="text-gold-600 text-[10px] font-black uppercase tracking-widest mb-2">{item.desc}</p>
                  <p className="text-slate-400 text-sm font-light italic">{item.detail}</p>
               </div>
               <div className="pt-8 border-t border-slate-50 flex items-center justify-between opacity-30 group-hover:opacity-100 transition-opacity">
                  <span className="text-[8px] font-black uppercase tracking-widest">System Ready</span>
                  <Activity size={14} className="text-gold-500 animate-pulse" />
               </div>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-12 bg-white border border-slate-200 p-20 rounded-[5rem] shadow-3xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-24 opacity-[0.02] pointer-events-none">
              <Layers size={400} className="text-slate-950" />
           </div>
           <p className="text-slate-950 font-serif text-4xl italic leading-tight max-w-3xl mx-auto relative z-10">
              "Operational stress is eliminated through structural intelligence. Our back-of-house is pre-calibrated for Year-50 volumes."
           </p>
           <div className="relative z-10">
              <Link to="/operations" className="inline-flex items-center gap-10 bg-slate-950 text-white px-16 py-8 rounded-full text-[11px] font-black uppercase tracking-[0.5em] hover:bg-gold-500 transition-all shadow-3xl group active:scale-95">
                  Inspect Technical Backbone <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
           </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalControl;