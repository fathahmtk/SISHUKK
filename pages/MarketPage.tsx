import React from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, TrendingUp, Globe, Target, MapPin, Activity, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const MarketPage: React.FC = () => {
  const stats = [
    { label: "Annual Footfall", val: "12M+", sub: "Spiritual Pilgrims", img: "https://images.unsplash.com/photo-1600675281904-13e90046b961?auto=format&fit=crop&q=80" },
    { label: "Wedding Market", val: "250+", sub: "Daily Ceremonies", img: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80" },
    { label: "Luxury Supply", val: "0%", sub: "Within 10KM Radius", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80" },
    { label: "ADR Potential", val: "₹12k", sub: "Blended Premium Unit", img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="bg-white min-h-screen animate-fade-in overflow-hidden">
      {/* Cinematic Market Hero */}
      <div className="relative h-[85vh] w-full bg-slate-900 flex items-end pb-24">
         <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            alt="Market Landscape"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
         
         <div className="container mx-auto px-6 relative z-10">
            <Link to="/" className="inline-flex items-center gap-4 text-gold-400 text-[10px] font-black uppercase tracking-[0.5em] mb-12 hover:text-white transition-all group">
                <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
            </Link>
            
            <div className="max-w-4xl">
               <div className="flex items-center gap-5 mb-8">
                  <div className="w-12 h-[1px] bg-gold-500"></div>
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.6em]">Chapter 02: Market Dynamics</span>
               </div>
               <h1 className="text-white font-serif text-6xl md:text-[8rem] leading-[0.8] tracking-tighter italic mb-8">
                  The Ritual <br/><span className="gold-gradient-text italic font-black">Economy.</span>
               </h1>
               <p className="text-slate-300 text-2xl font-light leading-relaxed border-l-2 border-gold-500 pl-12 max-w-2xl italic">
                  "Guruvayur represents an inelastic pilgrimage engine. Unlike seasonal leisure corridors, demand here is faith-driven, ensuring a stabilized operational floor 365 days a year."
               </p>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-20">
        {/* Core Market stats */}
        <div className="bg-white border border-slate-200 rounded-[3rem] p-12 shadow-3xl mb-32 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { l: "Demand Type", v: "Ritual", s: "Inelastic Core" },
              { l: "Supply Gap", v: "100%", s: "Luxury Supply Void" },
              { l: "ALOS Goal", v: "2.5x", s: "Length of Stay Multiplier" },
              { l: "Exit Cycle", v: "7 Years", s: "Stabilization Horizon" }
            ].map((stat, i) => (
              <div key={i} className="group border-r last:border-0 border-slate-100 pr-8">
                <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-3 group-hover:text-gold-600 transition-colors">{stat.l}</div>
                <div className="text-slate-950 font-serif text-5xl mb-2 italic leading-none font-bold">{stat.v}</div>
                <div className="text-gold-600 text-[9px] uppercase tracking-widest font-black italic">{stat.s}</div>
              </div>
            ))}
        </div>

        {/* Narrative & Visual Clusters */}
        <div className="space-y-32 mb-40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                <div className="lg:col-span-5 space-y-10">
                   <h2 className="text-slate-950 font-serif text-5xl md:text-7xl leading-[0.9] tracking-tighter italic">Supply <br/><span className="gold-gradient-text not-italic font-black">Void.</span></h2>
                   <p className="text-slate-600 text-xl font-light leading-relaxed border-l-2 border-gold-200 pl-8 bg-[#FDFBF7] py-10 rounded-r-3xl italic">
                      The Guruvayur hospitality landscape is characterized by fragmented budget lodges. SIRSHUKK is the first institutional response to the massive high-net-worth segment.
                   </p>
                   <div className="flex gap-6 pt-6">
                      <div className="px-6 py-3 bg-slate-950 text-white rounded-full text-[9px] font-black uppercase tracking-widest">Branded Core</div>
                      <div className="px-6 py-3 border border-slate-200 text-slate-500 rounded-full text-[9px] font-black uppercase tracking-widest">7-Star Specs</div>
                   </div>
                </div>
                <div className="lg:col-span-7 grid grid-cols-2 gap-8">
                   {stats.slice(0, 2).map((stat, i) => (
                      <div key={i} className="group relative h-[500px] rounded-[3.5rem] overflow-hidden border border-slate-100 shadow-xl">
                         <img src={stat.img} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[10s]" alt={stat.label} />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                         <div className="absolute bottom-10 left-10 right-10">
                            <span className="text-gold-400 text-[9px] font-black uppercase tracking-widest mb-2 block">{stat.label}</span>
                            <h4 className="text-white font-serif text-4xl italic leading-none">{stat.val}</h4>
                         </div>
                      </div>
                   ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                <div className="lg:col-span-7 grid grid-cols-2 gap-8 order-2 lg:order-1">
                   {stats.slice(2, 4).map((stat, i) => (
                      <div key={i} className="group relative h-[500px] rounded-[3.5rem] overflow-hidden border border-slate-100 shadow-xl">
                         <img src={stat.img} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[10s]" alt={stat.label} />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                         <div className="absolute bottom-10 left-10 right-10">
                            <span className="text-gold-400 text-[9px] font-black uppercase tracking-widest mb-2 block">{stat.label}</span>
                            <h4 className="text-white font-serif text-4xl italic leading-none">{stat.val}</h4>
                         </div>
                      </div>
                   ))}
                </div>
                <div className="lg:col-span-5 space-y-10 order-1 lg:order-2">
                   <h2 className="text-slate-950 font-serif text-5xl md:text-7xl leading-[0.9] tracking-tighter italic">Yield <br/><span className="gold-gradient-text not-italic font-black">Velocity.</span></h2>
                   <p className="text-slate-600 text-xl font-light leading-relaxed border-l-2 border-gold-200 pl-8 bg-[#FDFBF7] py-10 rounded-r-3xl italic">
                      Operational alpha is driven by the 12 million annual footfall. SIRSHUKK targets the top 5% of this demographic, ensuring market-leading ARR and stabilized occupancy.
                   </p>
                   <div className="p-8 bg-slate-950 rounded-3xl text-white flex items-center gap-6 shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                        <TrendingUp size={80} />
                      </div>
                      <Activity size={32} className="text-gold-500 relative z-10" />
                      <div className="relative z-10">
                         <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Target IRR</div>
                         <div className="text-white font-serif text-3xl font-black">24.2%</div>
                      </div>
                   </div>
                </div>
            </div>
        </div>

        {/* Global Market Map Section */}
        <div className="mb-40 pt-32 border-t border-slate-200">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.8em] block mb-8">Asset Context</span>
                 <h2 className="text-slate-950 font-serif text-5xl md:text-7xl leading-[0.9] tracking-tighter italic">Strategic <br/><span className="gold-gradient-text not-italic font-black">Proximity.</span></h2>
                 <p className="text-slate-500 text-lg font-light leading-relaxed mt-10 italic border-l-2 border-gold-400 pl-8 max-w-lg">
                    Located in South Nada, the prime entrance to the spiritual core. 1.5 KM proximity to the temple gate ensures maximum RevPAR capture.
                 </p>
                 <div className="mt-12 space-y-6">
                    {[
                      { l: "Temple Gateway", v: "1.5 KM" },
                      { l: "District Hub", v: "Tier-1 Hub" },
                      { l: "Capital Corridor", v: "Core Corridor" }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-slate-100 pb-4 group">
                         <span className="text-slate-400 text-xs font-black uppercase tracking-widest group-hover:text-gold-600 transition-colors">{item.l}</span>
                         <span className="text-slate-950 font-serif text-xl italic">{item.v}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative rounded-[4rem] overflow-hidden border border-slate-200 shadow-3xl h-[650px] grayscale hover:grayscale-0 transition-all duration-1000 group">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.377626966838!2d76.0375!3d10.5952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDM1JzQyLjciTiA3NsKwMDInMTUuMCJF!5e0!3m2!1sen!2sin!4v1625634567890!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{border:0, filter: 'contrast(1.1) brightness(1.05) saturate(0.2)'}} 
                    allowFullScreen={true} 
                    loading="lazy"
                    title="Map"
                    className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-all duration-[2s]"
                 ></iframe>
                 <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent pointer-events-none"></div>
                 <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/70 backdrop-blur-2xl border border-white rounded-[2.5rem] shadow-2xl flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-gold-500 flex items-center justify-center text-white shadow-xl">
                       <MapPin size={28} />
                    </div>
                    <div>
                       <div className="text-slate-950 font-serif text-2xl italic leading-none mb-1">South Nada Corridor</div>
                       <div className="text-[10px] font-black uppercase tracking-widest text-gold-600">The 1.5KM Monopoly</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Proceed to Chapter 03 CTA */}
        <Link to="/hotel" className="group relative block w-full h-[700px] rounded-[6rem] overflow-hidden border border-slate-200 shadow-3xl bg-slate-50 mb-20">
           <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" alt="Inventory" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
              <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] mb-12 block animate-float">Proceed to Chapter 03</span>
              <h3 className="text-white font-serif text-7xl md:text-9xl italic mb-20">Inventory <br/><span className="gold-gradient-text not-italic font-black tracking-tighter">Portfolio.</span></h3>
              <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-950 transition-all duration-1000 shadow-3xl backdrop-blur-md">
                 <ArrowRight size={56} className="group-hover:translate-x-4 transition-transform" />
              </div>
           </div>
        </Link>
      </div>
    </div>
  );
};

export default MarketPage;