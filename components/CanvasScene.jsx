"use client";
import { Suspense, useEffect,  useState } from "react";
import { Canvas } from "@react-three/fiber";
import {  PerspectiveCamera  } from "@react-three/drei"
import Mesh from './Mesh';

export default function CanvasScene({setRef3D, Loader, isMobile}) {

  const [aspect, setAspect] = useState(1); // Default aspect ratio
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      setAspect(window.innerWidth / window.innerHeight);
    }
  }, []);

  return (
    <div  id="container3D">
      <Canvas className='h-2xl w-2xl z-50' >
      <Suspense fallback={Loader}>
        <PerspectiveCamera fov={45} position={[0,1,3]} near={0.01} far={1000} aspect={aspect}/>
        <ambientLight position={[0,0,100]} color={0xffffff} intensity={1.3}/>
        <directionalLight  position={[500, 500, 500]} color={0xffffff} intensity={1} />
        <Mesh setRef3D={setRef3D} isMobile={isMobile}/>
        </Suspense>
      </Canvas>
    </div>
  );
}