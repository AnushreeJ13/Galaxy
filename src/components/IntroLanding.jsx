import { motion, AnimatePresence } from "framer-motion";

const IntroLanding = ({ onStart }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.4 }}
      >
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">

          {/* ===== Lotus Petals ===== */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-40 h-40 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(250,204,21,0.25) 0%, transparent 70%)",
                transform: `rotate(${i * 60}deg) translateY(-90px)`,
                filter: "blur(12px)",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{
                delay: 0.6 + i * 0.15,
                duration: 1.6,
                ease: "easeOut",
              }}
            />
          ))}

          {/* ===== Inner Calm Core ===== */}
          <motion.div
            className="absolute w-56 h-56 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(253,224,71,0.35) 0%, transparent 65%)",
              filter: "blur(30px)",
            }}
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* ===== Flute Breath Line ===== */}
          <motion.div
            className="absolute w-64 h-[3px] rounded-full
                       bg-gradient-to-r from-transparent via-yellow-300/80 to-transparent"
            animate={{
              opacity: [0.3, 0.9, 0.3],
              width: ["220px", "260px", "220px"],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* ===== Begin Button ===== */}
          {/* ===== Begin Button (Refined, Light) ===== */}
<motion.button
  onClick={onStart}
  initial={{ opacity: 0, y: 14 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.8, duration: 0.9 }}
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
  className="
    relative z-10
    px-10 py-2.5
    rounded-full
    bg-yellow-300/90
    text-black text-sm tracking-[0.25em]
    font-medium uppercase
    border border-yellow-200/80
    shadow-[0_0_28px_rgba(250,204,21,0.35)]
  "
>
  Begin
</motion.button>


          {/* ===== Subtitle ===== */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ delay: 2.2, duration: 4, repeat: Infinity }}
            className="absolute bottom-6 text-yellow-200/70 text-xs tracking-widest uppercase"
          >
            enter with calm
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroLanding;
