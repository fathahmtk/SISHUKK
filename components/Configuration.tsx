import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Configuration: React.FC = () => {
  const specs = [
    { label: "Towers", value: "2 (Iconic Symmetry)" },
    { label: "Floors", value: "~20 per tower" },
    { label: "Keys", value: "~200 (Capped)" },
    { label: "Rooftop", value: "2x Revolving Restaurants" },
    { label: "Sky Bridge", value: "Experiential + Monetised" },
    { label: "Helipad", value: "Feasible (Subject to DGCA)" },
  ];

  return (
    <section id="config" className="py-24 bg-black text-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/2 space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl text-white">Project Configuration <span className="text-gold-500 text-2xl block mt-2 font-sans tracking-wide font-normal">(Locked)</span></h2>
          <p className="text-slate-400 text-lg">
            A vertical landmark visible from a distance. The design intent focuses on iconic vertical symmetry and high-value experiential spaces.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {specs.map((spec, index) => (
              <div key={index} className="flex items-start space-x-4 border-b border-white/10 pb-4">
                <CheckCircle2 className="text-gold-500 shrink-0 mt-1" size={20} />
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{spec.label}</div>
                  <div className="text-lg font-serif text-slate-200">{spec.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 relative h-[600px] w-full group overflow-hidden rounded-sm">
           <img 
            src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" 
            alt="Sirshukk Twin Towers Structure" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black to-transparent w-full">
            <p className="text-gold-400 font-serif italic text-lg">"Iconic Vertical Symmetry"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Configuration;