
import React, { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, ArrowUpRight, Zap, Landmark, Heart, FileText, BarChart3, MapPin } from 'lucide-react';

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
    <section ref={sectionRef} className="py-40 bg-onyx-950 relative overflow-hidden border-b border-white/5">
      {/* Visual Depth Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(212,175,55,0.03)_0%,_transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center mb-32">
          <div className="lg:w-3/5">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-gold-500/30 rounded-full bg-gold-500/5 mb-10">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              <span className="text-gold-400 uppercase text-[10px] font-black tracking-[0.4em]">Audit: Market Intelligence 2025</span>
            </div>
            <h2 className="text-white font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter mb-12 italic">
              The <span className="gold-gradient-text italic font-black">{count}M</span> <br/>Pilgrim Engine.
            </h2>
            <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-2xl border-l border-gold-500/30 pl-10">
              Guruvayur is the structural heart of South India's "Ritual Economy." With 12M+ annual visitors and 250+ daily weddings, the demand is inelastic, non-seasonal, and completely underserved by luxury inventory.
            </p>
          </div>
          
          <div className="lg:w-2/5 grid grid-cols-2 gap-4">
             {[
               { l: "Annual Footfall", v: "12 Million", s: "Inelastic Demand" },
               { l: "Supply Void", v: "0 Hotels", s: "Within 1.5km Radius" }
             ].map((stat, i) => (
               <div key={i} className="p-8 bg-onyx-900 border border-white/10 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center text-center">
                  <div className="text-gold-500 font-serif text-3xl mb-1">{stat.v}</div>
                  <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest">{stat.l}</div>
               </div>
             ))}
          </div>
        </div>

        {/* Cinematic Data Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { 
               title: "The Wedding Moat", 
               val: "250 Daily", 
               img: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80",
               desc: "Massive captive market for large-scale banqueting and NRI multi-day ceremonies."
             },
             { 
               title: "Asset Proximity", 
               val: "1.5 KM", 
               img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80",
               desc: "Strategically located at the core 'South Nada' corridor for maximum ADR capture."
             },
             { 
               title: "NRI Capital Inflow", 
               val: "High", 
               img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
               desc: "Fulfilling the demand for global hospitality standards among returning residents."
             }
           ].map((card, i) => (
             <div key={i} className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-white/5 shadow-3xl flex flex-col justify-end p-10">
                <img src={card.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110 brightness-[0.35] group-hover:brightness-[0.5]" alt={card.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/40 to-transparent"></div>
                
                <div className="relative z-10 space-y-4">
                   <div className="flex items-center justify-between">
                      <h4 className="text-white font-serif text-2xl">{card.title}</h4>
                      <span className="text-gold-500 font-mono text-xl font-black">{card.val}</span>
                   </div>
                   <p className="text-slate-400 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {card.desc}
                   </p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default MarketDynamics;
