import React, { useState, useRef } from 'react';
import { ArrowLeftRight, ShieldCheck, Zap, Compass, Ruler, Scan, Layers } from 'lucide-react';

const DualPerspective: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, position)));
  };

  return (
    <section className="h-screen w-full bg-slate-950 relative overflow-hidden flex flex-col justify-center border-b border-white/5">
      <div className="container mx-auto px-6 mb-20 relative z-30">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 px-5 py-2 border border-gold-500/20 rounded-full bg-gold-500/5 mb-10">
              <Layers size={14} className="text-gold-500" />
              <span className="text-gold-400 uppercase text-[10px] font-black tracking-[0.6em]">Comparative Audit Chapter 03</span>
            </div>
            <h2 className="text-white font-serif text-5xl md:text-8xl leading-[0.8] tracking-tighter italic">
              Scale & <span className="gold-gradient-text italic font-black">Substance.</span>
            </h2>
          </div>
          <div className="lg:w-1/3 border-l-2 border-gold-500/30 pl-10">
             <p className="text-slate-400 text-lg font-light leading-relaxed italic">
                "Contrast between monumental twin-tower form and the curated hyper-luxury internal volumes."
             </p>
          </div>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full h-[65vh] cursor-col-resize select-none overflow-hidden group border-y border-white/10"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Exterior (The Silhouette) */}
        <div className="absolute inset-0 z-10 w-full h-full">
          <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            className="w-full h-full object-cover brightness-[0.5] saturate-[0.7]"
            alt="Asset Exterior"
          />
          <div className="absolute top-12 left-12 z-20 flex items-center gap-4 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
             <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></div>
             <span className="text-[10px] font-black uppercase tracking-widest text-white">EXTERNAL SCAN: ACTIVE</span>
          </div>
        </div>

        {/* Interior (The Experience) */}
        <div 
          className="absolute inset-0 z-20 h-full overflow-hidden transition-all duration-75 ease-out border-l border-gold-500/40 shadow-[-30px_0_60px_rgba(0,0,0,0.8)]"
          style={{ width: `${100 - sliderPos}%`, left: `${sliderPos}%` }}
        >
          <div 
            className="absolute top-0 right-0 h-full w-screen"
            style={{ width: '100vw', right: 0 }}
          >
            <img 
              src="https://cdn-imgix.headout.com/tour/34223/TOUR-IMAGE/95a3df68-963d-4966-980b-2223b2909a37-1647432002221.jpg" 
              className="w-full h-full object-cover brightness-[0.6] saturate-[0.9]"
              alt="Asset Interior"
            />
            <div className="absolute top-12 right-12 z-20 flex items-center gap-4 bg-gold-500 px-6 py-3 rounded-full shadow-2xl">
               <span className="text-[10px] font-black uppercase tracking-widest text-onyx-950">INTERIOR AUDIT: NODE_07</span>
               <div className="w-2 h-2 rounded-full bg-onyx-950"></div>
            </div>
          </div>
        </div>

        {/* Slider Handle HUD */}
        <div 
          className="absolute top-0 bottom-0 z-30 w-px bg-gold-500/50 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
           <div className={`w-16 h-16 rounded-full bg-onyx-950 text-gold-500 flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.4)] border border-gold-500 transition-all duration-500 ${isHovering ? 'scale-110' : 'scale-90 opacity-60'}`}>
              <ArrowLeftRight size={28} />
           </div>
           
           {/* Vertical HUD Lines */}
           <div className="absolute top-0 w-px h-32 bg-gradient-to-b from-gold-500 via-gold-500/50 to-transparent"></div>
           <div className="absolute bottom-0 w-px h-32 bg-gradient-to-t from-gold-500 via-gold-500/50 to-transparent"></div>

           {/* Precision Tracker */}
           <div className="absolute top-20 -translate-x-1/2 whitespace-nowrap bg-black/60 border border-white/10 px-4 py-1.5 rounded-lg backdrop-blur-md">
              <span className="text-[8px] font-mono text-gold-500 font-black uppercase tracking-widest">Datum: {sliderPos.toFixed(1)}%</span>
           </div>
        </div>

        {/* Background Mesh Overlay */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="mt-16 container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 relative z-30">
         <div className="flex items-center gap-10">
            <div className="flex items-center gap-4 group">
               <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all shadow-2xl">
                  <Scan size={24} />
               </div>
               <div>
                  <div className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-1">X-Ray Comparative</div>
                  <p className="text-slate-500 text-[9px] uppercase tracking-widest leading-relaxed">Structural vs. Experiential <br/>Inventory Contrast.</p>
               </div>
            </div>
            <div className="h-10 w-px bg-white/10 hidden md:block"></div>
            <div className="flex items-center gap-4 group">
               <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all shadow-2xl">
                  <ShieldCheck size={24} />
               </div>
               <div>
                  <div className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-1">BIM Verified</div>
                  <p className="text-slate-500 text-[9px] uppercase tracking-widest leading-relaxed">92% Floor Plate <br/>Utilization Core.</p>
               </div>
            </div>
         </div>

         <div className="flex items-center gap-12">
            <div className="text-right">
               <div className="text-gold-500 font-serif text-4xl italic font-black">₹350 Cr</div>
               <div className="text-slate-500 text-[8px] font-black uppercase tracking-widest">Fixed Asset Basis</div>
            </div>
            <div className="h-12 w-px bg-gold-500/20"></div>
            <div className="text-right">
               <div className="text-white font-serif text-4xl italic font-black">24.2%</div>
               <div className="text-slate-500 text-[8px] font-black uppercase tracking-widest">Projected Alpha</div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default DualPerspective;