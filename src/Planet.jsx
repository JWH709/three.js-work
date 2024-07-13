/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import React from "react";

const Planet = ({
  map,
  tilt,
  orbitRadius,
  orbitalSpeed,
  args,
  name,
  initialAngle,
}) => {
  const meshRef = React.useRef();

  // Texture:
  const normalMap = useLoader(THREE.TextureLoader, map);

  // Initial position based on the initial angle:
  React.useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.set(0, 0, tilt);
      const x = orbitRadius * Math.cos(initialAngle);
      const z = orbitRadius * Math.sin(initialAngle);
      meshRef.current.position.set(x, 0, z);
    }
  }, [tilt, orbitRadius, initialAngle]);

  // Animation:
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Orbit around the sun:
      const elapsedTime = state.clock.getElapsedTime();
      const x =
        orbitRadius * Math.cos(elapsedTime * orbitalSpeed + initialAngle);
      const z =
        orbitRadius * Math.sin(elapsedTime * orbitalSpeed + initialAngle);
      meshRef.current.position.set(x, 0, z);
      // Rotation of the planet:
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  // Return:
  return (
    <mesh ref={meshRef} onClick={console.log(name)}>
      <sphereGeometry args={args} />
      <meshStandardMaterial map={normalMap} />
    </mesh>
  );
};

export default Planet;
