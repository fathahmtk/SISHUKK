import React, { useEffect, useRef } from 'react';
import { ChevronDown, Calendar, Users, Star } from 'lucide-react';

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
            // Enhanced parallax: slower scroll (0.35) creates a sense of massive scale and weight
            // Increased scale (0.001) adds a cinematic "push-in" effect as the user explores
            const yPos = scrollY * 0.35;
            const scale = 1 + (scrollY * 0.001);
            bgRef.current.style.transform = `translate3d(0, ${yPos}px, 0) scale(${scale})`;
          }

          if (textRef.current) {
            // Text floats upwards slightly faster (0.2) than background to create layer separation
            // Fade out is slower (600) to keep branding visible longer
            const opacity = Math.max(0, 1 - scrollY / 600);
            textRef.current.style.opacity = opacity.toString();
            textRef.current.style.transform = `translate3d(0, ${scrollY * 0.2}px, 0)`;
            // Blur increases with scroll to simulate depth of field rack focus
            textRef.current.style.filter = `blur(${scrollY * 0.015}px)`;
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
      <div className="absolute inset-0 h-[125%] -top-[12.5%] w-full pointer-events-none">
        <div 
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{ 
            backgroundImage: 'url("https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg")',
          }}
        >
          {/* Layered gradients for "Dark Luxury" atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
        </div>
      </div>

      {/* Main Content */}
      <div ref={textRef} className="relative z-10 flex-grow flex flex-col justify-center items-center text-center px-4 will-change-[transform,opacity,filter] pb-24">
        
        <div className="flex items-center gap-2 mb-6 animate-fade-in-up bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
           <div className="flex gap-0.5">
             <Star size={10} className="text-gold-400 fill-gold-400" />
             <Star size={10} className="text-gold-400 fill-gold-400" />
             <Star size={10} className="text-gold-400 fill-gold-400" />
             <Star size={10} className="text-gold-400 fill-gold-400" />
             <Star size={10} className="text-gold-400 fill-gold-400" />
           </div>
           <span className="text-[9px] uppercase tracking-[0.2em] text-white ml-2 font-bold border-l border-white/20 pl-3">Luxury Hotel & Residences</span>
        </div>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white font-medium tracking-tight leading-none animate-fade-in-up mb-8 drop-shadow-2xl" style={{ animationDelay: '0.2s' }}>
          Shirshukk<br/>
          <span className="italic font-light text-slate-200">Grand Towers</span>
        </h1>
        
        <p className="max-w-xl text-lg md:text-xl text-slate-200 font-light mb-10 animate-fade-in-up leading-relaxed drop-shadow-md mix-blend-screen" style={{ animationDelay: '0.4s' }}>
          Where timeless Kerala heritage meets the pinnacle of modern luxury. Experience the skyline of Guruvayur.
        </p>

        <button className="group relative overflow-hidden bg-transparent border border-white/30 text-white hover:border-gold-500 hover:text-gold-400 px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-500 animate-fade-in-up backdrop-blur-sm" style={{ animationDelay: '0.5s' }}>
           <span className="relative z-10">Explore The Property</span>
           <div className="absolute inset-0 bg-white/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
        </button>
      </div>

      {/* Glass Booking Widget */}
      <div className="relative z-20 w-full mx-auto max-w-6xl px-6 -translate-y-12 hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl hover:shadow-[0_0_40px_rgba(197,160,40,0.1)] transition-shadow duration-500">
           <form className="flex items-end justify-between gap-6">
              
              <div className="flex-1 border-b border-white/20 pb-2 hover:border-gold-500/50 transition-colors">
                 <label className="text-[9px] text-gold-400 uppercase tracking-widest font-bold block mb-2">Check In</label>
                 <div className="flex items-center gap-3 text-white">
                    <Calendar size={16} className="text-slate-400" />
                    <input type="date" className="bg-transparent focus:outline-none w-full font-serif text-lg placeholder-white/50 text-slate-200" />
                 </div>
              </div>

              <div className="flex-1 border-b border-white/20 pb-2 hover:border-gold-500/50 transition-colors">
                 <label className="text-[9px] text-gold-400 uppercase tracking-widest font-bold block mb-2">Check Out</label>
                 <div className="flex items-center gap-3 text-white">
                    <Calendar size={16} className="text-slate-400" />
                    <input type="date" className="bg-transparent focus:outline-none w-full font-serif text-lg text-slate-200" />
                 </div>
              </div>

              <div className="flex-1 border-b border-white/20 pb-2 hover:border-gold-500/50 transition-colors">
                 <label className="text-[9px] text-gold-400 uppercase tracking-widest font-bold block mb-2">Guests</label>
                 <div className="flex items-center gap-3 text-white">
                    <Users size={16} className="text-slate-400" />
                    <select className="bg-transparent focus:outline-none w-full font-serif text-lg appearance-none text-slate-200 cursor-pointer">
                        <option className="bg-black text-white">2 Adults</option>
                        <option className="bg-black text-white">1 Adult</option>
                        <option className="bg-black text-white">Family</option>
                    </select>
                 </div>
              </div>

              <div className="w-auto">
                 <button type="button" className="bg-gold-500 hover:bg-white hover:text-black text-white px-10 py-4 uppercase tracking-widest text-xs font-bold transition-all shadow-lg rounded hover:shadow-gold-500/20">
                    Check Availability
                 </button>
              </div>

           </form>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce lg:hidden">
        <ChevronDown size={24} />
      </div>
    </div>
  );
};

export default Hero;