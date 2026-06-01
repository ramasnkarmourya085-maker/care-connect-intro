import cloudinary from "../config/cloudinary.js";
import Review from "../models/Review.js";

// @desc    Get all reviews (public)
// @route   GET /api/reviews
export const getReviews = async (_req, res) => {
  try {
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
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Server error" });
  }
};

// @desc    Create a review (protected)
// @route   POST /api/reviews
export const createReview = async (req, res) => {
  try {
    const name = String(req.body.name || "").trim().slice(0, 80);
    const message = String(req.body.message || "").trim().slice(0, 1000);
    const rating = Math.min(5, Math.max(1, parseInt(req.body.rating, 10) || 0));

    if (!name || !message || !rating) {
      return res.status(400).json({ error: "name, rating and message are required" });
    }

    let photoUrl = null;
    if (req.file) {
      if (!process.env.CLOUDINARY_CLOUD_NAME) {
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
      user_id: doc.userId,
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
};
