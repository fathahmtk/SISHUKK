
import React from 'react';
import { ArrowLeft, ArrowRight, Music, Users, Layers, Zap, Truck, Camera, Star, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsPage: React.FC = () => {
  const images = [
      { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80", label: "Grand Imperial Ballroom", sub: "15,000 Sq. Ft. Pillar-less Volume" },
      { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80", label: "Pre-Function Foyer", sub: "Bespoke Concierge Arrival" },
      { src: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80", label: "Ritual Courtyard", sub: "Outdoor Ceremonial Ecosystem" },
      { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80", label: "Royal Suite Wings", sub: "Integrated Event Residency" }
  ];

  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in pb-20">
      <div className="container mx-auto px-6 mb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-10 hover:text-white transition-colors group">
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Return to Summary
        </Link>
        <div className="max-w-4xl">
            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Dossier Chapter 04: Revenue Architecture</span>
            <h1 className="text-white font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter mb-8 italic">Monumental <br/><span className="gold-gradient-text italic font-black">Volumes.</span></h1>
            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-2xl border-l border-gold-500/30 pl-8">
                The ballroom is the structural heart of SGT. Engineered for South India's largest ceremonies and global conventions, it provides a non-seasonal demand floor independent of room occupancy.
            </p>
        </div>
      </div>

      {/* Cinematic Showcase Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 px-1 mb-32">
         {images.map((img, i) => (
             <div key={i} className="relative group h-[70vh] overflow-hidden">
                 <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110 brightness-[0.5] group-hover:brightness-100" />
                 <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-transparent to-transparent opacity-60"></div>
                 <div className="absolute bottom-10 left-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="text-gold-500 text-[10px] font-black uppercase tracking-widest block mb-2">{img.sub}</span>
                    <h3 className="text-white font-serif text-3xl">{img.label}</h3>
                 </div>
             </div>
         ))}
      </div>

      <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-40">
            <div className="lg:col-span-7 space-y-12">
               <h3 className="text-white font-serif text-5xl italic leading-tight">Capacity <br/>Engineering.</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: "Volume Dynamics", icon: Maximize2, desc: "8-meter clear heights allowing for aerial cinematography and elaborate set designs." },
                    { title: "Sonic Integrity", icon: Music, desc: "Concert-grade digital acoustics and active noise isolation between parallel venues." }
                  ].map((item, i) => (
                    <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/[0.08] transition-all group">
                       <item.icon className="text-gold-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
                       <h4 className="text-white font-serif text-2xl mb-4 italic">{item.title}</h4>
                       <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="lg:col-span-5">
               <div className="bg-onyx-900 border border-white/10 p-12 rounded-[3rem] shadow-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                     <Users size={180} className="text-gold-500" />
                  </div>
                  <h3 className="text-white font-serif text-2xl mb-10 flex items-center gap-4">
                     <Star className="text-gold-500" size={24} /> Yield Parameters
                  </h3>
                  <div className="space-y-6">
                     {[
                        { l: "Max Capacity", v: "3,000 Pax" },
                        { l: "Banquet Seats", v: "1,200 Pax" },
                        { l: "Concurrent Events", v: "Up to 4" },
                        { l: "Service Core", v: "Dedicated BOH" }
                     ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 group">
                           <span className="text-slate-500 text-[10px] uppercase tracking-widest font-black group-hover:text-white transition-colors">{item.l}</span>
                           <span className="text-gold-400 font-mono text-lg font-bold">{item.v}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* Next Chapter Anchor */}
         <Link to="/dining" className="group relative block w-full h-[500px] rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-[0.25] transition-transform duration-[4s] group-hover:scale-105" alt="Next Section" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
               <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] mb-8 animate-pulse">Proceed to Next Intelligence</span>
               <h3 className="text-white font-serif text-6xl md:text-8xl italic mb-12">Destination <br/><span className="gold-gradient-text font-black tracking-tighter">Gastronomy.</span></h3>
               <div className="w-20 h-20 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-700 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                  <ArrowRight size={40} />
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default EventsPage;
