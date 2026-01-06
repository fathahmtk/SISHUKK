import React, { useEffect, useRef } from 'react';
import { ArrowRight, Disc, Wine, Utensils } from 'lucide-react';

const Dining: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const speed = 0.4;
        const offset = (scrolled - (heroRef.current.offsetTop || 0)) * speed;
        // Only apply if near section
        if (Math.abs(offset) < 500) {
            heroRef.current.style.backgroundPosition = `center ${offset}px`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="dining" className="bg-black text-white relative overflow-hidden">
      
      {/* Hero Dining */}
      <div className="relative h-screen min-h-[700px] w-full group overflow-hidden flex items-center justify-center">
         <div 
            ref={heroRef}
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] scale-110"
            style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80')",
                willChange: 'background-position'
            }}
         ></div>
         <div className="absolute inset-0 bg-black/40"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
         
         {/* Rotating Badge */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-3 h-3 bg-gold-500 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5 w-3 h-3 bg-gold-500 rounded-full"></div>
         </div>

         <div className="relative z-20 text-center px-6 max-w-5xl">
            <div className="inline-flex items-center gap-3 border border-gold-500/30 px-6 py-2 rounded-full bg-black/50 backdrop-blur-md mb-8 animate-fade-in-up">
                <Disc className="text-gold-500 animate-[spin_4s_linear_infinite]" size={16} />
                <span className="text-gold-400 tracking-[0.2em] uppercase text-[10px] font-bold">
                   Dual Revolving Restaurants
                </span>
            </div>
            
            <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8 text-white leading-none tracking-tight drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                The Sky <br/><span className="italic font-light text-slate-300">In Motion</span>
            </h2>
            
            <p className="text-xl font-light text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed mix-blend-screen animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Kerala's first twin-tower revolving dining experience. 360-degree panoramic views of the temple city, paired with world-class gastronomy.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <button className="bg-gold-500 text-black px-10 py-5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white transition-all shadow-[0_0_30px_rgba(197,160,40,0.4)] rounded-sm">
                    Book A Table
                </button>
            </div>
         </div>
      </div>

      {/* Venues Grid */}
      <div className="container mx-auto px-6 py-32 relative z-20 bg-luxury-black">
         <div className="text-center mb-24">
             <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold-500 to-transparent mx-auto mb-6"></div>
             <h3 className="font-serif text-3xl text-white">Culinary Destinations</h3>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Venue 1 */}
            <div className="group relative">
                <div className="relative overflow-hidden rounded-sm aspect-[4/5] md:aspect-[16/9] lg:aspect-[4/5] mb-8">
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                     <img 
                        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" 
                        alt="Lounge" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-out transform group-hover:scale-105" 
                     />
                     <div className="absolute top-6 right-6 z-20 bg-black/60 backdrop-blur px-4 py-2 border border-white/10">
                        <span className="text-gold-400 text-xs uppercase tracking-widest font-bold">Level 15</span>
                     </div>
                </div>
                <div className="relative pl-8 border-l border-white/10 group-hover:border-gold-500 transition-colors duration-500">
                    <div className="absolute -left-3 top-0 bg-black p-1 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2">
                        <Wine size={20} />
                    </div>
                    <h3 className="font-serif text-4xl mb-4 text-white">Sky Bridge Lounge</h3>
                    <p className="text-slate-400 font-light leading-relaxed text-sm mb-6 max-w-md">
                        Suspended between the two towers, offering artisanal cocktails and high tea in a gravity-defying setting.
                    </p>
                    <button className="flex items-center gap-3 text-xs uppercase tracking-widest text-white border-b border-transparent group-hover:border-gold-500 pb-1 transition-all">
                        Explore Lounge <ArrowRight size={14} className="text-gold-500" />
                    </button>
                </div>
            </div>
            
            {/* Venue 2 */}
            <div className="group relative lg:mt-32">
                <div className="relative overflow-hidden rounded-sm aspect-[4/5] md:aspect-[16/9] lg:aspect-[4/5] mb-8">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&q=80" 
                        alt="Fine Dining" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-out transform group-hover:scale-105" 
                    />
                     <div className="absolute top-6 right-6 z-20 bg-black/60 backdrop-blur px-4 py-2 border border-white/10">
                        <span className="text-gold-400 text-xs uppercase tracking-widest font-bold">Level 20</span>
                     </div>
                </div>
                <div className="relative pl-8 border-l border-white/10 group-hover:border-gold-500 transition-colors duration-500">
                     <div className="absolute -left-3 top-0 bg-black p-1 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2">
                        <Utensils size={20} />
                    </div>
                    <h3 className="font-serif text-4xl mb-4 text-white">Saffron & Spice</h3>
                    <p className="text-slate-400 font-light leading-relaxed text-sm mb-6 max-w-md">
                        An all-day dining sanctuary celebrating the rich culinary heritage of the Spice Route with a contemporary twist.
                    </p>
                    <button className="flex items-center gap-3 text-xs uppercase tracking-widest text-white border-b border-transparent group-hover:border-gold-500 pb-1 transition-all">
                        Explore Menu <ArrowRight size={14} className="text-gold-500" />
                    </button>
                </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Dining;