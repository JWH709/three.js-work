/* eslint-disable react/no-unknown-property */
import { GlowShader } from "./GlowShader";
import * as THREE from "three";

const Sun = () => {
  const glowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      c: { type: "f", value: 1.0 },
      p: { type: "f", value: 1.4 },
    },
    vertexShader: GlowShader.vertexShader,
    fragmentShader: GlowShader.fragmentShader,
    side: THREE.FrontSide,
    blending: THREE.AdditiveBlending,
    transparent: true,
  });

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshBasicMaterial color="yellow" />
        <pointLight
          intensity={50}
          distance={1000}
          decay={1}
          position={[20, 0, 0]}
        />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[3.5, 32, 32]} />
        <primitive attach="material" object={glowMaterial} />
      </mesh>
    </>
  );
};

export default Sun;
