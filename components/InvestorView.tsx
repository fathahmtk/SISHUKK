import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, Lock, Download, 
  Rocket, Mail, Copy, Check, ShieldCheck, ArrowUpRight, ArrowRight
} from 'lucide-react';

import MarketDynamics from './MarketDynamics.tsx';
import CompetitorMatrix from './CompetitorMatrix.tsx';
import InvestmentFramework from './InvestmentFramework.tsx';
import WaterfallChart from './WaterfallChart.tsx';
import ValuationEngine from './ValuationEngine.tsx';
import InvestmentCalculator from './InvestmentCalculator.tsx';
import TenYearForecast from './TenYearForecast.tsx';
import ExitStrategy from './ExitStrategy.tsx';
import RiskSafeguards from './RiskSafeguards.tsx';
import OperationalExcellence from './OperationalExcellence.tsx';
import ExecutionTimeline from './ExecutionTimeline.tsx';
import ComplianceTimeline from './ComplianceTimeline.tsx';
import Team from './Team.tsx';

const PITCH_LETTER = `Subject: Strategic Investment: The 7-Star Gateway to Guruvayur (₹350 Cr)

Dear Investment Committee,

Following our market audit of the South Indian pilgrimage corridor, we are highlighting SIRSHUKK Grand Towers—a high-yield hospitality asset in Guruvayur, Kerala.

Market Thesis:
- Annual Footfall: 30M+ (Recession-proof spiritual economy).
- Supply Void: Zero comparable 7-star luxury assets within 10km.
- Moat: Iconic Twin-Tower design with the region's largest ballroom (15,000 sq ft).

Investment Metrics:
- Targeted IRR: 24.2%
- Equity Multiplier: 3.5x (7-Year Horizon)
- Status: Land Secured (Debt-Free), NOCs cleared, Construction Active.

Best regards,
Institutional Partner Portfolio`;

