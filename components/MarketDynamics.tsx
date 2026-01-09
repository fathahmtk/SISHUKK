import React, { useEffect, useState, useRef } from 'react';
import { TrendingUp, Activity, MapPin, Target, ShieldCheck, Landmark, Globe, Scan } from 'lucide-react';

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
          const end = 12.5;
          const duration = 2500;
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
      { threshold: 0.3 }
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
    <section ref={sectionRef} className="py-24 bg-slate-950 relative overflow-hidden">
      
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        
        {/* Narrative Split */}
        <div className="flex flex-col lg:flex-row gap-32 items-end mb-40">
          <div className="lg:w-3/5">
            <div className="flex items-center gap-6 mb-12">
               <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500 shadow-gold-glow">
                  <Globe size={24} className="animate-spin-slow" />
               </div>
               <div className="space-y-1">
                  <span className="text-gold-500 uppercase text-[10px] font-black tracking-[0.6em] block">Market Intelligence Chapter</span>
                  <div className="text-white/40 text-[8px] font-mono uppercase tracking-widest">Zone: South_India_Corridor // SGT_02</div>
               </div>
            </div>
            <h2 className="text-white font-serif text-7xl md:text-[10rem] leading-[0.8] tracking-tighter mb-12 italic font-black">
              Ritual <br/><span className="gold-gradient-text not-italic font-black">Capture.</span>
            </h2>
            <div className="relative">
               <div className="text-gold-500 font-serif text-9xl font-black italic opacity-10 absolute -top-20 -left-10">{count}M</div>
               <p className="text-slate-400 text-3xl font-light font-editorial italic leading-relaxed max-w-3xl border-l-4 border-gold-500/40 pl-16 py-4 relative z-10">
                 "South India's most resilient pilgrimage node. 12.5M verified annual footfall meets a total supply void for 7-star luxury inventory. Demand is faith-driven and non-cyclical."
               </p>
            </div>
          </div>
          
          <div className="lg:w-2/5 grid grid-cols-2 gap-8 w-full">
             {[
               { l: "Annual Footfall", v: `${count}M+`, s: "Inelastic Traffic", icon: Activity },
               { l: "Supply Barrier", v: "Absolute", s: "0% Competition", icon: ShieldCheck }
             ].map((stat, i) => (
               <div key={i} className="p-16 bg-white/5 border border-white/10 rounded-[4rem] shadow-3xl flex flex-col items-center justify-center text-center group hover:bg-gold-500/5 transition-all duration-1000 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <stat.icon className="text-gold-500/40 group-hover:text-gold-500 mb-8 transition-colors duration-700" size={32} />
                  <div className="text-white font-serif text-5xl mb-3 italic font-black transition-transform duration-700 group-hover:scale-110">{stat.v}</div>
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{stat.l}</div>
                  <div className="text-gold-600/40 text-[8px] font-black uppercase tracking-widest">{stat.s}</div>
               </div>
             ))}
          </div>
        </div>

        {/* Tactical Opportunity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           {[
             { 
               title: "Ritual Inelasticity", 
               val: "100%", 
               img: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80",
               desc: "Faith-driven spend remains static during recession cycles. SGT represents South India's premier defensive asset."
             },
             { 
               title: "Temple Proximity", 
               val: "1.5 KM", 
               img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80",
               desc: "Immediate command of the South Nada corridor, ensuring visual recall and zero-lag guest accessibility."
             },
             { 
               title: "Wedding Monopoly", 
               val: "250 Daily", 
               img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
               desc: "Capturing Kerala's high-velocity NRI ceremonial market through monumental pillar-less volume."
             }
           ].map((card, i) => (
             <div key={i} className="group relative h-[700px] rounded-[5rem] overflow-hidden border border-white/10 shadow-3xl flex flex-col justify-end p-12 bg-slate-900 transition-all duration-1000 hover:border-gold-500/40">
                <img src={card.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[15s] group-hover:scale-110 brightness-[0.4] saturate-[0.5]" alt={card.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                <div className="relative z-10 space-y-10">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 backdrop-blur-xl group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-700 shadow-2xl">
                      <Target size={28} />
                   </div>
                   <div className="bg-slate-950/80 backdrop-blur-3xl p-10 rounded-[3.5rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] transform translate-y-8 group-hover:translate-y-0 transition-transform duration-1000">
                      <div className="flex items-center justify-between mb-6">
                         <h4 className="text-white font-serif text-3xl italic font-black leading-none">{card.title}</h4>
                         <div className="px-5 py-1.5 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-500 text-[10px] font-mono font-black">{card.val}</div>
                      </div>
                      <p className="text-slate-400 text-lg font-light leading-relaxed italic opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200">
                         "{card.desc}"
                      </p>
                      <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-40 transition-opacity duration-1000 delay-300">
                         <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white italic">Audit_Node_SYNC: 100%</span>
                         <Scan size={14} className="text-gold-500" />
                      </div>
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* Global Arbitrage Statement */}
        <div className="mt-40 p-24 bg-white/5 border border-white/10 rounded-[6rem] shadow-3xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.05)_0%,_transparent_60%)]"></div>
           <div className="absolute top-0 right-0 p-32 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-[15s]">
              <Landmark size={500} className="text-white" />
           </div>
           
           <div className="relative z-10 flex flex-col lg:flex-row gap-32 items-center">
              <div className="lg:w-1/2 space-y-12">
                 <div className="space-y-4">
                    <span className="text-gold-500 text-[11px] font-black uppercase tracking-[0.6em] block">Sovereign Performance</span>
                    <h3 className="text-white font-serif text-6xl md:text-8xl italic font-black leading-[0.8] tracking-tighter">Market <br/><span className="gold-gradient-text not-italic">Moat.</span></h3>
                 </div>
                 <p className="text-slate-300 text-2xl font-light font-editorial italic leading-relaxed">
                   "Institutional capital allocation requires stable yields. SGT utilizes its Visual Monopoly to anchor Kerala's ritual economy, providing a risk-mitigated entry into South India's highest ADR pocket."
                 </p>
                 <div className="flex gap-12">
                    <div className="flex items-center gap-5 group/chip">
                       <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 group-hover/chip:scale-110 transition-transform">
                          <ShieldCheck size={24} />
                       </div>
                       <span className="text-white text-[11px] font-black uppercase tracking-widest">Fixed Yield_Basis</span>
                    </div>
                    <div className="flex items-center gap-5 group/chip">
                       <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover/chip:scale-110 transition-transform">
                          <TrendingUp size={24} />
                       </div>
                       <span className="text-white text-[11px] font-black uppercase tracking-widest">Real-time Alpha</span>
                    </div>
                 </div>
              </div>
              
              <div className="lg:w-1/2 w-full space-y-8">
                 {[
                   { l: "Ritual Stability Index", v: "1.0", d: "Zero correlation with leisure hospitality cycles." },
                   { l: "Competition Exclusion Zone", v: "10 KM", d: "Absolute structural scarcity protected by zoning." },
                   { l: "Realization Window", v: "REIT-Ready", d: "Calibrated for institutional divestment cycles." }
                 ].map((row, i) => (
                    <div key={i} className="p-12 bg-slate-900/60 border border-white/5 rounded-[3.5rem] flex items-center justify-between group/row hover:border-gold-500/40 transition-all duration-700 shadow-xl">
                       <div className="space-y-2">
                          <div className="text-white font-serif text-2xl font-black italic transition-colors group-hover/row:text-gold-500">{row.l}</div>
                          <p className="text-slate-500 text-sm italic font-light">{row.d}</p>
                       </div>
                       <div className="text-gold-500 font-serif text-4xl font-black italic ml-10">{row.v}</div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MarketDynamics;