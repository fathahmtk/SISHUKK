import React from 'react';
import { Users, MapPin, ArrowRight, Activity, Target, ShieldCheck, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheMarket: React.FC = () => {
  return (
    <section id="market" className="py-64 bg-[#FDFBF7] border-t border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-start">
          
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-10">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-[1px] bg-gold-500"></div>
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.6em]">Chapter 02: Market Logic</span>
               </div>
               <h2 className="text-slate-950 font-serif text-6xl md:text-8xl leading-[0.8] tracking-tighter italic">
                 Ritual <br/><span className="gold-gradient-text not-italic font-black">Economy.</span>
               </h2>
               <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-xl italic">
                  "Guruvayur is an inelastic spiritual hub. Demand is faith-driven, ensuring a stabilized 365-day operational floor."
               </p>
            </div>

            <div className="grid grid-cols-1 gap-12 pt-12 border-t border-slate-200">
               {[
                 { title: "Supply Void", desc: "Zero comparable 7-star luxury assets within 10KM radius." },
                 { title: "NRI Capital Hub", desc: "Capturing the returning diaspora demographic with global standards." },
                 { title: "Market Stability", desc: "Consistent wedding & spiritual footfall independent of cycles." }
               ].map((item, i) => (
                 <div key={i} className="group flex gap-8 items-start">
                    <div className="text-gold-600 font-serif text-3xl italic opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                    <div>
                       <h4 className="text-slate-950 font-black uppercase tracking-widest text-[11px] mb-2 group-hover:text-gold-600 transition-colors">{item.title}</h4>
                       <p className="text-slate-400 text-sm leading-relaxed italic">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="pt-10">
               <Link to="/market" className="inline-flex items-center gap-10 bg-slate-950 text-white px-12 py-7 rounded-full text-[11px] font-black uppercase tracking-[0.5em] hover:bg-gold-500 transition-all shadow-3xl group active:scale-95">
                  Analyze Location Logic <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
               </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: MapPin, title: "South Nada", desc: "1.5 KM direct proximity to the main temple gate ensures peak capture.", pos: "" },
                  { icon: Landmark, title: "Visual Anchor", desc: "No competing vertical density ensures high landmark recall.", pos: "lg:mt-24" },
                  { icon: Users, title: "12M+ Annual", desc: "Massive captive market with high-net-worth segment focus.", pos: "lg:-mt-24" },
                  { icon: Target, title: "First-Mover", desc: "Institutional-grade governance in a fragmented local market.", pos: "" },
                ].map((item, i) => (
                  <div key={i} className={`p-12 bg-white border border-slate-100 rounded-[4rem] group hover:border-gold-400 hover:shadow-3xl transition-all duration-700 ${item.pos}`}>
                    <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mb-10 border border-slate-100 group-hover:bg-gold-500 group-hover:text-white transition-colors shadow-sm">
                      <item.icon className="group-hover:rotate-12 transition-transform" size={28} />
                    </div>
                    <h3 className="text-slate-950 font-serif text-3xl mb-4 italic leading-none">{item.title}</h3>
                    <p className="text-slate-500 text-base font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
             
             <div className="mt-24 p-16 bg-slate-950 rounded-[5rem] shadow-3xl relative overflow-hidden group">
                <div className="absolute top-[-20%] right-[-10%] text-white opacity-5 font-serif text-[25rem] font-black italic select-none pointer-events-none">M</div>
                <div className="relative z-10 text-center space-y-12">
                   <p className="text-white font-serif text-4xl italic leading-tight max-w-lg mx-auto">
                     "In spiritual corridors, architecture is the most durable <span className="gold-gradient-text not-italic font-black">market barrier.</span>"
                   </p>
                   <div className="flex items-center justify-center gap-6">
                      <ShieldCheck size={20} className="text-gold-500" />
                      <span className="text-[10px] text-white/40 font-black uppercase tracking-widest">Audited Thesis v2.5</span>
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