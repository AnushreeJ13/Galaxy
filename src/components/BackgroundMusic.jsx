import { useEffect, useRef } from "react";

const BackgroundMusic = ({ play }) => {
  const audioRef = useRef(null);
  const fadeRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;

    if (play) {
      audio.volume = 0; // start silent
      audio.play().catch(() => {});

      let v = 0;
      fadeRef.current = setInterval(() => {
        if (v < 0.07) {
          v += 0.005; // smooth & slow fade
          audio.volume = v;
        } else {
          audio.volume = 0.07; // exact final volume
          clearInterval(fadeRef.current);
        }
      }, 150);
    } else {
      audio.pause();
      audio.currentTime = 0;
      clearInterval(fadeRef.current);
    }

    return () => clearInterval(fadeRef.current);
  }, [play]);

  return (
    <audio
      ref={audioRef}
      src="/flute.mp3"
      preload="auto"
    />
  );
};

export default BackgroundMusic;
