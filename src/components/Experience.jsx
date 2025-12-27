import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-28 bg-black relative">
      <div className="max-w-4xl mx-auto px-6">

        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="block text-xs tracking-[0.3em] text-neutral-400 mb-4">
            WORK • DUTY • PATH
          </span>

          <h2 className="text-4xl font-semibold text-[#f5f3ee]">
            My Karma
          </h2>

          <div className="w-16 h-[1px] bg-[#e8dcc4] mx-auto mt-8 opacity-70" />
        </motion.div>

        {/* ===== Timeline ===== */}
        <div className="relative pl-10 space-y-20">
          <div
            className="
              absolute left-[14px] top-0 h-full w-[1px]
              bg-gradient-to-b
              from-[#e8dcc4]/60
              via-[#1b2340]/40
              to-transparent
            "
          />

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Dot */}
              <div
                className="
                  absolute -left-[2px] top-3
                  w-4 h-4 rounded-full
                  bg-black
                  border border-[#e8dcc4]
                  shadow-[0_0_12px_rgba(232,220,196,0.45)]
                "
              />

              {/* ===== CARD ===== */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="
                  relative pl-6 border-l border-neutral-700
                  overflow-hidden
                  rounded-xl
                "
              >
                {/* ✅ BACKGROUND (ALWAYS VISIBLE) */}
                <div
                  className="
                    absolute inset-0 z-0
                    bg-gradient-to-br
                    from-[#1b2340]/50
                    via-[#0f172a]/70
                    to-[#e8dcc4]/20
                    transition-all duration-300
                    hover:from-[#121a33]/70
                    hover:via-[#0b1020]/90
                    hover:to-[#e8dcc4]/10
                  "
                />

                {/* CONTENT */}
                <div className="relative z-10 py-6 px-5">
                  <div className="mb-3">
                    <h3 className="text-lg font-medium text-[#f5f3ee]">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[#8aa2ff]/80">
                      {exp.company}
                    </p>
                  </div>

                  <span className="text-xs text-neutral-400 block mb-4">
                    {exp.year}
                  </span>

                  <p className="text-neutral-300 leading-relaxed whitespace-pre-line mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="
                          text-xs text-[#f5f3ee]
                          px-3 py-1 rounded-full
                          bg-[#e8dcc4]/10
                          border border-[#e8dcc4]/30
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
