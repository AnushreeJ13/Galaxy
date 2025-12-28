import React, { useRef, useState, Suspense, useMemo, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Stars,
  OrbitControls,
  Html,
  useTexture,
  Float,
  Sparkles
} from "@react-three/drei";
import * as THREE from "three";
// अपनी image import करें
import myImage from "../assets/krishna3d.png";

// Procedural planet texture generator using canvas
function generatePlanetTexture(keyOrColor, size = 1024) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  const key = (keyOrColor || "#888888").toString().toLowerCase();

  // Helpers
  function noise(intensity = 10) {
    const imageData = ctx.getImageData(0, 0, size, size);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const v = (Math.random() - 0.5) * intensity;
      imageData.data[i] = Math.min(255, Math.max(0, imageData.data[i] + v));
      imageData.data[i + 1] = Math.min(255, Math.max(0, imageData.data[i + 1] + v));
      imageData.data[i + 2] = Math.min(255, Math.max(0, imageData.data[i + 2] + v));
    }
    ctx.putImageData(imageData, 0, 0);
  }

  // Earth-like
  if (key.includes("earth")) {
    // blue ocean base
    const grd = ctx.createLinearGradient(0, 0, 0, size);
    grd.addColorStop(0, "#2c6fb8");
    grd.addColorStop(1, "#084a8a");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, size, size);

    // continents: random blobs
    ctx.fillStyle = "#2c8b3a";
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      const cx = Math.random() * size;
      const cy = Math.random() * size;
      const r = size * (0.05 + Math.random() * 0.12);
      ctx.ellipse(cx, cy, r * (0.6 + Math.random()), r, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    }

    noise(6);
  } else if (key.includes("venus")) {
    // Venus-like: yellow/beige cloudy
    const grd = ctx.createLinearGradient(0, 0, size, size);
    grd.addColorStop(0, "#f3d9a5");
    grd.addColorStop(1, "#e0b96b");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, size, size);

    // soft cloud swirls
    ctx.fillStyle = "rgba(255,255,255,0.08)";
    for (let i = 0; i < 40; i++) {
      ctx.beginPath();
      ctx.ellipse(Math.random() * size, Math.random() * size, size * 0.08, size * 0.04, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    }
    noise(10);
  } else if (key.includes("saturn") || key.includes("jupiter")) {
    // Gas giant bands
    const isJ = key.includes("jupiter");
    const base = isJ ? ["#c7a17a", "#7e4f2f"] : ["#e9d7b9", "#c9a86b"];
    for (let y = 0; y < size; y++) {
      const t = y / size;
      const band = Math.floor(t * (isJ ? 18 : 12));
      ctx.fillStyle = band % 2 === 0 ? base[0] : base[1];
      ctx.fillRect(0, y, size, 1);
    }
    // subtle noise
    noise(8);
  } else {
    // fallback: color gradient
    const hex = keyOrColor;
    const grd = ctx.createRadialGradient(size * 0.35, size * 0.3, size * 0.05, size * 0.5, size * 0.5, size * 0.9);
    grd.addColorStop(0, "#ffffff");
    grd.addColorStop(0.15, hex);
    grd.addColorStop(1, "#000000");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, size, size);
    noise(12);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.encoding = THREE.sRGBEncoding;
  tex.needsUpdate = true;
  return tex;
}

/* ===================== SIMPLE PLANETS CONFIG ===================== */
const PLANETS_CONFIG = [
  { name: "Earth", id: "earth", type: "earth", color: "#2c6fb8", radius: 18, speed: 0.45, size: 3.6, ring: false, navTarget: "home" },
  { name: "Venus", id: "venus", type: "venus", color: "#e0b96b", radius: 30, speed: 0.35, size: 3.2, ring: false, navTarget: "education" },
  { name: "Saturn", id: "saturn", type: "saturn", color: "#d3b37a", radius: 44, speed: 0.27, size: 4.2, ring: true, ringColor: "#e6d7b3", navTarget: "experience" },
  { name: "Jupiter", id: "jupiter", type: "jupiter", color: "#c18f63", radius: 58, speed: 0.18, size: 3.8, ring: false, navTarget: "about" },
];

