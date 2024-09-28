import React, { Suspense } from 'react'
import { myProjects } from '../constants'
import { useState } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import {Canvas} from '@react-three/fiber'
import DemoComputer from '../components/DemoComputer';
import { Center, OrbitControls } from '@react-three/drei';

const Projects = () => {

    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];
    const projectCount = myProjects.length;
    const handleNavigation = (direction) =>{
        setSelectedProjectIndex((prevIndex) =>{
            if(direction=='previous'){
                return prevIndex == 0 ? projectCount - 1 : prevIndex -1
            }else{
                return prevIndex == projectCount- 1? 0 : prevIndex + 1
            }
        })
    }

  return (
    <section className="c-space my-20">
        <p className="head-text">My Projects</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
            <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                <div className="absolute top-0 right-0">
                    <img src={currentProject.spotlight} className="w-full h-96 object-cover rounded-xl"/>
                </div>
               
                <div className="flex flex-col gap-5 text-white-600 my-5">
                    <p className='text-white text-2xl font-semibold animatedText'>
                        {currentProject.title}
                    </p>
                    <p className='animated-text'>{currentProject.desc}</p>
                    <p className='animated-text'>{currentProject.subdesc}</p>
                </div>
                <div className='flex items-center justify-between flex-wrap gap-5'>
                    <div className="flex items-center gap-3">
                    {currentProject.tags.map((tag, index)=>(
                            <div key={index} className="tech-logo">
                                <img src= {tag.path}/>
                            </div>
                    ))}
                    </div>
                    {currentProject.href && <a className="flex items-center gap-2 cursor-pointer text-white-600 cursor-pointer" href={currentProject.href} target="_blank" rel="noreferrer">
                        <p> Check out the full article</p>
                        <img src={import.meta.env.BASE_URL+"/assets/arrow-up.png"} className="w-3 h-3"/>
                    </a>}
                </div>
                <div className="flex justify-between itemscenter mt-7">
                    <button className="arrow-btn" onClick={()=>handleNavigation('previous')}>
                        <img src={import.meta.env.BASE_URL+"/assets/left-arrow.png"} className="w-4 h-4" alt="" />
                    </button>
                    <button className="arrow-btn" onClick={()=>handleNavigation('next')}>
                        <img src={import.meta.env.BASE_URL+"/assets/right-arrow.png"} className="w-4 h-4" alt="" />
                    </button>
                </div>
            </div>
            <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas>
                       <ambientLight intensity={5}/> 
                       <Center position={[0,0,0]}>
                            <Suspense fallback={CanvasLoader}/>
                            <group scale={2} position={[-3,1,-30]} rotation={[0,-0.5,0]}>
                                <DemoComputer texture={currentProject.texture}/>
                            </group>
                            <OrbitControls maxPolarAngle={Math.PI}/>
                       </Center>
                    </Canvas>
            </div>
        </div>
    </section>
  )
}

export default Projects
