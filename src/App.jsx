/* eslint-disable react/no-unknown-property */

// Maps:
import mercuryMap from "./assets/2k_mercury.jpg";
import venusMap from "./assets/2k_venus_surface.jpg";
import marsMap from "./assets/2k_mars.jpg";
import jupiterMap from "./assets/2k_jupiter.jpg";
import saturnMap from "./assets/2k_saturn.jpg";
import uranusMap from "./assets/2k_uranus.jpg";
import neptuneMap from "./assets/2k_neptune.jpg";
// Components:
import { OrbitControls } from "@react-three/drei";
import SkyBox from "./SkyBox";
import Earth from "./Earth";
import Sun from "./Sun";
import Planet from "./Planet";
import CameraConfigs from "./CameraConfigs";
import { Canvas } from "@react-three/fiber";

const App = () => {
  const randomAngle = () => Math.random() * 2 * Math.PI;
  return (
    <>
      <Canvas>
        <SkyBox />
        <Planet
          initialAngle={randomAngle()}
          map={mercuryMap}
          tilt={0.035}
          orbitRadius={10}
          orbitalSpeed={0.01}
          args={[1, 32, 32]}
          name="Mercury"
        />
        <Planet
          initialAngle={randomAngle()}
          map={venusMap}
          tilt={3.1}
          orbitRadius={20}
          orbitalSpeed={0.005}
          args={[1, 32, 32]}
          name="Venus"
        />
        <Earth initialAngle={randomAngle()} orbitalSpeed={0.003} />
        <Planet
          initialAngle={randomAngle()}
          map={marsMap}
          tilt={0.439}
          orbitRadius={40}
          orbitalSpeed={0.0015}
          args={[1.3, 32, 32]}
          name="Mars"
        />
        <Planet
          initialAngle={randomAngle()}
          map={jupiterMap}
          tilt={0.05}
          orbitRadius={55}
          orbitalSpeed={0.0007}
          args={[3, 32, 32]}
          name="Jupiter"
        />
        <Planet
          initialAngle={randomAngle()}
          map={saturnMap}
          tilt={0.466}
          orbitRadius={70}
          orbitalSpeed={0.0003}
          args={[2.5, 32, 32]}
          name="Saturn"
        />
        <Planet
          initialAngle={randomAngle()}
          map={uranusMap}
          tilt={1.29}
          orbitRadius={85}
          orbitalSpeed={0.0002}
          args={[2, 32, 32]}
          name="Uranus"
        />
        <Planet
          initialAngle={randomAngle()}
          map={neptuneMap}
          tilt={0.494}
          orbitRadius={100}
          orbitalSpeed={0.0001}
          args={[2, 32, 32]}
          name="Neptune"
        />
        <Sun />
        <CameraConfigs />
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default App;
