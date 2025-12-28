const express = require("express");
const router = express.Router();

const skillController = require("../controllers/skillController");
const projectController = require("../controllers/projectController");
const contactController = require("../controllers/contactController");

// Skill Routes
router.get("/skills", skillController.getSkills);
router.post("/skills", skillController.addSkill);

// Project Routes
router.get("/projects", projectController.getProjects);
router.post("/projects", projectController.addProject);

// Contact Route
router.post("/contact", contactController.submitContact);

// Hero Routes
const heroController = require("../controllers/heroController");
router.get("/hero", heroController.getHero);
router.post("/hero", heroController.updateHero);

// About Routes
const aboutController = require("../controllers/aboutController");
router.get("/about", aboutController.getAbout);
router.post("/about", aboutController.updateAbout);

module.exports = router;
