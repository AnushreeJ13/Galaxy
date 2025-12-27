// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg'; // Add your image

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const name = "Anushree Jain";
  const title = "Aspiring Software Developer";
  const description = "Welcome to my cosmic portfolio. I'm a passionate developer exploring the universe of technology, guided by divine creativity and innovation.";

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Earth Planet Background */}
      <motion.div 
        className="absolute right-[-200px] top-1/2 transform -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        animate={{
          rotate: 360,
          y: [0, -30, 0],
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          y: { duration: 8, repeat: Infinity },
        }}
      >
        {/* Earth layers */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-teal-400 to-emerald-500 opacity-30 blur-xl" />
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-300 opacity-50" />
        <div className="absolute inset-16 rounded-full bg-gradient-to-br from-green-500 via-emerald-400 to-teal-300 opacity-70" />
        
        {/* Cloud cover */}
        <div className="absolute inset-0 rounded-full opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 40%, white 5%, transparent 10%),
                            radial-gradient(circle at 60% 30%, white 8%, transparent 12%),
                            radial-gradient(circle at 40% 70%, white 6%, transparent 10%)`,
          }}
        />
        
        {/* Continents */}
        <div className="absolute inset-0 rounded-full opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, green 15%, transparent 20%),
                            radial-gradient(circle at 70% 30%, brown 10%, transparent 15%)`,
          }}
        />
        
        {/* Glow effect */}
        <div className="absolute -inset-20 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-400/20 blur-3xl" />
        
        {/* Orbiting moon */}
        <motion.div
          className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-100"
          animate={{
            rotate: 360,
            x: [400, 400, 400],
            y: [0, 0, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            x: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
          style={{
            transformOrigin: '300px center',
          }}
        >
          <div className="absolute inset-4 rounded-full bg-gray-400 opacity-30" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-black/30 p-8 rounded-3xl border border-white/10"
          >
            <motion.div 
              className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-blue-500/30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-blue-300 font-semibold">Welcome to My Universe</span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {name.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    ⚡
                  </motion.div>
                  <h2 className="text-2xl text-white font-bold">{title}</h2>
                </div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xl text-blue-100/80 mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#about"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Journey
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Connect With Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              className="relative w-80 h-80"
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
              animate={{
                rotateY: mousePosition.x / 50,
                rotateX: -mousePosition.y / 50,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
            >
              {/* Profile image container */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-blue-500/30">
                <img
                  src={profilePic}
                  alt="Anushree Jain"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x400?text=Anushree+Jain";
                  }}
                />
                
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20" />
              </div>
              
              {/* Orbiting tech icons */}
              {[
                { icon: '⚛️', color: 'from-blue-500 to-cyan-400', delay: 0 },
                { icon: '💻', color: 'from-purple-500 to-pink-400', delay: 0.5 },
                { icon: '🚀', color: 'from-orange-500 to-yellow-400', delay: 1 },
                { icon: '🔧', color: 'from-green-500 to-emerald-400', delay: 1.5 },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className={`absolute w-16 h-16 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl shadow-xl`}
                  animate={{
                    rotate: 360,
                    x: [200, 200, 200],
                    y: [0, 0, 0],
                  }}
                  transition={{
                    rotate: { duration: 10 + index * 2, repeat: Infinity, ease: "linear" },
                    x: { duration: 15, repeat: Infinity, ease: "linear" },
                    y: { duration: 15, repeat: Infinity, ease: "linear" },
                    delay: tech.delay,
                  }}
                  style={{
                    transformOrigin: `${200}px center`,
                  }}
                >
                  {tech.icon}
                </motion.div>
              ))}
              
              {/* Glow rings */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-blue-400/20"
                  style={{ margin: `-${i * 20}px` }}
                  animate={{ scale: [1, 1 + i * 0.2, 1] }}
                  transition={{ duration: 3 + i, repeat: Infinity }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-blue-300/60 text-sm">Scroll to Explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-blue-500/30 flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-3 bg-blue-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;