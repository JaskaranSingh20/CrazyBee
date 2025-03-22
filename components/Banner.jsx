// "use client"
import Image from 'next/image'
import React from 'react'


const Banner = () => {

  return (
    <div className="section " id="banner">
        <div className="content-fit">
            <div className="title" data-before="WEBSITEDESIGN">3D ANIMATION</div>
        </div>
        <Image src="/optImg/leaf.webp" alt='leaf'  width={500} height={500} className="decorate" id="leftImg"/>
        <Image src="/optImg/flower.webp" alt='flower'  width={550} height={550} className="decorate" id="rightImg"/>

    </div>
  )
}

export default Banner