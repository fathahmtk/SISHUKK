import React, { useState, Suspense, lazy, useEffect, useRef } from 'react';
import Hero from './Hero.tsx';

// Fully Cinematized Chapters
const Snapshot = lazy(() => import('./Snapshot.tsx'));
const TheAsset = lazy(() => import('./TheAsset.tsx'));
const TheMarket = lazy(() => import('./TheMarket.tsx'));
const TheHotel = lazy(() => import('./TheHotel.tsx'));
const EventsWeddings = lazy(() => import('./EventsWeddings.tsx'));
const Dining = lazy(() => import('./Dining.tsx'));
const WellnessExperience = lazy(() => import('./WellnessExperience.tsx'));
const Economics = lazy(() => import('./Economics.tsx'));
const RiskControl = lazy(() => import('./RiskControl.tsx'));
const ExitStrategy = lazy(() => import('./ExitStrategy.tsx'));
const VisualMonopoly = lazy(() => import('./VisualMonopoly.tsx'));
const MasterplanViewer = lazy(() => import('./MasterplanViewer.tsx'));
const Footer = lazy(() => import('./Footer.tsx'));

const SectionLoader = () => (
  <div className="flex flex-col items-center justify-center h-screen w-full bg-slate-950 z-50">
    <div className="relative w-40 h-40 mb-16">
      <div className="absolute inset-0 border-2 border-gold-500/10 rounded-full"></div>
      <div className="absolute inset-0 border-t-2 border-gold-500 rounded-full animate-spin"></div>
      <div className="absolute inset-4 border border-white/5 rounded-full animate-pulse"></div>
    </div>
    <div className="text-gold-500 text-[11px] font-black uppercase tracking-[1.2em] animate-pulse">Synchronizing Sector...</div>
  </div>
);

const CinematicChapter = ({ children, id }: { children?: React.ReactNode; id?: string }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} className="snap-start w-full h-screen relative overflow-hidden bg-slate-950 border-b border-white/5">
      <div className={`h-full w-full transition-all duration-[2.5s] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isVisible ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-32 scale-105 blur-xl'}`}>
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
  const [activeChapter, setActiveChapter] = useState(0);
  
  const chapters = [
    { id: 'hero', label: 'Overview', icon: '00' },
    { id: 'snapshot', label: 'Evidence', icon: '01' },
    { id: 'monopoly', label: 'Monopoly', icon: '02' },
    { id: 'thesis', label: 'Thesis', icon: '03' },
    { id: 'market', label: 'Market', icon: '04' },
    { id: 'masterplan', label: 'Masterplan', icon: '05' },
    { id: 'hotel', label: 'Inventory', icon: '06' },
    { id: 'events', label: 'Revenue', icon: '07' },
    { id: 'dining', label: 'Orbit', icon: '08' },
    { id: 'wellness', label: 'Alchemy', icon: '09' },
    { id: 'economics', label: 'Yield', icon: '10' },
    { id: 'risk', label: 'Hedge', icon: '11' },
    { id: 'exit', label: 'Liquidity', icon: '12' }
  ];

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = chapters.findIndex(c => c.id === entry.target.id);
          if (index !== -1) setActiveChapter(index);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 });
    chapters.forEach(c => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex flex-col relative w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar bg-slate-950">
      
      {/* Global Navigation HUD (Rail) */}
      <div className="fixed right-12 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-12 items-end hidden 2xl:flex pointer-events-none">
        <div className="flex flex-col gap-8">
           {chapters.map((chapter, i) => (
             <button 
               key={chapter.id}
               onClick={() => jumpTo(chapter.id)}
               className="flex items-center gap-8 group pointer-events-auto transition-all duration-1000"
             >
               <div className="flex flex-col items-end">
                  <span className={`text-[7px] font-black uppercase tracking-[0.4em] transition-all duration-500 mb-1 ${activeChapter === i ? 'text-gold-500 opacity-100' : 'text-white/20 opacity-0 group-hover:opacity-100'}`}>
                    Node {chapter.icon}
                  </span>
                  <span className={`text-[10px] font-black uppercase tracking-[0.5em] transition-all duration-700 ${activeChapter === i ? 'text-white' : 'text-white/10 translate-x-6 group-hover:translate-x-0 group-hover:text-white/40'}`}>
                    {chapter.label}
                  </span>
               </div>
               <div className={`relative w-3 h-3 rounded-full border-2 transition-all duration-700 ${activeChapter === i ? 'bg-gold-500 border-white scale-[1.8] shadow-gold-glow' : 'bg-transparent border-white/10 group-hover:border-gold-500/50 group-hover:scale-125'}`}>
                 {activeChapter === i && <div className="absolute inset-[-4px] bg-gold-500/20 rounded-full animate-ping"></div>}
               </div>
             </button>
           ))}
        </div>
      </div>

      {/* Narrative Sequence */}
      <section id="hero" className="snap-start h-screen w-full">
         <Hero onInvestorClick={onInvestorClick} onProfileClick={onProfileClick} />
      </section>
      
      <Suspense fallback={<SectionLoader />}>
        <CinematicChapter id="snapshot"><Snapshot onProfileClick={onProfileClick} /></CinematicChapter>
        <CinematicChapter id="monopoly"><VisualMonopoly /></CinematicChapter>
        <CinematicChapter id="thesis"><TheAsset /></CinematicChapter>
        <CinematicChapter id="market"><TheMarket /></CinematicChapter>
        <CinematicChapter id="masterplan"><MasterplanViewer /></CinematicChapter>
        <CinematicChapter id="hotel"><TheHotel /></CinematicChapter>
        <CinematicChapter id="events"><EventsWeddings /></CinematicChapter>
        <CinematicChapter id="dining"><Dining /></CinematicChapter>
        <CinematicChapter id="wellness"><WellnessExperience /></CinematicChapter>
        <CinematicChapter id="economics"><Economics /></CinematicChapter>
        <CinematicChapter id="risk"><RiskControl /></CinematicChapter>
        <CinematicChapter id="exit"><ExitStrategy /></CinematicChapter>
      </Suspense>
      
      <footer className="snap-start w-full bg-white">
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