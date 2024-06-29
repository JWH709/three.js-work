/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";

ReactDOM.render(
  <Canvas>
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10, -10, -10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>,
  document.getElementById("root")
);
