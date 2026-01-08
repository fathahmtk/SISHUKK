import React from 'react';
import { ArrowLeft, Compass, UtensilsCrossed, Wine, Coffee, RotateCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiningPage: React.FC = () => {
  const images = [
      { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80", label: "Revolving Restaurant" },
      { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80", label: "Sky Bar Concept" },
      { src: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&q=80", label: "Fine Dining" },
      { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80", label: "Artisan Patisserie" }
  ];

  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-6 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-8 hover:text-white transition-colors">
            <ArrowLeft size={12} /> Return to Summary
        </Link>
        <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Deep Dive: Section 05</span>
        <h1 className="text-white font-serif text-5xl md:text-7xl mb-6">Gastronomy <span className="text-gold-500 italic">Above Clouds.</span></h1>
        <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            Guruvayur's first and only dual revolving restaurants. 75 meters above ground, offering a 360-degree panorama of the temple town and the Arabian Sea.
        </p>
      </div>

      <div className="w-full h-[60vh] grid grid-cols-2 gap-1 px-1 mb-24">
         {images.slice(0, 2).map((img, i) => (
             <div key={i} className="relative group overflow-hidden">
                 <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 brightness-75 group-hover:brightness-100" />
                 <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 text-white text-[9px] font-black uppercase tracking-widest border border-white/10">
                    {img.label}
                 </div>
             </div>
         ))}
      </div>

      <div className="container mx-auto px-6 pb-24">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
             <div className="lg:col-span-4 space-y-8">
                 <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                     <h3 className="text-gold-500 font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                        <Compass size={16} /> Venue Portfolio
                     </h3>
                     <ul className="space-y-6">
                         <li className="group">
                             <div className="flex justify-between items-center mb-1">
                                 <span className="text-white font-serif text-xl">The Orbit (Tower A)</span>
                                 <UtensilsCrossed size={14} className="text-slate-500 group-hover:text-gold-500 transition-colors" />
                             </div>
                             <p className="text-slate-500 text-xs">Multi-cuisine Revolving Buffet</p>
                         </li>
                         <li className="group">
                             <div className="flex justify-between items-center mb-1">
                                 <span className="text-white font-serif text-xl">Zenith (Tower B)</span>
                                 <Coffee size={14} className="text-slate-500 group-hover:text-gold-500 transition-colors" />
                             </div>
                             <p className="text-slate-500 text-xs">Specialty Seafood & Grill (Revolving)</p>
                         </li>
                         <li className="group">
                             <div className="flex justify-between items-center mb-1">
                                 <span className="text-white font-serif text-xl">The Sky Deck</span>
                                 <Wine size={14} className="text-slate-500 group-hover:text-gold-500 transition-colors" />
                             </div>
                             <p className="text-slate-500 text-xs">Open-air Lounge at 15th Floor Arch</p>
                         </li>
                     </ul>
                 </div>
             </div>

             <div className="lg:col-span-8">
                 <div className="mb-12">
                     <h3 className="text-white font-serif text-3xl mb-6">Structural Innovation</h3>
                     <p className="text-slate-300 text-lg leading-relaxed mb-6">
                         The revolving mechanism is engineered by a leading German firm, ensuring vibration-free rotation. A full rotation takes 60 minutes, giving diners a complete view of the landscape during a standard meal service.
                     </p>
                     <div className="flex items-center gap-4 text-gold-500 text-sm font-bold uppercase tracking-wide bg-gold-500/10 w-fit px-6 py-3 rounded-full border border-gold-500/20">
                         <RotateCw className="animate-spin-slow" size={20} />
                         <span>Engineered for Zero Vibration</span>
                     </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="bg-onyx-900 border border-white/10 p-8 rounded-2xl">
                         <h4 className="text-white font-bold text-lg mb-4">Non-Resident Revenue</h4>
                         <p className="text-slate-400 text-sm leading-relaxed">
                             In Guruvayur, high-quality dining options are scarce. We project 60% of F&B revenue will come from non-resident guests (walk-ins), creating a robust cash flow independent of room occupancy.
                         </p>
                     </div>
                     <div className="bg-onyx-900 border border-white/10 p-8 rounded-2xl">
                         <h4 className="text-white font-bold text-lg mb-4">Bar Strategy</h4>
                         <p className="text-slate-400 text-sm leading-relaxed">
                             As a 5-Star classified asset, SIRSHUKK will hold a FL-3 license, making it one of the few luxury venues in the district permitted to serve alcohol, commanding a significant premium.
                         </p>
                     </div>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
};

export default DiningPage;