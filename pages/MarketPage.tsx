import React from 'react';
import { ArrowLeft, Users, Landmark, TrendingUp, BarChart3, ArrowRight, Activity, MapPin, Target, ShieldCheck, PieChart } from 'lucide-react';
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
      <div className="container mx-auto px-6 mb-20">
        <Link to="/" className="inline-flex items-center gap-3 text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-12 hover:text-white transition-all group">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
        </Link>
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-slate-500 text-[10px] font-black uppercase tracking-[0.6em] mb-6">
              <MapPin size={14} /> Dossier Chapter 02: Market Intelligence
            </div>
            <h1 className="text-white font-serif text-6xl md:text-9xl leading-[0.8] tracking-tighter mb-10 italic">
              The Ritual <br/><span className="gold-gradient-text italic font-black">Economy.</span>
            </h1>
            <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-gold-500/30 pl-10">
                Guruvayur is an inelastic spiritual hub. Unlike seasonal tourism, demand is driven by faith and tradition, ensuring a consistent 365-day operational floor with high-margin capture.
            </p>
          </div>
          <div className="bg-onyx-900 border border-white/10 p-8 rounded-[2.5rem] hidden lg:block shadow-3xl">
            <div className="flex items-center gap-4 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-3">
              <TrendingUp size={18} /> Inelastic Demand Index
            </div>
            <p className="text-slate-400 text-xs font-mono">Market Calibration: <br/><span className="text-white uppercase">RECESSION-PROOF SECTOR</span></p>
          </div>
        </div>
      </div>

      {/* Cinematic Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mb-40 px-1">
         {stats.map((stat, i) => (
             <div key={i} className="relative group h-[550px] overflow-hidden">
                <img src={stat.img} alt={stat.label} className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-110 brightness-[0.3] group-hover:brightness-[0.4]" />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                   <span className="text-gold-500 text-[11px] font-black uppercase tracking-[0.4em] mb-6 block border-b border-gold-500/20 pb-2">{stat.label}</span>
                   <div className="text-white font-serif text-7xl md:text-8xl mb-4 group-hover:text-gold-300 transition-colors">{stat.val}</div>
                   <div className="text-slate-400 text-[10px] uppercase tracking-[0.5em] font-black">{stat.sub}</div>
                </div>
                {/* Decorative scanning line */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/10 to-transparent h-20 -translate-y-full group-hover:translate-y-[600px] transition-transform duration-[3s] pointer-events-none"></div>
             </div>
         ))}
      </div>

      <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40">
            <div className="space-y-12">
               <h3 className="text-white font-serif text-5xl md:text-7xl italic leading-tight">Supply <br/>Arbitrage.</h3>
               <p className="text-slate-400 text-xl font-light leading-relaxed">
                  The Guruvayur hospitality market is characterized by fragmented budget inventory. SIRSHUKK Grand Towers captures the 100% supply-void for the high-net-worth segment and NRI families who currently find no asset aligned with global 5-star standards.
               </p>
               <div className="p-12 bg-onyx-900 border border-white/10 rounded-[4rem] relative group shadow-3xl overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <MapPin size={200} className="text-white" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-10">
                      <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all shadow-2xl">
                        <Target size={28} />
                      </div>
                      <h4 className="text-white font-serif text-3xl italic">The 1.5KM Advantage</h4>
                    </div>
                    <p className="text-slate-500 text-base leading-relaxed font-light">
                       Price velocity in ritual economies is directly proportional to temple proximity. SGT's location in the South Nada corridor ensures maximum capture of high-ADR demand while providing luxury seclusion.
                    </p>
                  </div>
               </div>
            </div>
            <div className="bg-white/[0.02] border border-white/10 p-12 md:p-20 rounded-[5rem] shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
               <h3 className="text-white font-serif text-4xl mb-16 flex items-center gap-6 italic">
                  <Activity className="text-gold-500" size={32} /> Market Resilience
               </h3>
               <div className="space-y-16">
                  {[
                    { label: "Non-Seasonal", desc: "Pilgrimage footfall is consistent across 365 days, mitigating the seasonal volatility of leisure hotels.", val: "100%" },
                    { label: "Recession-Proof", desc: "Spiritual spend is the final expenditure cut by Indian households during economic contraction.", val: "High" },
                    { label: "Event Inelasticity", desc: "Regional wedding demand is independent of stock market cycles, ensuring banquet stability.", val: "Stable" }
                  ].map((item, i) => (
                    <div key={i} className="group/item">
                       <div className="flex justify-between items-end mb-4">
                          <span className="text-white font-serif text-3xl group-hover:text-gold-400 transition-colors italic">{item.label}</span>
                          <span className="text-gold-500 font-mono text-xl font-bold">{item.val}</span>
                       </div>
                       <p className="text-slate-500 text-base font-light leading-relaxed">{item.desc}</p>
                       <div className="h-px w-full bg-white/5 mt-10 group-hover/item:bg-gold-500/20 transition-colors"></div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Next Chapter Anchor */}
         <Link to="/hotel" className="group relative block w-full h-[600px] rounded-[5rem] overflow-hidden border border-white/10 shadow-3xl">
            <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-[0.2] transition-transform duration-[6s] group-hover:scale-105" alt="Next" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
               <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] mb-10 animate-pulse">Proceed to Chapter 03</span>
               <h3 className="text-white font-serif text-7xl md:text-9xl italic mb-16">Inventory <br/><span className="gold-gradient-text font-black tracking-tighter">Portfolio.</span></h3>
               <div className="w-24 h-24 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-1000 shadow-[0_0_60px_rgba(212,175,55,0.4)]">
                  <ArrowRight size={48} className="group-hover:translate-x-2 transition-transform" />
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default MarketPage;