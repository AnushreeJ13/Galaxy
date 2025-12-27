import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope
} from "react-icons/fa";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const CosmicNav = ({ activePlanet }) => {
  const navItems = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "about", icon: <FaUser />, label: "About" },
    { id: "education", icon: <FaGraduationCap />, label: "Education" },
    { id: "experience", icon: <FaBriefcase />, label: "Experience" },
    { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" }
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ===== TOP STRAIGHT DIVINE BAR ===== */}
      <div
        className="
          fixed top-0 left-0 w-full z-50
          bg-black/70 backdrop-blur-md
          border-b border-yellow-400/20
        "
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* LEFT (empty spacing / optional logo later) */}
          <div className="hidden md:block w-1/4" />

          {/* CENTER QUOTE */}
          <p className="text-xs md:text-sm text-yellow-200/80 italic text-center">
            “You are what you believe in. You become that which you believe you can become.”
            <span className="not-italic text-yellow-300 ml-2">
              — Shri Krishna
            </span>
          </p>

          {/* RIGHT SOCIALS */}
          <div className="flex gap-4 items-center w-1/4 justify-end">
            <a
              href="https://github.com/AnushreeJ13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:text-yellow-400 transition"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/anushree-jain-2990a0285/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:text-yellow-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* ===== RIGHT SIDE PLANET NAV (KEEP YOUR EXISTING ONE HERE) ===== */}
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        className="flex items-center gap-1 
        backdrop-blur-md bg-black/50 
        px-3 py-2 rounded-full 
        border border-white/15 shadow-xl"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {navItems.map((item) => {
          const isActive = activePlanet === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`relative flex items-center gap-2 
              px-4 py-2 rounded-full text-sm font-medium 
              transition-all duration-300
              ${
                isActive
                  ? "bg-yellow-400/20 text-yellow-300"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-base">{item.icon}</span>

              {/* Hide text on small screens */}
              <span className="hidden sm:inline">{item.label}</span>

              {/* Active ring */}
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-full border border-yellow-400/40"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </motion.button>
          );
        })}
      </motion.div>
    </nav>
    </>
  );
};

export default CosmicNav;
