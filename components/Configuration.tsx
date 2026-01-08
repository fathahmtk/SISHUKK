
import React from 'react';
import { CheckCircle2, Maximize2 } from 'lucide-react';

const Configuration: React.FC = () => {
  const specs = [
    { label: "Vertical Structure", value: "Twin Glass Towers (Symmetrical)" },
    { label: "Connecting Element", value: "Monumental Illuminated Arch" },
    { label: "Max Height", value: "75m (Iconic Skyline Presence)" },
    { label: "Rooftop Strategy", value: "Dual Revolving Platforms" },
    { label: "Facade Type", value: "High-Performance DGU Glass" },
    { label: "Site Equity", value: "1.29 Acres Debt-Free" },
  ];

  return (
    <section id="config" className="py-24 bg-onyx-950 text-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/2 space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold-500/30 rounded-full bg-gold-500/5 mb-2">
            <Maximize2 size={12} className="text-gold-500" />
            <span className="text-gold-400 uppercase text-[9px] font-bold tracking-[0.2em]">Asset Configuration</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">Architectural <br/><span className="gold-gradient-text">Master Plan</span></h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            Designed to be Guruvayur's definitive landmark, the twin towers are connected by a structural arch that serves as both a sky-bridge and a monumental beacon of luxury.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            {specs.map((spec, index) => (
              <div key={index} className="flex items-start space-x-4 border-b border-white/5 pb-6">
                <CheckCircle2 className="text-gold-500 shrink-0 mt-1" size={18} />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-black">{spec.label}</div>
                  <div className="text-lg font-serif text-slate-100">{spec.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 relative h-[700px] w-full group overflow-hidden rounded-3xl shadow-2xl border border-white/10">
           <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            alt="Sirshukk Twin Towers Structure" 
            className="w-full h-full object-cover transition-all duration-[3s] ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-0 left-0 p-12 w-full">
            <p className="text-gold-400 font-serif italic text-2xl mb-2">"The Gateway Arch"</p>
            <p className="text-slate-400 text-xs uppercase tracking-[0.4em]">Engineered for Structural Dominance</p>
          </div>
          {/* Pulsing focal point on the arch */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full blur-md animate-pulse shadow-[0_0_20px_#D4AF37]"></div>
        </div>
      </div>
    </section>
  );
};

export default Configuration;
