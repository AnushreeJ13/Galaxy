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

function App() {
  const [activePlanet, setActivePlanet] = useState("home");
  const [showIntro, setShowIntro] = useState(true);
  const [musicOn, setMusicOn] = useState(false);

  // scroll logic (unchanged)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "experience", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
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
  }, []);

  return (
    <div className="relative bg-black text-white overflow-x-hidden">

      {/* GLOBAL MUSIC */}
      <BackgroundMusic play={musicOn} />

      {/* INTRO */}
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

          <main className="relative z-20">
            <Home />
            <About />
            <Education />
            <Experience />
            <Contact />
          </main>

          <CosmicNav activePlanet={activePlanet} />

          {/* USER CONTROL */}
          <MusicToggle
            playing={musicOn}
            toggle={() => setMusicOn(!musicOn)}
          />
        </>
      )}
    </div>
  );
}

export default App;
