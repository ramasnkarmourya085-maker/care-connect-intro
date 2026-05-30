import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { createRemoteJWKSet, jwtVerify } from "jose";
import Review from "./models/Review.js";

const {
  PORT = 5000,
  MONGODB_URI,
  CORS_ORIGIN = "*",
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  SUPABASE_URL,
} = process.env;

if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI in .env");
  process.exit(1);
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const app = express();
app.use(
  cors({
    origin: CORS_ORIGIN === "*" ? true : CORS_ORIGIN.split(","),
    credentials: false,
  })
);
app.use(express.json({ limit: "1mb" }));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// --- Auth: verify Supabase JWT (Google sign-in returns one) ---
const JWKS = SUPABASE_URL
  ? createRemoteJWKSet(new URL(`${SUPABASE_URL}/auth/v1/.well-known/jwks.json`))
  : null;

async function requireAuth(req, res, next) {
  try {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : null;
    if (!token) return res.status(401).json({ error: "Missing token" });
    if (!JWKS) return res.status(500).json({ error: "Server JWKS not configured" });

    const { payload } = await jwtVerify(token, JWKS);
    req.user = {
      id: payload.sub,
      email: payload.email,
      name: payload.user_metadata?.full_name || payload.user_metadata?.name,
    };
    next();
  } catch (err) {
    console.error("Auth error:", err.message);
    res.status(401).json({ error: "Invalid token" });
  }
}

// --- Routes ---
app.get("/health", (_req, res) => res.json({ ok: true }));

// Public: list reviews
app.get("/api/reviews", async (_req, res) => {
  const reviews = await Review.find().sort({ createdAt: -1 }).limit(50).lean();
  res.json(
    reviews.map((r) => ({
      id: r._id.toString(),
      user_id: r.userId || null,
      name: r.name,
      rating: r.rating,
      message: r.message,
      photo_url: r.photoUrl,
      created_at: r.createdAt,
    }))
  );
});

// Protected: create review (with optional photo)
app.post("/api/reviews", requireAuth, upload.single("photo"), async (req, res) => {
  try {
    const name = String(req.body.name || "").trim().slice(0, 80);
    const message = String(req.body.message || "").trim().slice(0, 1000);
    const rating = Math.min(5, Math.max(1, parseInt(req.body.rating, 10) || 0));

    if (!name || !message || !rating) {
      return res.status(400).json({ error: "name, rating and message are required" });
    }

    let photoUrl = null;
    if (req.file) {
      if (!CLOUDINARY_CLOUD_NAME) {
        return res.status(500).json({ error: "Cloudinary not configured" });
      }
      photoUrl = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "care-connect/reviews", resource_type: "image" },
          (err, result) => (err ? reject(err) : resolve(result.secure_url))
        );
        stream.end(req.file.buffer);
      });
    }

    const doc = await Review.create({
      userId: req.user.id,
      email: req.user.email,
      name,
      rating,
      message,
      photoUrl,
    });

    res.status(201).json({
      id: doc._id.toString(),
      name: doc.name,
      rating: doc.rating,
      message: doc.message,
      photo_url: doc.photoUrl,
      created_at: doc.createdAt,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Server error" });
  }
});

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 API on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("Mongo connection failed:", err.message);
    process.exit(1);
  });
