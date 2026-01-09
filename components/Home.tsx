import React, { useState, Suspense, lazy, useEffect, useRef } from 'react';
import Hero from './Hero.tsx';

// Fully Editorial Report Chapters with High Fidelity Imagery
const Snapshot = lazy(() => import('./Snapshot.tsx'));
const VisualMonopoly = lazy(() => import('./VisualMonopoly.tsx'));
const TheAsset = lazy(() => import('./TheAsset.tsx'));
const TheMarket = lazy(() => import('./TheMarket.tsx'));
const Connectivity = lazy(() => import('./Connectivity.tsx'));
const MasterplanViewer = lazy(() => import('./MasterplanViewer.tsx'));
const TheHotel = lazy(() => import('./TheHotel.tsx'));
const EventsWeddings = lazy(() => import('./EventsWeddings.tsx'));
const Dining = lazy(() => import('./Dining.tsx'));
const WellnessExperience = lazy(() => import('./WellnessExperience.tsx'));
const Economics = lazy(() => import('./Economics.tsx'));
const RiskControl = lazy(() => import('./RiskControl.tsx'));
const ExitStrategy = lazy(() => import('./ExitStrategy.tsx'));
const Footer = lazy(() => import('./Footer.tsx'));

const SectionLoader = () => (
  <div className="flex flex-col items-center justify-center h-dv w-full bg-[#05070A] z-50">
    <div className="relative w-24 h-24 mb-8">
      <div className="absolute inset-0 border-2 border-brass-400/10 rounded-full"></div>
      <div className="absolute inset-0 border-t-2 border-brass-400 rounded-full animate-spin"></div>
    </div>
    <div className="text-brass-400 text-[10px] font-black uppercase tracking-[0.8em] animate-pulse">Assembling Monograph...</div>
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} className="snap-start w-full h-dv relative overflow-hidden bg-[#05070A] shrink-0">
      <div className={`h-full w-full transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isVisible ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-16 scale-[1.05] blur-xl'}`}>
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
    { id: 'hero', label: 'Title', icon: '00' },
    { id: 'snapshot', label: 'Evidence', icon: '01' },
    { id: 'monopoly', label: 'Silhouette', icon: '02' },
    { id: 'thesis', label: 'Thesis', icon: '03' },
    { id: 'market', label: 'Engine', icon: '04' },
    { id: 'connectivity', label: 'Flux', icon: '05' },
    { id: 'masterplan', label: 'BIM', icon: '06' },
    { id: 'hotel', label: 'Inventory', icon: '07' },
    { id: 'events', label: 'Scale', icon: '08' },
    { id: 'dining', label: 'Peak', icon: '09' },
    { id: 'wellness', label: 'Alchemy', icon: '10' },
    { id: 'economics', label: 'Integrity', icon: '11' },
    { id: 'risk', label: 'Security', icon: '12' },
    { id: 'exit', label: 'Horizon', icon: '13' }
  ];

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const index = chapters.findIndex(c => c.id === entry.target.id);
          if (index !== -1) setActiveChapter(index);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, { threshold: [0.5] });
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
    <main className="flex flex-col relative w-full h-dv overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar bg-[#05070A]">
      
      {/* Side HUD Marker - Technical Overlay */}
      <div className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-[100] hidden 2xl:flex flex-col gap-10 items-center pointer-events-none">
         <div className="w-px h-40 bg-gradient-to-t from-brass-400/50 to-transparent"></div>
         <div className="flex flex-col items-center">
            <span className="text-brass-400/40 text-[8px] font-black uppercase tracking-[0.5em] mb-4">Record_Node</span>
            <div className="text-brass-400 font-serif italic font-black text-3xl rotate-[-90deg] translate-y-14 select-none whitespace-nowrap drop-shadow-premium">
               RECORD_{chapters[activeChapter].icon}
            </div>
         </div>
         <div className="w-px h-40 bg-gradient-to-b from-brass-400/50 to-transparent mt-24"></div>
      </div>

      {/* Progress Navigation HUD */}
      <div className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-6 items-end hidden lg:flex pointer-events-none">
        <div className="flex flex-col gap-5">
           {chapters.map((chapter, i) => (
             <button 
               key={chapter.id}
               onClick={() => jumpTo(chapter.id)}
               className="flex items-center gap-6 group pointer-events-auto transition-all duration-700"
             >
               <div className={`flex flex-col items-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 ${activeChapter === i ? 'opacity-40' : ''}`}>
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${activeChapter === i ? 'text-white' : 'text-white/40'}`}>
                    {chapter.label}
                  </span>
               </div>
               <div className={`relative w-2.5 h-2.5 rounded-full border transition-all duration-500 ${activeChapter === i ? 'bg-brass-400 scale-[2.5] shadow-brass-glow border-white/50' : 'bg-white/5 border-white/10 group-hover:bg-brass-400/50 group-hover:scale-150'}`}>
                 {activeChapter === i && <div className="absolute inset-[-8px] bg-brass-400 rounded-full animate-ping opacity-20"></div>}
               </div>
             </button>
           ))}
        </div>
      </div>

      <section id="hero" className="snap-start h-dv w-full shrink-0 relative z-10">
         <Hero onInvestorClick={onInvestorClick} onProfileClick={onProfileClick} />
      </section>
      
      <Suspense fallback={<SectionLoader />}>
        <CinematicChapter id="snapshot"><Snapshot onProfileClick={onProfileClick} /></CinematicChapter>
        <CinematicChapter id="monopoly"><VisualMonopoly /></CinematicChapter>
        <CinematicChapter id="thesis"><TheAsset /></CinematicChapter>
        <CinematicChapter id="market"><TheMarket /></CinematicChapter>
        <CinematicChapter id="connectivity"><Connectivity /></CinematicChapter>
        <CinematicChapter id="masterplan"><MasterplanViewer /></CinematicChapter>
        <CinematicChapter id="hotel"><TheHotel /></CinematicChapter>
        <CinematicChapter id="events"><EventsWeddings /></CinematicChapter>
        <CinematicChapter id="dining"><Dining /></CinematicChapter>
        <CinematicChapter id="wellness"><WellnessExperience /></CinematicChapter>
        <CinematicChapter id="economics"><Economics /></CinematicChapter>
        <CinematicChapter id="risk"><RiskControl /></CinematicChapter>
        <CinematicChapter id="exit"><ExitStrategy /></CinematicChapter>
      </Suspense>
      
      <footer className="snap-start w-full bg-white shrink-0 relative z-20">
         <Footer />
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .h-dv { height: 100vh; height: 100dvh; }
      `}</style>
    </main>
  );
};

export default Home;