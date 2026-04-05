import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  repoUrl: String,
  score: Number,
  metrics: Object,
  commits: Array,
});

export default mongoose.model("Report", reportSchema);
