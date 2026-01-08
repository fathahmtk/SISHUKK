
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Snapshot from './components/Snapshot.tsx';
import InclusiveShowcase from './components/InclusiveShowcase.tsx';
import Rooms from './components/Rooms.tsx';
import Dining from './components/Dining.tsx';
import WeddingFocus from './components/WeddingFocus.tsx';
import Configuration from './components/Configuration.tsx';
import Amenities from './components/Amenities.tsx';
import ProjectSpecs from './components/ProjectSpecs.tsx';
import Financials from './components/Financials.tsx';
import Gallery from './components/Gallery.tsx';
import Location from './components/Location.tsx';
import Experiences from './components/Experiences.tsx';
import Offers from './components/Offers.tsx';
import Footer from './components/Footer.tsx';
import { InvestorView } from './components/InvestorView.tsx';
import InvestorChat from './components/InvestorChat.tsx';
import { X, FileDown } from 'lucide-react';

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
          className="h-full bg-gold-500 shadow-[0_0_10px_#D4AF37] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <Navbar onInvestorClick={() => setShowInvestorDeck(true)} />
      
      {!showInvestorDeck ? (
        <main className="animate-fade-in flex-1">
          <Hero onInvestorClick={() => setShowInvestorDeck(true)} />
          
          <div className="space-y-0">
            <Snapshot />
            <InclusiveShowcase />
            <Rooms />
            <Dining />
            <WeddingFocus />
            <Configuration />
            <Amenities />
            <ProjectSpecs />
            <Financials />
            <Gallery />
            <Location />
            <Experiences />
            <Offers />
          </div>

          <section className="bg-onyx-900 py-24 md:py-40 border-y border-white/5 text-center px-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
            <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.6em] block mb-8">Institutional Insight</span>
            <h2 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl mb-10 leading-tight">Download The 2025 <br/>Financial & Asset Report</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => setShowInvestorDeck(true)}
                className="bg-gold-500 hover:bg-white text-onyx-950 px-12 md:px-16 py-5 md:py-6 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.4em] transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-3"
              >
                Access Full Report
              </button>
              <button className="bg-white/5 border border-white/10 hover:border-white text-white px-12 md:px-16 py-5 md:py-6 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.4em] transition-all backdrop-blur-xl flex items-center justify-center gap-3">
                <FileDown size={14} /> Download P.I.M
              </button>
            </div>
          </section>

          <Footer />
        </main>
      ) : (
        <div className="fixed inset-0 z-[110] bg-onyx-950 animate-fade-in">
          <button 
            onClick={() => setShowInvestorDeck(false)}
            className="fixed top-6 md:top-8 right-6 md:right-8 z-[120] w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all active:scale-90"
          >
            <X size={24} />
          </button>
          <InvestorView />
        </div>
      )}

      <InvestorChat />
    </div>
  );
};

export default App;
