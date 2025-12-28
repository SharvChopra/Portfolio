const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');

dotenv.config();

const verifyProjects = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const projects = await Project.find({});
        console.log(`Found ${projects.length} projects:`);
        projects.forEach(p => console.log(`- ${p.title}`));
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

verifyProjects();
