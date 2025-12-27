// src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaUniversity, FaAward } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "Indira Gandhi Delhi Technical University for Women",
      degree: "B.Tech - Computer Science & Engineering (AI)",
      year: "2023 - 2027",
      grade: "CGPA: 9.66",
      icon: <FaUniversity />,
      color: "from-emerald-500 to-green-600",
      achievements: [
        "University Topper",
        "Research Scholar",
        "Technical Club Head"
      ]
    },
    {
      id: 2,
      institution: "Mayo International School",
      degree: "Senior Secondary (Science)",
      year: "2021 - 2023",
      grade: "Percentage: 95.2%",
      icon: <FaGraduationCap />,
      color: "from-green-500 to-teal-600",
      achievements: [
        "School Topper",
        "Science Olympiad Gold",
        "Tech Club President"
      ]
    },
    {
      id: 3,
      institution: "Delhi Public School, Indirapuram",
      degree: "Secondary Education",
      year: "2008 - 2021",
      grade: "Percentage: 98.6%",
      icon: <FaAward />,
      color: "from-teal-500 to-cyan-600",
      achievements: [
        "Academic Excellence",
        "Sports Captain",
        "Cultural Head"
      ]
    }
  ];

  return (
    <section id="education" className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden">
      {/* Green Planet Background */}
      <motion.div 
        className="absolute right-[-250px] top-1/2 transform -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        animate={{
          rotate: 360,
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 45, repeat: Infinity, ease: "linear" },
          y: { duration: 9, repeat: Infinity },
        }}
      >
        {/* Planet layers */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-900/40 via-green-800/30 to-teal-900/20 blur-2xl" />
        <div className="absolute inset-16 rounded-full bg-gradient-to-br from-emerald-800 via-green-700 to-teal-800 opacity-60" />
        <div className="absolute inset-32 rounded-full bg-gradient-to-br from-emerald-500 via-green-400 to-teal-400 opacity-80" />
        
        {/* Forest patterns */}
        <div className="absolute inset-0 rounded-full opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 40%, darkgreen 15%, transparent 20%),
                            radial-gradient(circle at 60% 60%, forestgreen 10%, transparent 15%)`,
            filter: 'blur(10px)',
          }}
        />
        
        {/* Multiple rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-emerald-400/20"
            style={{
              inset: `-${i * 40}px`,
              transform: `rotate(${i * 15}deg)`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
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
            className="inline-block mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-emerald-300 font-semibold text-lg">Academic Universe</span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent">
            Educational Galaxy
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-500 via-green-500 to-teal-500 hidden lg:block" />
          
          {/* Education Cards */}
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}
            >
              {/* Timeline dot */}
              <motion.div
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br ${edu.color} border-4 border-black shadow-lg hidden lg:flex items-center justify-center`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                <div className="w-2 h-2 bg-white rounded-full" />
              </motion.div>
              
              {/* Card */}
              <div className={`backdrop-blur-xl bg-black/30 p-8 rounded-3xl border border-emerald-500/20 shadow-2xl ${
                index % 2 === 0 ? 'lg:mr-1/2 lg:pr-8' : 'lg:ml-1/2 lg:pl-8'
              }`}>
                {/* Card header */}
                <div className={`flex items-center gap-4 mb-6 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center text-2xl text-white`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {edu.icon}
                  </motion.div>
                  
                  <div className={index % 2 === 0 ? 'text-right' : ''}>
                    <h3 className="text-2xl font-bold text-emerald-300">{edu.institution}</h3>
                    <div className="flex items-center gap-2 text-emerald-200 mt-1">
                      <FaCalendarAlt />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </div>
                
                {/* Card body */}
                <div className={`space-y-4 ${index % 2 === 0 ? 'text-right' : ''}`}>
                  <div>
                    <h4 className="text-xl font-semibold text-green-300">{edu.degree}</h4>
                    <p className="text-emerald-200 font-bold mt-2">{edu.grade}</p>
                  </div>
                  
                  {/* Achievements */}
                  <div>
                    <h5 className="text-lg font-semibold text-teal-300 mb-2">Achievements</h5>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                      {edu.achievements.map((achievement, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * idx }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, y: -3 }}
                          className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 text-emerald-200 text-sm"
                        >
                          {achievement}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Connection line */}
                <div className={`absolute top-1/2 w-12 h-1 bg-gradient-to-r ${index % 2 === 0 ? 'from-emerald-500 to-transparent right-0 translate-x-full' : 'from-transparent to-emerald-500 left-0 -translate-x-full'} hidden lg:block`} />
              </div>
              
              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-emerald-400"
                  style={{
                    left: `${index % 2 === 0 ? '30%' : '70%'}`,
                    top: `${20 + i * 15}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>
          ))}
        </div>
        
        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 backdrop-blur-xl bg-black/30 p-8 rounded-3xl border border-emerald-500/20"
        >
          <h3 className="text-3xl font-bold text-center text-emerald-300 mb-8">Academic Excellence</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Overall CGPA", value: "9.66", color: "from-emerald-500 to-green-500" },
              { label: "Projects Completed", value: "24+", color: "from-teal-500 to-cyan-500" },
              { label: "Certifications", value: "15+", color: "from-green-500 to-emerald-500" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20"
              >
                <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                  {stat.value}
                </div>
                <div className="text-emerald-200 text-lg font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Floating books */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            rotate: [0, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: i * 1.5,
          }}
        >
          📚
        </motion.div>
      ))}
    </section>
  );
};

export default Education;