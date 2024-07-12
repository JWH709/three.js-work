/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SkyBox from "./SkyBox";
import Earth from "./Earth";
import Sun from "./Sun";
import mercuryMap from "./assets/2k_mercury.jpg";
import venusMap from "./assets/2k_venus_surface.jpg";
import Planet from "./Planet";

createRoot(document.getElementById("root")).render(
  <>
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <SkyBox />
      <Earth />
      <Planet
        map={mercuryMap}
        tilt={0.035}
        orbitRadius={10}
        orbitalSpeed={0.01}
        position={[10, 0, 0]}
        args={[1, 32, 32]}
      />
      <Planet
        map={venusMap}
        tilt={3.1}
        orbitRadius={20}
        orbitalSpeed={0.005}
        position={[20, 0, 0]}
        args={[1, 32, 32]}
      />
      <Sun />
      <OrbitControls />
    </Canvas>
  </>
);
