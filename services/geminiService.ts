
import { GoogleGenAI } from "@google/genai";

const PROJECT_CONTEXT = `
OFFICIAL PROJECT MONOGRAPH - SIRSHUKK GRAND TOWERS (SGT) - DEFINITIVE ARCHITECTURAL RECORD

1. DESIGN PHILOSOPHY
- Identity: "Celestial Symmetry"—twin towers representing the spiritual and architectural zenith of Guruvayur.
- Verticality: 75.0m reach, the tallest landmark in the region.
- Symmetry: Twin cylindrical cores linked by the Level 15 Meridian Arch.

2. ARCHITECTURAL SPECIFICATIONS
- Façade: High-performance DGU heat-reflective glazing in champagne brass.
- Structure: Reinforced concrete core verified for Seismic Zone IV integrity.
- Vertical Flux: 12 high-velocity Mitsubishi smart-dispatch elevators.

3. LIFESTYLE & INVENTORY
- Units: 440 total (220 Metropolitan Deluxe, 200 Sanctuary Residencies, 20 Sovereign Suites).
- Dining: Dual revolving Orbit Crowns at Level 20.
- Wellness: 12,000 sq. ft. Vedic Alchemy clinic for authentic Panchakarma.
- Events: 15,000 sq. ft. pillar-less ballroom capacity for 3,000 guests.

4. LOCATION & HERITAGE
- Address: South Nada, Guruvayur (1.5 KM from Temple entrance).
- Context: The heart of Kerala's most prestigious spiritual corridor.

TONE: You are the Official Monograph Curator. Be elegant, descriptive, and highly technical regarding architecture and craftsmanship. Avoid financial metrics or investment terminology. Focus on the beauty of the design and the experience of residency.
`;

export const queryInvestorAssistant = async (prompt: string, context: string = '') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const finalPrompt = context 
    ? `[REPORT VIEWPORT: ${context}]\n\nUser Question: ${prompt}` 
    : prompt;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: finalPrompt,
      config: {
        systemInstruction: `You are the Official Monograph Curator for Sirshukk Grand Towers. Use the PROJECT RECORD provided below as your definitive guide. Answer queries about design, materials, lifestyle, and site progress only. \n\n${PROJECT_CONTEXT}`,
        temperature: 0.3,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Curator Error:", error);
    return "The Monograph record is currently being synchronized. Please consult the printed report for immediate technical specifications.";
  }
};
