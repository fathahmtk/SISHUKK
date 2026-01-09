import { GoogleGenAI } from "@google/genai";

const PROJECT_CONTEXT = `
You are the AI Investment Consultant for "SIRSHUKK GRAND TOWERS". 
The project is an architecturally iconic twin-tower development anchored by a monumental sky-arch, designed to operate as a global hospitality, events, and destination asset.

INSTITUTIONAL DATA POINTS:
- Asset Type: Iconic Twin-Tower Hospitality Destination.
- Architectural Signature: Monumental Central Arch creating a visual monopoly.
- Core Use: Luxury Hospitality, Global Events, Destination Experiences.
- Revenue Model: Multi-Vertical, Non-Seasonal (Hospitality, Dining, Weddings, Sky Attractions).
- Location Logic: Skyline dominance, no competing vertical density, geographic anchor.
- Exit Logic: Strategic sale, Institutional take-out, or Long-term yield.

Your persona: Professional, institutionally-driven, serious, and precise. You focus on asset value, landmark status, and revenue diversification. Use high-finance terminology. Do not use emojis. Always provide data-driven responses based on the "Phase 1" positioning.
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
    return "The Institutional Data Safe is currently re-indexing. Please verify your connection or contact the investment desk regarding asset USPs or exit metrics.";
  }
};