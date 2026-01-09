import React from 'react';
import { ArrowLeft, ArrowRight, Music, Users, Layers, Zap, Truck, Camera, Star, Maximize2, Mic2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsPage: React.FC = () => {
  const images = [
      { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80", label: "Grand Imperial Ballroom", sub: "15,000 Sq. Ft. Volume" },
      { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80", label: "Pre-Function Foyer", sub: "Ritual Concierge" },
      { src: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80", label: "Ritual Courtyard", sub: "Outdoor Ecosystem" },
      { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80", label: "Sovereign Wings", sub: "Event Residencies" }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-40 animate-fade-in overflow-hidden">
      {/* Background Decor */}
      <div className="fixed top-0 right-0 w-1/3 h-screen bg-[#FDFBF7] -z-10 pointer-events-none border-l border-slate-100"></div>
      <div className="fixed top-[20%] left-[5%] text-slate-50 font-serif text-[40rem] font-black -z-20 pointer-events-none select-none italic leading-none opacity-60">E</div>

      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-4 text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] mb-16 hover:text-slate-950 transition-all group">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-40">
          <div className="lg:col-span-7 space-y-12">
            <div className="flex items-center gap-5">
              <div className="w-12 h-[1px] bg-gold-400"></div>
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.6em]">Chapter 04: Revenue Architecture</span>
            </div>
            <h1 className="text-slate-950 font-serif text-6xl md:text-[8rem] leading-[0.8] tracking-tighter italic">
              Monumental <br/><span className="gold-gradient-text italic font-black">Volumes.</span>
            </h1>
            <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-2xl italic">
                "The ballroom is the structural heart of SGT. Engineered for South India's largest ceremonies, it provides a non-seasonal demand floor independent of occupancy."
            </p>
          </div>
          
          <div className="lg:col-span-5 pt-20">
             <div className="bg-white border border-slate-200 p-12 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                   <Users size={300} className="text-slate-950" />
                </div>
                <div className="relative z-10">
                   <div className="flex items-center gap-5 mb-10">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-gold-600 shadow-xl group-hover:bg-gold-500 group-hover:text-white transition-all">
                         <Maximize2 size={28} />
                      </div>
                      <h4 className="text-slate-950 font-serif text-3xl italic">Global Capacity</h4>
                   </div>
                   <div className="text-slate-950 font-serif text-7xl font-black mb-4 tracking-tighter italic">3,000+</div>
                   <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] mb-10">Pax Structural Limit</p>
                   <div className="pt-8 border-t border-slate-100 flex items-center justify-between opacity-40">
                      <span className="text-[10px] font-black uppercase tracking-widest">Mega-Scale Volume</span>
                      <Globe size={20} className="text-gold-500" />
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Staggered Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40 h-auto lg:h-[800px]">
           {images.map((img, i) => (
               <div key={i} className={`group relative rounded-[4rem] overflow-hidden border border-slate-100 shadow-2xl bg-slate-50 transition-all duration-1000 hover:shadow-3xl ${i % 2 === 1 ? 'lg:row-span-2' : 'lg:row-span-1'}`}>
                   <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-20 transition-opacity duration-700"></div>
                   <div className="absolute inset-0 flex flex-col justify-end p-12 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                      <span className="text-gold-600 text-[9px] font-black uppercase tracking-[0.4em] mb-4 block border-b border-gold-200 pb-2 w-fit">{img.sub}</span>
                      <h3 className="text-slate-950 font-serif text-3xl group-hover:text-gold-600 transition-colors leading-tight italic">{img.label}</h3>
                   </div>
               </div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-40 items-center pt-24 border-t border-slate-100">
            <div className="lg:col-span-8 space-y-16">
               <h3 className="text-slate-950 font-serif text-5xl md:text-[6rem] italic leading-[0.9] tracking-tighter">Capacity <br/><span className="gold-gradient-text not-italic font-black">Engineering.</span></h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    { title: "Volume Dynamics", icon: Maximize2, desc: "8-meter clear heights allowing for aerial cinematography and ritual scale." },
                    { title: "Sonic Integrity", icon: Mic2, desc: "Concert-grade digital acoustics and active noise isolation between parallel venues." }
                  ].map((item, i) => (
                    <div key={i} className="p-12 rounded-[4rem] bg-[#FDFBF7] border border-slate-200 hover:border-gold-400 hover:bg-white transition-all duration-700 shadow-sm group">
                       <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-gold-600 mb-8 shadow-xl group-hover:bg-gold-500 group-hover:text-white transition-all">
                          <item.icon size={28} />
                       </div>
                       <h4 className="text-slate-950 font-serif text-3xl mb-4 italic leading-none">{item.title}</h4>
                       <p className="text-slate-500 text-base font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="lg:col-span-4">
               <div className="bg-white border border-slate-200 p-12 lg:p-16 rounded-[4rem] shadow-[0_60px_120px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                     <Star size={300} className="text-slate-950" />
                  </div>
                  <h3 className="text-slate-950 font-serif text-4xl mb-12 italic relative z-10 leading-none">Yield Params.</h3>
                  <div className="space-y-10 relative z-10">
                     {[
                        { l: "Concurrent Events", v: "Up to 4" },
                        { l: "Banquet Seats", v: "1,200 Pax" },
                        { l: "Loading Bay", v: "Heavy-Lift" },
                        { l: "Service Core", v: "Segregated" }
                     ].map((item, i) => (
                        <div key={i} className="flex justify-between items-baseline group/row">
                           <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest group-hover/row:text-gold-600 transition-colors">{item.l}</span>
                           <div className="flex-1 border-b border-dotted border-slate-200 mx-6"></div>
                           <span className="text-slate-950 font-serif text-2xl italic whitespace-nowrap">{item.v}</span>
                        </div>
                     ))}
                  </div>
                  <div className="mt-16 pt-10 border-t border-slate-100">
                     <button className="w-full py-6 bg-slate-950 text-white rounded-[2rem] text-[11px] font-black uppercase tracking-[0.4em] transition-all hover:bg-gold-500 shadow-2xl active:scale-95">
                        Download Floor Schematics
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {/* Next Link */}
         <Link to="/dining" className="group relative block w-full h-[650px] rounded-[6rem] overflow-hidden border border-slate-200 shadow-3xl bg-slate-50">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105 brightness-[1.05] contrast-[1.02]" alt="Next" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-20 transition-opacity"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
               <span className="text-gold-600 text-[11px] font-black uppercase tracking-[1em] mb-12 block animate-float">Chapter 05</span>
               <h3 className="text-slate-950 font-serif text-7xl md:text-9xl italic mb-20">Destination <br/><span className="gold-gradient-text not-italic font-black tracking-tighter">Gastronomy.</span></h3>
               <div className="w-32 h-32 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all duration-1000 shadow-3xl">
                  <ArrowRight size={56} className="group-hover:translate-x-4 transition-transform" />
               </div>
            </div>
         </Link>
      </div>
    </div>
  );
};

export default EventsPage;