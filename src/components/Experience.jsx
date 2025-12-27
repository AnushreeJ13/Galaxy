import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">

        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-300 mb-4">
            My Karma
          </h2>
         
          <div className="w-28 h-1 bg-blue-400/40 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* ===== Timeline ===== */}
        <div className="relative border-l border-blue-500/20 pl-8 space-y-16">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-3 w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.6)]" />

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-md border border-blue-500/10 rounded-2xl p-8 hover:border-blue-400/30 transition-all">
                
                {/* Top Row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-200">
                      {exp.role}
                    </h3>
                    <p className="text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-blue-100/50 mt-2 md:mt-0">
                    {exp.year}
                  </span>
                </div>

                {/* Description */}
                <p className="text-blue-100/70 leading-relaxed mb-6 whitespace-pre-line">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1 text-xs rounded-full
                        bg-blue-500/10 text-blue-300
                        border border-blue-500/20
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
