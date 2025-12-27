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
        
        {/* Hand Image */}
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/2098/2098317.png"
          alt="Divine Hand"
          className="w-32 h-32 filter invert brightness-0 saturate-100 hue-rotate-60"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        {/* Blessing Light */}
        <motion.div 
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-20 bg-gradient-to-b from-yellow-400 to-transparent"
          animate={{ height: ['20px', '40px', '20px'] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Blessing Text */}
        <motion.div 
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-yellow-300 font-bold text-sm whitespace-nowrap"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Divine Blessings 🙏
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DivineHand;