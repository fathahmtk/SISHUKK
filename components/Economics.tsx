import React from 'react';
import { IndianRupee, PieChart, ArrowRight, ShieldCheck, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Economics: React.FC = () => {
  return (
    <section id="economics-summary" className="py-48 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-100/30 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-12">
            <div>
              <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.8em] block mb-8">Yield Engineering</span>
              <h2 className="text-slate-950 font-serif text-5xl md:text-9xl leading-[0.8] tracking-tighter italic">Strategic <br/><span className="gold-gradient-text not-italic font-black">Capital.</span></h2>
            </div>
            
            <p className="text-slate-500 text-2xl font-light leading-relaxed max-w-xl border-l-2 border-gold-300 pl-10">
              The financial model is structured around four core revenue verticals, each justified by the asset’s architectural scarcity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: IndianRupee, label: "Rooms", val: "Anchor Yield" },
                { icon: Target, label: "Events & F&B", val: "Alpha Driver" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-8 bg-white border border-slate-100 rounded-[2.5rem] group hover:border-gold-400 transition-all shadow-sm hover:shadow-2xl">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-gold-600 border border-slate-100 group-hover:bg-gold-500 group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="text-slate-950 font-serif text-2xl italic">{item.val}</div>
                    <div className="text-slate-400 text-[10px] uppercase font-black tracking-widest mt-1">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/economics" className="inline-flex items-center gap-8 bg-slate-900 text-white px-12 py-6 rounded-full text-[11px] font-black uppercase tracking-[0.5em] hover:bg-gold-500 transition-all shadow-2xl group">
                Full Economic Audit <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="relative group">
             <div className="absolute inset-0 bg-gold-200/20 blur-[150px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="bg-white border border-slate-200 p-12 md:p-20 rounded-[5rem] shadow-3xl relative z-10">
                <div className="flex justify-between items-start mb-16 border-b border-slate-100 pb-8">
                   <h3 className="text-slate-900 text-xs font-black uppercase tracking-[0.4em] flex items-center gap-4">
                     <PieChart size={16} className="text-gold-600" /> Revenue Architecture
                   </h3>
                   <TrendingUp size={24} className="text-slate-200" />
                </div>
                
                <div className="space-y-12">
                  {[
                    { label: "Rooms & Suites", p: "35% - 40%", width: "w-[40%]", color: "bg-blue-500" },
                    { label: "Food & Beverage", p: "20% - 25%", width: "w-[25%]", color: "bg-emerald-500" },
                    { label: "Weddings & Events", p: "15% - 20%", width: "w-[20%]", color: "bg-gold-500" },
                    { label: "Landmark Monetisation", p: "10% - 15%", width: "w-[15%]", color: "bg-rose-500" },
                  ].map((item, i) => (
                    <div key={i} className="group/bar">
                      <div className="flex justify-between text-[10px] text-slate-500 mb-4 uppercase tracking-[0.2em] font-black group-hover/bar:text-slate-950 transition-colors">
                        <span>{item.label}</span>
                        <span className="text-gold-600 font-mono">{item.p}</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                        <div className={`h-full ${item.width} ${item.color} transition-all duration-[2.5s] ease-out rounded-full shadow-lg`}></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-20 pt-10 border-t border-slate-100 flex items-center gap-5">
                   <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                      <ShieldCheck size={20} />
                   </div>
                   <p className="text-[10px] uppercase tracking-widest font-black text-slate-500 leading-none">
                     Institutional Grade Downside Protection Verified
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