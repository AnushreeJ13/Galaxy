// src/components/About.jsx
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/about.jpg';

const About = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const skills = [
    { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-orange-500' },
    { name: 'React', level: 85, color: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-500' },
    { name: 'Firebase', level: 75, color: 'from-yellow-400 to-orange-500' },
    { name: 'UI/UX Design', level: 85, color: 'from-purple-500 to-pink-500' },
  ];

  const aboutText = `I'm a passionate developer with a creative mindset, always eager to explore new technologies and build innovative solutions. My journey in tech is guided by curiosity and a desire to create meaningful impact through code. I believe in continuous learning and pushing boundaries to achieve excellence.`;

  return (
    <section 
      id="about" 
      className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden"
      ref={containerRef}
      onMouseMove={(e) => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          setMousePosition({
            x: e.clientX - rect.left - rect.width / 2,
            y: e.clientY - rect.top - rect.height / 2,
          });
        }
      }}
    >
      {/* Blue Planet Background */}
      <motion.div 
        className="absolute left-[-300px] top-1/2 transform -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        animate={{
          rotate: 360,
          y: [0, 20, 0],
        }}
        transition={{
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
          y: { duration: 10, repeat: Infinity },
        }}
      >
        {/* Planet layers */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/50 via-blue-700/40 to-cyan-800/30 blur-2xl" />
        <div className="absolute inset-20 rounded-full bg-gradient-to-br from-blue-800 via-blue-600 to-cyan-700 opacity-60" />
        <div className="absolute inset-40 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 opacity-80" />
        
        {/* Storm patterns */}
        <div className="absolute inset-0 rounded-full opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 40% 40%, white 10%, transparent 20%),
                            radial-gradient(circle at 60% 60%, cyan 15%, transparent 25%)`,
            filter: 'blur(20px)',
          }}
        />
        
        {/* Rings */}
        <motion.div 
          className="absolute -inset-32 rounded-full border-2 border-blue-400/20"
          style={{ transform: 'rotate(45deg)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Moons */}
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-100"
            animate={{
              rotate: 360,
              x: [i === 1 ? -450 : 450, i === 1 ? -450 : 450],
              y: [i === 1 ? -150 : 150, i === 1 ? -150 : 150],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              x: { duration: 25, repeat: Infinity, ease: "linear" },
              y: { duration: 25, repeat: Infinity, ease: "linear" },
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-cyan-300 font-semibold text-lg">About My Galaxy</span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
            Cosmic Journey
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-96 h-96">
              {/* Interactive image */}
              <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x / 20}deg) rotateX(${-mousePosition.y / 20}deg)`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  src={aboutImage}
                  alt="About Me"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x400?text=About+Me";
                  }}
                />
                
                {/* Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20" />
                
                {/* Floating elements */}
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center"
                    style={{
                      left: `${i * 25}%`,
                      top: `${(i * 30) % 80}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    <span className="text-cyan-300 text-lg">
                      {['💻', '🎨', '🚀'][i - 1]}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Orbiting circles */}
              <motion.div
                className="absolute -inset-12 rounded-full border-2 border-cyan-500/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-black/30 p-8 rounded-3xl border border-cyan-500/20"
          >
            <motion.p 
              className="text-xl text-cyan-100/80 mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {aboutText}
            </motion.p>
            
            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">Cosmic Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-cyan-100 font-medium">{skill.name}</span>
                      <span className="text-cyan-300 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-cyan-900/50 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Tech Stack */}
            <div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'JavaScript', 'Tailwind', 'Firebase', 'Node.js', 'Git', 'Figma'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-500/30"
                  >
                    <span className="text-cyan-200 font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-cyan-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </section>
  );
};

export default About;