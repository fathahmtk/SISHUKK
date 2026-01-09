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
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      <g filter="url(#logo-depth)">
        {/* Symmetrical Twin Tower Icon - Precise recreation of user provided silhouette */}
        
        {/* Base Foundation Arc */}
        <path d="M70 95L30 95C15 95 5 85 5 65V35L20 20V65C20 75 25 80 30 80H70" fill={colors[variant]} opacity="0.4" />
        <path d="M70 95L110 95C125 95 135 85 135 65V35L120 20V65C120 75 115 80 110 80H70" fill={colors[variant]} opacity="0.4" />
        
        {/* Central Spires */}
        <path d="M62 15V80L70 92L78 80V15H62Z" fill={colors[variant]} />
        
        {/* Tower A Columns */}
        <path d="M48 28V80L56 86V28H48Z" fill={colors[variant]} opacity="0.9" />
        <path d="M38 42V80L44 84V42H38Z" fill={colors[variant]} opacity="0.7" />
        <path d="M28 55V80L32 82V55H28Z" fill={colors[variant]} opacity="0.5" />

        {/* Tower B Columns (Symmetrical) */}
        <path d="M92 28V80L84 86V28H92Z" fill={colors[variant]} opacity="0.9" />
        <path d="M102 42V80L96 84V42H102Z" fill={colors[variant]} opacity="0.7" />
        <path d="M112 55V80L108 82V55H112Z" fill={colors[variant]} opacity="0.5" />

        {/* Apex Detail */}
        <path d="M70 98L64 90H76L70 98Z" fill={colors[variant]} />
      </g>
    </svg>
  );
};

export default Logo;