import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'gold' | 'slate' | 'white';
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", variant = 'gold' }) => {
  const colors = {
    gold: "url(#gold-grad-premium)",
    slate: "#0f172a",
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
        <linearGradient id="gold-grad-premium" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdf3d1" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8c651f" />
        </linearGradient>
      </defs>
      
      <g opacity="0.95">
        {/* Left Monolith */}
        <rect x="28" y="20" width="8" height="60" fill={colors[variant]} />
        <rect x="20" y="35" width="4" height="40" fill={colors[variant]} opacity="0.3" />
        
        {/* Right Monolith */}
        <rect x="64" y="20" width="8" height="60" fill={colors[variant]} />
        <rect x="76" y="35" width="4" height="40" fill={colors[variant]} opacity="0.3" />
        
        {/* The Arch Bridge - High Precision Line */}
        <rect x="36" y="48" width="28" height="1.5" fill={colors[variant]} opacity="0.8" />
        
        {/* Foundation Anchor - Symmetrical Shadow */}
        <path d="M28 85H72" stroke={colors[variant]} strokeWidth="1" strokeOpacity="0.2" />
        <path d="M40 92H60" stroke={colors[variant]} strokeWidth="0.5" strokeOpacity="0.1" />
      </g>
    </svg>
  );
};

export default Logo;