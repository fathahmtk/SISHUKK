import React, { useState } from 'react';
import Hero from './Hero.tsx';
import Snapshot from './Snapshot.tsx';
import TheAsset from './TheAsset.tsx';
import Configuration from './Configuration.tsx';
import TheMarket from './TheMarket.tsx';
import InclusiveShowcase from './InclusiveShowcase.tsx';
import TheHotel from './TheHotel.tsx';
import Rooms from './Rooms.tsx';
import EventsWeddings from './EventsWeddings.tsx';
import WeddingFocus from './WeddingFocus.tsx';
import Dining from './Dining.tsx';
import WellnessExperience from './WellnessExperience.tsx';
import Amenities from './Amenities.tsx';
import OperationalControl from './OperationalControl.tsx';
import ProjectSpecs from './ProjectSpecs.tsx';
import Economics from './Economics.tsx';
import Financials from './Financials.tsx';
import RiskControl from './RiskControl.tsx';
import ExitStrategy from './ExitStrategy.tsx';
import Gallery from './Gallery.tsx';
import Experiences from './Experiences.tsx';
import Offers from './Offers.tsx';
import Location from './Location.tsx';
import InvestorAccess from './InvestorAccess.tsx';
import BookingModal from './BookingModal.tsx';
import Footer from './Footer.tsx';
import { InvestorView } from './InvestorView.tsx';
import { X } from 'lucide-react';

const Home: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'room' | 'wedding'>('room');
  const [showInvestorDeck, setShowInvestorDeck] = useState(false);

  const handleOpenBooking = (type: 'room' | 'wedding') => {
    setBookingType(type);
    setIsBookingOpen(true);
  };

  return (
    <main className="flex flex-col animate-fade-in relative">
      <Hero />
      <Snapshot />
      <TheAsset />
      <Configuration />
      <TheMarket />
      <InclusiveShowcase />
      <TheHotel />
      <Rooms onInquiryClick={() => handleOpenBooking('room')} />
      <EventsWeddings />
      <WeddingFocus onRSVPClick={() => handleOpenBooking('wedding')} />
      <Dining />
      <WellnessExperience />
      <Amenities />
      <OperationalControl />
      <ProjectSpecs />
      <Economics />
      <Financials />
      <RiskControl />
      <ExitStrategy />
      <Gallery />
      <Experiences />
      <Offers onActionClick={handleOpenBooking} />
      <Location />
      <InvestorAccess onOpenDeck={() => setShowInvestorDeck(true)} />
      <Footer />

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialType={bookingType}
      />

      {showInvestorDeck && (
        <div className="fixed inset-0 z-[110] bg-onyx-950 animate-fade-in overflow-hidden">
          <button 
            onClick={() => setShowInvestorDeck(false)}
            className="fixed top-6 md:top-8 right-6 md:right-8 z-[120] w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all active:scale-90"
          >
            <X size={24} />
          </button>
          <InvestorView />
        </div>
      )}
    </main>
  );
};

export default Home;