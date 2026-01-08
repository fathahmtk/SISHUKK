
import React from 'react';
import { Flag, Hammer, PenTool, CheckCircle2, Star, Rocket, ChevronRight, ListChecks, CalendarRange } from 'lucide-react';

const ExecutionTimeline: React.FC = () => {
  const steps = [
    { phase: "Phase 1", title: "Foundation & Core", status: "Completed", icon: Hammer, desc: "Piling and sub-structure concrete works finalized. Structural baseline zero established." },
    { phase: "Phase 2", title: "Facade & MEP", status: "Active", icon: CheckCircle2, desc: "DGU Glass delivery on site. Level 8 slab casting in progress. HVAC fabrication active." },
    { phase: "Phase 3", title: "Fit-out & Smart Tech", status: "Upcoming", icon: PenTool, desc: "Boutique suite automation and marble installation across the South Tower." },
    { phase: "Phase 4", title: "Operational Readiness", status: "Upcoming", icon: Star, desc: "Pre-opening marketing launch and key leadership recruitment from Tier-1 groups." },
    { phase: "Phase 5", title: "Institutional Exit", status: "Strategic", icon: Rocket, desc: "Asset stabilization audit and preparation for REIT / Sovereign Fund divestment." },
  ];

  return (
    <section id="timeline" className="py-32 bg-onyx-950 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] block mb-6">Task Control Center</span>
            <h2 className="text-white font-serif text-5xl md:text-8xl tracking-tighter italic">Execution <br/><span className="gold-gradient-text italic">Ledger.</span></h2>
          </div>
          <div className="flex items-center gap-6 bg-white/5 border border-white/10 px-8 py-5 rounded-2xl backdrop-blur-3xl shadow-3xl">
             <div className="flex flex-col text-right">
                <span className="text-slate-500 text-[9px] font-black uppercase tracking-widest">Global Progress</span>
                <span className="text-white font-serif text-3xl">42.5%</span>
             </div>
             <div className="w-16 h-16 rounded-full border-4 border-gold-500/20 flex items-center justify-center relative">
                <div className="absolute inset-0 border-4 border-gold-500 border-t-transparent rounded-full animate-spin-slow"></div>
                <ListChecks className="text-gold-500" size={24} />
             </div>
          </div>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className={`group relative p-10 rounded-[3rem] border transition-all duration-700 flex flex-col md:flex-row items-center gap-12 overflow-hidden ${
              step.status === 'Active' ? 'bg-gold-500/5 border-gold-500/30 shadow-[0_30px_60px_rgba(212,175,55,0.1)]' : 'bg-white/[0.02] border-white/5 opacity-60 hover:opacity-100 hover:bg-white/5'
            }`}>
              {/* Dynamic Status Bar */}
              {step.status === 'Active' && <div className="absolute left-0 top-0 bottom-0 w-2 bg-gold-500 animate-pulse"></div>}
              
              <div className="flex items-center gap-10 md:w-1/3 shrink-0">
                 <div className={`w-24 h-24 rounded-3xl flex items-center justify-center border transition-all duration-700 ${
                   step.status === 'Completed' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-500' :
                   step.status === 'Active' ? 'bg-onyx-950 border-gold-500 text-gold-500 shadow-2xl scale-110' :
                   'bg-onyx-900 border-white/10 text-slate-600'
                 }`}>
                   <step.icon size={40} />
                 </div>
                 <div>
                    <div className="text-gold-500 text-[10px] font-black uppercase tracking-widest mb-1">{step.phase}</div>
                    <h4 className="text-white font-serif text-3xl group-hover:text-gold-400 transition-colors leading-tight">{step.title}</h4>
                 </div>
              </div>

              <div className="flex-1">
                 <p className="text-slate-500 text-base leading-relaxed mb-6 font-light">{step.desc}</p>
                 <div className="flex items-center gap-4">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                      step.status === 'Completed' ? 'bg-emerald-500 text-onyx-950' :
                      step.status === 'Active' ? 'bg-gold-500 text-onyx-950' : 'bg-white/5 text-slate-500'
                    }`}>
                      {step.status}
                    </span>
                    <button className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-600 hover:text-white transition-colors">
                       Audit Task Logs <ChevronRight size={14} />
                    </button>
                 </div>
              </div>

              <div className="hidden lg:block shrink-0">
                 <div className="p-8 bg-onyx-950/50 rounded-3xl border border-white/5 flex flex-col items-center gap-2">
                    <CalendarRange size={20} className="text-slate-600" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">ETA</span>
                    <span className="text-gold-500 font-serif text-xl">2026/27</span>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
            <button className="inline-flex items-center gap-6 px-12 py-6 bg-white/5 border border-white/10 text-slate-300 hover:border-gold-500 hover:text-white transition-all rounded-full text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl active:scale-95 group">
                Access Real-Time Task Dashboard <Rocket size={18} className="text-gold-500 group-hover:translate-x-2 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default ExecutionTimeline;
