import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import { InvestorView } from './components/InvestorView.tsx';
import InvestorChat from './components/InvestorChat.tsx';
import PresenterMode from './components/PresenterMode.tsx';
import { X, FileDown, ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  const [showInvestorDeck, setShowInvestorDeck] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-onyx-950 font-sans selection:bg-gold-500 selection:text-onyx-950 min-h-screen flex flex-col">
      {/* Global Reading Progress Line */}
      <div className="fixed top-0 left-0 w-full h-[1px] bg-white/5 z-[200]">
        <div 
          className="h-full bg-gold-500 shadow-[0_0_15px_#C5A059] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <Navbar onInvestorClick={() => setShowInvestorDeck(true)} />
      
      {!showInvestorDeck ? (
        <main className="animate-fade-in flex-1">
          <Home />
          <section className="bg-onyx-900 py-32 md:py-48 border-y border-white/5 text-center px-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.08)_0%,_transparent_70%)] pointer-events-none"></div>
            <div className="max-w-4xl mx-auto relative z-10">
              <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] block mb-8">Access Protocol</span>
              <h2 className="text-white font-serif text-5xl md:text-8xl mb-12 leading-tight tracking-tighter italic">Enter the <br/><span className="gold-gradient-text italic font-black">Capital Room.</span></h2>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <button 
                  onClick={() => setShowInvestorDeck(true)}
                  className="bg-gold-500 hover:bg-white text-onyx-950 px-16 py-6 rounded-full text-[10px] font-black uppercase tracking-[0.4em] transition-all shadow-[0_15px_40px_rgba(197,160,89,0.3)] active:scale-95 flex items-center justify-center gap-4 group"
                >
                  <ShieldCheck size={18} className="group-hover:scale-125 transition-transform" /> 
                  Authorize Asset Audit
                </button>
                <button className="bg-transparent border border-white/20 hover:border-gold-500 text-white hover:text-gold-500 px-16 py-6 rounded-full text-[10px] font-black uppercase tracking-[0.4em] transition-all backdrop-blur-xl flex items-center justify-center gap-4 group">
                  <FileDown size={18} className="group-hover:translate-y-1 transition-transform" /> 
                  Download Dossier (v2.5)
                </button>
              </div>
              <p className="mt-12 text-slate-600 text-[8px] uppercase tracking-[0.3em] font-black">
                *Access requires institutional credentials and digital NDA execution.
              </p>
            </div>
          </section>
        </main>
      ) : (
        <div className="fixed inset-0 z-[110] bg-onyx-950 animate-fade-in">
          <button 
            onClick={() => setShowInvestorDeck(false)}
            className="fixed top-6 md:top-8 right-6 md:right-8 z-[120] w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-gold-500 border border-white/10 flex items-center justify-center text-white hover:text-onyx-950 transition-all active:scale-90 shadow-2xl backdrop-blur-md"
          >
            <X size={24} />
          </button>
          <InvestorView />
          <PresenterMode />
        </div>
      )}

      <InvestorChat />
      
      <footer className="py-12 text-center border-t border-white/5 bg-onyx-950">
        <div className="container mx-auto px-6">
          <p className="text-[9px] uppercase tracking-[0.5em] text-slate-600 font-black mb-4">
            Strictly Confidential | Institutional Investment Framework 2025
          </p>
          <div className="flex justify-center gap-8 text-[8px] text-slate-700 font-black uppercase tracking-widest">
            <span>© Sirshukk Hospitality Group</span>
            <span>Reg: LS-INTL-2024-KERALA</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;