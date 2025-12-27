// src/components/CosmicNav.jsx
import React from 'react';
import { motion } from 'framer-motion';

const CosmicNav = ({ activePlanet }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div 
        className="flex items-center gap-2 backdrop-blur-xl bg-black/40 p-3 rounded-full border border-white/20 shadow-2xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {navItems.map((item) => {
          const isActive = activePlanet === item.id;
          
          return (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                isActive 
                  ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-semibold">{item.label}</span>
              
              {/* Active indicator */}
              {isActive && (
                <>
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-yellow-400/50"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                  <motion.div 
                    className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-yellow-400"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </>
              )}
              
              {/* Hover effect */}
              {!isActive && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              )}
            </motion.a>
          );
        })}
        
        {/* Cosmic energy around nav */}
        <motion.div 
          className="absolute -inset-4 rounded-full border border-yellow-400/20 blur-xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
      
      {/* Navigation trail */}
      <motion.div 
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-yellow-300/50 text-sm font-semibold"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Navigate the Cosmos
      </motion.div>
    </nav>
  );
};

export default CosmicNav;