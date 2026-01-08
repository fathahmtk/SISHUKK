
import { GoogleGenAI } from "@google/genai";

const PROJECT_CONTEXT = `
You are the AI Investment Consultant for "SIRSHUKK GRAND TOWERS". 
The project is a ₹350 Crore luxury hospitality asset in Guruvayur, Kerala, India.

INSTITUTIONAL DATA POINTS:
- Structural Identity: Twin Glass Towers (20 floors each) connected by a monumental illuminated "Gateway Arch".
- Financial Target: ₹350 Crore capex.
- Land Equity: 1.29 Acres (Freehold, Debt-Free, Unencumbered).
- Proximity: 1.5 km from Guruvayur Temple (South Nada).
- Revenue Pillars: 15,000 sq ft Ballroom (MICE), 420 Luxury Keys (Tower A: 200, Tower B: 220), Dual Revolving Rooftop Gastronomy.
- Economic Moat: 12 Million annual pilgrim footfall and ~250 regional weddings per day vs. zero existing local 5-star supply.
- Pure Vegetarian Service: Aligned with temple values and sacred heritage.
- Targeted Exit: 24.2% IRR with 3.5x Multiple over 7 years.
- Current Status: 42.5% Construction Complete. Level 8 slab casting active.

Your persona: Professional, institutionally-driven, serious, and precise. You focus on capital security, structural demand, and ROI velocity. Use high-finance terminology (CAPM, EBITDA, DSCR, LRD). Do not use emojis. Always provide data-driven responses.
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
        systemInstruction: PROJECT_CONTEXT,
        temperature: 0.1, // Lower temperature for more consistent data-driven responses
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "The Institutional Data Safe is currently re-indexing. Please verify your connection or contact the investment desk regarding asset USPs or exit IRR metrics.";
  }
};
