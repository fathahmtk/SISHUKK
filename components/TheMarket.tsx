import React from 'react';
import { Users, Calendar, MapPin, BarChart, ArrowRight, Activity, Target, ShieldCheck, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheMarket: React.FC = () => {
  return (
    <section id="market" className="py-64 bg-[#FDFBF7] border-t border-slate-200 relative overflow-hidden">
      <div className="absolute top-[20%] right-[-5%] text-slate-100 font-serif text-[40rem] font-black italic opacity-40 pointer-events-none select-none leading-none">M</div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-start">
          
          {/* Column 1: The Thesis Narrative */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-10">
               <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-200 rounded-full bg-white shadow-sm">
                  <Activity size={14} className="text-gold-600" />
                  <span className="text-gold-600 uppercase text-[10px] font-black tracking-[0.6em]">Chapter 02: Market Logic</span>
               </div>
               <h2 className="text-slate-950 font-serif text-6xl md:text-8xl leading-[0.8] tracking-tighter italic">
                 Skyline <br/><span className="gold-gradient-text not-italic font-black">Monopoly.</span>
               </h2>
               <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-xl italic">
                  "Guruvayur is an inelastic ritual hub. Unlike seasonal tourism, demand is driven by faith, ensuring a 365-day operational floor with high-margin capture."
               </p>
            </div>

            <div className="grid grid-cols-1 gap-12 pt-12 border-t border-slate-100">
               {[
                 { title: "Supply Void", desc: "Zero comparable 7-star luxury assets within 10KM radius." },
                 { title: "NRI Capital Hub", desc: "Capturing the returning diaspora demographic with global standards." },
                 { title: "Ritual Stability", desc: "Consistent wedding & spiritual footfall independent of economic cycles." }
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

          {/* Column 2: Contextual Grid Items */}
          <div className="lg:col-span-7">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: MapPin, title: "Strategic South Nada", desc: "1.5 KM direct proximity to the main temple gate ensures peak RevPAR capture.", pos: "" },
                  { icon: Landmark, title: "Visual Anchor", desc: "No competing vertical density ensures the asset is a regional waypoint marker.", pos: "lg:mt-24" },
                  { icon: Users, title: "12M+ Annual Floor", desc: "Massive captive market with growing HNW segment seeking premium residency.", pos: "lg:-mt-24" },
                  { icon: Target, title: "First-Mover Edge", desc: "Institutional-grade governance in a fragmented local market environment.", pos: "" },
                ].map((item, i) => (
                  <div key={i} className={`p-12 bg-white border border-slate-100 rounded-[4rem] group hover:border-gold-400 hover:shadow-3xl transition-all duration-700 ${item.pos}`}>
                    <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mb-10 border border-slate-100 group-hover:bg-gold-500 group-hover:text-white transition-colors shadow-sm">
                      <item.icon className="group-hover:rotate-12 transition-transform" size={28} />
                    </div>
                    <h3 className="text-slate-950 font-serif text-3xl mb-4 italic leading-none">{item.title}</h3>
                    <p className="text-slate-500 text-base font-light leading-relaxed">{item.desc}</p>
                    <div className="mt-8 pt-8 border-t border-slate-50 flex items-center gap-4 opacity-30 group-hover:opacity-100 transition-opacity">
                       <ShieldCheck size={14} className="text-gold-500" />
                       <span className="text-[8px] font-black uppercase tracking-widest">Market Verified</span>
                    </div>
                  </div>
                ))}
             </div>
             
             <div className="mt-24 p-16 bg-slate-950 rounded-[5rem] shadow-3xl relative overflow-hidden group">
                <div className="absolute top-[-20%] right-[-10%] text-white opacity-5 font-serif text-[25rem] font-black italic select-none pointer-events-none">M</div>
                <div className="relative z-10 flex flex-col justify-center items-center text-center">
                   <p className="text-white font-serif text-4xl italic leading-tight mb-12 max-w-lg">
                     "In dense spiritual corridors, architecture is the most durable <span className="gold-gradient-text not-italic font-black">market barrier.</span>"
                   </p>
                   <div className="h-px w-24 bg-gold-500/30"></div>
                   <div className="mt-10 flex items-center gap-6">
                      <div className="flex -space-x-3">
                         {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800"></div>)}
                      </div>
                      <span className="text-[10px] text-white/40 font-black uppercase tracking-widest">Audited Market Thesis Logged</span>
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