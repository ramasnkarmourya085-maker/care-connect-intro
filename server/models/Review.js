import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, index: true },
    email: { type: String },
    name: { type: String, required: true, maxlength: 80 },
    rating: { type: Number, required: true, min: 1, max: 5 },
    message: { type: String, required: true, maxlength: 1000 },
    photoUrl: { type: String, default: null },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
