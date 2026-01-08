import React from 'react';
import { Sparkles, Flower2, Activity, HeartPulse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WellnessExperience: React.FC = () => {
  return (
    <section id="wellness" className="py-24 bg-onyx-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-6">Section 06</span>
            <h2 className="text-white font-serif text-4xl md:text-5xl mb-8 leading-tight">
              Luxury Wellness as a <br/>
              <span className="italic text-slate-500">Margin Enhancer.</span>
            </h2>
            <div className="grid grid-cols-1 gap-6 mb-8">
               {[
                 { icon: Sparkles, text: "Signature luxury spa" },
                 { icon: Flower2, text: "Ayurvedic wellness suites" },
                 { icon: Activity, text: "Yoga & meditation decks" },
                 { icon: HeartPulse, text: "Fitness and recovery studios" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 border border-white/10 bg-white/[0.02]">
                    <item.icon className="text-gold-500" size={20} />
                    <span className="text-slate-300 text-sm font-bold uppercase tracking-wide">{item.text}</span>
                 </div>
               ))}
            </div>
            
            <Link to="/wellness" className="inline-flex items-center gap-4 bg-white/5 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-onyx-950 transition-all border border-white/10">
                Explore Spa & Wellness <ArrowRight size={14} />
            </Link>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-white text-sm font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Business Impact</h3>
            <ul className="space-y-6">
              {[
                "High-margin ancillary revenue",
                "Brand depth & differentiation",
                "Extended length of stay"
              ].map((impact, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="text-gold-500 font-serif text-2xl italic">{i + 1}.</span>
                  <span className="text-white text-lg">{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessExperience;