import React, { useState } from 'react';
import { Expand, Layout, Building2, HardHat, Image as ImageIcon } from 'lucide-react';

const images = [
  { src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80", cat: "Architecture", title: "Glass Glazing", span: "col-span-1 md:col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80", cat: "F&B", title: "Orbit Interior", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80", cat: "Luxury", title: "Exec Suite", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80", cat: "Events", title: "Ballroom Volume", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80", cat: "Wellness", title: "Spa Sanctuary", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1571167431263-6d60156d108d?auto=format&fit=crop&q=80", cat: "Skylink", title: "Meridian Bridge", span: "col-span-1 md:col-span-2 row-span-1" }
];

const GalleryItem: React.FC<{ img: typeof images[0] }> = ({ img }) => {
  return (
    <div className={`relative group overflow-hidden cursor-pointer rounded-[2.5rem] border border-slate-100 shadow-lg bg-slate-50 transition-all duration-700 ${img.span}`}>
      <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90 group-hover:opacity-20 transition-opacity"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
          <span className="text-gold-600 text-[7px] uppercase tracking-[0.4em] mb-2 font-black">{img.cat}</span>
          <h3 className="text-slate-900 font-serif text-xl italic leading-tight">{img.title}</h3>
      </div>
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
         <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-slate-900">
            <Expand size={14} />
         </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-12 bg-white relative h-full flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-600 tracking-[0.6em] uppercase text-[9px] font-black block mb-4">Asset Visual Portfolio</span>
            <h2 className="font-serif text-4xl md:text-7xl text-slate-950 italic leading-[0.8] tracking-tighter">Project <br/><span className="gold-gradient-text not-italic font-black">Manifesto.</span></h2>
          </div>
          <div className="flex gap-4 mb-4">
              <div className="px-5 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-500 text-[7px] font-black uppercase tracking-widest flex items-center gap-2">
                <Building2 size={10} className="text-gold-600" /> 8K Master Renders
              </div>
              <div className="px-5 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-500 text-[7px] font-black uppercase tracking-widest flex items-center gap-2">
                <HardHat size={10} className="text-gold-600" /> Site Logs
              </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[60vh]">
            {images.map((img, idx) => (
                <GalleryItem key={idx} img={img} />
            ))}
        </div>
        
        <div className="mt-12 text-center">
             <button className="group relative inline-flex items-center gap-6 bg-slate-950 text-white px-12 py-5 rounded-full text-[9px] font-black uppercase tracking-[0.4em] hover:bg-gold-500 transition-all shadow-xl active:scale-95">
                Full Visual Vault <Layout size={16} className="text-gold-400 group-hover:text-white" />
             </button>
             <p className="mt-6 text-[7px] font-black uppercase tracking-[0.3em] text-slate-300 italic">Confidential Media Log v2.5</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;