/* ===================== BACKGROUND IMAGE CLONES ===================== */
function BackgroundImageClones() {
  const texture = useLoader(THREE.TextureLoader, myImage);
  const sphereRef = useRef();

  // Ensure texture colors are correct in three.js renderer
  if (texture) {
    texture.encoding = THREE.sRGBEncoding;
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
  }

  // Slow rotation so background feels alive
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  // Large inverted sphere that surrounds the scene so the image covers 360°
  return (
    <mesh ref={sphereRef} rotation={[0, 0, 0]}>
      <sphereGeometry args={[400, 64, 64]} />
      <meshBasicMaterial
        map={texture || null}
        side={THREE.BackSide}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ===================== SIMPLE STARS ===================== */
function SimpleStars() {
  return (
    <>
      <Stars
        radius={600}
        depth={300}
        count={8000}
        factor={6}
        saturation={0}
        fade
      />
      <Sparkles
        count={500}
        size={4}
        speed={0.6}
        opacity={0.8}
        color="#ffffff"
        scale={350}
      />
    </>
  );
}

/* ===================== COMET (SIMPLE) ===================== */
function Comet() {
  const ref = useRef();
  const lightRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const r = 120;
    // orbit with wobble
    const x = Math.cos(t * 0.9) * (r + Math.sin(t * 0.5) * 10);
    const y = Math.sin(t * 0.6) * 30;
    const z = Math.sin(t * 0.9) * (r + Math.cos(t * 0.4) * 8);
    if (ref.current) ref.current.position.set(x, y, z);
    if (lightRef.current) lightRef.current.position.set(x, y, z);
  });

  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[0.6, 12, 12]} />
        <meshBasicMaterial color="#fffae6" />
      </mesh>
      <pointLight ref={lightRef} color="#ffd6a5" intensity={1.2} distance={60} />
    </group>
  );
}

