// src/components/KrishnaCreator.jsx
import React from "react";
import { motion } from "framer-motion";

const KrishnaCreator = () => {
  return (
    <motion.div
      className="fixed top-1/4 right-6 w-64 h-64 z-0 pointer-events-none"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 0.12, x: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      {/* Divine Aura */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(120,170,255,0.35) 0%, rgba(90,120,255,0.18) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Krishna Symbolic Form */}
      <div className="relative w-full h-full flex items-center justify-center">

        {/* Flute */}
        <motion.div
          className="absolute w-36 h-3 rounded-full"
          style={{
            background:
              "linear-gradient(to right, #facc15, #fb923c, #facc15)",
          }}
          animate={{ rotate: [42, 47, 42] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute -top-1 left-6 w-4 h-4 rounded-full bg-yellow-500" />
          <div className="absolute -top-1 right-6 w-4 h-4 rounded-full bg-yellow-500" />
        </motion.div>

        {/* Crown */}
        <motion.div
          className="absolute top-6 w-28"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-t-lg" />
          <div className="flex justify-center mt-1 gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded-sm" />
            <div className="w-3 h-3 bg-red-500 rounded-sm" />
            <div className="w-3 h-3 bg-green-500 rounded-sm" />
          </div>
        </motion.div>

        {/* Lotus */}
        <motion.div
          className="absolute bottom-10 text-5xl"
          animate={{ rotate: 360 }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🪷
        </motion.div>

        {/* Light Rays */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-24"
            style={{
              background:
                "linear-gradient(to bottom, rgba(253,224,71,0.5), transparent)",
              transform: `rotate(${i * 45}deg)`,
              transformOrigin: "center bottom",
            }}
            animate={{
              height: [90, 120, 90],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      {/* Floating Divine Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-yellow-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}
    </motion.div>
  );
};

export default KrishnaCreator;
