import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";
import {} from "three";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;
const Test = () => {
  return (
    <Container>
      <Canvas>
        {/* https://threejs.org/docs/#examples/en/controls/OrbitControls.dampingFactor */}
        <OrbitControls enableDamping={true} enableZoom={false} autoRotate />
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 2, 1]} />
        <Cube />
      </Canvas>
    </Container>
  );
};
export default Test;
