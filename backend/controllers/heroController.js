const Hero = require("../models/Hero");

exports.getHero = async (req, res) => {
  try {
    const hero = await Hero.findOne();
    if (!hero) {
      // Return default data if no hero entry exists
      return res.json({
        greeting: "Hi, my name is",
        name: "Sharv Chopra",
        title: "I build things for the web.",
        subtitle:
          "I am a Full Stack Developer specializing in building (and occasionally designing) exceptional digital experiences.",
        socialLinks: {
          github: "https://github.com/SharvChopra",
          linkedin: "https://www.linkedin.com/in/sharvchopra/",
          twitter: "#",
        },
        avatarUrl: "/avatar.png",
      });
    }
    res.json(hero);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateHero = async (req, res) => {
  try {
    let hero = await Hero.findOne();
    if (hero) {
      hero.greeting = req.body.greeting || hero.greeting;
      hero.name = req.body.name || hero.name;
      hero.title = req.body.title || hero.title;
      hero.subtitle = req.body.subtitle || hero.subtitle;
      hero.socialLinks = req.body.socialLinks || hero.socialLinks;
      hero.avatarUrl = req.body.avatarUrl || hero.avatarUrl;
      await hero.save();
    } else {
      hero = new Hero(req.body);
      await hero.save();
    }
    res.json(hero);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
