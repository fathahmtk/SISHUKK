import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import DossierNav from './components/DossierNav.tsx';
import { X, FileDown, ShieldCheck, Loader2 } from 'lucide-react';
import Logo from './components/Logo.tsx';
import InvestorChat from './components/InvestorChat.tsx';
import AssetProfileModal from './components/AssetProfileModal.tsx';

// Lazy Load Pages
const Home = lazy(() => import('./components/Home.tsx'));
const AssetPage = lazy(() => import('./pages/AssetPage.tsx'));
const MarketPage = lazy(() => import('./pages/MarketPage.tsx'));
const HotelPage = lazy(() => import('./pages/HotelPage.tsx'));
const EventsPage = lazy(() => import('./pages/EventsPage.tsx'));
const DiningPage = lazy(() => import('./pages/DiningPage.tsx'));
const WellnessPage = lazy(() => import('./pages/WellnessPage.tsx'));
const OperationsPage = lazy(() => import('./pages/OperationsPage.tsx'));
const EconomicsPage = lazy(() => import('./pages/EconomicsPage.tsx'));
const RiskPage = lazy(() => import('./pages/RiskPage.tsx'));
const ExitPage = lazy(() => import('./pages/ExitPage.tsx'));
const ReportPage = lazy(() => import('./pages/ReportPage.tsx'));

const GlobalLoader = () => (
  <div className="fixed inset-0 z-[1000] bg-[#050505] flex flex-col items-center justify-center text-white">
    <div className="w-16 h-16 border border-white/10 border-t-gold-500 rounded-full animate-spin mb-8"></div>
    <div className="flex flex-col items-center gap-3">
      <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.8em] animate-pulse">Synchronizing Ledger</span>
      <div className="h-px w-32 bg-white/10 overflow-hidden">
        <div className="h-full bg-gold-500 animate-[loading_2s_ease-in-out]"></div>
      </div>
    </div>
    <style>{`
      @keyframes loading { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
    `}</style>
  </div>
);

const AppContent: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / (totalHeight || 1)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFinancials = () => {
    if (location.pathname !== '/') {
        window.location.href = '/#/#financials';
    } else {
        const el = document.getElementById('financials');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FDFBF7] font-sans selection:bg-gold-500/20 selection:text-gold-900 min-h-screen flex flex-col">
      {/* Global Cinematic Progress HUD */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/[0.05] z-[250] pointer-events-none">
        <div 
          className="h-full bg-gold-500 shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <Navbar onInvestorClick={scrollToFinancials} />
      <DossierNav />
      
      <main className="animate-fade-in flex-1">
        <Suspense fallback={<GlobalLoader />}>
          <Routes>
            <Route path="/" element={<Home onInvestorClick={scrollToFinancials} onProfileClick={() => setIsProfileOpen(true)} />} />
            <Route path="/asset" element={<AssetPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/hotel" element={<HotelPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/dining" element={<DiningPage />} />
            <Route path="/wellness" element={<WellnessPage />} />
            <Route path="/operations" element={<OperationsPage />} />
            <Route path="/economics" element={<EconomicsPage />} />
            <Route path="/risk" element={<RiskPage />} />
            <Route path="/exit" element={<ExitPage />} />
            <Route path="/report" element={<ReportPage />} />
          </Routes>
        </Suspense>

        {location.pathname === '/' && (
          <section className="bg-[#050505] py-40 md:py-64 border-y border-white/[0.05] text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
            <div className="max-w-4xl mx-auto relative z-10">
              <span className="text-gold-500 text-[12px] font-black uppercase tracking-[0.8em] block mb-12 animate-pulse">Confidential Institutional Hub</span>
              <h2 className="text-white font-serif text-6xl md:text-[9rem] mb-16 leading-[0.8] tracking-tighter italic">The Asset <br/><span className="gold-gradient-text not-italic font-black">Ledger.</span></h2>
              
              <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
                <button 
                  onClick={scrollToFinancials}
                  className="bg-gold-500 hover:bg-white text-onyx-950 px-20 py-8 rounded-full text-[11px] font-black uppercase tracking-[0.4em] transition-all shadow-[0_30px_60px_rgba(212,175,55,0.2)] active:scale-95 flex items-center justify-center gap-6 group"
                >
                  <ShieldCheck size={20} className="group-hover:scale-125 transition-transform" /> 
                  Inspect Financial Core
                </button>
                <a 
                  href="/#/report"
                  className="bg-transparent border border-white/10 hover:border-gold-500 text-white hover:text-gold-500 px-20 py-8 rounded-full text-[11px] font-black uppercase tracking-[0.4em] transition-all backdrop-blur-xl flex items-center justify-center gap-6 group"
                >
                  <FileDown size={20} className="group-hover:translate-y-1 transition-transform" /> 
                  Technical Dossier
                </a>
              </div>
              
              <p className="mt-20 text-slate-600 text-[9px] uppercase tracking-[0.4em] font-black max-w-lg mx-auto leading-relaxed italic">
                *Asset participation metrics and audited milestones current as of January 2025.
              </p>
            </div>
          </section>
        )}
      </main>

      <InvestorChat />
      <AssetProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      
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

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <GlobalLoader />;

  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;