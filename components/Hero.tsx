import React, { useEffect, useRef } from 'react';
import { ChevronDown, Calendar, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          if (bgRef.current) {
            const yPos = scrollY * 0.5;
            const scale = 1 + (scrollY * 0.0002);
            bgRef.current.style.transform = `translate3d(0, ${yPos}px, 0) scale(${scale})`;
          }

          if (textRef.current) {
            const opacity = Math.max(0, 1 - scrollY / 400);
            textRef.current.style.opacity = opacity.toString();
            textRef.current.style.transform = `translate3d(0, ${scrollY * 0.2}px, 0)`;
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 h-[120%] -top-[10%] w-full pointer-events-none">
        <div 
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{ 
            backgroundImage: 'url("https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </div>
      </div>

      {/* Main Content */}
      <div ref={textRef} className="relative z-10 flex-grow flex flex-col justify-center items-center text-center px-4 will-change-[transform,opacity] pb-24">
        <h2 className="text-gold-400 tracking-[0.3em] uppercase text-sm md:text-base mb-6 animate-fade-in-up font-medium">Kerala's Iconic Luxury Destination</h2>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight leading-none animate-fade-in-up mb-8" style={{ animationDelay: '0.2s' }}>
          Shirshukk<br/><span className="italic font-light">Grand Towers</span>
        </h1>
        
        <p className="max-w-xl text-lg text-white/90 font-light mb-10 animate-fade-in-up leading-relaxed drop-shadow-md" style={{ animationDelay: '0.4s' }}>
          Experience timeless elegance where destination weddings meet curated luxury in the heart of Guruvayur.
        </p>
      </div>

      {/* Booking Widget */}
      <div className="relative z-20 w-full bg-luxury-black/90 border-t border-white/10 backdrop-blur-md animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <div className="container mx-auto px-6 py-6 lg:py-8">
           <form className="flex flex-col lg:flex-row gap-4 items-center justify-center">
              
              <div className="flex flex-col w-full lg:w-auto">
                 <label className="text-xs text-gold-400 uppercase tracking-widest mb-2 font-bold flex items-center gap-2">
                    <Calendar size={12} /> Check In
                 </label>
                 <input type="date" className="bg-transparent border-b border-white/30 text-white pb-2 focus:outline-none focus:border-gold-500 font-serif text-lg w-full lg:w-40 placeholder-white" />
              </div>

              <div className="flex flex-col w-full lg:w-auto">
                 <label className="text-xs text-gold-400 uppercase tracking-widest mb-2 font-bold flex items-center gap-2">
                    <Calendar size={12} /> Check Out
                 </label>
                 <input type="date" className="bg-transparent border-b border-white/30 text-white pb-2 focus:outline-none focus:border-gold-500 font-serif text-lg w-full lg:w-40" />
              </div>

              <div className="flex flex-col w-full lg:w-auto">
                 <label className="text-xs text-gold-400 uppercase tracking-widest mb-2 font-bold flex items-center gap-2">
                    <Users size={12} /> Guests
                 </label>
                 <select className="bg-transparent border-b border-white/30 text-white pb-2 focus:outline-none focus:border-gold-500 font-serif text-lg w-full lg:w-32">
                    <option className="bg-black">1 Adult</option>
                    <option className="bg-black" selected>2 Adults</option>
                    <option className="bg-black">Family</option>
                 </select>
              </div>

              <div className="w-full lg:w-auto lg:ml-8 mt-4 lg:mt-0">
                 <button type="button" className="w-full bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all shadow-lg hover:shadow-gold-500/20">
                    Check Availability
                 </button>
              </div>

           </form>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden lg:block">
        <ChevronDown size={24} />
      </div>
    </div>
  );
};

export default Hero;