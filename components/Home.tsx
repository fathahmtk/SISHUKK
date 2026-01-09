import React, { useState, Suspense, lazy } from 'react';
import Hero from './Hero.tsx';
import Snapshot from './Snapshot.tsx';
import { Loader2 } from 'lucide-react';

// Lazy Load Sections to split chunks
const TheAsset = lazy(() => import('./TheAsset.tsx'));
const VisualMonopoly = lazy(() => import('./VisualMonopoly.tsx'));
const Configuration = lazy(() => import('./Configuration.tsx'));
const ProjectHighlights = lazy(() => import('./ProjectHighlights.tsx'));
const MasterplanViewer = lazy(() => import('./MasterplanViewer.tsx'));
const TheMarket = lazy(() => import('./TheMarket.tsx'));
const InclusiveShowcase = lazy(() => import('./InclusiveShowcase.tsx'));
const ProjectSpecs = lazy(() => import('./ProjectSpecs.tsx'));
const TheHotel = lazy(() => import('./TheHotel.tsx'));
const Rooms = lazy(() => import('./Rooms.tsx'));
const EventsWeddings = lazy(() => import('./EventsWeddings.tsx'));
const WeddingFocus = lazy(() => import('./WeddingFocus.tsx'));
const Dining = lazy(() => import('./Dining.tsx'));
const WellnessExperience = lazy(() => import('./WellnessExperience.tsx'));
const Amenities = lazy(() => import('./Amenities.tsx'));
const OperationalControl = lazy(() => import('./OperationalControl.tsx'));
const Economics = lazy(() => import('./Economics.tsx'));
const Financials = lazy(() => import('./Financials.tsx'));
const RiskControl = lazy(() => import('./RiskControl.tsx'));
const ExitStrategy = lazy(() => import('./ExitStrategy.tsx'));
const Gallery = lazy(() => import('./Gallery.tsx'));
const Experiences = lazy(() => import('./Experiences.tsx'));
const Offers = lazy(() => import('./Offers.tsx'));
const Location = lazy(() => import('./Location.tsx'));
const InvestorAccess = lazy(() => import('./InvestorAccess.tsx'));
const BookingModal = lazy(() => import('./BookingModal.tsx'));
const Footer = lazy(() => import('./Footer.tsx'));

// Visual Placeholder for sections loading
const SectionLoader = () => (
  <div className="py-32 flex items-center justify-center w-full bg-onyx-950 border-t border-white/5">
    <div className="flex items-center gap-3 text-gold-500 text-[10px] font-black uppercase tracking-[0.4em]">
      <Loader2 size={16} className="animate-spin" /> Loading Asset Data
    </div>
  </div>
);

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
      {/* Critical Path Components (Static Import) */}
      <Hero onInvestorClick={onInvestorClick} onProfileClick={onProfileClick} />
      <Snapshot onProfileClick={onProfileClick} />
      
      {/* Deferred Components (Lazy Import) */}
      <Suspense fallback={<SectionLoader />}>
        <TheAsset />
        <VisualMonopoly />
        <Configuration />
        <ProjectHighlights />
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
      </Suspense>
    </main>
  );
};

export default Home;