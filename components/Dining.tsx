import React from 'react';

const Dining: React.FC = () => {
  return (
    <section id="dining" className="bg-luxury-dark text-white">
      {/* Hero Dining */}
      <div className="relative h-[600px] w-full">
         <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/40"></div>
         </div>
         <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <span className="text-gold-400 tracking-[0.3em] uppercase text-sm font-bold mb-4">Signature Experience</span>
            <h2 className="font-serif text-5xl md:text-7xl mb-6">The Sky Revolving</h2>
            <p className="max-w-2xl text-lg font-light text-slate-200 mb-8">
                Kerala's first dual-tower revolving restaurants. Experience 360-degree panoramic views of the temple city while indulging in world-class gastronomy.
            </p>
            <div className="flex gap-4">
                <button className="bg-white text-black px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-gold-400 hover:text-white transition-colors">
                    Book A Table
                </button>
                <button className="border border-white text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:border-gold-400 hover:text-gold-400 transition-colors">
                    View Menu
                </button>
            </div>
         </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 py-24">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
                <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" alt="Lounge" className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div>
                    <h3 className="font-serif text-3xl mb-2">The Sky Bridge Lounge</h3>
                    <p className="text-slate-400 font-light leading-relaxed">
                        Suspended between the two towers, this exclusive lounge offers artisanal cocktails and high tea in a gravity-defying setting.
                    </p>
                </div>
            </div>
            <div className="space-y-6 md:pt-24">
                <img src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&q=80" alt="Fine Dining" className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div>
                    <h3 className="font-serif text-3xl mb-2">Saffron & Spice</h3>
                    <p className="text-slate-400 font-light leading-relaxed">
                        An all-day dining sanctuary celebrating the rich culinary heritage of the Spice Route with a contemporary twist.
                    </p>
                </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Dining;