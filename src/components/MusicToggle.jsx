import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const MusicToggle = ({ playing, toggle, volume, setVolume }) => {
  const [showSlider, setShowSlider] = useState(false);
  const hideTimer = useRef(null);

  const showWithTimer = () => {
    setShowSlider(true);

    if (hideTimer.current) clearTimeout(hideTimer.current);

    hideTimer.current = setTimeout(() => {
      setShowSlider(false);
    }, 6000); // ⏱ 8 seconds
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
    showWithTimer(); // reset timer while adjusting
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <div className="relative flex flex-col items-end">

        {/* 🎚 Volume Slider */}
        <AnimatePresence>
          {playing && showSlider && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="
                absolute bottom-full mb-2 right-0
                bg-black/70 backdrop-blur-md
                border border-yellow-400/30
                rounded-xl px-4 py-3
                shadow-xl
              "
            >
              <div className="flex items-center gap-3">
                <span className="text-yellow-300 text-sm font-medium">
                  {Math.round(volume * 100)}%
                </span>

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-32 accent-yellow-400 cursor-pointer"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🔊 Music Button */}
        <motion.button
          onClick={() => {
            toggle();
            if (!playing) showWithTimer(); // show slider when turning ON
          }}
          onMouseEnter={() => playing && showWithTimer()}
          whileTap={{ scale: 0.9 }}
          className="
            px-6 py-3 rounded-full
            bg-black/70 backdrop-blur-md
            border border-yellow-400/40
            text-yellow-300 text-sm font-medium
            shadow-lg
          "
        >
          {playing ? "🔊 Music On" : "🔇 Music Off"}
        </motion.button>
      </div>
    </div>
  );
};

export default MusicToggle;
