// "use client"
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function Mesh({setRef3D, isMobile}) {
 
  const fileUrl = "/optimized.glb";
  const mesh = useRef();

  const model = useLoader(GLTFLoader, fileUrl);

    setRef3D(mesh);

  let mixer = new THREE.AnimationMixer( model.scene );
    mixer.clipAction(model.animations[0]).play();

  useFrame(() => {
    mixer? mixer.update(0.01): console.log("mixer is not defined");
  });

  return (
    <mesh   >
      <primitive object={model.scene} ref={mesh} position={ isMobile ? [ -0.4, -2.7, -1.1]:[-0.3, -1.3 , 3]} rotation={isMobile ? [THREE.MathUtils.degToRad(-6),
              THREE.MathUtils.degToRad(75),
             THREE.MathUtils.degToRad(-2)]
              : [ THREE.MathUtils.degToRad(0),
              THREE.MathUtils.degToRad(90),
             THREE.MathUtils.degToRad(0)]} scale={isMobile? [2.5,2.5,2.5]:[1.2,1.2,1.2]}/>
    </mesh>
  );
}