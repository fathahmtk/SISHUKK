import React from 'react';
import { Compass, Star, ArrowRight, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dining: React.FC = () => {
  const venues = [
    { name: "The Orbit A", type: "Revolving", yield: "USP Engine", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" },
    { name: "The Orbit B", type: "Crown", yield: "Yield Alpha", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" },
    { name: "Vedic Hearth", type: "Ritual", yield: "Brand Core", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80" },
  ];

  return (
    <section id="dining" className="py-12 bg-white relative h-full flex flex-col justify-center border-t border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-600 text-[9px] font-black uppercase tracking-[0.6em] block mb-4">Chapter 06: Gastronomy Portfolio</span>
            <h2 className="font-serif text-4xl md:text-7xl text-slate-950 leading-[0.8] tracking-tighter italic">
              Destination <br/><span className="gold-gradient-text italic font-black">Gastronomy.</span>
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-6 bg-[#FDFBF7] px-8 py-5 rounded-2xl border border-slate-200 shadow-sm">
             <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-gold-600">
                <Compass size={18} className="animate-spin-slow" />
             </div>
             <div>
                <span className="text-slate-400 text-[8px] font-black uppercase tracking-widest block mb-1">Concept USP</span>
                <span className="text-slate-950 text-xs font-bold uppercase tracking-widest">Dual Revolving Crowns</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[55vh]">
           {venues.map((venue, i) => (
             <div key={i} className="group relative h-full rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl flex flex-col justify-end p-8 bg-slate-50 transition-all duration-700">
                <img src={venue.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] brightness-[1.1]" alt={venue.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-40 transition-opacity"></div>
                
                <div className="relative z-10 space-y-4">
                   <div className="bg-white/95 backdrop-blur-xl p-6 rounded-[2rem] border border-white shadow-xl">
                      <div className="flex justify-between items-start mb-4">
                         <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center text-white shadow-lg">
                            <Star size={18} fill="currentColor" />
                         </div>
                         <span className="text-gold-600 text-[8px] font-black uppercase tracking-widest border border-gold-200 px-3 py-1 rounded-full">{venue.yield}</span>
                      </div>
                      <h4 className="text-slate-950 font-serif text-2xl mb-1 italic leading-none">{venue.name}</h4>
                      <p className="text-slate-400 text-[8px] font-black uppercase tracking-widest mb-6">{venue.type}</p>
                      
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                         <span className="text-[7px] font-black uppercase tracking-widest text-slate-300 italic">Technical Sync v2.5</span>
                         <button className="text-slate-950 text-[8px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-gold-600 transition-colors">
                            Portfolio <ArrowRight size={12} />
                         </button>
                      </div>
                   </div>
                </div>
             </div>
           ))}
        </div>

        <div className="mt-12 p-8 bg-[#FDFBF7] border border-slate-200 rounded-[3rem] shadow-lg relative overflow-hidden group text-center">
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-8">
               <p className="text-slate-950 font-serif text-xl italic leading-tight flex-1">
                 "Our culinary strategy targets the 12 million annual visitors, establishing a <span className="gold-gradient-text not-italic font-black">Gastronomy Gateway.</span>"
               </p>
               <Link to="/dining" className="inline-flex items-center gap-6 bg-slate-950 text-white px-8 py-4 rounded-full text-[9px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 transition-all shadow-xl">
                  Inspect F&B Profit Centers <ArrowRight size={14} />
               </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;