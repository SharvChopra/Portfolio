const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  techStack: [
    {
      type: String,
    },
  ],
  link: {
    type: String, // Deployment link
    required: false,
  },
  github: {
    type: String, // GitHub repo link
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Project", projectSchema);
