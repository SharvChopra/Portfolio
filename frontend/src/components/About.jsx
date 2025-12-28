import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const About = () => {
  const [aboutData, setAboutData] = useState({
    bio: "",
    description: "",
    techRecent: [],
  });

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/about`
        );
        setAboutData(res.data);
      } catch (err) {
        console.error("Error fetching about data:", err);
      }
    };
    fetchAbout();
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-secondary text-slate-300 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-12 md:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-10 mt-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-highlight rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed mb-6">{aboutData.bio}</p>
            <p className="text-lg leading-relaxed mb-6">
              {aboutData.description}
            </p>
            <p className="text-lg leading-relaxed">
              Here are a few technologies I've been working with recently:
            </p>
          </motion.div>

          {/* Right Column: Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {aboutData.techRecent &&
              aboutData.techRecent.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-slate-800/50 p-3 rounded-lg border border-slate-700 hover:border-highlight/50 transition-colors"
                >
                  <span className="text-highlight">▹</span>
                  <span className="font-mono text-sm">{tech}</span>
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
