
import React from 'react';
import { Linkedin, Mail, ExternalLink, ShieldCheck, Award, Briefcase } from 'lucide-react';

const Team: React.FC = () => {
  const leadership = [
    {
      role: "Strategic Promoter",
      name: "Adv. K. Haridas",
      bio: "Visionary lead with over 30 years in infrastructure and high-value legal advisory. Architect of the project's debt-free land strategy.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      pedigree: "Ex-Board Member, Multiple Financial Institutions"
    },
    {
      role: "Financial Strategist",
      name: "Sanjay Menon, CFA",
      bio: "Specialist in REIT-readiness and hospitality capital stacks. Former Director at a Top-4 global consulting firm.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
      pedigree: "Master's in Financial Engineering, ISB"
    },
    {
      role: "Design Lead",
      name: "Ar. Elena Rodriguez",
      bio: "Award-winning hospitality architect specializing in high-rise vertical symmetry and luxury guest flow optimization.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      pedigree: "Lead Architect for 3 Global 5-Star Landmarks"
    }
  ];

  return (
    <section id="team" className="py-32 bg-onyx-950 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.6em] block mb-8">The Human Capital</span>
          <h2 className="text-white font-serif text-5xl md:text-7xl tracking-tighter italic">The Governance <br/><span className="gold-gradient-text">Leadership.</span></h2>
          <p className="text-slate-500 text-lg font-light leading-relaxed mt-10 max-w-2xl">
            Institutional assets are governed by pedigree. Our leadership combines structural expertise with global hospitality financial standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {leadership.map((member, i) => (
            <div key={i} className="group relative">
               <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] border border-white/10 mb-8 shadow-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                     <div className="flex gap-4">
                        <a href="#" className="p-3 bg-white/10 hover:bg-gold-500 hover:text-onyx-950 rounded-full transition-all backdrop-blur-md">
                           <Linkedin size={16} />
                        </a>
                        <a href="#" className="p-3 bg-white/10 hover:bg-white hover:text-onyx-950 rounded-full transition-all backdrop-blur-md">
                           <Mail size={16} />
                        </a>
                     </div>
                  </div>
               </div>
               
               <div className="space-y-4">
                  <div>
                    <span className="text-gold-500 text-[9px] font-black uppercase tracking-widest block mb-2">{member.role}</span>
                    <h3 className="text-white font-serif text-3xl group-hover:text-gold-400 transition-colors">{member.name}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                  <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                     <Award size={16} className="text-gold-500 opacity-50" />
                     <span className="text-[9px] text-slate-400 uppercase tracking-widest font-black italic">{member.pedigree}</span>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
