
import React from 'react';
import { 
  CheckCircle2, Loader2, Landmark, 
  ShieldCheck, FileText, Star, 
  Rocket, Calendar, ArrowRight, Gavel, Stamp
} from 'lucide-react';

const ComplianceTimeline: React.FC = () => {
  const complianceItems = [
    { label: "Title & Conversion", sub: "Senior Counsel Verified", status: "Verified" },
    { label: "Environmental (EC)", sub: "PCB Ministry Approved", status: "Verified" },
    { label: "RERA Registration", sub: "ID: SGT-KER-2026-X", status: "Verified" },
    { label: "Star Classification", sub: "Luxury Application Active", status: "In-Progress" },
  ];

  const milestones = [
    { phase: "Phase I", milestone: "Structural Topping Out", date: "Q3 2026", desc: "Core twin-tower structure completion and sky-bridge truss alignment." },
    { phase: "Phase II", milestone: "Interior Fit-out & MEP", date: "Q1 2027", desc: "Installation of signature 7-star fit-outs, Italian marble, and AI building systems." },
    { phase: "Phase III", milestone: "Operational Dry Run", date: "Q3 2027", desc: "Staff on-boarding and stress-testing of gastronomy and event logistics." },
    { phase: "Phase IV", milestone: "Grand Coronation", date: "Q4 2027", desc: "Official institutional commercial launch and monumental opening ritual." },
  ];

  return (
    <section id="compliance" className="py-40 bg-onyx-950 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start mb-40">
          
          {/* Trust Terminal */}
          <div className="space-y-16">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-gold-500/30 rounded-full bg-gold-500/5 mb-8">
                <Stamp size={14} className="text-gold-500" />
                <span className="text-gold-400 uppercase text-[10px] font-black tracking-[0.4em]">Audit: Regulatory Log</span>
              </div>
              <h2 className="text-white font-serif text-6xl md:text-8xl leading-[0.85] tracking-tighter italic">Verified <br/><span className="gold-gradient-text italic font-black">Roadmap.</span></h2>
              <p className="text-slate-400 text-2xl font-light leading-relaxed mt-10 border-l border-gold-500/30 pl-10">
                A risk-mitigated asset is built on transparency. SGT maintains a zero-lag regulatory tracker, with all technical annexures available for institutional audit.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {complianceItems.map((item, i) => (
                 <div key={i} className="p-10 bg-onyx-900 border border-white/10 rounded-[3rem] shadow-2xl flex flex-col justify-between hover:border-gold-500/30 transition-all duration-700 group">
                    <div className="flex justify-between items-start mb-10">
                       <div className="w-14 h-14 rounded-2xl bg-onyx-950 border border-white/5 flex items-center justify-center text-gold-500 group-hover:scale-110 transition-transform">
                          <FileText size={24} />
                       </div>
                       {item.status === 'Verified' ? (
                          <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
                             <CheckCircle2 size={12} /> VERIFIED
                          </div>
                       ) : (
                          <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-gold-500 bg-gold-500/10 px-4 py-2 rounded-full animate-pulse border border-gold-500/20">
                             <Loader2 size={12} className="animate-spin" /> ACTIVE
                          </div>
                       )}
                    </div>
                    <div>
                       <h4 className="text-white font-serif text-2xl italic mb-2 group-hover:text-gold-400 transition-colors">{item.label}</h4>
                       <p className="text-slate-500 text-xs leading-relaxed">{item.sub}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Master Timeline Display */}
          <div className="bg-onyx-900 border border-white/10 rounded-[4rem] p-12 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-24 opacity-5 group-hover:scale-110 transition-transform">
               <Calendar size={300} className="text-gold-500" />
            </div>
            
            <h3 className="text-white font-serif text-4xl mb-20 italic relative z-10">The Road to 2027</h3>

            <div className="space-y-16 relative z-10">
               <div className="absolute left-[20px] top-6 bottom-6 w-px bg-white/5"></div>
               {milestones.map((step, i) => (
                 <div key={i} className="flex gap-10 group/step">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 relative z-10 transition-all duration-1000 ${
                       i === milestones.length - 1 ? 'bg-gold-500 border-gold-500 text-onyx-950 shadow-[0_0_30px_#D4AF37]' : 'bg-onyx-950 border-white/20 text-slate-500 group-hover/step:border-gold-500/50 group-hover/step:text-gold-500'
                    }`}>
                       {i === milestones.length - 1 ? <Rocket size={20} /> : <CheckCircle2 size={20} />}
                    </div>
                    <div className="flex-1 pb-12 border-b border-white/5 last:border-0">
                       <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                          <h4 className="text-white font-serif text-3xl group-hover/step:text-gold-400 transition-colors">{step.milestone}</h4>
                          <span className="text-gold-500 text-[10px] font-mono font-black uppercase tracking-widest">{step.date}</span>
                       </div>
                       <div className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">{step.phase}</div>
                       <p className="text-slate-400 text-sm leading-relaxed font-light">{step.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Conclusion Hero Strip */}
        <div className="bg-gold-500 p-16 md:p-32 rounded-[5rem] text-onyx-950 text-center relative overflow-hidden shadow-[0_50px_100px_rgba(212,175,55,0.3)]">
          <div className="absolute top-0 right-0 p-40 opacity-10 rotate-12">
            <Star size={500} />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
             <span className="text-[11px] font-black uppercase tracking-[1em] mb-8 block opacity-60">Investment Conclusion</span>
             <h3 className="text-5xl md:text-8xl font-serif tracking-tighter leading-[0.8] font-black italic">The New <br/>Gold Standard.</h3>
             <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
                <button className="px-16 py-8 bg-onyx-950 text-white rounded-full text-[12px] font-black uppercase tracking-[0.5em] transition-all hover:bg-white hover:text-onyx-950 shadow-3xl flex items-center gap-6 group">
                   Download Master P.I.M <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
             </div>
             <p className="text-[10px] font-black uppercase tracking-widest opacity-60">SGT Hospitality Group | 2025 Institutional Release</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceTimeline;
