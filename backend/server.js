import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { callRouter } from "./routes/callRoutes.js";
import { leadRouter } from "./routes/leadRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/calls", callRouter);
app.use("/api/leads", leadRouter);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", service: "AI Call CRM Backend" });
});

async function startServer() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`AI Call CRM Backend running at http://localhost:${PORT}`);
  });
}

startServer();
