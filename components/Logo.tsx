
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'gold' | 'silver' | 'white';
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", variant = 'gold' }) => {
  const colors = {
    gold: "url(#gold-grad-final-v2)",
    silver: "url(#silver-grad-final-v2)",
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
        <linearGradient id="gold-grad-final-v2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f1e2c1" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8c6d1f" />
        </linearGradient>
        <linearGradient id="silver-grad-final-v2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="50%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
      </defs>
      {/* High-Precision Symmetrical Geometric Wing Concept */}
      <g transform="translate(50, 50) scale(0.92) translate(-50, -50)">
        {/* Left Side: 4 Rising Symmetrical Bars */}
        <path d="M41 40V72L48 81V46L41 40Z" fill={colors[variant]} opacity="1" />
        <path d="M33 33V68L39 76V40L33 33Z" fill={colors[variant]} opacity="0.85" />
        <path d="M25 26V64L31 71V33L25 26Z" fill={colors[variant]} opacity="0.65" />
        <path d="M17 19V60L23 66V26L17 19Z" fill={colors[variant]} opacity="0.45" />
        
        {/* Right Side: 4 Rising Symmetrical Bars */}
        <path d="M59 40V72L52 81V46L59 40Z" fill={colors[variant]} opacity="1" />
        <path d="M67 33V68L61 76V40L67 33Z" fill={colors[variant]} opacity="0.85" />
        <path d="M75 26V64L69 71V33L75 26Z" fill={colors[variant]} opacity="0.65" />
        <path d="M83 19V60L77 66V26L83 19Z" fill={colors[variant]} opacity="0.45" />
        
        {/* Central Vertical Spine / V-Point Bridge */}
        <path d="M50 85L46 78V54L50 57L54 54V78L50 85Z" fill={colors[variant]} />
      </g>
    </svg>
  );
};

export default Logo;
