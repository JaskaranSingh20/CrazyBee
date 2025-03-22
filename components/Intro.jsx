import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const Intro = ({ref3D, active,isMobile}) => {

  useGSAP(async()=>{
      let BeeModel =  await ref3D?.current;
      // console.log(BeeModel);

      
      if(!isMobile){
        let tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro",
            start: "top 90%",
            end: "bottom 90%",
            scrub: 1,
            // markers: true
        },})

        tl1.to(BeeModel?.position, { x: -1.5, y: -1, z: 2.5, ease: "back.out(1.7)" })
        tl1.to(BeeModel?.rotation, { 
            x: THREE.MathUtils.degToRad(11),
            y: THREE.MathUtils.degToRad(42.55),
            z: THREE.MathUtils.degToRad(8.25),
            ease: "back.out(1.7)" 
        }, "<") // sync with previous
        tl1.to(BeeModel?.scale, { x: 1, y: 1, z: 1, ease: "back.out(1.7)" }, "<");
      }else{
        let tl1 = gsap.timeline({
          scrollTrigger: {
              trigger: "#intro",
              start: "top 90%",
              end: "bottom 90%",
              scrub: 1,
              // markers: true
          }
      });
  
      // Scene 1 Animations
      tl1.to(BeeModel?.position, { x: 1.7, y: -0.75, z: -2, ease: "back.out(1.7)" })
         .to(BeeModel?.rotation, { 
             x: THREE.MathUtils.degToRad(-7), 
             y: THREE.MathUtils.degToRad(-5.5), 
             z: THREE.MathUtils.degToRad(11.5), 
             ease: "back.out(1.7)" 
         }, "<")
         .to(BeeModel?.scale, { x: 2, y: 2, z: 2, ease: "back.out(1.7)" }, "<");
      }
    }, [active, ref3D])

  return (
    <div className="section" id="intro">
        <div className="content-fit">
            <div className="number">01</div>
            <div className="des">
                <div className="title">3d animation design for website</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus voluptas a porro libero
                    recusandae quae, aut ratione, incidunt laborum, necessitatibus similique enim doloremque ex.
                    Laudantium obcaecati aspernatur doloremque illo beatae, maxime hic itaque consequatur nisi
                    accusantium veritatis, voluptatem ratione! Placeat numquam nisi reiciendis harum quibusdam tempore
                    eaque deleniti accusantium, veniam quae eos sed, asperiores laborum corporis odit mollitia
                    consequatur adipisci? Quibusdam quis eos debitis non esse blanditiis laudantium rerum odit tempora?
                    Corrupti maiores velit consequuntur cupiditate reiciendis similique provident repudiandae.</p>
            </div>
        </div>
    </div>
  )
}

export default Intro