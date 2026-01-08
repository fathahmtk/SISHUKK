
import React from 'react';
import { ArrowLeft, Compass, UtensilsCrossed, Wine, Coffee, RotateCw, ArrowRight, Star, Hexagon, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiningPage: React.FC = () => {
  const concepts = [
    {
      title: "The Orbit",
      sub: "Dual Revolving Crowns",
      desc: "Two independent 60-minute rotation platforms offering 360-degree spiritual and coastal vistas. German-engineered vibration-free dynamics.",
      yield: "High Non-Resident Capture",
      img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80"
    },
    {
      title: "Vedic Hearth",
      sub: "Fine Dining Ritual",
      desc: "Pure vegetarian destination dining. Curated temple-inspired menus using organic-certified regional produce.",
      yield: "Premium Ticket Size",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in pb-20">
      <div className="container mx-auto px-6 mb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-10 hover:text-white transition-colors group">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Return to Summary
        </Link>
        <div className="max-w-4xl">
            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Dossier Chapter 05: Gastronomy Portfolio</span>
            <h1 className="text-white font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter mb-8 italic">Destination <br/><span className="gold-gradient-text italic font-black">Gastronomy.</span></h1>
            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-2xl border-l border-gold-500/30 pl-8">
                Positioned as independent revenue centers, our F&B assets are designed to attract non-resident demand from the wider region, ensuring yield stability independent of room occupancy.
            </p>
        </div>
      </div>

      {/* Cinematic Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 mb-32">
         {concepts.map((item, i) => (
             <div key={i} className="relative group h-[65vh] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110 brightness-[0.4] group-hover:brightness-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-12 left-12 right-12 space-y-4">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center text-onyx-950">
                         <Star size={18} />
                      </div>
                      <div>
                         <span className="text-gold-500 text-[9px] font-black uppercase tracking-widest">{item.sub}</span>
                         <h3 className="text-white font-serif text-4xl">{item.title}</h3>
                      </div>
                   </div>
                   <p className="text-slate-300 text-base font-light leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {item.desc}
                   </p>
                   <div className="pt-4 border-t border-white/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest italic">{item.yield}</span>
                      <Zap className="text-gold-500" size={14} />
                   </div>
                </div>
             </div>
         ))}
      </div>

      <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-40">
            <div className="lg:col-span-8">
               <h3 className="text-white font-serif text-4xl mb-12 italic">Monetization Logic</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    { title: "Day-Part Optimization", icon: Hexagon, desc: "Breakfast for pilgrims, premium revolving lunches for business, and destination dinner rituals for weddings." },
                    { title: "Non-Resident Capture", icon: Wine, desc: "Direct elevator access from the Portal Lobby ensures F&B guests do not interfere with room-guest privacy." }
                  ].map((item, i) => (
                    <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] group hover:bg-white/[0.08] transition-all">
                       <item.icon className="text-gold-500 mb-8" size={32} />
                       <h4 className="text-white font-serif text-2xl mb-4 italic">{item.title}</h4>
                       <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="lg:col-span-4">
               <div className="bg-onyx-900 border border-white/10 p-12 rounded-[3rem] shadow-3xl">
                  <h3 className="text-white font-serif text-2xl mb-10 flex items-center gap-4">
                     <RotateCw className="text-gold-500" size={24} /> Innovation
                  </h3>
                  <div className="space-y-8">
                     <div>
                        <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Rotation Speed</div>
                        <div className="text-white font-serif text-3xl">60 Min / Cycle</div>
                     </div>
                     <div className="h-px bg-white/5"></div>
                     <div>
                        <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Capacity</div>
                        <div className="text-white font-serif text-3xl">120 Seats / Tower</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Next Chapter Anchor */}
         <Link to="/wellness" className="group relative block w-full h-[500px] rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl">
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-[0.25] transition-transform duration-[4s] group-hover:scale-105" alt="Next Section" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
               <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] mb-8 animate-pulse">Proceed to Next Intelligence</span>
               <h3 className="text-white font-serif text-6xl md:text-8xl italic mb-12">Vedic <br/><span className="gold-gradient-text font-black tracking-tighter">Wellness.</span></h3>
               <div className="w-20 h-20 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-700 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                  <ArrowRight size={40} />
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default DiningPage;
