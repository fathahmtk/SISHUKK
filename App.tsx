import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Dining from './components/Dining';
import WeddingFocus from './components/WeddingFocus';
import Experiences from './components/Experiences';
import Offers from './components/Offers';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import InvestorView from './components/InvestorView';
import InvestorChat from './components/InvestorChat';

const App: React.FC = () => {
  const [isInvestorView, setIsInvestorView] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-gold-500 selection:text-white">
      <Navbar 
        isInvestorView={isInvestorView} 
        onToggleView={setIsInvestorView} 
      />
      
      {isInvestorView ? (
        <InvestorView />
      ) : (
        <>
          <Hero />
          <Rooms />
          <Dining />
          <WeddingFocus />
          <Experiences />
          <Gallery />
          <Offers />
          <Location />
          <Footer />
        </>
      )}
      
      {/* AI Assistant available in both views */}
      <InvestorChat />
    </div>
  );
};

export default App;