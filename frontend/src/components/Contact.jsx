import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/contact`,
        formData
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending message:", err);
      setStatus("Failed to send message.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 bg-secondary text-white min-h-screen overflow-hidden flex items-center"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-highlight rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-bold font-outfit mb-4 bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400">
                Let's Chat.
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed font-light">
                Have a project in mind or just want to explore ideas? I'm always
                open to discussing new opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-highlight/10 transition-colors border border-white/5 group-hover:border-highlight/20">
                  <FaEnvelope className="text-2xl text-highlight" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-mono">Email Me</p>
                  <h4 className="text-lg font-medium text-white">
                    sharvchopra12@gmail.com
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-accent/10 transition-colors border border-white/5 group-hover:border-accent/20">
                  <FaMapMarkerAlt className="text-2xl text-accent" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-mono">Location</p>
                  <h4 className="text-lg font-medium text-white">
                    Patiala, Punjab
                  </h4>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative"
          >
            {/* Decorative glow */}
            <div className="absolute -inset-1 bg-linear-to-r from-accent to-highlight rounded-3xl opacity-20 blur-lg -z-10"></div>

            <h3 className="text-2xl font-bold mb-6 font-outfit">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "#06b6d4" }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-5 py-3 bg-secondary/50 border border-slate-700/50 rounded-xl focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight/50 text-white placeholder-slate-600 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "#06b6d4" }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-5 py-3 bg-secondary/50 border border-slate-700/50 rounded-xl focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight/50 text-white placeholder-slate-600 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01, borderColor: "#06b6d4" }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows="4"
                  className="w-full px-5 py-3 bg-secondary/50 border border-slate-700/50 rounded-xl focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight/50 text-white placeholder-slate-600 transition-all resize-none"
                ></motion.textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#7c3aed" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-accent text-white font-bold rounded-xl shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <FaPaperPlane className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                Send Message
              </motion.button>

              {status && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center mt-4 text-highlight font-medium bg-highlight/10 py-2 rounded-lg"
                >
                  {status}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
