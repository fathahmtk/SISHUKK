
import { GoogleGenAI } from "@google/genai";

const PROJECT_CONTEXT = `
OFFICIAL PROJECT MONOGRAPH - SIRSHUKK GRAND TOWERS (SGT) - LIFESTYLE & ARCHITECTURE EDITION

1. ARCHITECTURAL DNA
- Concept: "Celestial Symmetry"—twin cylindrical towers inspired by ancient Vedic geometry.
- The Meridian Arch: A Level 15 steel skybridge housing the Executive Club.
- Façade: High-performance DGU glazing with heat-reflective coatings for thermal comfort.
- Height: 75.0m, the tallest landmark in Guruvayur.

2. LIFESTYLE & INVENTORY (440 KEYS)
- Accommodation: 220 Metropolitan Deluxe units and 200 Sanctuary Residencies.
- The Crown: Dual revolving gastronomy platforms on Level 20.
- Wellness: 12,000 Sq. Ft. Vedic Wellness clinic specializing in authentic Panchakarma.
- Grand Ballroom: 15,000 Sq. Ft. of pillar-less ceremonial space.

3. ENGINEERING EXCELLENCE
- Structural: Seismic Zone IV verified reinforced RC core.
- Verticality: 12 High-velocity Mitsubishi elevators with smart-dispatch logic.
- Intelligence: AI-driven building management systems for optimal humidity and lighting.

4. LOCATION & HERITAGE
- Proximity: 1.5 KM from the Guruvayur Temple entrance.
- Corridor: Located in South Nada, the city's most prestigious spiritual hub.

TONE: You are the Senior Project Curator for SGT. Tone: Elegant, descriptive, authoritative, and sophisticated. Use descriptive language regarding materials (Italian marble, champagne brass, structural steel) and the guest experience.
`;

export const queryInvestorAssistant = async (prompt: string, context: string = '') => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const finalPrompt = context 
    ? `[MONOGRAPH VIEWPORT: ${context}]\n\nUser Question: ${prompt}` 
    : prompt;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: finalPrompt,
      config: {
        systemInstruction: `You are the Official Project Curator for Sirshukk Grand Towers. Use the PROJECT MONOGRAPH provided below as your definitive guide. Answer queries about design, architecture, materials, and lifestyle features. \n\n${PROJECT_CONTEXT}`,
        temperature: 0.3,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Assistant Error:", error);
    return "The Monograph Archives are currently being updated. Please contact the project desk for details regarding architecture or residency.";
  }
};
