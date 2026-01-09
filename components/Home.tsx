import React, { useState, Suspense, lazy, useEffect, useRef } from 'react';
import Hero from './Hero.tsx';

// Lazy Load Sections
const Snapshot = lazy(() => import('./Snapshot.tsx'));
const Configuration = lazy(() => import('./Configuration.tsx'));
const TheAsset = lazy(() => import('./TheAsset.tsx'));
const TheMarket = lazy(() => import('./TheMarket.tsx'));
const TheHotel = lazy(() => import('./TheHotel.tsx'));
const EventsWeddings = lazy(() => import('./EventsWeddings.tsx'));
const Dining = lazy(() => import('./Dining.tsx'));
const WellnessExperience = lazy(() => import('./WellnessExperience.tsx'));
const Economics = lazy(() => import('./Economics.tsx'));
const RiskControl = lazy(() => import('./RiskControl.tsx'));
const ExitStrategy = lazy(() => import('./ExitStrategy.tsx'));
const BookingModal = lazy(() => import('./BookingModal.tsx'));
const Footer = lazy(() => import('./Footer.tsx'));

const SectionLoader = () => (
  <div className="flex flex-col items-center justify-center h-screen w-full bg-slate-950 z-50">
    <div className="relative w-32 h-32 mb-12">
      <div className="absolute inset-0 border border-gold-100/10 rounded-full"></div>
      <div className="absolute inset-0 border-t-2 border-gold-50 rounded-full animate-spin"></div>
    </div>
    <div className="text-gold-500 text-[10px] font-black uppercase tracking-[1em] animate-pulse">Syncing Sector...</div>
  </div>
);

const CinematicSection = ({ children, id, className = "" }: { children?: React.ReactNode; id?: string; className?: string }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasEntered(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} className={`snap-start w-full h-screen relative overflow-hidden bg-slate-950 border-b border-white/5 ${className}`}>
      <div className={`h-full w-full transition-all duration-[2s] ease-out transform ${hasEntered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-105'}`}>
        {children}
      </div>
    </section>
  );
};

interface HomeProps {
  onInvestorClick?: () => void;
  onProfileClick?: () => void;
}

const Home: React.FC<HomeProps> = ({ onInvestorClick, onProfileClick }) => {
  const [activeSection, setActiveSection] = useState(0);
  
  const sections = [
    { id: 'hero', label: 'Overview' },
    { id: 'snapshot', label: 'Evidence' },
    { id: 'config', label: 'Structure' },
    { id: 'the-asset', label: 'Thesis' },
    { id: 'the-market', label: 'Market' },
    { id: 'the-hotel', label: 'Suites' },
    { id: 'events-summary', label: 'Events' },
    { id: 'dining', label: 'Orbit' },
    { id: 'wellness', label: 'Wellness' },
    { id: 'economics', label: 'Economics' },
    { id: 'risk', label: 'Risk' },
    { id: 'exit', label: 'Exit' }
  ];

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.findIndex(s => s.id === entry.target.id);
          if (index !== -1) setActiveSection(index);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 });
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex flex-col relative w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar bg-slate-950">
      
      {/* Cinematic Sidebar */}
      <div className="fixed right-12 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-10 items-end hidden 2xl:flex pointer-events-none">
        <div className="space-y-6">
           {sections.map((s, i) => (
             <button 
               key={s.id}
               onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
               className="flex items-center gap-6 group pointer-events-auto transition-all duration-700"
             >
               <span className={`text-[8px] font-black uppercase tracking-[0.4em] transition-all duration-500 ${activeSection === i ? 'text-white' : 'text-white/20 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                 {s.label}
               </span>
               <div className={`relative w-2 h-2 rounded-full transition-all duration-500 ${activeSection === i ? 'bg-gold-500 scale-[2] shadow-gold-glow' : 'bg-white/20 group-hover:bg-gold-500/50 group-hover:scale-150'}`}>
                 {activeSection === i && <div className="absolute inset-0 bg-gold-400 rounded-full animate-ping opacity-30"></div>}
               </div>
             </button>
           ))}
        </div>
      </div>

      <CinematicSection id="hero"><Hero onInvestorClick={onInvestorClick} onProfileClick={onProfileClick} /></CinematicSection>
      <CinematicSection id="snapshot"><Suspense fallback={<SectionLoader />}><Snapshot onProfileClick={onProfileClick} /></Suspense></CinematicSection>
      <CinematicSection id="config"><Suspense fallback={<SectionLoader />}><Configuration /></Suspense></CinematicSection>
      <CinematicSection id="the-asset"><Suspense fallback={<SectionLoader />}><TheAsset /></Suspense></CinematicSection>
      <CinematicSection id="the-market"><Suspense fallback={<SectionLoader />}><TheMarket /></Suspense></CinematicSection>
      <CinematicSection id="the-hotel"><Suspense fallback={<SectionLoader />}><TheHotel /></Suspense></CinematicSection>
      <CinematicSection id="events-summary"><Suspense fallback={<SectionLoader />}><EventsWeddings /></Suspense></CinematicSection>
      <CinematicSection id="dining"><Suspense fallback={<SectionLoader />}><Dining /></Suspense></CinematicSection>
      <CinematicSection id="wellness"><Suspense fallback={<SectionLoader />}><WellnessExperience /></Suspense></CinematicSection>
      <CinematicSection id="economics"><Suspense fallback={<SectionLoader />}><Economics /></Suspense></CinematicSection>
      <CinematicSection id="risk"><Suspense fallback={<SectionLoader />}><RiskControl /></Suspense></CinematicSection>
      <CinematicSection id="exit"><Suspense fallback={<SectionLoader />}><ExitStrategy /></Suspense></CinematicSection>
      
      <footer className="snap-start w-full bg-slate-950 border-t border-white/5 py-40">
         <Footer />
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
};

export default Home;