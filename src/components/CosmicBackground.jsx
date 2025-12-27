import React from "react";
import { motion } from "framer-motion";

const CosmicBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-[#00040d]">
      {/* Deep Divine Blue Gradient */}
      <div className="absolute inset-0 opacity-60" 
           style={{ background: 'radial-gradient(circle at 50% 50%, #001a4d 0%, #00040d 80%)' }} />
      
      {/* Moving Nebula Clouds */}
      <motion.div
        className="absolute top-0 right-0 w-[1000px] h-[1000px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0, 70, 255, 0.15) 0%, transparent 70%)", filter: "blur(80px)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      {/* Twinkling Stars */}
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity }}
        />
      ))}
    </div>
  );
};

export default CosmicBackground;