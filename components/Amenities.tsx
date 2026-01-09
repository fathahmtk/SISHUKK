import React from 'react';
import { Sparkles, Activity, ShoppingBag, Server, Shield, Wifi, Gem, Cpu, ArrowUpRight, Zap, Target } from 'lucide-react';

const Amenities: React.FC = () => {
  return (
    <section className="py-64 bg-white relative overflow-hidden">
      <div className="absolute top-[-5%] left-[-2%] text-slate-50 font-serif text-[40rem] font-black italic opacity-40 pointer-events-none select-none">A</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-40 flex flex-col lg:flex-row justify-between items-end gap-16">
          <div className="max-w-4xl">
            <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.8em] block mb-10">Chapter 07: Facility Inventory</span>
            <h2 className="font-serif text-6xl md:text-9xl text-slate-950 mb-12 leading-[0.8] tracking-tighter italic">
              Lifestyle & <br/><span className="gold-gradient-text italic font-black">Operations.</span>
            </h2>
            <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 italic">
              "Beyond event spaces, the asset integrates high-yield curated amenities and an institutional operational technology stack."
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-8 bg-[#FDFBF7] px-12 py-8 rounded-[3rem] border border-slate-200 shadow-2xl group transition-all hover:border-gold-300">
             <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-gold-600 shadow-sm group-hover:scale-110 transition-transform">
                <Cpu size={24} className="animate-pulse" />
             </div>
             <div>
                <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-1">Audit Status</span>
                <span className="text-slate-950 text-xs font-bold uppercase tracking-widest">BIM Optimized Core</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Staggered Lifestyle Items */}
          <div className="lg:col-span-7 space-y-10">
            <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-16 border-b border-slate-100 pb-4 flex items-center justify-between">
               Wellness & Boutique Integration <span className="text-gold-500 opacity-40">v.2.5</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Sparkles, title: "Spa Sanctuary", sub: "Vedic Rejuvenation Core", desc: "12,000 Sq. Ft. of physician-led curative space targeting HNW medical tourism.", pos: "lg:translate-y-12" },
                { icon: Activity, title: "Altitude Deck", sub: "Panorama Fitness & Yoga", desc: "Level 15 glass observatory for sunrise spiritual practice and recovery protocols.", pos: "" },
                { icon: ShoppingBag, title: "Couture Wings", sub: "Leased Wedding Retail", desc: "Curated boutiques for high-end ceremonial wear, generating consistent rental yield.", pos: "lg:translate-y-12" },
                { icon: Gem, title: "VIP Concierge", sub: "The Meridian Lounge", desc: "Exclusive gateway for institutional partners and HNW residency guests.", pos: "" }
              ].map((item, i) => (
                <div key={i} className={`p-12 bg-[#FDFBF7] border border-slate-200 rounded-[4rem] group hover:bg-white hover:border-gold-400 transition-all duration-700 shadow-sm hover:shadow-3xl ${item.pos}`}>
                  <div className="w-16 h-16 bg-white rounded-3xl border border-slate-100 flex items-center justify-center text-gold-600 mb-10 group-hover:bg-gold-500 group-hover:text-white transition-all shadow-sm">
                    <item.icon size={28} />
                  </div>
                  <span className="text-gold-600 text-[8px] font-black uppercase tracking-widest mb-2 block">{item.sub}</span>
                  <h4 className="text-slate-950 font-serif text-3xl mb-6 italic leading-none">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-light group-hover:text-slate-600 transition-colors mb-10">{item.desc}</p>
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between opacity-40 group-hover:opacity-100 transition-opacity">
                     <span className="text-[8px] font-black uppercase tracking-widest">Revenue Center</span>
                     <ArrowUpRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Technical Ops Dashboard */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="bg-slate-950 p-16 md:p-20 rounded-[5rem] shadow-3xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                  <Server size={350} className="text-white" />
               </div>
               
               <div className="relative z-10">
                  <div className="flex justify-between items-start mb-20">
                     <div className="w-16 h-16 rounded-3xl bg-gold-500 flex items-center justify-center text-onyx-950 shadow-2xl">
                        <Zap size={32} />
                     </div>
                     <span className="text-white/40 text-[9px] font-black uppercase tracking-widest border border-white/20 px-6 py-2 rounded-full">Systems Ledger</span>
                  </div>
                  
                  <h3 className="text-white font-serif text-5xl mb-12 italic leading-tight">Invisible <br/>Engineering.</h3>
                  
                  <div className="space-y-12">
                     {[
                       { icon: Server, title: "AI HVAC Control", val: "22% OpEx Saving", desc: "Autonomous thermal management based on BIM occupancy data." },
                       { icon: Wifi, title: "IoT Identity", val: "Keyless Node", desc: "Mobile-first guest journey linked to regional temple darshan logs." },
                       { icon: Shield, title: "P&L ERP Loop", val: "Real-time Audits", desc: "Full operational transparency for institutional stakeholders." }
                     ].map((row, i) => (
                        <div key={i} className="group/row">
                           <div className="flex items-start gap-6 mb-4">
                              <div className="w-2 h-2 rounded-full bg-gold-500 mt-2"></div>
                              <div>
                                 <h5 className="text-white font-serif text-2xl group-hover/row:text-gold-400 transition-colors italic leading-none mb-1">{row.title}</h5>
                                 <div className="text-gold-600 text-[10px] font-black uppercase tracking-widest mb-3">{row.val}</div>
                                 <p className="text-slate-500 text-sm leading-relaxed">{row.desc}</p>
                              </div>
                           </div>
                           {i !== 2 && <div className="h-px w-full bg-white/5 my-8"></div>}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            
            <div className="mt-12 text-center">
               <button className="px-12 py-6 bg-[#FDFBF7] border border-slate-200 text-slate-900 rounded-full text-[10px] font-black uppercase tracking-[0.5em] transition-all hover:bg-white hover:border-gold-500 shadow-xl flex items-center gap-6 mx-auto group">
                 Inspect Technical Backbone <Target size={18} className="text-gold-500 group-hover:scale-125 transition-transform" />
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Amenities;