import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-primary/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <NavLink to="/" className="text-3xl font-bold font-outfit text-white">
          Port<span className="text-highlight">folio</span>.
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-mono transition-colors ${
                  isActive
                    ? "text-highlight"
                    : "text-slate-400 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `text-xl font-outfit transition-colors ${
                      isActive ? "text-highlight" : "text-slate-400"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
