const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  template: [String],
  title: {
    type: String,
    required: true,
  },
  preview: {
    type: String,
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
