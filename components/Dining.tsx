import React from 'react';
import { Compass, Coffee, Wine, UtensilsCrossed, ArrowRight, Star, Layers, Hexagon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dining: React.FC = () => {
  const venues = [
    { name: "The Orbit A", type: "Rooftop Revolving", yield: "USP Engine", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" },
    { name: "The Orbit B", type: "Gastronomy Crown", yield: "Yield Alpha", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" },
    { name: "Vedic Hearth", type: "Fine Dining Ritual", yield: "Brand Core", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80" },
  ];

  return (
    <section id="dining" className="py-64 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background Architectural Patterns */}
      <div className="absolute top-[20%] left-[-2%] text-slate-50 font-serif text-[40rem] font-black pointer-events-none select-none italic leading-none opacity-40">D</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-40 gap-16">
          <div className="max-w-4xl">
            <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.8em] block mb-10">Chapter 06: Gastronomy Portfolio</span>
            <h2 className="font-serif text-6xl md:text-9xl text-slate-950 mb-12 leading-[0.8] tracking-tighter italic">
              Destination <br/><span className="gold-gradient-text italic font-black">Gastronomy.</span>
            </h2>
            <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 italic">
              "F&B assets are conceived as independent profit centers, engineered to capture 40% of stabilized revenue through non-resident destination pull."
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-8 bg-[#FDFBF7] px-12 py-8 rounded-[3rem] border border-slate-200 shadow-2xl group transition-all hover:border-gold-300">
             <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-gold-600 shadow-sm group-hover:scale-110 transition-transform">
                <Compass size={24} className="animate-spin-slow" />
             </div>
             <div>
                <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-1">Concept Status</span>
                <span className="text-slate-950 text-xs font-bold uppercase tracking-widest">USP: Dual Revolving Crowns</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           {venues.map((venue, i) => (
             <div key={i} className="group relative h-[700px] rounded-[4rem] overflow-hidden border border-slate-100 shadow-2xl flex flex-col justify-end p-12 bg-slate-50 transition-all duration-700 hover:shadow-3xl">
                <img src={venue.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" alt={venue.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-40 transition-opacity"></div>
                
                <div className="relative z-10 space-y-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                   <div className="bg-white/90 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/50 shadow-2xl">
                      <div className="flex justify-between items-start mb-8">
                         <div className="w-14 h-14 rounded-2xl bg-gold-500 flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform">
                            <Star size={24} fill="currentColor" />
                         </div>
                         <span className="text-gold-600 text-[9px] font-black uppercase tracking-widest border border-gold-200 px-5 py-2 rounded-full">{venue.yield}</span>
                      </div>
                      <h4 className="text-slate-950 font-serif text-4xl mb-3 italic leading-none">{venue.name}</h4>
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8">{venue.type}</p>
                      
                      <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                         <span className="text-[8px] font-black uppercase tracking-widest text-slate-300 italic opacity-0 group-hover:opacity-100 transition-opacity">Technical Annexure Logged</span>
                         <button className="text-slate-950 text-[9px] font-black uppercase tracking-widest flex items-center gap-3 hover:text-gold-600 transition-colors">
                            Portfolio <ArrowRight size={14} />
                         </button>
                      </div>
                   </div>
                </div>
             </div>
           ))}
        </div>

        <div className="mt-32 p-16 md:p-24 bg-[#FDFBF7] border border-slate-200 rounded-[5rem] shadow-3xl relative overflow-hidden group text-center">
            <div className="absolute top-0 right-0 p-24 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform">
               <Hexagon size={400} className="text-slate-950" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-12">
               <p className="text-slate-950 font-serif text-4xl italic leading-tight">
                 "Our culinary strategy targets the 12 million annual visitors of Guruvayur, establishing a <span className="gold-gradient-text not-italic font-black">Gastronomy Gateway</span> for the South Indian corridor."
               </p>
               <div className="h-px w-24 bg-gold-400 mx-auto"></div>
               <Link to="/dining" className="inline-flex items-center gap-10 bg-slate-950 text-white px-16 py-8 rounded-full text-[11px] font-black uppercase tracking-[0.6em] hover:bg-gold-500 transition-all shadow-3xl group active:scale-95">
                  Inspect F&B Profit Centers <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
               </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;