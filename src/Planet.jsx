/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import React from "react";

const Planet = ({ map, tilt, orbitRadius, orbitalSpeed, position, args }) => {
  const meshRef = React.useRef();

  //texture:

  const normalMap = useLoader(THREE.TextureLoader, map);

  //animation:

  React.useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.set(0, 0, tilt);
    }
  }, [tilt]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      //Orbit around the sun:
      const elapsedTime = state.clock.getElapsedTime();
      const x = orbitRadius * Math.cos(elapsedTime * orbitalSpeed);
      const z = orbitRadius * Math.sin(elapsedTime * orbitalSpeed);
      meshRef.current.position.set(x, 0, z);
      //Rotation of the planet:
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  //return:

  return (
    <mesh position={position} ref={meshRef}>
      <sphereGeometry args={args} />
      <meshStandardMaterial map={normalMap} />
    </mesh>
  );
};

export default Planet;
