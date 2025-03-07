/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import dayMap from "./assets/2k_earth_daymap.jpg";
import normalMap from "./assets/2k_earth_normal_map.jpg";
import specularMap from "./assets/2k_earth_specular_map.jpg";

const Earth = ({ orbitalSpeed }) => {
  const meshRef = React.useRef();

  //Load the earth textures with useLoader:

  const colorMap = useLoader(THREE.TextureLoader, dayMap);
  const normalTexture = useLoader(THREE.TextureLoader, normalMap);
  const specularTexture = useLoader(THREE.TextureLoader, specularMap);

  //Adding tilt to the earth:

  const earthTilt = 0.4101524; //can also just use x * (Math.PI / 180) to convert degrees to radians.

  //Seting the values used for orbiting the sun:

  const orbitRadius = 30; //assuming the radius is eminating from the sun. We're basically using position here.

  React.useEffect(() => {
    //useEffect is used to prevent the tilt from being re-rendered on each frame.
    if (meshRef.current) {
      meshRef.current.rotation.set(0, 0, earthTilt);
    }
  }, []);

  //Animate the rotation with useFrame:

  useFrame((state, delta) => {
    //Quaternion:
    //A quaternion is a complex number system that extends complex numbers, used to represent rotations in 3D graphics. They provide smooth interpolations and avoid singularities.

    const quaternion = new THREE.Quaternion(); //Creates a new quaternion with no values (x,y,z,w)

    //Euler Angle:
    //Used to represent the orintation of an object using three angles (pitch, yaw, and roll)

    quaternion.setFromEuler(meshRef.current.rotation); //This converts the current Euler rotation (x, y, z angles) of the sphere into a quaternion.

    //Rotation Quaternion:

    const rotationQuaternion = new THREE.Quaternion();
    //Vectors are used in 3D graphics for describing position directions and movements.
    //Vector3 is (x,y,z) whereas Vector2 is (x,y), and Vector1 is just x
    rotationQuaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), delta); //Represents a roation around the y axis by an agnle proportional to delta * 0.5, delta being the time between frames

    //Apply the rotation quaternion to the current quaternion:

    quaternion.multiply(rotationQuaternion); //Multiplies initial quaternion with the rotation quaternion. Quaternion multiplication applies one rotation after another

    //Update the mesh's roatation with the new quaternion:
    meshRef.current.rotation.setFromQuaternion(quaternion);

    //Now I'll set the earth's orbit around the sun:
    const elapsedTime = state.clock.getElapsedTime(); //time since the animation started rendering
    const x = orbitRadius * Math.cos(elapsedTime * orbitalSpeed); //cos gets us the x-cordinate on a circle. as elapsed time increases, the angle created by cos increases
    const z = orbitRadius * Math.sin(elapsedTime * orbitalSpeed); //sin gets the z-cordinate. same logic as the previous line
    meshRef.current.position.set(x, 0, z); //applying the numbers
  });

  return (
    <mesh ref={meshRef} scale={1.5} position={[30, 0, 0]}>
      <sphereGeometry args={[1, 128, 128]} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalTexture}
        metalnessMap={specularTexture}
        metalness={0.5}
        roughness={1.5}
      />
    </mesh>
  );
};

export default Earth;
