import React from 'react';
import { Building2, Ruler, Box, Construction, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AssetPage: React.FC = () => {
  const images = [
    { src: "https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg", label: "Front Elevation" },
    { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80", label: "Structural Glass Detail" },
    { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80", label: "Sky Bridge Perspective" },
    { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80", label: "Site Context" }
  ];

  return (
    <div className="bg-onyx-950 min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-6 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-widest mb-8 hover:text-white transition-colors">
            <ArrowLeft size={12} /> Return to Summary
        </Link>
        <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Deep Dive: Section 01</span>
        <h1 className="text-white font-serif text-5xl md:text-7xl mb-6">The Asset <span className="text-gold-500 italic">Dossier.</span></h1>
        <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            A comprehensive technical breakdown of the SIRSHUKK Grand Towers infrastructure, confirming its status as a generational landmark asset.
        </p>
      </div>

      {/* Main Visual Grid */}
      <div className="w-full h-[60vh] grid grid-cols-2 md:grid-cols-4 gap-1 px-1 mb-24">
         {images.map((img, i) => (
             <div key={i} className="relative group overflow-hidden">
                 <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 brightness-75 group-hover:brightness-100" />
                 <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 text-white text-[9px] font-black uppercase tracking-widest border border-white/10">
                    {img.label}
                 </div>
             </div>
         ))}
      </div>

      <div className="container mx-auto px-6 pb-24">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Column 1: Technical Specs */}
            <div className="lg:col-span-1 space-y-12">
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                    <h3 className="text-white font-serif text-2xl mb-6 flex items-center gap-3">
                        <Ruler className="text-gold-500" size={20} /> Dimensions
                    </h3>
                    <div className="space-y-4">
                        {[
                            { l: "Height", v: "75 Meters" },
                            { l: "Floors", v: "2B + G + 20" },
                            { l: "Plot Area", v: "1.29 Acres" },
                            { l: "Built-up Area", v: "350,000 Sq. Ft." }
                        ].map((item, i) => (
                            <div key={i} className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-slate-500 text-xs uppercase tracking-widest">{item.l}</span>
                                <span className="text-white font-mono text-sm">{item.v}</span>
                            </div>
                        ))}
                    </div>
                </div>

                 <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                    <h3 className="text-white font-serif text-2xl mb-6 flex items-center gap-3">
                        <Box className="text-gold-500" size={20} /> Zoning
                    </h3>
                    <div className="space-y-4">
                        {[
                            { l: "Classification", v: "Commercial / Hotel" },
                            { l: "FAR Achieved", v: "3.25 (Maximized)" },
                            { l: "Parking", v: "250+ ECS (Multi-level)" },
                            { l: "Structure", v: "RCC Core + Steel" }
                        ].map((item, i) => (
                            <div key={i} className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-slate-500 text-xs uppercase tracking-widest">{item.l}</span>
                                <span className="text-white font-mono text-sm">{item.v}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Column 2 & 3: Narrative & Value Drivers */}
            <div className="lg:col-span-2 space-y-12">
                <div>
                    <h3 className="text-gold-500 text-xs font-black uppercase tracking-widest mb-4">Structural Value Proposition</h3>
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                        The twin-tower design is not merely aesthetic; it is an efficiency engine. By splitting the inventory into two vertical cores, we achieve distinct zoning for "Quiet Residential" (Tower A) and "Event Residential" (Tower B). This prevents the noise overlap common in large-format wedding hotels.
                    </p>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        The connecting "Sky Arch" at Level 15 acts as a horizontal bracing element, significantly reducing structural sway while creating premium real estate for the exclusive Club Lounge—monetizing the air rights between towers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {[
                         { title: "Facade Efficiency", desc: "Double Glazed Unit (DGU) high-performance glass reduces thermal load by 40%, cutting HVAC OpEx significantly." },
                         { title: "Vertical Logistics", desc: "4 dedicated service elevators ensure that back-of-house operations remain 100% invisible to guests." },
                         { title: "Seismic Safety", desc: "Designed to Zone-3 seismic compliance standards with a foundation depth exceeding 20 meters." },
                         { title: "Landmark Premium", desc: "As the tallest structure in Guruvayur, the building commands a visibility premium, reducing marketing costs." }
                     ].map((item, i) => (
                         <div key={i} className="p-6 bg-onyx-900 border border-white/10 rounded-xl hover:border-gold-500/50 transition-colors">
                             <Construction className="text-slate-600 mb-4" size={24} />
                             <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                             <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                         </div>
                     ))}
                </div>

                <div className="bg-emerald-500/5 border border-emerald-500/20 p-8 rounded-2xl flex items-start gap-4">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" />
                    <div>
                        <h4 className="text-white font-bold text-lg">Debt-Free Land Asset</h4>
                        <p className="text-slate-400 text-sm mt-2">
                            The 1.29-acre freehold land parcel is fully paid for and unencumbered. This provides a massive equity safety net for incoming investors, as the project is not burdened by land acquisition interest servicing.
                        </p>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AssetPage;