import React, { useState } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const links = [
    { path: '/asset', label: 'Asset' },
    { path: '/market', label: 'Market' },
    { path: '/hotel', label: 'Hotel' },
    { path: '/economics', label: 'Economics' },
    { path: '/risk', label: 'Risk' },
    { path: '/exit', label: 'Exit' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-onyx-950/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={handleLinkClick}>
          <div className="w-8 h-8 bg-gold-500 flex items-center justify-center font-serif font-bold text-black text-xl">S</div>
          <div className="block">
            <div className="text-white text-xs font-bold tracking-[0.2em] uppercase">Sirshukk</div>
            <div className="text-gold-500 text-[8px] font-black tracking-[0.3em] uppercase">Grand Towers</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:scale-105 transform duration-300 ${
                location.pathname === link.path ? 'text-gold-500' : 'text-slate-500 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => {
              const el = document.getElementById('investor-access');
              if(el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                // If on a different page, this might need navigation or a global modal trigger
                // For now, we assume user navigates to home first if needed, or we keep it simple
                window.location.href = "/#investor-access";
              }
            }}
            className="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-gold-500 hover:text-black border border-white/10 px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all group"
          >
            <ShieldCheck size={12} className="group-hover:scale-110 transition-transform" />
            <span>Investor Access</span>
          </button>

          <button 
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-onyx-950 border-b border-white/10 p-6 flex flex-col gap-4 animate-fade-in-up lg:hidden shadow-2xl">
           {links.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={handleLinkClick}
              className={`text-sm font-bold uppercase tracking-[0.2em] py-4 border-b border-white/5 last:border-0 ${
                location.pathname === link.path ? 'text-gold-500 pl-4 border-l-2 border-gold-500' : 'text-slate-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button 
            onClick={() => {
               window.location.href = "/#investor-access";
               setIsMobileMenuOpen(false);
            }}
            className="mt-4 flex items-center justify-center gap-2 bg-gold-500 text-onyx-950 px-6 py-4 rounded-lg text-xs font-black uppercase tracking-widest"
          >
            <ShieldCheck size={14} /> Investor Access
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;