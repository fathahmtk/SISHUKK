
import React, { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, ArrowUpRight, Zap, Landmark, Heart, FileText, BarChart3 } from 'lucide-react';

const MarketDynamics: React.FC = () => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const end = 30;
          const duration = 2000;
          const step = (end / duration) * 10;
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 10);
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-32 bg-onyx-950 relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                 <div className="px-6 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-500 text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                    <FileText size={14} /> Case Study 04A
                 </div>
                 <span className="text-slate-600 text-[10px] font-black uppercase tracking-widest">Market Intelligence Report</span>
              </div>
              <h2 className="text-white font-serif text-5xl md:text-7xl mb-12 leading-[0.9] tracking-tighter italic">
                The <span className="gold-gradient-text">{count} Million</span> <br/>Pilgrim Delta.
              </h2>
              <p className="text-slate-400 text-xl font-light leading-relaxed mb-12 max-w-xl">
                Guruvayur attracts 30M+ visitors annually—surpassing most European capitals. Yet, 90% of inventory consists of budget lodges. SGT captures the absolute top 1% of this non-seasonal flow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] group hover:border-gold-500/50 transition-all shadow-2xl">
                <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                  <Heart size={24} />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">200+ Daily Weddings</h4>
                <p className="text-slate-500 text-sm leading-relaxed">During peak seasons, the temple hosts over 200 ceremonies daily. SGT provides the missing 7-star banquet infrastructure.</p>
              </div>

              <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] group hover:border-gold-500/50 transition-all shadow-2xl">
                <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                  <Landmark size={24} />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">₹1,700 Cr Deposits</h4>
                <p className="text-slate-500 text-sm leading-relaxed">The Devaswom's liquidity reflects the UHNWI profile of devotees currently underserved by local budget supply.</p>
              </div>
            </div>

            <div className="p-10 bg-gold-500/5 border border-gold-500/20 rounded-[3rem] relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-5">
                  <TrendingUp size={120} className="text-gold-500" />
               </div>
               <h3 className="text-gold-400 font-serif text-3xl mb-4 italic">The Supply Void</h3>
               <p className="text-slate-300 text-lg font-light leading-relaxed">
                 By integrating a massive 3,000+ capacity convention center with 7-star hospitality, we capture the entire luxury value chain—from sacred ceremony to grand reception.
               </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square glass-card rounded-full flex flex-col items-center justify-center text-center p-12 border border-gold-500/20 shadow-[0_0_150px_rgba(212,175,55,0.15)] relative z-10 animate-float">
              <div className="text-gold-500 font-serif text-9xl md:text-[13rem] font-black leading-none mb-4">{count}M</div>
              <div className="text-white text-xs font-black uppercase tracking-[1em] opacity-40">Annual Pilgrims</div>
              <div className="mt-12 flex items-center gap-4 text-emerald-400 bg-emerald-500/10 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-500/20 shadow-lg">
                <ArrowUpRight size={16} /> Market Monopolization
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gold-500/5 blur-[150px] rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-onyx-900 border border-white/5 p-8 rounded-3xl shadow-3xl flex flex-col justify-center">
               <BarChart3 size={32} className="text-gold-500 mb-4" />
               <div className="text-white font-serif text-3xl">88%</div>
               <div className="text-[8px] uppercase tracking-widest text-slate-500 font-black">Supply Gap (Luxury)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketDynamics;
