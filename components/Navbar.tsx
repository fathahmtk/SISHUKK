import React, { useState, useEffect } from 'react';
import { Menu, X, Lock, ChevronRight } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  isInvestorView: boolean;
  onToggleView: (isInvestor: boolean) => void;
}

const guestNavItems: NavItem[] = [
  { label: 'Rooms', id: 'rooms' },
  { label: 'Dining', id: 'dining' },
  { label: 'Weddings', id: 'weddings' },
  { label: 'Experiences', id: 'experiences' },
  { label: 'Offers', id: 'offers' },
  { label: 'Contact', id: 'location' },
];

const investorNavItems: NavItem[] = [
  { label: 'Overview', id: 'overview' },
  { label: 'Location', id: 'location' },
  { label: 'Facilities', id: 'facilities' },
  { label: 'Revenue', id: 'revenue' },
  { label: 'Capex', id: 'capex' },
  { label: 'Exit', id: 'exit' },
];

const Navbar: React.FC<NavbarProps> = ({ isInvestorView, onToggleView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = isInvestorView ? investorNavItems : guestNavItems;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled || isInvestorView || mobileMenuOpen ? 'bg-black/80 backdrop-blur-xl shadow-2xl border-b border-white/5 py-3' : 'bg-gradient-to-b from-black/90 to-transparent py-6 border-b border-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        {/* Logo Section */}
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           <div className="relative w-10 h-10 flex items-center justify-center">
             <div className="absolute inset-0 border border-gold-500/30 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
             <div className="absolute inset-0 border border-white/20 rotate-0 group-hover:rotate-45 transition-transform duration-700 delay-75"></div>
             <span className="font-serif text-xl text-gold-400">S</span>
           </div>
           <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-[0.1em] text-white leading-none">SHIRSHUKK</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="h-px w-4 bg-gold-500"></span>
                <span className="text-[0.55rem] text-gold-400 tracking-[0.3em] uppercase leading-none">
                  {isInvestorView ? 'Investor Portal' : 'Grand Towers'}
                </span>
              </div>
           </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-gold-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </button>
          ))}
          
          <div className="w-px h-8 bg-white/10 mx-4"></div>

          {isInvestorView ? (
             <button 
               onClick={() => onToggleView(false)}
               className="bg-white/5 border border-white/20 text-white hover:bg-white hover:text-black px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 rounded"
             >
               Guest View
             </button>
          ) : (
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onToggleView(true)}
                className="text-slate-500 hover:text-gold-400 text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-1 transition-colors"
              >
                <Lock size={10} /> Investors
              </button>
              <button className="bg-gold-500 text-white hover:bg-white hover:text-black px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-gold-500/10 rounded">
                Book Stay <ChevronRight size={12} />
              </button>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white p-2 hover:text-gold-400 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay - Premium Glass */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-md z-30 transition-opacity duration-500 lg:hidden ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setMobileMenuOpen(false)}></div>

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-black/90 backdrop-blur-2xl border-l border-white/10 z-40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} pt-28 px-8 flex flex-col`}>
         
         {/* Decorative Background */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

         <div className="flex flex-col space-y-6 relative z-10 flex-1">
           {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left group flex items-center justify-between border-b border-white/5 pb-4"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span className="font-serif text-2xl text-white group-hover:text-gold-400 transition-colors">{item.label}</span>
              <ChevronRight size={16} className="text-slate-600 group-hover:text-gold-400 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
            </button>
          ))}
         </div>

         <div className="py-8 space-y-4 relative z-10 mt-auto">
            <button className="w-full bg-gold-500 text-white py-4 text-xs font-bold uppercase tracking-widest rounded hover:bg-white hover:text-black transition-colors shadow-lg shadow-gold-500/10">
                Book Your Stay
            </button>
            <button 
              onClick={() => {
                onToggleView(!isInvestorView);
                setMobileMenuOpen(false);
              }}
              className="w-full bg-white/5 border border-white/10 text-slate-300 py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded hover:bg-white/10 transition-colors"
            >
              {isInvestorView ? 'Return to Guest Site' : <><Lock size={12} /> Investor Access</>}
            </button>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;