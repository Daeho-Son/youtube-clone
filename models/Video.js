import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "title is required",
  },
  description: String,
  src: {
    type: String,
    required: "src is required",
  },
  views: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  comment: [{}],
});

const model = mongoose.model("Video", VideoSchema);

export default model;
