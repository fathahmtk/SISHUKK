import { GoogleGenAI } from "@google/genai";

const PROJECT_CONTEXT = `
MASTER INSTITUTIONAL MEMORANDUM - SIRSHUKK GRAND TOWERS

1. EXECUTIVE OVERVIEW
Sirshukk Grand Towers is a hospitality-led landmark development, conceived as a destination asset rather than a conventional hotel. Defined by its iconic twin-tower configuration and monumental central arch, it creates a visual monopoly in the skyline. The asset targets long-term yield, strong EBITDA margins, and premium exit valuation driven by architectural scarcity.

2. INVESTMENT RATIONALE
- Landmark Asset Classification: Not a city hotel or resort. A destination where architecture functions as a commercial engine.
- Investment Thesis Pillars:
  1. Architectural Scarcity: Non-replicable form factor ensuring valuation insulation.
  2. Diversified Revenue: Rooms, F&B, Weddings, and Landmark Experiences.
  3. High-Margin Event Income: Architectural scale supports premium weddings and ticketed experiences.
  4. Institutional Exit Readiness: Structured for Strategic Sale, REIT inclusion, or Capital Recycling.

3. ASSET CONFIGURATION
- Physical: Twin high-rise towers, Monumental central arch, Elevated crown levels, Grand podium.
- Functional Use: Luxury rooms, Destination dining, Grand wedding venues, Sky-level attractions.

4. MARKET LOGIC
- Dominates the skyline surrounded by low-rise development.
- Visual prominence ensures long-term landmark status.
- Location Strategy: Prioritizes destination appeal and scarcity-driven appreciation.

5. REVENUE MODEL (CRITICAL)
- Rooms & Suites (Anchor): 35–40% of revenue. Baseline stabilizing income. Conservative ramp-up.
- F&B (Destination-Driven): 20–25% of revenue. Attracts non-resident footfall. Premium pricing.
- Weddings & Events (High-Margin Engine): 15–20% of revenue. Disproportionately high EBITDA share. Low variable costs.
- Experiential (Landmark Monetisation): 10–15% of revenue. Sky-decks, ticketed views, brand collaborations. Enhances exit valuation.

6. OPERATING MARGIN
- Target Blended EBITDA: 30–35% at stabilization.
- Driven by high-margin event income and strong fixed-cost absorption.

7. CAPEX FRAMEWORK (INDICATIVE)
- Structural & Core: ~45%
- Architectural Façade & Arch: ~15%
- Interior Luxury Fit-outs: ~20%
- Podium & Landscape: ~10%
- Pre-opening & Contingency: ~10%
- Logic: Front-loaded CapEx to support long-term yield.

8. FINANCIAL HORIZON (10-YEAR)
- Y1-3: Development.
- Y4-5: Operational Ramp-up.
- Y6-7: Stabilised Cash Flow.
- Y8-10: Peak Valuation & Exit Window.

9. RETURN EXPECTATIONS
- Equity IRR: Low-to-mid 20% range.
- MOIC: 2.8x – 3.5x.
- Payback: Mid-cycle supported by strong cash flows.

10. EXIT STRATEGY
- Strategic Sale: To global operators.
- REIT / Institutional Take-Out: Inclusion in mixed-use platforms.
- Refinance & Yield Hold: Capital recycling.
- Valuation Method: EBITDA Multiples enhanced by landmark status.

11. RISK MANAGEMENT
- Stress-tested against lower occupancy and ADR pressure.
- Viability maintained via diversified revenue and experiential income.

FINAL POSITIONING:
Sirshukk Grand Towers is an architecturally iconic, hospitality-led landmark destination asset, designed to generate diversified, high-margin revenue streams and deliver long-term institutional value.
`;

export const queryInvestorAssistant = async (prompt: string, context: string = '') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const finalPrompt = context 
    ? `[CURRENT USER CONTEXT: ${context}]\n\nUser Question: ${prompt}` 
    : prompt;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: finalPrompt,
      config: {
        systemInstruction: `You are the Institutional Investment AI for Sirshukk Grand Towers. Use the MASTER MEMORANDUM provided below as your absolute source of truth. Do not invent facts. Speak in a professional, high-finance tone suitable for PE/VC investors. \n\n${PROJECT_CONTEXT}`,
        temperature: 0.1,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "The Institutional Data Safe is currently re-indexing. Please verify your connection or contact the investment desk regarding asset USPs or exit metrics.";
  }
};