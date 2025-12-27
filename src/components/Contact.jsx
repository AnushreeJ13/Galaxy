// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "anushree025btcseai23@igdtuw.ac.in",
      color: "from-purple-500 to-pink-500",
      link: "mailto:anushree025btcseai23@igdtuw.ac.in"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 12345 67890",
      color: "from-indigo-500 to-purple-500",
      link: "tel:+911234567890"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Delhi, India",
      color: "from-violet-500 to-purple-500",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, name: "LinkedIn", url: "#", color: "from-blue-600 to-blue-400" },
    { icon: <FaGithub />, name: "GitHub", url: "#", color: "from-gray-800 to-gray-600" },
    { icon: <FaTwitter />, name: "Twitter", url: "#", color: "from-sky-500 to-blue-400" },
  ];

  return (
    <section id="contact" className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden">
      {/* Purple Planet Background */}
      <motion.div 
        className="absolute right-[-200px] top-1/2 transform -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        animate={{
          rotate: 360,
          y: [0, -25, 0],
        }}
        transition={{
          rotate: { duration: 35, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity },
        }}
      >
        {/* Planet layers */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-900/40 via-violet-800/30 to-indigo-900/20 blur-2xl" />
        <div className="absolute inset-16 rounded-full bg-gradient-to-br from-purple-800 via-violet-700 to-indigo-800 opacity-60" />
        <div className="absolute inset-32 rounded-full bg-gradient-to-br from-purple-500 via-violet-400 to-indigo-400 opacity-80" />
        
        {/* Swirl patterns */}
        <div className="absolute inset-0 rounded-full opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, rgba(192,132,252,0.3) 0%, transparent 50%),
                            radial-gradient(circle at 70% 70%, rgba(139,92,246,0.3) 0%, transparent 50%)`,
            filter: 'blur(40px)',
          }}
        />
        
        {/* Auroras */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, rgba(168,85,247,0.2), rgba(139,92,246,0.3), rgba(124,58,237,0.2))',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
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
            className="inline-block mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-violet-300 font-semibold text-lg">Connect Across Cosmos</span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
            Contact Nebula
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="block backdrop-blur-xl bg-black/30 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center text-xl text-white`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {info.icon}
                  </motion.div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-violet-300 group-hover:text-violet-200 transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-violet-200/80 group-hover:text-violet-100 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-black/30 p-6 rounded-2xl border border-indigo-500/20"
            >
              <h3 className="text-2xl font-bold text-indigo-300 mb-6">Cosmic Connections</h3>
              
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-2xl text-white shadow-lg`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-black/30 p-6 rounded-2xl border border-violet-500/20 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-300 font-semibold">Available for Opportunities</span>
              </div>
              <p className="text-violet-200/70">
                Open to internships, collaborations, and interesting projects
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-black/30 p-8 rounded-3xl border border-indigo-500/20"
          >
            <h3 className="text-3xl font-bold text-indigo-300 mb-2">Send Cosmic Message</h3>
            <p className="text-violet-200/70 mb-8">Your message will travel through the stars to reach me!</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-violet-300 font-medium mb-2">
                  Your Name
                </label>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-violet-500/30 focus:border-violet-500 focus:outline-none text-white transition-all"
                    placeholder="Enter your name"
                    required
                  />
                </motion.div>
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-violet-300 font-medium mb-2">
                  Email Address
                </label>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-violet-500/30 focus:border-violet-500 focus:outline-none text-white transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </motion.div>
              </div>
              
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-violet-300 font-medium mb-2">
                  Your Message
                </label>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-violet-500/30 focus:border-violet-500 focus:outline-none text-white resize-none transition-all"
                    placeholder="Type your message here..."
                    required
                  />
                </motion.div>
              </div>
              
              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all"
              >
                <FaPaperPlane />
                Launch Message
              </motion.button>
              
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-center"
                >
                  <p className="text-green-300 font-semibold">
                    🚀 Message successfully launched into the cosmos! I'll respond soon.
                  </p>
                </motion.div>
              )}
            </form>
            
            {/* Form decorations */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-purple-500/30 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-indigo-500/30 animate-pulse" />
          </motion.div>
        </div>
        
        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-violet-500/20">
            <p className="text-violet-300 text-lg">
              "Let's create something amazing together across the digital cosmos!"
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Floating message bubbles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-indigo-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            x: [0, Math.random() * 50 - 25],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
      
      {/* Message icons */}
      {['📧', '💬', '📱', '✉️'].map((icon, i) => (
        <motion.div
          key={icon}
          className="absolute text-2xl"
          style={{
            left: `${80 - i * 10}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </section>
  );
};

export default Contact;