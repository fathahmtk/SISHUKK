import React from 'react';
import { IndianRupee, PieChart, ArrowRight, ShieldCheck, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Economics: React.FC = () => {
  return (
    <section id="economics-summary" className="py-32 bg-onyx-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-900/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div>
              <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.6em] block mb-6">Revenue & Capital</span>
              <h2 className="text-white font-serif text-5xl md:text-7xl leading-tight italic">Landmark <br/><span className="gold-gradient-text italic font-black">Economics.</span></h2>
            </div>
            
            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-xl">
              This asset cannot be modeled like a city hotel. Revenue is driven by destination pull, iconic architecture, and non-linear demand from weddings and experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: IndianRupee, label: "Use of Funds", val: "Structural Dev" },
                { icon: Target, label: "Revenue Core", val: "Multi-Pillar" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl group hover:border-gold-500/30 transition-all">
                  <item.icon className="text-gold-500" size={24} />
                  <div>
                    <div className="text-white font-bold text-lg">{item.val}</div>
                    <div className="text-slate-500 text-[10px] uppercase font-black tracking-widest">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/economics" className="inline-flex items-center gap-6 bg-gold-500 text-onyx-950 px-12 py-6 rounded-full text-[11px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all shadow-3xl group">
                Deep-Dive Economics <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="relative group">
             <div className="absolute inset-0 bg-gold-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="bg-onyx-900 border border-white/10 p-12 md:p-16 rounded-[4rem] shadow-3xl relative z-10">
                <h3 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-12 flex items-center gap-3 border-b border-white/5 pb-4">
                  <PieChart size={14} className="text-gold-500" /> Revenue Verticals
                </h3>
                <div className="space-y-10">
                  {[
                    { label: "Rooms & Suites", p: "Anchor (35%)", width: "w-[35%]", color: "bg-blue-600" },
                    { label: "F&B Destination", p: "High Yield (25%)", width: "w-[25%]", color: "bg-emerald-500" },
                    { label: "Weddings & Events", p: "Engine (25%)", width: "w-[25%]", color: "bg-gold-500 shadow-[0_0_15px_#D4AF37]" },
                    { label: "Experiential", p: "Landmark (15%)", width: "w-[15%]", color: "bg-rose-500" },
                  ].map((item, i) => (
                    <div key={i} className="group/bar">
                      <div className="flex justify-between text-[11px] text-slate-300 mb-3 uppercase tracking-widest font-black group-hover/bar:text-white transition-colors">
                        <span>{item.label}</span>
                        <span className="text-gold-400">{item.p}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full ${item.width} ${item.color} transition-all duration-[2s] ease-out`}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-16 pt-8 border-t border-white/5 flex items-center gap-4 text-emerald-500">
                   <ShieldCheck size={18} />
                   <p className="text-[10px] uppercase tracking-widest font-black leading-none">
                     Diversified Downside Protection
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Economics;