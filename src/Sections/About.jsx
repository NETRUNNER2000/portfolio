import React from 'react'
import Globe from 'react-globe.gl'
import { useState } from 'react';
import Button from '../components/Button'

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(' shaahid.adams@gmail.com');
      setHasCopied(true);
  
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    };
  return (
   <section className="c-space my-20">
    <div className="grid xl:grid-cols-3">
       <div className="col-span-1 xl:row-span-3">
        <div className="grid-container">
                <img src={import.meta.env.BASE_URL+"/assets/grid1.png"} alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                <div>
                    <p className="grid-headtext">A Little Bit About Me</p>
                    <p className="grid-subtext">I am a self-taught programmer focused on software solutions, data modelling, systems design, simulations and
machine learning. I thrive in fast paced environments where I can leverage my technical skills while
collaborating with like-minded individuals. I enjoy solving complex problems, discovering insights through
data and finding ways to optimise existing workflows.</p>
                </div>
            </div>
       </div>
       <div className="col-span-1 xl:row-span-3">
        <div className="grid-container">
            <img src={import.meta.env.BASE_URL+"/assets/grid2.png"} className="w-full sm:h-[276px] h-fit object-contain"/>
            <div>
                <p className="grid-headtext">My Go-to Tools</p>
                <p className="grid-subtext">I am most comfortable in C#, Python, SQL, Javascript and R, but have
                                           experience with React Native, Vue.js, Java/Kotlin, C++, Bash, Flutter and Electron.js too.
                                           <br></br> <br></br>
                                           When it comes to data, I have worked with Firebase, Supabase, MS SQL Server, Toad and MySQL.</p>
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
                <p className="grid-headtext">Find Me Everywhere</p>
                <p className="grid-subtext">My international remote working experience has taught me that progress cannot be stopped by borders and passports. My hours are flexible and I accomodate most timezones</p>
                <br></br>
                <p className="grid-subtext">I am fortunate to have a network of friends that live all over the world, so by now I am no stranger to answering a call at 3am!</p>
                <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
            </div>
        </div>
       </div>

       <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src={import.meta.env.BASE_URL+"/assets/grid3.png"} alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Hobbies</p>
              <p className="grid-subtext">
                When im not mashing keyboards and squashing bugs, I love to rock out on my guitar, rock climb with friends and skate. If im not answering my phone, I'm probably out riding my motorcycle or getting lost on a hike.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
        <div className="grid-container">
            <img
              src={import.meta.env.BASE_URL+"/assets/grid4.png"}
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
              <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? import.meta.env.BASE_URL+'/assets/tick.svg' : import.meta.env.BASE_URL+'/assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">shaahid.adams@gmail.com</p>
              </div>
              </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default About
