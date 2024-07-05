/* eslint-disable react/no-unknown-property */

const Sun = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshBasicMaterial color="yellow" />
      <pointLight intensity={2} distance={50} decay={2} position={[20, 0, 0]} />
    </mesh>
  );
};

export default Sun;
