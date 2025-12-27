// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: Timestamp.now(),
      });

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (error) {
      console.error("Firestore Error:", error);
      alert("Message not sent. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "anushree025btcseai23@igdtuw.ac.in",
      color: "from-purple-500 to-pink-500",
      link: "mailto:anushree025btcseai23@igdtuw.ac.in",
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, name: "LinkedIn", url: "https://www.linkedin.com/in/anushree-jain-2990a0285/" },
    { icon: <FaGithub />, name: "GitHub", url: "https://github.com/AnushreeJ13" },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden"
    >
      {/* ===== BACKGROUND (UNCHANGED) ===== */}
      <motion.div
        className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        animate={{ rotate: 360, y: [0, -25, 0] }}
        transition={{
          rotate: { duration: 35, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity },
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-900/40 via-violet-800/30 to-indigo-900/20 blur-2xl" />
        <div className="absolute inset-16 rounded-full bg-gradient-to-br from-purple-800 via-violet-700 to-indigo-800 opacity-60" />
        <div className="absolute inset-32 rounded-full bg-gradient-to-br from-purple-500 via-violet-400 to-indigo-400 opacity-80" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* ===== HEADING ===== */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ===== LEFT ===== */}
          <div className="space-y-8">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.link}
                className="block backdrop-blur-xl bg-black/30 p-6 rounded-2xl border border-purple-500/20"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center text-xl text-white`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-violet-300">
                      {info.title}
                    </h3>
                    <p className="text-violet-200/80">{info.value}</p>
                  </div>
                </div>
              </a>
            ))}

            <div className="flex gap-6 text-2xl text-white/70">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.url} className="hover:text-white">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ===== RIGHT FORM (FIREBASE CONNECTED) ===== */}
          <div className="backdrop-blur-xl bg-black/30 p-8 rounded-3xl border border-indigo-500/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-violet-500/30 text-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-violet-500/30 text-white"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-violet-500/30 text-white resize-none"
              />

              <motion.button
                type="submit"
                disabled={isSaving}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold flex items-center justify-center gap-3"
              >
                <FaPaperPlane />
                {isSaving ? "Sending..." : "Send Message"}
              </motion.button>

              {isSubmitted && (
                <p className="text-green-400 text-center font-semibold">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
