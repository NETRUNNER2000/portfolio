import React from 'react'
import Globe from 'react-globe.gl'

import Button from '../Components/Button'

const About = () => {
  return (
   <section className="c-space my-20">
    <div className="grid xl:grid-cols-3">
       <div className="col-span-1 xl:row-span-3">
        <div className="grid-container">
                <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                <div>
                    <p className="grid-headtext">Hey you already know my name by now</p>
                    <p className="grid-subtext">chuck some corpo fluff in here</p>
                </div>
            </div>
       </div>
       <div className="col-span-1 xl:row-span-3">
        <div className="grid-container">
            <img src="/assets/grid2.png" className="w-full sm:h-[276px] h-fit object-contain"/>
            <div>
                <p className="grid-headtext">Hey you already know my name by now</p>
                <p className="grid-subtext">chuck some corpo fluff in here</p>
            </div>
        </div>
       </div>
       <div className="col-span-1 xl:row-span-4">
        <div className="grid-container">

            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                <Globe
                    height={326}
                    width={326}
                    backgroundColor='rgba(0,0,0,0)'
                    backGroundImageOpacity={0.5}
                    globeImageUrl={"//unpkg.com/three-globe/example/img/earth-night.jpg"}
                    bumpImageUrl={"//unpkg.com/three-globe/example/img/earth-topology.png"}
                    labelsData={[{
                        lat: -33.926, lng:18.423,
                        text: "Thats me",
                        color:'white',
                        size: 200,
                    }]}
                />
            </div>
            <div>
                <p className="grid-headtext">Hey you already know my name by now</p>
                <p className="grid-subtext">chuck some corpo fluff in here</p>
                <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
            </div>
        </div>
       </div>
    </div>
   </section>
  )
}

export default About
