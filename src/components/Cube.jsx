import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
const Cube = () => {
  const textRef = useRef();
  // https://docs.pmnd.rs/react-three-fiber/api/hooks
  useFrame(
    state =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      {/* https://threejs.org/docs/#api/en/geometries/BoxGeometry */}
      {/* <boxBufferGeometry attach="geometry" args={[2, 2, 2]} /> */}
      {/* https://stackoverflow.com/questions/49956422/what-is-difference-between-boxbuffergeometry-vs-boxgeometry-in-three-js */}
      <boxGeometry />
      {/* color="#9de" */}
      <meshStandardMaterial>
        {/* https://threejs.org/docs/#api/en/core/Object3D.attach */}
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#dc9ccd"]} />
          <Text ref={textRef} fontSize={2} color="#555">
            YoLo
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};
export default Cube;
