import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import DossierNav from './components/DossierNav.tsx';
import { X, Activity, Cpu, Zap, Scale, Loader2, ArrowRight } from 'lucide-react';
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
  <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.08)_0%,_transparent_60%)]"></div>
    <Logo className="w-20 h-20 animate-pulse mb-10" />
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-3 text-gold-600 text-[10px] font-black uppercase tracking-[0.5em]">
        <Loader2 size={12} className="animate-spin" />
        Institutional Portal
      </div>
      <div className="h-px w-32 bg-gold-200"></div>
    </div>
  </div>
);

const InstitutionalTicker = ({ onProfileClick }: { onProfileClick: () => void }) => (
  <div className="h-10 bg-white border-b border-slate-100 flex items-center overflow-hidden whitespace-nowrap z-[100] relative">
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
    <div className="bg-[#FDFBF7] min-h-screen text-slate-900 font-sans selection:bg-gold-500 selection:text-white transition-colors duration-1000">
      {!isVaultMode && (
        <>
          <InstitutionalTicker onProfileClick={() => setShowProfileModal(true)} />
          <Navbar onInvestorClick={() => setShowInvestorDeck(true)} />
          <div className="fixed top-0 left-0 w-full h-[2px] bg-slate-50 z-[250] pointer-events-none">
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
                <Route path="/report" element={<ReportPage />} />
                <Route path="*" element={<Home onInvestorClick={() => setShowInvestorDeck(true)} onProfileClick={() => setShowProfileModal(true)} />} />
              </Routes>
              
              <section className="bg-white py-48 border-y border-slate-100 text-center px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                  <span className="text-gold-600 text-[10px] font-black uppercase tracking-[0.8em] block mb-12">Access Protocol</span>
                  <h2 className="text-slate-950 font-serif text-6xl md:text-9xl mb-16 leading-[0.8] tracking-tighter italic">Capital <br/><span className="gold-gradient-text italic font-black">Sanctuary.</span></h2>
                  <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                    <button 
                      onClick={() => setShowInvestorDeck(true)}
                      className="bg-slate-950 text-white px-20 py-8 rounded-full text-[11px] font-black uppercase tracking-[0.5em] transition-all hover:bg-gold-500 shadow-3xl active:scale-95 flex items-center justify-center gap-6 group"
                    >
                      Authorize Asset Audit <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                  <p className="mt-16 text-slate-300 text-[9px] uppercase tracking-[0.5em] font-black italic">
                    *Requires Institutional Credentials & Digital NDA
                  </p>
                </div>
              </section>
            </Suspense>
          </main>
        </>
      )}

      {isVaultMode && (
        <div className="fixed inset-0 z-[1000] bg-white animate-fade-in overflow-hidden">
          <button 
            onClick={() => setShowInvestorDeck(false)}
            className="fixed top-10 right-10 z-[1100] w-16 h-16 rounded-full bg-slate-50 hover:bg-gold-500 border border-slate-200 flex items-center justify-center text-slate-950 hover:text-white transition-all active:scale-90 shadow-2xl backdrop-blur-3xl group"
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