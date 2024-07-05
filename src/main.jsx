/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SkyBox from "./SkyBox";
import Earth from "./Earth";
import Sun from "./Sun";
import Mercury from "./Mercury";
import Venus from "./Venus";

createRoot(document.getElementById("root")).render(
  <>
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <SkyBox />
      <Earth />
      <Venus />
      <Mercury />
      <Sun />
      <OrbitControls />
    </Canvas>
  </>
);
