import React, { useEffect, useState } from 'react';
import CosmicBackground from './components/CosmicBackground';
import KrishnaCreator from './components/KrishnaCreator';
import PlanetNavigation from './components/PlanetNavigation';
import DivineHand from './components/DivineHand';
import CosmicNav from './components/CosmicNav';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [activePlanet, setActivePlanet] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActivePlanet(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <CosmicBackground />
      <KrishnaCreator />
      <DivineHand />
      <PlanetNavigation activePlanet={activePlanet} />
      
      <main className="relative z-20">
        <Home />
        <About />
        <Education />
        <Experience />
        <Contact />
      </main>

      <CosmicNav activePlanet={activePlanet} />
    </div>
  );
}

export default App;