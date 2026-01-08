
import React from 'react';
import { ArrowLeft, Users, Landmark, TrendingUp, BarChart3, ArrowRight, Activity, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const MarketPage: React.FC = () => {
  const stats = [
    { label: "Annual Footfall", val: "12M+", sub: "Spiritual Pilgrims", img: "https://images.unsplash.com/photo-1600675281904-13e90046b961?auto=format&fit=crop&q=80" },
    { label: "Wedding Market", val: "250+", sub: "Daily Ceremonies", img: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80" },
    { label: "Luxury Supply", val: "0%", sub: "Within 10KM Radius", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80" },
    { label: "ADR Potential", val: "₹12k", sub: "Blended Premium Unit", img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in pb-20">
      <div className="container mx-auto px-6 mb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-10 hover:text-white transition-colors group">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Return to Summary
        </Link>
        <div className="max-w-4xl">
            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Dossier Chapter 02: Market Intelligence</span>
            <h1 className="text-white font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter mb-8 italic">The Ritual <br/><span className="gold-gradient-text italic font-black">Economy.</span></h1>
            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-2xl border-l border-gold-500/30 pl-8">
                Guruvayur is not a leisure tourism destination; it is an inelastic spiritual hub. Demand is driven by faith, tradition, and rituals that remain resilient across economic cycles.
            </p>
        </div>
      </div>

      {/* Visual Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mb-32 px-1">
         {stats.map((stat, i) => (
             <div key={i} className="relative group h-[500px] overflow-hidden">
                <img src={stat.img} alt={stat.label} className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110 brightness-[0.35] group-hover:brightness-[0.5]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                   <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">{stat.label}</span>
                   <div className="text-white font-serif text-6xl mb-2">{stat.val}</div>
                   <div className="text-slate-400 text-[9px] uppercase tracking-widest font-black">{stat.sub}</div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
             </div>
         ))}
      </div>

      <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40">
            <div className="space-y-10">
               <h3 className="text-white font-serif text-4xl italic">Supply vs Demand Arbitrage</h3>
               <p className="text-slate-400 text-lg leading-relaxed font-light">
                  Despite the massive footfall, Guruvayur lacks institutional-grade hospitality. Current inventory is fragmented across budget lodges and unrated hotels, leaving the high-net-worth pilgrim and NRI market completely underserved.
               </p>
               <div className="p-10 bg-onyx-900 border border-white/10 rounded-[3rem] relative group">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all">
                      <MapPin size={24} />
                    </div>
                    <h4 className="text-white font-serif text-2xl">The 1.5KM Advantage</h4>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                     Proximity to the South Nada (entrance) is the primary price driver. SGT is strategically located to command high-demand premiums while offering luxury seclusion.
                  </p>
               </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-12 rounded-[4rem] shadow-3xl">
               <h3 className="text-white font-serif text-3xl mb-10 flex items-center gap-4">
                  <Activity className="text-gold-500" size={24} /> Market Resilience
               </h3>
               <div className="space-y-12">
                  {[
                    { label: "Non-Seasonal", desc: "Unlike hill stations or beaches, pilgrimage footfall is consistent throughout 365 days.", val: "100%" },
                    { label: "Recession-Proof", desc: "Spiritual travel is often the last expense families cut during downturns.", val: "High" },
                    { label: "Wedding Inelasticity", desc: "Cultural rituals drive demand independent of market volatility.", val: "Stable" }
                  ].map((item, i) => (
                    <div key={i}>
                       <div className="flex justify-between items-end mb-3">
                          <span className="text-white font-bold text-lg">{item.label}</span>
                          <span className="text-gold-500 font-mono text-sm">{item.val}</span>
                       </div>
                       <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Next Chapter Anchor */}
         <Link to="/hotel" className="group relative block w-full h-[500px] rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl">
            <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-[0.25] transition-transform duration-[4s] group-hover:scale-105" alt="Next Section" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
               <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] mb-8 animate-pulse">Proceed to Next Intelligence</span>
               <h3 className="text-white font-serif text-6xl md:text-8xl italic mb-12">Inventory <br/><span className="gold-gradient-text font-black tracking-tighter">Specifications.</span></h3>
               <div className="w-20 h-20 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-700 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                  <ArrowRight size={40} />
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default MarketPage;
