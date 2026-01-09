import React, { useState, useEffect } from 'react';
import { Ruler, Construction, ArrowLeft, ArrowRight, ShieldCheck, Layers, Maximize, Building2, Compass, Zap, ChevronLeft, ChevronRight, Target, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloorPlanExplorer from '../components/FloorPlanExplorer.tsx';

const AssetPage: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const images = [
    { 
      src: "https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg", 
      label: "The Elevation", 
      sub: "20-Floor Vertical Symmetry",
      detail: "The twin-tower design minimizes wind loads while maximizing 360° spiritual vistas."
    },
    { 
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80", 
      label: "Meridian Arch", 
      sub: "Structural Sky-Bridge",
      detail: "A high-precision steel-truss bridge at Level 15 connecting Tower A and Tower B."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-40 animate-fade-in overflow-hidden">
      {/* Background Decor */}
      <div className="fixed top-0 right-0 w-1/3 h-screen bg-slate-50 -z-10 pointer-events-none"></div>
      <div className="fixed top-[20%] left-[5%] text-slate-100 font-serif text-[40rem] font-black -z-20 pointer-events-none select-none italic leading-none opacity-40">01</div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          {/* Left Column: Context & Typography */}
          <div className="lg:col-span-5 sticky top-32">
            <Link to="/" className="inline-flex items-center gap-4 text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] mb-16 hover:text-slate-900 transition-all group">
                <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Back to Dashboard
            </Link>
            
            <div className="space-y-12">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-[1px] bg-gold-400"></div>
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.6em]">Dossier: The Physical Asset</span>
               </div>
               
               <h1 className="text-slate-950 font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.8] tracking-tighter italic">
                  Structural <br/><span className="gold-gradient-text italic font-black">Scarcity.</span>
               </h1>
               
               <p className="text-slate-500 text-2xl font-light leading-relaxed border-l-2 border-gold-400 pl-12 max-w-lg">
                  SIRSHUKK is engineered as a value-retaining capital landmark. A de-risked structural design optimized for the South Indian spiritual corridor.
               </p>

               <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 gap-12">
                  {[
                    { l: "Built-up Area", v: "350k", s: "Sq. Ft." },
                    { l: "Tower Height", v: "75m", s: "Terminal" },
                  ].map((stat, i) => (
                    <div key={i} className="group">
                       <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-3">{stat.l}</div>
                       <div className="text-slate-950 font-serif text-6xl leading-none mb-2 group-hover:text-gold-600 transition-colors">{stat.v}</div>
                       <div className="text-gold-600 text-[10px] font-black uppercase tracking-widest">{stat.s}</div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Right Column: Cinematic Renders */}
          <div className="lg:col-span-7 space-y-32">
             <div className="relative rounded-[4rem] overflow-hidden shadow-3xl group border border-slate-100 bg-slate-50 aspect-[4/5]">
                <img 
                   src={images[0].src} 
                   className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-105" 
                   alt="Structural Render" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/10 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                
                <div className="absolute bottom-16 left-16 right-16">
                   <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">{images[0].sub}</span>
                   <h3 className="text-slate-950 font-serif text-5xl italic leading-none">{images[0].label}</h3>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { icon: Target, title: "Cylindrical Core", d: "Minimizes structural oscillation while providing unhindered panoramas." },
                  { icon: ShieldCheck, title: "Portal Logic", d: "Dual lobbies separate guest residents from heavy event traffic." }
                ].map((item, i) => (
                  <div key={i} className="p-16 bg-slate-50 border border-slate-200 rounded-[3.5rem] group hover:bg-white hover:border-gold-400 transition-all duration-700 shadow-sm hover:shadow-2xl">
                    <item.icon className="text-gold-600 mb-10 group-hover:scale-110 transition-transform" size={40} />
                    <h4 className="text-slate-950 font-serif text-3xl mb-4 italic">{item.title}</h4>
                    <p className="text-slate-500 text-base font-light leading-relaxed">{item.d}</p>
                  </div>
                ))}
             </div>

             <div className="relative rounded-[4rem] overflow-hidden shadow-3xl aspect-video group">
                 <img src={images[1].src} className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110" alt="Bridge View" />
                 <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 px-10 py-6 rounded-full text-slate-950 text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center gap-4">
                       <Info size={16} className="text-gold-600" /> Audit Engineering Specs
                    </div>
                 </div>
             </div>
          </div>
        </div>

        {/* Floating Explorer */}
        <div className="mt-64 relative z-10">
           <FloorPlanExplorer />
        </div>

        {/* Visual Link to Market */}
        <div className="mt-64 text-center">
           <span className="text-gold-600 text-[10px] font-black uppercase tracking-[1em] mb-12 block">Next Chapter</span>
           <Link to="/market" className="group relative inline-flex items-center gap-12 text-slate-950 font-serif text-6xl md:text-9xl tracking-tighter hover:text-gold-600 transition-colors">
              The <span className="gold-gradient-text italic font-black">Market.</span>
              <div className="w-24 h-24 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-gold-500 transition-all">
                 <ArrowRight size={48} className="group-hover:translate-x-3 transition-transform" />
              </div>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default AssetPage;