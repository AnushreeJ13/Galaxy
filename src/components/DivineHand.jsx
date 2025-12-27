// src/components/DivineHand.jsx
import React from 'react';
import { motion } from 'framer-motion';

const DivineHand = () => {
  return (
    <motion.div 
      className="fixed top-20 left-20 z-50 pointer-events-none"
      initial={{ opacity: 0, x: -100, y: -100 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 2, delay: 1 }}
    >
      {/* Divine Hand Image/Silhouette */}
      <div className="relative">
        {/* Hand Shadow/Glow */}
        <motion.div 
          className="absolute -inset-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
       
       
      </div>
    </motion.div>
  );
};

export default DivineHand;