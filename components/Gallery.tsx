import React from 'react';
import { Camera, ArrowRight, Expand, Layout, Building2, HardHat } from 'lucide-react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80",
    cat: "Facade",
    title: "Structural Glass Geometry"
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80",
    cat: "F&B",
    title: "Crown Revolving Lounge"
  },
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80",
    cat: "Suites",
    title: "The Sanctuary Residency"
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    cat: "Events",
    title: "Grand Ballroom Volume"
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80",
    cat: "Wellness",
    title: "Vedic Spa Sanctuary"
  },
  {
    src: "https://images.unsplash.com/photo-1571167431263-6d60156d108d?auto=format&fit=crop&q=80",
    cat: "Arch",
    title: "Connecting Sky Bridge"
  },
  {
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80",
    cat: "Entrance",
    title: "Gateway Portal"
  },
  {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    cat: "Retail",
    title: "Curated Boutiques"
  },
  {
    src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80",
    cat: "Vibe",
    title: "Dusk Illumination"
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-32 bg-onyx-950 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <span className="text-gold-500 tracking-[0.6em] uppercase text-[10px] font-black block mb-6">Visual Dossier</span>
              <h2 className="font-serif text-5xl md:text-7xl text-white italic">Project <br/><span className="gold-gradient-text italic">Manifesto.</span></h2>
            </div>
            <div className="hidden lg:flex gap-4">
               <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-slate-500 text-[9px] font-black uppercase tracking-widest flex items-center gap-3">
                  <Building2 size={14} /> 4K Renders
               </div>
               <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-slate-500 text-[9px] font-black uppercase tracking-widest flex items-center gap-3">
                  <HardHat size={14} /> Site Progress
               </div>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
                <div key={idx} className="relative group overflow-hidden aspect-[4/3] cursor-pointer rounded-[2.5rem] border border-white/5 shadow-3xl bg-onyx-900">
                    <img 
                        src={img.src} 
                        alt={img.title}
                        className="w-full h-full object-cover transition-transform duration-[2s] ease-in-out group-hover:scale-110 brightness-[0.7] group-hover:brightness-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/40 to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-500"></div>
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                        <span className="text-gold-500 text-[9px] uppercase tracking-[0.4em] mb-3 opacity-0 group-hover:opacity-100 transition-opacity font-black">{img.cat}</span>
                        <h3 className="text-white font-serif text-3xl tracking-wide group-hover:text-gold-400 transition-colors leading-tight">{img.title}</h3>
                        <div className="mt-6 flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                           Enlarge Asset <Expand size={14} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-20 text-center">
             <button className="group px-16 py-7 bg-white/5 border border-white/10 text-slate-300 hover:border-gold-500 hover:text-white transition-all duration-500 uppercase text-[10px] font-black tracking-[0.5em] relative overflow-hidden rounded-full shadow-2xl">
                <span className="relative z-10 flex items-center justify-center gap-4">Access Full Asset Gallery <Layout size={18} className="text-gold-500" /></span>
             </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;