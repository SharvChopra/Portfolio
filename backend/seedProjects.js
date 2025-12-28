const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');

dotenv.config();

const projects = [
    {
        title: "EV-Charge",
        description: "A comprehensive full-stack platform for electric vehicle route planning. It calculates optimal paths based on battery constraints and charging station availability, features an interactive map for visualization, and includes a complete booking system with secure payments for charging spots.",
        techStack: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
        link: "https://github.com/SharvChopra/EV-Charge",
        github: "https://github.com/SharvChopra/EV-Charge"
    },
    {
        title: "Focus-Mode",
        description: "A productivity-focused full-stack web application that helps users eliminate distractions. It features a custom chrome extension for blocking websites, real-time analytics on productivity habits, and a dashboard to manage focus sessions and track progress over time.",
        techStack: ["React (Vite)", "Framer Motion", "Node.js", "Express", "MongoDB", "Passport.js", "Chrome Extension API"],
        link: "https://github.com/SharvChopra/Focus-Mode",
        github: "https://github.com/SharvChopra/Focus-Mode"
    },
    {
        title: "PrimeCompare",
        description: "An AI-powered product analysis tool that scrapes expert reviews and uses Google Gemini AI to synthesize purchasing insights. It delivers concise pros and cons, detailed feature comparisons, and smart recommendations to help users make informed buying decisions.",
        techStack: ["React (Vite)", "TailwindCSS", "Node.js", "Express", "MongoDB", "Google Gemini AI", "Puppeteer"],
        link: "https://github.com/SharvChopra/PrimeCompare",
        github: "https://github.com/SharvChopra/PrimeCompare"
    },
    {
        title: "AgentForce",
        description: "A legal tech assistant leveraging Large Language Models to automate contract review. It analyzes complex legal PDFs, summarizes key clauses, identifies potential risks with proactive questioning, and verifies compliance against customizable checklists.",
        techStack: ["FastAPI", "Streamlit", "Google Gemini 1.5 Flash", "ChromaDB", "LangChain", "Python"],
        link: "https://github.com/SharvChopra/AgentForce_SharvChopra",
        github: "https://github.com/SharvChopra/AgentForce_SharvChopra"
    }
];

const seedProjects = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected...');

        for (const projectData of projects) {
            const result = await Project.findOneAndUpdate(
                { title: projectData.title },
                projectData,
                { upsert: true, new: true }
            );
            console.log(`Project '${projectData.title}' updated/added.`);
        }

        console.log('Seeding completed.');
        process.exit();
    } catch (err) {
        console.error('Error seeding projects:', err);
        process.exit(1);
    }
};

seedProjects();

