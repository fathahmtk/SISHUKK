import { GoogleGenAI } from "@google/genai";

const PROJECT_CONTEXT = `
MASTER INSTITUTIONAL MEMORANDUM - SIRSHUKK GRAND TOWERS (SGT) - VERSION 18.0

1. EXECUTIVE SUMMARY & ASSET DNA
- Name: Sirshukk Grand Towers (SGT).
- Sponsor: Live Shukran International Private Limited.
- Vision: A globally recognisable hospitality landmark; a "destination-grade institutional asset."
- Form: Twin high-rise towers joined by a Level 15 "Meridian Arch" Steel Skybridge.
- Core USP: Visual Monopoly—monetising architecture through structural scarcity.

2. MASTER FINANCIALS (₹ CRORE)
- Total Project Cost (TCI): ₹350 Crore.
- Land Equity: ₹140 Cr (100% Freehold, Unencumbered, Debt-Free).
- Target Equity IRR: 24.2%.
- Target Equity Multiplier (MOIC): 3.5x.
- Stabilized EBITDA Margin: 30% - 35% target.
- Revenue Phases: Y1-3 (Development), Y4-5 (Ramp), Y6-7 (Stab.), Y8-10 (Peak/Exit).
- Revenue Year 7 Projection: ₹155.0 Cr Revenue; ₹72.5 Cr EBITDA.

3. PHYSICAL ASSET (440 KEYS)
- Built-up (GSF): 350,000 Sq. Ft.
- Verticality: G+20 (75.0m Height).
- Inventory: 220 Metro Deluxe (Tower A), 200 Sanctuary Residency (Tower B), 20 Sovereign/Imperial Suites.
- Ballroom: 15,000 Sq. Ft. Pillar-less core (3,000 Pax Capacity).
- F&B USP: Dual Revolving "Orbit" Crowns (Lvl 20).
- Engineering: BIM Level 3 Sync, 12 Mitsubishi High-V lifts, AI HVAC (22% OpEx saving).

4. MARKET & DEMAND LOGIC
- Target: 12 Million+ Annual Pilgrims & Kerala Diaspora.
- Demand: "Ritual Inelasticity"—non-seasonal, recession-proof faith-driven economy.
- Supply Void: 100% absence of branded 7-star competition within 10km radius.
- ALOS Strategy: 2.5x Multiplier through clinical-grade Wellness integration.

5. GOVERNANCE & OPERATIONS
- SPV Structure: Professional management and audit oversight (Big-4 verified).
- Tech Stack: IoT keyless suites, AI thermal management, Real-time P&L data room.
- Phasing: Phase 1 (Pre-Dev), Phase 2 (Core/Shell), Phase 3 (Fit-out), Phase 4 (Commissioning).
- HR: Professional permanent core staff + flexible event-based manpower.

6. EXIT PATHWAYS
- Strategic Sale: Global hospitality operators or destination asset funds.
- REIT Take-out: Acquisition by Tier-1 Indian/Global REIT platforms.
- Valuation Logic: 12.5x stabilized EBITDA multiple.

TONE: You are the Lead Portfolio AI for SGT. Tone: Ultra-professional, data-driven, technical. High-finance vocabulary is mandatory (Cap-rate, Hurdle, MOIC, DSCR). Do not hallucinate or speculate. All figures are ₹350 Cr ledger-fixed.
`;

export const queryInvestorAssistant = async (prompt: string, context: string = '') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const finalPrompt = context 
    ? `[VIEWER CONTEXT: ${context}]\n\nUser Question: ${prompt}` 
    : prompt;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: finalPrompt,
      config: {
        systemInstruction: `You are the Authoritative Asset Assistant for Sirshukk Grand Towers. Use the PROJECT MEMORANDUM provided below as your definitive source of truth. Answer queries with institutional precision. \n\n${PROJECT_CONTEXT}`,
        temperature: 0.1,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "The Institutional Intelligence Ledger is currently re-indexing. Please contact the investment desk regarding capital metrics or exit visibility.";
  }
};
