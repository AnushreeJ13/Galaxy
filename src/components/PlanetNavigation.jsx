// src/components/PlanetNavigation.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaGraduationCap, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const PlanetNavigation = () => {
  const [angle, setAngle] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const planets = [
    { id: 'home', label: 'Home', icon: <FaHome />, color: 'from-blue-400 to-cyan-500', size: 60, orbit: 250 },
    { id: 'about', label: 'About', icon: <FaUser />, color: 'from-green-400 to-emerald-500', size: 55, orbit: 300 },
    { id: 'education', label: 'Education', icon: <FaGraduationCap />, color: 'from-yellow-400 to-orange-500', size: 65, orbit: 350 },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase />, color: 'from-red-400 to-pink-500', size: 58, orbit: 400 },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope />, color: 'from-purple-400 to-indigo-500', size: 52, orbit: 450 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {planets.map((planet, index) => {
        const currentAngle = angle + (index * (360 / planets.length));
        const radians = (currentAngle * Math.PI) / 180;
        const x = Math.cos(radians) * planet.orbit;
        const y = Math.sin(radians) * planet.orbit;

        return (
          <motion.a
            key={planet.id}
            href={`#${planet.id}`}
            className={`absolute pointer-events-auto rounded-full bg-gradient-to-br ${planet.color} flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-300`}
            style={{
              width: planet.size,
              height: planet.size,
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Planet Surface */}
            <div className="w-full h-full rounded-full flex items-center justify-center">
              <div className="text-white text-xl">{planet.icon}</div>
            </div>
            
            {/* Planet Label */}
            <div className="absolute -bottom-8 text-white text-xs font-bold whitespace-nowrap">
              {planet.label}
            </div>
            
            {/* Planet Glow */}
            <div className={`absolute -inset-4 rounded-full bg-gradient-to-br ${planet.color} opacity-30 blur-xl`} />
          </motion.a>
        );
      })}
      
      {/* Orbital Paths */}
      {planets.map((planet, index) => (
        <div
          key={`orbit-${planet.id}`}
          className="absolute rounded-full border border-white/10"
          style={{
            width: planet.orbit * 2,
            height: planet.orbit * 2,
            left: `calc(50% - ${planet.orbit}px)`,
            top: `calc(50% - ${planet.orbit}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default PlanetNavigation;