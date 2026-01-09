import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'gold' | 'slate' | 'white';
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", variant = 'gold' }) => {
  const colors = {
    gold: "url(#gold-grad-platinum)",
    slate: "#1e293b",
    white: "#FFFFFF"
  };

  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id="gold-grad-platinum" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7e8c3" />
          <stop offset="45%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8c6d1f" />
        </linearGradient>
        <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
           <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
           <feOffset dx="0" dy="2" result="offsetblur" />
           <feComponentTransfer>
             <feFuncA type="linear" slope="0.15" />
           </feComponentTransfer>
           <feMerge>
             <feMergeNode />
             <feMergeNode in="SourceGraphic" />
           </feMerge>
        </filter>
      </defs>
      
      <g filter="url(#logoShadow)">
        {/* Platinum Symmetrical Concept: Two Vertical Monoliths connected by an Invisible Arch */}
        {/* Left Tower Elements */}
        <path d="M35 30V80L44 86V34L35 30Z" fill={colors[variant]} />
        <path d="M24 38V76L31 81V42L24 38Z" fill={colors[variant]} opacity="0.6" />
        
        {/* Right Tower Elements */}
        <path d="M65 30V80L56 86V34L65 30Z" fill={colors[variant]} />
        <path d="M76 38V76L69 81V42L76 38Z" fill={colors[variant]} opacity="0.6" />
        
        {/* The Meridian Point (Symbolic Arch Core) */}
        <path d="M48 55L50 58L52 55V75L50 78L48 75V55Z" fill={colors[variant]} />
        
        {/* The Foundation Anchor */}
        <path d="M24 85L50 92L76 85V82L50 89L24 82V85Z" fill={colors[variant]} opacity="0.4" />
      </g>
    </svg>
  );
};

export default Logo;