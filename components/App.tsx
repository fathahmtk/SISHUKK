import React, { useState, useEffect } from 'react';
/* Fix sibling imports: since this file is in components/, siblings should be accessed via './' */
import Navbar from './Navbar.tsx';
import Home from './Home.tsx';
import { InvestorView } from './InvestorView.tsx';
import InvestorChat from './InvestorChat.tsx';
import PresenterMode from './PresenterMode.tsx';
/* Added missing import for Logo component */
import Logo from './Logo.tsx';
import { X, FileDown, ShieldCheck, Loader2 } from 'lucide-react';

const App: React.FC = () => {
  const [showInvestorDeck, setShowInvestorDeck] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[1000] bg-[#050505] flex flex-col items-center justify-center text-white">
        <div className="w-16 h-16 border border-white/10 border-t-gold-500 rounded-full animate-spin mb-8"></div>
        <div className="flex flex-col items-center gap-3">
          <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] animate-pulse">Initializing Data Vault</span>
          <div className="h-px w-32 bg-white/10 overflow-hidden">
            <div className="h-full bg-gold-500 animate-[loading_2s_ease-in-out]"></div>
          </div>
        </div>
        <style>{`
          @keyframes loading { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        `}</style>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFBF7] font-sans selection:bg-gold-500/20 selection:text-gold-900 min-h-screen flex flex-col">
      {/* Global Cinematic Progress HUD */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/[0.05] z-[250] pointer-events-none">
        <div 
          className="h-full bg-gold-500 shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <Navbar onInvestorClick={() => setShowInvestorDeck(true)} />
      
      {!showInvestorDeck ? (
        <main className="animate-fade-in flex-1">
          <Home />
          <section className="bg-[#050505] py-40 md:py-64 border-y border-white/[0.05] text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
            <div className="max-w-4xl mx-auto relative z-10">
              <span className="text-gold-500 text-[12px] font-black uppercase tracking-[0.8em] block mb-12 animate-pulse">Institutional Access Portal</span>
              <h2 className="text-white font-serif text-6xl md:text-[9rem] mb-16 leading-[0.8] tracking-tighter italic">Enter the <br/><span className="gold-gradient-text not-italic font-black">Capital Room.</span></h2>
              
              <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
                <button 
                  onClick={() => setShowInvestorDeck(true)}
                  className="bg-gold-500 hover:bg-white text-onyx-950 px-20 py-8 rounded-full text-[11px] font-black uppercase tracking-[0.4em] transition-all shadow-[0_30px_60px_rgba(212,175,55,0.2)] active:scale-95 flex items-center justify-center gap-6 group"
                >
                  <ShieldCheck size={20} className="group-hover:scale-125 transition-transform" /> 
                  Authorize Asset Audit
                </button>
                <button className="bg-transparent border border-white/10 hover:border-gold-500 text-white hover:text-gold-500 px-20 py-8 rounded-full text-[11px] font-black uppercase tracking-[0.4em] transition-all backdrop-blur-xl flex items-center justify-center gap-6 group">
                  <FileDown size={20} className="group-hover:translate-y-1 transition-transform" /> 
                  Download Memorandum
                </button>
              </div>
              
              <p className="mt-20 text-slate-600 text-[9px] uppercase tracking-[0.4em] font-black max-w-lg mx-auto leading-relaxed italic">
                *Asset participation requires institutional credentials and digital NDA execution protocols.
              </p>
            </div>
          </section>
        </main>
      ) : (
        <div className="fixed inset-0 z-[210] bg-[#050505] animate-fade-in flex flex-col">
          <div className="h-24 px-12 flex items-center justify-between border-b border-white/[0.03] bg-black/40 backdrop-blur-2xl">
             <div className="flex items-center gap-6">
                <Logo className="w-8 h-8" variant="white" />
                <div className="h-6 w-px bg-white/10"></div>
                <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.5em]">Vault_Access_v2.5_Alpha</span>
             </div>
             <button 
                onClick={() => setShowInvestorDeck(false)}
                className="w-14 h-14 rounded-full bg-white/5 hover:bg-gold-500 border border-white/10 flex items-center justify-center text-white hover:text-onyx-950 transition-all active:scale-90 shadow-2xl backdrop-blur-md"
              >
                <X size={24} />
              </button>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <InvestorView />
            <PresenterMode />
          </div>
        </div>
      )}

      <InvestorChat />
      
      <footer className="py-20 text-center border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-[10px] uppercase tracking-[0.6em] text-slate-400 font-black mb-6 italic">
            Strictly Confidential | Institutional Investment Framework 2025
          </p>
          <div className="flex justify-center items-center gap-8 text-[9px] text-slate-900 font-black uppercase tracking-widest">
            <span>© Sirshukk Hospitality Group</span>
            <div className="w-1 h-1 rounded-full bg-gold-500"></div>
            <span>Reg: LS-INTL-2024-KERALA</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;