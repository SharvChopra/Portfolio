const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  bio: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  techRecent: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("About", aboutSchema);
