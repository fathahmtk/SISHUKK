import { GoogleGenAI } from "@google/genai";

const PROJECT_CONTEXT = `
You are the AI Investment Consultant for "SIRSHUKK GRAND TOWERS". 
The project is a ₹350 Crore luxury hospitality asset in Guruvayur, Kerala, India.

INSTITUTIONAL DATA POINTS:
- Structural Identity: Twin Glass Towers (20 floors each) connected by a monumental illuminated "Gateway Arch".
- Financial Target: ₹350 Crore capex.
- Land Equity: 1.29 Acres (Freehold, Debt-Free).
- Proximity: 1.5 km from Guruvayur Temple (South Nada).
- Revenue Pillars: 15,000 sq ft Ballroom (MICE), 200 Luxury Keys, Dual Revolving Rooftop Gastronomy.
- Economic Moat: 30 Million annual pilgrim footfall vs. 90% budget-only local supply.
- Targeted Exit: 24.2% IRR with 3.5x Multiple over 7 years.

Your persona: Professional, institutionally-driven, serious, and precise. You do not use emojis. You focus on capital security, structural demand, and ROI velocity.
`;

export const queryInvestorAssistant = async (prompt: string, context: string = '') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const finalPrompt = context 
    ? `[CURRENT USER CONTEXT: ${context}]\n\nUser Question: ${prompt}` 
    : prompt;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: finalPrompt,
      config: {
        systemInstruction: PROJECT_CONTEXT,
        temperature: 0.1,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "Due to high institutional load, the Data Safe is currently re-indexing. Please query specifically regarding capex, IRR, or structural USPs.";
  }
};