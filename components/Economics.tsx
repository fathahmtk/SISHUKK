import React from 'react';
import { IndianRupee, PieChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Economics: React.FC = () => {
  return (
    <section id="economics" className="py-24 bg-onyx-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-6">Section 08</span>
            <h2 className="text-white font-serif text-4xl md:text-5xl mb-8 leading-tight">
              ₹350 Crore Capital, <br/>
              <span className="italic text-slate-500">Deployed with Discipline.</span>
            </h2>
            
            <div className="bg-white/5 border border-white/10 p-8 mb-8">
               <h3 className="text-white text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-2"><IndianRupee size={16} /> Capex Logic</h3>
               <ul className="space-y-3">
                 <li className="text-slate-300 text-sm">Hotel-only investment</li>
                 <li className="text-slate-300 text-sm">Land cost excluded (already secured)</li>
                 <li className="text-slate-300 text-sm">Balanced allocation across structure, interiors, MEP</li>
                 <li className="text-slate-300 text-sm">Contingency built in</li>
               </ul>
            </div>
            
            <Link to="/economics" className="inline-flex items-center gap-4 bg-gold-500 text-onyx-950 px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all">
                Full Financial Dossier <ArrowRight size={14} />
            </Link>
          </div>

          <div>
             <div className="bg-white/5 border border-white/10 p-8 h-full flex flex-col justify-center">
                <h3 className="text-white text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-2"><PieChart size={16} /> Stabilised Revenue Mix</h3>
                <div className="space-y-4">
                  {[
                    { label: "Weddings & Events", width: "w-[55%]", color: "bg-gold-500" },
                    { label: "Rooms & Suites", width: "w-[30%]", color: "bg-slate-500" },
                    { label: "Destination Dining F&B", width: "w-[10%]", color: "bg-slate-700" },
                    { label: "Wellness & Retail", width: "w-[5%]", color: "bg-slate-800" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs text-slate-400 mb-1 uppercase tracking-wider font-bold">
                        <span>{item.label}</span>
                      </div>
                      <div className="h-2 w-full bg-black rounded-full overflow-hidden">
                        <div className={`h-full ${item.width} ${item.color}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-[9px] uppercase tracking-widest text-slate-500">
                  *Exact projections, IRR, and DSCR are disclosed post-NDA.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Economics;