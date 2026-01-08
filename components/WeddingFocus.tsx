
import React, { useEffect, useRef } from 'react';
import { Download, Layout, Heart, Star, Music, Camera, Crown, Layers, MoveDown, Maximize } from 'lucide-react';

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
          const speed = 0.12;
          const scrollCenter = rect.top + rect.height / 2;
          const viewportCenter = viewportHeight / 2;
          const distanceFromCenter = scrollCenter - viewportCenter;
          const yPos = -distanceFromCenter * speed;
          bgRef.current.style.transform = `translate3d(0, ${yPos}px, 0) scale(1.15)`;
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
      className="relative py-32 md:py-48 bg-onyx-950 overflow-hidden border-b border-white/5"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div 
          ref={bgRef}
          className="absolute inset-0 w-full h-[140%] -top-[20%] will-change-transform"
          style={{ transition: 'transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80" 
            alt="Grand Wedding Ballroom"
            className="w-full h-full object-cover brightness-[0.35] saturate-[0.8]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-onyx-950 via-onyx-950/85 to-transparent z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-transparent to-onyx-950 z-[2]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
            
            <div className="lg:w-1/2 animate-fade-in-up">
                <div className="inline-flex items-center gap-3 px-6 py-2.5 border border-gold-500/40 rounded-full bg-gold-500/5 backdrop-blur-2xl mb-12">
                   <Heart size={14} className="text-gold-500 fill-gold-500/20" />
                   <span className="text-gold-400 uppercase text-[10px] font-black tracking-[0.6em]">Event Masterplan</span>
                </div>
                
                <h2 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white mb-10 leading-[0.8] tracking-tighter">
                    Monumental <br/><span className="text-transparent bg-clip-text bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 italic font-light">Volumes.</span>
                </h2>
                
                <p className="text-xl md:text-2xl text-slate-200 mb-14 font-light leading-relaxed max-w-xl">
                    Our 15,000 sq ft pillar-less ballroom facility is engineered for the "Big Fat Indian Wedding" market. From seismic-isolated foundations to concert-grade acoustics.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-16">
                   {[
                     { label: "Imperial Ballroom", sub: "Pillar-less Facility", icon: Star },
                     { label: "Volume Dynamics", sub: "8-meter Heights", icon: Layers },
                     { label: "Sonic Clarity", sub: "Digital Acoustics", icon: Music },
                     { label: "Vista Frames", sub: "Iconic Photography", icon: Camera },
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-6 p-6 md:p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:bg-gold-500/10 hover:border-gold-500/40 transition-all duration-500 group cursor-default backdrop-blur-sm">
                         <div className="p-4 bg-onyx-950 rounded-2xl text-gold-500 group-hover:bg-gold-500 group-hover:text-onyx-950 transition-all duration-700 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/5">
                            <item.icon size={24} />
                         </div>
                         <div>
                            <h4 className="text-white font-serif text-2xl mb-1 group-hover:text-gold-400 transition-colors">{item.label}</h4>
                            <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black group-hover:text-slate-400 transition-colors">{item.sub}</p>
                         </div>
                      </div>
                   ))}
                </div>
            </div>

            <div className="lg:w-1/2 relative mt-20 lg:mt-0">
                 <div className="grid grid-cols-2 gap-6 md:gap-10">
                     <div className="space-y-6 md:space-y-10 translate-y-12">
                        <div className="rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl aspect-[3/4] group relative">
                           <img src="https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" alt="Wedding Decor" />
                        </div>
                        <div className="p-12 bg-onyx-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] text-center shadow-2xl group hover:border-gold-500/50 transition-all duration-700">
                           <h3 className="text-gold-400 font-serif text-6xl mb-4 group-hover:scale-110 transition-transform">15k</h3>
                           <p className="text-white text-[9px] font-black uppercase tracking-[0.6em] opacity-40 group-hover:opacity-100">Sq. Ft. Ballroom</p>
                        </div>
                     </div>
                     <div className="space-y-6 md:space-y-10">
                        <div className="p-12 bg-onyx-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] text-center shadow-2xl group hover:border-gold-500/50 transition-all duration-700">
                           <h3 className="text-gold-400 font-serif text-6xl mb-4 group-hover:scale-110 transition-transform">2k+</h3>
                           <p className="text-white text-[9px] font-black uppercase tracking-[0.6em] opacity-40 group-hover:opacity-100">Event Capacity</p>
                        </div>
                        <div className="rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl aspect-[3/5] group relative">
                           <img src="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" alt="Wedding Ceremony" />
                        </div>
                     </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default WeddingFocus;
