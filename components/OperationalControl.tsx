import React from 'react';
import { Settings, Shield, Cpu, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OperationalControl: React.FC = () => {
  return (
    <section id="operations" className="py-24 bg-onyx-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Section 07</span>
          <h2 className="text-white font-serif text-4xl md:text-6xl mb-6">
            What You Don’t See <br/>
            <span className="italic text-slate-500">Is What Protects Returns.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            The hotel is designed with complete segregation of Guest circulation, Event circulation, and Service staff movement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Settings, title: "Oversized Back-of-House", desc: "30–35% area allocation" },
            { icon: Users, title: "Dedicated Service Elevators", desc: "Invisible logistics" },
            { icon: Cpu, title: "High-Capacity MEP", desc: "Peak-load engineered" },
            { icon: Shield, title: "BMS Integration", desc: "Building Management System" }
          ].map((item, i) => (
            <div key={i} className="bg-onyx-950 border border-white/10 p-8 flex flex-col items-center text-center hover:border-gold-500/50 transition-colors">
              <item.icon className="text-slate-500 mb-6" size={32} />
              <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">{item.title}</h3>
              <p className="text-slate-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-8">
           <p className="text-white font-serif text-xl italic">"Operational stress does not destroy margins."</p>
           <Link to="/operations" className="inline-flex items-center gap-4 bg-white/5 text-slate-300 px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-onyx-950 transition-all border border-white/10">
                Inspect Technical Backbone <ArrowRight size={14} />
           </Link>
        </div>
      </div>
    </section>
  );
};

export default OperationalControl;