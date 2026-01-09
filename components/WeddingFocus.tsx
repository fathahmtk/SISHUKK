import React, { useEffect, useRef } from 'react';
import { Heart, Star, Music, Camera, Layers, ArrowRight, Gem, ShieldCheck, Target } from 'lucide-react';

interface WeddingFocusProps {
  onRSVPClick?: () => void;
}

const WeddingFocus: React.FC<WeddingFocusProps> = ({ onRSVPClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let requestRef: number;
    const handleScroll = () => {
      if (containerRef.current && bgRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const speed = 0.05;
          const scrollCenter = rect.top + rect.height / 2;
          const viewportCenter = viewportHeight / 2;
          const distanceFromCenter = scrollCenter - viewportCenter;
          const yPos = -distanceFromCenter * speed;
          bgRef.current.style.transform = `translate3d(0, ${yPos}px, 0) scale(1.05)`;
        }
      }
      requestRef = requestAnimationFrame(handleScroll);
    };
    requestRef = requestAnimationFrame(handleScroll);
    return () => cancelAnimationFrame(requestRef);
  }, []);

  return (
    <section 
      id="weddings" 
      ref={containerRef}
      className="relative py-64 bg-white overflow-hidden border-b border-slate-100"
    >
      <div className="absolute top-[10%] right-[-5%] text-slate-50 font-serif text-[45rem] font-black italic opacity-60 pointer-events-none select-none">W</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            
            <div className="lg:col-span-6 space-y-16">
                <div className="space-y-10">
                   <div className="inline-flex items-center gap-4 px-6 py-2 border border-gold-200 rounded-full bg-gold-50/50 shadow-sm">
                      <Heart size={14} className="text-gold-500 fill-gold-500/20" />
                      <span className="text-gold-600 uppercase text-[10px] font-black tracking-[0.6em]">Chapter 05: Ritual Event Core</span>
                   </div>
                   
                   <h2 className="font-serif text-6xl md:text-9xl text-slate-950 mb-12 leading-[0.8] tracking-tighter italic">
                       Monumental <br/><span className="gold-gradient-text italic font-black">Volumes.</span>
                   </h2>
                   
                   <p className="text-2xl text-slate-500 font-light leading-relaxed max-w-xl border-l-2 border-gold-400 pl-12">
                       Our 15,000 sq ft pillar-less ballroom is the structural engine of the asset. Engineered for South India's high-yield ritual market with 3,000+ pax peak capacity.
                   </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   {[
                     { label: "Imperial Ballroom", sub: "Pillar-less Facility", icon: Star },
                     { label: "Volume Dynamics", sub: "8-meter Heights", icon: Layers },
                     { label: "Sonic Integrity", sub: "Digital Acoustics", icon: Music },
                     { label: "Vista Logic", sub: "Iconic Frame-points", icon: Camera },
                   ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-6 p-12 rounded-[4rem] bg-[#FDFBF7] border border-slate-200 hover:border-gold-400 hover:bg-white transition-all duration-700 group shadow-sm hover:shadow-2xl">
                         <div className="w-16 h-16 bg-white rounded-3xl text-gold-600 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-all duration-700 shadow-sm border border-slate-100">
                            <item.icon size={28} />
                         </div>
                         <div>
                            <h4 className="text-slate-950 font-serif text-3xl mb-2 group-hover:text-gold-600 transition-colors italic leading-none">{item.label}</h4>
                            <p className="text-[9px] text-slate-400 uppercase tracking-widest font-black">{item.sub}</p>
                         </div>
                      </div>
                   ))}
                </div>

                <div className="pt-10">
                   <button 
                     onClick={onRSVPClick}
                     className="group flex items-center gap-10 bg-slate-950 text-white px-16 py-8 rounded-full text-[11px] font-black uppercase tracking-[0.6em] transition-all hover:bg-gold-500 shadow-3xl active:scale-95"
                   >
                      Request Event Dossier <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
                   </button>
                </div>
            </div>

            <div className="lg:col-span-6 relative mt-20 lg:mt-0">
                 <div className="grid grid-cols-2 gap-12">
                     <div className="space-y-12 translate-y-24">
                        <div className="rounded-[4rem] overflow-hidden border border-slate-100 shadow-3xl aspect-[3/4] group relative bg-white">
                           <img src="https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110 brightness-[1.05]" alt="Wedding Detail" />
                        </div>
                        <div className="p-16 bg-white border border-slate-200 rounded-[4rem] text-center shadow-2xl group hover:border-gold-400 transition-all duration-700">
                           <h3 className="text-gold-600 font-serif text-8xl mb-4 group-hover:scale-110 transition-transform font-black italic leading-none">15k</h3>
                           <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">Sq. Ft. Ballroom Core</p>
                        </div>
                     </div>
                     <div className="space-y-12">
                        <div className="p-16 bg-slate-950 rounded-[4rem] text-center shadow-3xl group hover:bg-gold-500 transition-all duration-700 relative overflow-hidden">
                           <div className="absolute top-0 right-0 p-8 opacity-5">
                             <Target size={150} className="text-white" />
                           </div>
                           <h3 className="text-white font-serif text-8xl mb-4 group-hover:scale-110 transition-transform font-black italic leading-none relative z-10">3k</h3>
                           <p className="text-slate-400 group-hover:text-onyx-950 text-[10px] font-black uppercase tracking-[0.5em] relative z-10 transition-colors">Max Global Capacity</p>
                        </div>
                        <div className="rounded-[4rem] overflow-hidden border border-slate-100 shadow-3xl aspect-[3/5] group relative bg-white">
                           <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110 brightness-[1.05]" alt="Ceremony Focus" />
                        </div>
                     </div>
                 </div>
                 
                 {/* Annotation Detail */}
                 <div className="mt-24 p-10 bg-[#FDFBF7] border border-slate-200 rounded-[3rem] shadow-sm flex items-center gap-8">
                    <div className="w-16 h-16 rounded-full bg-white border border-slate-100 flex items-center justify-center text-gold-600 shadow-sm">
                       <Gem size={24} />
                    </div>
                    <div>
                       <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Operational Moat</div>
                       <p className="text-slate-950 font-serif text-xl italic">Regional Monopoly on mega-scale events.</p>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default WeddingFocus;