import React, { useState, useEffect } from "react";

import CosmicBackground from "./components/CosmicBackground";
import DivineHand from "./components/DivineHand";
import CosmicNav from "./components/CosmicNav";

import BackgroundMusic from "./components/BackgroundMusic";
import MusicToggle from "./components/MusicToggle";
import IntroLanding from "./components/IntroLanding";

import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ThreeD from "./components/ThreeD";

function App() {
  const [activePlanet, setActivePlanet] = useState("home");
  const [showIntro, setShowIntro] = useState(true);
  const [show3D, setShow3D] = useState(false);

  // 🎵 MUSIC
  const [musicOn, setMusicOn] = useState(false);
  const [volume, setVolume] = useState(0.3);

  /* ================= SCROLL TRACKING ================= */

  useEffect(() => {
    if (show3D) return;

    const handleScroll = () => {
      const sections = ["home", "about", "education", "experience", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        const { offsetTop, offsetHeight } = el;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActivePlanet(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show3D]);

  /* ================= PLANET NAVIGATION ================= */
  // 🌍 CALLED WHEN A PLANET IS CLICKED
  const handlePlanetNavigate = (sectionId) => {
    // 1️⃣ Exit 3D mode
    setShow3D(false);

    // 2️⃣ Scroll AFTER exit animation/frame
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      {/* 🎵 BACKGROUND MUSIC */}
      <BackgroundMusic play={musicOn} volume={volume} />

      {/* 🌌 INTRO */}
      {showIntro && (
        <IntroLanding
          onStart={() => {
            setMusicOn(true);
            setShowIntro(false);
          }}
        />
      )}

      {!showIntro && (
        <>
          <CosmicBackground />
          <DivineHand />

          {/* ================= MAIN VIEW ================= */}
          {show3D ? (
            <ThreeD
              onExit={() => setShow3D(false)}
              onPlanetSelect={handlePlanetNavigate}
            />
          ) : (
            <>
              <main className="relative z-20">
                <Home onEnter3D={() => setShow3D(true)} />
                <About />
                <Education />
                <Experience />
                <Contact />
              </main>

              <CosmicNav activePlanet={activePlanet} />
            </>
          )}

          {/* 🎚 MUSIC CONTROL */}
          <MusicToggle
            playing={musicOn}
            toggle={() => setMusicOn((p) => !p)}
            volume={volume}
            setVolume={setVolume}
          />
        </>
      )}
    </div>
  );
}

export default App;
