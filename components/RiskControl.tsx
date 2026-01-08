import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RiskControl: React.FC = () => {
  return (
    <section id="risk" className="py-24 bg-onyx-950 border-t border-white/5">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-6">Section 09</span>
        <h2 className="text-white font-serif text-4xl md:text-5xl mb-8">
          Downside Protection <br/>
          <span className="italic text-slate-500">Is Designed Into the Asset.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-12 text-left">
           {[
             "Non-seasonal demand",
             "Landmark architecture",
             "Event-led cash flows",
             "Multiple revenue engines",
             "Operator-agnostic design"
           ].map((item, i) => (
             <div key={i} className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-lg">
                <CheckCircle2 className="text-gold-500" size={20} />
                <span className="text-white font-bold text-sm uppercase tracking-wide">{item}</span>
             </div>
           ))}
           <div className="flex items-center gap-4 p-6 bg-gold-500 text-onyx-950 rounded-lg">
              <ShieldCheck size={20} />
              <span className="font-black text-sm uppercase tracking-wide">Capital-Protected Investment</span>
           </div>
        </div>
        
        <Link to="/risk" className="inline-flex items-center gap-4 text-slate-400 hover:text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all border-b border-slate-700 pb-2 hover:border-gold-500">
            View Risk Mitigation Matrix <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
};

export default RiskControl;