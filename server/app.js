import "dotenv/config";
import express from "express";
import cors from "cors";
import healthRoutes from "./routes/healthRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

const app = express();

// CORS
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";
app.use(
  cors({
    origin: CORS_ORIGIN === "*" ? true : CORS_ORIGIN.split(","),
    credentials: false,
  })
);

// Body parser
app.use(express.json({ limit: "1mb" }));

// Routes
app.use("/health", healthRoutes);
app.use("/api/reviews", reviewRoutes);

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});

export default app;
