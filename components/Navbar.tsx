import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Lock } from 'lucide-react';
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || isInvestorView ? 'bg-luxury-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           <svg className="w-10 h-10 text-gold-400 transition-transform group-hover:scale-105 duration-500" viewBox="0 0 100 100" fill="currentColor">
              <path d="M30 35 L30 75 L40 75 L40 35 L35 25 Z" />
              <path d="M45 25 L45 75 L55 75 L55 25 L50 15 Z" />
              <path d="M60 35 L60 75 L70 75 L70 35 L65 25 Z" />
              <path d="M20 85 Q 50 95 80 85" stroke="currentColor" strokeWidth="2" fill="none" />
           </svg>
           <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-widest text-white leading-none">SIRSHUKK</span>
              <span className="text-[0.6rem] text-gold-400 tracking-[0.4em] uppercase leading-none mt-1">
                {isInvestorView ? 'Investor Portal' : 'Grand Towers'}
              </span>
           </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-xs uppercase tracking-[0.15em] font-medium text-slate-300 hover:text-gold-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 after:transition-all hover:after:w-full"
            >
              {item.label}
            </button>
          ))}
          
          {isInvestorView ? (
             <button 
               onClick={() => onToggleView(false)}
               className="bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2"
             >
               Back to Guest Site
             </button>
          ) : (
            <>
              <button 
                onClick={() => onToggleView(true)}
                className="text-slate-400 hover:text-white text-xs uppercase tracking-widest font-bold flex items-center gap-2 px-4"
              >
                <Lock size={12} /> Investors
              </button>
              <button className="bg-white text-black hover:bg-gold-400 hover:text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2">
                <Calendar size={14} /> Book Your Stay
              </button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-luxury-black border-b border-white/10 p-6 flex flex-col space-y-6 shadow-2xl animate-fade-in-up">
           {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-sm uppercase tracking-widest text-slate-300 hover:text-gold-400 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="border-t border-white/10 pt-6">
            <button 
              onClick={() => {
                onToggleView(!isInvestorView);
                setMobileMenuOpen(false);
              }}
              className="bg-gold-500 text-white w-full py-4 text-sm font-bold uppercase tracking-widest"
            >
              {isInvestorView ? 'Back to Guest Site' : 'Investor Access'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;