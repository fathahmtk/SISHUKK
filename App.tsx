import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import DossierNav from './components/DossierNav.tsx';
import { X, Activity, Cpu, Zap, Scale, Loader2 } from 'lucide-react';
import Logo from './components/Logo.tsx';

// Lazy Load Pages for Chunk Optimization
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

// Lazy Load Heavy Interactive Components
// Note: InvestorView is a named export
const InvestorView = lazy(() => import('./components/InvestorView.tsx').then(module => ({ default: module.InvestorView })));
const InvestorChat = lazy(() => import('./components/InvestorChat.tsx'));
const PresenterMode = lazy(() => import('./components/PresenterMode.tsx'));
const AssetProfileModal = lazy(() => import('./components/AssetProfileModal.tsx'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const LoadingScreen = () => (
  <div className="min-h-screen bg-onyx-950 flex flex-col items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05)_0%,_transparent_50%)]"></div>
    <Logo className="w-16 h-16 animate-pulse mb-8" />
    <div className="flex items-center gap-3 text-gold-500 text-[10px] font-black uppercase tracking-[0.4em]">
      <Loader2 size={12} className="animate-spin" />
      Loading Institutional Assets
    </div>
  </div>
);

const InstitutionalTicker = ({ onProfileClick }: { onProfileClick: () => void }) => (
  <div className="h-10 bg-onyx-950 border-b border-white/5 flex items-center overflow-hidden whitespace-nowrap z-[100] relative">
    <div className="animate-[ticker_60s_linear_infinite] flex items-center gap-16 text-[8px] font-black uppercase tracking-[0.4em] text-slate-600">
      <span className="flex items-center gap-2 text-gold-500 cursor-pointer hover:text-white transition-colors" onClick={onProfileClick}><Activity size={10} /> Slab Casting: Level 12 Active • Inspect Profile</span>
      <span className="flex items-center gap-2"><Cpu size={10} /> BIM Model: L300 Sync Completed</span>
      <span className="flex items-center gap-2 text-emerald-500"><Zap size={10} /> Equity Target: 42.5% Committed</span>
      <span className="flex items-center gap-2"><Scale size={10} /> Exit Cap: 12.0x Projected</span>
      <span className="flex items-center gap-2 text-gold-500"><Activity size={10} /> 360 Panorama: Verification Pass 10.2</span>
      <span className="flex items-center gap-2 text-gold-500 cursor-pointer hover:text-white transition-colors" onClick={onProfileClick}><Activity size={10} /> Slab Casting: Level 12 Active • Inspect Profile</span>
      <span className="flex items-center gap-2"><Cpu size={10} /> BIM Model: L300 Sync Completed</span>
      <span className="flex items-center gap-2 text-emerald-500"><Zap size={10} /> Equity Target: 42.5% Committed</span>
      <span className="flex items-center gap-2"><Scale size={10} /> Exit Cap: 12.0x Projected</span>
    </div>
    <style>{`
      @keyframes ticker {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);

const AppContent: React.FC = () => {
  const [showInvestorDeck, setShowInvestorDeck] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isVaultMode = showInvestorDeck;

  return (
    <div className="bg-onyx-950 min-h-screen text-slate-300 font-sans selection:bg-gold-500 selection:text-onyx-950 transition-colors duration-1000">
      {!isVaultMode && (
        <>
          <InstitutionalTicker onProfileClick={() => setShowProfileModal(true)} />
          <Navbar onInvestorClick={() => setShowInvestorDeck(true)} />
          <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-[250] pointer-events-none">
            <div 
              className="h-full bg-gold-500 shadow-[0_0_20px_#D4AF37] transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
          <DossierNav />
          <main className="relative">
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                <Route path="/" element={<Home onInvestorClick={() => setShowInvestorDeck(true)} onProfileClick={() => setShowProfileModal(true)} />} />
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
                <Route path="*" element={<Home onInvestorClick={() => setShowInvestorDeck(true)} onProfileClick={() => setShowProfileModal(true)} />} />
              </Routes>
            </Suspense>
          </main>
        </>
      )}

      {isVaultMode && (
        <div className="fixed inset-0 z-[1000] bg-onyx-950 animate-fade-in overflow-hidden">
          <button 
            onClick={() => setShowInvestorDeck(false)}
            className="fixed top-10 right-10 z-[1100] w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 hover:bg-gold-500 border border-white/10 flex items-center justify-center text-white hover:text-onyx-950 transition-all active:scale-90 shadow-3xl backdrop-blur-3xl group"
          >
            <X size={36} className="group-hover:rotate-90 transition-transform duration-500" />
          </button>
          <Suspense fallback={<LoadingScreen />}>
            <InvestorView />
            <PresenterMode />
          </Suspense>
        </div>
      )}

      <Suspense fallback={null}>
        {showProfileModal && (
          <AssetProfileModal 
            isOpen={showProfileModal} 
            onClose={() => setShowProfileModal(false)} 
          />
        )}
      </Suspense>

      <Suspense fallback={null}>
        <InvestorChat isMinimal={showInvestorDeck} />
      </Suspense>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;