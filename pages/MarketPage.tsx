import React from 'react';
import { ArrowLeft, Users, Calendar, TrendingUp, MapPin, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const MarketPage: React.FC = () => {
  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-6 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-8 hover:text-white transition-colors">
            <ArrowLeft size={12} /> Return to Summary
        </Link>
        <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Deep Dive: Section 02</span>
        <h1 className="text-white font-serif text-5xl md:text-7xl mb-6">Market <span className="text-gold-500 italic">Intelligence.</span></h1>
        <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            Analyzing the "Ritual Economy" of Guruvayur: A recession-proof micro-market driven by 30 million annual pilgrims and high-net-worth wedding demand.
        </p>
      </div>

      <div className="w-full bg-onyx-900 py-16 border-y border-white/5 mb-24">
         <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
                { label: "Annual Footfall", val: "30M+", sub: "Recession Proof" },
                { label: "Daily Weddings", val: "200+", sub: "Peak Season" },
                { label: "Avg Stay", val: "2.5 Days", sub: "Ritual Driven" },
                { label: "Luxury Supply", val: "0%", sub: "Within 5km" }
            ].map((stat, i) => (
                <div key={i} className="text-center border-r border-white/5 last:border-0">
                    <div className="text-slate-500 text-[9px] uppercase tracking-widest font-black mb-2">{stat.label}</div>
                    <div className="text-gold-500 font-serif text-4xl md:text-5xl mb-2">{stat.val}</div>
                    <div className="text-white text-[9px] uppercase tracking-widest">{stat.sub}</div>
                </div>
            ))}
         </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
                <h3 className="text-white font-serif text-3xl mb-8">The Demand Driver: Rituals</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    Unlike leisure tourism which fluctuates with the economy, religious tourism in India is inelastic. Families do not cancel weddings or pilgrimage vows during downturns.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    Guruvayur Sri Krishna Temple is the "Dwarka of the South." It is the preferred wedding destination for Kerala's elite and the South Indian diaspora globally.
                </p>

                <div className="space-y-6">
                    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex items-center gap-4 mb-3">
                            <Calendar className="text-gold-500" size={24} />
                            <h4 className="text-white font-bold text-lg">The Calendar Advantage</h4>
                        </div>
                        <p className="text-slate-400 text-sm">
                            With over 150+ auspicious "Muhoortham" days per year, the wedding utilization rate for banquets remains consistently high (65%+) compared to city hotels (35-40%).
                        </p>
                    </div>
                    
                    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex items-center gap-4 mb-3">
                            <Users className="text-gold-500" size={24} />
                            <h4 className="text-white font-bold text-lg">The HNW Pilgrim</h4>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Our target demographic isn't the backpacker. It is the multi-generational family group arriving in SUVs/Luxury Buses, seeking hygienic, air-conditioned, 5-star comfort close to the temple.
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <div className="aspect-video bg-onyx-900 border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-end group">
                   <div className="absolute inset-0 z-0">
                       <img src="https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-[2s]" alt="Wedding Demand" />
                   </div>
                   <div className="relative z-10">
                       <h4 className="text-white font-serif text-2xl mb-2">Wedding Economics</h4>
                       <p className="text-slate-300 text-sm">
                           A single Guruvayur wedding generates room bookings for 50-100 guests, 3 banquet meals, and high-margin ancillary spend on photography, decor, and transport.
                       </p>
                   </div>
                </div>

                <div className="bg-gold-500/5 border border-gold-500/20 p-8 rounded-3xl">
                    <h4 className="text-gold-500 text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                        <BarChart3 size={16} /> Supply Void Analysis
                    </h4>
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                            <span className="text-slate-400">Total Rooms in Guruvayur</span>
                            <span className="text-white font-mono">~4,500</span>
                        </li>
                        <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                            <span className="text-slate-400">Budget / Lodge Segment</span>
                            <span className="text-white font-mono">92%</span>
                        </li>
                        <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                            <span className="text-slate-400">3-Star / 4-Star Segment</span>
                            <span className="text-white font-mono">7%</span>
                        </li>
                        <li className="flex justify-between items-center text-lg font-bold pt-2">
                            <span className="text-gold-500">True Luxury (5-Star+)</span>
                            <span className="text-white font-mono">1% (SGT)</span>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default MarketPage;