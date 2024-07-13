/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const CameraConfigs = ({ cameraLookAt }) => {
  const { camera } = useThree();

  useEffect(() => {
    // Set the initial position and orientation of the camera
    camera.position.set(90, 50, 90); // Adjust these values as needed
    camera.lookAt([0, 0, 0]); // Camera defaults to the sun
  }, [camera, cameraLookAt]);

  return null;
};

export default CameraConfigs;
