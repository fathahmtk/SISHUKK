import React from 'react';
import { ArrowRight } from 'lucide-react';

const Experiences: React.FC = () => {
  const items = [
    { title: "Guruvayur Temple Darshan", desc: "Private guided visits and priority access arrangements.", img: "https://images.unsplash.com/photo-1623696238775-68748d55734e?auto=format&fit=crop&q=80" },
    { title: "Backwater Sunset Cruise", desc: "Luxury yacht trips through the serene Kerala backwaters.", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80" },
    { title: "Ayurvedic Rejuvenation", desc: "Signature therapies at our award-winning wellness sanctuary.", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80" },
  ];

  return (
    <section id="experiences" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <span className="text-gold-600 tracking-[0.2em] uppercase text-xs font-bold">Discover</span>
                <h2 className="font-serif text-4xl mt-2 text-luxury-black">Curated Experiences</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors">
                View All Activities <ArrowRight size={16} />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                    <div className="overflow-hidden mb-6 h-80">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <h3 className="font-serif text-2xl mb-2 group-hover:text-gold-600 transition-colors">{item.title}</h3>
                    <p className="text-slate-600 font-light text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;