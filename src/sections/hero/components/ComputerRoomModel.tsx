import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
import * as THREE from "three";

export const ComputerRoomModel = forwardRef<
  THREE.Group,
  ThreeElements["group"]
>((props, ref) => {
  const { nodes, materials } = useGLTF("/models/sci-fi_computer_room.glb");
  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.987}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_2 as THREE.Mesh).geometry}
          material={materials.Desk_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_3 as THREE.Mesh).geometry}
          material={materials.Posters}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_4 as THREE.Mesh).geometry}
          material={materials.Keyboard}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_5 as THREE.Mesh).geometry}
          material={materials.speaker_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_6 as THREE.Mesh).geometry}
          material={materials.BG_Dark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_7 as THREE.Mesh).geometry}
          material={materials.Carpet}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_8 as THREE.Mesh).geometry}
          material={materials.Emission}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_9 as THREE.Mesh).geometry}
          material={materials.Emission_Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_10 as THREE.Mesh).geometry}
          material={materials.Foam_Acoustic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_11 as THREE.Mesh).geometry}
          material={materials.Foam_Acoustic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_12 as THREE.Mesh).geometry}
          material={materials.Trim_Sheet_Wall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_13 as THREE.Mesh).geometry}
          material={materials.Monitor_Single}
        />
      </group>
    </group>
  );
});

useGLTF.preload("/models/sci-fi_computer_room.glb");
