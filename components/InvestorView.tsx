
import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, ShieldCheck, Activity, Zap, Scale, Terminal, Target, PieChart, TrendingUp, Info, UserCheck, 
  FileCheck, Lock, Globe, FileBadge, IndianRupee, Layers, Briefcase, Workflow, Rocket, Landmark, ClipboardCheck,
  ChevronRight, CheckCircle2, Scan, Cpu, Server, BookOpen, PenTool,
  // Fix: Added missing Box icon from lucide-react
  Box
} from 'lucide-react';

// Fix: Added missing Logo component import
import Logo from './Logo.tsx';
import FinancialExecutiveSummary from './FinancialExecutiveSummary.tsx';
import MarketDynamics from './MarketDynamics.tsx';
import InvestmentFramework from './InvestmentFramework.tsx';
import WaterfallChart from './WaterfallChart.tsx';
import ValuationEngine from './ValuationEngine.tsx';
import TenYearForecast from './TenYearForecast.tsx';
import ExitStrategy from './ExitStrategy.tsx';
import RiskSafeguards from './RiskSafeguards.tsx';
import OperationalExcellence from './OperationalExcellence.tsx';
import Team from './Team.tsx';

const ARCHIVE_LINKS = [
  { id: 'v-executive', label: 'Design Thesis', icon: PenTool },
  { id: 'v-financials', label: 'Market Study', icon: Globe },
  { id: 'v-operations', label: 'Lifestyle Core', icon: Activity },
  { id: 'v-technical', label: 'BIM Technical', icon: Terminal },
  { id: 'v-legal', label: 'Compliance', icon: ShieldCheck },
  { id: 'v-governance', label: 'Architects', icon: UserCheck },
  { id: 'v-exit', label: 'Completion', icon: Rocket },
];

const VaultSection = ({ children, id, title }: { children?: React.ReactNode; id: string, title?: string }) => (
  <section id={id} className="snap-start min-h-screen w-full flex flex-col items-center relative overflow-hidden bg-slate-950 border-b border-white/5 py-32">
     <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
     <div className="container mx-auto px-10 relative z-10 w-full">
        {title && (
          <div className="mb-20 flex items-center gap-6 border-l-4 border-gold-500 pl-10">
             <h2 className="text-white font-serif text-4xl italic font-black uppercase tracking-tighter leading-none">{title}</h2>
             <div className="flex-1 h-px bg-white/10"></div>
          </div>
        )}
        <div className="w-full">
           {children}
        </div>
     </div>
  </section>
);

