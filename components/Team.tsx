
import React from 'react';
import { Linkedin, Mail, ExternalLink, ShieldCheck, Award, Briefcase, Landmark, UserCheck, ArrowRight } from 'lucide-react';

const Team: React.FC = () => {
  const leadership = [
    {
      role: "Strategic Promoter",
      name: "Adv. K. Haridas",
      bio: "Visionary lead with over 30 years in infrastructure and high-value legal advisory. Architect of the project's debt-free land strategy and institutional compliance framework.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      pedigree: "Ex-Board Member, Multiple Financial Institutions",
      tag: "Project Visionary"
    },
    {
      role: "Financial Strategist",
      name: "Sanjay Menon, CFA",
      bio: "Specialist in REIT-readiness and hospitality capital stacks. Former Director at a Top-4 global consulting firm. Leading SGT's stabilization and exit modeling.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
      pedigree: "Master's in Financial Engineering, ISB",
      tag: "Capital Structuring"
    },
    {
      role: "Design Lead",
      name: "Ar. Elena Rodriguez",
      bio: "Award-winning hospitality architect specializing in high-rise vertical symmetry and luxury guest flow optimization. Lead on SGT's dual-revolving crown concept.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      pedigree: "Lead Architect for 3 Global 5-Star Landmarks",
      tag: "Architectural Lead"
    }
  ];

  return (
    <section id="team" className="py-40 bg-onyx-950 relative overflow-hidden border-b border-white/5">
      {/* Decorative Branding */}
      <div className="absolute -top-[10%] -right-[5%] text-white/[0.02] font-serif text-[40rem] font-black leading-none pointer-events-none select-none italic">SGT</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-gold-500/30 rounded-full bg-gold-500/5 mb-8">
              <ShieldCheck size={14} className="text-gold-500" />
              <span className="text-gold-400 uppercase text-[10px] font-black tracking-[0.4em]">Section 11: Human Capital & Governance</span>
            </div>
            <h2 className="text-white font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter italic">Governance <br/><span className="gold-gradient-text italic font-black">Pedigree.</span></h2>
            <p className="text-slate-400 text-2xl font-light leading-relaxed mt-10 max-w-2xl border-l border-gold-500/30 pl-10">
              Institutional assets are governed by the strength of their leadership. Our core team blends structural expertise with global hospitality financial standards.
            </p>
          </div>
          
          <div className="hidden lg:flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-full backdrop-blur-md">
             <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest italic">Compliance Level</span>
             <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>)}
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {leadership.map((member, i) => (
            <div key={i} className="group relative">
               {/* High-fidelity profile card */}
               <div className="relative aspect-[3/4.2] overflow-hidden rounded-[3.5rem] border border-white/10 mb-10 shadow-3xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105 brightness-[0.7] group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-transparent to-transparent opacity-90"></div>
                  
                  {/* Top Tag */}
                  <div className="absolute top-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                     <div className="bg-gold-500 text-onyx-950 px-5 py-2 rounded-full text-[8px] font-black uppercase tracking-widest shadow-2xl">
                        {member.tag}
                     </div>
                  </div>

                  {/* Social Overlays */}
                  <div className="absolute bottom-10 left-10 flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 opacity-0 group-hover:opacity-100">
                    <a href="#" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:text-onyx-950 transition-all shadow-2xl">
                       <Linkedin size={18} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-onyx-950 transition-all shadow-2xl">
                       <Mail size={18} />
                    </a>
                  </div>
               </div>
               
               <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-2">{member.role}</span>
                    <h3 className="text-white font-serif text-4xl italic group-hover:text-gold-400 transition-colors leading-none">{member.name}</h3>
                  </div>
                  <p className="text-slate-400 text-base leading-relaxed font-light">{member.bio}</p>
                  <div className="pt-8 border-t border-white/10 flex items-center gap-6">
                     <div className="w-10 h-10 rounded-xl bg-onyx-900 flex items-center justify-center text-gold-500 border border-white/5">
                        <Award size={20} />
                     </div>
                     <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black max-w-[200px] leading-relaxed italic">{member.pedigree}</span>
                  </div>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-16 bg-white/[0.02] border border-white/5 rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="flex items-center gap-10">
              <div className="w-20 h-20 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 shadow-2xl bg-onyx-900">
                 <UserCheck size={32} />
              </div>
              <div>
                 <h4 className="text-white font-serif text-3xl italic">Advisory Council</h4>
                 <p className="text-slate-500 text-sm font-light leading-relaxed">Backed by a board of 12 regional industry leaders and infrastructure specialists.</p>
              </div>
           </div>
           {/* Fix: Added missing ArrowRight icon to the lucide-react import and used it here */}
           <button className="px-12 py-7 bg-gold-500 hover:bg-white text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.5em] transition-all shadow-3xl flex items-center gap-6 group">
              View Advisory Board <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
           </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
