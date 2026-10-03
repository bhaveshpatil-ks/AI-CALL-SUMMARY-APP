import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    normalizedPhone: { type: String, required: true, index: true },
    company: { type: String, default: "Individual" },
    status: {
      type: String,
      enum: ["New", "Warm", "Hot", "Proposal", "Closed", "Lost"],
      default: "New"
    },
    totalCalls: { type: Number, default: 0 },
    lastContactedAt: { type: Date, default: Date.now },
    nextFollowUpAt: { type: String, default: null },
    notesTimeline: [
      {
        date: { type: Date, default: Date.now },
        headline: { type: String }
      }
    ]
  },
  { timestamps: true }
);

export const Lead = mongoose.model("Lead", LeadSchema);
