import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <Canvas>
      {/* ambientLight is now recognized */}
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
    </Canvas>
  );
};

export default CanvasModel;
