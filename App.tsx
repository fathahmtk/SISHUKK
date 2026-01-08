import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import AssetPage from './pages/AssetPage.tsx';
import MarketPage from './pages/MarketPage.tsx';
import HotelPage from './pages/HotelPage.tsx';
import EventsPage from './pages/EventsPage.tsx';
import DiningPage from './pages/DiningPage.tsx';
import WellnessPage from './pages/WellnessPage.tsx';
import OperationsPage from './pages/OperationsPage.tsx';
import EconomicsPage from './pages/EconomicsPage.tsx';
import RiskPage from './pages/RiskPage.tsx';
import ExitPage from './pages/ExitPage.tsx';
import InvestorChat from './components/InvestorChat.tsx';

// ScrollToTop component to ensure new pages start at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-onyx-950 min-h-screen text-slate-300 font-sans selection:bg-gold-500 selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
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
        </Routes>
        
        <InvestorChat />
        
        <footer className="py-8 text-center border-t border-white/5 text-[9px] uppercase tracking-widest text-slate-600 bg-onyx-950">
          Strictly Confidential &copy; 2025 Sirshukk Hospitality Group
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;