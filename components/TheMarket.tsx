import React from 'react';
import { Users, MapPin, ArrowRight, Target, ShieldCheck, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheMarket: React.FC = () => {
  return (
    <section id="market" className="py-20 bg-[#FDFBF7] relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-[1px] bg-gold-500"></div>
                  <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.6em]">Chapter 02: Market Logic</span>
               </div>
               <h2 className="text-slate-950 font-serif text-5xl md:text-7xl leading-[0.8] tracking-tighter italic">
                 Ritual <br/><span className="gold-gradient-text not-italic font-black">Economy.</span>
               </h2>
               <p className="text-slate-500 text-xl font-light leading-relaxed border-l-2 border-gold-400 pl-10 italic">
                  Demand is faith-driven and non-cyclical, ensuring a stabilized operational floor 365 days a year.
               </p>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-8 border-t border-slate-200">
               {[
                 { title: "Supply Void", desc: "Zero comparable 7-star assets within 10KM radius." },
                 { title: "NRI Capital Hub", desc: "Capturing the top-tier returning diaspora demographic." },
                 { title: "Market Stability", desc: "Consistent footfall independent of leisure cycles." }
               ].map((item, i) => (
                 <div key={i} className="group flex gap-6 items-start">
                    <div className="text-gold-600 font-serif text-2xl italic opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                    <div>
                       <h4 className="text-slate-950 font-black uppercase tracking-widest text-[10px] mb-1 group-hover:text-gold-600 transition-colors">{item.title}</h4>
                       <p className="text-slate-400 text-xs leading-relaxed italic">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="pt-6">
               <Link to="/market" className="inline-flex items-center gap-8 bg-slate-950 text-white px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 transition-all shadow-3xl group">
                  Market Analysis <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-6">
             {[
               { icon: MapPin, title: "South Nada", desc: "1.5 KM direct proximity to the main gate." },
               { icon: Landmark, title: "Visual Anchor", desc: "No competing high-rise density in the zone." },
               { icon: Users, title: "12M+ Annual", desc: "Massive captive market with HNW segment focus." },
               { icon: Target, title: "First-Mover", desc: "Institutional grade in a fragmented market." },
             ].map((item, i) => (
               <div key={i} className="p-8 bg-white border border-slate-100 rounded-[3rem] group hover:border-gold-400 hover:shadow-2xl transition-all duration-700">
                 <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                   <item.icon size={20} />
                 </div>
                 <h3 className="text-slate-950 font-serif text-2xl mb-2 italic leading-none">{item.title}</h3>
                 <p className="text-slate-500 text-xs font-light leading-relaxed">{item.desc}</p>
               </div>
             ))}
             <div className="col-span-2 p-10 bg-slate-950 rounded-[3.5rem] shadow-xl relative overflow-hidden group">
                <div className="absolute top-[-20%] right-[-10%] text-white opacity-5 font-serif text-[15rem] font-black italic pointer-events-none">M</div>
                <div className="relative z-10 text-center space-y-6">
                   <p className="text-white font-serif text-2xl italic leading-tight max-w-lg mx-auto">
                     "Architecture is the most durable <span className="gold-gradient-text not-italic font-black">market barrier.</span>"
                   </p>
                   <div className="flex items-center justify-center gap-4">
                      <ShieldCheck size={16} className="text-gold-500" />
                      <span className="text-[9px] text-white/40 font-black uppercase tracking-widest">Thesis v2.5 Verified</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheMarket;