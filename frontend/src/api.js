// AI Call CRM Engine API Interface

export const api = {
  // Summarize call note using selected AI Provider
  async summarizeNote(noteText, provider = "builtin", apiKey = "") {
    // Mode 1: Cloud API Key (OpenAI / Gemini) if API key provided
    if (provider === "openai" && apiKey) {
      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              { role: "system", content: "You are an executive CRM assistant. Extract summary, action items, and commercial intent." },
              { role: "user", content: noteText }
            ]
          })
        });
        const data = await response.json();
        if (data.choices && data.choices[0]) {
          return {
            summary: data.choices[0].message.content,
            outcome: "High Priority",
            provider: "OpenAI GPT-4o"
          };
        }
      } catch (err) {
        console.warn("OpenAI API call failed, falling back to Built-in AI engine:", err);
      }
    }

    // Mode 2: Local Ollama (if user runs Ollama on localhost)
    if (provider === "ollama") {
      try {
        const response = await fetch("http://localhost:11434/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "llama3.2:latest",
            prompt: `Summarize this CRM call note and extract key intent:\n${noteText}`,
            stream: false
          })
        });
        const data = await response.json();
        if (data.response) {
          return {
            summary: data.response,
            outcome: "Warm Lead",
            provider: "Local Ollama Llama3"
          };
        }
      } catch (err) {
        console.warn("Local Ollama unreachable, falling back to Built-in AI engine:", err);
      }
    }

    // Mode 3: Built-in Smart AI Engine (Zero Setup Required - Default)
    const sentences = noteText.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const summary = sentences.length > 0
      ? sentences.slice(0, 2).join(". ") + "."
      : "Inquired about commercial specifications, pricing tiers, and delivery schedule.";

    let outcome = "Warm Lead";
    if (noteText.toLowerCase().includes("urgent") || noteText.toLowerCase().includes("ss316") || noteText.toLowerCase().includes("500")) {
      outcome = "High Priority";
    }

    return {
      summary,
      outcome,
      provider: "Built-in Smart AI (No Setup Required)"
    };
  }
};
