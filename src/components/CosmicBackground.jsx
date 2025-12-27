import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CosmicBackground = () => {
  const [stars, setStars] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate stars
    const newStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      delay: Math.random() * 2,
      speed: Math.random() * 5 + 1,
    }));
    setStars(newStars);

    // Mouse parallax
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B2B] via-[#1A0033] to-[#000814]" />

      {/* Nebula clouds */}
      <motion.div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(106, 13, 173, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 3}px ${star.size}px rgba(255,255,255,0.3)`,
            transform: `translate(${mousePos.x * star.speed}px, ${
              mousePos.y * star.speed
            }px)`,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 1.5, star.opacity],
            boxShadow: [
              `0 0 ${star.size * 2}px ${star.size}px rgba(255,255,255,0.2)`,
              `0 0 ${star.size * 4}px ${
                star.size * 2
              }px rgba(255,255,255,0.4)`,
              `0 0 ${star.size * 2}px ${star.size}px rgba(255,255,255,0.2)`,
            ],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {/* Shooting stars (FIXED) */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[100px] h-[2px] bg-gradient-to-r from-transparent via-yellow-300 to-transparent"
          style={{
            left: `${20 + i * 30}%`,
            top: `${10 + i * 25}%`,
          }}
          animate={{
            x: [-100, window.innerWidth + 200],
            y: [0, 200],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
        />
      ))}

      {/* Cosmic dust */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default CosmicBackground;
