
import React from 'react';
import { 
  CheckCircle2, Loader2, Landmark, 
  ShieldCheck, FileText, Star, 
  Rocket, Calendar, ArrowRight
} from 'lucide-react';

const ComplianceTimeline: React.FC = () => {
  const complianceItems = [
    { label: "Land Title & Conversion", sub: "Verified by Senior Counsel", status: "Verified" },
    { label: "Environmental Clearance (EC)", sub: "Ministry/PCB Approved", status: "Verified" },
    { label: "RERA Registration", sub: "ID: SGT-KER-2026-X", status: "Verified" },
    { label: "Star Classification", sub: "Luxury Category Application", status: "In-Progress" },
  ];

  const milestones = [
    { phase: "Phase I", milestone: "Structural Topping Out", date: "Q3 2026", desc: "Core twin-tower structure completion." },
    { phase: "Phase II", milestone: "Interior Fit-out & MEP", date: "Q1 2027", desc: "Installation of 7-star fit-outs and AI systems." },
    { phase: "Phase III", milestone: "Soft Launch (Trial Run)", date: "Q3 2027", desc: "Initial room inventory and F&B trials." },
    { phase: "Phase IV", milestone: "Grand Opening", date: "Q4 2027", desc: "Official commercial launch and event start." },
  ];

  return (
    <section id="compliance" className="py-32 bg-onyx-950 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
          
          {/* Trust Checklist */}
          <div className="space-y-12">
            <div>
              <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.6em] block mb-8">Transparency & Trust</span>
              <h2 className="text-white font-serif text-5xl md:text-7xl tracking-tighter italic">Regulatory <br/><span className="gold-gradient-text">Milestones.</span></h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed mt-10">
                A risk-mitigated asset is built on transparency. Every regulatory milestone is documented and available in the virtual data room.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {complianceItems.map((item, i) => (
                 <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col justify-between hover:border-gold-500/50 transition-all group">
                    <div className="flex justify-between items-start mb-6">
                       <div className="p-3 bg-onyx-950 rounded-xl border border-white/5 text-gold-500">
                          <FileText size={20} />
                       </div>
                       {item.status === 'Verified' ? (
                          <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
                             <CheckCircle2 size={10} /> Verified
                          </div>
                       ) : (
                          <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full animate-pulse">
                             <Loader2 size={10} className="animate-spin" /> In-Progress
                          </div>
                       )}
                    </div>
                    <div>
                       <h4 className="text-white font-bold text-lg mb-1">{item.label}</h4>
                       <p className="text-slate-500 text-xs">{item.sub}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Interactive Timeline */}
          <div className="bg-onyx-900 border border-white/10 rounded-[3rem] p-12 md:p-16 shadow-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-20"></div>
            <h3 className="text-white font-serif text-3xl mb-12 flex items-center gap-4">
              <Calendar className="text-gold-500" size={24} /> Road to Q4 2027
            </h3>

            <div className="space-y-12 relative">
               <div className="absolute left-[20px] top-4 bottom-4 w-px bg-white/5"></div>
               {milestones.map((step, i) => (
                 <div key={i} className="flex gap-8 group">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border relative z-10 transition-all duration-700 ${
                       i === milestones.length - 1 ? 'bg-gold-500 border-gold-500 text-onyx-950 shadow-[0_0_20px_#D4AF37]' : 'bg-onyx-950 border-white/10 text-slate-500 group-hover:border-gold-500/50 group-hover:text-gold-500'
                    }`}>
                       {i === milestones.length - 1 ? <Rocket size={18} /> : <CheckCircle2 size={18} />}
                    </div>
                    <div className="flex-1 pb-10 border-b border-white/5 last:border-0">
                       <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-bold text-xl group-hover:text-gold-400 transition-colors">{step.milestone}</h4>
                          <span className="text-gold-500 text-[9px] font-black uppercase tracking-widest">{step.date}</span>
                       </div>
                       <div className="text-slate-600 text-[8px] uppercase tracking-widest font-black mb-3">{step.phase}</div>
                       <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Closing Investor Kit Strip */}
        <div className="bg-gold-500 p-12 md:p-24 rounded-[4rem] text-onyx-950 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-24 opacity-10">
            <Star size={300} />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
             <span className="text-[10px] font-black uppercase tracking-[0.6em] mb-8 block opacity-60">Strategic Conclusion</span>
             <h3 className="text-4xl md:text-7xl font-serif tracking-tighter leading-[0.9] mb-12">The Definitive Asset <br/>of South India.</h3>
             <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-onyx-950 text-white px-16 py-6 rounded-full text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:bg-white hover:text-onyx-950 flex items-center justify-center gap-4 shadow-2xl">
                   Download Full Prospectus <ArrowRight size={18} />
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceTimeline;
