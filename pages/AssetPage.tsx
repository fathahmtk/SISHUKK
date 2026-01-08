import React, { useState, useEffect } from 'react';
import { Ruler, Construction, ArrowLeft, ArrowRight, ShieldCheck, Layers, Maximize, Building2, Compass, Zap, ChevronLeft, ChevronRight, Target, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloorPlanExplorer from '../components/FloorPlanExplorer.tsx';

const AssetPage: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    { 
      src: "https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg", 
      label: "Monumental Elevation", 
      sub: "Twin 20-Floor Vertical Symmetry",
      detail: "The twin-tower design minimizes wind loads while maximizing 360° spiritual vistas."
    },
    { 
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80", 
      label: "The Meridian Arch", 
      sub: "Structural Sky-Bridge Link",
      detail: "A high-precision steel-truss bridge at Level 15 connecting Tower A and Tower B."
    },
    { 
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80", 
      label: "Institutional Facade", 
      sub: "High-Performance DGU Glass",
      detail: "Reflective crystal glazing designed for thermal efficiency and acoustic isolation."
    },
    { 
      src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80", 
      label: "The Grand Podium", 
      sub: "7-Star Entrance Experience",
      detail: "Separate monumental entrance for events ensuring zero-friction resident flow."
    }
  ];

  useEffect(() => {
    let timer: number;
    if (isAutoPlaying) {
      timer = window.setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % images.length);
      }, 6000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const structuralDna = [
    {
      icon: Maximize,
      label: "Total Built-up Area",
      value: "350,000",
      unit: "Sq. Ft.",
      desc: "Institutional scale optimized for dual-tower hospitality and large-scale MICE."
    },
    {
      icon: Ruler,
      label: "Structural Height",
      value: "75",
      unit: "Meters",
      desc: "The definitive skyline marker in the South Indian spiritual corridor."
    },
    {
      icon: Building2,
      label: "Asset Inventory",
      value: "420",
      unit: "Keys",
      desc: "High-yield luxury room mix distributed between Tower A & Tower B."
    },
    {
      icon: Compass,
      label: "Revolving Crowns",
      value: "02",
      unit: "Units",
      desc: "Independent 360° gastronomic platforms at the project terminal level."
    }
  ];

  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in pb-20 overflow-x-hidden">
      {/* Header Context */}
      <div className="container mx-auto px-6 mb-16">
        <Link to="/" className="inline-flex items-center gap-3 text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-10 hover:text-white transition-all group">
            <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Return to Summary
        </Link>
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-slate-500 text-[10px] font-black uppercase tracking-[0.6em] mb-6">
              <Layers size={14} /> Dossier Chapter 01: The Structural Asset
            </div>
            <h1 className="text-white font-serif text-6xl md:text-9xl leading-[0.8] tracking-tighter mb-10 italic">
              Architecture <br/><span className="gold-gradient-text italic font-black">of Sovereignty.</span>
            </h1>
            <p className="text-slate-400 text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-gold-500/30 pl-10">
                SIRSHUKK GRAND TOWERS is engineered as a value-retaining capital asset. A monumental twin-tower project delivering high-yield operational alpha in a supply-void luxury market.
            </p>
          </div>
          <div className="bg-onyx-900 border border-white/10 p-8 rounded-[2.5rem] hidden lg:block shadow-3xl">
            <div className="flex items-center gap-4 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-3">
              <ShieldCheck size={18} /> Asset Audit v2.5
            </div>
            <p className="text-slate-400 text-xs font-mono">Structure Peer-Reviewed: <br/><span className="text-white">INTERNATIONAL CONSORTIUM</span></p>
          </div>
        </div>
      </div>

      {/* Cinematic Showcase Carousel */}
      <div className="relative w-full h-[85vh] overflow-hidden mb-32 bg-black group/carousel">
        <div 
          className="flex h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-full h-full relative overflow-hidden">
              <img 
                src={img.src} 
                alt={img.label} 
                className={`w-full h-full object-cover transition-transform duration-[12s] ease-linear brightness-[0.35] saturate-[0.7] ${activeSlide === i ? 'scale-110' : 'scale-100'}`} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-24 left-10 lg:left-32 max-w-4xl">
                <div className="overflow-hidden mb-4">
                   <span className="text-gold-500 text-[11px] font-black uppercase tracking-[0.6em] block translate-y-full animate-[reveal-up_1s_ease-out_forwards]">
                     {img.sub}
                   </span>
                </div>
                <div className="overflow-hidden mb-8">
                   <h3 className="text-white font-serif text-5xl md:text-8xl italic leading-none translate-y-full animate-[reveal-up_1.2s_ease-out_0.2s_forwards]">
                     {img.label}
                   </h3>
                </div>
                <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-xl opacity-0 animate-[fade-in_1s_ease-out_0.6s_forwards]">
                  {img.detail}
                </p>
                <div className="mt-12 flex items-center gap-6 opacity-0 animate-[fade-in_1s_ease-out_0.8s_forwards]">
                  <div className="h-px w-20 bg-gold-500/50"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Visual Spec {i + 1} / {images.length}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-10 pointer-events-none">
          <button 
            onClick={prevSlide}
            className="w-16 h-16 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl flex items-center justify-center text-white hover:bg-gold-500 hover:text-onyx-950 transition-all pointer-events-auto active:scale-90 shadow-3xl group"
          >
            <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-16 h-16 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl flex items-center justify-center text-white hover:bg-gold-500 hover:text-onyx-950 transition-all pointer-events-auto active:scale-90 shadow-3xl group"
          >
            <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Dynamic Pagination Bars */}
        <div className="absolute bottom-12 right-10 lg:right-32 flex gap-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActiveSlide(i); setIsAutoPlaying(false); }}
              className={`h-1.5 transition-all duration-1000 rounded-full ${i === activeSlide ? 'w-24 bg-gold-500 shadow-[0_0_20px_#D4AF37]' : 'w-8 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>
      </div>

      {/* Structural Vitality Section */}
      <section className="py-32 bg-onyx-950 relative overflow-hidden border-y border-white/5 mb-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold-500 text-[11px] font-black uppercase tracking-[0.8em] block mb-6">Asset Intelligence</span>
              <h2 className="text-white font-serif text-5xl md:text-7xl italic leading-tight">Structural <br/><span className="gold-gradient-text italic font-black">Performance.</span></h2>
            </div>
            <div className="hidden lg:flex items-center gap-6 p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
               <div className="text-right">
                  <div className="text-slate-600 text-[9px] font-black uppercase tracking-widest mb-1">Efficiency Target</div>
                  <div className="text-gold-500 font-serif text-3xl font-black">85.4%</div>
               </div>
               <div className="w-px h-10 bg-white/10"></div>
               <Target size={28} className="text-gold-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {structuralDna.map((item, i) => (
              <div key={i} className="bg-onyx-900 border border-white/5 p-12 rounded-[3rem] group hover:border-gold-500/40 transition-all duration-700 shadow-2xl relative overflow-hidden flex flex-col justify-between h-[450px]">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <item.icon size={150} className="text-white" />
                </div>
                <div className="w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all shadow-xl">
                  <item.icon size={28} />
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-white font-serif text-6xl font-black group-hover:text-gold-400 transition-colors">{item.value}</span>
                    <span className="text-gold-500 text-sm font-black uppercase tracking-widest">{item.unit}</span>
                  </div>
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-2 border-b border-white/5 pb-4">{item.label}</div>
                  <p className="text-slate-400 text-sm leading-relaxed font-light mt-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Meridian Arch Spotlight */}
          <div className="mt-20 bg-onyx-900 border border-white/10 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover opacity-15 brightness-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[6s]"
                alt="Structural Link" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-onyx-950 via-onyx-950/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-10">
                <div className="inline-flex items-center gap-4 bg-gold-500 text-onyx-950 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl">
                  <Zap size={16} className="animate-pulse" /> Engineering USP
                </div>
                <h3 className="text-white font-serif text-6xl md:text-8xl italic leading-none">The Meridian <br/><span className="gold-gradient-text italic font-black">Arch.</span></h3>
                <p className="text-slate-300 text-xl font-light leading-relaxed max-w-xl">
                  A high-precision structural sky-bridge at Level 15, connecting Towers A and B. This architectural nexus houses the Executive Club and a transparent spiritual observation deck overlooking the temple district.
                </p>
                <div className="flex gap-12 border-t border-white/10 pt-12">
                   <div className="group/metric">
                      <div className="text-slate-600 text-[10px] font-black uppercase tracking-widest mb-2 group-hover/metric:text-gold-500 transition-colors">Link Elevation</div>
                      <div className="text-white font-mono text-3xl">Lvl 15</div>
                   </div>
                   <div className="group/metric">
                      <div className="text-slate-600 text-[10px] font-black uppercase tracking-widest mb-2 group-hover/metric:text-gold-500 transition-colors">Clear Span</div>
                      <div className="text-white font-mono text-3xl">18 Meters</div>
                   </div>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="w-[450px] aspect-square rounded-[3.5rem] border border-gold-500/20 bg-onyx-950/40 backdrop-blur-3xl p-16 flex flex-col justify-center items-center text-center group-hover:border-gold-500/50 transition-all shadow-3xl">
                  <div className="relative mb-10">
                     <ShieldCheck size={80} className="text-gold-500 animate-float" />
                     <div className="absolute inset-0 bg-gold-500 blur-3xl opacity-20"></div>
                  </div>
                  <h4 className="text-white font-serif text-3xl italic mb-6">Structural Integrity</h4>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-xs uppercase tracking-widest font-black italic">Seismic Isolated Steel Truss Design with Integrated Damping Systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Floor Explorer */}
      <FloorPlanExplorer />

      {/* Asset Specifications Table */}
      <div className="container mx-auto px-6 py-32">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-5 space-y-12">
                <div className="bg-onyx-900 border border-white/10 p-12 rounded-[3.5rem] shadow-3xl">
                    <h3 className="text-white font-serif text-4xl mb-12 flex items-center gap-5 italic">
                        <Construction className="text-gold-500" size={32} /> Asset Specs
                    </h3>
                    <div className="space-y-8">
                        {[
                            { l: "Structural Height", v: "75 Meters" },
                            { l: "Floor Configuration", v: "2B + G + 20" },
                            { l: "Plot Equity", v: "1.29 Acres" },
                            { l: "Total Built-up", v: "350,000 Sq. Ft." },
                            { l: "Vertical Core", v: "12 High-Speed Lifts" }
                        ].map((item, i) => (
                            <div key={i} className="flex justify-between border-b border-white/5 pb-5 last:border-0 group">
                                <span className="text-slate-600 text-[11px] uppercase tracking-widest font-black group-hover:text-gold-500 transition-colors">{item.l}</span>
                                <span className="text-white font-mono text-lg font-bold">{item.v}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-gold-500 text-[11px] font-black uppercase tracking-[0.8em] mb-10 block">Engineering Strategy</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     {[
                         { 
                           title: "Cylindrical Aerodynamics", 
                           desc: "Minimizes structural oscillation while providing unhindered panoramas of the Temple Nada.",
                           icon: Target
                         },
                         { 
                           title: "Portal Segregation", 
                           desc: "Dual lobbies separate guest residents from heavy event traffic, ensuring premium acoustic seclusion.",
                           icon: Building2
                         }
                     ].map((item, i) => (
                         <div key={i} className="p-12 bg-white/[0.02] border border-white/10 rounded-[3rem] group hover:bg-white/[0.08] transition-all shadow-2xl">
                             <item.icon className="text-gold-500 mb-10 group-hover:scale-110 transition-transform" size={40} />
                             <h4 className="text-white font-serif text-3xl mb-4 italic leading-tight">{item.title}</h4>
                             <p className="text-slate-500 text-base font-light leading-relaxed">{item.desc}</p>
                         </div>
                     ))}
                </div>
                <div className="mt-16 p-8 bg-gold-500/5 border border-gold-500/20 rounded-3xl flex items-center gap-6">
                   <Info size={24} className="text-gold-500" />
                   <p className="text-slate-400 text-xs uppercase font-black tracking-widest">Technical Annexure 01-A: Wind Tunnel Study & Seismic Calibration Logged.</p>
                </div>
            </div>
         </div>

         {/* Next Chapter CTA */}
         <Link to="/market" className="group relative block w-full h-[600px] rounded-[5rem] overflow-hidden border border-white/10 shadow-3xl mt-40">
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80" className="w-full h-full object-cover brightness-[0.2] transition-transform duration-[6s] group-hover:scale-105" alt="Next" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
               <span className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] mb-10 animate-pulse">Chapter 02</span>
               <h3 className="text-white font-serif text-7xl md:text-9xl italic mb-16">The Market <br/><span className="gold-gradient-text font-black tracking-tighter">Dynamics.</span></h3>
               <div className="w-24 h-24 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-1000 shadow-[0_0_60px_rgba(212,175,55,0.4)]">
                  <ArrowRight size={48} className="group-hover:translate-x-2 transition-transform" />
               </div>
            </div>
         </Link>
      </div>

      <style>{`
        @keyframes reveal-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AssetPage;