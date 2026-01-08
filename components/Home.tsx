import React, { useState } from 'react';
import Hero from './Hero.tsx';
import Snapshot from './Snapshot.tsx';
import TheAsset from './TheAsset.tsx';
import Configuration from './Configuration.tsx';
import MasterplanViewer from './MasterplanViewer.tsx';
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

interface HomeProps {
  onInvestorClick?: () => void;
  onProfileClick?: () => void;
}

const Home: React.FC<HomeProps> = ({ onInvestorClick, onProfileClick }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'room' | 'wedding'>('room');

  const handleOpenBooking = (type: 'room' | 'wedding') => {
    setBookingType(type);
    setIsBookingOpen(true);
  };

  return (
    <main className="flex flex-col relative w-full overflow-x-hidden">
      <Hero onInvestorClick={onInvestorClick} onProfileClick={onProfileClick} />
      <Snapshot onProfileClick={onProfileClick} />
      <TheAsset />
      <Configuration />
      <MasterplanViewer />
      <TheMarket />
      <InclusiveShowcase />
      <ProjectSpecs />
      <TheHotel />
      <Rooms onInquiryClick={() => handleOpenBooking('room')} />
      <EventsWeddings />
      <WeddingFocus onRSVPClick={() => handleOpenBooking('wedding')} />
      <Dining />
      <WellnessExperience />
      <Amenities />
      <OperationalControl />
      <Economics />
      <Financials />
      <RiskControl />
      <ExitStrategy />
      <Gallery />
      <Experiences />
      <Offers onActionClick={handleOpenBooking} />
      <Location />
      <InvestorAccess onOpenDeck={onInvestorClick} />
      <Footer />

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialType={bookingType}
      />
    </main>
  );
};

export default Home;