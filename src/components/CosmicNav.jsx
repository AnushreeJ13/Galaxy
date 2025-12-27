import React from "react";
import { motion } from "framer-motion";

const CosmicNav = ({ activePlanet }) => {
  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "👤" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "contact", label: "Contact", icon: "📧" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
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
  );
};

export default CosmicNav;
