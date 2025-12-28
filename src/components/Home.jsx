import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";
import krishnaImg from "../assets/krishna.png";
import { HERO_CONTENT } from "../constants";

const Home = ({ onEnter3D }) => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black"
    >
      {/* KRISHNA BACKGROUND */}
      <img
        src={krishnaImg}
        alt="Krishna Cosmic Background"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/95" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-28 pb-40 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-20 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
              bg-black/70 backdrop-blur-md
              p-8 lg:p-9 rounded-3xl
              border border-yellow-300/30
              shadow-[0_0_90px_rgba(250,204,21,0.18)]
              max-w-md
            "
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Anushree Jain
            </h1>

            <h2 className="text-xl text-gray-200 font-semibold mb-4">
              Aspiring Software Developer
            </h2>

            <p className="text-base text-gray-300 leading-relaxed mb-6 italic">
              {HERO_CONTENT}
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#experience"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-indigo-500 text-black font-bold hover:opacity-90 transition"
              >
                My Journey
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-full border border-yellow-400 text-yellow-300 font-bold hover:bg-yellow-400/10 transition"
              >
                Contact Me
              </a>

              {/* ENTER 3D */}
              <button
                onClick={onEnter3D}
                className="
                  px-8 py-3 rounded-full
                  bg-gradient-to-r from-indigo-500 to-purple-600
                  text-white font-bold
                  shadow-[0_0_45px_rgba(139,92,246,0.6)]
                  hover:scale-105 transition
                "
              >
                Enter 3D Universe ✨
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center lg:ml-6"
          >
            <div className="relative w-[420px] h-[420px] flex items-center justify-center">
              <div className="absolute -inset-10 rounded-full bg-yellow-400/10 blur-3xl" />

              <div
                className="
                  relative w-full h-full rounded-full overflow-hidden
                  border-4 border-yellow-400/60
                  shadow-[0_0_100px_rgba(250,204,21,0.35)]
                "
              >
                <img
                  src={profilePic}
                  alt="Anushree Jain"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="mt-6 max-w-md text-center text-sm text-gray-300 italic leading-relaxed">
              “You are what you believe in. You become that which you believe you can become.”
              <span className="not-italic text-yellow-300 ml-2">
                — Shri Krishna
              </span>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Home;
