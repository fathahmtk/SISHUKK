
import React from 'react';
import { Hammer, PenTool, CheckCircle2, Star, Rocket, ChevronRight, ListChecks, CalendarRange, Info } from 'lucide-react';

const ExecutionTimeline: React.FC = () => {
  const steps = [
    { phase: "Phase 1", title: "Foundation & Core", status: "Completed", icon: Hammer, desc: "Piling and sub-structure works finalized. Structural baseline zero established.", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80" },
    { phase: "Phase 2", title: "Facade & MEP", status: "Active", icon: CheckCircle2, desc: "Level 8 slab casting in progress. DGU Glass fabrication active.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" },
    { phase: "Phase 3", title: "Fit-out & Smart Tech", status: "Upcoming", icon: PenTool, desc: "Boutique suite automation and Italian marble installation.", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80" },
    { phase: "Phase 4", title: "Operational Readiness", status: "Upcoming", icon: Star, desc: "Pre-opening marketing launch and key leadership recruitment.", img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80" },
  ];

  return (
    <section id="timeline" className="py-40 bg-onyx-950 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-4xl">
            <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] block mb-8">Asset Control: Execution Log</span>
            <h2 className="text-white font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter mb-10 italic">Project <br/><span className="gold-gradient-text italic font-black">Velocity.</span></h2>
            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-2xl border-l border-gold-500/30 pl-10">
              Our EPC management protocol ensures zero-lag transitions between structural and finishing phases. SGT is currently tracking 42.5% ahead of regional stabilization benchmarks.
            </p>
          </div>
          
          <div className="bg-onyx-900 border border-white/10 p-12 rounded-[3rem] shadow-3xl flex items-center gap-10">
             <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 border-4 border-gold-500/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-gold-500 border-t-transparent rounded-full animate-spin-slow"></div>
                <span className="text-white font-serif text-3xl font-black">42%</span>
             </div>
             <div>
                <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1">Global Completion</div>
                <div className="text-white font-bold">On Schedule 2026/27</div>
                <div className="text-emerald-500 text-[9px] font-black uppercase tracking-widest mt-2">Status: Level 8 Slab Casting</div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 px-1">
           {steps.map((step, i) => (
             <div key={i} className="group relative h-[600px] overflow-hidden">
                <img src={step.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110 brightness-[0.35] group-hover:brightness-75" alt={step.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute top-10 left-10">
                   <div className={`px-5 py-2 rounded-full border border-white/20 backdrop-blur-md ${step.status === 'Active' ? 'bg-gold-500/20 text-gold-500 border-gold-500/50' : 'bg-white/5 text-white/50'}`}>
                      <span className="text-[9px] font-black uppercase tracking-widest">{step.status}</span>
                   </div>
                </div>

                <div className="absolute bottom-12 left-12 right-12 space-y-4">
                   <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${step.status === 'Active' ? 'bg-gold-500 text-onyx-950' : 'bg-onyx-950 border border-white/10 text-slate-500'}`}>
                         <step.icon size={22} />
                      </div>
                      <div>
                         <span className="text-gold-500 text-[9px] font-black uppercase tracking-widest">{step.phase}</span>
                         <h4 className="text-white font-serif text-3xl">{step.title}</h4>
                      </div>
                   </div>
                   <p className="text-slate-400 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {step.desc}
                   </p>
                </div>
             </div>
           ))}
        </div>

        <div className="mt-24 flex flex-col md:flex-row items-center justify-between p-12 bg-white/[0.02] border border-white/5 rounded-[4rem]">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-onyx-900 border border-white/10 flex items-center justify-center text-gold-500">
                 <ListChecks size={28} />
              </div>
              <div>
                 <p className="text-white font-serif text-2xl italic">Technical Progress Dossier</p>
                 <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest">Authorized Partners can access live site feed below</p>
              </div>
           </div>
           <button className="px-12 py-6 bg-white/5 border border-white/10 hover:border-gold-500 text-white rounded-full text-[11px] font-black uppercase tracking-[0.5em] transition-all flex items-center gap-4 group">
              Access Task Log <Rocket size={18} className="text-gold-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </button>
        </div>
      </div>
    </section>
  );
};

export default ExecutionTimeline;
