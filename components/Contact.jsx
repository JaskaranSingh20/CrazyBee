import React from 'react'
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const Contact = ({active, ref3D, isMobile}) => {
    
    useGSAP(async()=>{
        let BeeModel =  await ref3D?.current;
        // console.log(BeeModel);
        // let isMobile = window.innerWidth > "500" ? false :true;
        if(!isMobile){

        let tl3 =gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top 90%",
                end: "50% 90%",
                scrub: 1,
                // duration: 2
                // markers: true // Enable/disable as needed
            }
        })
        
        
        tl3.to(BeeModel?.position, { x: -1.9, y: -1.5, z: 2.0, ease: "back.out(1.7)" })
        tl3.to(BeeModel?.rotation, { 
            x: THREE.MathUtils.degToRad(1.31),
            y: THREE.MathUtils.degToRad(27.78),
            z: THREE.MathUtils.degToRad(3.35),
            ease: "back.out(1.7)" 
        }, "<")
        tl3.to(BeeModel?.scale, { x: 1.2, y: 1.2, z: 1.2, ease: "back.out(1.7)" }, "<");
        
        let tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "50% 90%",
                // end: "bottom bottom",
                scrub: 1,
                // duration: 2
                // markers: true // Enable/disable as needed
            }
        })


        tl4.to(BeeModel?.position, { x: 0, y: -0.9, z: 2.3, ease: "back.out(1.7)" })
    tl4.to(BeeModel?.rotation, { 
        x: THREE.MathUtils.degToRad(-9.39),
        y: THREE.MathUtils.degToRad(-53.13),
        z: THREE.MathUtils.degToRad(-2.73),
        ease: "back.out(1.7)" 
    }, "<")
    tl4.to(BeeModel?.scale, { x: 1.3, y: 1.3, z: 1.3, ease: "back.out(1.7)" }, "<");

}else{
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#contact",
            start: "top 90%",
            end: "30% 90%",
            scrub: 1,
            // markers: true
        }
    });

    // Scene 3 Animations
    tl3.to(BeeModel?.position, { x: 0.4, y: -0.55, z: -3, ease: "back.out(1.7)" })
       .to(BeeModel?.rotation, { 
           x: THREE.MathUtils.degToRad(20), 
           y: THREE.MathUtils.degToRad(-9), 
           z: THREE.MathUtils.degToRad(16), 
           ease: "back.out(1.7)" 
       }, "<")
       .to(BeeModel?.scale, { x: 2, y: 2, z: 2, ease: "back.out(1.7)" }, "<");

    // ✅ Scene 4 (Scene 3.2) - Contact Continued
    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#contact",
            start: "60% 90%", // continuation of previous
            end: "bottom 90%",
            scrub: 1,
            // markers: true
        }
    });

    // Scene 4 Animations
    tl4.to(BeeModel?.position, { x: 0, y: -2.6, z: -3, ease: "back.out(1.7)" })
       .to(BeeModel?.rotation, { 
           x: THREE.MathUtils.degToRad(-6), 
           y: THREE.MathUtils.degToRad(-40), 
           z: THREE.MathUtils.degToRad(12.5), 
           ease: "back.out(1.7)" 
       }, "<")
       .to(BeeModel?.scale, { x: 2.1, y: 2.1, z: 2.1, ease: "back.out(1.7)" }, "<");
}

      }, [active, ref3D])


  return (
    <div className="section" id="contact">
        <div className="content-fit">
            <div className="number">03</div>
            <div className="des" id="contactTable">
                <div className="title">CONTACT</div>
                <table>
                    <tbody>

                    <tr>
                        <td>Email</td>
                        <td>jasramgharia20@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>+917027127920</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td>https://jaskaransinghh.netlify.app</td>
                    </tr>
                    {/* <tr>
                        <td>Youtube</td>
                        <td>@developer</td>
                    </tr> */}
                    </tbody>
                </table>
                <div className="sign">Jaskaran Singh</div>
            </div>
        </div>
    </div>
  )
}

export default Contact