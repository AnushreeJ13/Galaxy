import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/about.jpg";

const About = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const aboutText = `
I’m a developer who enjoys building clean, meaningful digital experiences.
I like working at the intersection of logic, design, and usability.

I focus on writing maintainable code, learning continuously,
and creating products that feel simple, thoughtful, and reliable.
`;

  // 🔹 Compact grouped stack
  const techStack = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    Backend: ["MongoDB", "Firebase"],
    Core: ["C++", "Deep Learning (Basics)"],
    Tools: ["Git", "Postman", "Figma"],
  };

  return (
    <section
      ref={containerRef}
      id="about"
      className="
        min-h-screen relative flex items-center justify-center
        bg-gradient-to-b from-black via-indigo-950 to-black
        py-24 overflow-hidden
      "
      onMouseMove={(e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left - rect.width / 2,
          y: e.clientY - rect.top - rect.height / 2,
        });
      }}
    >
      {/* Soft aura */}
      <motion.div
        className="
          absolute left-[-250px] top-1/2 -translate-y-1/2
          w-[700px] h-[700px] rounded-full
          bg-gradient-to-br from-indigo-900/40 via-blue-800/30 to-yellow-400/20
          blur-3xl
        "
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="
              inline-block px-6 py-3 mb-5 rounded-full
              border border-yellow-400/40
              bg-yellow-400/10 text-yellow-300 font-semibold
            "
          >
            About Me
          </span>

          <h2
            className="
              text-5xl lg:text-6xl font-bold
              bg-gradient-to-r from-yellow-300 via-blue-400 to-indigo-400
              bg-clip-text text-transparent mb-5
            "
          >
            Who I Am
          </h2>

          <div className="w-28 h-1 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-blue-400" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          {/* Image */}
<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="flex justify-center"
>
  <div className="relative w-[380px] h-[380px] flex items-center justify-center">
    
    {/* 🌕 Yellow Ring (bigger) */}
    <div
      className="
        absolute
        w-[380px] h-[380px]
        rounded-3xl
        border-[3px] border-yellow-400/60
        shadow-[0_0_50px_rgba(250,204,21,0.25)]
      "
    />

    {/* 🖼 Photo (slightly smaller, on top of ring) */}
    <motion.div
      className="relative w-[340px] h-[340px] rounded-3xl overflow-hidden z-10"
      style={{
        transform: `translateY(${mousePosition.y / 40}px)`,
      }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <img
        src={aboutImage}
        alt="About"
        className="w-full h-full object-cover rounded-3xl"
      />
    </motion.div>
  </div>
</motion.div>


          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              backdrop-blur-xl bg-black/30
              p-9 rounded-3xl border border-yellow-400/20
            "
          >
            <p
              className="
                text-lg text-yellow-100/80
                leading-relaxed mb-8 whitespace-pre-line
              "
            >
              {aboutText}
            </p>

            <h3 className="text-xl font-semibold text-yellow-300 mb-5">
              Tech Stack
            </h3>

            <div className="space-y-4">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-yellow-200 text-sm font-medium mb-2">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3 py-1.5 rounded-full
                          bg-yellow-400/10 border border-yellow-400/30
                          text-yellow-200 text-sm
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
