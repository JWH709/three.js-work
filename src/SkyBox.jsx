/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import px from "./assets/cubemap/px.png";
import nx from "./assets/cubemap/nx.png";
import py from "./assets/cubemap/py.png";
import ny from "./assets/cubemap/ny.png";
import pz from "./assets/cubemap/pz.png";
import nz from "./assets/cubemap/nz.png";
import "./main.css";

const SkyBox = () => {
  const textureLoader = useLoader(THREE.TextureLoader, [
    px, //positive x
    nx, //negative x
    py, //positive y
    ny, //negative y
    pz, //positive z
    nz, //negative z
  ]);

  const cubeTexture = new THREE.CubeTexture(textureLoader); //This helps with the continuous issue I keep running into with SkyBoxes.

  console.log(cubeTexture);

  return (
    <mesh>
      <boxGeometry args={[100, 100, 100]} />
      <meshBasicMaterial
        attach="material"
        envMap={cubeTexture}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

export default SkyBox;