export const InvestorView: React.FC = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAuthorized || !containerRef.current) return;
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      setScrollProgress((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    const el = containerRef.current;
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [isAuthorized]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'SIRSHUKK2026') {
      setIsAuthorized(true);
      setError('');
    } else {
      setError('Invalid Access Credentials');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(PITCH_LETTER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isAuthorized) {
    return (
      <div className="h-full w-full bg-onyx-950 flex flex-col items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" className="w-full h-full object-cover blur-md" alt="" />
        </div>
        <div className="relative z-10 w-full max-w-md animate-fade-in-up">
           <div className="text-center mb-12">
              <div className="w-20 h-20 border border-gold-500/20 rotate-45 flex items-center justify-center mx-auto mb-10 shadow-2xl bg-onyx-900">
                <Lock size={32} className="text-gold-500 -rotate-45" />
              </div>
              <h2 className="text-white font-serif text-4xl mb-4">Institutional Safe</h2>
              <p className="text-slate-500 text-[10px] tracking-[0.5em] uppercase font-black">Authorized Access Required</p>
           </div>
           <form onSubmit={handleLogin} className="space-y-6">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Access Key"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white text-center tracking-[0.5em] focus:outline-none focus:border-gold-500 transition-all font-mono"
              />
              {error && <p className="text-rose-500 text-[10px] text-center uppercase tracking-widest font-black">{error}</p>}
              <button className="w-full bg-gold-500 text-onyx-950 py-5 rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] hover:bg-white transition-all shadow-3xl">
                Authenticate Access
              </button>
           </form>
           <p className="mt-8 text-center text-slate-700 text-[8px] uppercase tracking-widest font-black">Project Vault ID: SIRSHUKK2026</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-onyx-950 text-white font-sans flex flex-col overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-white/5 z-[150]">
        <div className="h-full bg-gold-500 transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
      </div>

      <div ref={containerRef} className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth custom-scrollbar">
        <section className="min-h-screen flex flex-col items-center justify-center relative p-12 lg:p-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img src="https://renderatelier.com/wp-content/uploads/2023/05/1-7-1-1-scaled.jpg" className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 text-center space-y-12 max-w-6xl animate-fade-in">
            <h1 className="text-7xl md:text-[11rem] font-serif leading-[0.75] tracking-tighter mb-12">
              The Digital <br/><span className="gold-gradient-text italic">Prospectus.</span>
            </h1>
            <p className="text-2xl md:text-5xl font-light text-slate-300 leading-tight max-w-4xl mx-auto italic">
              "Distilling ₹350 Crore of technical engineering and market delta into a cinematic narrative."
            </p>
            <ChevronDown className="text-gold-500 mx-auto animate-bounce mt-24" size={48} />
          </div>
        </section>

        {/* Market Context */}
        <MarketDynamics />
        <CompetitorMatrix />

        {/* Financial Structure */}
        <InvestmentFramework />
        <WaterfallChart />
        <ValuationEngine />

        {/* Interactive Tools */}
        <InvestmentCalculator />
        <TenYearForecast />
        <ExitStrategy />

        {/* Risk & Ops */}
        <RiskSafeguards />
        <OperationalExcellence />

        {/* Execution */}
        <ExecutionTimeline />
        <ComplianceTimeline />
        <Team />

        {/* Download Section */}
        <section className="py-48 bg-onyx-900 border-t border-white/5">
           <div className="container mx-auto px-6 max-w-6xl">
              <div className="bg-onyx-950 border border-white/10 rounded-[4rem] p-16 md:p-24 relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
                 <div className="flex justify-between items-center mb-16">
                    <div className="flex items-center gap-6">
                       <Mail size={24} className="text-gold-500" />
                       <span className="text-[12px] font-black uppercase tracking-[0.4em] text-white">Investment Teaser Template</span>
                    </div>
                    <button onClick={handleCopy} className={`flex items-center gap-4 px-10 py-4 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${copied ? 'bg-emerald-500 text-onyx-950' : 'bg-white/5 hover:bg-gold-500 hover:text-onyx-950 text-slate-300'}`}>
                       {copied ? <Check size={18} /> : <Copy size={18} />} {copied ? 'Copied' : 'Copy Teaser'}
                    </button>
                 </div>
                 <div className="p-12 bg-black/40 rounded-[2.5rem] border border-white/5 text-slate-400 font-mono text-xs leading-relaxed max-h-[500px] overflow-y-auto custom-scrollbar whitespace-pre-wrap italic">
                    {PITCH_LETTER}
                 </div>
              </div>
              <div className="mt-24 flex flex-col sm:flex-row gap-10 justify-center">
                 <button className="flex-1 bg-gold-500 text-onyx-950 py-10 rounded-full font-black uppercase tracking-[0.5em] text-[12px] shadow-3xl hover:bg-white transition-all flex items-center justify-center gap-6 group">
                    Download P.I.M <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                 </button>
                 <button className="flex-1 bg-white/5 border border-white/10 text-white py-10 rounded-full font-black uppercase tracking-[0.5em] text-[12px] shadow-3xl hover:border-gold-500 transition-all flex items-center justify-center gap-6 group">
                    Virtual Data Room <ArrowUpRight size={20} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
           </div>
        </section>

        {/* Footer */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center p-12 lg:p-24 relative bg-onyx-950 overflow-hidden">
           <div className="relative z-10 space-y-16 animate-fade-in max-w-5xl">
              <div className="w-32 h-32 border border-gold-500/20 rotate-45 flex items-center justify-center mx-auto mb-16 shadow-gold-500/20 shadow-2xl bg-onyx-900 group">
                 <Rocket className="text-gold-500 -rotate-45 group-hover:scale-125 transition-transform duration-1000" size={48} />
              </div>
              <h2 className="text-7xl md:text-[10rem] font-serif tracking-tighter leading-[0.8] mb-12">The Future <br/><span className="gold-gradient-text italic font-light">Is Structural.</span></h2>
              <button onClick={() => containerRef.current?.scrollTo({top: 0, behavior: 'smooth'})} className="text-gold-500 text-[11px] font-black uppercase tracking-[1em] hover:text-white transition-colors flex flex-col items-center gap-6 mx-auto group">
                <ArrowRight size={24} className="-rotate-90 group-hover:-translate-y-4 transition-transform" /> RESTART DOSSIER
              </button>
           </div>
        </section>
      </div>

      <footer className="h-20 bg-onyx-950 border-t border-white/5 flex items-center justify-between px-16 text-[10px] uppercase tracking-[0.8em] text-slate-700 font-black shrink-0">
        <span className="flex items-center gap-3"><ShieldCheck size={14} className="text-gold-500" /> INSTITUTIONAL PORTFOLIO GRADE</span>
        <span>© 2025 SIRSHUKK HOSPITALITY</span>
      </footer>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1f2937; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #C5A059; }
      `}</style>
    </div>
  );
};