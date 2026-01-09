import React from 'react';
import { Expand, Layout, Building2, HardHat, Image as ImageIcon, ArrowRight } from 'lucide-react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80",
    cat: "Elevational Geometry",
    title: "Structural Glass Glazing",
    span: "col-span-2 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80",
    cat: "Gastronomy",
    title: "Revolving Crown Interior",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80",
    cat: "Private Sanctuary",
    title: "Executive Suite Master",
    span: "col-span-1 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    cat: "Ritual Events",
    title: "Imperial Ballroom Volume",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80",
    cat: "Vedic Wellness",
    title: "The Spa Sanctuary",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1571167431263-6d60156d108d?auto=format&fit=crop&q=80",
    cat: "Structural Hub",
    title: "The Meridian Skybridge",
    span: "col-span-2 row-span-1"
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-64 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-end mb-32">
          <div className="lg:col-span-7">
            <span className="text-gold-600 tracking-[0.8em] uppercase text-[10px] font-black block mb-10">Visual Evidence: Asset Portfolio</span>
            <h2 className="font-serif text-6xl md:text-9xl text-slate-950 italic leading-[0.75] tracking-tighter">Project <br/><span className="gold-gradient-text not-italic font-black">Manifesto.</span></h2>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-8 lg:border-l border-slate-100 lg:pl-16 pb-4">
             <p className="text-slate-500 text-xl font-light leading-relaxed">
               A high-fidelity audit of the physical asset. Each frame represents a strategic yield center or a structural USP.
             </p>
             <div className="flex gap-4">
                <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-full text-slate-500 text-[8px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white transition-all cursor-pointer">
                  <Building2 size={12} className="text-gold-600" /> 8K Master Renders
                </div>
                <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-full text-slate-500 text-[8px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white transition-all cursor-pointer">
                  <HardHat size={12} className="text-gold-600" /> Site Logs
                </div>
             </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 gap-8 h-auto lg:h-[1200px]">
            {images.map((img, idx) => (
                <div key={idx} className={`relative group overflow-hidden cursor-pointer rounded-[4rem] border border-slate-100 shadow-xl bg-slate-50 transition-all duration-1000 ${img.span}`}>
                    <img 
                        src={img.src} 
                        alt={img.title}
                        className="w-full h-full object-cover transition-transform duration-[3s] ease-in-out group-hover:scale-110 brightness-[1.05] contrast-[1.02]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-20 transition-opacity duration-700"></div>
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-12 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                        <span className="text-gold-600 text-[9px] uppercase tracking-[0.4em] mb-4 opacity-0 group-hover:opacity-100 transition-opacity font-black">{img.cat}</span>
                        <h3 className="text-slate-900 font-serif text-3xl tracking-tight group-hover:text-gold-600 transition-colors leading-tight italic">{img.title}</h3>
                    </div>

                    <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                       <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center text-slate-900 shadow-3xl">
                          <Expand size={20} />
                       </div>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-32 flex flex-col items-center">
             <button className="group relative flex items-center gap-10 bg-slate-950 text-white px-20 py-8 rounded-full text-[11px] font-black uppercase tracking-[0.6em] transition-all hover:bg-gold-500 shadow-3xl active:scale-95">
                Authorize Full Visual Vault <Layout size={20} className="text-gold-400 group-hover:text-white transition-colors" />
             </button>
             <p className="mt-8 text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">Confidential Media Log v2.5</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;