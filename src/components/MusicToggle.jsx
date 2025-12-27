import { motion } from "framer-motion";

const MusicToggle = ({ playing, toggle }) => {
  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      className="
        fixed bottom-24 right-6 z-50
        px-4 py-2 rounded-full
        bg-black/70 backdrop-blur-md
        border border-yellow-400/30
        text-yellow-300 text-sm
      "
    >
      {playing ? "🔊 Music On" : "🔇 Music Off"}
    </motion.button>
  );
};

export default MusicToggle;
