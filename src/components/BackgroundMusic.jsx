import { useEffect, useRef } from "react";

const BackgroundMusic = ({ play }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.35;

    if (play) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
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
