
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import DossierNav from './components/DossierNav.tsx';
import { X, FileDown, ShieldCheck, BookOpen, ScrollText } from 'lucide-react';
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
    <div className="w-16 h-16 border border-white/10 border-t-brass-400 rounded-full animate-spin mb-8"></div>
    <div className="flex flex-col items-center gap-3">
      <span className="text-brass-400 text-[10px] font-black uppercase tracking-[0.8em] animate-pulse">Unfolding Report</span>
      <div className="h-px w-32 bg-white/10 overflow-hidden">
        <div className="h-full bg-brass-400 animate-[loading_2s_ease-in-out]"></div>
      </div>
    </div>
    <style>{`
      @keyframes loading { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
    `}</style>
  </div>
);

const AppContent: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showDossier, setShowDossier] = useState(false);
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

  const toggleDossier = () => setShowDossier(!showDossier);

  return (
    <div className="bg-[#FDFBF7] font-sans selection:bg-brass-500/20 min-h-screen flex flex-col">
      {/* Global Progress Rail */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/[0.05] z-[250] pointer-events-none">
        <div 
          className="h-full bg-brass-400 shadow-[0_0_20px_rgba(184,138,42,0.6)] transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <Navbar onInvestorClick={toggleDossier} />
      <DossierNav />
      
      <main className="animate-fade-in flex-1">
        {!showDossier ? (
          <Suspense fallback={<GlobalLoader />}>
            <Routes>
              <Route path="/" element={<Home onInvestorClick={toggleDossier} onProfileClick={() => setIsProfileOpen(true)} />} />
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
        ) : (
          <div className="fixed inset-0 z-[300] bg-[#05070A] animate-fade-in flex flex-col">
            <div className="h-20 px-12 flex items-center justify-between border-b border-white/[0.03] bg-black/40 backdrop-blur-3xl">
               <div className="flex items-center gap-6">
                  <Logo className="w-8 h-8" variant="white" />
                  <div className="h-6 w-px bg-white/10"></div>
                  <span className="text-brass-400 text-[10px] font-black uppercase tracking-[0.5em]">Project_Dossier_v2.5</span>
               </div>
               <button 
                  onClick={toggleDossier}
                  className="w-12 h-12 rounded-full bg-white/5 hover:bg-brass-400 border border-white/10 flex items-center justify-center text-white hover:text-onyx-950 transition-all active:scale-90 shadow-2xl"
                >
                  <X size={20} />
                </button>
            </div>
            <div className="flex-1 overflow-hidden relative">
              <ReportPage />
            </div>
          </div>
        )}

        {location.pathname === '/' && !showDossier && (
          <section className="bg-[#050505] py-40 md:py-64 border-y border-white/[0.05] text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(184,138,42,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
            <div className="max-w-4xl mx-auto relative z-10">
              <span className="text-brass-400 text-[12px] font-black uppercase tracking-[0.8em] block mb-12 animate-pulse">Official Project Dossier</span>
              <h2 className="text-white font-serif text-6xl md:text-[9rem] mb-16 leading-[0.8] tracking-tighter italic">Design <br/><span className="gold-gradient-text not-italic font-black">Archives.</span></h2>
              
              <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
                <button 
                  onClick={toggleDossier}
                  className="bg-brass-400 hover:bg-white text-onyx-950 px-20 py-8 rounded-full text-[11px] font-black uppercase tracking-[0.4em] transition-all shadow-premium active:scale-95 flex items-center justify-center gap-6 group"
                >
                  <ScrollText size={20} className="group-hover:scale-125 transition-transform" /> 
                  Read Full Report
                </button>
                <button className="bg-transparent border border-white/10 hover:border-brass-400 text-white hover:text-brass-400 px-20 py-8 rounded-full text-[11px] font-black uppercase tracking-[0.4em] transition-all backdrop-blur-xl flex items-center justify-center gap-6 group">
                  <FileDown size={20} className="group-hover:translate-y-1 transition-transform" /> 
                  Download PDF
                </button>
              </div>
              
              <p className="mt-20 text-slate-600 text-[9px] font-black uppercase tracking-[0.5em] max-w-lg mx-auto leading-relaxed italic">
                *The Definitive Architectural & Lifestyle Record of Sirshukk Grand Towers.
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
            Official Project Document | © Sirshukk 2025
          </p>
          <div className="flex justify-center items-center gap-8 text-[9px] text-slate-900 font-black uppercase tracking-widest">
            <span>Landmark Series Record</span>
            <div className="w-1 h-1 rounded-full bg-brass-400"></div>
            <span>Monograph v2.5</span>
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
