import React from 'react';
import { IndianRupee, PieChart, ArrowRight, ShieldCheck, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Economics: React.FC = () => {
  return (
    <section id="economics-summary" className="py-12 bg-slate-50 relative h-full flex flex-col justify-center border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-[70vh]">
          <div className="space-y-10 flex flex-col justify-center">
            <div>
              <span className="text-gold-600 text-[9px] font-black uppercase tracking-[0.6em] block mb-4">Yield Engineering</span>
              <h2 className="text-slate-950 font-serif text-4xl md:text-7xl leading-[0.8] tracking-tighter italic">Strategic <br/><span className="gold-gradient-text not-italic font-black">Capital.</span></h2>
            </div>
            
            <p className="text-slate-500 text-xl font-light leading-tight max-w-md border-l-2 border-gold-300 pl-8 italic">
              Financial model structured around four core verticals, justified by architectural scarcity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: IndianRupee, label: "Rooms", val: "Anchor Yield" },
                { icon: Target, label: "Events & F&B", val: "Alpha Driver" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-white border border-slate-100 rounded-2xl group hover:border-gold-400 transition-all shadow-sm">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-gold-600">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="text-slate-950 font-serif text-xl italic">{item.val}</div>
                    <div className="text-slate-400 text-[8px] uppercase font-black tracking-widest">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/economics" className="inline-flex items-center gap-6 bg-slate-900 text-white px-10 py-5 rounded-full text-[9px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 transition-all shadow-xl w-fit">
                Full Economic Audit <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative group flex items-center justify-center">
             <div className="bg-white border border-slate-200 p-10 md:p-12 rounded-[4rem] shadow-2xl relative z-10 w-full max-w-lg">
                <div className="flex justify-between items-start mb-12 border-b border-slate-100 pb-6">
                   <h3 className="text-slate-900 text-[9px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
                     <PieChart size={14} className="text-gold-600" /> Revenue Architecture
                   </h3>
                   <TrendingUp size={20} className="text-slate-200" />
                </div>
                
                <div className="space-y-8">
                  {[
                    { label: "Rooms & Suites", p: "35% - 40%", width: "w-[40%]", color: "bg-blue-500" },
                    { label: "Food & Beverage", p: "20% - 25%", width: "w-[25%]", color: "bg-emerald-500" },
                    { label: "Weddings & Events", p: "15% - 20%", width: "w-[20%]", color: "bg-gold-500" },
                    { label: "Landmark Monetisation", p: "10% - 15%", width: "w-[15%]", color: "bg-rose-500" },
                  ].map((item, i) => (
                    <div key={i} className="group/bar">
                      <div className="flex justify-between text-[8px] text-slate-500 mb-2 uppercase tracking-[0.1em] font-black group-hover/bar:text-slate-950 transition-colors">
                        <span>{item.label}</span>
                        <span className="text-gold-600 font-mono">{item.p}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${item.width} ${item.color} transition-all duration-[2s]`}></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 pt-6 border-t border-slate-100 flex items-center gap-4">
                   <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                      <ShieldCheck size={16} />
                   </div>
                   <p className="text-[8px] uppercase tracking-widest font-black text-slate-500">
                     Institutional Downside Protection Verified
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