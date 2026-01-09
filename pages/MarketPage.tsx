import React from 'react';
import { ArrowLeft, Users, Landmark, TrendingUp, BarChart3, ArrowRight, Activity, MapPin, Target, ShieldCheck, PieChart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const MarketPage: React.FC = () => {
  const stats = [
    { label: "Annual Footfall", val: "12M+", sub: "Spiritual Pilgrims", img: "https://images.unsplash.com/photo-1600675281904-13e90046b961?auto=format&fit=crop&q=80" },
    { label: "Wedding Market", val: "250+", sub: "Daily Ceremonies", img: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80" },
    { label: "Luxury Supply", val: "0%", sub: "Within 10KM Radius", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80" },
    { label: "ADR Potential", val: "₹12k", sub: "Blended Premium Unit", img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-40 animate-fade-in overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="fixed top-0 right-0 w-1/3 h-screen bg-[#FDFBF7] -z-10 pointer-events-none border-l border-slate-100"></div>
      <div className="fixed top-[20%] left-[5%] text-slate-50 font-serif text-[40rem] font-black -z-20 pointer-events-none select-none italic leading-none opacity-60">M</div>

      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-4 text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] mb-16 hover:text-slate-900 transition-all group">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-40">
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-5">
              <div className="w-12 h-[1px] bg-gold-400"></div>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.6em]">Dossier Chapter 02: Market Logic</span>
            </div>
            <h1 className="text-slate-950 font-serif text-6xl md:text-[8rem] leading-[0.8] tracking-tighter italic">
              The Ritual <br/><span className="gold-gradient-text italic font-black">Economy.</span>
            </h1>
            <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-2xl italic">
                "Guruvayur is an inelastic spiritual hub. Unlike seasonal tourism, demand is driven by faith and tradition, ensuring a consistent 365-day operational floor."
            </p>
          </div>
          
          <div className="lg:col-span-5 pt-20">
             <div className="bg-[#FDFBF7] border border-slate-200 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:scale-110 transition-transform duration-[10s]">
                   <TrendingUp size={300} className="text-slate-950" />
                </div>
                <div className="relative z-10">
                   <div className="flex items-center gap-5 mb-10">
                      <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-gold-600 shadow-xl group-hover:bg-gold-500 group-hover:text-white transition-all">
                         <Globe size={28} />
                      </div>
                      <h4 className="text-slate-950 font-serif text-3xl italic">Global Arbitrage</h4>
                   </div>
                   <p className="text-slate-500 text-base font-light leading-relaxed mb-10">
                      Market Calibration indicates a RECESSION-PROOF status. Pilgrimage spend remains the final cut in household budget contractions.
                   </p>
                   <div className="pt-8 border-t border-slate-100 flex items-center justify-between opacity-40">
                      <span className="text-[10px] font-black uppercase tracking-widest">Inelasticity Index</span>
                      <ShieldCheck size={20} className="text-gold-500" />
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Arranged Stats Cluster */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
           {stats.map((stat, i) => (
               <div key={i} className={`group relative h-[600px] rounded-[4rem] overflow-hidden border border-slate-100 shadow-xl bg-slate-50 transition-all duration-1000 hover:shadow-3xl ${i % 2 === 1 ? 'lg:translate-y-24' : ''}`}>
                  <img src={stat.img} alt={stat.label} className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-40 transition-opacity"></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-12 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                     <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block border-b border-gold-200 pb-2 w-fit">{stat.label}</span>
                     <div className="text-slate-950 font-serif text-6xl md:text-7xl mb-4 group-hover:text-gold-600 transition-colors leading-none italic">{stat.val}</div>
                     <div className="text-slate-400 text-[10px] uppercase tracking-[0.5em] font-black">{stat.sub}</div>
                  </div>
                  
                  {/* Floating Tech Tag */}
                  <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                     <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center text-slate-950 shadow-3xl">
                        <Activity size={24} className="animate-pulse" />
                     </div>
                  </div>
               </div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40 items-center pt-24 border-t border-slate-100">
            <div className="space-y-16">
               <h3 className="text-slate-950 font-serif text-5xl md:text-[6rem] italic leading-[0.9] tracking-tighter">Supply <br/><span className="gold-gradient-text not-italic font-black">Void.</span></h3>
               <p className="text-slate-500 text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-gold-400 pl-12">
                  "The Guruvayur hospitality market is characterized by fragmented budget inventory. SGT captures the 100% supply-void for the high-net-worth segment."
               </p>
               <div className="p-16 bg-slate-50 border border-slate-200 rounded-[5rem] relative group shadow-3xl overflow-hidden">
                  <div className="absolute top-0 right-0 p-16 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                    <MapPin size={400} className="text-slate-950" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-12">
                      <div className="w-20 h-20 rounded-3xl bg-white border border-slate-100 flex items-center justify-center text-gold-600 shadow-2xl group-hover:bg-gold-500 group-hover:text-white transition-all">
                        <Target size={36} />
                      </div>
                      <h4 className="text-slate-950 font-serif text-4xl italic">The 1.5KM Advantage</h4>
                    </div>
                    <p className="text-slate-500 text-lg leading-relaxed font-light mb-12 border-l-2 border-slate-200 pl-8">
                       Price velocity in ritual economies is directly proportional to temple proximity. SGT's location in the South Nada corridor ensures maximum RevPAR capture.
                    </p>
                    <div className="pt-10 border-t border-slate-100">
                       <span className="text-[10px] text-slate-300 font-black uppercase tracking-[0.5em] italic">Audited Market Proximity Logged v2.5</span>
                    </div>
                  </div>
               </div>
            </div>

            <div className="bg-[#FDFBF7] border border-slate-200 p-16 md:p-24 rounded-[6rem] shadow-3xl relative overflow-hidden group">
               <div className="absolute top-0 left-0 p-24 opacity-[0.02] pointer-events-none">
                  <BarChart3 size={600} className="text-slate-950" />
               </div>
               <h3 className="text-slate-950 font-serif text-5xl mb-20 flex items-center gap-8 italic relative z-10">
                  <Activity className="text-gold-500 animate-pulse" size={40} /> Market Stability
               </h3>
               <div className="space-y-16 relative z-10">
                  {[
                    { label: "Non-Seasonal", desc: "Pilgrimage footfall is consistent across 365 days, mitigating seasonal leisure hotel volatility.", val: "365/365" },
                    { label: "Recession-Proof", desc: "Spiritual spend is the final expenditure cut by Indian households.", val: "High Alpha" },
                    { label: "Event Inelasticity", desc: "Regional wedding demand is independent of stock market cycles.", val: "Secured" }
                  ].map((item, i) => (
                    <div key={i} className="group/item">
                       <div className="flex justify-between items-baseline mb-6">
                          <span className="text-slate-950 font-serif text-4xl group-hover/item:text-gold-600 transition-colors italic leading-none">{item.label}</span>
                          <div className="flex-1 border-b border-dotted border-slate-200 mx-8"></div>
                          <span className="text-gold-600 font-black uppercase tracking-widest text-[11px] whitespace-nowrap">{item.val}</span>
                       </div>
                       <p className="text-slate-400 text-base font-light leading-relaxed italic border-l-2 border-slate-100 pl-8 group-hover/item:border-gold-400 transition-all">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Next Chapter Anchor */}
         <Link to="/hotel" className="group relative block w-full h-[700px] rounded-[6rem] overflow-hidden border border-slate-200 shadow-3xl bg-slate-50">
            <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" alt="Next" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-20 transition-opacity"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
               <span className="text-gold-600 text-[11px] font-black uppercase tracking-[1em] mb-12 block animate-float">Proceed to Chapter 03</span>
               <h3 className="text-slate-950 font-serif text-7xl md:text-9xl italic mb-20">Inventory <br/><span className="gold-gradient-text not-italic font-black tracking-tighter">Portfolio.</span></h3>
               <div className="w-32 h-32 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all duration-1000 shadow-3xl">
                  <ArrowRight size={56} className="group-hover:translate-x-4 transition-transform" />
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default MarketPage;