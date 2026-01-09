import React, { useEffect, useState, useRef } from 'react';
import { TrendingUp, Activity, MapPin, Target, ShieldCheck, Landmark } from 'lucide-react';

const MarketDynamics: React.FC = () => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          let start = 0;
          const end = 12;
          const duration = 2000;
          const step = (end / duration) * 10;
          
          if (timerRef.current) clearInterval(timerRef.current);
          
          timerRef.current = window.setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              if (timerRef.current) clearInterval(timerRef.current);
            } else {
              setCount(parseFloat(start.toFixed(1)));
            }
          }, 10);
        }
      },
      { threshold: 0.5 }
    );
    
    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);
    
    return () => {
      if (currentSection) observer.unobserve(currentSection);
      observer.disconnect();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-48 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Background Architectural Watermark */}
      <div className="absolute top-[20%] right-[-10%] text-slate-50 font-serif text-[45rem] font-black pointer-events-none select-none italic leading-none">M</div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-32 items-end mb-40">
          <div className="lg:w-3/5">
            <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-200 rounded-full bg-gold-50/50 mb-12 shadow-sm">
              <Activity size={16} className="text-gold-600 animate-pulse" />
              <span className="text-gold-600 uppercase text-[10px] font-black tracking-[0.5em]">Market Analysis: Section 02</span>
            </div>
            <h2 className="text-slate-950 font-serif text-6xl md:text-9xl leading-[0.8] tracking-tighter mb-12 italic">
              The <span className="gold-gradient-text italic font-black">{count}M</span> <br/>Pilgrim Engine.
            </h2>
            <p className="text-slate-500 text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-gold-400 pl-12 mt-12">
              Guruvayur represents an inelastic "Ritual Economy." With 12M+ annual footfall and zero high-end supply, SGT captures a 100% first-mover monopoly on luxury transit.
            </p>
          </div>
          
          <div className="lg:w-2/5 grid grid-cols-2 gap-6 w-full">
             {[
               { l: "Annual Footfall", v: "12 Million", s: "Inelastic Demand" },
               { l: "Supply Void", v: "0 Branded", s: "5-Star Options" }
             ].map((stat, i) => (
               <div key={i} className="p-12 bg-[#FDFBF7] border border-slate-200 rounded-[3rem] shadow-sm flex flex-col items-center justify-center text-center group hover:bg-white hover:border-gold-400 transition-all duration-500">
                  <div className="text-gold-600 font-serif text-4xl mb-2 italic group-hover:scale-110 transition-transform">{stat.v}</div>
                  <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{stat.l}</div>
                  <div className="h-px w-8 bg-gold-200 mt-4"></div>
               </div>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {[
             { 
               title: "Ritual Monopoly", 
               val: "250 Daily", 
               img: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80",
               desc: "Captive market for large-scale banqueting and multi-day NRI ceremonies."
             },
             { 
               title: "Temple Proximity", 
               val: "1.5 KM", 
               img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80",
               desc: "Strategic South Nada positioning ensures the highest RevPAR capture in the district."
             },
             { 
               title: "NRI Capital Hub", 
               val: "Tier-1 Hub", 
               img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
               desc: "Fulfilling global hospitality expectations for returning Kerala diaspora residents."
             }
           ].map((card, i) => (
             <div key={i} className="group relative h-[650px] rounded-[4rem] overflow-hidden border border-slate-100 shadow-2xl flex flex-col justify-end p-12 bg-slate-50 transition-all duration-700 hover:shadow-3xl">
                <img src={card.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" alt={card.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-90 group-hover:opacity-40 transition-opacity"></div>
                
                <div className="relative z-10 space-y-6">
                   <div className="bg-white/90 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/50 shadow-2xl transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                      <div className="flex items-center justify-between mb-4">
                         <h4 className="text-slate-950 font-serif text-3xl italic leading-none">{card.title}</h4>
                         <span className="text-gold-600 font-mono text-xl font-black">{card.val}</span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                         {card.desc}
                      </p>
                      <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                         <span className="text-[8px] font-black uppercase tracking-widest text-slate-300">Audited Market Data</span>
                         <Target size={16} className="text-gold-600" />
                      </div>
                   </div>
                </div>
             </div>
           ))}
        </div>

        <div className="mt-40 p-16 md:p-24 bg-[#FDFBF7] border border-slate-200 rounded-[5rem] shadow-3xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
              <Landmark size={400} className="text-slate-950" />
           </div>
           
           <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2 space-y-10">
                 <h3 className="text-slate-950 font-serif text-5xl md:text-7xl italic leading-none">Market <br/>Resilience.</h3>
                 <p className="text-slate-500 text-2xl font-light leading-relaxed">
                   Unlike leisure hotels, pilgrimage demand is <strong>non-cyclical</strong>. SGT represents a defensive capital allocation with high yield upside.
                 </p>
                 <div className="flex gap-10">
                    <div className="flex items-center gap-4 group/chip">
                       <ShieldCheck className="text-emerald-600 group-hover/chip:scale-110 transition-transform" size={24} />
                       <span className="text-slate-900 text-[10px] font-black uppercase tracking-widest">Recession-Proof</span>
                    </div>
                    <div className="flex items-center gap-4 group/chip">
                       <TrendingUp className="text-gold-600 group-hover/chip:scale-110 transition-transform" size={24} />
                       <span className="text-slate-900 text-[10px] font-black uppercase tracking-widest">Verified Upside</span>
                    </div>
                 </div>
              </div>
              
              <div className="lg:w-1/2 w-full">
                 <div className="grid grid-cols-1 gap-6">
                    {[
                      { l: "Ritual Inelasticity", v: "100%", d: "Spiritual spend is the last cut in any budget." },
                      { l: "Supply Barriers", v: "High", d: "Zoning and scarcity protect the landmark status." },
                      { l: "Exit Liquidity", v: "Tier-1", d: "Pre-calibrated for REIT acquisition cycle." }
                    ].map((row, i) => (
                       <div key={i} className="flex justify-between items-center bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-gold-400 transition-all duration-500">
                          <div>
                             <div className="text-slate-950 font-bold text-lg leading-none mb-2">{row.l}</div>
                             <p className="text-slate-400 text-xs italic">{row.d}</p>
                          </div>
                          <div className="text-gold-600 font-serif text-3xl italic font-black">{row.v}</div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MarketDynamics;