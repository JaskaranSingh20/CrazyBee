"use client"
import Banner from "@/components/Banner";
import CanvasScene from "@/components/CanvasScene";
import Contact from "@/components/Contact";
import Description from "@/components/Description";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import { Html, useProgress } from "@react-three/drei";
import { useState} from "react";


export default function Home() {
  const [ref3D, setRef3D] = useState();
  let isMobile ;
  
  try{
    if (globalThis?.window?.innerWidth) {
     isMobile  = window?.innerWidth > "500" ? false :true;  
   }

  }catch(err){
    console.log(err);
  }
  //   if (typeof window !== "undefined") {
  //     isMobile  = window?.innerWidth > "500" ? false :true;  
  //  }

  
  

  const { progress, active } = useProgress();

  function Loader() {
    return <Html center>{progress.toFixed(1)} % loaded</Html>
  }

  return (
    <>
      <CanvasScene setRef3D={setRef3D} Loader={<Loader/>} isMobile={isMobile}/>
      <Header />
      <Banner />
      <Intro ref3D={ref3D} active={active} isMobile={isMobile}/>
      <Description ref3D={ref3D} active={active} isMobile={isMobile} />
      <Contact ref3D={ref3D} active={active} isMobile={isMobile}/>
    </>
  );
}
