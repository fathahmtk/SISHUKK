import React from 'react';

const Offers: React.FC = () => {
  return (
    <section id="offers" className="py-24 bg-luxury-black border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="font-serif text-4xl text-white">Exclusive Offers</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 border border-white/10 flex flex-col md:flex-row gap-6 items-center">
                <div className="bg-gold-500/20 text-gold-400 p-4 rounded-full">
                    <span className="font-serif text-2xl">20%</span>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-white font-serif text-2xl mb-2">Early Bird Special</h3>
                    <p className="text-slate-400 text-sm mb-4">Book 30 days in advance and enjoy exclusive savings on suites.</p>
                    <button className="text-gold-400 text-xs uppercase tracking-widest font-bold hover:text-white transition-colors">Check Rates</button>
                </div>
            </div>

            <div className="bg-white/5 p-8 border border-white/10 flex flex-col md:flex-row gap-6 items-center">
                <div className="bg-gold-500/20 text-gold-400 p-4 rounded-full">
                    <span className="font-serif text-2xl">❤</span>
                </div>
                 <div className="text-center md:text-left">
                    <h3 className="text-white font-serif text-2xl mb-2">Honeymoon Bliss</h3>
                    <p className="text-slate-400 text-sm mb-4">Includes romantic dinner, spa credits, and airport transfers.</p>
                    <button className="text-gold-400 text-xs uppercase tracking-widest font-bold hover:text-white transition-colors">View Package</button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;