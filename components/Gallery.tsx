import React from 'react';
import { Camera, ArrowRight } from 'lucide-react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80",
    cat: "Interiors",
    title: "Grand Lobby Atrium"
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80",
    cat: "F&B",
    title: "Revolving Rooftop Bar"
  },
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80",
    cat: "Accommodation",
    title: "Presidential Suite"
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    cat: "Events",
    title: "Pillar-less Ballroom"
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80",
    cat: "Wellness",
    title: "Signature Spa"
  },
  {
    src: "https://images.unsplash.com/photo-1571167431263-6d60156d108d?auto=format&fit=crop&q=80",
    cat: "Exterior",
    title: "Podium Entrance"
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-black relative">
       {/* Decorative Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-white/20"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-slate-500 tracking-[0.3em] uppercase text-xs font-bold flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-slate-700"></span> 
                Visual Walkthrough
                <span className="w-8 h-px bg-slate-700"></span>
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white">The Experience</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5 border border-white/5 p-1">
            {images.map((img, idx) => (
                <div key={idx} className="relative group overflow-hidden aspect-[4/3] cursor-pointer">
                    <img 
                        src={img.src} 
                        alt={img.title}
                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110 opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-8 h-0.5 bg-gold-500 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
                        <span className="text-gold-400 text-[10px] uppercase tracking-[0.2em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-150">{img.cat}</span>
                        <h3 className="text-white font-serif text-2xl tracking-wide group-hover:text-white transition-colors">{img.title}</h3>
                    </div>

                    {/* Border Frame effect */}
                    <div className="absolute inset-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-95 group-hover:scale-100 pointer-events-none"></div>
                </div>
            ))}
        </div>
        
        <div className="mt-16 text-center">
             <button className="group px-8 py-4 bg-transparent border border-white/20 text-slate-300 hover:border-gold-500 hover:text-white transition-all duration-300 uppercase text-xs font-bold tracking-[0.2em] relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">View Full Gallery <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-gold-500/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
             </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;