import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { Link } from "react-router-dom";

const Hero = () => {
  const [heroData, setHeroData] = useState({
    greeting: "",
    name: "",
    title: "",
    subtitle: "",
    socialLinks: { github: "", linkedin: "", twitter: "" },
    avatarUrl: "",
  });

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/hero`
        );
        setHeroData(res.data);
      } catch (err) {
        console.error("Error fetching hero data:", err);
      }
    };
    fetchHero();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-primary pt-20 overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[10%] w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute bottom-[10%] left-[10%] w-96 h-96 bg-highlight rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-6 mt-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-highlight font-mono text-lg"
            >
              {heroData.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-7xl font-bold font-outfit text-white tracking-tight leading-tight"
            >
              {heroData.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl md:text-5xl font-bold font-outfit text-slate-400"
            >
              {heroData.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="max-w-xl text-slate-400 text-lg leading-relaxed"
            >
              {heroData.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-6 pt-3 mb-6"
            >
              <Link
                to="/projects"
                className="group border-2 border-highlight text-highlight px-8 py-3 rounded-full font-mono hover:bg-highlight/10 transition-all flex items-center gap-2"
              >
                Check out my work
                <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex gap-2">
                {heroData.socialLinks.github && (
                  <a
                    href={heroData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors text-2xl"
                  >
                    <FaGithub />
                  </a>
                )}
                {heroData.socialLinks.linkedin && (
                  <a
                    href={heroData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors text-2xl"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {heroData.socialLinks.twitter && (
                  <a
                    href={heroData.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors text-2xl"
                  >
                    <FaTwitter />
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end relative"
          >
            {/* Blob Background for Avatar */}
            <div className="absolute inset-0 bg-linear-to-tr from-accent/20 to-highlight/20 rounded-full filter blur-3xl transform scale-110"></div>

            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl backdrop-blur-sm bg-white/5">
              {heroData.avatarUrl ? (
                <img
                  src={heroData.avatarUrl}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-600">
                  No Image
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
