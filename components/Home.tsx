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
  <div className="h-screen w-full flex items-center justify-center bg-onyx-950 border-t border-white/5 snap-start">
    <div className="flex items-center gap-3 text-gold-500 text-[10px] font-black uppercase tracking-[0.4em]">
      <Loader2 size={16} className="animate-spin" /> Loading Asset Data
    </div>
  </div>
);

// Wrapper for snapping sections
const SnapSection = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) => (
  <section className={`snap-start min-h-screen w-full flex flex-col justify-center ${className}`}>
    {children}
  </section>
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
      {/* Critical Path Components */}
      <section className="snap-start min-h-screen w-full">
        <Hero onInvestorClick={onInvestorClick} onProfileClick={onProfileClick} />
      </section>
      
      <SnapSection>
        <Snapshot onProfileClick={onProfileClick} />
      </SnapSection>
      
      {/* Deferred Components */}
      <Suspense fallback={<SectionLoader />}>
        <SnapSection>
          <TheAsset />
        </SnapSection>
        <SnapSection>
          <VisualMonopoly />
        </SnapSection>
        <SnapSection>
          <Configuration />
        </SnapSection>
        <SnapSection>
          <ProjectHighlights />
        </SnapSection>
        <SnapSection>
          <MasterplanViewer />
        </SnapSection>
        <SnapSection>
          <TheMarket />
        </SnapSection>
        <SnapSection>
          <InclusiveShowcase />
        </SnapSection>
        <SnapSection>
          <ProjectSpecs />
        </SnapSection>
        <SnapSection>
          <TheHotel />
        </SnapSection>
        <SnapSection>
          <Rooms onInquiryClick={() => handleOpenBooking('room')} />
        </SnapSection>
        <SnapSection>
          <EventsWeddings />
        </SnapSection>
        <SnapSection>
          <WeddingFocus onRSVPClick={() => handleOpenBooking('wedding')} />
        </SnapSection>
        <SnapSection>
          <Dining />
        </SnapSection>
        <SnapSection>
          <WellnessExperience />
        </SnapSection>
        <SnapSection>
          <Amenities />
        </SnapSection>
        <SnapSection>
          <OperationalControl />
        </SnapSection>
        <SnapSection>
          <Economics />
        </SnapSection>
        <SnapSection>
          <Financials />
        </SnapSection>
        <SnapSection>
          <RiskControl />
        </SnapSection>
        <SnapSection>
          <ExitStrategy />
        </SnapSection>
        <SnapSection>
          <Gallery />
        </SnapSection>
        <SnapSection>
          <Experiences />
        </SnapSection>
        <SnapSection>
          <Offers onActionClick={handleOpenBooking} />
        </SnapSection>
        <SnapSection>
          <Location />
        </SnapSection>
        <SnapSection>
          <InvestorAccess onOpenDeck={onInvestorClick} />
        </SnapSection>
        <section className="snap-start w-full">
          <Footer />
        </section>
        
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