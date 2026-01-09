import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'gold' | 'slate' | 'white';
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", variant = 'gold' }) => {
  const colors = {
    gold: "url(#gold-master-gradient)",
    slate: "#0f172a",
    white: "#FFFFFF"
  };

  return (
    <svg 
      viewBox="0 0 140 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id="gold-master-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdf3d1" />
          <stop offset="40%" stopColor="#D4AF37" />
          <stop offset="60%" stopColor="#b88a2a" />
          <stop offset="100%" stopColor="#634719" />
        </linearGradient>
        <filter id="logo-depth" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      <g filter="url(#logo-depth)">
        {/* Foundation Base */}
        <path d="M10 90H130V95H10V90Z" fill={colors[variant]} opacity="0.3" />
        
        {/* Main Tower A Shell */}
        <path d="M30 85V30L45 20V85H30Z" fill={colors[variant]} />
        <path d="M45 85V20L60 30V85H45Z" fill={colors[variant]} opacity="0.8" />
        
        {/* Main Tower B Shell (Symmetrical) */}
        <path d="M110 85V30L95 20V85H110Z" fill={colors[variant]} />
        <path d="M95 85V20L80 30V85H95Z" fill={colors[variant]} opacity="0.8" />
        
        {/* The Meridian Arch Link */}
        <path d="M60 35H80V40H60V35Z" fill={colors[variant]} />
        <path d="M60 40L70 45L80 40V42L70 47L60 42V40Z" fill={colors[variant]} opacity="0.6" />

        {/* Central Spire Node */}
        <path d="M68 15L70 10L72 15V85H68V15Z" fill={colors[variant]} opacity="0.9" />
        
        {/* Vertical Accents */}
        <path d="M35 35H40V80H35V35Z" fill="#FFFFFF" opacity="0.2" />
        <path d="M100 35H105V80H100V35Z" fill="#FFFFFF" opacity="0.2" />
      </g>
    </svg>
  );
};

export default Logo;