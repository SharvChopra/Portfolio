const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
  greeting: {
    type: String,
    default: "Hi, my name is",
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  socialLinks: {
    github: String,
    linkedin: String,
    twitter: String,
  },
  avatarUrl: {
    type: String,
    default: "/avatar.png",
  },
});

module.exports = mongoose.model("Hero", heroSchema);
