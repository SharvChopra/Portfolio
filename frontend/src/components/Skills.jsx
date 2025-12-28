import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/skills`
        );
        setSkills(res.data);
      } catch (err) {
        console.error("Error fetching skills:", err);
      }
    };
    fetchSkills();
  }, []);

  return (
    <section
      id="skills"
      className="py-20 px-12 md:px-32 bg-secondary text-white min-h-screen pt-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold font-outfit text-center mb-12"
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill._id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-primary p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {skill.icon && (
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mx-auto mb-4"
              />
            )}
            <h3 className="text-xl font-semibold text-center">{skill.name}</h3>
            <div className="w-full bg-gray-700 h-2rounded-full mt-4">
              <div
                className="bg-accent h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
