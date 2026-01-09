
import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, ShieldCheck, Activity, Zap, Scale, Terminal, Target, PieChart, TrendingUp, Info, UserCheck, 
  FileCheck, Lock, Globe, FileBadge, IndianRupee, Layers, Briefcase, Workflow, Rocket, Landmark, ClipboardCheck,
  ChevronRight, CheckCircle2, Scan, Cpu, Server, BookOpen, PenTool, Box
} from 'lucide-react';

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
  { id: 'v-executive', label: 'Project Vision', icon: PenTool },
  { id: 'v-financials', label: 'Contextual Study', icon: Globe },
  { id: 'v-operations', label: 'Lifestyle Design', icon: Activity },
  { id: 'v-technical', label: 'BIM Technical', icon: Terminal },
  { id: 'v-legal', label: 'Compliance', icon: ShieldCheck },
  { id: 'v-governance', label: 'Curation Team', icon: UserCheck },
  { id: 'v-exit', label: 'Horizon 2027', icon: Rocket },
];

const VaultSection = ({ children, id, title }: { children?: React.ReactNode; id: string, title?: string }) => (
  <section id={id} className="snap-start min-h-screen w-full flex flex-col items-center relative overflow-hidden bg-[#05070A] border-b border-white/5 py-32">
     <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C5A059 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
     <div className="container mx-auto px-10 relative z-10 w-full">
        {title && (
          <div className="mb-20 flex items-center gap-6 border-l-4 border-brass-400 pl-10">
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
    <div className="h-full w-full bg-[#05070A] text-white font-sans flex flex-col overflow-hidden relative">
      
      <div className="h-16 bg-[#05070A] border-b border-white/5 flex items-center justify-between px-12 z-[140] backdrop-blur-3xl shrink-0">
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-3 text-brass-400 font-black text-[10px] uppercase tracking-[0.4em]">
              <BookOpen size={12} className="text-emerald-500" /> Monograph_Record_Active
           </div>
           <div className="h-4 w-px bg-white/10"></div>
           <div className="flex items-center gap-3 text-white/40 font-black text-[9px] uppercase tracking-widest">
              <Scan size={12} /> Sync_Status: Optimized
           </div>
        </div>
        <div className="flex items-center gap-12 text-[9px] font-black uppercase tracking-widest text-slate-500">
           <span className="flex items-center gap-2 text-emerald-500"><Activity size={10} className="animate-pulse" /> Material_Audit</span>
           <span className="flex items-center gap-2 text-brass-400"><Box size={10} /> Series: SGT_Landmark</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        <aside className="w-24 bg-[#05070A] border-r border-white/5 flex flex-col items-center py-10 gap-8 z-[150] shrink-0 hidden lg:flex">
           {ARCHIVE_LINKS.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollTo(link.id)}
                className={`group relative flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-500 border ${
                  activeSection === link.id 
                  ? 'bg-brass-400 border-brass-400 text-onyx-950 shadow-brass-glow scale-110' 
                  : 'bg-white/5 text-slate-600 border-white/5 hover:border-brass-400/50 hover:text-white'
                }`}
              >
                 <link.icon size={20} />
                 <div className="absolute left-20 px-4 py-2 bg-slate-900 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 pointer-events-none shadow-2xl z-50">
                    {link.label}
                 </div>
              </button>
           ))}
        </aside>

        <div ref={containerRef} className="flex-1 overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar relative">
          <VaultSection id="v-hero">
            <div className="text-center space-y-12 max-w-6xl mx-auto py-24 px-6 relative">
              <div className="inline-flex items-center gap-4 px-10 py-4 bg-white/5 border border-white/10 rounded-full text-brass-200 text-[11px] font-black uppercase tracking-[0.5em] mb-12 shadow-premium backdrop-blur-md animate-fade-in relative z-10">
                 <PenTool size={18} className="animate-pulse" /> Project Record Monograph
              </div>
              <h1 className="text-7xl md:text-[11rem] font-serif leading-[0.75] tracking-tighter mb-12 italic font-black relative z-10">
                Architectural <br/><span className="gold-gradient-text font-black">Archives.</span>
              </h1>
              <p className="text-2xl md:text-5xl font-light text-slate-300 leading-tight max-w-4xl mx-auto italic opacity-90 relative z-10 border-l-4 border-brass-400/30 pl-12 text-left">
                "Technical blueprints, material philosophies, and the official completion roadmap for Guruvayur's definitive landmark."
              </p>
              <div className="pt-20 relative z-10"><ChevronDown className="text-brass-400 mx-auto animate-bounce shadow-brass-glow" size={64} /></div>
            </div>
          </VaultSection>

          <VaultSection id="v-executive" title="01 // Project Vision Dossier"><FinancialExecutiveSummary /></VaultSection>
          <VaultSection id="v-financials" title="02 // Contextual Market Report"><TenYearForecast /></VaultSection>
          <VaultSection id="v-operations" title="03 // Materiality & Guest Flow"><OperationalExcellence /></VaultSection>
          <VaultSection id="v-technical" title="04 // Structural BIM Ledger"><InvestmentFramework /></VaultSection>
          <VaultSection id="v-legal" title="05 // Compliance & Regulatory Record"><RiskSafeguards /></VaultSection>
          <VaultSection id="v-governance" title="06 // The Project Curation Team"><Team /></VaultSection>
          <VaultSection id="v-exit" title="07 // Horizon: 2027 Coronation"><ExitStrategy /></VaultSection>
        </div>
      </div>
    </div>
  );
};
