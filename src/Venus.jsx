/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import venusMap from "./assets/2k_venus_surface.jpg";
import React from "react";

const Venus = () => {
  //texture:

  const map = useLoader(THREE.TextureLoader, venusMap);

  //animation:

  const venusTilt = 3.1;

  const meshRef = React.useRef();

  React.useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.set(0, 0, venusTilt);
    }
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.22;
    }
  });
  return (
    <mesh position={[20, 0, 0]} ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={map} />
    </mesh>
  );
};

export default Venus;
