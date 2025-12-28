import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary py-8 text-center border-t border-white/10">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/SharvChopra"
          className="text-slate-400 hover:text-highlight transition-colors text-xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sharvchopra/"
          className="text-slate-400 hover:text-highlight transition-colors text-xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="#"
          className="text-slate-400 hover:text-highlight transition-colors text-xl"
        >
          <FaTwitter />
        </a>
      </div>
      <p className="text-slate-500 font-mono text-sm">
        Designed & Built by Sharv Chopra &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
