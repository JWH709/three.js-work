/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import mercuryMap from "./assets/2k_mercury.jpg";
import React from "react";

const Mercury = () => {
  const meshRef = React.useRef();

  //texture:

  const map = useLoader(THREE.TextureLoader, mercuryMap);

  //animation:

  const mercuryTilt = 0.035;

  React.useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.set(0, 0, mercuryTilt);
    }
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  //return:

  return (
    <mesh position={[10, 0, 0]} ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={map} />
    </mesh>
  );
};

export default Mercury;
