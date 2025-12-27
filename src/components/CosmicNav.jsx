import React from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const CosmicNav = ({ activePlanet }) => {
  const navItems = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "about", icon: <FaUser />, label: "About" },
    { id: "education", icon: <FaGraduationCap />, label: "Education" },
    { id: "experience", icon: <FaBriefcase />, label: "Experience" },
   
    { id: "contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ===== TOP NAV BAR ===== */}
      <div className="fixed top-0 left-0 w-full z-50">
        <motion.div
          className="
            bg-black/70 backdrop-blur-md
            border-b border-yellow-400/20
          "
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

            {/* LEFT NAV ITEMS */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activePlanet === item.id;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className={`relative flex items-center gap-2
                      px-3 py-2 rounded-full text-sm font-medium
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-yellow-400/20 text-yellow-300"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      }
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{item.icon}</span>
                    <span className="hidden md:inline">{item.label}</span>

                    {isActive && (
                      <motion.div
                        layoutId="activeTopNav"
                        className="absolute inset-0 rounded-full border border-yellow-400/40"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* RIGHT SOCIAL ICONS */}
            <div className="flex items-center gap-4">
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
        </motion.div>
      </div>

      {/* ===== QUOTE BAR (BOTTOM) ===== */}
      
    </>
  );
};

export default CosmicNav;
