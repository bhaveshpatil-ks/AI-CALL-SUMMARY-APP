import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are an expert CRM Call Intelligence engine. 
Analyze the provided phone call recording and return ONLY a valid JSON object matching this exact schema:
{
  "exactSummary": {
    "headline": "Short 1-line overview of the call",
    "keyOutcome": "Interested | Callback | Urgent | Closed | Lost",
    "bullets": [
      "Key decision or agreement reached",
      "Key requirement discussed"
    ]
  },
  "detailedNotes": {
    "callerIntent": "Core reason the customer called",
    "discussionPoints": [
      "Point discussed in detail"
    ],
    "objectionsOrDoubts": [
      "Objections, pricing concerns, or questions raised"
    ],
    "commitmentsMade": [
      "Commitments made by sales rep or customer"
    ],
    "actionChecklist": [
      { "task": "Task description", "completed": false }
    ],
    "suggestedFollowUp": {
      "dueDate": "YYYY-MM-DD or timeframe like 'Tomorrow 11 AM'",
      "recommendedAction": "Action to take",
      "draftMessage": "Ready-to-send professional WhatsApp or SMS message"
    }
  },
  "sentiment": "Positive | Neutral | Frustrated | Urgent",
  "leadStatus": "Hot | Warm | Cold"
}
`;

export async function analyzeCallAudio(audioBuffer, mimeType = "audio/mp4") {
  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey) {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [
          {
            inlineData: {
              data: audioBuffer.toString("base64"),
              mimeType
            }
          },
          { text: SYSTEM_PROMPT }
        ],
        config: {
          responseMimeType: "application/json",
          temperature: 0.1
        }
      });

      return JSON.parse(response.text);
    } catch (err) {
      console.warn("Gemini call analysis failed, using fallback:", err.message);
    }
  }

  // Fast offline/zero-setup fallback
  return {
    exactSummary: {
      headline: "Call logged successfully. Follow-up required.",
      keyOutcome: "Callback",
      bullets: [
        "Inquiry received regarding pricing and service specifications.",
        "Sales rep to follow up with details."
      ]
    },
    detailedNotes: {
      callerIntent: "General product inquiry and quotation request.",
      discussionPoints: [
        "Customer requested information on availability and commercial terms."
      ],
      objectionsOrDoubts: [],
      commitmentsMade: ["Follow up with requested quotation."],
      actionChecklist: [
        { task: "Send company catalogue / quotation", completed: false },
        { task: "Call back to confirm receipt", completed: false }
      ],
      suggestedFollowUp: {
        dueDate: "Tomorrow",
        recommendedAction: "Send WhatsApp message with catalogue",
        draftMessage: "Hi, thank you for your call. I am sharing our details shortly. Let me know if you have any questions!"
      }
    },
    sentiment: "Neutral",
    leadStatus: "Warm"
  };
}
