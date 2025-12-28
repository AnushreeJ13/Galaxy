import { useEffect, useRef } from "react";

const BackgroundMusic = ({ play, volume }) => {
  const audioRef = useRef(null);
  const fadeRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;

    if (fadeRef.current) {
      clearInterval(fadeRef.current);
      fadeRef.current = null;
    }

    // 🎧 Apply logarithmic perception
    const targetVolume = volume * volume;

    if (play) {
      audio.volume = 0;
      audio.play().catch(() => {});

      let v = 0;
      fadeRef.current = setInterval(() => {
        if (v < targetVolume) {
          v += 0.01;
          audio.volume = Math.min(v, targetVolume);
        } else {
          audio.volume = targetVolume;
          clearInterval(fadeRef.current);
        }
      }, 100);
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    return () => fadeRef.current && clearInterval(fadeRef.current);
  }, [play, volume]);

  return <audio ref={audioRef} src="/flute.mp3" preload="auto" />;
};

export default BackgroundMusic;
