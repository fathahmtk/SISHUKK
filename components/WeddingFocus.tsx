import React from 'react';
import { Download, CalendarCheck } from 'lucide-react';

const WeddingFocus: React.FC = () => {
  return (
    <section id="weddings" className="relative py-32 bg-luxury-charcoal overflow-hidden">
      {/* Background with Parallax Feel */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[url('https://assets.cntraveller.in/photos/68cd597150f73df6a2d4f664/3%3A2/w_2664%2Ch_1776%2Cc_limit/DWG%20Hotel%20Round%20up-Samode%20Palace%20copy.jpg')] bg-cover bg-center fixed-bg opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
                <span className="text-gold-500 tracking-[0.3em] uppercase text-xs font-bold mb-4 block">Celebrations</span>
                <h2 className="font-serif text-5xl md:text-6xl text-white mb-8 leading-tight">
                    Where Kerala Meets <br/><span className="italic text-gold-400">Curated Luxury.</span>
                </h2>
                <p className="text-xl text-slate-300 mb-10 font-light leading-relaxed">
                    Host your dream wedding at Shirshukk Grand Towers. From the grand pillar-less ballroom to the intimate sky-decks, every venue is a canvas for your legacy.
                </p>
                
                <ul className="space-y-4 mb-10">
                    {['Grand Ballroom (Capacity: 1500)', 'Bridal & Groom Royal Suites', 'Custom Culinary Experiences', 'Dedicated Wedding Concierge'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-400">
                            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2 transition-all">
                        <CalendarCheck size={18} /> Plan Your Wedding
                    </button>
                    <button className="border border-white/20 hover:border-white text-white px-8 py-4 uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2 transition-all">
                        <Download size={18} /> Download Brochure
                    </button>
                </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                 <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" className="w-full h-64 object-cover rounded-sm translate-y-8" alt="Wedding Detail" />
                 <img src="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80" className="w-full h-64 object-cover rounded-sm" alt="Floral Setup" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingFocus;