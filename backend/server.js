import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/api/auth/me", (req, res) => {
  res.json({
    user: {
      id: "demo-user-1",
      companyName: "Industrial Call CRM Workspace",
      loginId: "CALL-240001",
      name: "Demo Admin",
      email: "admin@aicallcrm.com",
      approvalStatus: "approved"
    }
  });
});

app.post("/api/ai/summarize-note", (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ message: "Text required" });
  }

  const lines = text.split("\n").filter(Boolean);
  const summaryText = lines.slice(0, 2).join(". ");
  const isUrgent = text.toLowerCase().includes("urgent") || text.toLowerCase().includes("asap");

  res.json({
    summary: `Executive Call Summary: ${summaryText || text.slice(0, 150)}`,
    provider: "AI Call CRM Express Server Engine",
    outcome: isUrgent ? "Urgent / Action Required" : "Interested",
    nextStep: isUrgent ? "Dispatch field engineer / send quotation immediately." : "Schedule follow-up call with customer.",
    suggestedSms: "Hi, thank you for taking our call. As discussed, I have logged your request and will share the details shortly.",
    recommendedStatus: isUrgent ? "Warm" : "Proposal",
    followUpDays: isUrgent ? 1 : 2
  });
});

app.listen(PORT, () => {
  console.log(`AI CALL CRM Express Backend running at http://localhost:${PORT}`);
});
