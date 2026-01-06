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
        <>
          <InvestorView />
          <InvestorChat />
        </>
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
          {/* Investor Chat also available in Guest view? Maybe hidden to avoid confusion, 
              but usually investors might browse guest site too. 
              Let's keep it available but maybe strictly for investor mode in a real app.
              For this demo, hiding it in guest mode makes the distinction clearer. 
          */}
        </>
      )}
    </div>
  );
};

export default App;