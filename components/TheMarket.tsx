import React from 'react';
import { Users, Calendar, MapPin, BarChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheMarket: React.FC = () => {
  return (
    <section id="market" className="py-24 bg-onyx-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-6">Section 02</span>
          <h2 className="text-white font-serif text-4xl md:text-6xl mb-6">
            Guruvayur Is a Strategic Hub, <br/>
            <span className="italic text-slate-500">Not a Tourism Bet.</span>
          </h2>
          <p className="text-slate-400 max-w-3xl text-lg mb-8">
            With over 12 million annual visitors and approximately 250 weddings per day, Guruvayur operates on ritual economics. Sirshukk fulfills a significant gap in luxury 5-star inventory.
          </p>
          
          <Link to="/market" className="inline-flex items-center gap-4 bg-transparent border border-white/20 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gold-500 hover:text-onyx-950 hover:border-gold-500 transition-all">
                Analyze Market Data <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, title: "12M+ Annual Visitors", desc: "Constant religious footfall" },
            { icon: Calendar, title: "250 Weddings Daily", desc: "Immense demand for luxury events" },
            { icon: MapPin, title: "Local & NRI Clientele", desc: "Targeting high-net-worth pilgrims" },
            { icon: BarChart, title: "Pure Vegetarian", desc: "Ethos-aligned fine dining" },
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
            <h3 className="text-gold-500 font-black uppercase tracking-[0.2em] text-xs mb-4">Market Result</h3>
            <ul className="space-y-3">
              <li className="text-slate-300 text-sm border-l border-gold-500/30 pl-4">Year-round occupancy stability</li>
              <li className="text-slate-300 text-sm border-l border-gold-500/30 pl-4">Absence of five-star competition</li>
              <li className="text-slate-300 text-sm border-l border-gold-500/30 pl-4">High willingness to pay for premium proximity</li>
              <li className="text-slate-300 text-sm border-l border-gold-500/30 pl-4">Validated 7-star market void</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-12 pt-8 lg:pt-0">
            <p className="text-2xl font-serif text-white italic">
              "Fulfilling a significant luxury market gap."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheMarket;