import React, { useState, Suspense, lazy, useEffect, useRef } from 'react';
import Hero from './Hero.tsx';
import Snapshot from './Snapshot.tsx';

// Lazy Load Sections
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

const SectionLoader = () => (
  <div className="h-dv w-full flex items-center justify-center bg-white snap-start">
    <div className="flex flex-col items-center gap-8">
      <div className="w-16 h-16 border-[3px] border-gold-100 border-t-gold-600 rounded-full animate-spin"></div>
      <div className="text-gold-600 text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">Synchronizing Asset Ledger</div>
    </div>
  </div>
);

const SnapSection = ({ children, id, className = "" }: { children?: React.ReactNode; id?: string; className?: string }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        } else if (entry.boundingClientRect.top > 0) {
          // Reset when scrolling back up for re-animation effect
          setIsActive(false);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id={id}
      ref={sectionRef}
      className={`snap-start h-dv w-full flex flex-col justify-center relative overflow-hidden bg-white border-b border-slate-50 ${className}`}
    >
      <div className={`h-full w-full flex items-center justify-center overflow-y-auto no-scrollbar staged-reveal ${isActive ? 'active' : ''}`}>
          <div className="w-full max-h-full py-12">
            {children}
          </div>
      </div>
    </section>
  );
};

interface HomeProps {
  onInvestorClick?: () => void;
  onProfileClick?: () => void;
}

const Home: React.FC<HomeProps> = ({ onInvestorClick, onProfileClick }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'room' | 'wedding'>('room');
  const [activeSection, setActiveSection] = useState(0);
  
  const sections = [
    { id: 'hero', label: 'Start' },
    { id: 'snapshot', label: 'Snapshot' },
    { id: 'the-asset', label: 'Thesis' },
    { id: 'visual-monopoly', label: 'Anatomy' },
    { id: 'configuration', label: 'Symmetry' },
    { id: 'highlights', label: 'Alpha' },
    { id: 'masterplan', label: 'Hierarchy' },
    { id: 'market', label: 'Demand' },
    { id: 'showcase', label: 'Icons' },
    { id: 'specs', label: 'Metrics' },
    { id: 'hotel-summary', label: 'Hotel' },
    { id: 'rooms', label: 'Units' },
    { id: 'events-summary', label: 'Events' },
    { id: 'wedding-focus', label: 'Ceremony' },
    { id: 'dining', label: 'Gastronomy' },
    { id: 'wellness', label: 'Vedic' },
    { id: 'amenities', label: 'Systems' },
    { id: 'operations', label: 'Velocity' },
    { id: 'economics', label: 'Capital' },
    { id: 'financials', label: 'Yield' },
    { id: 'risk', label: 'Security' },
    { id: 'exit', label: 'Exit' },
    { id: 'gallery', label: 'Visuals' },
    { id: 'experiences', label: 'Life' },
    { id: 'offers', label: 'Offers' },
    { id: 'location', label: 'Nexus' },
    { id: 'access', label: 'Vault' },
    { id: 'footer', label: 'End' }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.findIndex(s => s.id === entry.target.id);
          if (index !== -1) setActiveSection(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleOpenBooking = (type: 'room' | 'wedding') => {
    setBookingType(type);
    setIsBookingOpen(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex flex-col relative w-full h-dv overflow-y-scroll snap-y snap-mandatory scroll-smooth overflow-x-hidden no-scrollbar bg-[#FDFBF7]">
      
      {/* Paging Navigation HUD */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4 items-end pointer-events-none hidden xl:flex">
        <div className="mb-4 text-[7px] font-black uppercase tracking-[0.5em] text-slate-300 transform -rotate-90 origin-right translate-y-16 translate-x-12">
           Presentation Flow
        </div>
        {sections.map((s, i) => (
          <button 
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="flex items-center gap-6 group pointer-events-auto py-1"
          >
            <span className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-700 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 ${activeSection === i ? 'text-gold-600 opacity-100 translate-x-0' : 'text-slate-400'}`}>
              {s.label}
            </span>
            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-700 border-2 ${activeSection === i ? 'bg-gold-500 border-gold-500 scale-[1.6] shadow-gold-glow' : 'bg-transparent border-slate-200 group-hover:border-gold-300'}`}></div>
          </button>
        ))}
      </div>

      {/* Progress Ticker Bottom (Mobile) */}
      <div className="fixed bottom-0 left-0 w-full h-1.5 z-[100] bg-slate-100 xl:hidden">
         <div 
           className="h-full bg-gold-500 transition-all duration-700 ease-out"
           style={{ width: `${((activeSection + 1) / sections.length) * 100}%` }}
         ></div>
      </div>

      <SnapSection id="hero" className="bg-white">
        <Hero onInvestorClick={onInvestorClick} onProfileClick={onProfileClick} />
      </SnapSection>
      
      <SnapSection id="snapshot">
        <Snapshot onProfileClick={onProfileClick} />
      </SnapSection>
      
      <Suspense fallback={<SectionLoader />}>
        <SnapSection id="the-asset"><TheAsset /></SnapSection>
        <SnapSection id="visual-monopoly"><VisualMonopoly /></SnapSection>
        <SnapSection id="configuration"><Configuration /></SnapSection>
        <SnapSection id="highlights"><ProjectHighlights /></SnapSection>
        <SnapSection id="masterplan"><MasterplanViewer /></SnapSection>
        <SnapSection id="market"><TheMarket /></SnapSection>
        <SnapSection id="showcase"><InclusiveShowcase /></SnapSection>
        <SnapSection id="specs"><ProjectSpecs /></SnapSection>
        <SnapSection id="hotel-summary"><TheHotel /></SnapSection>
        <SnapSection id="rooms"><Rooms onInquiryClick={() => handleOpenBooking('room')} /></SnapSection>
        <SnapSection id="events-summary"><EventsWeddings /></SnapSection>
        <SnapSection id="wedding-focus"><WeddingFocus onRSVPClick={() => handleOpenBooking('wedding')} /></SnapSection>
        <SnapSection id="dining"><Dining /></SnapSection>
        <SnapSection id="wellness"><WellnessExperience /></SnapSection>
        <SnapSection id="amenities"><Amenities /></SnapSection>
        <SnapSection id="operations"><OperationalControl /></SnapSection>
        <SnapSection id="economics"><Economics /></SnapSection>
        <SnapSection id="financials"><Financials /></SnapSection>
        <SnapSection id="risk"><RiskControl /></SnapSection>
        <SnapSection id="exit"><ExitStrategy /></SnapSection>
        <SnapSection id="gallery"><Gallery /></SnapSection>
        <SnapSection id="experiences"><Experiences /></SnapSection>
        <SnapSection id="offers"><Offers onActionClick={handleOpenBooking} /></SnapSection>
        <SnapSection id="location"><Location /></SnapSection>
        <SnapSection id="access"><InvestorAccess /></SnapSection>
        <SnapSection id="footer"><Footer /></SnapSection>
        
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