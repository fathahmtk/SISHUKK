import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import DossierNav from './components/DossierNav.tsx';
import { X, Activity, Cpu, Zap, Scale, Loader2, ShieldCheck, Terminal, Maximize2 } from 'lucide-react';
import Logo from './components/Logo.tsx';

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

// Lazy Load Components
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
  <div className="fixed inset-0 z-[2000] bg-[#FDFBF7] flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.08)_0%,_transparent_60%)]"></div>
    <Logo className="w-20 h-20 animate-pulse mb-10" />
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-3 text-gold-600 text-[10px] font-black uppercase tracking-[0.5em]">
        <Loader2 size={12} className="animate-spin" />
        Institutional Authorization Active
      </div>
      <div className="h-px w-32 bg-gold-200"></div>
    </div>
  </div>
);

const InstitutionalTicker = ({ onProfileClick }: { onProfileClick: () => void }) => (
  <div className="h-10 bg-white border-b border-slate-100 flex items-center overflow-hidden whitespace-nowrap z-[100] relative shrink-0">
    <div className="animate-[ticker_80s_linear_infinite] flex items-center gap-24 text-[8px] font-black uppercase tracking-[0.5em] text-slate-400">
      <span className="flex items-center gap-2 text-gold-600 cursor-pointer hover:text-slate-950 transition-colors" onClick={onProfileClick}><Activity size={10} /> Slab Casting: Level 12 Active • Inspect Profile</span>
      <span className="flex items-center gap-2"><Cpu size={10} /> BIM Model: L300 Sync Completed</span>
      <span className="flex items-center gap-2 text-emerald-600"><Zap size={10} /> Equity Target: 42.5% Committed</span>
      <span className="flex items-center gap-2"><Scale size={10} /> Exit Cap: 12.0x Projected</span>
      <span className="flex items-center gap-2 text-gold-600"><Activity size={10} /> 360 Panorama: Verification Pass 10.2</span>
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
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showInvestorDeck, setShowInvestorDeck] = useState(false);
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const updateScrollProgress = () => {
      // Handle progress for both main window and potential internal scroll containers (Home.tsx)
      const currentPath = window.location.hash || window.location.pathname;
      const isHome = currentPath === '#/' || currentPath === '/';
      
      let progress = 0;
      if (isHome) {
        // Home uses an internal scroll container (h-dv overflow-y-scroll)
        const homeElement = document.querySelector('main.snap-y');
        if (homeElement) {
          progress = (homeElement.scrollTop / (homeElement.scrollHeight - homeElement.clientHeight)) * 100;
        }
      } else {
        // Subpages use standard window scroll
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollHeight > 0) {
          progress = (window.scrollY / scrollHeight) * 100;
        }
      }
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    
    // Also listen to internal scrolls for Home component if it exists
    const homeElement = document.querySelector('main.snap-y');
    if (homeElement) {
      homeElement.addEventListener('scroll', updateScrollProgress, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      if (homeElement) {
        homeElement.removeEventListener('scroll', updateScrollProgress);
      }
    };
  }, [location.pathname]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(e => {
        console.error(`Error attempting to enable full-screen mode: ${e.message}`);
      });
      setIsTheaterMode(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsTheaterMode(false);
      }
    }
  };

  return (
    <div className={`flex flex-col min-h-dv bg-[#FDFBF7] ${isTheaterMode ? 'cursor-none-hidden' : ''}`}>
      {/* Global Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-[1000] pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-gold-700 via-gold-400 to-gold-200 shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {!showInvestorDeck && (
        <>
          <InstitutionalTicker onProfileClick={() => setIsProfileOpen(true)} />
          <Navbar onInvestorClick={() => setShowInvestorDeck(true)} />
          <DossierNav />
        </>
      )}
      
      <main className={`flex-grow ${showInvestorDeck ? 'h-dv overflow-hidden' : ''}`}>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home onInvestorClick={() => setShowInvestorDeck(true)} onProfileClick={() => setIsProfileOpen(true)} />} />
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
      </main>

      <Suspense fallback={null}>
        <InvestorChat />
        {showInvestorDeck && (
          <div className="fixed inset-0 z-[150] bg-slate-950 animate-fade-in flex flex-col h-dv overflow-hidden">
            <div className="flex-shrink-0 h-20 px-8 flex items-center justify-between border-b border-white/5 bg-onyx-950/80 backdrop-blur-xl">
               <div className="flex items-center gap-4">
                  <Logo className="w-8 h-8" variant="white" />
                  <div className="h-6 w-px bg-white/10"></div>
                  <span className="text-gold-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Terminal size={14} /> Vault_Access_Alpha_2.5
                  </span>
               </div>
               <div className="flex items-center gap-4">
                  <button 
                    onClick={toggleFullscreen}
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all border border-white/10"
                    title="Toggle Presentation Mode"
                  >
                    <Maximize2 size={18} />
                  </button>
                  <button 
                    onClick={() => setShowInvestorDeck(false)}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-gold-500 border border-white/10 flex items-center justify-center text-white hover:text-slate-950 transition-all active:scale-90 shadow-2xl backdrop-blur-md"
                  >
                    <X size={20} />
                  </button>
               </div>
            </div>
            <div className="flex-grow overflow-hidden relative">
               <InvestorView />
               <PresenterMode />
            </div>
          </div>
        )}
        <AssetProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      </Suspense>
      
      <style>{`
        .cursor-none-hidden { cursor: none; }
      `}</style>
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