import {
  Canvas,
  type ThreeElement,
  type ThreeElements,
} from "@react-three/fiber";
import { ComputerRoomModel } from "./ComputerRoomModel";
import {
  OrbitControls,
  Stage,
  FirstPersonControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useEffect, useRef } from "react";
import type { Group } from "three";
import { SpotLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ComputerRoomCanvas() {
  return (
    <Canvas>
      {/* <OrbitControls /> */}
      <EffectComposer>
        <Bloom
          intensity={2.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
      <CanvasInner />
    </Canvas>
  );
}

function CanvasInner() {
  const computerModelRef = useRef<Group | null>(null);
  const spotlightRef = useRef<THREE.SpotLight | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const targetRef = useRef<THREE.Object3D | null>(null);


  useFrame(() => {
    if (!cameraRef.current || !spotlightRef.current || !targetRef.current)
      return;

    cameraRef.current.lookAt(
      cameraRef.current.position.x,
      cameraRef.current.position.y,
      cameraRef.current.position.z,
    );


    spotlightRef.current.position.copy(cameraRef.current.position);
    spotlightRef.current.quaternion.copy(cameraRef.current.quaternion);
    spotlightRef.current.target = targetRef.current;
  });
  return (
    <>
      <PerspectiveCamera
      ref={cameraRef}
        makeDefault
        position={[-0.5, -0.04, 5]}
        zoom={5}
        // lookAt={[0,0,0]}
      ></PerspectiveCamera>
      <SpotLight
        ref={spotlightRef}
        intensity={30}
        penumbra={0.5}
        distance={50}
        position={[0, 0, -5]}
        angle={Math.PI / 25}
        castShadow
      />

      <object3D position={[0, 0, 0]} ref={targetRef} />
      {/* <Stage intensity={0}> */}
      <ComputerRoomModel ref={computerModelRef} position={[0, 0, 0]} />
      {/* </Stage> */}
    </>
  );
}
