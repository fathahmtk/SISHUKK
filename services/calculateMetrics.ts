/**
 * Centralized financial utility for the Sirshukk Grand Towers project.
 * Handles IRR calculations and high-precision financial formatting.
 */

export const calculateMetrics = (adr: number, occupancy: number) => {
  const TOTAL_KEYS = 200;
  const PROJECT_COST = 3500000000; // ₹350 Cr
  const EBITDA_MARGIN = 0.45; // Fixed 45% as per requirements

  const dailyRevenue = TOTAL_KEYS * adr * (occupancy / 100);
  const annualRevenue = dailyRevenue * 365;
  const ebitda = annualRevenue * EBITDA_MARGIN;
  
  // Simplified IRR calculation for front-end visualization
  // Base 5% + variable component based on yield efficiency
  const baseRate = 0.05;
  const yieldEfficiency = ebitda / PROJECT_COST;
  const irr = (baseRate + yieldEfficiency) * 100;

  // Potential exit multiplier (12x EBITDA)
  const exitValue = ebitda * 12;
  const equityMultiplier = exitValue / PROJECT_COST;

  return {
    annualRevenue,
    ebitda,
    irr: irr.toFixed(2),
    equityMultiplier: equityMultiplier.toFixed(2),
  };
};

export const formatINR = (amount: number, compact: boolean = false) => {
  if (compact) {
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)} L`;
  }
  
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};
