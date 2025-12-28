const Skill = require("../models/Skill");

exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    if (skills.length === 0) {
      return res.json([
        {
          _id: "1",
          name: "HTML5",
          level: 90,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          _id: "2",
          name: "CSS3",
          level: 85,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          _id: "3",
          name: "JavaScript",
          level: 80,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          _id: "4",
          name: "React",
          level: 75,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          _id: "5",
          name: "Node.js",
          level: 70,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          _id: "6",
          name: "MongoDB",
          level: 65,
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
      ]);
    }
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addSkill = async (req, res) => {
  const skill = new Skill({
    name: req.body.name,
    level: req.body.level,
    icon: req.body.icon,
  });

  try {
    const newSkill = await skill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
