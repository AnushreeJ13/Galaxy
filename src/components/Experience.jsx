// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaRocket, FaCode, FaLightbulb } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer Intern",
      company: "Tech Universe Inc.",
      period: "Jan 2024 - Present",
      description: "Developing interactive user interfaces using React and modern web technologies. Collaborating with cross-functional teams to deliver scalable solutions.",
      skills: ["React", "TypeScript", "Tailwind", "Redux", "Git"],
      color: "from-red-500 to-pink-600",
      icon: <FaCode />
    },
    {
      id: 2,
      role: "UI/UX Designer",
      company: "Digital Galaxy Studio",
      period: "Jun 2023 - Dec 2023",
      description: "Designed intuitive user interfaces and user experiences for web and mobile applications. Conducted user research and created prototypes.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Wireframing"],
      color: "from-orange-500 to-red-500",
      icon: <FaLightbulb />
    },
    {
      id: 3,
      role: "Open Source Contributor",
      company: "GitHub Community",
      period: "2022 - Present",
      description: "Contributed to various open-source projects. Fixed bugs, implemented features, and improved documentation.",
      skills: ["Git", "GitHub", "JavaScript", "Documentation", "Collaboration"],
      color: "from-pink-500 to-rose-600",
      icon: <FaRocket />
    }
  ];

  const projects = [
    { name: "Cosmic Dashboard", tech: "React + Firebase", status: "Live" },
    { name: "AI Chat Assistant", tech: "Node.js + OpenAI", status: "In Progress" },
    { name: "Portfolio Website", tech: "React + Framer Motion", status: "Live" },
    { name: "E-commerce Platform", tech: "MERN Stack", status: "Completed" }
  ];

  return (
    <section id="experience" className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden">
      {/* Red Planet Background */}
      <motion.div 
        className="absolute left-[-250px] top-1/2 transform -translate-y-1/2 w-[650px] h-[650px] rounded-full"
        animate={{
          rotate: 360,
          y: [0, 30, 0],
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          y: { duration: 7, repeat: Infinity },
        }}
      >
        {/* Planet layers */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-900/40 via-rose-800/30 to-pink-900/20 blur-2xl" />
        <div className="absolute inset-20 rounded-full bg-gradient-to-br from-red-800 via-rose-700 to-pink-800 opacity-60" />
        <div className="absolute inset-40 rounded-full bg-gradient-to-br from-red-500 via-pink-400 to-rose-400 opacity-80" />
        
        {/* Craters */}
        <div className="absolute inset-0 rounded-full opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 40% 40%, rgba(0,0,0,0.3) 8%, transparent 12%),
                            radial-gradient(circle at 60% 20%, rgba(0,0,0,0.4) 6%, transparent 10%),
                            radial-gradient(circle at 30% 70%, rgba(0,0,0,0.3) 10%, transparent 15%)`,
          }}
        />
        
        {/* Dust storms */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 70% 30%, rgba(255,100,100,0.2) 0%, transparent 50%)',
            filter: 'blur(30px)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
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
            className="inline-block mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-pink-300 font-semibold text-lg">Professional Cosmos</span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-pink-300 to-rose-400 bg-clip-text text-transparent">
            Experience Galaxy
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="backdrop-blur-xl bg-black/30 p-8 rounded-3xl border border-red-500/20 h-full flex flex-col"
            >
              {/* Card header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-xl text-white`}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  {exp.icon}
                </motion.div>
                
                <div>
                  <h3 className="text-xl font-bold text-pink-300">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-pink-200 mt-1">
                    <FaBriefcase className="text-sm" />
                    <span className="text-sm">{exp.company}</span>
                  </div>
                </div>
              </div>
              
              {/* Period */}
              <div className="flex items-center gap-2 text-rose-300 mb-4">
                <FaCalendar />
                <span className="font-medium">{exp.period}</span>
              </div>
              
              {/* Description */}
              <p className="text-pink-100/80 mb-6 flex-grow">
                {exp.description}
              </p>
              
              {/* Skills */}
              <div>
                <h4 className="text-lg font-semibold text-rose-300 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 text-pink-200 text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Card glow effect */}
              <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-br ${exp.color} opacity-20 blur-xl -z-10`} />
            </motion.div>
          ))}
        </div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-black/30 p-8 rounded-3xl border border-rose-500/20"
        >
          <h3 className="text-3xl font-bold text-center text-rose-300 mb-8">Featured Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-red-500/10 to-pink-500/10 p-6 rounded-2xl border border-rose-500/20 text-center"
              >
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-bold text-pink-300 mb-2">{project.name}</h4>
                <p className="text-pink-200/80 text-sm mb-3">{project.tech}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                  project.status === 'Live' 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                    : project.status === 'In Progress'
                    ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                }`}>
                  {project.status}
                </span>
              </motion.div>
            ))}
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-rose-500/20">
            {[
              { label: "Years Experience", value: "2+", suffix: "" },
              { label: "Projects Delivered", value: "15+", suffix: "" },
              { label: "Happy Clients", value: "10+", suffix: "" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-rose-200 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Floating rockets */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -200],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: i * 2,
          }}
        >
          🚀
        </motion.div>
      ))}
      
      {/* Coding symbols */}
      {['</>', '{}', '[]', '()'].map((symbol, i) => (
        <motion.div
          key={symbol}
          className="absolute text-xl text-rose-400 font-mono"
          style={{
            left: `${10 + i * 25}%`,
            top: `${20 + i * 15}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </section>
  );
};

export default Experience;