const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');

dotenv.config();

const removeDuplicates = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected...');

        const projectsToRemove = [
            "Focus Mode Ecosystem",
            "Legal Doc AI Automation"
        ];

        const result = await Project.deleteMany({ title: { $in: projectsToRemove } });

        console.log(`Deleted ${result.deletedCount} projects.`);
        console.log('Cleanup completed.');
        process.exit();
    } catch (err) {
        console.error('Error removing projects:', err);
        process.exit(1);
    }
};

removeDuplicates();
