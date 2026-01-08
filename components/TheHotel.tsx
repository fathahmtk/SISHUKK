import React from 'react';
import { BedDouble, Maximize, Mic2, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheHotel: React.FC = () => {
  const accommodationMix = [
    "Tower A: 200 Luxury Rooms", "Tower B: 220 Event Keys", "Temple View Suites",
    "Executive Residencies", "Bridal Suites", "Presidential / Wedding Suites"
  ];

  return (
    <section id="hotel" className="py-24 bg-onyx-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-6">Section 03</span>
            <h2 className="text-white font-serif text-4xl md:text-5xl mb-8 leading-tight">
              A Refined Blend of <br/>
              <span className="italic text-slate-500">Comfort and Sophistication.</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              SIRSHUKK GRAND TOWERS features approximately 420 luxury rooms and suites. The towers are strategically designed to serve hospitality and large-scale events seamlessly.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              With 200 units in Tower A and 220 dedicated units in Tower B, our configuration ensures risk diversification by catering to both leisure and event markets.
            </p>
            <Link to="/hotel" className="inline-flex items-center gap-4 bg-white/5 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-onyx-950 transition-all border border-white/10">
                View Inventory Specs <ArrowRight size={14} />
            </Link>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <div>
              <h3 className="text-white text-xs font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Accommodation Portfolio (420 Units)</h3>
              <div className="grid grid-cols-2 gap-4">
                {accommodationMix.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-gold-500 rounded-full"></div>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white text-xs font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-2">5-Star Hospitality Principles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Maximize, label: "Pure Vegetarian Fine Dining" },
                  { icon: Mic2, label: "Acoustic privacy & serenity" },
                  { icon: Smartphone, label: "Temple-aligned value service" },
                  { icon: BedDouble, label: "High-end wedding venues" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5">
                    <item.icon className="text-gold-500" size={18} />
                    <span className="text-slate-300 text-xs font-bold uppercase tracking-wide">{item.label}</span>
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

export default TheHotel;