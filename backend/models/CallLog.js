import mongoose from "mongoose";

const CallLogSchema = new mongoose.Schema(
  {
    leadId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lead",
      required: true,
      index: true
    },
    callerNumber: { type: String, required: true },
    callerName: { type: String, default: "Unknown" },
    callDuration: { type: Number, default: 0 },
    callType: {
      type: String,
      enum: ["Incoming", "Outgoing"],
      default: "Incoming"
    },

    // 1. EXACT SUMMARY
    exactSummary: {
      headline: { type: String, required: true },
      keyOutcome: { type: String, default: "Follow-up" },
      bullets: [{ type: String }]
    },

    // 2. DETAILED NOTES
    detailedNotes: {
      callerIntent: { type: String },
      discussionPoints: [{ type: String }],
      objectionsOrDoubts: [{ type: String }],
      commitmentsMade: [{ type: String }],
      actionChecklist: [
        {
          task: { type: String },
          completed: { type: Boolean, default: false }
        }
      ],
      suggestedFollowUp: {
        dueDate: { type: String },
        recommendedAction: { type: String },
        draftMessage: { type: String }
      }
    },

    sentiment: {
      type: String,
      enum: ["Positive", "Neutral", "Frustrated", "Urgent"],
      default: "Neutral"
    }
  },
  { timestamps: true }
);

export const CallLog = mongoose.model("CallLog", CallLogSchema);