export const InvestorView: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('v-hero');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    const handleScroll = () => {
      setScrollProgress((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
      const sections = ARCHIVE_LINKS.map(l => document.getElementById(l.id));
      const current = sections.find(s => s && s.getBoundingClientRect().top >= -200 && s.getBoundingClientRect().top <= 400);
      if (current) setActiveSection(current.id);
    };
    
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-full w-full bg-slate-950 text-white font-sans flex flex-col overflow-hidden relative">
      
      <div className="absolute inset-0 pointer-events-none z-[100] border-[40px] border-slate-950 opacity-10"></div>
      
      <div className="h-16 bg-slate-950 border-b border-white/10 flex items-center justify-between px-12 z-[140] backdrop-blur-3xl shrink-0">
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-3 text-gold-500 font-black text-[10px] uppercase tracking-[0.4em]">
              <BookOpen size={12} className="text-emerald-500" /> Monograph_Access_Active
           </div>
           <div className="h-4 w-px bg-white/10"></div>
           <div className="flex items-center gap-3 text-white/40 font-black text-[9px] uppercase tracking-widest">
              <Scan size={12} /> Blueprint_Sync: 100%
           </div>
        </div>
        <div className="flex items-center gap-12 text-[9px] font-black uppercase tracking-widest text-slate-500">
           <span className="flex items-center gap-2 text-emerald-500"><Activity size={10} className="animate-pulse" /> Material_Audit</span>
           {/* Fix: Box icon added from missing imports */}
           <span className="flex items-center gap-2 text-gold-500"><Box size={10} /> Sector: Grand_Towers</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        
        <aside className="w-24 bg-slate-950 border-r border-white/5 flex flex-col items-center py-10 gap-8 z-[150] shrink-0 hidden lg:flex">
           {ARCHIVE_LINKS.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollTo(link.id)}
                className={`group relative flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-500 border ${
                  activeSection === link.id 
                  ? 'bg-gold-500 border-gold-500 text-onyx-950 shadow-gold-glow scale-110' 
                  : 'bg-white/5 text-slate-600 border-white/5 hover:border-gold-500/50 hover:text-white'
                }`}
              >
                 <link.icon size={20} />
                 <div className="absolute left-20 px-4 py-2 bg-slate-900 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 pointer-events-none shadow-2xl z-50">
                    {link.label}
                 </div>
              </button>
           ))}
        </aside>

        <div ref={containerRef} className="flex-1 overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar relative bg-slate-950">
          
          <VaultSection id="v-hero">
            <div className="text-center space-y-12 max-w-6xl mx-auto py-24 px-6 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
                 {/* Fix: Logo component used here was missing its import */}
                 <Logo className="w-96 h-96" />
              </div>
              <div className="inline-flex items-center gap-4 px-10 py-4 bg-white/5 border border-white/10 rounded-full text-gold-500 text-[11px] font-black uppercase tracking-[0.5em] mb-12 shadow-gold-glow backdrop-blur-md animate-fade-in relative z-10">
                 <PenTool size={18} className="animate-pulse" /> Design Monograph Archives
              </div>
              <h1 className="text-7xl md:text-[11rem] font-serif leading-[0.75] tracking-tighter mb-12 italic font-black relative z-10">
                Architectural <br/><span className="gold-gradient-text font-black">Monograph.</span>
              </h1>
              <p className="text-2xl md:text-5xl font-light text-slate-300 leading-tight max-w-4xl mx-auto italic opacity-90 relative z-10 border-l-4 border-gold-500/30 pl-12">
                "Blueprints, material logic, and lifestyle vision—the complete project pack for Sirshukk Grand Towers."
              </p>
              <div className="pt-20 relative z-10"><ChevronDown className="text-gold-500 mx-auto animate-bounce shadow-gold-glow" size={64} /></div>
            </div>
          </VaultSection>

          <VaultSection id="v-executive" title="01 // Design Monograph"><FinancialExecutiveSummary /></VaultSection>
          <VaultSection id="v-financials" title="02 // Market Thesis"><TenYearForecast /></VaultSection>
          <VaultSection id="v-operations" title="03 // Materiality & Flow"><OperationalExcellence /></VaultSection>
          <VaultSection id="v-technical" title="04 // BIM Blueprint Ledger"><InvestmentFramework /></VaultSection>
          <VaultSection id="v-legal" title="05 // Regulatory Monograph"><RiskSafeguards /></VaultSection>
          <VaultSection id="v-governance" title="06 // Design & Curation Team"><Team /></VaultSection>
          <VaultSection id="v-exit" title="07 // Project Completion Window"><ExitStrategy /></VaultSection>

          <section className="py-40 bg-slate-950 text-center relative overflow-hidden border-t border-white/5 snap-start min-h-[60vh] flex flex-col justify-center">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)]"></div>
             <div className="max-w-4xl mx-auto relative z-10 space-y-12">
                <div className="w-24 h-24 rounded-3xl bg-gold-500 mx-auto flex items-center justify-center text-onyx-950 shadow-gold-glow mb-12 animate-glint">
                   {/* Fix: Logo component used here was missing its import */}
                   <Logo className="w-12 h-12" variant="slate" />
                </div>
                <h2 className="text-white font-serif text-5xl md:text-8xl italic font-black leading-[0.85] tracking-tighter">Monograph <br/><span className="gold-gradient-text not-italic">Complete.</span></h2>
                <p className="text-slate-400 text-2xl font-light italic leading-relaxed px-10">"The SGT Project Monograph serves as the definitive record of architectural and lifestyle intent."</p>
                <button className="px-16 py-8 bg-gold-500 text-onyx-950 rounded-full text-[11px] font-black uppercase tracking-[0.5em] shadow-3xl hover:bg-white transition-all active:scale-95">
                   Request Full Project Pack
                </button>
             </div>
          </section>
        </div>
      </div>
      
      <div className="h-[2px] bg-white/5 w-full relative">
         <div 
           className="h-full bg-gold-500 shadow-gold-glow transition-all duration-300" 
           style={{ width: `${scrollProgress}%` }} 
         />
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};
