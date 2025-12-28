import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/projects`);
                setProjects(res.data);
            } catch (err) {
                console.error('Error fetching projects:', err);
            }
        };
        fetchProjects();
    }, []);

    return (
        <section id="projects" className="py-20 px-12 md:px-32 bg-primary text-white min-h-screen pt-24">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold font-outfit text-center mb-12"
            >
                Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-secondary rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-700"
                    >
                        {project.image && <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />}
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">{tech}</span>
                                ))}
                            </div>
                            <div className="flex justify-between mt-4">
                                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-highlight hover:text-white transition-colors">Live Demo</a>}
                                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">GitHub</a>}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
