import React from 'react';
import { Users, Calendar, MapPin, BarChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheMarket: React.FC = () => {
  return (
    <section id="market" className="py-24 bg-onyx-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-6">Location & Setting</span>
          <h2 className="text-white font-serif text-4xl md:text-6xl mb-6">
            Skyline Dominance. <br/>
            <span className="italic text-slate-500">Visual Monopoly.</span>
          </h2>
          <p className="text-slate-400 max-w-3xl text-lg mb-8">
            The towers dominate the horizon, set against low-rise surroundings. This asset acts as a geographic and cultural anchor, ensuring long-term landmark status.
          </p>
          
          <Link to="/market" className="inline-flex items-center gap-4 bg-transparent border border-white/20 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gold-500 hover:text-onyx-950 hover:border-gold-500 transition-all">
                Analyze Location Logic <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: MapPin, title: "Skyline Dominance", desc: "No competing vertical density." },
            { icon: Calendar, title: "Geographic Anchor", desc: "Defines the destination." },
            { icon: Users, title: "Visual Monopoly", desc: "Commanding attention from miles away." },
            { icon: BarChart, title: "Durable Value", desc: "Scarcity of skyline icons." },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 hover:border-gold-500/30 transition-colors group">
              <item.icon className="text-slate-600 group-hover:text-gold-500 transition-colors mb-4" size={24} />
              <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">{item.title}</h3>
              <p className="text-slate-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/[0.02] border border-white/5 p-8 md:p-12">
          <div>
            <h3 className="text-gold-500 font-black uppercase tracking-[0.2em] text-xs mb-4">Positioning Narrative</h3>
            <ul className="space-y-3">
              <li className="text-slate-300 text-sm border-l border-gold-500/30 pl-4">Low-rise natural surroundings enhance scale</li>
              <li className="text-slate-300 text-sm border-l border-gold-500/30 pl-4">Clear horizon visibility</li>
              <li className="text-slate-300 text-sm border-l border-gold-500/30 pl-4">Instant recognition factor</li>
              <li className="text-slate-300 text-sm border-l border-gold-500/30 pl-4">Valuation insulation via landmark status</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-12 pt-8 lg:pt-0">
            <p className="text-2xl font-serif text-white italic">
              "Scarcity of skyline icons = durable asset value."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheMarket;