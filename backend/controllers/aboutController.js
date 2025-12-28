const About = require("../models/About");

exports.getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    if (!about) {
      // Return default data
      return res.json({
        bio: "Hello! My name is Sharv Chopra and I enjoy creating things that live on the internet.",
        description:
          "Fast-forward to today, I’m a third-year student combining academic learning with hands-on project experience and exposure to fast-paced start-up environments.",
        techRecent: ["JavaScript (ES6+)", "React", "Node.js", "MongoDB"],
      });
    }
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateAbout = async (req, res) => {
  try {
    let about = await About.findOne();
    if (about) {
      about.bio = req.body.bio || about.bio;
      about.description = req.body.description || about.description;
      about.techRecent = req.body.techRecent || about.techRecent;
      await about.save();
    } else {
      about = new About(req.body);
      await about.save();
    }
    res.json(about);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
