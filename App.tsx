import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-gold-500 selection:text-white">
      <Navbar />
      <Hero />
      <Rooms />
      <Dining />
      <WeddingFocus />
      <Experiences />
      <Gallery />
      <Offers />
      <Location />
      <Footer />
    </div>
  );
};

export default App;