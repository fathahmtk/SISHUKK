import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, AlertCircle, Scale, Landmark, Zap, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const RiskControl: React.FC = () => {
  return (
    <section id="risk" className="py-48 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="absolute top-[-5%] left-[-5%] text-slate-50 font-serif text-[45rem] font-black pointer-events-none select-none italic leading-none opacity-50">R</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-10">
               <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-200 rounded-full bg-gold-50/50 shadow-sm">
                  <ShieldCheck size={14} className="text-gold-600" />
                  <span className="text-gold-600 uppercase text-[10px] font-black tracking-[0.6em]">Audit & Safeguards</span>
               </div>
               
               <h2 className="text-slate-950 font-serif text-6xl md:text-8xl leading-[0.8] tracking-tighter italic">
                 Downside <br/><span className="gold-gradient-text not-italic font-black">Insulation.</span>
               </h2>
               
               <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 italic">
                 "Risk mitigation is designed into the physical asset. We identify structural volatility early and apply institutional-grade hedges."
               </p>
            </div>

            <div className="space-y-4">
               {[
                 "Non-seasonal Ritual Demand",
                 "Landmark Architectural Scarcity",
                 "Event-Led Operational Floor",
                 "Operator-Agnostic Structural Yield",
                 "100% Freehold Asset Base"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-6 p-6 bg-slate-50 border border-slate-200 rounded-3xl group hover:bg-white hover:border-gold-400 transition-all duration-500 shadow-sm">
                    <CheckCircle2 className="text-gold-500 group-hover:scale-125 transition-transform" size={20} />
                    <span className="text-slate-900 font-bold text-xs uppercase tracking-widest">{item}</span>
                 </div>
               ))}
               <div className="flex items-center gap-6 p-8 bg-gold-500 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 group-hover:scale-110 transition-transform">
                     <Landmark size={80} />
                  </div>
                  <ShieldCheck size={32} className="relative z-10" />
                  <span className="font-black text-sm uppercase tracking-widest relative z-10">Capital-Protected Investment Path</span>
               </div>
            </div>
            
            <div className="pt-6">
               <Link to="/risk" className="inline-flex items-center gap-6 text-slate-400 hover:text-gold-600 text-[10px] font-black uppercase tracking-[0.3em] transition-all border-b border-slate-100 pb-4 hover:border-gold-400 group">
                  View Risk Mitigation Matrix <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: Scale, title: "Yield Hedge", desc: "Multiple revenue centers ensure ADR pressure is offset by event margins." },
                  { icon: Zap, title: "Demand Inelasticity", desc: "Faith-driven footfall independent of leisure tourism cycles." },
                  { icon: Search, title: "Supply Void", desc: "Fragmented local inventory creates a natural barrier to entry." },
                  { icon: ShieldCheck, title: "Audit Integrity", desc: "Quarterly progress verification by Big-4 institutional partners." }
                ].map((item, i) => (
                   <div key={i} className={`p-12 rounded-[4rem] bg-[#FDFBF7] border border-slate-200 hover:border-gold-400 hover:bg-white transition-all duration-700 shadow-sm hover:shadow-3xl ${i % 2 === 1 ? 'lg:translate-y-16' : ''}`}>
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-gold-600 mb-8 shadow-sm">
                         <item.icon size={28} />
                      </div>
                      <h4 className="text-slate-950 font-serif text-3xl mb-4 italic leading-none">{item.title}</h4>
                      <p className="text-slate-500 text-base font-light leading-relaxed">{item.desc}</p>
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