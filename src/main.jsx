/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SkyBox from "./SkyBox";
import Earth from "./Earth";

createRoot(document.getElementById("root")).render(
  <>
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Earth position={[0, 0, 0]} />
      <SkyBox />
      <OrbitControls />
    </Canvas>
  </>
);
