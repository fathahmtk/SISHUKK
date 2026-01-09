import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Scale, Landmark, Zap, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const RiskControl: React.FC = () => {
  return (
    <section id="risk" className="py-12 bg-white border-t border-slate-100 relative h-full flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center h-[70vh]">
          
          <div className="lg:col-span-5 space-y-10 flex flex-col justify-center h-full">
            <div className="space-y-6">
               <div className="inline-flex items-center gap-4 px-4 py-2 border border-gold-200 rounded-full bg-gold-50/50 shadow-sm">
                  <ShieldCheck size={12} className="text-gold-600" />
                  <span className="text-gold-600 uppercase text-[9px] font-black tracking-[0.6em]">Audit & Safeguards</span>
               </div>
               
               <h2 className="text-slate-950 font-serif text-4xl md:text-7xl leading-[0.8] tracking-tighter italic">
                 Downside <br/><span className="gold-gradient-text not-italic font-black">Insulation.</span>
               </h2>
               
               <p className="text-slate-500 text-xl font-light leading-tight border-l-2 border-gold-400 pl-8 italic max-w-sm">
                 "Risk mitigation is designed into the physical asset through structural hedges."
               </p>
            </div>

            <div className="space-y-3">
               {[
                 "Non-seasonal Ritual Demand",
                 "Landmark Scarcity Index",
                 "100% Freehold Asset Base"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl group hover:border-gold-400 transition-all shadow-sm">
                    <CheckCircle2 className="text-gold-500" size={16} />
                    <span className="text-slate-900 font-bold text-[10px] uppercase tracking-widest">{item}</span>
                 </div>
               ))}
               <div className="flex items-center gap-4 p-6 bg-gold-500 text-white rounded-2xl shadow-xl relative overflow-hidden group">
                  <ShieldCheck size={24} className="relative z-10" />
                  <span className="font-black text-[10px] uppercase tracking-widest relative z-10">Capital-Protected Investment Path</span>
               </div>
            </div>
            
            <Link to="/risk" className="inline-flex items-center gap-4 text-slate-400 hover:text-gold-600 text-[10px] font-black uppercase tracking-[0.3em] transition-all border-b border-slate-100 pb-2 hover:border-gold-400 group w-fit">
              Risk Mitigation Matrix <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="lg:col-span-7 h-full flex items-center">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {[
                  { icon: Scale, title: "Yield Hedge", desc: "Revenue centers offset ADR pressure." },
                  { icon: Zap, title: "Inelasticity", desc: "Faith-driven footfall is stable." },
                  { icon: Search, title: "Supply Void", desc: " land scarcity creates natural entry barrier." },
                  { icon: ShieldCheck, title: "Audit Integrity", desc: "Big-4 quarterly milestone verification." }
                ].map((item, i) => (
                   <div key={i} className={`p-8 rounded-[2.5rem] bg-[#FDFBF7] border border-slate-200 hover:border-gold-400 hover:bg-white transition-all shadow-sm ${i % 2 === 1 ? 'lg:translate-y-8' : ''}`}>
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-gold-600 mb-6 shadow-sm">
                         <item.icon size={22} />
                      </div>
                      <h4 className="text-slate-950 font-serif text-2xl mb-2 italic leading-none">{item.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RiskControl;