/* ===================== SIMPLE PLANET WITH RING ===================== */
function SimplePlanet({ planet, onPlanetSelect, onHoverChange }) {
  const groupRef = useRef();
  const planetRef = useRef();
  const [hovered, setHovered] = useState(false);
  // procedural texture memoized per planet type (falls back to color)
  const procTexture = useMemo(() => generatePlanetTexture(planet.type || planet.color || "#888888"), [planet.type, planet.color]);
  const phase = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * planet.speed;
    
    if (groupRef.current) {
      groupRef.current.position.x = planet.radius * Math.cos(t);
      groupRef.current.position.z = planet.radius * Math.sin(t);
      groupRef.current.position.y = Math.sin(t * 2) * 0.5;
    }
    
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.01;
      // pulsing subtle scale for life
      const pulse = 1 + Math.sin(clock.elapsedTime * (0.6 + planet.speed) + phase) * 0.03;
      planetRef.current.scale.setScalar(pulse);
    }
  });

  useEffect(() => {
    // debug: confirm planet was created and its parameters
    // eslint-disable-next-line no-console
    console.log("Planet mounted:", planet.name, { radius: planet.radius, size: planet.size });
  }, [planet.name, planet.radius, planet.size]);

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Planet */}
        <mesh
          ref={planetRef}
          onClick={() => {
            // debug: log navigation target when planet clicked
            // eslint-disable-next-line no-console
            console.log("Planet click:", planet.id, "navTarget:", planet.navTarget);
            if (planet.navTarget) {
              // If parent provided a navigation handler, use it to exit 3D and scroll
              if (onPlanetSelect) return onPlanetSelect(planet.navTarget);
              // otherwise, try to find element in DOM (fallback)
              const el = document.getElementById(planet.navTarget);
              // eslint-disable-next-line no-console
              console.log("Fallback target element found:", !!el, planet.navTarget, el);
              if (el) return el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            if (onPlanetSelect) onPlanetSelect(planet.id);
          }}
          onPointerOver={(e) => {
            setHovered(true);
            document.body.style.cursor = "pointer";
            if (onHoverChange) onHoverChange({ id: planet.id, x: e.clientX, y: e.clientY, target: planet.navTarget || null });
          }}
          onPointerMove={(e) => {
            // update position while moving over the planet
            if (hovered && onHoverChange) onHoverChange({ id: planet.id, x: e.clientX, y: e.clientY, target: planet.navTarget || null });
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = "default";
            if (onHoverChange) onHoverChange(null);
          }}
        >
            <sphereGeometry args={[planet.size, 96, 96]} />
            <meshStandardMaterial
              map={procTexture}
              color={planet.color}
              emissive={planet.color}
              emissiveIntensity={hovered ? 0.35 : 0.12}
              metalness={0.15}
              roughness={0.6}
            />

          {/* Atmosphere glow */}
          <mesh scale={1.18}>
            <sphereGeometry args={[planet.size * 1.18, 32, 32]} />
            <meshBasicMaterial
              color={planet.color}
              transparent
              opacity={0.12}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
              side={THREE.FrontSide}
            />
          </mesh>

          {/* Hover menu for navigation + label */}
          {hovered && (
            <Html position={[0, planet.size + 1.2, 0]} center occlude>
              <div className="bg-black/80 text-white text-sm px-3 py-2 rounded-md border border-white/20 flex flex-col items-center gap-2">
                <div className="text-xs font-medium">Planet: {planet.name}</div>
                <div className="flex gap-2">
                  {planet.navTarget ? (
                    <button
                      onClick={() => {
                        if (onPlanetSelect) return onPlanetSelect(planet.navTarget);
                        const el = document.getElementById(planet.navTarget);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="px-2 py-1 bg-white/8 hover:bg-white/20 rounded text-xs"
                    >
                      {planet.navTarget.charAt(0).toUpperCase() + planet.navTarget.slice(1)}
                    </button>
                  ) : (
                    ["home", "about", "education", "experience", "contact"].map((id) => (
                      <button
                        key={id}
                        onClick={() => {
                          const el = document.getElementById(id);
                          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        className="px-2 py-1 bg-white/8 hover:bg-white/20 rounded text-xs"
                      >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                      </button>
                    ))
                  )}
                </div>
              </div>
            </Html>
          )}
        </mesh>
        
        {/* Ring */}
        {planet.ring && (
          <mesh rotation={[Math.PI / 2.5, 0, 0]}>
            <ringGeometry args={[planet.size + 0.3, planet.size + 0.7, 32]} />
            <meshBasicMaterial
              color={planet.ringColor || "#ffffff"}
              side={THREE.DoubleSide}
              transparent
              opacity={0.6}
            />
          </mesh>
        )}
        
        {/* Hover Light */}
        {hovered && (
          <pointLight
            position={[0, 0, 0]}
            color={planet.color}
            intensity={1}
            distance={8}
          />
        )}
      </Float>
    </group>
  );
}

/* ===================== SIMPLE ORBIT RINGS ===================== */
function SimpleOrbitRings() {
  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      {PLANETS_CONFIG.map((planet, i) => (
        <mesh key={i}>
          {/* thinner orbit ring for better balance */}
          <ringGeometry args={[planet.radius - 0.2, planet.radius + 0.2, 128]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.08}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ===================== IMAGE PLANET (SPECIAL) ===================== */
function ImagePlanet({ planet, onPlanetSelect, onHoverChange }) {
  const texture = useLoader(THREE.TextureLoader, myImage);
  const groupRef = useRef();
  const planetRef = useRef();
  const [hovered, setHovered] = useState(false);
  const phase = useMemo(() => Math.random() * Math.PI * 2, []);
  const procTexture = useMemo(() => generatePlanetTexture(planet.type || planet.color || "#ffffff", 1024), [planet.type, planet.color]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * planet.speed;
    
    if (groupRef.current) {
      groupRef.current.position.x = planet.radius * Math.cos(t);
      groupRef.current.position.z = planet.radius * Math.sin(t);
      groupRef.current.position.y = Math.sin(t * 2) * 0.5;
    }
    
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.02;
      const pulse = 1 + Math.sin(clock.elapsedTime * (0.7 + planet.speed) + phase) * 0.035;
      planetRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        {/* Image Planet */}
        <mesh
          ref={planetRef}
          onClick={() => {
            // debug: log navigation target when image-planet clicked
            // eslint-disable-next-line no-console
            console.log("ImagePlanet click:", planet.id, "navTarget:", planet.navTarget);
            if (planet.navTarget) {
              if (onPlanetSelect) return onPlanetSelect(planet.navTarget);
              const el = document.getElementById(planet.navTarget);
              // eslint-disable-next-line no-console
              console.log("Fallback target element found:", !!el, planet.navTarget, el);
              if (el) return el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            if (onPlanetSelect) onPlanetSelect(planet.id);
          }}
          onPointerOver={(e) => {
            setHovered(true);
            document.body.style.cursor = "pointer";
            if (onHoverChange) onHoverChange({ id: planet.id, x: e.clientX, y: e.clientY, target: planet.navTarget || null });
          }}
          onPointerMove={(e) => {
            if (hovered && onHoverChange) onHoverChange({ id: planet.id, x: e.clientX, y: e.clientY, target: planet.navTarget || null });
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = "default";
            if (onHoverChange) onHoverChange(null);
          }}
        >
            <sphereGeometry args={[planet.size * 1.6, 96, 96]} />
            <meshStandardMaterial
              map={texture || null}
              emissive="#ffffff"
              emissiveIntensity={hovered ? 0.3 : 0.1}
              metalness={0.45}
              roughness={0.45}
            />
        </mesh>
        
        {/* Glowing Ring */}
        <mesh rotation={[Math.PI / 2.3, 0, 0]}>
          <ringGeometry args={[planet.size * 1.5, planet.size * 1.8, 32]} />
          <meshBasicMaterial
            color="#3b82f6"
            side={THREE.DoubleSide}
            transparent
            opacity={0.8}
          />
        </mesh>
        
        {/* Hover Light */}
        {hovered && (
          <pointLight
            position={[0, 0, 0]}
            color="#ffffff"
            intensity={1.5}
            distance={10}
          />
        )}
      
      {/* Label for image planet (visible on hover) */}
      {hovered && (
        <Html position={[0, planet.size * 1.6 + 0.9, 0]} center occlude>
          <div className="bg-black/60 text-white text-sm px-2 py-1 rounded-md border border-white/20">{planet.name}</div>
        </Html>
      )}
      </Float>
    </group>
  );
}

/* ===================== MAIN SCENE ===================== */
export default function CleanUniverse({ onExit, onPlanetSelect }) {
  const [cameraPos] = useState([0, 20, 50]);
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  return (
    <div className="h-screen w-full bg-black relative overflow-hidden">
      <Canvas camera={{ position: cameraPos, fov: 60 }}>
        <Suspense fallback={
          <Html center>
            <div className="text-white text-lg">Loading...</div>
          </Html>
        }>
          {/* Background Color */}
          <color attach="background" args={["#000010"]} />
          <fog attach="fog" args={["#000010", 10, 500]} />
          
          {/* Basic Lighting */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <directionalLight position={[-30, 50, 10]} intensity={1.2} />
          
          {/* Background Images */}
          <BackgroundImageClones />

          {/* Comet */}
          <Comet />
          
          {/* Stars */}
          <SimpleStars />
          
          {/* Orbit Rings */}
          <SimpleOrbitRings />
          
          {/* Planets (realistic types) */}
          {PLANETS_CONFIG.map((planet) => (
            <SimplePlanet
              key={planet.id}
              planet={planet}
              onPlanetSelect={onPlanetSelect}
              onHoverChange={setHoveredPlanet}
            />
          ))}
          
          {/* Controls */}
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            autoRotate
            autoRotateSpeed={0.3}
            minDistance={20}
            maxDistance={100}
          />
        </Suspense>
      </Canvas>

      {/* Hover HUD: fallback when in-canvas Html may not appear */}
      {hoveredPlanet && (
        (() => {
          const x = Math.min(window.innerWidth - 80, Math.max(40, hoveredPlanet.x));
          const y = Math.max(40, hoveredPlanet.y - 80);
          const target = hoveredPlanet.target || null;
          return (
            <div className="absolute z-50" style={{ left: x, top: y, transform: "translate(-50%, -100%)" }}>
              <div className="bg-black/80 text-white p-2 rounded-md border border-white/20">
              
                <div className="flex gap-1">
                  {target ? (
                    <button
                      onClick={() => {
                        if (onPlanetSelect) return onPlanetSelect(target);
                        const el = document.getElementById(target);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="px-2 py-1 bg-white/8 hover:bg-white/20 rounded text-xs"
                    >
                      {target.charAt(0).toUpperCase() + target.slice(1)}
                    </button>
                  ) : (
                    ["home", "about", "education", "experience", "contact"].map((id) => (
                      <button
                        key={id}
                        onClick={() => {
                          const el = document.getElementById(id);
                          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        className="px-2 py-1 bg-white/8 hover:bg-white/20 rounded text-xs"
                      >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                      </button>
                    ))
                  )}
                </div>
              </div>
            </div>
          );
        })()
      )}

      {/* Simple Exit Button */}
      <button
        onClick={onExit}
        className="
          absolute top-6 left-6 z-50
          px-6 py-2 rounded-lg
          bg-black/50 backdrop-blur-sm
          text-white border border-white/30
          hover:bg-white/10 transition-colors
        "
      >
        ← Exit
      </button>

      {/* Simple Title */}
      <div className="absolute top-6 right-6 z-50 text-right">
        <h1 className="text-white text-xl">My Universe</h1>
        <p className="text-white/60 text-sm">Click planets to explore</p>
      </div>

      {/* Debug: show planet -> navTarget mapping on-screen for verification */}
     
    </div>
  );
}