import Image from 'next/image'
import React from 'react'
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Description = ({active, ref3D, isMobile}) => {

  useGSAP(async()=>{
    let BeeModel =  await ref3D?.current;
    // console.log(BeeModel);

    // let isMobile = window.innerWidth > "500" ? false :true;

    if(!isMobile){
      let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#description",
            start: "top 90%",
            end: "bottom 95%",
            scrub: 1,
            // duration: 2
            // markers: true
        }
      })
      tl2.to(BeeModel?.position, { x: 1.9, y: -0.75, z: -0.3, ease: "back.out(1.7)" })
        tl2.to(BeeModel?.rotation, { 
            x: THREE.MathUtils.degToRad(11),
            y: THREE.MathUtils.degToRad(-45),
            z: THREE.MathUtils.degToRad(0),
            ease: "back.out(1.7)" 
        }, "<")
        tl2.to(BeeModel?.scale, { x: 2, y: 2, z: 2, ease: "back.out(1.7)" }, "<");

    }else{
      let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#description",
            start: "top 90%",
            end: "50% 80%",
            scrub: 1,
            // markers: true
        }
    });

    // Scene 2 Animations
    tl2.to(BeeModel?.position, { x: -0.25, y: 0.55, z: -2, ease: "back.out(1.7)" })
       .to(BeeModel?.rotation, { 
           x: THREE.MathUtils.degToRad(-36), 
           y: THREE.MathUtils.degToRad(-46), 
           z: THREE.MathUtils.degToRad(-26), 
           ease: "back.out(1.7)" 
       }, "<")
       .to(BeeModel?.scale, { x: 2, y: 2, z: 2, ease: "back.out(1.7)" }, "<");
    }



  
    
  }, [active, ref3D])

  return (
    <div className="section" id="description">
        <div className="content-fit">
            <div className="number">02</div>
            <div className="des">
                <div className="title">WEBDEV</div>
                
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus voluptas a porro libero
                    recusandae quae, aut ratione, incidunt laborum, necessitatibus similique enim doloremque ex.
                    Laudantium obcaecati aspernatur doloremque illo beatae, maxime hic itaque consequatur nisi
                    accusantium veritatis, voluptatem ratione! Placeat numquam nisi reiciendis harum quibusdam tempore
                    eaque deleniti accusantium, veniam quae eos sed, asperiores laborum corporis odit mollitia
                    consequatur adipisci? Quibusdam quis eos debitis non esse blanditiis laudantium rerum odit tempora.</p>
            </div>
        </div>
         <Image src="/optImg/leaf1.png" alt='leaf2'  width={550} height={550} className="decorate" style={{width: "70vw", bottom: 0, right: 0, zIndex: 100}}/>
        
    </div>
  )
}

export default Description