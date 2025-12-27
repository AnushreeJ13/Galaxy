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
      grade: "CGPA: 9.73",
      icon: <FaUniversity />,
      color: "from-emerald-500 to-green-600",
    },
    {
      id: 2,
      institution: "Mayo International School",
      degree: "Senior Secondary (Science)",
      year: "2021 - 2023",
      grade: "Percentage: 95.2%",
      icon: <FaGraduationCap />,
      color: "from-green-500 to-teal-600",
    },
    {
      id: 3,
      institution: "Delhi Public School, Indirapuram",
      degree: "Secondary Education",
      year: "2008 - 2021",
      grade: "Percentage: 98.6%",
      icon: <FaAward />,
      color: "from-teal-500 to-cyan-600",
    }
  ];

  return (
    <section
      id="education"
      className="relative flex items-center justify-center py-14 overflow-hidden"
    >
      {/* Planet (smaller) */}
      <motion.div
        className="absolute right-[-180px] top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full"
        animate={{ rotate: 360, y: [0, -14, 0] }}
        transition={{
          rotate: { duration: 45, repeat: Infinity, ease: "linear" },
          y: { duration: 8, repeat: Infinity },
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-900/40 via-green-800/30 to-teal-900/20 blur-xl" />
        <div className="absolute inset-12 rounded-full bg-gradient-to-br from-emerald-800 via-green-700 to-teal-800 opacity-60" />
        <div className="absolute inset-24 rounded-full bg-gradient-to-br from-emerald-500 via-green-400 to-teal-400 opacity-80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-5 py-2 rounded-full bg-white/10 border border-white/20">
            <span className="text-yellow-300 font-semibold text-sm">
              Academic Universe
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
            Educational Galaxy
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-white/20 via-yellow-400 to-cyan-400 hidden lg:block" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative mb-10 ${
                index % 2 === 0
                  ? 'lg:text-right lg:pr-10'
                  : 'lg:text-left lg:pl-10'
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                className={`absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br ${edu.color} border-2 border-black shadow-md hidden lg:flex items-center justify-center`}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </motion.div>

              {/* Card (smaller padding) */}
              <div
                className={`backdrop-blur-xl bg-black/30 p-6 rounded-2xl border border-white/20 shadow-xl ${
                  index % 2 === 0 ? 'lg:mr-1/2' : 'lg:ml-1/2'
                }`}
              >
                {/* Header */}
                <div
                  className={`flex items-center gap-3 mb-4 ${
                    index % 2 === 0 ? 'justify-end' : ''
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center text-xl text-white`}
                  >
                    {edu.icon}
                  </div>

                  <div className={index % 2 === 0 ? 'text-right' : ''}>
                    <h3 className="text-lg font-bold text-white">
                      {edu.institution}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-300 text-sm mt-1">
                      <FaCalendarAlt />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className={index % 2 === 0 ? 'text-right' : ''}>
                  <h4 className="text-base font-semibold text-cyan-300">
                    {edu.degree}
                  </h4>
                  <p className="text-yellow-300 font-bold mt-1 text-sm">
                    {edu.grade}
                  </p>
                </div>

                {/* Connector */}
                <div
                  className={`absolute top-1/2 w-10 h-[2px] bg-gradient-to-r ${
                    index % 2 === 0
                      ? 'from-yellow-400 to-transparent right-0 translate-x-full'
                      : 'from-transparent to-yellow-400 left-0 -translate-x-full'
                  } hidden lg:block`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
