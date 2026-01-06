import React from 'react';

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
    <section id="gallery" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-white mb-2">Visual Walkthrough</h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, idx) => (
                <div key={idx} className="relative group overflow-hidden aspect-[4/3] cursor-pointer">
                    <img 
                        src={img.src} 
                        alt={img.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-gold-400 text-xs uppercase tracking-widest mb-1">{img.cat}</span>
                        <h3 className="text-white font-serif text-xl">{img.title}</h3>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-12 text-center">
             <button className="px-8 py-3 border border-white/20 text-slate-300 hover:border-gold-500 hover:text-gold-400 transition-colors uppercase text-sm tracking-widest">
                Download High-Res Render Pack
             </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;